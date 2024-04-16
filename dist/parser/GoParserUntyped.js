"use strict";
// Generated from /Users/johannesgottle/Dokumente/Studium/PLI_NUS/PLI_projekt/src/GoParserUntyped.g4 by ANTLR 4.13.1
// noinspection ES6UnusedImports,JSUnusedGlobalSymbols,JSUnusedLocalSymbols
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.EosContext = exports.ArgumentsContext = exports.FunctionLitContext = exports.String_Context = exports.BasicLitContext = exports.OperandContext = exports.PrimaryExprContext = exports.ExpressionContext = exports.ParametersContext = exports.MethodSpecContext = exports.GoStmtContext = exports.ForStmtContext = exports.IfStmtContext = exports.ReturnStmtContext = exports.AssignmentContext = exports.SendStmtContext = exports.ExpressionStmtContext = exports.SimpleStmtContext = exports.StatementContext = exports.StatementListContext = exports.BlockContext = exports.TypeContext = exports.VarDeclContext = exports.FunctionDeclContext = exports.ExpressionListContext = exports.IdentifierListContext = exports.ConstDeclContext = exports.DeclarationContext = exports.SourceFileContext = void 0;
const antlr4_1 = require("antlr4");
const GoParserBase_1 = __importDefault(require("./GoParserBase"));
class GoParserUntyped extends GoParserBase_1.default {
    get grammarFileName() { return "GoParserUntyped.g4"; }
    get literalNames() { return GoParserUntyped.literalNames; }
    get symbolicNames() { return GoParserUntyped.symbolicNames; }
    get ruleNames() { return GoParserUntyped.ruleNames; }
    get serializedATN() { return GoParserUntyped._serializedATN; }
    createFailedPredicateException(predicate, message) {
        return new antlr4_1.FailedPredicateException(this, predicate, message);
    }
    constructor(input) {
        super(input);
        this._interp = new antlr4_1.ParserATNSimulator(this, GoParserUntyped._ATN, GoParserUntyped.DecisionsToDFA, new antlr4_1.PredictionContextCache());
    }
    // @RuleVersion(0)
    sourceFile() {
        let localctx = new SourceFileContext(this, this._ctx, this.state);
        this.enterRule(localctx, 0, GoParserUntyped.RULE_sourceFile);
        let _la;
        try {
            this.enterOuterAlt(localctx, 1);
            {
                this.state = 66;
                this._errHandler.sync(this);
                _la = this._input.LA(1);
                while ((((_la) & ~0x1F) === 0 && ((1 << _la) & 33619976) !== 0)) {
                    {
                        {
                            this.state = 60;
                            this._errHandler.sync(this);
                            switch (this._input.LA(1)) {
                                case 3:
                                    {
                                        this.state = 58;
                                        this.functionDecl();
                                    }
                                    break;
                                case 16:
                                case 25:
                                    {
                                        this.state = 59;
                                        this.declaration();
                                    }
                                    break;
                                default:
                                    throw new antlr4_1.NoViableAltException(this);
                            }
                            this.state = 62;
                            this.eos();
                        }
                    }
                    this.state = 68;
                    this._errHandler.sync(this);
                    _la = this._input.LA(1);
                }
                this.state = 69;
                this.match(GoParserUntyped.EOF);
            }
        }
        catch (re) {
            if (re instanceof antlr4_1.RecognitionException) {
                localctx.exception = re;
                this._errHandler.reportError(this, re);
                this._errHandler.recover(this, re);
            }
            else {
                throw re;
            }
        }
        finally {
            this.exitRule();
        }
        return localctx;
    }
    // @RuleVersion(0)
    declaration() {
        let localctx = new DeclarationContext(this, this._ctx, this.state);
        this.enterRule(localctx, 2, GoParserUntyped.RULE_declaration);
        try {
            this.state = 73;
            this._errHandler.sync(this);
            switch (this._input.LA(1)) {
                case 16:
                    this.enterOuterAlt(localctx, 1);
                    {
                        this.state = 71;
                        this.constDecl();
                    }
                    break;
                case 25:
                    this.enterOuterAlt(localctx, 2);
                    {
                        this.state = 72;
                        this.varDecl();
                    }
                    break;
                default:
                    throw new antlr4_1.NoViableAltException(this);
            }
        }
        catch (re) {
            if (re instanceof antlr4_1.RecognitionException) {
                localctx.exception = re;
                this._errHandler.reportError(this, re);
                this._errHandler.recover(this, re);
            }
            else {
                throw re;
            }
        }
        finally {
            this.exitRule();
        }
        return localctx;
    }
    // @RuleVersion(0)
    constDecl() {
        let localctx = new ConstDeclContext(this, this._ctx, this.state);
        this.enterRule(localctx, 4, GoParserUntyped.RULE_constDecl);
        try {
            this.enterOuterAlt(localctx, 1);
            {
                this.state = 75;
                this.match(GoParserUntyped.CONST);
                this.state = 76;
                this.match(GoParserUntyped.IDENTIFIER);
                this.state = 77;
                this.match(GoParserUntyped.ASSIGN);
                this.state = 78;
                this.expression(0);
            }
        }
        catch (re) {
            if (re instanceof antlr4_1.RecognitionException) {
                localctx.exception = re;
                this._errHandler.reportError(this, re);
                this._errHandler.recover(this, re);
            }
            else {
                throw re;
            }
        }
        finally {
            this.exitRule();
        }
        return localctx;
    }
    // @RuleVersion(0)
    identifierList() {
        let localctx = new IdentifierListContext(this, this._ctx, this.state);
        this.enterRule(localctx, 6, GoParserUntyped.RULE_identifierList);
        let _la;
        try {
            this.enterOuterAlt(localctx, 1);
            {
                this.state = 80;
                this.match(GoParserUntyped.IDENTIFIER);
                this.state = 85;
                this._errHandler.sync(this);
                _la = this._input.LA(1);
                while (_la === 36) {
                    {
                        {
                            this.state = 81;
                            this.match(GoParserUntyped.COMMA);
                            this.state = 82;
                            this.match(GoParserUntyped.IDENTIFIER);
                        }
                    }
                    this.state = 87;
                    this._errHandler.sync(this);
                    _la = this._input.LA(1);
                }
            }
        }
        catch (re) {
            if (re instanceof antlr4_1.RecognitionException) {
                localctx.exception = re;
                this._errHandler.reportError(this, re);
                this._errHandler.recover(this, re);
            }
            else {
                throw re;
            }
        }
        finally {
            this.exitRule();
        }
        return localctx;
    }
    // @RuleVersion(0)
    expressionList() {
        let localctx = new ExpressionListContext(this, this._ctx, this.state);
        this.enterRule(localctx, 8, GoParserUntyped.RULE_expressionList);
        let _la;
        try {
            this.enterOuterAlt(localctx, 1);
            {
                this.state = 88;
                this.expression(0);
                this.state = 93;
                this._errHandler.sync(this);
                _la = this._input.LA(1);
                while (_la === 36) {
                    {
                        {
                            this.state = 89;
                            this.match(GoParserUntyped.COMMA);
                            this.state = 90;
                            this.expression(0);
                        }
                    }
                    this.state = 95;
                    this._errHandler.sync(this);
                    _la = this._input.LA(1);
                }
            }
        }
        catch (re) {
            if (re instanceof antlr4_1.RecognitionException) {
                localctx.exception = re;
                this._errHandler.reportError(this, re);
                this._errHandler.recover(this, re);
            }
            else {
                throw re;
            }
        }
        finally {
            this.exitRule();
        }
        return localctx;
    }
    // @RuleVersion(0)
    functionDecl() {
        let localctx = new FunctionDeclContext(this, this._ctx, this.state);
        this.enterRule(localctx, 10, GoParserUntyped.RULE_functionDecl);
        try {
            this.enterOuterAlt(localctx, 1);
            {
                this.state = 96;
                this.match(GoParserUntyped.FUNC);
                this.state = 97;
                this.match(GoParserUntyped.IDENTIFIER);
                this.state = 98;
                this.parameters();
                this.state = 99;
                this.block();
            }
        }
        catch (re) {
            if (re instanceof antlr4_1.RecognitionException) {
                localctx.exception = re;
                this._errHandler.reportError(this, re);
                this._errHandler.recover(this, re);
            }
            else {
                throw re;
            }
        }
        finally {
            this.exitRule();
        }
        return localctx;
    }
    // @RuleVersion(0)
    varDecl() {
        let localctx = new VarDeclContext(this, this._ctx, this.state);
        this.enterRule(localctx, 12, GoParserUntyped.RULE_varDecl);
        try {
            this.enterOuterAlt(localctx, 1);
            {
                this.state = 101;
                this.match(GoParserUntyped.VAR);
                this.state = 102;
                this.match(GoParserUntyped.IDENTIFIER);
                this.state = 106;
                this._errHandler.sync(this);
                switch (this._input.LA(1)) {
                    case 28:
                        {
                            this.state = 103;
                            this.type_();
                        }
                        break;
                    case 35:
                        {
                            {
                                this.state = 104;
                                this.match(GoParserUntyped.ASSIGN);
                                this.state = 105;
                                this.expression(0);
                            }
                        }
                        break;
                    default:
                        throw new antlr4_1.NoViableAltException(this);
                }
            }
        }
        catch (re) {
            if (re instanceof antlr4_1.RecognitionException) {
                localctx.exception = re;
                this._errHandler.reportError(this, re);
                this._errHandler.recover(this, re);
            }
            else {
                throw re;
            }
        }
        finally {
            this.exitRule();
        }
        return localctx;
    }
    // @RuleVersion(0)
    type_() {
        let localctx = new TypeContext(this, this._ctx, this.state);
        this.enterRule(localctx, 14, GoParserUntyped.RULE_type);
        try {
            this.enterOuterAlt(localctx, 1);
            {
                this.state = 108;
                this.match(GoParserUntyped.IDENTIFIER);
            }
        }
        catch (re) {
            if (re instanceof antlr4_1.RecognitionException) {
                localctx.exception = re;
                this._errHandler.reportError(this, re);
                this._errHandler.recover(this, re);
            }
            else {
                throw re;
            }
        }
        finally {
            this.exitRule();
        }
        return localctx;
    }
    // @RuleVersion(0)
    block() {
        let localctx = new BlockContext(this, this._ctx, this.state);
        this.enterRule(localctx, 16, GoParserUntyped.RULE_block);
        try {
            this.enterOuterAlt(localctx, 1);
            {
                this.state = 110;
                this.match(GoParserUntyped.L_CURLY);
                this.state = 112;
                this._errHandler.sync(this);
                switch (this._interp.adaptivePredict(this._input, 6, this._ctx)) {
                    case 1:
                        {
                            this.state = 111;
                            this.statementList();
                        }
                        break;
                }
                this.state = 114;
                this.match(GoParserUntyped.R_CURLY);
            }
        }
        catch (re) {
            if (re instanceof antlr4_1.RecognitionException) {
                localctx.exception = re;
                this._errHandler.reportError(this, re);
                this._errHandler.recover(this, re);
            }
            else {
                throw re;
            }
        }
        finally {
            this.exitRule();
        }
        return localctx;
    }
    // @RuleVersion(0)
    statementList() {
        let localctx = new StatementListContext(this, this._ctx, this.state);
        this.enterRule(localctx, 18, GoParserUntyped.RULE_statementList);
        let _la;
        try {
            let _alt;
            this.enterOuterAlt(localctx, 1);
            {
                this.state = 128;
                this._errHandler.sync(this);
                _alt = 1;
                do {
                    switch (_alt) {
                        case 1:
                            {
                                {
                                    this.state = 123;
                                    this._errHandler.sync(this);
                                    switch (this._interp.adaptivePredict(this._input, 9, this._ctx)) {
                                        case 1:
                                            {
                                                this.state = 117;
                                                this._errHandler.sync(this);
                                                _la = this._input.LA(1);
                                                if (_la === 37) {
                                                    {
                                                        this.state = 116;
                                                        this.match(GoParserUntyped.SEMI);
                                                    }
                                                }
                                            }
                                            break;
                                        case 2:
                                            {
                                                this.state = 120;
                                                this._errHandler.sync(this);
                                                _la = this._input.LA(1);
                                                if (_la === 89) {
                                                    {
                                                        this.state = 119;
                                                        this.match(GoParserUntyped.EOS);
                                                    }
                                                }
                                            }
                                            break;
                                        case 3:
                                            {
                                                this.state = 122;
                                                if (!(this.closingBracket())) {
                                                    throw this.createFailedPredicateException("this.closingBracket()");
                                                }
                                            }
                                            break;
                                    }
                                    this.state = 125;
                                    this.statement();
                                    this.state = 126;
                                    this.eos();
                                }
                            }
                            break;
                        default:
                            throw new antlr4_1.NoViableAltException(this);
                    }
                    this.state = 130;
                    this._errHandler.sync(this);
                    _alt = this._interp.adaptivePredict(this._input, 10, this._ctx);
                } while (_alt !== 2 && _alt !== antlr4_1.ATN.INVALID_ALT_NUMBER);
            }
        }
        catch (re) {
            if (re instanceof antlr4_1.RecognitionException) {
                localctx.exception = re;
                this._errHandler.reportError(this, re);
                this._errHandler.recover(this, re);
            }
            else {
                throw re;
            }
        }
        finally {
            this.exitRule();
        }
        return localctx;
    }
    // @RuleVersion(0)
    statement() {
        let localctx = new StatementContext(this, this._ctx, this.state);
        this.enterRule(localctx, 20, GoParserUntyped.RULE_statement);
        try {
            this.state = 139;
            this._errHandler.sync(this);
            switch (this._input.LA(1)) {
                case 16:
                case 25:
                    this.enterOuterAlt(localctx, 1);
                    {
                        this.state = 132;
                        this.declaration();
                    }
                    break;
                case 3:
                case 27:
                case 28:
                case 29:
                case 59:
                case 60:
                case 61:
                case 63:
                case 64:
                case 65:
                case 66:
                case 70:
                case 80:
                case 81:
                    this.enterOuterAlt(localctx, 2);
                    {
                        this.state = 133;
                        this.simpleStmt();
                    }
                    break;
                case 8:
                    this.enterOuterAlt(localctx, 3);
                    {
                        this.state = 134;
                        this.goStmt();
                    }
                    break;
                case 24:
                    this.enterOuterAlt(localctx, 4);
                    {
                        this.state = 135;
                        this.returnStmt();
                    }
                    break;
                case 31:
                    this.enterOuterAlt(localctx, 5);
                    {
                        this.state = 136;
                        this.block();
                    }
                    break;
                case 18:
                    this.enterOuterAlt(localctx, 6);
                    {
                        this.state = 137;
                        this.ifStmt();
                    }
                    break;
                case 22:
                    this.enterOuterAlt(localctx, 7);
                    {
                        this.state = 138;
                        this.forStmt();
                    }
                    break;
                default:
                    throw new antlr4_1.NoViableAltException(this);
            }
        }
        catch (re) {
            if (re instanceof antlr4_1.RecognitionException) {
                localctx.exception = re;
                this._errHandler.reportError(this, re);
                this._errHandler.recover(this, re);
            }
            else {
                throw re;
            }
        }
        finally {
            this.exitRule();
        }
        return localctx;
    }
    // @RuleVersion(0)
    simpleStmt() {
        let localctx = new SimpleStmtContext(this, this._ctx, this.state);
        this.enterRule(localctx, 22, GoParserUntyped.RULE_simpleStmt);
        try {
            this.state = 144;
            this._errHandler.sync(this);
            switch (this._interp.adaptivePredict(this._input, 12, this._ctx)) {
                case 1:
                    this.enterOuterAlt(localctx, 1);
                    {
                        this.state = 141;
                        this.sendStmt();
                    }
                    break;
                case 2:
                    this.enterOuterAlt(localctx, 2);
                    {
                        this.state = 142;
                        this.assignment();
                    }
                    break;
                case 3:
                    this.enterOuterAlt(localctx, 3);
                    {
                        this.state = 143;
                        this.expressionStmt();
                    }
                    break;
            }
        }
        catch (re) {
            if (re instanceof antlr4_1.RecognitionException) {
                localctx.exception = re;
                this._errHandler.reportError(this, re);
                this._errHandler.recover(this, re);
            }
            else {
                throw re;
            }
        }
        finally {
            this.exitRule();
        }
        return localctx;
    }
    // @RuleVersion(0)
    expressionStmt() {
        let localctx = new ExpressionStmtContext(this, this._ctx, this.state);
        this.enterRule(localctx, 24, GoParserUntyped.RULE_expressionStmt);
        try {
            this.enterOuterAlt(localctx, 1);
            {
                this.state = 146;
                this.expression(0);
            }
        }
        catch (re) {
            if (re instanceof antlr4_1.RecognitionException) {
                localctx.exception = re;
                this._errHandler.reportError(this, re);
                this._errHandler.recover(this, re);
            }
            else {
                throw re;
            }
        }
        finally {
            this.exitRule();
        }
        return localctx;
    }
    // @RuleVersion(0)
    sendStmt() {
        let localctx = new SendStmtContext(this, this._ctx, this.state);
        this.enterRule(localctx, 26, GoParserUntyped.RULE_sendStmt);
        try {
            this.enterOuterAlt(localctx, 1);
            {
                this.state = 148;
                localctx._channel = this.match(GoParserUntyped.IDENTIFIER);
                this.state = 149;
                this.match(GoParserUntyped.RECEIVE);
                this.state = 150;
                this.expression(0);
            }
        }
        catch (re) {
            if (re instanceof antlr4_1.RecognitionException) {
                localctx.exception = re;
                this._errHandler.reportError(this, re);
                this._errHandler.recover(this, re);
            }
            else {
                throw re;
            }
        }
        finally {
            this.exitRule();
        }
        return localctx;
    }
    // @RuleVersion(0)
    assignment() {
        let localctx = new AssignmentContext(this, this._ctx, this.state);
        this.enterRule(localctx, 28, GoParserUntyped.RULE_assignment);
        let _la;
        try {
            this.enterOuterAlt(localctx, 1);
            {
                this.state = 153;
                this._errHandler.sync(this);
                _la = this._input.LA(1);
                if (_la === 63) {
                    {
                        this.state = 152;
                        this.match(GoParserUntyped.STAR);
                    }
                }
                this.state = 155;
                this.match(GoParserUntyped.IDENTIFIER);
                this.state = 156;
                this.match(GoParserUntyped.ASSIGN);
                this.state = 157;
                this.expression(0);
            }
        }
        catch (re) {
            if (re instanceof antlr4_1.RecognitionException) {
                localctx.exception = re;
                this._errHandler.reportError(this, re);
                this._errHandler.recover(this, re);
            }
            else {
                throw re;
            }
        }
        finally {
            this.exitRule();
        }
        return localctx;
    }
    // @RuleVersion(0)
    returnStmt() {
        let localctx = new ReturnStmtContext(this, this._ctx, this.state);
        this.enterRule(localctx, 30, GoParserUntyped.RULE_returnStmt);
        try {
            this.enterOuterAlt(localctx, 1);
            {
                this.state = 159;
                this.match(GoParserUntyped.RETURN);
                this.state = 160;
                this.expression(0);
            }
        }
        catch (re) {
            if (re instanceof antlr4_1.RecognitionException) {
                localctx.exception = re;
                this._errHandler.reportError(this, re);
                this._errHandler.recover(this, re);
            }
            else {
                throw re;
            }
        }
        finally {
            this.exitRule();
        }
        return localctx;
    }
    // @RuleVersion(0)
    ifStmt() {
        let localctx = new IfStmtContext(this, this._ctx, this.state);
        this.enterRule(localctx, 32, GoParserUntyped.RULE_ifStmt);
        try {
            this.enterOuterAlt(localctx, 1);
            {
                this.state = 162;
                this.match(GoParserUntyped.IF);
                this.state = 167;
                this._errHandler.sync(this);
                switch (this._interp.adaptivePredict(this._input, 14, this._ctx)) {
                    case 1:
                        {
                            this.state = 163;
                            this.expression(0);
                        }
                        break;
                    case 2:
                        {
                            this.state = 164;
                            this.eos();
                            this.state = 165;
                            this.expression(0);
                        }
                        break;
                }
                this.state = 169;
                this.block();
                this.state = 175;
                this._errHandler.sync(this);
                switch (this._interp.adaptivePredict(this._input, 16, this._ctx)) {
                    case 1:
                        {
                            this.state = 170;
                            this.match(GoParserUntyped.ELSE);
                            this.state = 173;
                            this._errHandler.sync(this);
                            switch (this._input.LA(1)) {
                                case 18:
                                    {
                                        this.state = 171;
                                        this.ifStmt();
                                    }
                                    break;
                                case 31:
                                    {
                                        this.state = 172;
                                        this.block();
                                    }
                                    break;
                                default:
                                    throw new antlr4_1.NoViableAltException(this);
                            }
                        }
                        break;
                }
            }
        }
        catch (re) {
            if (re instanceof antlr4_1.RecognitionException) {
                localctx.exception = re;
                this._errHandler.reportError(this, re);
                this._errHandler.recover(this, re);
            }
            else {
                throw re;
            }
        }
        finally {
            this.exitRule();
        }
        return localctx;
    }
    // @RuleVersion(0)
    forStmt() {
        let localctx = new ForStmtContext(this, this._ctx, this.state);
        this.enterRule(localctx, 34, GoParserUntyped.RULE_forStmt);
        try {
            this.enterOuterAlt(localctx, 1);
            {
                this.state = 177;
                this.match(GoParserUntyped.FOR);
                this.state = 178;
                this.expression(0);
                this.state = 179;
                this.block();
            }
        }
        catch (re) {
            if (re instanceof antlr4_1.RecognitionException) {
                localctx.exception = re;
                this._errHandler.reportError(this, re);
                this._errHandler.recover(this, re);
            }
            else {
                throw re;
            }
        }
        finally {
            this.exitRule();
        }
        return localctx;
    }
    // @RuleVersion(0)
    goStmt() {
        let localctx = new GoStmtContext(this, this._ctx, this.state);
        this.enterRule(localctx, 36, GoParserUntyped.RULE_goStmt);
        try {
            this.enterOuterAlt(localctx, 1);
            {
                this.state = 181;
                this.match(GoParserUntyped.GO);
                this.state = 182;
                this.primaryExpr(0);
                this.state = 183;
                this.arguments();
            }
        }
        catch (re) {
            if (re instanceof antlr4_1.RecognitionException) {
                localctx.exception = re;
                this._errHandler.reportError(this, re);
                this._errHandler.recover(this, re);
            }
            else {
                throw re;
            }
        }
        finally {
            this.exitRule();
        }
        return localctx;
    }
    // @RuleVersion(0)
    methodSpec() {
        let localctx = new MethodSpecContext(this, this._ctx, this.state);
        this.enterRule(localctx, 38, GoParserUntyped.RULE_methodSpec);
        try {
            this.enterOuterAlt(localctx, 1);
            {
                this.state = 185;
                this.match(GoParserUntyped.IDENTIFIER);
                this.state = 186;
                this.parameters();
            }
        }
        catch (re) {
            if (re instanceof antlr4_1.RecognitionException) {
                localctx.exception = re;
                this._errHandler.reportError(this, re);
                this._errHandler.recover(this, re);
            }
            else {
                throw re;
            }
        }
        finally {
            this.exitRule();
        }
        return localctx;
    }
    // @RuleVersion(0)
    parameters() {
        let localctx = new ParametersContext(this, this._ctx, this.state);
        this.enterRule(localctx, 40, GoParserUntyped.RULE_parameters);
        let _la;
        try {
            this.enterOuterAlt(localctx, 1);
            {
                this.state = 188;
                this.match(GoParserUntyped.L_PAREN);
                this.state = 190;
                this._errHandler.sync(this);
                _la = this._input.LA(1);
                if (_la === 28) {
                    {
                        this.state = 189;
                        this.identifierList();
                    }
                }
                this.state = 192;
                this.match(GoParserUntyped.R_PAREN);
            }
        }
        catch (re) {
            if (re instanceof antlr4_1.RecognitionException) {
                localctx.exception = re;
                this._errHandler.reportError(this, re);
                this._errHandler.recover(this, re);
            }
            else {
                throw re;
            }
        }
        finally {
            this.exitRule();
        }
        return localctx;
    }
    // @RuleVersion(0)
    expression(_p) {
        if (_p === undefined) {
            _p = 0;
        }
        let _parentctx = this._ctx;
        let _parentState = this.state;
        let localctx = new ExpressionContext(this, this._ctx, _parentState);
        let _prevctx = localctx;
        let _startState = 42;
        this.enterRecursionRule(localctx, 42, GoParserUntyped.RULE_expression, _p);
        let _la;
        try {
            let _alt;
            this.enterOuterAlt(localctx, 1);
            {
                this.state = 211;
                this._errHandler.sync(this);
                switch (this._interp.adaptivePredict(this._input, 18, this._ctx)) {
                    case 1:
                        {
                            this.state = 195;
                            this.basicLit();
                        }
                        break;
                    case 2:
                        {
                            this.state = 196;
                            this.primaryExpr(0);
                        }
                        break;
                    case 3:
                        {
                            this.state = 197;
                            this.match(GoParserUntyped.RECEIVE);
                            this.state = 198;
                            this.match(GoParserUntyped.IDENTIFIER);
                        }
                        break;
                    case 4:
                        {
                            this.state = 199;
                            this.match(GoParserUntyped.EXCLAMATION);
                            this.state = 200;
                            this.expression(8);
                        }
                        break;
                    case 5:
                        {
                            this.state = 201;
                            localctx._pointer_op = this.match(GoParserUntyped.AMPERSAND);
                            this.state = 202;
                            this.match(GoParserUntyped.IDENTIFIER);
                        }
                        break;
                    case 6:
                        {
                            this.state = 203;
                            localctx._pointer_op = this._input.LT(1);
                            _la = this._input.LA(1);
                            if (!(_la === 63 || _la === 64)) {
                                localctx._pointer_op = this._errHandler.recoverInline(this);
                            }
                            else {
                                this._errHandler.reportMatch(this);
                                this.consume();
                            }
                            this.state = 204;
                            this.match(GoParserUntyped.IDENTIFIER);
                        }
                        break;
                    case 7:
                        {
                            this.state = 205;
                            localctx._ari_unary_op = this._input.LT(1);
                            _la = this._input.LA(1);
                            if (!(_la === 60 || _la === 61)) {
                                localctx._ari_unary_op = this._errHandler.recoverInline(this);
                            }
                            else {
                                this._errHandler.reportMatch(this);
                                this.consume();
                            }
                            this.state = 206;
                            this.expression(5);
                        }
                        break;
                    case 8:
                        {
                            this.state = 207;
                            this.match(GoParserUntyped.L_PAREN);
                            this.state = 208;
                            this.expression(0);
                            this.state = 209;
                            this.match(GoParserUntyped.R_PAREN);
                        }
                        break;
                }
                this._ctx.stop = this._input.LT(-1);
                this.state = 224;
                this._errHandler.sync(this);
                _alt = this._interp.adaptivePredict(this._input, 20, this._ctx);
                while (_alt !== 2 && _alt !== antlr4_1.ATN.INVALID_ALT_NUMBER) {
                    if (_alt === 1) {
                        if (this._parseListeners != null) {
                            this.triggerExitRuleEvent();
                        }
                        _prevctx = localctx;
                        {
                            this.state = 222;
                            this._errHandler.sync(this);
                            switch (this._interp.adaptivePredict(this._input, 19, this._ctx)) {
                                case 1:
                                    {
                                        localctx = new ExpressionContext(this, _parentctx, _parentState);
                                        this.pushNewRecursionContext(localctx, _startState, GoParserUntyped.RULE_expression);
                                        this.state = 213;
                                        if (!(this.precpred(this._ctx, 4))) {
                                            throw this.createFailedPredicateException("this.precpred(this._ctx, 4)");
                                        }
                                        this.state = 214;
                                        localctx._ari_bin_op = this._input.LT(1);
                                        _la = this._input.LA(1);
                                        if (!(((((_la - 53)) & ~0x1F) === 0 && ((1 << (_la - 53)) & 1411) !== 0))) {
                                            localctx._ari_bin_op = this._errHandler.recoverInline(this);
                                        }
                                        else {
                                            this._errHandler.reportMatch(this);
                                            this.consume();
                                        }
                                        this.state = 215;
                                        this.expression(5);
                                    }
                                    break;
                                case 2:
                                    {
                                        localctx = new ExpressionContext(this, _parentctx, _parentState);
                                        this.pushNewRecursionContext(localctx, _startState, GoParserUntyped.RULE_expression);
                                        this.state = 216;
                                        if (!(this.precpred(this._ctx, 3))) {
                                            throw this.createFailedPredicateException("this.precpred(this._ctx, 3)");
                                        }
                                        this.state = 217;
                                        localctx._rel_op = this._input.LT(1);
                                        _la = this._input.LA(1);
                                        if (!(((((_la - 46)) & ~0x1F) === 0 && ((1 << (_la - 46)) & 63) !== 0))) {
                                            localctx._rel_op = this._errHandler.recoverInline(this);
                                        }
                                        else {
                                            this._errHandler.reportMatch(this);
                                            this.consume();
                                        }
                                        this.state = 218;
                                        this.expression(4);
                                    }
                                    break;
                                case 3:
                                    {
                                        localctx = new ExpressionContext(this, _parentctx, _parentState);
                                        this.pushNewRecursionContext(localctx, _startState, GoParserUntyped.RULE_expression);
                                        this.state = 219;
                                        if (!(this.precpred(this._ctx, 2))) {
                                            throw this.createFailedPredicateException("this.precpred(this._ctx, 2)");
                                        }
                                        this.state = 220;
                                        localctx._log_bin_op = this._input.LT(1);
                                        _la = this._input.LA(1);
                                        if (!(_la === 44 || _la === 45)) {
                                            localctx._log_bin_op = this._errHandler.recoverInline(this);
                                        }
                                        else {
                                            this._errHandler.reportMatch(this);
                                            this.consume();
                                        }
                                        this.state = 221;
                                        this.expression(3);
                                    }
                                    break;
                            }
                        }
                    }
                    this.state = 226;
                    this._errHandler.sync(this);
                    _alt = this._interp.adaptivePredict(this._input, 20, this._ctx);
                }
            }
        }
        catch (re) {
            if (re instanceof antlr4_1.RecognitionException) {
                localctx.exception = re;
                this._errHandler.reportError(this, re);
                this._errHandler.recover(this, re);
            }
            else {
                throw re;
            }
        }
        finally {
            this.unrollRecursionContexts(_parentctx);
        }
        return localctx;
    }
    // @RuleVersion(0)
    primaryExpr(_p) {
        if (_p === undefined) {
            _p = 0;
        }
        let _parentctx = this._ctx;
        let _parentState = this.state;
        let localctx = new PrimaryExprContext(this, this._ctx, _parentState);
        let _prevctx = localctx;
        let _startState = 44;
        this.enterRecursionRule(localctx, 44, GoParserUntyped.RULE_primaryExpr, _p);
        try {
            let _alt;
            this.enterOuterAlt(localctx, 1);
            {
                {
                    this.state = 228;
                    this.operand();
                }
                this._ctx.stop = this._input.LT(-1);
                this.state = 234;
                this._errHandler.sync(this);
                _alt = this._interp.adaptivePredict(this._input, 21, this._ctx);
                while (_alt !== 2 && _alt !== antlr4_1.ATN.INVALID_ALT_NUMBER) {
                    if (_alt === 1) {
                        if (this._parseListeners != null) {
                            this.triggerExitRuleEvent();
                        }
                        _prevctx = localctx;
                        {
                            {
                                localctx = new PrimaryExprContext(this, _parentctx, _parentState);
                                this.pushNewRecursionContext(localctx, _startState, GoParserUntyped.RULE_primaryExpr);
                                this.state = 230;
                                if (!(this.precpred(this._ctx, 1))) {
                                    throw this.createFailedPredicateException("this.precpred(this._ctx, 1)");
                                }
                                this.state = 231;
                                this.arguments();
                            }
                        }
                    }
                    this.state = 236;
                    this._errHandler.sync(this);
                    _alt = this._interp.adaptivePredict(this._input, 21, this._ctx);
                }
            }
        }
        catch (re) {
            if (re instanceof antlr4_1.RecognitionException) {
                localctx.exception = re;
                this._errHandler.reportError(this, re);
                this._errHandler.recover(this, re);
            }
            else {
                throw re;
            }
        }
        finally {
            this.unrollRecursionContexts(_parentctx);
        }
        return localctx;
    }
    // @RuleVersion(0)
    operand() {
        let localctx = new OperandContext(this, this._ctx, this.state);
        this.enterRule(localctx, 46, GoParserUntyped.RULE_operand);
        try {
            this.state = 239;
            this._errHandler.sync(this);
            switch (this._input.LA(1)) {
                case 3:
                    this.enterOuterAlt(localctx, 1);
                    {
                        this.state = 237;
                        this.functionLit();
                    }
                    break;
                case 28:
                    this.enterOuterAlt(localctx, 2);
                    {
                        this.state = 238;
                        this.match(GoParserUntyped.IDENTIFIER);
                    }
                    break;
                default:
                    throw new antlr4_1.NoViableAltException(this);
            }
        }
        catch (re) {
            if (re instanceof antlr4_1.RecognitionException) {
                localctx.exception = re;
                this._errHandler.reportError(this, re);
                this._errHandler.recover(this, re);
            }
            else {
                throw re;
            }
        }
        finally {
            this.exitRule();
        }
        return localctx;
    }
    // @RuleVersion(0)
    basicLit() {
        let localctx = new BasicLitContext(this, this._ctx, this.state);
        this.enterRule(localctx, 48, GoParserUntyped.RULE_basicLit);
        try {
            this.state = 245;
            this._errHandler.sync(this);
            switch (this._input.LA(1)) {
                case 27:
                    this.enterOuterAlt(localctx, 1);
                    {
                        this.state = 241;
                        this.match(GoParserUntyped.BOOL_LIT);
                    }
                    break;
                case 66:
                    this.enterOuterAlt(localctx, 2);
                    {
                        this.state = 242;
                        this.match(GoParserUntyped.DECIMAL_LIT);
                    }
                    break;
                case 80:
                case 81:
                    this.enterOuterAlt(localctx, 3);
                    {
                        this.state = 243;
                        this.string_();
                    }
                    break;
                case 70:
                    this.enterOuterAlt(localctx, 4);
                    {
                        this.state = 244;
                        this.match(GoParserUntyped.FLOAT_LIT);
                    }
                    break;
                default:
                    throw new antlr4_1.NoViableAltException(this);
            }
        }
        catch (re) {
            if (re instanceof antlr4_1.RecognitionException) {
                localctx.exception = re;
                this._errHandler.reportError(this, re);
                this._errHandler.recover(this, re);
            }
            else {
                throw re;
            }
        }
        finally {
            this.exitRule();
        }
        return localctx;
    }
    // @RuleVersion(0)
    string_() {
        let localctx = new String_Context(this, this._ctx, this.state);
        this.enterRule(localctx, 50, GoParserUntyped.RULE_string_);
        let _la;
        try {
            this.enterOuterAlt(localctx, 1);
            {
                this.state = 247;
                _la = this._input.LA(1);
                if (!(_la === 80 || _la === 81)) {
                    this._errHandler.recoverInline(this);
                }
                else {
                    this._errHandler.reportMatch(this);
                    this.consume();
                }
            }
        }
        catch (re) {
            if (re instanceof antlr4_1.RecognitionException) {
                localctx.exception = re;
                this._errHandler.reportError(this, re);
                this._errHandler.recover(this, re);
            }
            else {
                throw re;
            }
        }
        finally {
            this.exitRule();
        }
        return localctx;
    }
    // @RuleVersion(0)
    functionLit() {
        let localctx = new FunctionLitContext(this, this._ctx, this.state);
        this.enterRule(localctx, 52, GoParserUntyped.RULE_functionLit);
        try {
            this.enterOuterAlt(localctx, 1);
            {
                this.state = 249;
                this.match(GoParserUntyped.FUNC);
                this.state = 250;
                this.parameters();
                this.state = 251;
                this.block();
            }
        }
        catch (re) {
            if (re instanceof antlr4_1.RecognitionException) {
                localctx.exception = re;
                this._errHandler.reportError(this, re);
                this._errHandler.recover(this, re);
            }
            else {
                throw re;
            }
        }
        finally {
            this.exitRule();
        }
        return localctx;
    }
    // @RuleVersion(0)
    arguments() {
        let localctx = new ArgumentsContext(this, this._ctx, this.state);
        this.enterRule(localctx, 54, GoParserUntyped.RULE_arguments);
        let _la;
        try {
            this.enterOuterAlt(localctx, 1);
            {
                this.state = 253;
                this.match(GoParserUntyped.L_PAREN);
                this.state = 255;
                this._errHandler.sync(this);
                _la = this._input.LA(1);
                if ((((_la) & ~0x1F) === 0 && ((1 << _la) & 939524104) !== 0) || ((((_la - 59)) & ~0x1F) === 0 && ((1 << (_la - 59)) & 6293751) !== 0)) {
                    {
                        this.state = 254;
                        this.expressionList();
                    }
                }
                this.state = 257;
                this.match(GoParserUntyped.R_PAREN);
            }
        }
        catch (re) {
            if (re instanceof antlr4_1.RecognitionException) {
                localctx.exception = re;
                this._errHandler.reportError(this, re);
                this._errHandler.recover(this, re);
            }
            else {
                throw re;
            }
        }
        finally {
            this.exitRule();
        }
        return localctx;
    }
    // @RuleVersion(0)
    eos() {
        let localctx = new EosContext(this, this._ctx, this.state);
        this.enterRule(localctx, 56, GoParserUntyped.RULE_eos);
        try {
            this.state = 263;
            this._errHandler.sync(this);
            switch (this._interp.adaptivePredict(this._input, 25, this._ctx)) {
                case 1:
                    this.enterOuterAlt(localctx, 1);
                    {
                        this.state = 259;
                        this.match(GoParserUntyped.SEMI);
                    }
                    break;
                case 2:
                    this.enterOuterAlt(localctx, 2);
                    {
                        this.state = 260;
                        this.match(GoParserUntyped.EOF);
                    }
                    break;
                case 3:
                    this.enterOuterAlt(localctx, 3);
                    {
                        this.state = 261;
                        this.match(GoParserUntyped.EOS);
                    }
                    break;
                case 4:
                    this.enterOuterAlt(localctx, 4);
                    {
                        this.state = 262;
                        if (!(this.closingBracket())) {
                            throw this.createFailedPredicateException("this.closingBracket()");
                        }
                    }
                    break;
            }
        }
        catch (re) {
            if (re instanceof antlr4_1.RecognitionException) {
                localctx.exception = re;
                this._errHandler.reportError(this, re);
                this._errHandler.recover(this, re);
            }
            else {
                throw re;
            }
        }
        finally {
            this.exitRule();
        }
        return localctx;
    }
    sempred(localctx, ruleIndex, predIndex) {
        switch (ruleIndex) {
            case 9:
                return this.statementList_sempred(localctx, predIndex);
            case 21:
                return this.expression_sempred(localctx, predIndex);
            case 22:
                return this.primaryExpr_sempred(localctx, predIndex);
            case 28:
                return this.eos_sempred(localctx, predIndex);
        }
        return true;
    }
    statementList_sempred(localctx, predIndex) {
        switch (predIndex) {
            case 0:
                return this.closingBracket();
        }
        return true;
    }
    expression_sempred(localctx, predIndex) {
        switch (predIndex) {
            case 1:
                return this.precpred(this._ctx, 4);
            case 2:
                return this.precpred(this._ctx, 3);
            case 3:
                return this.precpred(this._ctx, 2);
        }
        return true;
    }
    primaryExpr_sempred(localctx, predIndex) {
        switch (predIndex) {
            case 4:
                return this.precpred(this._ctx, 1);
        }
        return true;
    }
    eos_sempred(localctx, predIndex) {
        switch (predIndex) {
            case 5:
                return this.closingBracket();
        }
        return true;
    }
    static get _ATN() {
        if (!GoParserUntyped.__ATN) {
            GoParserUntyped.__ATN = new antlr4_1.ATNDeserializer().deserialize(GoParserUntyped._serializedATN);
        }
        return GoParserUntyped.__ATN;
    }
}
GoParserUntyped.BREAK = 1;
GoParserUntyped.DEFAULT = 2;
GoParserUntyped.FUNC = 3;
GoParserUntyped.INTERFACE = 4;
GoParserUntyped.SELECT = 5;
GoParserUntyped.CASE = 6;
GoParserUntyped.DEFER = 7;
GoParserUntyped.GO = 8;
GoParserUntyped.MAP = 9;
GoParserUntyped.STRUCT = 10;
GoParserUntyped.CHAN = 11;
GoParserUntyped.ELSE = 12;
GoParserUntyped.GOTO = 13;
GoParserUntyped.PACKAGE = 14;
GoParserUntyped.SWITCH = 15;
GoParserUntyped.CONST = 16;
GoParserUntyped.FALLTHROUGH = 17;
GoParserUntyped.IF = 18;
GoParserUntyped.RANGE = 19;
GoParserUntyped.TYPE = 20;
GoParserUntyped.CONTINUE = 21;
GoParserUntyped.FOR = 22;
GoParserUntyped.IMPORT = 23;
GoParserUntyped.RETURN = 24;
GoParserUntyped.VAR = 25;
GoParserUntyped.NIL_LIT = 26;
GoParserUntyped.BOOL_LIT = 27;
GoParserUntyped.IDENTIFIER = 28;
GoParserUntyped.L_PAREN = 29;
GoParserUntyped.R_PAREN = 30;
GoParserUntyped.L_CURLY = 31;
GoParserUntyped.R_CURLY = 32;
GoParserUntyped.L_BRACKET = 33;
GoParserUntyped.R_BRACKET = 34;
GoParserUntyped.ASSIGN = 35;
GoParserUntyped.COMMA = 36;
GoParserUntyped.SEMI = 37;
GoParserUntyped.COLON = 38;
GoParserUntyped.DOT = 39;
GoParserUntyped.PLUS_PLUS = 40;
GoParserUntyped.MINUS_MINUS = 41;
GoParserUntyped.DECLARE_ASSIGN = 42;
GoParserUntyped.ELLIPSIS = 43;
GoParserUntyped.LOGICAL_OR = 44;
GoParserUntyped.LOGICAL_AND = 45;
GoParserUntyped.EQUALS = 46;
GoParserUntyped.NOT_EQUALS = 47;
GoParserUntyped.LESS = 48;
GoParserUntyped.LESS_OR_EQUALS = 49;
GoParserUntyped.GREATER = 50;
GoParserUntyped.GREATER_OR_EQUALS = 51;
GoParserUntyped.OR = 52;
GoParserUntyped.DIV = 53;
GoParserUntyped.MOD = 54;
GoParserUntyped.LSHIFT = 55;
GoParserUntyped.RSHIFT = 56;
GoParserUntyped.BIT_CLEAR = 57;
GoParserUntyped.UNDERLYING = 58;
GoParserUntyped.EXCLAMATION = 59;
GoParserUntyped.PLUS = 60;
GoParserUntyped.MINUS = 61;
GoParserUntyped.CARET = 62;
GoParserUntyped.STAR = 63;
GoParserUntyped.AMPERSAND = 64;
GoParserUntyped.RECEIVE = 65;
GoParserUntyped.DECIMAL_LIT = 66;
GoParserUntyped.BINARY_LIT = 67;
GoParserUntyped.OCTAL_LIT = 68;
GoParserUntyped.HEX_LIT = 69;
GoParserUntyped.FLOAT_LIT = 70;
GoParserUntyped.DECIMAL_FLOAT_LIT = 71;
GoParserUntyped.HEX_FLOAT_LIT = 72;
GoParserUntyped.IMAGINARY_LIT = 73;
GoParserUntyped.RUNE_LIT = 74;
GoParserUntyped.BYTE_VALUE = 75;
GoParserUntyped.OCTAL_BYTE_VALUE = 76;
GoParserUntyped.HEX_BYTE_VALUE = 77;
GoParserUntyped.LITTLE_U_VALUE = 78;
GoParserUntyped.BIG_U_VALUE = 79;
GoParserUntyped.RAW_STRING_LIT = 80;
GoParserUntyped.INTERPRETED_STRING_LIT = 81;
GoParserUntyped.WS = 82;
GoParserUntyped.COMMENT = 83;
GoParserUntyped.TERMINATOR = 84;
GoParserUntyped.LINE_COMMENT = 85;
GoParserUntyped.WS_NLSEMI = 86;
GoParserUntyped.COMMENT_NLSEMI = 87;
GoParserUntyped.LINE_COMMENT_NLSEMI = 88;
GoParserUntyped.EOS = 89;
GoParserUntyped.OTHER = 90;
GoParserUntyped.EOF = antlr4_1.Token.EOF;
GoParserUntyped.RULE_sourceFile = 0;
GoParserUntyped.RULE_declaration = 1;
GoParserUntyped.RULE_constDecl = 2;
GoParserUntyped.RULE_identifierList = 3;
GoParserUntyped.RULE_expressionList = 4;
GoParserUntyped.RULE_functionDecl = 5;
GoParserUntyped.RULE_varDecl = 6;
GoParserUntyped.RULE_type = 7;
GoParserUntyped.RULE_block = 8;
GoParserUntyped.RULE_statementList = 9;
GoParserUntyped.RULE_statement = 10;
GoParserUntyped.RULE_simpleStmt = 11;
GoParserUntyped.RULE_expressionStmt = 12;
GoParserUntyped.RULE_sendStmt = 13;
GoParserUntyped.RULE_assignment = 14;
GoParserUntyped.RULE_returnStmt = 15;
GoParserUntyped.RULE_ifStmt = 16;
GoParserUntyped.RULE_forStmt = 17;
GoParserUntyped.RULE_goStmt = 18;
GoParserUntyped.RULE_methodSpec = 19;
GoParserUntyped.RULE_parameters = 20;
GoParserUntyped.RULE_expression = 21;
GoParserUntyped.RULE_primaryExpr = 22;
GoParserUntyped.RULE_operand = 23;
GoParserUntyped.RULE_basicLit = 24;
GoParserUntyped.RULE_string_ = 25;
GoParserUntyped.RULE_functionLit = 26;
GoParserUntyped.RULE_arguments = 27;
GoParserUntyped.RULE_eos = 28;
GoParserUntyped.literalNames = [null, "'break'",
    "'default'",
    "'func'", "'interface'",
    "'select'",
    "'case'", "'defer'",
    "'go'", "'map'",
    "'struct'",
    "'chan'", "'else'",
    "'goto'", "'package'",
    "'switch'",
    "'const'", "'fallthrough'",
    "'if'", "'range'",
    "'type'", "'continue'",
    "'for'", "'import'",
    "'return'",
    "'var'", "'nil'",
    null, null,
    "'('", "')'",
    "'{'", "'}'",
    "'['", "']'",
    "'='", "','",
    "';'", "':'",
    "'.'", "'++'",
    "'--'", "':='",
    "'...'", "'||'",
    "'&&'", "'=='",
    "'!='", "'<'",
    "'<='", "'>'",
    "'>='", "'|'",
    "'/'", "'%'",
    "'<<'", "'>>'",
    "'&^'", "'~'",
    "'!'", "'+'",
    "'-'", "'^'",
    "'*'", "'&'",
    "'<-'"];
