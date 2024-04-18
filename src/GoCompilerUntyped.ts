import { AssignmentContext, BasicLitContext, BlockContext, ConstDeclContext, DeclarationContext, EosContext, ExpressionContext, ExpressionStmtContext, ForStmtContext, FunctionDeclContext, FunctionLitContext, GoStmtContext, IfStmtContext, OperandContext, PrimaryExprContext, ReturnStmtContext, SendStmtContext, SimpleStmtContext, SourceFileContext, StatementContext, StatementListContext, VarDeclContext } from "./parser/GoParserUntyped";
import { ParseTree, RuleNode, TerminalNode } from "antlr4";
import GoParsUntypedVisitor from "./parser/GoParserUntypedVisitor";
import { global_compile_environment, compile_time_environment_extend, compile_time_environment_position } from "./GoVM";
// @ts-ignore
import { display } from 'sicp';

type Instruction = {
    tag: string;
    [key: string]: any; // This allows for any number of additional properties
};

// Define a list (array) of instructions
type InstructionList = Instruction[];

let wc: number = 0;
// instrs: instruction array
let instrs: InstructionList = [];

let ce: string[][] = [];

export default class GoCompiler extends GoParsUntypedVisitor<void> {

    public compile_program(program: ParseTree) {
        wc = 0;
        instrs = [];
        ce = global_compile_environment;
        this.visit(program);
        return instrs;
    }

    public visitSourceFile = (ctx: SourceFileContext) => {
        const locals = ctx.declaration_list().map(decl => this.scanDeclCtx(decl)).concat(ctx.functionDecl_list().map(decl => decl.IDENTIFIER().getText()))
        instrs[wc++] = { tag: 'ENTER_SCOPE', num: locals.length }
        const ce_old = ce;
        ce = compile_time_environment_extend(locals, ce);
        for (let i = 0; i < ctx.getChildCount(); i++) {
            this.visit(ctx.getChild(i))
        }
        instrs[wc++] = {
            tag: "LD",
            sym: "main",
            pos: compile_time_environment_position(ce, "main")
        }
        instrs[wc++] = { tag: "CALL", arity: 0};
        ce = ce_old;
        instrs[wc++] = { tag: 'EXIT_SCOPE' }
    }

    public visitEos = (ctx: EosContext) => {}

    public visitBasicLit = (ctx: BasicLitContext) => {
        if(ctx.BOOL_LIT() != undefined) {
            instrs[wc++] = { tag: "LDC", val: ctx.getText() == "true" };
        } else if(ctx.DECIMAL_LIT() != undefined || ctx.FLOAT_LIT() != undefined) {
            instrs[wc++] = { tag: "LDC", val: Number(ctx.getText()) };
        } else {
            instrs[wc++] = { tag: "LDC", val: String(JSON.parse(ctx.getText())) };
        }
    }

    public visitFunctionLit = (ctx: FunctionLitContext) => {
        this.lamFunc(ctx)
    }

    public visitFunctionDecl = (ctx: FunctionDeclContext) => {
        this.lamFunc(ctx)
        this.assign(ctx.IDENTIFIER())
    }

    private lamFunc(ctx: FunctionLitContext| FunctionDeclContext){
        const paramCtx = ctx.parameters()
        const prms: string[] = new Array();
        if(paramCtx.identifierList() != null){
            for (const prmDeclCtx of paramCtx.identifierList().IDENTIFIER_list()) {
                prms.push(prmDeclCtx. getText())
            }
        }
        instrs[wc++] = { tag: "LDF", arity: prms.length, addr: wc + 1 };
        const goto_instruction = { tag: 'GOTO', addr: -1 } // addr is not defined yet
        instrs[wc++] = goto_instruction
        const ce_old = ce;
        ce = compile_time_environment_extend(prms, ce);
        this.visitFunctionBlock(ctx.block())
        ce = ce_old;
        goto_instruction.addr = wc;
    }

