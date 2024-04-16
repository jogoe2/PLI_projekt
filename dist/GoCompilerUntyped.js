"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const GoParserUntypedVisitor_1 = __importDefault(require("./parser/GoParserUntypedVisitor"));
const GoExecuter_1 = require("./GoExecuter");
let wc = 0;
// instrs: instruction array
let instrs = [];
let ce = [];
class GoCompiler extends GoParserUntypedVisitor_1.default {
    constructor() {
        super(...arguments);
        this.visitSourceFile = (ctx) => {
            const locals = ctx.declaration_list().map(decl => this.scanDeclCtx(decl)).concat(ctx.functionDecl_list().map(decl => decl.IDENTIFIER().getText()));
            instrs[wc++] = { tag: 'ENTER_SCOPE', num: locals.length };
            const ce_old = ce;
            ce = (0, GoExecuter_1.compile_time_environment_extend)(locals, ce);
            for (let i = 0; i < ctx.getChildCount(); i++) {
                this.visit(ctx.getChild(i));
            }
            instrs[wc++] = {
                tag: "LD",
                sym: "main",
                pos: (0, GoExecuter_1.compile_time_environment_position)(ce, "main")
            };
            instrs[wc++] = { tag: "CALL", arity: 0 };
            ce = ce_old;
            instrs[wc++] = { tag: 'EXIT_SCOPE' };
        };
        this.visitEos = (ctx) => { };
        this.visitBasicLit = (ctx) => {
            if (ctx.BOOL_LIT() != undefined) {
                instrs[wc++] = { tag: "LDC", val: ctx.getText() == "true" };
            }
            else if (ctx.DECIMAL_LIT() != undefined || ctx.FLOAT_LIT() != undefined) {
                instrs[wc++] = { tag: "LDC", val: Number(ctx.getText()) };
            }
            else {
                instrs[wc++] = { tag: "LDC", val: String(JSON.parse(ctx.getText())) };
            }
        };
        this.visitFunctionLit = (ctx) => {
            this.lamFunc(ctx);
        };
        this.visitFunctionDecl = (ctx) => {
            this.lamFunc(ctx);
            this.assign(ctx.IDENTIFIER());
        };
        this.visitBlock = (ctx) => {
            if (ctx.statementList() != null) {
                const locals = this.scan(ctx.statementList());
                instrs[wc++] = { tag: 'ENTER_SCOPE', num: locals.length };
                const ce_old = ce;
                ce = (0, GoExecuter_1.compile_time_environment_extend)(locals, ce);
                this.visit(ctx.statementList());
                ce = ce_old;
                instrs[wc++] = { tag: 'EXIT_SCOPE' };
            }
        };
        this.visitFunctionBlock = (ctx) => {
            const locals = this.scan(ctx.statementList());
            instrs[wc++] = { tag: 'ENTER_SCOPE', num: locals.length };
            if (ctx.statementList() != null) {
                const ce_old = ce;
                ce = (0, GoExecuter_1.compile_time_environment_extend)(locals, ce);
                this.visit(ctx.statementList());
                ce = ce_old;
            }
            // if used with correct syntax, then we need a dummy value that cna be poped if the function has no return statement
            // type checking prevents that the null is assigned to a value
            instrs[wc++] = { tag: "LDC", val: 100000 };
            instrs[wc++] = { tag: 'RESET' };
        };
        this.visitStatementList = (ctx) => {
            for (const stmCtx of ctx.statement_list()) {
                this.visit(stmCtx);
            }
        };
        this.visitStatement = (ctx) => {
            this.visit(ctx.getChild(0));
        };
        this.visitSimpleStmt = (ctx) => {
            this.visit(ctx.getChild(0));
        };
        this.visitAssignment = (ctx) => {
            this.visit(ctx.expression());
            this.assign(ctx.IDENTIFIER(), ctx.STAR() != undefined);
        };
        this.visitExpressionStmt = (ctx) => {
            this.visit(ctx.expression());
            instrs[wc++] = { tag: 'POP' };
        };
        this.visitSendStmt = (ctx) => {
            this.visit(ctx.expression());
            instrs[wc++] = {
                tag: "SEND",
                pos: (0, GoExecuter_1.compile_time_environment_position)(ce, ctx.IDENTIFIER().getText())
            };
        };
        this.visitReturnStmt = (ctx) => {
            var _a, _b, _c;
            this.visit(ctx.expression());
            if (((_c = (_b = (_a = ctx.expression().primaryExpr()) === null || _a === void 0 ? void 0 : _a.primaryExpr()) === null || _b === void 0 ? void 0 : _b.operand()) === null || _c === void 0 ? void 0 : _c.IDENTIFIER()) != null) {
                instrs[wc - 1].tag = 'TAIL_CALL';
            }
            else {
                instrs[wc++] = { tag: 'RESET' };
            }
        };
        this.visitExpression = (ctx) => {
            if (ctx.basicLit() != undefined) {
                this.visit(ctx.basicLit());
            }
            else if (ctx.primaryExpr() != undefined) {
                this.visit(ctx.primaryExpr());
            }
            else if (ctx.RECEIVE()) {
                instrs[wc++] = {
                    tag: "REC",
                    pos: (0, GoExecuter_1.compile_time_environment_position)(ce, ctx.IDENTIFIER().getText()),
                };
            }
            else if (ctx._pointer_op != undefined) {
                if (ctx.STAR() != undefined) {
                    instrs[wc++] = { tag: 'LD', sym: ctx.IDENTIFIER().getText(), pos: (0, GoExecuter_1.compile_time_environment_position)(ce, ctx.IDENTIFIER().getText()) };
                    instrs[wc++] = { tag: 'LD', sym: ("*" + ctx.IDENTIFIER().getText()), pos: null };
                }
                else {
                    instrs[wc++] = { tag: 'LDC', type: "pointer", val: (0, GoExecuter_1.compile_time_environment_position)(ce, ctx.IDENTIFIER().getText()) };
                }
            }
            else if (ctx._ari_unary_op != undefined || ctx.EXCLAMATION() != undefined) {
                this.visit(ctx.getChild(1));
                instrs[wc++] = { tag: 'UNOP', sym: ctx.getChild(0).getText() };
            }
            else if (ctx.L_PAREN() != undefined) {
                this.visit(ctx.expression(0));
            }
            else {
                this.visit(ctx.getChild(0));
                this.visit(ctx.getChild(2));
                instrs[wc++] = { tag: 'BINOP', sym: ctx.getChild(1).getText() };
            }
        };
        this.visitPrimaryExpr = (ctx) => {
            var _a, _b, _c;
            if (ctx.primaryExpr() != null) {
                this.visit(ctx.primaryExpr());
                if (ctx.arguments().expressionList() != null) {
                    for (let arg of (_a = ctx.arguments().expressionList()) === null || _a === void 0 ? void 0 : _a.expression_list()) {
                        this.visit(arg);
                    }
                }
                instrs[wc++] = { tag: "CALL", arity: (_c = (_b = ctx.arguments().expressionList()) === null || _b === void 0 ? void 0 : _b.expression_list().length) !== null && _c !== void 0 ? _c : 0 };
            }
            else {
                this.visit(ctx.operand());
            }
        };
        this.visitOperand = (ctx) => {
            if (ctx.IDENTIFIER() != null) {
                instrs[wc++] = {
                    tag: "LD",
                    sym: ctx.IDENTIFIER().getText(),
                    pos: (0, GoExecuter_1.compile_time_environment_position)(ce, ctx.IDENTIFIER().getText()),
                };
            }
            else if (ctx.functionLit() != null) {
                this.visit(ctx.functionLit());
            }
        };
        this.visitForStmt = (ctx) => {
            const loop_start = wc;
            this.visit(ctx.expression());
            const jump_on_false_instruction = { tag: 'JOF', addr: -1 };
            instrs[wc++] = jump_on_false_instruction;
            this.visit(ctx.block());
            instrs[wc++] = { tag: 'GOTO', addr: loop_start };
            jump_on_false_instruction.addr = wc;
        };
        this.visitIfStmt = (ctx) => {
            this.visit(ctx.expression());
            const jump_on_false_instruction = { tag: "JOF", addr: -1 };
            instrs[wc++] = jump_on_false_instruction;
            this.visit(ctx.block(0));
            if (ctx.ELSE() != null) {
                const goto_instruction = { tag: "GOTO", addr: -1 };
                instrs[wc++] = goto_instruction;
                jump_on_false_instruction.addr = wc;
                if (ctx.ifStmt() != null) {
                    this.visit(ctx.ifStmt());
                }
                else {
                    this.visit(ctx.block(1));
                }
                goto_instruction.addr = wc;
            }
            else {
                jump_on_false_instruction.addr = wc;
            }
        };
        this.visitGoStmt = (ctx) => {
            var _a, _b, _c;
            this.visit(ctx.primaryExpr());
            if (ctx.arguments().expressionList() != null) {
                for (let arg of (_a = ctx.arguments().expressionList()) === null || _a === void 0 ? void 0 : _a.expression_list()) {
                    this.visit(arg);
                }
            }
            instrs[wc++] = { tag: "GO", arity: (_c = (_b = ctx.arguments().expressionList()) === null || _b === void 0 ? void 0 : _b.expression_list().length) !== null && _c !== void 0 ? _c : 0 };
        };
        this.visitDeclaration = (ctx) => {
            this.visit(ctx.getChild(0));
        };
        this.visitConstDecl = (ctx) => {
            this.visit(ctx.expression());
            this.assign(ctx.IDENTIFIER());
        };
        this.visitVarDecl = (ctx) => {
            if (ctx.expression() != undefined) {
                this.visit(ctx.expression());
                this.assign(ctx.IDENTIFIER());
            }
            else {
                this.assignDefault(ctx.IDENTIFIER(), ctx.type_().IDENTIFIER().getText());
            }
        };
        this.scan = (ctx) => {
            var locals = [];
            if (ctx == null || ctx.statement_list().length == 0) {
                return [];
            }
            else {
                return ctx.statement_list().reduce((acc, stmCtx) => acc.concat(this.scanDeclCtx(stmCtx.declaration())), locals);
            }
        };
        this.scanDeclCtx = (ctx) => (ctx === null || ctx === void 0 ? void 0 : ctx.constDecl()) != null
            ? ctx.constDecl().IDENTIFIER().getText()
            : (ctx === null || ctx === void 0 ? void 0 : ctx.varDecl()) != null
                ? ctx.varDecl().IDENTIFIER().getText()
                : [];
    }
    compile_program(program) {
        wc = 0;
        instrs = [];
        ce = GoExecuter_1.global_compile_environment;
        this.visit(program);
        return instrs;
    }
    lamFunc(ctx) {
        const paramCtx = ctx.parameters();
        const prms = new Array();
        if (paramCtx.identifierList() != null) {
            for (const prmDeclCtx of paramCtx.identifierList().IDENTIFIER_list()) {
                prms.push(prmDeclCtx.getText());
            }
        }
        instrs[wc++] = { tag: "LDF", arity: prms.length, addr: wc + 1 };
        const goto_instruction = { tag: 'GOTO', addr: -1 }; // addr is not defined yet
        instrs[wc++] = goto_instruction;
        const ce_old = ce;
        ce = (0, GoExecuter_1.compile_time_environment_extend)(prms, ce);
        this.visitFunctionBlock(ctx.block());
        ce = ce_old;
        goto_instruction.addr = wc;
    }
    assign(sym, isDeref = false) {
        instrs[wc++] = {
            tag: "ASSIGN",
            pos: (0, GoExecuter_1.compile_time_environment_position)(ce, sym.getText()),
            isDeref: isDeref,
        };
    }
    assignDefault(sym, type) {
        instrs[wc++] = {
            tag: "ASSIGN",
            pos: (0, GoExecuter_1.compile_time_environment_position)(ce, sym.getText()),
            type: type
        };
    }
    visitChildren(node) {
        throw new Error(`No visit method defined for node type: ${node.constructor.name} (${node.getText()})`);
    }
}
exports.default = GoCompiler;