GoParserUntyped.symbolicNames = [null, "BREAK",
    "DEFAULT",
    "FUNC", "INTERFACE",
    "SELECT", "CASE",
    "DEFER", "GO",
    "MAP", "STRUCT",
    "CHAN", "ELSE",
    "GOTO", "PACKAGE",
    "SWITCH", "CONST",
    "FALLTHROUGH",
    "IF", "RANGE",
    "TYPE", "CONTINUE",
    "FOR", "IMPORT",
    "RETURN", "VAR",
    "NIL_LIT",
    "BOOL_LIT",
    "IDENTIFIER",
    "L_PAREN",
    "R_PAREN",
    "L_CURLY",
    "R_CURLY",
    "L_BRACKET",
    "R_BRACKET",
    "ASSIGN", "COMMA",
    "SEMI", "COLON",
    "DOT", "PLUS_PLUS",
    "MINUS_MINUS",
    "DECLARE_ASSIGN",
    "ELLIPSIS",
    "LOGICAL_OR",
    "LOGICAL_AND",
    "EQUALS", "NOT_EQUALS",
    "LESS", "LESS_OR_EQUALS",
    "GREATER",
    "GREATER_OR_EQUALS",
    "OR", "DIV",
    "MOD", "LSHIFT",
    "RSHIFT", "BIT_CLEAR",
    "UNDERLYING",
    "EXCLAMATION",
    "PLUS", "MINUS",
    "CARET", "STAR",
    "AMPERSAND",
    "RECEIVE",
    "DECIMAL_LIT",
    "BINARY_LIT",
    "OCTAL_LIT",
    "HEX_LIT",
    "FLOAT_LIT",
    "DECIMAL_FLOAT_LIT",
    "HEX_FLOAT_LIT",
    "IMAGINARY_LIT",
    "RUNE_LIT",
    "BYTE_VALUE",
    "OCTAL_BYTE_VALUE",
    "HEX_BYTE_VALUE",
    "LITTLE_U_VALUE",
    "BIG_U_VALUE",
    "RAW_STRING_LIT",
    "INTERPRETED_STRING_LIT",
    "WS", "COMMENT",
    "TERMINATOR",
    "LINE_COMMENT",
    "WS_NLSEMI",
    "COMMENT_NLSEMI",
    "LINE_COMMENT_NLSEMI",
    "EOS", "OTHER"];