    public visitBlock = (ctx: BlockContext) => {
        if(ctx.statementList() != null) {
            const locals = this.scan(ctx.statementList());
            instrs[wc++] = { tag: 'ENTER_SCOPE', num: locals.length }
            const ce_old = ce;
            ce = compile_time_environment_extend(locals, ce);
            this.visit(ctx.statementList())
            ce = ce_old;
            instrs[wc++] = { tag: 'EXIT_SCOPE' }
        }
    }

    public visitFunctionBlock = (ctx: BlockContext) => {
        const locals = this.scan(ctx.statementList());
        instrs[wc++] = { tag: 'ENTER_SCOPE', num: locals.length }
        if(ctx.statementList() != null) {
            const ce_old = ce;
            ce = compile_time_environment_extend(locals, ce);
            this.visit(ctx.statementList())
            ce = ce_old;
        }
        // if used with correct syntax, then we need a dummy value that can be poped if the function has no return statement
        instrs[wc++] = { tag: "LDC", val: null };
        instrs[wc++] = { tag: 'RESET' }
    }

    public visitStatementList = (ctx: StatementListContext) => {
        for (const stmCtx of ctx.statement_list()) {
            this.visit(stmCtx)
        }
    }

    public visitStatement = (ctx: StatementContext) => {
                this.visit(ctx.getChild(0))
    }

    public visitSimpleStmt = (ctx: SimpleStmtContext) => {
        this.visit(ctx.getChild(0))
    }

    public visitAssignment = (ctx: AssignmentContext) => {
        this.visit(ctx.expression())

        this.assign(ctx.IDENTIFIER(), ctx.STAR() != undefined)
    }

    public visitExpressionStmt = (ctx: ExpressionStmtContext) => {
        this.visit(ctx.expression())
        instrs[wc++] = {tag: 'POP'}
    }

    public visitSendStmt = (ctx: SendStmtContext) => {
        this.visit(ctx.expression())
        instrs[wc++] = {
            tag: "SEND",
            pos: compile_time_environment_position(ce, ctx.IDENTIFIER().getText())
        };
    }

    public visitReturnStmt = (ctx: ReturnStmtContext) => {
        this.visit(ctx.expression())
        if(ctx.expression().primaryExpr()?.primaryExpr()?.operand()?.IDENTIFIER() != null) {
            instrs[wc - 1].tag = 'TAIL_CALL'
        } else {
            instrs[wc++] = {tag: 'RESET'}
        }
    }

    public visitExpression = (ctx: ExpressionContext) => {
        if(ctx.basicLit() != undefined) {
            this.visit(ctx.basicLit())
        } else if(ctx.primaryExpr()!= undefined){
            this.visit(ctx.primaryExpr())
        } else if(ctx.RECEIVE()) {
            instrs[wc++] = {
                tag: "REC",
                pos: compile_time_environment_position(ce, ctx.IDENTIFIER().getText()),
            };
        }else if(ctx._pointer_op != undefined) {
            if(ctx.STAR() != undefined){
                instrs[wc++] = {tag: 'LD', sym: ctx.IDENTIFIER().getText(), pos: compile_time_environment_position(ce, ctx.IDENTIFIER().getText())}
                instrs[wc++] = {tag: 'LD', sym: ("*" + ctx.IDENTIFIER().getText()), pos: null}
            }else {
                instrs[wc++] = {tag: 'LDC', type: "pointer", val: compile_time_environment_position(ce, ctx.IDENTIFIER().getText())} 
            }
        }else if(ctx._ari_unary_op != undefined || ctx.EXCLAMATION()!= undefined) {
            this.visit(ctx.getChild(1))
            instrs[wc++] = {tag: 'UNOP', sym: ctx.getChild(0).getText()}
        } else if(ctx.L_PAREN() != undefined) {
            this.visit(ctx.expression(0))
        }else{
            this.visit(ctx.getChild(0))
            this.visit(ctx.getChild(2))
            instrs[wc++] = {tag: 'BINOP', sym: ctx.getChild(1).getText()}
        }
    }

