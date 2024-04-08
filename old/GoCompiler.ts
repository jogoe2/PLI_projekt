import { error } from "console";
import { InputMismatchException, ParseTree, RuleNode } from "antlr4";
import { IntegerContext, BasicLitContext, LiteralContext, FunctionLitContext, BlockContext, StatementListContext, StatementContext, ReturnStmtContext, ExpressionContext, PrimaryExprContext, ForStmtContext, DeclarationContext, ConstDeclContext, ConstSpecContext, VarDeclContext, VarSpecContext, ShortVarDeclContext } from "./parser/GoParser";
import GoParserVisitor from "./parser/GoParserVisitor";

type Instruction = {
    tag: string;
    [key: string]: any; // This allows for any number of additional properties
};

// Define a list (array) of instructions
type InstructionList = Instruction[];

let wc: number = 0;
// instrs: instruction array
let instrs: InstructionList = [];

export default class GoCompiler extends GoParserVisitor<void> {


    public compile_program(program: ParseTree) {
        wc = 0;
        instrs = [];
        this.visit(program);
        instrs[wc] = { tag: "DONE" };
        return instrs;
    }

    public visitInteger = (ctx: IntegerContext) => {
        instrs[wc++] = { tag: "LDC", val: Number(ctx.DECIMAL_LIT().getText()) };
        // missing hex, octal, binary, rune, imaginary
    }

    public visitBasicLit = (ctx: BasicLitContext) => {
        this.visit(ctx.integer())
        // missing string, float, nil
    }

    public visitLiteral = (ctx: LiteralContext) => {
        if (ctx.basicLit() != null) {
            this.visit(ctx.basicLit())
        } else {
            this.visit(ctx.functionLit())
        }
        //missing composite literals (eg casts)
    };

    public visitFunctionLit = (ctx: FunctionLitContext) => {
        const paramCtx = ctx.signature().parameters()
        const prms: (string | null)[] = new Array();
        for (const prmDeclCtx of paramCtx.parameterDecl_list()) {
            prms.push(...(prmDeclCtx.identifierList()?.IDENTIFIER_list().map(t => t.getText())) ?? [null])
        }
        const goto_instruction = { tag: 'GOTO', addr: -1 } // addr is not defined yet
        instrs[wc++] = goto_instruction
        this.visit(ctx.block())
        instrs[wc++] = { tag: 'LDC', val: undefined }
        instrs[wc++] = { tag: 'RESET' }
        goto_instruction.addr = wc;
        instrs[wc++] = { tag: 'LDF', prms: prms, addr: wc + 1 };
    };

    public visitBlock = (ctx: BlockContext) => {
        const locals = this.scan(ctx.statementList());
        console.log(locals);
        instrs[wc++] = { tag: 'ENTER_SCOPE', syms: locals }
        this.visit(ctx.statementList())
        instrs[wc++] = { tag: 'EXIT_SCOPE' }
    }

    public visitStatementList = (ctx: StatementListContext) => {
        for (const stmCtx of ctx.statement_list()) {
            this.visit(stmCtx)
        }
    }

    public visitStatement = (ctx: StatementContext) => {
        /*
        not implemented:    labeledStmt, breakStmt, continueStmt, gotoStmt, fallthroughStmt,
                            switchStmt, selectStmt, deferStmt
        (partially impl.:  declaration, block, simpleStmt, returnStmt, ifStmt, forStmt, goStmt
        */
                this.visit(ctx.getChild(0))
    }

    public visitReturnStmt = (ctx: ReturnStmtContext) => {
        if(ctx.expressionList() == null || ctx.expressionList().expression_list().length != 1) {
            error("return statement can only handle excaly one expression")
        }
        this.visit(ctx.expressionList())
        // test if tailcall
        if(ctx.expressionList().expression(0).primaryExpr()?.primaryExpr()?.operand()?.operandName() != null) {
            instrs[wc - 1].tag = 'TAIL_CALL'
        } else {
            instrs[wc++] = {tag: 'RESET'}
        }
    }