// tslint:disable:no-trailing-whitespace
GoParserUntyped.ruleNames = [
    "sourceFile", "declaration", "constDecl", "identifierList", "expressionList",
    "functionDecl", "varDecl", "type", "block", "statementList", "statement",
    "simpleStmt", "expressionStmt", "sendStmt", "assignment", "returnStmt",
    "ifStmt", "forStmt", "goStmt", "methodSpec", "parameters", "expression",
    "primaryExpr", "operand", "basicLit", "string_", "functionLit", "arguments",
    "eos",
];
GoParserUntyped._serializedATN = [4, 1, 90, 266, 2, 0, 7, 0, 2,
    1, 7, 1, 2, 2, 7, 2, 2, 3, 7, 3, 2, 4, 7, 4, 2, 5, 7, 5, 2, 6, 7, 6, 2, 7, 7, 7, 2, 8, 7, 8, 2, 9, 7, 9, 2,
    10, 7, 10, 2, 11, 7, 11, 2, 12, 7, 12, 2, 13, 7, 13, 2, 14, 7, 14, 2, 15, 7, 15, 2, 16, 7, 16, 2, 17,
    7, 17, 2, 18, 7, 18, 2, 19, 7, 19, 2, 20, 7, 20, 2, 21, 7, 21, 2, 22, 7, 22, 2, 23, 7, 23, 2, 24, 7,
    24, 2, 25, 7, 25, 2, 26, 7, 26, 2, 27, 7, 27, 2, 28, 7, 28, 1, 0, 1, 0, 3, 0, 61, 8, 0, 1, 0, 1, 0, 5,
    0, 65, 8, 0, 10, 0, 12, 0, 68, 9, 0, 1, 0, 1, 0, 1, 1, 1, 1, 3, 1, 74, 8, 1, 1, 2, 1, 2, 1, 2, 1, 2, 1,
    2, 1, 3, 1, 3, 1, 3, 5, 3, 84, 8, 3, 10, 3, 12, 3, 87, 9, 3, 1, 4, 1, 4, 1, 4, 5, 4, 92, 8, 4, 10, 4, 12,
    4, 95, 9, 4, 1, 5, 1, 5, 1, 5, 1, 5, 1, 5, 1, 6, 1, 6, 1, 6, 1, 6, 1, 6, 3, 6, 107, 8, 6, 1, 7, 1, 7, 1,
    8, 1, 8, 3, 8, 113, 8, 8, 1, 8, 1, 8, 1, 9, 3, 9, 118, 8, 9, 1, 9, 3, 9, 121, 8, 9, 1, 9, 3, 9, 124, 8,
    9, 1, 9, 1, 9, 1, 9, 4, 9, 129, 8, 9, 11, 9, 12, 9, 130, 1, 10, 1, 10, 1, 10, 1, 10, 1, 10, 1, 10, 1,
    10, 3, 10, 140, 8, 10, 1, 11, 1, 11, 1, 11, 3, 11, 145, 8, 11, 1, 12, 1, 12, 1, 13, 1, 13, 1, 13,
    1, 13, 1, 14, 3, 14, 154, 8, 14, 1, 14, 1, 14, 1, 14, 1, 14, 1, 15, 1, 15, 1, 15, 1, 16, 1, 16, 1,
    16, 1, 16, 1, 16, 3, 16, 168, 8, 16, 1, 16, 1, 16, 1, 16, 1, 16, 3, 16, 174, 8, 16, 3, 16, 176, 8,
    16, 1, 17, 1, 17, 1, 17, 1, 17, 1, 18, 1, 18, 1, 18, 1, 18, 1, 19, 1, 19, 1, 19, 1, 20, 1, 20, 3, 20,
    191, 8, 20, 1, 20, 1, 20, 1, 21, 1, 21, 1, 21, 1, 21, 1, 21, 1, 21, 1, 21, 1, 21, 1, 21, 1, 21, 1,
    21, 1, 21, 1, 21, 1, 21, 1, 21, 1, 21, 1, 21, 3, 21, 212, 8, 21, 1, 21, 1, 21, 1, 21, 1, 21, 1, 21,
    1, 21, 1, 21, 1, 21, 1, 21, 5, 21, 223, 8, 21, 10, 21, 12, 21, 226, 9, 21, 1, 22, 1, 22, 1, 22, 1,
    22, 1, 22, 5, 22, 233, 8, 22, 10, 22, 12, 22, 236, 9, 22, 1, 23, 1, 23, 3, 23, 240, 8, 23, 1, 24,
    1, 24, 1, 24, 1, 24, 3, 24, 246, 8, 24, 1, 25, 1, 25, 1, 26, 1, 26, 1, 26, 1, 26, 1, 27, 1, 27, 3,
    27, 256, 8, 27, 1, 27, 1, 27, 1, 28, 1, 28, 1, 28, 1, 28, 3, 28, 264, 8, 28, 1, 28, 0, 2, 42, 44,
    29, 0, 2, 4, 6, 8, 10, 12, 14, 16, 18, 20, 22, 24, 26, 28, 30, 32, 34, 36, 38, 40, 42, 44, 46, 48,
    50, 52, 54, 56, 0, 6, 1, 0, 63, 64, 1, 0, 60, 61, 3, 0, 53, 54, 60, 61, 63, 63, 1, 0, 46, 51, 1, 0,
    44, 45, 1, 0, 80, 81, 280, 0, 66, 1, 0, 0, 0, 2, 73, 1, 0, 0, 0, 4, 75, 1, 0, 0, 0, 6, 80, 1, 0, 0, 0,
    8, 88, 1, 0, 0, 0, 10, 96, 1, 0, 0, 0, 12, 101, 1, 0, 0, 0, 14, 108, 1, 0, 0, 0, 16, 110, 1, 0, 0, 0,
    18, 128, 1, 0, 0, 0, 20, 139, 1, 0, 0, 0, 22, 144, 1, 0, 0, 0, 24, 146, 1, 0, 0, 0, 26, 148, 1, 0,
    0, 0, 28, 153, 1, 0, 0, 0, 30, 159, 1, 0, 0, 0, 32, 162, 1, 0, 0, 0, 34, 177, 1, 0, 0, 0, 36, 181,
    1, 0, 0, 0, 38, 185, 1, 0, 0, 0, 40, 188, 1, 0, 0, 0, 42, 211, 1, 0, 0, 0, 44, 227, 1, 0, 0, 0, 46,
    239, 1, 0, 0, 0, 48, 245, 1, 0, 0, 0, 50, 247, 1, 0, 0, 0, 52, 249, 1, 0, 0, 0, 54, 253, 1, 0, 0, 0,
    56, 263, 1, 0, 0, 0, 58, 61, 3, 10, 5, 0, 59, 61, 3, 2, 1, 0, 60, 58, 1, 0, 0, 0, 60, 59, 1, 0, 0, 0,
    61, 62, 1, 0, 0, 0, 62, 63, 3, 56, 28, 0, 63, 65, 1, 0, 0, 0, 64, 60, 1, 0, 0, 0, 65, 68, 1, 0, 0, 0,
    66, 64, 1, 0, 0, 0, 66, 67, 1, 0, 0, 0, 67, 69, 1, 0, 0, 0, 68, 66, 1, 0, 0, 0, 69, 70, 5, 0, 0, 1, 70,
    1, 1, 0, 0, 0, 71, 74, 3, 4, 2, 0, 72, 74, 3, 12, 6, 0, 73, 71, 1, 0, 0, 0, 73, 72, 1, 0, 0, 0, 74, 3,
    1, 0, 0, 0, 75, 76, 5, 16, 0, 0, 76, 77, 5, 28, 0, 0, 77, 78, 5, 35, 0, 0, 78, 79, 3, 42, 21, 0, 79,
    5, 1, 0, 0, 0, 80, 85, 5, 28, 0, 0, 81, 82, 5, 36, 0, 0, 82, 84, 5, 28, 0, 0, 83, 81, 1, 0, 0, 0, 84,
    87, 1, 0, 0, 0, 85, 83, 1, 0, 0, 0, 85, 86, 1, 0, 0, 0, 86, 7, 1, 0, 0, 0, 87, 85, 1, 0, 0, 0, 88, 93,
    3, 42, 21, 0, 89, 90, 5, 36, 0, 0, 90, 92, 3, 42, 21, 0, 91, 89, 1, 0, 0, 0, 92, 95, 1, 0, 0, 0, 93,
    91, 1, 0, 0, 0, 93, 94, 1, 0, 0, 0, 94, 9, 1, 0, 0, 0, 95, 93, 1, 0, 0, 0, 96, 97, 5, 3, 0, 0, 97, 98,
    5, 28, 0, 0, 98, 99, 3, 40, 20, 0, 99, 100, 3, 16, 8, 0, 100, 11, 1, 0, 0, 0, 101, 102, 5, 25, 0,
    0, 102, 106, 5, 28, 0, 0, 103, 107, 3, 14, 7, 0, 104, 105, 5, 35, 0, 0, 105, 107, 3, 42, 21, 0,
    106, 103, 1, 0, 0, 0, 106, 104, 1, 0, 0, 0, 107, 13, 1, 0, 0, 0, 108, 109, 5, 28, 0, 0, 109, 15,
    1, 0, 0, 0, 110, 112, 5, 31, 0, 0, 111, 113, 3, 18, 9, 0, 112, 111, 1, 0, 0, 0, 112, 113, 1, 0, 0,
    0, 113, 114, 1, 0, 0, 0, 114, 115, 5, 32, 0, 0, 115, 17, 1, 0, 0, 0, 116, 118, 5, 37, 0, 0, 117,
    116, 1, 0, 0, 0, 117, 118, 1, 0, 0, 0, 118, 124, 1, 0, 0, 0, 119, 121, 5, 89, 0, 0, 120, 119, 1,
    0, 0, 0, 120, 121, 1, 0, 0, 0, 121, 124, 1, 0, 0, 0, 122, 124, 4, 9, 0, 0, 123, 117, 1, 0, 0, 0, 123,
    120, 1, 0, 0, 0, 123, 122, 1, 0, 0, 0, 124, 125, 1, 0, 0, 0, 125, 126, 3, 20, 10, 0, 126, 127, 3,
    56, 28, 0, 127, 129, 1, 0, 0, 0, 128, 123, 1, 0, 0, 0, 129, 130, 1, 0, 0, 0, 130, 128, 1, 0, 0, 0,
    130, 131, 1, 0, 0, 0, 131, 19, 1, 0, 0, 0, 132, 140, 3, 2, 1, 0, 133, 140, 3, 22, 11, 0, 134, 140,
    3, 36, 18, 0, 135, 140, 3, 30, 15, 0, 136, 140, 3, 16, 8, 0, 137, 140, 3, 32, 16, 0, 138, 140,
    3, 34, 17, 0, 139, 132, 1, 0, 0, 0, 139, 133, 1, 0, 0, 0, 139, 134, 1, 0, 0, 0, 139, 135, 1, 0, 0,
    0, 139, 136, 1, 0, 0, 0, 139, 137, 1, 0, 0, 0, 139, 138, 1, 0, 0, 0, 140, 21, 1, 0, 0, 0, 141, 145,
    3, 26, 13, 0, 142, 145, 3, 28, 14, 0, 143, 145, 3, 24, 12, 0, 144, 141, 1, 0, 0, 0, 144, 142, 1,
    0, 0, 0, 144, 143, 1, 0, 0, 0, 145, 23, 1, 0, 0, 0, 146, 147, 3, 42, 21, 0, 147, 25, 1, 0, 0, 0, 148,
    149, 5, 28, 0, 0, 149, 150, 5, 65, 0, 0, 150, 151, 3, 42, 21, 0, 151, 27, 1, 0, 0, 0, 152, 154,
    5, 63, 0, 0, 153, 152, 1, 0, 0, 0, 153, 154, 1, 0, 0, 0, 154, 155, 1, 0, 0, 0, 155, 156, 5, 28, 0,
    0, 156, 157, 5, 35, 0, 0, 157, 158, 3, 42, 21, 0, 158, 29, 1, 0, 0, 0, 159, 160, 5, 24, 0, 0, 160,
    161, 3, 42, 21, 0, 161, 31, 1, 0, 0, 0, 162, 167, 5, 18, 0, 0, 163, 168, 3, 42, 21, 0, 164, 165,
    3, 56, 28, 0, 165, 166, 3, 42, 21, 0, 166, 168, 1, 0, 0, 0, 167, 163, 1, 0, 0, 0, 167, 164, 1, 0,
    0, 0, 168, 169, 1, 0, 0, 0, 169, 175, 3, 16, 8, 0, 170, 173, 5, 12, 0, 0, 171, 174, 3, 32, 16, 0,
    172, 174, 3, 16, 8, 0, 173, 171, 1, 0, 0, 0, 173, 172, 1, 0, 0, 0, 174, 176, 1, 0, 0, 0, 175, 170,
    1, 0, 0, 0, 175, 176, 1, 0, 0, 0, 176, 33, 1, 0, 0, 0, 177, 178, 5, 22, 0, 0, 178, 179, 3, 42, 21,
    0, 179, 180, 3, 16, 8, 0, 180, 35, 1, 0, 0, 0, 181, 182, 5, 8, 0, 0, 182, 183, 3, 44, 22, 0, 183,
    184, 3, 54, 27, 0, 184, 37, 1, 0, 0, 0, 185, 186, 5, 28, 0, 0, 186, 187, 3, 40, 20, 0, 187, 39,
    1, 0, 0, 0, 188, 190, 5, 29, 0, 0, 189, 191, 3, 6, 3, 0, 190, 189, 1, 0, 0, 0, 190, 191, 1, 0, 0,
    0, 191, 192, 1, 0, 0, 0, 192, 193, 5, 30, 0, 0, 193, 41, 1, 0, 0, 0, 194, 195, 6, 21, -1, 0, 195,
    212, 3, 48, 24, 0, 196, 212, 3, 44, 22, 0, 197, 198, 5, 65, 0, 0, 198, 212, 5, 28, 0, 0, 199, 200,
    5, 59, 0, 0, 200, 212, 3, 42, 21, 8, 201, 202, 5, 64, 0, 0, 202, 212, 5, 28, 0, 0, 203, 204, 7,
    0, 0, 0, 204, 212, 5, 28, 0, 0, 205, 206, 7, 1, 0, 0, 206, 212, 3, 42, 21, 5, 207, 208, 5, 29, 0,
    0, 208, 209, 3, 42, 21, 0, 209, 210, 5, 30, 0, 0, 210, 212, 1, 0, 0, 0, 211, 194, 1, 0, 0, 0, 211,
    196, 1, 0, 0, 0, 211, 197, 1, 0, 0, 0, 211, 199, 1, 0, 0, 0, 211, 201, 1, 0, 0, 0, 211, 203, 1, 0,
    0, 0, 211, 205, 1, 0, 0, 0, 211, 207, 1, 0, 0, 0, 212, 224, 1, 0, 0, 0, 213, 214, 10, 4, 0, 0, 214,
    215, 7, 2, 0, 0, 215, 223, 3, 42, 21, 5, 216, 217, 10, 3, 0, 0, 217, 218, 7, 3, 0, 0, 218, 223,
    3, 42, 21, 4, 219, 220, 10, 2, 0, 0, 220, 221, 7, 4, 0, 0, 221, 223, 3, 42, 21, 3, 222, 213, 1,
    0, 0, 0, 222, 216, 1, 0, 0, 0, 222, 219, 1, 0, 0, 0, 223, 226, 1, 0, 0, 0, 224, 222, 1, 0, 0, 0, 224,
    225, 1, 0, 0, 0, 225, 43, 1, 0, 0, 0, 226, 224, 1, 0, 0, 0, 227, 228, 6, 22, -1, 0, 228, 229, 3,
    46, 23, 0, 229, 234, 1, 0, 0, 0, 230, 231, 10, 1, 0, 0, 231, 233, 3, 54, 27, 0, 232, 230, 1, 0,
    0, 0, 233, 236, 1, 0, 0, 0, 234, 232, 1, 0, 0, 0, 234, 235, 1, 0, 0, 0, 235, 45, 1, 0, 0, 0, 236,
    234, 1, 0, 0, 0, 237, 240, 3, 52, 26, 0, 238, 240, 5, 28, 0, 0, 239, 237, 1, 0, 0, 0, 239, 238,
    1, 0, 0, 0, 240, 47, 1, 0, 0, 0, 241, 246, 5, 27, 0, 0, 242, 246, 5, 66, 0, 0, 243, 246, 3, 50, 25,
    0, 244, 246, 5, 70, 0, 0, 245, 241, 1, 0, 0, 0, 245, 242, 1, 0, 0, 0, 245, 243, 1, 0, 0, 0, 245,
    244, 1, 0, 0, 0, 246, 49, 1, 0, 0, 0, 247, 248, 7, 5, 0, 0, 248, 51, 1, 0, 0, 0, 249, 250, 5, 3, 0,
    0, 250, 251, 3, 40, 20, 0, 251, 252, 3, 16, 8, 0, 252, 53, 1, 0, 0, 0, 253, 255, 5, 29, 0, 0, 254,
    256, 3, 8, 4, 0, 255, 254, 1, 0, 0, 0, 255, 256, 1, 0, 0, 0, 256, 257, 1, 0, 0, 0, 257, 258, 5, 30,
    0, 0, 258, 55, 1, 0, 0, 0, 259, 264, 5, 37, 0, 0, 260, 264, 5, 0, 0, 1, 261, 264, 5, 89, 0, 0, 262,
    264, 4, 28, 5, 0, 263, 259, 1, 0, 0, 0, 263, 260, 1, 0, 0, 0, 263, 261, 1, 0, 0, 0, 263, 262, 1,
    0, 0, 0, 264, 57, 1, 0, 0, 0, 26, 60, 66, 73, 85, 93, 106, 112, 117, 120, 123, 130, 139, 144,
    153, 167, 173, 175, 190, 211, 222, 224, 234, 239, 245, 255, 263];