    public visitPrimaryExpr = (ctx: PrimaryExprContext) => {
        if(ctx.primaryExpr() != null) {
            this.visit(ctx.primaryExpr())
            if(ctx.arguments().expressionList() != null) {
                for (let arg of ctx.arguments().expressionList()?.expression_list()) {
                    this.visit(arg)
                }
            }
            instrs[wc++] = { tag: "CALL", arity: ctx.arguments().expressionList()?.expression_list().length?? 0  };
        } else {
            this.visit(ctx.operand())
        }
    }

    public visitOperand = (ctx: OperandContext) => {
        if(ctx.IDENTIFIER()!= null) {
            instrs[wc++] = {
				tag: "LD",
				sym: ctx.IDENTIFIER().getText(),
				pos: compile_time_environment_position(ce, ctx.IDENTIFIER().getText()),
			}
        } else if(ctx.functionLit() != null) {
            this.visit(ctx.functionLit())
        }
    }

    public visitForStmt = (ctx: ForStmtContext) => {
        const loop_start = wc
        this.visit(ctx.expression())
        const jump_on_false_instruction = {tag: 'JOF', addr: -1}
        instrs[wc++] = jump_on_false_instruction
        this.visit(ctx.block())
        instrs[wc++] = {tag: 'GOTO', addr: loop_start}
        jump_on_false_instruction.addr = wc
    }

    public visitIfStmt = (ctx: IfStmtContext) => {
        this.visit(ctx.expression());
		const jump_on_false_instruction = { tag: "JOF", addr: -1 };
		instrs[wc++] = jump_on_false_instruction;
		this.visit(ctx.block(0));
        if(ctx.ELSE() != null){
            const goto_instruction = { tag: "GOTO", addr: -1};
            instrs[wc++] = goto_instruction;
            jump_on_false_instruction.addr = wc;
            if(ctx.ifStmt() != null){
                this.visit(ctx.ifStmt())
            } else {
                this.visit(ctx.block(1));
            }
            goto_instruction.addr = wc;
        } else {
            jump_on_false_instruction.addr = wc
        }
    }

    public visitGoStmt = (ctx: GoStmtContext) => {
        this.visit(ctx.primaryExpr())
        if(ctx.arguments().expressionList() != null) {
            for (let arg of ctx.arguments().expressionList()?.expression_list()) {
                this.visit(arg)
            }
        }
        instrs[wc++] = { tag: "GO", arity: ctx.arguments().expressionList()?.expression_list().length?? 0 };
    }

    public visitDeclaration = (ctx: DeclarationContext) => {
        this.visit(ctx.getChild(0))
    }

    public visitConstDecl = (ctx: ConstDeclContext) => {
        this.visit(ctx.expression())

        this.assign(ctx.IDENTIFIER())
    }

    public visitVarDecl = (ctx: VarDeclContext) => {
        if(ctx.expression() != undefined){
            this.visit(ctx.expression())
            this.assign(ctx.IDENTIFIER())
        } else {
            this.assignDefault(ctx.IDENTIFIER(), ctx.type_().IDENTIFIER().getText())
        }
    }

    private assign(sym: TerminalNode, isDeref = false){
        instrs[wc++] = {
            tag: "ASSIGN",
            pos: compile_time_environment_position(ce, sym.getText()),
            isDeref: isDeref,
        };
    }

    private assignDefault(sym: TerminalNode, type: string){
        instrs[wc++] = {
            tag: "ASSIGN",
            pos: compile_time_environment_position(ce, sym.getText()),
            type: type
        };
    }

    private scan = (ctx: (StatementListContext| null)) => {
        var locals: string[] = []
        if (ctx == null || ctx.statement_list().length == 0) {
            return [];
        } else {
            return ctx.statement_list().reduce((acc, stmCtx) => acc.concat(this.scanDeclCtx(stmCtx.declaration())), locals)
        }

    }

    private scanDeclCtx = (ctx: DeclarationContext | null) =>
        ctx?.constDecl() != null
        ? ctx.constDecl().IDENTIFIER().getText()
        : ctx?.varDecl() != null
        ? ctx.varDecl().IDENTIFIER().getText()
        : []

    public visitChildren(node: RuleNode): void {
        throw new Error(`No visit method defined for node type: ${node.constructor.name} (${node.getText()})`)
    }
}