    public visitExpression = (ctx: ExpressionContext) => {
        if(ctx.primaryExpr()){
            this.visit(ctx.primaryExpr())
        } else if(ctx._unary_op != undefined) {
            this.visit(ctx.getChild(0))
            instrs[wc++] = {tag: 'BINOP', sym: ctx.getChild(1).getText()}
        } else if(ctx.LOGICAL_AND()) {
            // TODO
        } else if(ctx.LOGICAL_OR()) {
            // TODO
        } else {
            this.visit(ctx.getChild(0))
            this.visit(ctx.getChild(2))
            instrs[wc++] = {tag: 'BINOP', sym: ctx.getChild(1).getText()}
        }
    }

    public visitPrimaryExpr = (ctx: PrimaryExprContext) => {
        // Todo
    }

    public visitForStmt = (ctx: ForStmtContext) => {
        if(!this.isBoolExpr(ctx.expression())) {
            error("that variant of for statement is not supported")
        }
        const loop_start = wc
        this.visit(ctx.expression())
        const jump_on_false_instruction = {tag: 'JOF', addr: -1}
        instrs[wc++] = jump_on_false_instruction
        this.visit(ctx.block())
        instrs[wc++] = {tag: 'POP'}
        instrs[wc++] = {tag: 'GOTO', addr: loop_start}
        jump_on_false_instruction.addr = wc
    }

    public visitDeclaration = (ctx: DeclarationContext) => {
        /*
        not implemented:    typeDecl
        (partially) impl.:  constDecl, varDecl (behave the same, no real constants)
        */
        this.visit(ctx.getChild(0))
    }

    public visitConstDecl = (ctx: ConstDeclContext) => {
        if(ctx.constSpec_list().length != 1) {
            throw Error("This constant declaration construct is not allowed");
        }
        this.visit(ctx.constSpec(0))
    }

    public visitConstSpec = (ctx: ConstSpecContext) => {
        if(ctx.identifierList().IDENTIFIER_list().length != ctx.expressionList().expression_list().length) {
            throw Error("number of identifiers not the same as expressions");
        }

    }

    public visitVarDecl = (ctx: VarDeclContext) => {
        if(ctx.varSpec_list().length != 1) {
            throw Error("This constant declaration construct is not allowed");
        }
        this.visit(ctx.varSpec(0))
    }

    public visitVarSpec = (ctx: VarSpecContext) => {
        if(ctx.identifierList().IDENTIFIER_list().length != ctx.expressionList().expression_list().length) {
            throw Error("number of identifiers not the same as expressions");
        }

    }


    // helper functions
    private scan = (ctx: (StatementListContext | null)) => {
        var locals: string[] = []
        if (ctx == null || ctx.statement_list().length == 0) {
            return [];
        } else {
            return ctx.statement_list().reduce((acc, stmCtx) => acc.concat(this.scanStmCtx(stmCtx)), locals)
        }

    }

    private scanStmCtx = (ctx: StatementContext) =>
        ctx.declaration()?.constDecl() != null
        ? ctx.declaration().constDecl().constSpec_list().flatMap(this.getIdentifierNames)
        : ctx.declaration()?.varDecl() != null
        ? ctx.declaration().varDecl().varSpec_list().flatMap(this.getIdentifierNames)
        : ctx.simpleStmt()?.shortVarDecl() != null
        ? this.getIdentifierNames(ctx.simpleStmt().shortVarDecl())
        : []

    private isBoolExpr = (ctx: ExpressionContext | null) => 
        (ctx != null && (ctx.LOGICAL_AND() != null || ctx.LOGICAL_OR() != null))



    private getIdentifierNames = ((ctx: (ConstSpecContext | VarSpecContext | ShortVarDeclContext)) =>
        ctx.identifierList().IDENTIFIER_list().map(idCtx => idCtx.getText())
    );

    public visitChildren(node: RuleNode): void {
        throw new Error(`No visit method defined for node type: ${node.constructor.name} (${node.getText()})`)
    }
}