GoParserUntyped.DecisionsToDFA = GoParserUntyped._ATN.decisionToState.map((ds, index) => new antlr4_1.DFA(ds, index));
exports.default = GoParserUntyped;
class SourceFileContext extends antlr4_1.ParserRuleContext {
    constructor(parser, parent, invokingState) {
        super(parent, invokingState);
        this.parser = parser;
    }
    EOF() {
        return this.getToken(GoParserUntyped.EOF, 0);
    }
    eos_list() {
        return this.getTypedRuleContexts(EosContext);
    }
    eos(i) {
        return this.getTypedRuleContext(EosContext, i);
    }
    functionDecl_list() {
        return this.getTypedRuleContexts(FunctionDeclContext);
    }
    functionDecl(i) {
        return this.getTypedRuleContext(FunctionDeclContext, i);
    }
    declaration_list() {
        return this.getTypedRuleContexts(DeclarationContext);
    }
    declaration(i) {
        return this.getTypedRuleContext(DeclarationContext, i);
    }
    get ruleIndex() {
        return GoParserUntyped.RULE_sourceFile;
    }
    // @Override
    accept(visitor) {
        if (visitor.visitSourceFile) {
            return visitor.visitSourceFile(this);
        }
        else {
            return visitor.visitChildren(this);
        }
    }
}
exports.SourceFileContext = SourceFileContext;
class DeclarationContext extends antlr4_1.ParserRuleContext {
    constructor(parser, parent, invokingState) {
        super(parent, invokingState);
        this.parser = parser;
    }
    constDecl() {
        return this.getTypedRuleContext(ConstDeclContext, 0);
    }
    varDecl() {
        return this.getTypedRuleContext(VarDeclContext, 0);
    }
    get ruleIndex() {
        return GoParserUntyped.RULE_declaration;
    }
    // @Override
    accept(visitor) {
        if (visitor.visitDeclaration) {
            return visitor.visitDeclaration(this);
        }
        else {
            return visitor.visitChildren(this);
        }
    }
}
exports.DeclarationContext = DeclarationContext;
class ConstDeclContext extends antlr4_1.ParserRuleContext {
    constructor(parser, parent, invokingState) {
        super(parent, invokingState);
        this.parser = parser;
    }
    CONST() {
        return this.getToken(GoParserUntyped.CONST, 0);
    }
    IDENTIFIER() {
        return this.getToken(GoParserUntyped.IDENTIFIER, 0);
    }
    ASSIGN() {
        return this.getToken(GoParserUntyped.ASSIGN, 0);
    }
    expression() {
        return this.getTypedRuleContext(ExpressionContext, 0);
    }
    get ruleIndex() {
        return GoParserUntyped.RULE_constDecl;
    }
    // @Override
    accept(visitor) {
        if (visitor.visitConstDecl) {
            return visitor.visitConstDecl(this);
        }
        else {
            return visitor.visitChildren(this);
        }
    }
}
exports.ConstDeclContext = ConstDeclContext;
class IdentifierListContext extends antlr4_1.ParserRuleContext {
    constructor(parser, parent, invokingState) {
        super(parent, invokingState);
        this.parser = parser;
    }
    IDENTIFIER_list() {
        return this.getTokens(GoParserUntyped.IDENTIFIER);
    }
    IDENTIFIER(i) {
        return this.getToken(GoParserUntyped.IDENTIFIER, i);
    }
    COMMA_list() {
        return this.getTokens(GoParserUntyped.COMMA);
    }
    COMMA(i) {
        return this.getToken(GoParserUntyped.COMMA, i);
    }
    get ruleIndex() {
        return GoParserUntyped.RULE_identifierList;
    }
    // @Override
    accept(visitor) {
        if (visitor.visitIdentifierList) {
            return visitor.visitIdentifierList(this);
        }
        else {
            return visitor.visitChildren(this);
        }
    }
}
exports.IdentifierListContext = IdentifierListContext;
class ExpressionListContext extends antlr4_1.ParserRuleContext {
    constructor(parser, parent, invokingState) {
        super(parent, invokingState);
        this.parser = parser;
    }
    expression_list() {
        return this.getTypedRuleContexts(ExpressionContext);
    }
    expression(i) {
        return this.getTypedRuleContext(ExpressionContext, i);
    }
    COMMA_list() {
        return this.getTokens(GoParserUntyped.COMMA);
    }
    COMMA(i) {
        return this.getToken(GoParserUntyped.COMMA, i);
    }
    get ruleIndex() {
        return GoParserUntyped.RULE_expressionList;
    }
    // @Override
    accept(visitor) {
        if (visitor.visitExpressionList) {
            return visitor.visitExpressionList(this);
        }
        else {
            return visitor.visitChildren(this);
        }
    }
}
exports.ExpressionListContext = ExpressionListContext;
class FunctionDeclContext extends antlr4_1.ParserRuleContext {
    constructor(parser, parent, invokingState) {
        super(parent, invokingState);
        this.parser = parser;
    }
    FUNC() {
        return this.getToken(GoParserUntyped.FUNC, 0);
    }
    IDENTIFIER() {
        return this.getToken(GoParserUntyped.IDENTIFIER, 0);
    }
    parameters() {
        return this.getTypedRuleContext(ParametersContext, 0);
    }
    block() {
        return this.getTypedRuleContext(BlockContext, 0);
    }
    get ruleIndex() {
        return GoParserUntyped.RULE_functionDecl;
    }
    // @Override
    accept(visitor) {
        if (visitor.visitFunctionDecl) {
            return visitor.visitFunctionDecl(this);
        }
        else {
            return visitor.visitChildren(this);
        }
    }
}
exports.FunctionDeclContext = FunctionDeclContext;
class VarDeclContext extends antlr4_1.ParserRuleContext {
    constructor(parser, parent, invokingState) {
        super(parent, invokingState);
        this.parser = parser;
    }
    VAR() {
        return this.getToken(GoParserUntyped.VAR, 0);
    }
    IDENTIFIER() {
        return this.getToken(GoParserUntyped.IDENTIFIER, 0);
    }
    type_() {
        return this.getTypedRuleContext(TypeContext, 0);
    }
    ASSIGN() {
        return this.getToken(GoParserUntyped.ASSIGN, 0);
    }
    expression() {
        return this.getTypedRuleContext(ExpressionContext, 0);
    }
    get ruleIndex() {
        return GoParserUntyped.RULE_varDecl;
    }
    // @Override
    accept(visitor) {
        if (visitor.visitVarDecl) {
            return visitor.visitVarDecl(this);
        }
        else {
            return visitor.visitChildren(this);
        }
    }
}
exports.VarDeclContext = VarDeclContext;
class TypeContext extends antlr4_1.ParserRuleContext {
    constructor(parser, parent, invokingState) {
        super(parent, invokingState);
        this.parser = parser;
    }
    IDENTIFIER() {
        return this.getToken(GoParserUntyped.IDENTIFIER, 0);
    }
    get ruleIndex() {
        return GoParserUntyped.RULE_type;
    }
    // @Override
    accept(visitor) {
        if (visitor.visitType) {
            return visitor.visitType(this);
        }
        else {
            return visitor.visitChildren(this);
        }
    }
}
exports.TypeContext = TypeContext;
class BlockContext extends antlr4_1.ParserRuleContext {
    constructor(parser, parent, invokingState) {
        super(parent, invokingState);
        this.parser = parser;
    }
    L_CURLY() {
        return this.getToken(GoParserUntyped.L_CURLY, 0);
    }
    R_CURLY() {
        return this.getToken(GoParserUntyped.R_CURLY, 0);
    }
    statementList() {
        return this.getTypedRuleContext(StatementListContext, 0);
    }
    get ruleIndex() {
        return GoParserUntyped.RULE_block;
    }
    // @Override
    accept(visitor) {
        if (visitor.visitBlock) {
            return visitor.visitBlock(this);
        }
        else {
            return visitor.visitChildren(this);
        }
    }
}
exports.BlockContext = BlockContext;
class StatementListContext extends antlr4_1.ParserRuleContext {
    constructor(parser, parent, invokingState) {
        super(parent, invokingState);
        this.parser = parser;
    }
    statement_list() {
        return this.getTypedRuleContexts(StatementContext);
    }
    statement(i) {
        return this.getTypedRuleContext(StatementContext, i);
    }
    eos_list() {
        return this.getTypedRuleContexts(EosContext);
    }
    eos(i) {
        return this.getTypedRuleContext(EosContext, i);
    }
    SEMI_list() {
        return this.getTokens(GoParserUntyped.SEMI);
    }
    SEMI(i) {
        return this.getToken(GoParserUntyped.SEMI, i);
    }
    EOS_list() {
        return this.getTokens(GoParserUntyped.EOS);
    }
    EOS(i) {
        return this.getToken(GoParserUntyped.EOS, i);
    }
    get ruleIndex() {
        return GoParserUntyped.RULE_statementList;
    }
    // @Override
    accept(visitor) {
        if (visitor.visitStatementList) {
            return visitor.visitStatementList(this);
        }
        else {
            return visitor.visitChildren(this);
        }
    }
}
exports.StatementListContext = StatementListContext;
class StatementContext extends antlr4_1.ParserRuleContext {
    constructor(parser, parent, invokingState) {
        super(parent, invokingState);
        this.parser = parser;
    }
    declaration() {
        return this.getTypedRuleContext(DeclarationContext, 0);
    }
    simpleStmt() {
        return this.getTypedRuleContext(SimpleStmtContext, 0);
    }
    goStmt() {
        return this.getTypedRuleContext(GoStmtContext, 0);
    }
    returnStmt() {
        return this.getTypedRuleContext(ReturnStmtContext, 0);
    }
    block() {
        return this.getTypedRuleContext(BlockContext, 0);
    }
    ifStmt() {
        return this.getTypedRuleContext(IfStmtContext, 0);
    }
    forStmt() {
        return this.getTypedRuleContext(ForStmtContext, 0);
    }
    get ruleIndex() {
        return GoParserUntyped.RULE_statement;
    }
    // @Override
    accept(visitor) {
        if (visitor.visitStatement) {
            return visitor.visitStatement(this);
        }
        else {
            return visitor.visitChildren(this);
        }
    }
}
exports.StatementContext = StatementContext;
class SimpleStmtContext extends antlr4_1.ParserRuleContext {
    constructor(parser, parent, invokingState) {
        super(parent, invokingState);
        this.parser = parser;
    }
    sendStmt() {
        return this.getTypedRuleContext(SendStmtContext, 0);
    }
    assignment() {
        return this.getTypedRuleContext(AssignmentContext, 0);
    }
    expressionStmt() {
        return this.getTypedRuleContext(ExpressionStmtContext, 0);
    }
    get ruleIndex() {
        return GoParserUntyped.RULE_simpleStmt;
    }
    // @Override
    accept(visitor) {
        if (visitor.visitSimpleStmt) {
            return visitor.visitSimpleStmt(this);
        }
        else {
            return visitor.visitChildren(this);
        }
    }
}
exports.SimpleStmtContext = SimpleStmtContext;
class ExpressionStmtContext extends antlr4_1.ParserRuleContext {
    constructor(parser, parent, invokingState) {
        super(parent, invokingState);
        this.parser = parser;
    }
    expression() {
        return this.getTypedRuleContext(ExpressionContext, 0);
    }
    get ruleIndex() {
        return GoParserUntyped.RULE_expressionStmt;
    }
    // @Override
    accept(visitor) {
        if (visitor.visitExpressionStmt) {
            return visitor.visitExpressionStmt(this);
        }
        else {
            return visitor.visitChildren(this);
        }
    }
}
exports.ExpressionStmtContext = ExpressionStmtContext;
class SendStmtContext extends antlr4_1.ParserRuleContext {
    constructor(parser, parent, invokingState) {
        super(parent, invokingState);
        this.parser = parser;
    }
    RECEIVE() {
        return this.getToken(GoParserUntyped.RECEIVE, 0);
    }
    expression() {
        return this.getTypedRuleContext(ExpressionContext, 0);
    }
    IDENTIFIER() {
        return this.getToken(GoParserUntyped.IDENTIFIER, 0);
    }
    get ruleIndex() {
        return GoParserUntyped.RULE_sendStmt;
    }
    // @Override
    accept(visitor) {
        if (visitor.visitSendStmt) {
            return visitor.visitSendStmt(this);
        }
        else {
            return visitor.visitChildren(this);
        }
    }
}
exports.SendStmtContext = SendStmtContext;
class AssignmentContext extends antlr4_1.ParserRuleContext {
    constructor(parser, parent, invokingState) {
        super(parent, invokingState);
        this.parser = parser;
    }
    IDENTIFIER() {
        return this.getToken(GoParserUntyped.IDENTIFIER, 0);
    }
    ASSIGN() {
        return this.getToken(GoParserUntyped.ASSIGN, 0);
    }
    expression() {
        return this.getTypedRuleContext(ExpressionContext, 0);
    }
    STAR() {
        return this.getToken(GoParserUntyped.STAR, 0);
    }
    get ruleIndex() {
        return GoParserUntyped.RULE_assignment;
    }
    // @Override
    accept(visitor) {
        if (visitor.visitAssignment) {
            return visitor.visitAssignment(this);
        }
        else {
            return visitor.visitChildren(this);
        }
    }
}
exports.AssignmentContext = AssignmentContext;
class ReturnStmtContext extends antlr4_1.ParserRuleContext {
    constructor(parser, parent, invokingState) {
        super(parent, invokingState);
        this.parser = parser;
    }
    RETURN() {
        return this.getToken(GoParserUntyped.RETURN, 0);
    }
    expression() {
        return this.getTypedRuleContext(ExpressionContext, 0);
    }
    get ruleIndex() {
        return GoParserUntyped.RULE_returnStmt;
    }
    // @Override
    accept(visitor) {
        if (visitor.visitReturnStmt) {
            return visitor.visitReturnStmt(this);
        }
        else {
            return visitor.visitChildren(this);
        }
    }
}
exports.ReturnStmtContext = ReturnStmtContext;
class IfStmtContext extends antlr4_1.ParserRuleContext {
    constructor(parser, parent, invokingState) {
        super(parent, invokingState);
        this.parser = parser;
    }
    IF() {
        return this.getToken(GoParserUntyped.IF, 0);
    }
    block_list() {
        return this.getTypedRuleContexts(BlockContext);
    }
    block(i) {
        return this.getTypedRuleContext(BlockContext, i);
    }
    expression() {
        return this.getTypedRuleContext(ExpressionContext, 0);
    }
    eos() {
        return this.getTypedRuleContext(EosContext, 0);
    }
    ELSE() {
        return this.getToken(GoParserUntyped.ELSE, 0);
    }
    ifStmt() {
        return this.getTypedRuleContext(IfStmtContext, 0);
    }
    get ruleIndex() {
        return GoParserUntyped.RULE_ifStmt;
    }
    // @Override
    accept(visitor) {
        if (visitor.visitIfStmt) {
            return visitor.visitIfStmt(this);
        }
        else {
            return visitor.visitChildren(this);
        }
    }
}
exports.IfStmtContext = IfStmtContext;
class ForStmtContext extends antlr4_1.ParserRuleContext {
    constructor(parser, parent, invokingState) {
        super(parent, invokingState);
        this.parser = parser;
    }
    FOR() {
        return this.getToken(GoParserUntyped.FOR, 0);
    }
    expression() {
        return this.getTypedRuleContext(ExpressionContext, 0);
    }
    block() {
        return this.getTypedRuleContext(BlockContext, 0);
    }
    get ruleIndex() {
        return GoParserUntyped.RULE_forStmt;
    }
    // @Override
    accept(visitor) {
        if (visitor.visitForStmt) {
            return visitor.visitForStmt(this);
        }
        else {
            return visitor.visitChildren(this);
        }
    }
}
exports.ForStmtContext = ForStmtContext;
class GoStmtContext extends antlr4_1.ParserRuleContext {
    constructor(parser, parent, invokingState) {
        super(parent, invokingState);
        this.parser = parser;
    }
    GO() {
        return this.getToken(GoParserUntyped.GO, 0);
    }
    primaryExpr() {
        return this.getTypedRuleContext(PrimaryExprContext, 0);
    }
    arguments() {
        return this.getTypedRuleContext(ArgumentsContext, 0);
    }
    get ruleIndex() {
        return GoParserUntyped.RULE_goStmt;
    }
    // @Override
    accept(visitor) {
        if (visitor.visitGoStmt) {
            return visitor.visitGoStmt(this);
        }
        else {
            return visitor.visitChildren(this);
        }
    }
}
exports.GoStmtContext = GoStmtContext;
class MethodSpecContext extends antlr4_1.ParserRuleContext {
    constructor(parser, parent, invokingState) {
        super(parent, invokingState);
        this.parser = parser;
    }
    IDENTIFIER() {
        return this.getToken(GoParserUntyped.IDENTIFIER, 0);
    }
    parameters() {
        return this.getTypedRuleContext(ParametersContext, 0);
    }
    get ruleIndex() {
        return GoParserUntyped.RULE_methodSpec;
    }
    // @Override
    accept(visitor) {
        if (visitor.visitMethodSpec) {
            return visitor.visitMethodSpec(this);
        }
        else {
            return visitor.visitChildren(this);
        }
    }
}
exports.MethodSpecContext = MethodSpecContext;
class ParametersContext extends antlr4_1.ParserRuleContext {
    constructor(parser, parent, invokingState) {
        super(parent, invokingState);
        this.parser = parser;
    }
    L_PAREN() {
        return this.getToken(GoParserUntyped.L_PAREN, 0);
    }
    R_PAREN() {
        return this.getToken(GoParserUntyped.R_PAREN, 0);
    }
    identifierList() {
        return this.getTypedRuleContext(IdentifierListContext, 0);
    }
    get ruleIndex() {
        return GoParserUntyped.RULE_parameters;
    }
    // @Override
    accept(visitor) {
        if (visitor.visitParameters) {
            return visitor.visitParameters(this);
        }
        else {
            return visitor.visitChildren(this);
        }
    }
}
exports.ParametersContext = ParametersContext;
class ExpressionContext extends antlr4_1.ParserRuleContext {
    constructor(parser, parent, invokingState) {
        super(parent, invokingState);
        this.parser = parser;
    }
    basicLit() {
        return this.getTypedRuleContext(BasicLitContext, 0);
    }
    primaryExpr() {
        return this.getTypedRuleContext(PrimaryExprContext, 0);
    }
    RECEIVE() {
        return this.getToken(GoParserUntyped.RECEIVE, 0);
    }
    IDENTIFIER() {
        return this.getToken(GoParserUntyped.IDENTIFIER, 0);
    }
    EXCLAMATION() {
        return this.getToken(GoParserUntyped.EXCLAMATION, 0);
    }
    expression_list() {
        return this.getTypedRuleContexts(ExpressionContext);
    }
    expression(i) {
        return this.getTypedRuleContext(ExpressionContext, i);
    }
    AMPERSAND() {
        return this.getToken(GoParserUntyped.AMPERSAND, 0);
    }
    STAR() {
        return this.getToken(GoParserUntyped.STAR, 0);
    }
    PLUS() {
        return this.getToken(GoParserUntyped.PLUS, 0);
    }
    MINUS() {
        return this.getToken(GoParserUntyped.MINUS, 0);
    }
    L_PAREN() {
        return this.getToken(GoParserUntyped.L_PAREN, 0);
    }
    R_PAREN() {
        return this.getToken(GoParserUntyped.R_PAREN, 0);
    }
    DIV() {
        return this.getToken(GoParserUntyped.DIV, 0);
    }
    MOD() {
        return this.getToken(GoParserUntyped.MOD, 0);
    }
    EQUALS() {
        return this.getToken(GoParserUntyped.EQUALS, 0);
    }
    NOT_EQUALS() {
        return this.getToken(GoParserUntyped.NOT_EQUALS, 0);
    }
    LESS() {
        return this.getToken(GoParserUntyped.LESS, 0);
    }
    LESS_OR_EQUALS() {
        return this.getToken(GoParserUntyped.LESS_OR_EQUALS, 0);
    }
    GREATER() {
        return this.getToken(GoParserUntyped.GREATER, 0);
    }
    GREATER_OR_EQUALS() {
        return this.getToken(GoParserUntyped.GREATER_OR_EQUALS, 0);
    }
    LOGICAL_AND() {
        return this.getToken(GoParserUntyped.LOGICAL_AND, 0);
    }
    LOGICAL_OR() {
        return this.getToken(GoParserUntyped.LOGICAL_OR, 0);
    }
    get ruleIndex() {
        return GoParserUntyped.RULE_expression;
    }
    // @Override
    accept(visitor) {
        if (visitor.visitExpression) {
            return visitor.visitExpression(this);
        }
        else {
            return visitor.visitChildren(this);
        }
    }
}
exports.ExpressionContext = ExpressionContext;
class PrimaryExprContext extends antlr4_1.ParserRuleContext {
    constructor(parser, parent, invokingState) {
        super(parent, invokingState);
        this.parser = parser;
    }
    operand() {
        return this.getTypedRuleContext(OperandContext, 0);
    }
    primaryExpr() {
        return this.getTypedRuleContext(PrimaryExprContext, 0);
    }
    arguments() {
        return this.getTypedRuleContext(ArgumentsContext, 0);
    }
    get ruleIndex() {
        return GoParserUntyped.RULE_primaryExpr;
    }
    // @Override
    accept(visitor) {
        if (visitor.visitPrimaryExpr) {
            return visitor.visitPrimaryExpr(this);
        }
        else {
            return visitor.visitChildren(this);
        }
    }
}
exports.PrimaryExprContext = PrimaryExprContext;
class OperandContext extends antlr4_1.ParserRuleContext {
    constructor(parser, parent, invokingState) {
        super(parent, invokingState);
        this.parser = parser;
    }
    functionLit() {
        return this.getTypedRuleContext(FunctionLitContext, 0);
    }
    IDENTIFIER() {
        return this.getToken(GoParserUntyped.IDENTIFIER, 0);
    }
    get ruleIndex() {
        return GoParserUntyped.RULE_operand;
    }
    // @Override
    accept(visitor) {
        if (visitor.visitOperand) {
            return visitor.visitOperand(this);
        }
        else {
            return visitor.visitChildren(this);
        }
    }
}
exports.OperandContext = OperandContext;
class BasicLitContext extends antlr4_1.ParserRuleContext {
    constructor(parser, parent, invokingState) {
        super(parent, invokingState);
        this.parser = parser;
    }
    BOOL_LIT() {
        return this.getToken(GoParserUntyped.BOOL_LIT, 0);
    }
    DECIMAL_LIT() {
        return this.getToken(GoParserUntyped.DECIMAL_LIT, 0);
    }
    string_() {
        return this.getTypedRuleContext(String_Context, 0);
    }
    FLOAT_LIT() {
        return this.getToken(GoParserUntyped.FLOAT_LIT, 0);
    }
    get ruleIndex() {
        return GoParserUntyped.RULE_basicLit;
    }
    // @Override
    accept(visitor) {
        if (visitor.visitBasicLit) {
            return visitor.visitBasicLit(this);
        }
        else {
            return visitor.visitChildren(this);
        }
    }
}
exports.BasicLitContext = BasicLitContext;
class String_Context extends antlr4_1.ParserRuleContext {
    constructor(parser, parent, invokingState) {
        super(parent, invokingState);
        this.parser = parser;
    }
    RAW_STRING_LIT() {
        return this.getToken(GoParserUntyped.RAW_STRING_LIT, 0);
    }
    INTERPRETED_STRING_LIT() {
        return this.getToken(GoParserUntyped.INTERPRETED_STRING_LIT, 0);
    }
    get ruleIndex() {
        return GoParserUntyped.RULE_string_;
    }
    // @Override
    accept(visitor) {
        if (visitor.visitString_) {
            return visitor.visitString_(this);
        }
        else {
            return visitor.visitChildren(this);
        }
    }
}
exports.String_Context = String_Context;
class FunctionLitContext extends antlr4_1.ParserRuleContext {
    constructor(parser, parent, invokingState) {
        super(parent, invokingState);
        this.parser = parser;
    }
    FUNC() {
        return this.getToken(GoParserUntyped.FUNC, 0);
    }
    parameters() {
        return this.getTypedRuleContext(ParametersContext, 0);
    }
    block() {
        return this.getTypedRuleContext(BlockContext, 0);
    }
    get ruleIndex() {
        return GoParserUntyped.RULE_functionLit;
    }
    // @Override
    accept(visitor) {
        if (visitor.visitFunctionLit) {
            return visitor.visitFunctionLit(this);
        }
        else {
            return visitor.visitChildren(this);
        }
    }
}
exports.FunctionLitContext = FunctionLitContext;
class ArgumentsContext extends antlr4_1.ParserRuleContext {
    constructor(parser, parent, invokingState) {
        super(parent, invokingState);
        this.parser = parser;
    }
    L_PAREN() {
        return this.getToken(GoParserUntyped.L_PAREN, 0);
    }
    R_PAREN() {
        return this.getToken(GoParserUntyped.R_PAREN, 0);
    }
    expressionList() {
        return this.getTypedRuleContext(ExpressionListContext, 0);
    }
    get ruleIndex() {
        return GoParserUntyped.RULE_arguments;
    }
    // @Override
    accept(visitor) {
        if (visitor.visitArguments) {
            return visitor.visitArguments(this);
        }
        else {
            return visitor.visitChildren(this);
        }
    }
}
exports.ArgumentsContext = ArgumentsContext;
class EosContext extends antlr4_1.ParserRuleContext {
    constructor(parser, parent, invokingState) {
        super(parent, invokingState);
        this.parser = parser;
    }
    SEMI() {
        return this.getToken(GoParserUntyped.SEMI, 0);
    }
    EOF() {
        return this.getToken(GoParserUntyped.EOF, 0);
    }
    EOS() {
        return this.getToken(GoParserUntyped.EOS, 0);
    }
    get ruleIndex() {
        return GoParserUntyped.RULE_eos;
    }
    // @Override
    accept(visitor) {
        if (visitor.visitEos) {
            return visitor.visitEos(this);
        }
        else {
            return visitor.visitChildren(this);
        }
    }
}
exports.EosContext = EosContext;
