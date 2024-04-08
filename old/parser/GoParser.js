"use strict";
// Generated from /Users/johannesgottle/Dokumente/Studium/PLI_NUS/PLI_projekt/old/GoParser.g4 by ANTLR 4.13.1
// noinspection ES6UnusedImports,JSUnusedGlobalSymbols,JSUnusedLocalSymbols
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.TypeListContext = exports.TypeSwitchCaseContext = exports.TypeCaseClauseContext = exports.TypeSwitchGuardContext = exports.TypeSwitchStmtContext = exports.ExprSwitchCaseContext = exports.ExprCaseClauseContext = exports.ExprSwitchStmtContext = exports.SwitchStmtContext = exports.IfStmtContext = exports.DeferStmtContext = exports.FallthroughStmtContext = exports.GotoStmtContext = exports.ContinueStmtContext = exports.BreakStmtContext = exports.ReturnStmtContext = exports.LabeledStmtContext = exports.ShortVarDeclContext = exports.Assign_opContext = exports.AssignmentContext = exports.IncDecStmtContext = exports.SendStmtContext = exports.ExpressionStmtContext = exports.SimpleStmtContext = exports.StatementContext = exports.StatementListContext = exports.BlockContext = exports.VarSpecContext = exports.VarDeclContext = exports.ReceiverContext = exports.MethodDeclContext = exports.FunctionDeclContext = exports.TypeTermContext = exports.TypeElementContext = exports.TypeParameterDeclContext = exports.TypeParametersContext = exports.TypeDefContext = exports.AliasDeclContext = exports.TypeSpecContext = exports.TypeDeclContext = exports.ExpressionListContext = exports.IdentifierListContext = exports.ConstSpecContext = exports.ConstDeclContext = exports.DeclarationContext = exports.ImportPathContext = exports.ImportSpecContext = exports.ImportDeclContext = exports.PackageClauseContext = exports.SourceFileContext = void 0;
exports.TypeAssertionContext = exports.Slice_Context = exports.IndexContext = exports.FunctionLitContext = exports.EmbeddedFieldContext = exports.String_Context = exports.FieldDeclContext = exports.StructTypeContext = exports.ElementContext = exports.KeyContext = exports.KeyedElementContext = exports.ElementListContext = exports.LiteralValueContext = exports.LiteralTypeContext = exports.CompositeLitContext = exports.QualifiedIdentContext = exports.OperandNameContext = exports.IntegerContext = exports.BasicLitContext = exports.LiteralContext = exports.OperandContext = exports.ConversionContext = exports.PrimaryExprContext = exports.ExpressionContext = exports.ParameterDeclContext = exports.ParametersContext = exports.ResultContext = exports.SignatureContext = exports.FunctionTypeContext = exports.MethodSpecContext = exports.ChannelTypeContext = exports.MapTypeContext = exports.SliceTypeContext = exports.InterfaceTypeContext = exports.PointerTypeContext = exports.ElementTypeContext = exports.ArrayLengthContext = exports.ArrayTypeContext = exports.TypeLitContext = exports.TypeNameContext = exports.TypeArgsContext = exports.Type_Context = exports.GoStmtContext = exports.RangeClauseContext = exports.ForClauseContext = exports.ForStmtContext = exports.RecvStmtContext = exports.CommCaseContext = exports.CommClauseContext = exports.SelectStmtContext = void 0;
exports.EosContext = exports.MethodExprContext = exports.ArgumentsContext = void 0;
const antlr4_1 = require("antlr4");
const GoParserBase_1 = __importDefault(require("./GoParserBase"));
class GoParser extends GoParserBase_1.default {
    get grammarFileName() { return "GoParser.g4"; }
    get literalNames() { return GoParser.literalNames; }
    get symbolicNames() { return GoParser.symbolicNames; }
    get ruleNames() { return GoParser.ruleNames; }
    get serializedATN() { return GoParser._serializedATN; }
    createFailedPredicateException(predicate, message) {
        return new antlr4_1.FailedPredicateException(this, predicate, message);
    }
    constructor(input) {
        super(input);
        this._interp = new antlr4_1.ParserATNSimulator(this, GoParser._ATN, GoParser.DecisionsToDFA, new antlr4_1.PredictionContextCache());
    }
    // @RuleVersion(0)
    sourceFile() {
        let localctx = new SourceFileContext(this, this._ctx, this.state);
        this.enterRule(localctx, 0, GoParser.RULE_sourceFile);
        let _la;
        try {
            this.enterOuterAlt(localctx, 1);
            {
                this.state = 206;
                this.packageClause();
                this.state = 207;
                this.eos();
                this.state = 213;
                this._errHandler.sync(this);
                _la = this._input.LA(1);
                while (_la === 23) {
                    {
                        {
                            this.state = 208;
                            this.importDecl();
                            this.state = 209;
                            this.eos();
                        }
                    }
                    this.state = 215;
                    this._errHandler.sync(this);
                    _la = this._input.LA(1);
                }
                this.state = 225;
                this._errHandler.sync(this);
                _la = this._input.LA(1);
                while ((((_la) & ~0x1F) === 0 && ((1 << _la) & 34668552) !== 0)) {
                    {
                        {
                            this.state = 219;
                            this._errHandler.sync(this);
                            switch (this._interp.adaptivePredict(this._input, 1, this._ctx)) {
                                case 1:
                                    {
                                        this.state = 216;
                                        this.functionDecl();
                                    }
                                    break;
                                case 2:
                                    {
                                        this.state = 217;
                                        this.methodDecl();
                                    }
                                    break;
                                case 3:
                                    {
                                        this.state = 218;
                                        this.declaration();
                                    }
                                    break;
                            }
                            this.state = 221;
                            this.eos();
                        }
                    }
                    this.state = 227;
                    this._errHandler.sync(this);
                    _la = this._input.LA(1);
                }
                this.state = 228;
                this.match(GoParser.EOF);
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
    packageClause() {
        let localctx = new PackageClauseContext(this, this._ctx, this.state);
        this.enterRule(localctx, 2, GoParser.RULE_packageClause);
        try {
            this.enterOuterAlt(localctx, 1);
            {
                this.state = 230;
                this.match(GoParser.PACKAGE);
                this.state = 231;
                localctx._packageName = this.match(GoParser.IDENTIFIER);
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
    importDecl() {
        let localctx = new ImportDeclContext(this, this._ctx, this.state);
        this.enterRule(localctx, 4, GoParser.RULE_importDecl);
        let _la;
        try {
            this.enterOuterAlt(localctx, 1);
            {
                this.state = 233;
                this.match(GoParser.IMPORT);
                this.state = 245;
                this._errHandler.sync(this);
                switch (this._input.LA(1)) {
                    case 27:
                    case 38:
                    case 79:
                    case 80:
                        {
                            this.state = 234;
                            this.importSpec();
                        }
                        break;
                    case 28:
                        {
                            this.state = 235;
                            this.match(GoParser.L_PAREN);
                            this.state = 241;
                            this._errHandler.sync(this);
                            _la = this._input.LA(1);
                            while (_la === 27 || _la === 38 || _la === 79 || _la === 80) {
                                {
                                    {
                                        this.state = 236;
                                        this.importSpec();
                                        this.state = 237;
                                        this.eos();
                                    }
                                }
                                this.state = 243;
                                this._errHandler.sync(this);
                                _la = this._input.LA(1);
                            }
                            this.state = 244;
                            this.match(GoParser.R_PAREN);
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
    importSpec() {
        let localctx = new ImportSpecContext(this, this._ctx, this.state);
        this.enterRule(localctx, 6, GoParser.RULE_importSpec);
        let _la;
        try {
            this.enterOuterAlt(localctx, 1);
            {
                this.state = 248;
                this._errHandler.sync(this);
                _la = this._input.LA(1);
                if (_la === 27 || _la === 38) {
                    {
                        this.state = 247;
                        localctx._alias = this._input.LT(1);
                        _la = this._input.LA(1);
                        if (!(_la === 27 || _la === 38)) {
                            localctx._alias = this._errHandler.recoverInline(this);
                        }
                        else {
                            this._errHandler.reportMatch(this);
                            this.consume();
                        }
                    }
                }
                this.state = 250;
                this.importPath();
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
    importPath() {
        let localctx = new ImportPathContext(this, this._ctx, this.state);
        this.enterRule(localctx, 8, GoParser.RULE_importPath);
        try {
            this.enterOuterAlt(localctx, 1);
            {
                this.state = 252;
                this.string_();
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
        this.enterRule(localctx, 10, GoParser.RULE_declaration);
        try {
            this.state = 257;
            this._errHandler.sync(this);
            switch (this._input.LA(1)) {
                case 16:
                    this.enterOuterAlt(localctx, 1);
                    {
                        this.state = 254;
                        this.constDecl();
                    }
                    break;
                case 20:
                    this.enterOuterAlt(localctx, 2);
                    {
                        this.state = 255;
                        this.typeDecl();
                    }
                    break;
                case 25:
                    this.enterOuterAlt(localctx, 3);
                    {
                        this.state = 256;
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
        this.enterRule(localctx, 12, GoParser.RULE_constDecl);
        let _la;
        try {
            this.enterOuterAlt(localctx, 1);
            {
                this.state = 259;
                this.match(GoParser.CONST);
                this.state = 271;
                this._errHandler.sync(this);
                switch (this._input.LA(1)) {
                    case 27:
                        {
                            this.state = 260;
                            this.constSpec();
                        }
                        break;
                    case 28:
                        {
                            this.state = 261;
                            this.match(GoParser.L_PAREN);
                            this.state = 267;
                            this._errHandler.sync(this);
                            _la = this._input.LA(1);
                            while (_la === 27) {
                                {
                                    {
                                        this.state = 262;
                                        this.constSpec();
                                        this.state = 263;
                                        this.eos();
                                    }
                                }
                                this.state = 269;
                                this._errHandler.sync(this);
                                _la = this._input.LA(1);
                            }
                            this.state = 270;
                            this.match(GoParser.R_PAREN);
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
    constSpec() {
        let localctx = new ConstSpecContext(this, this._ctx, this.state);
        this.enterRule(localctx, 14, GoParser.RULE_constSpec);
        let _la;
        try {
            this.enterOuterAlt(localctx, 1);
            {
                this.state = 273;
                this.identifierList();
                {
                    this.state = 275;
                    this._errHandler.sync(this);
                    _la = this._input.LA(1);
                    if (((((_la - 3)) & ~0x1F) === 0 && ((1 << (_la - 3)) & 587203011) !== 0) || _la === 62 || _la === 64) {
                        {
                            this.state = 274;
                            this.type_();
                        }
                    }
                    this.state = 277;
                    this.match(GoParser.ASSIGN);
                    this.state = 278;
                    this.expressionList();
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
    identifierList() {
        let localctx = new IdentifierListContext(this, this._ctx, this.state);
        this.enterRule(localctx, 16, GoParser.RULE_identifierList);
        let _la;
        try {
            this.enterOuterAlt(localctx, 1);
            {
                this.state = 280;
                this.match(GoParser.IDENTIFIER);
                this.state = 285;
                this._errHandler.sync(this);
                _la = this._input.LA(1);
                while (_la === 35) {
                    {
                        {
                            this.state = 281;
                            this.match(GoParser.COMMA);
                            this.state = 282;
                            this.match(GoParser.IDENTIFIER);
                        }
                    }
                    this.state = 287;
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
        this.enterRule(localctx, 18, GoParser.RULE_expressionList);
        try {
            let _alt;
            this.enterOuterAlt(localctx, 1);
            {
                this.state = 288;
                this.expression(0);
                this.state = 293;
                this._errHandler.sync(this);
                _alt = this._interp.adaptivePredict(this._input, 11, this._ctx);
                while (_alt !== 2 && _alt !== antlr4_1.ATN.INVALID_ALT_NUMBER) {
                    if (_alt === 1) {
                        {
                            {
                                this.state = 289;
                                this.match(GoParser.COMMA);
                                this.state = 290;
                                this.expression(0);
                            }
                        }
                    }
                    this.state = 295;
                    this._errHandler.sync(this);
                    _alt = this._interp.adaptivePredict(this._input, 11, this._ctx);
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
    typeDecl() {
        let localctx = new TypeDeclContext(this, this._ctx, this.state);
        this.enterRule(localctx, 20, GoParser.RULE_typeDecl);
        let _la;
        try {
            this.enterOuterAlt(localctx, 1);
            {
                this.state = 296;
                this.match(GoParser.TYPE);
                this.state = 308;
                this._errHandler.sync(this);
                switch (this._input.LA(1)) {
                    case 27:
                        {
                            this.state = 297;
                            this.typeSpec();
                        }
                        break;
                    case 28:
                        {
                            this.state = 298;
                            this.match(GoParser.L_PAREN);
                            this.state = 304;
                            this._errHandler.sync(this);
                            _la = this._input.LA(1);
                            while (_la === 27) {
                                {
                                    {
                                        this.state = 299;
                                        this.typeSpec();
                                        this.state = 300;
                                        this.eos();
                                    }
                                }
                                this.state = 306;
                                this._errHandler.sync(this);
                                _la = this._input.LA(1);
                            }
                            this.state = 307;
                            this.match(GoParser.R_PAREN);
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
    typeSpec() {
        let localctx = new TypeSpecContext(this, this._ctx, this.state);
        this.enterRule(localctx, 22, GoParser.RULE_typeSpec);
        try {
            this.state = 312;
            this._errHandler.sync(this);
            switch (this._interp.adaptivePredict(this._input, 14, this._ctx)) {
                case 1:
                    this.enterOuterAlt(localctx, 1);
                    {
                        this.state = 310;
                        this.aliasDecl();
                    }
                    break;
                case 2:
                    this.enterOuterAlt(localctx, 2);
                    {
                        this.state = 311;
                        this.typeDef();
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
    aliasDecl() {
        let localctx = new AliasDeclContext(this, this._ctx, this.state);
        this.enterRule(localctx, 24, GoParser.RULE_aliasDecl);
        try {
            this.enterOuterAlt(localctx, 1);
            {
                this.state = 314;
                this.match(GoParser.IDENTIFIER);
                this.state = 315;
                this.match(GoParser.ASSIGN);
                this.state = 316;
                this.type_();
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
    typeDef() {
        let localctx = new TypeDefContext(this, this._ctx, this.state);
        this.enterRule(localctx, 26, GoParser.RULE_typeDef);
        try {
            this.enterOuterAlt(localctx, 1);
            {
                this.state = 318;
                this.match(GoParser.IDENTIFIER);
                this.state = 320;
                this._errHandler.sync(this);
                switch (this._interp.adaptivePredict(this._input, 15, this._ctx)) {
                    case 1:
                        {
                            this.state = 319;
                            this.typeParameters();
                        }
                        break;
                }
                this.state = 322;
                this.type_();
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
    typeParameters() {
        let localctx = new TypeParametersContext(this, this._ctx, this.state);
        this.enterRule(localctx, 28, GoParser.RULE_typeParameters);
        let _la;
        try {
            this.enterOuterAlt(localctx, 1);
            {
                this.state = 324;
                this.match(GoParser.L_BRACKET);
                this.state = 325;
                this.typeParameterDecl();
                this.state = 330;
                this._errHandler.sync(this);
                _la = this._input.LA(1);
                while (_la === 35) {
                    {
                        {
                            this.state = 326;
                            this.match(GoParser.COMMA);
                            this.state = 327;
                            this.typeParameterDecl();
                        }
                    }
                    this.state = 332;
                    this._errHandler.sync(this);
                    _la = this._input.LA(1);
                }
                this.state = 333;
                this.match(GoParser.R_BRACKET);
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
    typeParameterDecl() {
        let localctx = new TypeParameterDeclContext(this, this._ctx, this.state);
        this.enterRule(localctx, 30, GoParser.RULE_typeParameterDecl);
        try {
            this.enterOuterAlt(localctx, 1);
            {
                this.state = 335;
                this.identifierList();
                this.state = 336;
                this.typeElement();
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
    typeElement() {
        let localctx = new TypeElementContext(this, this._ctx, this.state);
        this.enterRule(localctx, 32, GoParser.RULE_typeElement);
        try {
            let _alt;
            this.enterOuterAlt(localctx, 1);
            {
                this.state = 338;
                this.typeTerm();
                this.state = 343;
                this._errHandler.sync(this);
                _alt = this._interp.adaptivePredict(this._input, 17, this._ctx);
                while (_alt !== 2 && _alt !== antlr4_1.ATN.INVALID_ALT_NUMBER) {
                    if (_alt === 1) {
                        {
                            {
                                this.state = 339;
                                this.match(GoParser.OR);
                                this.state = 340;
                                this.typeTerm();
                            }
                        }
                    }
                    this.state = 345;
                    this._errHandler.sync(this);
                    _alt = this._interp.adaptivePredict(this._input, 17, this._ctx);
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
    typeTerm() {
        let localctx = new TypeTermContext(this, this._ctx, this.state);
        this.enterRule(localctx, 34, GoParser.RULE_typeTerm);
        let _la;
        try {
            this.enterOuterAlt(localctx, 1);
            {
                this.state = 347;
                this._errHandler.sync(this);
                _la = this._input.LA(1);
                if (_la === 57) {
                    {
                        this.state = 346;
                        this.match(GoParser.UNDERLYING);
                    }
                }
                this.state = 349;
                this.type_();
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
        this.enterRule(localctx, 36, GoParser.RULE_functionDecl);
        let _la;
        try {
            this.enterOuterAlt(localctx, 1);
            {
                this.state = 351;
                this.match(GoParser.FUNC);
                this.state = 352;
                this.match(GoParser.IDENTIFIER);
                this.state = 354;
                this._errHandler.sync(this);
                _la = this._input.LA(1);
                if (_la === 32) {
                    {
                        this.state = 353;
                        this.typeParameters();
                    }
                }
                this.state = 356;
                this.signature();
                this.state = 358;
                this._errHandler.sync(this);
                switch (this._interp.adaptivePredict(this._input, 20, this._ctx)) {
                    case 1:
                        {
                            this.state = 357;
                            this.block();
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
    methodDecl() {
        let localctx = new MethodDeclContext(this, this._ctx, this.state);
        this.enterRule(localctx, 38, GoParser.RULE_methodDecl);
        try {
            this.enterOuterAlt(localctx, 1);
            {
                this.state = 360;
                this.match(GoParser.FUNC);
                this.state = 361;
                this.receiver();
                this.state = 362;
                this.match(GoParser.IDENTIFIER);
                this.state = 363;
                this.signature();
                this.state = 365;
                this._errHandler.sync(this);
                switch (this._interp.adaptivePredict(this._input, 21, this._ctx)) {
                    case 1:
                        {
                            this.state = 364;
                            this.block();
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
    receiver() {
        let localctx = new ReceiverContext(this, this._ctx, this.state);
        this.enterRule(localctx, 40, GoParser.RULE_receiver);
        try {
            this.enterOuterAlt(localctx, 1);
            {
                this.state = 367;
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
    varDecl() {
        let localctx = new VarDeclContext(this, this._ctx, this.state);
        this.enterRule(localctx, 42, GoParser.RULE_varDecl);
        let _la;
        try {
            this.enterOuterAlt(localctx, 1);
            {
                this.state = 369;
                this.match(GoParser.VAR);
                this.state = 381;
                this._errHandler.sync(this);
                switch (this._input.LA(1)) {
                    case 27:
                        {
                            this.state = 370;
                            this.varSpec();
                        }
                        break;
                    case 28:
                        {
                            this.state = 371;
                            this.match(GoParser.L_PAREN);
                            this.state = 377;
                            this._errHandler.sync(this);
                            _la = this._input.LA(1);
                            while (_la === 27) {
                                {
                                    {
                                        this.state = 372;
                                        this.varSpec();
                                        this.state = 373;
                                        this.eos();
                                    }
                                }
                                this.state = 379;
                                this._errHandler.sync(this);
                                _la = this._input.LA(1);
                            }
                            this.state = 380;
                            this.match(GoParser.R_PAREN);
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
    varSpec() {
        let localctx = new VarSpecContext(this, this._ctx, this.state);
        this.enterRule(localctx, 44, GoParser.RULE_varSpec);
        try {
            this.enterOuterAlt(localctx, 1);
            {
                this.state = 383;
                this.identifierList();
                this.state = 391;
                this._errHandler.sync(this);
                switch (this._input.LA(1)) {
                    case 3:
                    case 4:
                    case 9:
                    case 10:
                    case 11:
                    case 27:
                    case 28:
                    case 32:
                    case 62:
                    case 64:
                        {
                            this.state = 384;
                            this.type_();
                            this.state = 387;
                            this._errHandler.sync(this);
                            switch (this._interp.adaptivePredict(this._input, 24, this._ctx)) {
                                case 1:
                                    {
                                        this.state = 385;
                                        this.match(GoParser.ASSIGN);
                                        this.state = 386;
                                        this.expressionList();
                                    }
                                    break;
                            }
                        }
                        break;
                    case 34:
                        {
                            this.state = 389;
                            this.match(GoParser.ASSIGN);
                            this.state = 390;
                            this.expressionList();
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
    block() {
        let localctx = new BlockContext(this, this._ctx, this.state);
        this.enterRule(localctx, 46, GoParser.RULE_block);
        try {
            this.enterOuterAlt(localctx, 1);
            {
                this.state = 393;
                this.match(GoParser.L_CURLY);
                this.state = 395;
                this._errHandler.sync(this);
                switch (this._interp.adaptivePredict(this._input, 26, this._ctx)) {
                    case 1:
                        {
                            this.state = 394;
                            this.statementList();
                        }
                        break;
                }
                this.state = 397;
                this.match(GoParser.R_CURLY);
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
        this.enterRule(localctx, 48, GoParser.RULE_statementList);
        let _la;
        try {
            let _alt;
            this.enterOuterAlt(localctx, 1);
            {
                this.state = 411;
                this._errHandler.sync(this);
                _alt = 1;
                do {
                    switch (_alt) {
                        case 1:
                            {
                                {
                                    this.state = 406;
                                    this._errHandler.sync(this);
                                    switch (this._interp.adaptivePredict(this._input, 29, this._ctx)) {
                                        case 1:
                                            {
                                                this.state = 400;
                                                this._errHandler.sync(this);
                                                _la = this._input.LA(1);
                                                if (_la === 36) {
                                                    {
                                                        this.state = 399;
                                                        this.match(GoParser.SEMI);
                                                    }
                                                }
                                            }
                                            break;
                                        case 2:
                                            {
                                                this.state = 403;
                                                this._errHandler.sync(this);
                                                _la = this._input.LA(1);
                                                if (_la === 88) {
                                                    {
                                                        this.state = 402;
                                                        this.match(GoParser.EOS);
                                                    }
                                                }
                                            }
                                            break;
                                        case 3:
                                            {
                                                this.state = 405;
                                                if (!(this.closingBracket())) {
                                                    throw this.createFailedPredicateException("this.closingBracket()");
                                                }
                                            }
                                            break;
                                    }
                                    this.state = 408;
                                    this.statement();
                                    this.state = 409;
                                    this.eos();
                                }
                            }
                            break;
                        default:
                            throw new antlr4_1.NoViableAltException(this);
                    }
                    this.state = 413;
                    this._errHandler.sync(this);
                    _alt = this._interp.adaptivePredict(this._input, 30, this._ctx);
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
        this.enterRule(localctx, 50, GoParser.RULE_statement);
        try {
            this.state = 430;
            this._errHandler.sync(this);
            switch (this._interp.adaptivePredict(this._input, 31, this._ctx)) {
                case 1:
                    this.enterOuterAlt(localctx, 1);
                    {
                        this.state = 415;
                        this.declaration();
                    }
                    break;
                case 2:
                    this.enterOuterAlt(localctx, 2);
                    {
                        this.state = 416;
                        this.labeledStmt();
                    }
                    break;
                case 3:
                    this.enterOuterAlt(localctx, 3);
                    {
                        this.state = 417;
                        this.simpleStmt();
                    }
                    break;
                case 4:
                    this.enterOuterAlt(localctx, 4);
                    {
                        this.state = 418;
                        this.goStmt();
                    }
                    break;
                case 5:
                    this.enterOuterAlt(localctx, 5);
                    {
                        this.state = 419;
                        this.returnStmt();
                    }
                    break;
                case 6:
                    this.enterOuterAlt(localctx, 6);
                    {
                        this.state = 420;
                        this.breakStmt();
                    }
                    break;
                case 7:
                    this.enterOuterAlt(localctx, 7);
                    {
                        this.state = 421;
                        this.continueStmt();
                    }
                    break;
                case 8:
                    this.enterOuterAlt(localctx, 8);
                    {
                        this.state = 422;
                        this.gotoStmt();
                    }
                    break;
                case 9:
                    this.enterOuterAlt(localctx, 9);
                    {
                        this.state = 423;
                        this.fallthroughStmt();
                    }
                    break;
                case 10:
                    this.enterOuterAlt(localctx, 10);
                    {
                        this.state = 424;
                        this.block();
                    }
                    break;
                case 11:
                    this.enterOuterAlt(localctx, 11);
                    {
                        this.state = 425;
                        this.ifStmt();
                    }
                    break;
                case 12:
                    this.enterOuterAlt(localctx, 12);
                    {
                        this.state = 426;
                        this.switchStmt();
                    }
                    break;
                case 13:
                    this.enterOuterAlt(localctx, 13);
                    {
                        this.state = 427;
                        this.selectStmt();
                    }
                    break;
                case 14:
                    this.enterOuterAlt(localctx, 14);
                    {
                        this.state = 428;
                        this.forStmt();
                    }
                    break;
                case 15:
                    this.enterOuterAlt(localctx, 15);
                    {
                        this.state = 429;
                        this.deferStmt();
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
    simpleStmt() {
        let localctx = new SimpleStmtContext(this, this._ctx, this.state);
        this.enterRule(localctx, 52, GoParser.RULE_simpleStmt);
        try {
            this.state = 437;
            this._errHandler.sync(this);
            switch (this._interp.adaptivePredict(this._input, 32, this._ctx)) {
                case 1:
                    this.enterOuterAlt(localctx, 1);
                    {
                        this.state = 432;
                        this.sendStmt();
                    }
                    break;
                case 2:
                    this.enterOuterAlt(localctx, 2);
                    {
                        this.state = 433;
                        this.incDecStmt();
                    }
                    break;
                case 3:
                    this.enterOuterAlt(localctx, 3);
                    {
                        this.state = 434;
                        this.assignment();
                    }
                    break;
                case 4:
                    this.enterOuterAlt(localctx, 4);
                    {
                        this.state = 435;
                        this.expressionStmt();
                    }
                    break;
                case 5:
                    this.enterOuterAlt(localctx, 5);
                    {
                        this.state = 436;
                        this.shortVarDecl();
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
        this.enterRule(localctx, 54, GoParser.RULE_expressionStmt);
        try {
            this.enterOuterAlt(localctx, 1);
            {
                this.state = 439;
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
        this.enterRule(localctx, 56, GoParser.RULE_sendStmt);
        try {
            this.enterOuterAlt(localctx, 1);
            {
                this.state = 441;
                localctx._channel = this.expression(0);
                this.state = 442;
                this.match(GoParser.RECEIVE);
                this.state = 443;
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
    incDecStmt() {
        let localctx = new IncDecStmtContext(this, this._ctx, this.state);
        this.enterRule(localctx, 58, GoParser.RULE_incDecStmt);
        let _la;
        try {
            this.enterOuterAlt(localctx, 1);
            {
                this.state = 445;
                this.expression(0);
                this.state = 446;
                _la = this._input.LA(1);
                if (!(_la === 39 || _la === 40)) {
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
    assignment() {
        let localctx = new AssignmentContext(this, this._ctx, this.state);
        this.enterRule(localctx, 60, GoParser.RULE_assignment);
        try {
            this.enterOuterAlt(localctx, 1);
            {
                this.state = 448;
                this.expressionList();
                this.state = 449;
                this.assign_op();
                this.state = 450;
                this.expressionList();
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
    assign_op() {
        let localctx = new Assign_opContext(this, this._ctx, this.state);
        this.enterRule(localctx, 62, GoParser.RULE_assign_op);
        let _la;
        try {
            this.enterOuterAlt(localctx, 1);
            {
                this.state = 453;
                this._errHandler.sync(this);
                _la = this._input.LA(1);
                if (((((_la - 51)) & ~0x1F) === 0 && ((1 << (_la - 51)) & 7999) !== 0)) {
                    {
                        this.state = 452;
                        _la = this._input.LA(1);
                        if (!(((((_la - 51)) & ~0x1F) === 0 && ((1 << (_la - 51)) & 7999) !== 0))) {
                            this._errHandler.recoverInline(this);
                        }
                        else {
                            this._errHandler.reportMatch(this);
                            this.consume();
                        }
                    }
                }
                this.state = 455;
                this.match(GoParser.ASSIGN);
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
    shortVarDecl() {
        let localctx = new ShortVarDeclContext(this, this._ctx, this.state);
        this.enterRule(localctx, 64, GoParser.RULE_shortVarDecl);
        try {
            this.enterOuterAlt(localctx, 1);
            {
                this.state = 457;
                this.identifierList();
                this.state = 458;
                this.match(GoParser.DECLARE_ASSIGN);
                this.state = 459;
                this.expressionList();
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
    labeledStmt() {
        let localctx = new LabeledStmtContext(this, this._ctx, this.state);
        this.enterRule(localctx, 66, GoParser.RULE_labeledStmt);
        try {
            this.enterOuterAlt(localctx, 1);
            {
                this.state = 461;
                this.match(GoParser.IDENTIFIER);
                this.state = 462;
                this.match(GoParser.COLON);
                this.state = 464;
                this._errHandler.sync(this);
                switch (this._interp.adaptivePredict(this._input, 34, this._ctx)) {
                    case 1:
                        {
                            this.state = 463;
                            this.statement();
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
    returnStmt() {
        let localctx = new ReturnStmtContext(this, this._ctx, this.state);
        this.enterRule(localctx, 68, GoParser.RULE_returnStmt);
        try {
            this.enterOuterAlt(localctx, 1);
            {
                this.state = 466;
                this.match(GoParser.RETURN);
                this.state = 468;
                this._errHandler.sync(this);
                switch (this._interp.adaptivePredict(this._input, 35, this._ctx)) {
                    case 1:
                        {
                            this.state = 467;
                            this.expressionList();
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
    breakStmt() {
        let localctx = new BreakStmtContext(this, this._ctx, this.state);
        this.enterRule(localctx, 70, GoParser.RULE_breakStmt);
        try {
            this.enterOuterAlt(localctx, 1);
            {
                this.state = 470;
                this.match(GoParser.BREAK);
                this.state = 472;
                this._errHandler.sync(this);
                switch (this._interp.adaptivePredict(this._input, 36, this._ctx)) {
                    case 1:
                        {
                            this.state = 471;
                            this.match(GoParser.IDENTIFIER);
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
    continueStmt() {
        let localctx = new ContinueStmtContext(this, this._ctx, this.state);
        this.enterRule(localctx, 72, GoParser.RULE_continueStmt);
        try {
            this.enterOuterAlt(localctx, 1);
            {
                this.state = 474;
                this.match(GoParser.CONTINUE);
                this.state = 476;
                this._errHandler.sync(this);
                switch (this._interp.adaptivePredict(this._input, 37, this._ctx)) {
                    case 1:
                        {
                            this.state = 475;
                            this.match(GoParser.IDENTIFIER);
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
    gotoStmt() {
        let localctx = new GotoStmtContext(this, this._ctx, this.state);
        this.enterRule(localctx, 74, GoParser.RULE_gotoStmt);
        try {
            this.enterOuterAlt(localctx, 1);
            {
                this.state = 478;
                this.match(GoParser.GOTO);
                this.state = 479;
                this.match(GoParser.IDENTIFIER);
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
    fallthroughStmt() {
        let localctx = new FallthroughStmtContext(this, this._ctx, this.state);
        this.enterRule(localctx, 76, GoParser.RULE_fallthroughStmt);
        try {
            this.enterOuterAlt(localctx, 1);
            {
                this.state = 481;
                this.match(GoParser.FALLTHROUGH);
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
    deferStmt() {
        let localctx = new DeferStmtContext(this, this._ctx, this.state);
        this.enterRule(localctx, 78, GoParser.RULE_deferStmt);
        try {
            this.enterOuterAlt(localctx, 1);
            {
                this.state = 483;
                this.match(GoParser.DEFER);
                this.state = 484;
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
        this.enterRule(localctx, 80, GoParser.RULE_ifStmt);
        try {
            this.enterOuterAlt(localctx, 1);
            {
                this.state = 486;
                this.match(GoParser.IF);
                this.state = 495;
                this._errHandler.sync(this);
                switch (this._interp.adaptivePredict(this._input, 38, this._ctx)) {
                    case 1:
                        {
                            this.state = 487;
                            this.expression(0);
                        }
                        break;
                    case 2:
                        {
                            this.state = 488;
                            this.eos();
                            this.state = 489;
                            this.expression(0);
                        }
                        break;
                    case 3:
                        {
                            this.state = 491;
                            this.simpleStmt();
                            this.state = 492;
                            this.eos();
                            this.state = 493;
                            this.expression(0);
                        }
                        break;
                }
                this.state = 497;
                this.block();
                this.state = 503;
                this._errHandler.sync(this);
                switch (this._interp.adaptivePredict(this._input, 40, this._ctx)) {
                    case 1:
                        {
                            this.state = 498;
                            this.match(GoParser.ELSE);
                            this.state = 501;
                            this._errHandler.sync(this);
                            switch (this._input.LA(1)) {
                                case 18:
                                    {
                                        this.state = 499;
                                        this.ifStmt();
                                    }
                                    break;
                                case 30:
                                    {
                                        this.state = 500;
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
    switchStmt() {
        let localctx = new SwitchStmtContext(this, this._ctx, this.state);
        this.enterRule(localctx, 82, GoParser.RULE_switchStmt);
        try {
            this.state = 507;
            this._errHandler.sync(this);
            switch (this._interp.adaptivePredict(this._input, 41, this._ctx)) {
                case 1:
                    this.enterOuterAlt(localctx, 1);
                    {
                        this.state = 505;
                        this.exprSwitchStmt();
                    }
                    break;
                case 2:
                    this.enterOuterAlt(localctx, 2);
                    {
                        this.state = 506;
                        this.typeSwitchStmt();
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
    exprSwitchStmt() {
        let localctx = new ExprSwitchStmtContext(this, this._ctx, this.state);
        this.enterRule(localctx, 84, GoParser.RULE_exprSwitchStmt);
        let _la;
        try {
            this.enterOuterAlt(localctx, 1);
            {
                this.state = 509;
                this.match(GoParser.SWITCH);
                this.state = 520;
                this._errHandler.sync(this);
                switch (this._interp.adaptivePredict(this._input, 45, this._ctx)) {
                    case 1:
                        {
                            this.state = 511;
                            this._errHandler.sync(this);
                            _la = this._input.LA(1);
                            if (((((_la - 3)) & ~0x1F) === 0 && ((1 << (_la - 3)) & 595591619) !== 0) || ((((_la - 58)) & ~0x1F) === 0 && ((1 << (_la - 58)) & 6344703) !== 0)) {
                                {
                                    this.state = 510;
                                    this.expression(0);
                                }
                            }
                        }
                        break;
                    case 2:
                        {
                            this.state = 514;
                            this._errHandler.sync(this);
                            switch (this._interp.adaptivePredict(this._input, 43, this._ctx)) {
                                case 1:
                                    {
                                        this.state = 513;
                                        this.simpleStmt();
                                    }
                                    break;
                            }
                            this.state = 516;
                            this.eos();
                            this.state = 518;
                            this._errHandler.sync(this);
                            _la = this._input.LA(1);
                            if (((((_la - 3)) & ~0x1F) === 0 && ((1 << (_la - 3)) & 595591619) !== 0) || ((((_la - 58)) & ~0x1F) === 0 && ((1 << (_la - 58)) & 6344703) !== 0)) {
                                {
                                    this.state = 517;
                                    this.expression(0);
                                }
                            }
                        }
                        break;
                }
                this.state = 522;
                this.match(GoParser.L_CURLY);
                this.state = 526;
                this._errHandler.sync(this);
                _la = this._input.LA(1);
                while (_la === 2 || _la === 6) {
                    {
                        {
                            this.state = 523;
                            this.exprCaseClause();
                        }
                    }
                    this.state = 528;
                    this._errHandler.sync(this);
                    _la = this._input.LA(1);
                }
                this.state = 529;
                this.match(GoParser.R_CURLY);
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
    exprCaseClause() {
        let localctx = new ExprCaseClauseContext(this, this._ctx, this.state);
        this.enterRule(localctx, 86, GoParser.RULE_exprCaseClause);
        try {
            this.enterOuterAlt(localctx, 1);
            {
                this.state = 531;
                this.exprSwitchCase();
                this.state = 532;
                this.match(GoParser.COLON);
                this.state = 534;
                this._errHandler.sync(this);
                switch (this._interp.adaptivePredict(this._input, 47, this._ctx)) {
                    case 1:
                        {
                            this.state = 533;
                            this.statementList();
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
    exprSwitchCase() {
        let localctx = new ExprSwitchCaseContext(this, this._ctx, this.state);
        this.enterRule(localctx, 88, GoParser.RULE_exprSwitchCase);
        try {
            this.state = 539;
            this._errHandler.sync(this);
            switch (this._input.LA(1)) {
                case 6:
                    this.enterOuterAlt(localctx, 1);
                    {
                        this.state = 536;
                        this.match(GoParser.CASE);
                        this.state = 537;
                        this.expressionList();
                    }
                    break;
                case 2:
                    this.enterOuterAlt(localctx, 2);
                    {
                        this.state = 538;
                        this.match(GoParser.DEFAULT);
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
    typeSwitchStmt() {
        let localctx = new TypeSwitchStmtContext(this, this._ctx, this.state);
        this.enterRule(localctx, 90, GoParser.RULE_typeSwitchStmt);
        let _la;
        try {
            this.enterOuterAlt(localctx, 1);
            {
                this.state = 541;
                this.match(GoParser.SWITCH);
                this.state = 550;
                this._errHandler.sync(this);
                switch (this._interp.adaptivePredict(this._input, 49, this._ctx)) {
                    case 1:
                        {
                            this.state = 542;
                            this.typeSwitchGuard();
                        }
                        break;
                    case 2:
                        {
                            this.state = 543;
                            this.eos();
                            this.state = 544;
                            this.typeSwitchGuard();
                        }
                        break;
                    case 3:
                        {
                            this.state = 546;
                            this.simpleStmt();
                            this.state = 547;
                            this.eos();
                            this.state = 548;
                            this.typeSwitchGuard();
                        }
                        break;
                }
                this.state = 552;
                this.match(GoParser.L_CURLY);
                this.state = 556;
                this._errHandler.sync(this);
                _la = this._input.LA(1);
                while (_la === 2 || _la === 6) {
                    {
                        {
                            this.state = 553;
                            this.typeCaseClause();
                        }
                    }
                    this.state = 558;
                    this._errHandler.sync(this);
                    _la = this._input.LA(1);
                }
                this.state = 559;
                this.match(GoParser.R_CURLY);
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
    typeSwitchGuard() {
        let localctx = new TypeSwitchGuardContext(this, this._ctx, this.state);
        this.enterRule(localctx, 92, GoParser.RULE_typeSwitchGuard);
        try {
            this.enterOuterAlt(localctx, 1);
            {
                this.state = 563;
                this._errHandler.sync(this);
                switch (this._interp.adaptivePredict(this._input, 51, this._ctx)) {
                    case 1:
                        {
                            this.state = 561;
                            this.match(GoParser.IDENTIFIER);
                            this.state = 562;
                            this.match(GoParser.DECLARE_ASSIGN);
                        }
                        break;
                }
                this.state = 565;
                this.primaryExpr(0);
                this.state = 566;
                this.match(GoParser.DOT);
                this.state = 567;
                this.match(GoParser.L_PAREN);
                this.state = 568;
                this.match(GoParser.TYPE);
                this.state = 569;
                this.match(GoParser.R_PAREN);
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
    typeCaseClause() {
        let localctx = new TypeCaseClauseContext(this, this._ctx, this.state);
        this.enterRule(localctx, 94, GoParser.RULE_typeCaseClause);
        try {
            this.enterOuterAlt(localctx, 1);
            {
                this.state = 571;
                this.typeSwitchCase();
                this.state = 572;
                this.match(GoParser.COLON);
                this.state = 574;
                this._errHandler.sync(this);
                switch (this._interp.adaptivePredict(this._input, 52, this._ctx)) {
                    case 1:
                        {
                            this.state = 573;
                            this.statementList();
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
    typeSwitchCase() {
        let localctx = new TypeSwitchCaseContext(this, this._ctx, this.state);
        this.enterRule(localctx, 96, GoParser.RULE_typeSwitchCase);
        try {
            this.state = 579;
            this._errHandler.sync(this);
            switch (this._input.LA(1)) {
                case 6:
                    this.enterOuterAlt(localctx, 1);
                    {
                        this.state = 576;
                        this.match(GoParser.CASE);
                        this.state = 577;
                        this.typeList();
                    }
                    break;
                case 2:
                    this.enterOuterAlt(localctx, 2);
                    {
                        this.state = 578;
                        this.match(GoParser.DEFAULT);
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
    typeList() {
        let localctx = new TypeListContext(this, this._ctx, this.state);
        this.enterRule(localctx, 98, GoParser.RULE_typeList);
        try {
            let _alt;
            this.enterOuterAlt(localctx, 1);
            {
                this.state = 583;
                this._errHandler.sync(this);
                switch (this._input.LA(1)) {
                    case 3:
                    case 4:
                    case 9:
                    case 10:
                    case 11:
                    case 27:
                    case 28:
                    case 32:
                    case 62:
                    case 64:
                        {
                            this.state = 581;
                            this.type_();
                        }
                        break;
                    case 26:
                        {
                            this.state = 582;
                            this.match(GoParser.NIL_LIT);
                        }
                        break;
                    default:
                        throw new antlr4_1.NoViableAltException(this);
                }
                this.state = 592;
                this._errHandler.sync(this);
                _alt = this._interp.adaptivePredict(this._input, 56, this._ctx);
                while (_alt !== 2 && _alt !== antlr4_1.ATN.INVALID_ALT_NUMBER) {
                    if (_alt === 1) {
                        {
                            {
                                this.state = 585;
                                this.match(GoParser.COMMA);
                                this.state = 588;
                                this._errHandler.sync(this);
                                switch (this._input.LA(1)) {
                                    case 3:
                                    case 4:
                                    case 9:
                                    case 10:
                                    case 11:
                                    case 27:
                                    case 28:
                                    case 32:
                                    case 62:
                                    case 64:
                                        {
                                            this.state = 586;
                                            this.type_();
                                        }
                                        break;
                                    case 26:
                                        {
                                            this.state = 587;
                                            this.match(GoParser.NIL_LIT);
                                        }
                                        break;
                                    default:
                                        throw new antlr4_1.NoViableAltException(this);
                                }
                            }
                        }
                    }
                    this.state = 594;
                    this._errHandler.sync(this);
                    _alt = this._interp.adaptivePredict(this._input, 56, this._ctx);
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
    selectStmt() {
        let localctx = new SelectStmtContext(this, this._ctx, this.state);
        this.enterRule(localctx, 100, GoParser.RULE_selectStmt);
        let _la;
        try {
            this.enterOuterAlt(localctx, 1);
            {
                this.state = 595;
                this.match(GoParser.SELECT);
                this.state = 596;
                this.match(GoParser.L_CURLY);
                this.state = 600;
                this._errHandler.sync(this);
                _la = this._input.LA(1);
                while (_la === 2 || _la === 6) {
                    {
                        {
                            this.state = 597;
                            this.commClause();
                        }
                    }
                    this.state = 602;
                    this._errHandler.sync(this);
                    _la = this._input.LA(1);
                }
                this.state = 603;
                this.match(GoParser.R_CURLY);
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
    commClause() {
        let localctx = new CommClauseContext(this, this._ctx, this.state);
        this.enterRule(localctx, 102, GoParser.RULE_commClause);
        try {
            this.enterOuterAlt(localctx, 1);
            {
                this.state = 605;
                this.commCase();
                this.state = 606;
                this.match(GoParser.COLON);
                this.state = 608;
                this._errHandler.sync(this);
                switch (this._interp.adaptivePredict(this._input, 58, this._ctx)) {
                    case 1:
                        {
                            this.state = 607;
                            this.statementList();
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
    commCase() {
        let localctx = new CommCaseContext(this, this._ctx, this.state);
        this.enterRule(localctx, 104, GoParser.RULE_commCase);
        try {
            this.state = 616;
            this._errHandler.sync(this);
            switch (this._input.LA(1)) {
                case 6:
                    this.enterOuterAlt(localctx, 1);
                    {
                        this.state = 610;
                        this.match(GoParser.CASE);
                        this.state = 613;
                        this._errHandler.sync(this);
                        switch (this._interp.adaptivePredict(this._input, 59, this._ctx)) {
                            case 1:
                                {
                                    this.state = 611;
                                    this.sendStmt();
                                }
                                break;
                            case 2:
                                {
                                    this.state = 612;
                                    this.recvStmt();
                                }
                                break;
                        }
                    }
                    break;
                case 2:
                    this.enterOuterAlt(localctx, 2);
                    {
                        this.state = 615;
                        this.match(GoParser.DEFAULT);
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
    recvStmt() {
        let localctx = new RecvStmtContext(this, this._ctx, this.state);
        this.enterRule(localctx, 106, GoParser.RULE_recvStmt);
        try {
            this.enterOuterAlt(localctx, 1);
            {
                this.state = 624;
                this._errHandler.sync(this);
                switch (this._interp.adaptivePredict(this._input, 61, this._ctx)) {
                    case 1:
                        {
                            this.state = 618;
                            this.expressionList();
                            this.state = 619;
                            this.match(GoParser.ASSIGN);
                        }
                        break;
                    case 2:
                        {
                            this.state = 621;
                            this.identifierList();
                            this.state = 622;
                            this.match(GoParser.DECLARE_ASSIGN);
                        }
                        break;
                }
                this.state = 626;
                localctx._recvExpr = this.expression(0);
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
        this.enterRule(localctx, 108, GoParser.RULE_forStmt);
        let _la;
        try {
            this.enterOuterAlt(localctx, 1);
            {
                this.state = 628;
                this.match(GoParser.FOR);
                this.state = 636;
                this._errHandler.sync(this);
                switch (this._interp.adaptivePredict(this._input, 64, this._ctx)) {
                    case 1:
                        {
                            this.state = 630;
                            this._errHandler.sync(this);
                            _la = this._input.LA(1);
                            if (((((_la - 3)) & ~0x1F) === 0 && ((1 << (_la - 3)) & 595591619) !== 0) || ((((_la - 58)) & ~0x1F) === 0 && ((1 << (_la - 58)) & 6344703) !== 0)) {
                                {
                                    this.state = 629;
                                    this.expression(0);
                                }
                            }
                        }
                        break;
                    case 2:
                        {
                            this.state = 632;
                            this.forClause();
                        }
                        break;
                    case 3:
                        {
                            this.state = 634;
                            this._errHandler.sync(this);
                            _la = this._input.LA(1);
                            if (((((_la - 3)) & ~0x1F) === 0 && ((1 << (_la - 3)) & 595657155) !== 0) || ((((_la - 58)) & ~0x1F) === 0 && ((1 << (_la - 58)) & 6344703) !== 0)) {
                                {
                                    this.state = 633;
                                    this.rangeClause();
                                }
                            }
                        }
                        break;
                }
                this.state = 638;
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
    forClause() {
        let localctx = new ForClauseContext(this, this._ctx, this.state);
        this.enterRule(localctx, 110, GoParser.RULE_forClause);
        let _la;
        try {
            this.enterOuterAlt(localctx, 1);
            {
                this.state = 641;
                this._errHandler.sync(this);
                switch (this._interp.adaptivePredict(this._input, 65, this._ctx)) {
                    case 1:
                        {
                            this.state = 640;
                            localctx._initStmt = this.simpleStmt();
                        }
                        break;
                }
                this.state = 643;
                this.eos();
                this.state = 645;
                this._errHandler.sync(this);
                switch (this._interp.adaptivePredict(this._input, 66, this._ctx)) {
                    case 1:
                        {
                            this.state = 644;
                            this.expression(0);
                        }
                        break;
                }
                this.state = 647;
                this.eos();
                this.state = 649;
                this._errHandler.sync(this);
                _la = this._input.LA(1);
                if (((((_la - 3)) & ~0x1F) === 0 && ((1 << (_la - 3)) & 595591619) !== 0) || ((((_la - 58)) & ~0x1F) === 0 && ((1 << (_la - 58)) & 6344703) !== 0)) {
                    {
                        this.state = 648;
                        localctx._postStmt = this.simpleStmt();
                    }
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
    rangeClause() {
        let localctx = new RangeClauseContext(this, this._ctx, this.state);
        this.enterRule(localctx, 112, GoParser.RULE_rangeClause);
        try {
            this.enterOuterAlt(localctx, 1);
            {
                this.state = 657;
                this._errHandler.sync(this);
                switch (this._interp.adaptivePredict(this._input, 68, this._ctx)) {
                    case 1:
                        {
                            this.state = 651;
                            this.expressionList();
                            this.state = 652;
                            this.match(GoParser.ASSIGN);
                        }
                        break;
                    case 2:
                        {
                            this.state = 654;
                            this.identifierList();
                            this.state = 655;
                            this.match(GoParser.DECLARE_ASSIGN);
                        }
                        break;
                }
                this.state = 659;
                this.match(GoParser.RANGE);
                this.state = 660;
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
    goStmt() {
        let localctx = new GoStmtContext(this, this._ctx, this.state);
        this.enterRule(localctx, 114, GoParser.RULE_goStmt);
        try {
            this.enterOuterAlt(localctx, 1);
            {
                this.state = 662;
                this.match(GoParser.GO);
                this.state = 663;
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
    type_() {
        let localctx = new Type_Context(this, this._ctx, this.state);
        this.enterRule(localctx, 116, GoParser.RULE_type_);
        try {
            this.state = 674;
            this._errHandler.sync(this);
            switch (this._input.LA(1)) {
                case 27:
                    this.enterOuterAlt(localctx, 1);
                    {
                        this.state = 665;
                        this.typeName();
                        this.state = 667;
                        this._errHandler.sync(this);
                        switch (this._interp.adaptivePredict(this._input, 69, this._ctx)) {
                            case 1:
                                {
                                    this.state = 666;
                                    this.typeArgs();
                                }
                                break;
                        }
                    }
                    break;
                case 3:
                case 4:
                case 9:
                case 10:
                case 11:
                case 32:
                case 62:
                case 64:
                    this.enterOuterAlt(localctx, 2);
                    {
                        this.state = 669;
                        this.typeLit();
                    }
                    break;
                case 28:
                    this.enterOuterAlt(localctx, 3);
                    {
                        this.state = 670;
                        this.match(GoParser.L_PAREN);
                        this.state = 671;
                        this.type_();
                        this.state = 672;
                        this.match(GoParser.R_PAREN);
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
    typeArgs() {
        let localctx = new TypeArgsContext(this, this._ctx, this.state);
        this.enterRule(localctx, 118, GoParser.RULE_typeArgs);
        let _la;
        try {
            this.enterOuterAlt(localctx, 1);
            {
                this.state = 676;
                this.match(GoParser.L_BRACKET);
                this.state = 677;
                this.typeList();
                this.state = 679;
                this._errHandler.sync(this);
                _la = this._input.LA(1);
                if (_la === 35) {
                    {
                        this.state = 678;
                        this.match(GoParser.COMMA);
                    }
                }
                this.state = 681;
                this.match(GoParser.R_BRACKET);
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
    typeName() {
        let localctx = new TypeNameContext(this, this._ctx, this.state);
        this.enterRule(localctx, 120, GoParser.RULE_typeName);
        try {
            this.state = 685;
            this._errHandler.sync(this);
            switch (this._interp.adaptivePredict(this._input, 72, this._ctx)) {
                case 1:
                    this.enterOuterAlt(localctx, 1);
                    {
                        this.state = 683;
                        this.qualifiedIdent();
                    }
                    break;
                case 2:
                    this.enterOuterAlt(localctx, 2);
                    {
                        this.state = 684;
                        this.match(GoParser.IDENTIFIER);
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
    typeLit() {
        let localctx = new TypeLitContext(this, this._ctx, this.state);
        this.enterRule(localctx, 122, GoParser.RULE_typeLit);
        try {
            this.state = 695;
            this._errHandler.sync(this);
            switch (this._interp.adaptivePredict(this._input, 73, this._ctx)) {
                case 1:
                    this.enterOuterAlt(localctx, 1);
                    {
                        this.state = 687;
                        this.arrayType();
                    }
                    break;
                case 2:
                    this.enterOuterAlt(localctx, 2);
                    {
                        this.state = 688;
                        this.structType();
                    }
                    break;
                case 3:
                    this.enterOuterAlt(localctx, 3);
                    {
                        this.state = 689;
                        this.pointerType();
                    }
                    break;
                case 4:
                    this.enterOuterAlt(localctx, 4);
                    {
                        this.state = 690;
                        this.functionType();
                    }
                    break;
                case 5:
                    this.enterOuterAlt(localctx, 5);
                    {
                        this.state = 691;
                        this.interfaceType();
                    }
                    break;
                case 6:
                    this.enterOuterAlt(localctx, 6);
                    {
                        this.state = 692;
                        this.sliceType();
                    }
                    break;
                case 7:
                    this.enterOuterAlt(localctx, 7);
                    {
                        this.state = 693;
                        this.mapType();
                    }
                    break;
                case 8:
                    this.enterOuterAlt(localctx, 8);
                    {
                        this.state = 694;
                        this.channelType();
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
    arrayType() {
        let localctx = new ArrayTypeContext(this, this._ctx, this.state);
        this.enterRule(localctx, 124, GoParser.RULE_arrayType);
        try {
            this.enterOuterAlt(localctx, 1);
            {
                this.state = 697;
                this.match(GoParser.L_BRACKET);
                this.state = 698;
                this.arrayLength();
                this.state = 699;
                this.match(GoParser.R_BRACKET);
                this.state = 700;
                this.elementType();
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
    arrayLength() {
        let localctx = new ArrayLengthContext(this, this._ctx, this.state);
        this.enterRule(localctx, 126, GoParser.RULE_arrayLength);
        try {
            this.enterOuterAlt(localctx, 1);
            {
                this.state = 702;
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
    elementType() {
        let localctx = new ElementTypeContext(this, this._ctx, this.state);
        this.enterRule(localctx, 128, GoParser.RULE_elementType);
        try {
            this.enterOuterAlt(localctx, 1);
            {
                this.state = 704;
                this.type_();
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
    pointerType() {
        let localctx = new PointerTypeContext(this, this._ctx, this.state);
        this.enterRule(localctx, 130, GoParser.RULE_pointerType);
        try {
            this.enterOuterAlt(localctx, 1);
            {
                this.state = 706;
                this.match(GoParser.STAR);
                this.state = 707;
                this.type_();
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
    interfaceType() {
        let localctx = new InterfaceTypeContext(this, this._ctx, this.state);
        this.enterRule(localctx, 132, GoParser.RULE_interfaceType);
        let _la;
        try {
            this.enterOuterAlt(localctx, 1);
            {
                this.state = 709;
                this.match(GoParser.INTERFACE);
                this.state = 710;
                this.match(GoParser.L_CURLY);
                this.state = 719;
                this._errHandler.sync(this);
                _la = this._input.LA(1);
                while (((((_la - 3)) & ~0x1F) === 0 && ((1 << (_la - 3)) & 587203011) !== 0) || ((((_la - 57)) & ~0x1F) === 0 && ((1 << (_la - 57)) & 161) !== 0)) {
                    {
                        {
                            this.state = 713;
                            this._errHandler.sync(this);
                            switch (this._interp.adaptivePredict(this._input, 74, this._ctx)) {
                                case 1:
                                    {
                                        this.state = 711;
                                        this.methodSpec();
                                    }
                                    break;
                                case 2:
                                    {
                                        this.state = 712;
                                        this.typeElement();
                                    }
                                    break;
                            }
                            this.state = 715;
                            this.eos();
                        }
                    }
                    this.state = 721;
                    this._errHandler.sync(this);
                    _la = this._input.LA(1);
                }
                this.state = 722;
                this.match(GoParser.R_CURLY);
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
    sliceType() {
        let localctx = new SliceTypeContext(this, this._ctx, this.state);
        this.enterRule(localctx, 134, GoParser.RULE_sliceType);
        try {
            this.enterOuterAlt(localctx, 1);
            {
                this.state = 724;
                this.match(GoParser.L_BRACKET);
                this.state = 725;
                this.match(GoParser.R_BRACKET);
                this.state = 726;
                this.elementType();
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
    mapType() {
        let localctx = new MapTypeContext(this, this._ctx, this.state);
        this.enterRule(localctx, 136, GoParser.RULE_mapType);
        try {
            this.enterOuterAlt(localctx, 1);
            {
                this.state = 728;
                this.match(GoParser.MAP);
                this.state = 729;
                this.match(GoParser.L_BRACKET);
                this.state = 730;
                this.type_();
                this.state = 731;
                this.match(GoParser.R_BRACKET);
                this.state = 732;
                this.elementType();
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
    channelType() {
        let localctx = new ChannelTypeContext(this, this._ctx, this.state);
        this.enterRule(localctx, 138, GoParser.RULE_channelType);
        try {
            this.enterOuterAlt(localctx, 1);
            {
                this.state = 739;
                this._errHandler.sync(this);
                switch (this._interp.adaptivePredict(this._input, 76, this._ctx)) {
                    case 1:
                        {
                            this.state = 734;
                            this.match(GoParser.CHAN);
                        }
                        break;
                    case 2:
                        {
                            this.state = 735;
                            this.match(GoParser.CHAN);
                            this.state = 736;
                            this.match(GoParser.RECEIVE);
                        }
                        break;
                    case 3:
                        {
                            this.state = 737;
                            this.match(GoParser.RECEIVE);
                            this.state = 738;
                            this.match(GoParser.CHAN);
                        }
                        break;
                }
                this.state = 741;
                this.elementType();
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
        this.enterRule(localctx, 140, GoParser.RULE_methodSpec);
        try {
            this.state = 749;
            this._errHandler.sync(this);
            switch (this._interp.adaptivePredict(this._input, 77, this._ctx)) {
                case 1:
                    this.enterOuterAlt(localctx, 1);
                    {
                        this.state = 743;
                        this.match(GoParser.IDENTIFIER);
                        this.state = 744;
                        this.parameters();
                        this.state = 745;
                        this.result();
                    }
                    break;
                case 2:
                    this.enterOuterAlt(localctx, 2);
                    {
                        this.state = 747;
                        this.match(GoParser.IDENTIFIER);
                        this.state = 748;
                        this.parameters();
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
    functionType() {
        let localctx = new FunctionTypeContext(this, this._ctx, this.state);
        this.enterRule(localctx, 142, GoParser.RULE_functionType);
        try {
            this.enterOuterAlt(localctx, 1);
            {
                this.state = 751;
                this.match(GoParser.FUNC);
                this.state = 752;
                this.signature();
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
    signature() {
        let localctx = new SignatureContext(this, this._ctx, this.state);
        this.enterRule(localctx, 144, GoParser.RULE_signature);
        try {
            this.enterOuterAlt(localctx, 1);
            {
                this.state = 754;
                this.parameters();
                this.state = 756;
                this._errHandler.sync(this);
                switch (this._interp.adaptivePredict(this._input, 78, this._ctx)) {
                    case 1:
                        {
                            this.state = 755;
                            this.result();
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
    result() {
        let localctx = new ResultContext(this, this._ctx, this.state);
        this.enterRule(localctx, 146, GoParser.RULE_result);
        try {
            this.state = 760;
            this._errHandler.sync(this);
            switch (this._interp.adaptivePredict(this._input, 79, this._ctx)) {
                case 1:
                    this.enterOuterAlt(localctx, 1);
                    {
                        this.state = 758;
                        this.parameters();
                    }
                    break;
                case 2:
                    this.enterOuterAlt(localctx, 2);
                    {
                        this.state = 759;
                        this.type_();
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
    parameters() {
        let localctx = new ParametersContext(this, this._ctx, this.state);
        this.enterRule(localctx, 148, GoParser.RULE_parameters);
        let _la;
        try {
            let _alt;
            this.enterOuterAlt(localctx, 1);
            {
                this.state = 762;
                this.match(GoParser.L_PAREN);
                this.state = 774;
                this._errHandler.sync(this);
                _la = this._input.LA(1);
                if (((((_la - 3)) & ~0x1F) === 0 && ((1 << (_la - 3)) & 587203011) !== 0) || ((((_la - 42)) & ~0x1F) === 0 && ((1 << (_la - 42)) & 5242881) !== 0)) {
                    {
                        this.state = 763;
                        this.parameterDecl();
                        this.state = 768;
                        this._errHandler.sync(this);
                        _alt = this._interp.adaptivePredict(this._input, 80, this._ctx);
                        while (_alt !== 2 && _alt !== antlr4_1.ATN.INVALID_ALT_NUMBER) {
                            if (_alt === 1) {
                                {
                                    {
                                        this.state = 764;
                                        this.match(GoParser.COMMA);
                                        this.state = 765;
                                        this.parameterDecl();
                                    }
                                }
                            }
                            this.state = 770;
                            this._errHandler.sync(this);
                            _alt = this._interp.adaptivePredict(this._input, 80, this._ctx);
                        }
                        this.state = 772;
                        this._errHandler.sync(this);
                        _la = this._input.LA(1);
                        if (_la === 35) {
                            {
                                this.state = 771;
                                this.match(GoParser.COMMA);
                            }
                        }
                    }
                }
                this.state = 776;
                this.match(GoParser.R_PAREN);
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
    parameterDecl() {
        let localctx = new ParameterDeclContext(this, this._ctx, this.state);
        this.enterRule(localctx, 150, GoParser.RULE_parameterDecl);
        let _la;
        try {
            this.enterOuterAlt(localctx, 1);
            {
                this.state = 779;
                this._errHandler.sync(this);
                switch (this._interp.adaptivePredict(this._input, 83, this._ctx)) {
                    case 1:
                        {
                            this.state = 778;
                            this.identifierList();
                        }
                        break;
                }
                this.state = 782;
                this._errHandler.sync(this);
                _la = this._input.LA(1);
                if (_la === 42) {
                    {
                        this.state = 781;
                        this.match(GoParser.ELLIPSIS);
                    }
                }
                this.state = 784;
                this.type_();
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
        let _startState = 152;
        this.enterRecursionRule(localctx, 152, GoParser.RULE_expression, _p);
        let _la;
        try {
            let _alt;
            this.enterOuterAlt(localctx, 1);
            {
                this.state = 790;
                this._errHandler.sync(this);
                switch (this._interp.adaptivePredict(this._input, 85, this._ctx)) {
                    case 1:
                        {
                            this.state = 787;
                            this.primaryExpr(0);
                        }
                        break;
                    case 2:
                        {
                            this.state = 788;
                            localctx._unary_op = this._input.LT(1);
                            _la = this._input.LA(1);
                            if (!(((((_la - 58)) & ~0x1F) === 0 && ((1 << (_la - 58)) & 127) !== 0))) {
                                localctx._unary_op = this._errHandler.recoverInline(this);
                            }
                            else {
                                this._errHandler.reportMatch(this);
                                this.consume();
                            }
                            this.state = 789;
                            this.expression(6);
                        }
                        break;
                }
                this._ctx.stop = this._input.LT(-1);
                this.state = 809;
                this._errHandler.sync(this);
                _alt = this._interp.adaptivePredict(this._input, 87, this._ctx);
                while (_alt !== 2 && _alt !== antlr4_1.ATN.INVALID_ALT_NUMBER) {
                    if (_alt === 1) {
                        if (this._parseListeners != null) {
                            this.triggerExitRuleEvent();
                        }
                        _prevctx = localctx;
                        {
                            this.state = 807;
                            this._errHandler.sync(this);
                            switch (this._interp.adaptivePredict(this._input, 86, this._ctx)) {
                                case 1:
                                    {
                                        localctx = new ExpressionContext(this, _parentctx, _parentState);
                                        this.pushNewRecursionContext(localctx, _startState, GoParser.RULE_expression);
                                        this.state = 792;
                                        if (!(this.precpred(this._ctx, 5))) {
                                            throw this.createFailedPredicateException("this.precpred(this._ctx, 5)");
                                        }
                                        this.state = 793;
                                        localctx._mul_op = this._input.LT(1);
                                        _la = this._input.LA(1);
                                        if (!(((((_la - 52)) & ~0x1F) === 0 && ((1 << (_la - 52)) & 3103) !== 0))) {
                                            localctx._mul_op = this._errHandler.recoverInline(this);
                                        }
                                        else {
                                            this._errHandler.reportMatch(this);
                                            this.consume();
                                        }
                                        this.state = 794;
                                        this.expression(6);
                                    }
                                    break;
                                case 2:
                                    {
                                        localctx = new ExpressionContext(this, _parentctx, _parentState);
                                        this.pushNewRecursionContext(localctx, _startState, GoParser.RULE_expression);
                                        this.state = 795;
                                        if (!(this.precpred(this._ctx, 4))) {
                                            throw this.createFailedPredicateException("this.precpred(this._ctx, 4)");
                                        }
                                        this.state = 796;
                                        localctx._add_op = this._input.LT(1);
                                        _la = this._input.LA(1);
                                        if (!(((((_la - 51)) & ~0x1F) === 0 && ((1 << (_la - 51)) & 1793) !== 0))) {
                                            localctx._add_op = this._errHandler.recoverInline(this);
                                        }
                                        else {
                                            this._errHandler.reportMatch(this);
                                            this.consume();
                                        }
                                        this.state = 797;
                                        this.expression(5);
                                    }
                                    break;
                                case 3:
                                    {
                                        localctx = new ExpressionContext(this, _parentctx, _parentState);
                                        this.pushNewRecursionContext(localctx, _startState, GoParser.RULE_expression);
                                        this.state = 798;
                                        if (!(this.precpred(this._ctx, 3))) {
                                            throw this.createFailedPredicateException("this.precpred(this._ctx, 3)");
                                        }
                                        this.state = 799;
                                        localctx._rel_op = this._input.LT(1);
                                        _la = this._input.LA(1);
                                        if (!(((((_la - 45)) & ~0x1F) === 0 && ((1 << (_la - 45)) & 63) !== 0))) {
                                            localctx._rel_op = this._errHandler.recoverInline(this);
                                        }
                                        else {
                                            this._errHandler.reportMatch(this);
                                            this.consume();
                                        }
                                        this.state = 800;
                                        this.expression(4);
                                    }
                                    break;
                                case 4:
                                    {
                                        localctx = new ExpressionContext(this, _parentctx, _parentState);
                                        this.pushNewRecursionContext(localctx, _startState, GoParser.RULE_expression);
                                        this.state = 801;
                                        if (!(this.precpred(this._ctx, 2))) {
                                            throw this.createFailedPredicateException("this.precpred(this._ctx, 2)");
                                        }
                                        this.state = 802;
                                        this.match(GoParser.LOGICAL_AND);
                                        this.state = 803;
                                        this.expression(3);
                                    }
                                    break;
                                case 5:
                                    {
                                        localctx = new ExpressionContext(this, _parentctx, _parentState);
                                        this.pushNewRecursionContext(localctx, _startState, GoParser.RULE_expression);
                                        this.state = 804;
                                        if (!(this.precpred(this._ctx, 1))) {
                                            throw this.createFailedPredicateException("this.precpred(this._ctx, 1)");
                                        }
                                        this.state = 805;
                                        this.match(GoParser.LOGICAL_OR);
                                        this.state = 806;
                                        this.expression(2);
                                    }
                                    break;
                            }
                        }
                    }
                    this.state = 811;
                    this._errHandler.sync(this);
                    _alt = this._interp.adaptivePredict(this._input, 87, this._ctx);
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
        let _startState = 154;
        this.enterRecursionRule(localctx, 154, GoParser.RULE_primaryExpr, _p);
        try {
            let _alt;
            this.enterOuterAlt(localctx, 1);
            {
                this.state = 816;
                this._errHandler.sync(this);
                switch (this._interp.adaptivePredict(this._input, 88, this._ctx)) {
                    case 1:
                        {
                            this.state = 813;
                            this.operand();
                        }
                        break;
                    case 2:
                        {
                            this.state = 814;
                            this.conversion();
                        }
                        break;
                    case 3:
                        {
                            this.state = 815;
                            this.methodExpr();
                        }
                        break;
                }
                this._ctx.stop = this._input.LT(-1);
                this.state = 829;
                this._errHandler.sync(this);
                _alt = this._interp.adaptivePredict(this._input, 90, this._ctx);
                while (_alt !== 2 && _alt !== antlr4_1.ATN.INVALID_ALT_NUMBER) {
                    if (_alt === 1) {
                        if (this._parseListeners != null) {
                            this.triggerExitRuleEvent();
                        }
                        _prevctx = localctx;
                        {
                            {
                                localctx = new PrimaryExprContext(this, _parentctx, _parentState);
                                this.pushNewRecursionContext(localctx, _startState, GoParser.RULE_primaryExpr);
                                this.state = 818;
                                if (!(this.precpred(this._ctx, 1))) {
                                    throw this.createFailedPredicateException("this.precpred(this._ctx, 1)");
                                }
                                this.state = 825;
                                this._errHandler.sync(this);
                                switch (this._interp.adaptivePredict(this._input, 89, this._ctx)) {
                                    case 1:
                                        {
                                            this.state = 819;
                                            this.match(GoParser.DOT);
                                            this.state = 820;
                                            this.match(GoParser.IDENTIFIER);
                                        }
                                        break;
                                    case 2:
                                        {
                                            this.state = 821;
                                            this.index();
                                        }
                                        break;
                                    case 3:
                                        {
                                            this.state = 822;
                                            this.slice_();
                                        }
                                        break;
                                    case 4:
                                        {
                                            this.state = 823;
                                            this.typeAssertion();
                                        }
                                        break;
                                    case 5:
                                        {
                                            this.state = 824;
                                            this.arguments();
                                        }
                                        break;
                                }
                            }
                        }
                    }
                    this.state = 831;
                    this._errHandler.sync(this);
                    _alt = this._interp.adaptivePredict(this._input, 90, this._ctx);
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
    conversion() {
        let localctx = new ConversionContext(this, this._ctx, this.state);
        this.enterRule(localctx, 156, GoParser.RULE_conversion);
        let _la;
        try {
            this.enterOuterAlt(localctx, 1);
            {
                this.state = 832;
                this.type_();
                this.state = 833;
                this.match(GoParser.L_PAREN);
                this.state = 834;
                this.expression(0);
                this.state = 836;
                this._errHandler.sync(this);
                _la = this._input.LA(1);
                if (_la === 35) {
                    {
                        this.state = 835;
                        this.match(GoParser.COMMA);
                    }
                }
                this.state = 838;
                this.match(GoParser.R_PAREN);
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
    operand() {
        let localctx = new OperandContext(this, this._ctx, this.state);
        this.enterRule(localctx, 158, GoParser.RULE_operand);
        try {
            this.state = 849;
            this._errHandler.sync(this);
            switch (this._interp.adaptivePredict(this._input, 93, this._ctx)) {
                case 1:
                    this.enterOuterAlt(localctx, 1);
                    {
                        this.state = 840;
                        this.literal();
                    }
                    break;
                case 2:
                    this.enterOuterAlt(localctx, 2);
                    {
                        this.state = 841;
                        this.operandName();
                        this.state = 843;
                        this._errHandler.sync(this);
                        switch (this._interp.adaptivePredict(this._input, 92, this._ctx)) {
                            case 1:
                                {
                                    this.state = 842;
                                    this.typeArgs();
                                }
                                break;
                        }
                    }
                    break;
                case 3:
                    this.enterOuterAlt(localctx, 3);
                    {
                        this.state = 845;
                        this.match(GoParser.L_PAREN);
                        this.state = 846;
                        this.expression(0);
                        this.state = 847;
                        this.match(GoParser.R_PAREN);
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
    literal() {
        let localctx = new LiteralContext(this, this._ctx, this.state);
        this.enterRule(localctx, 160, GoParser.RULE_literal);
        try {
            this.state = 854;
            this._errHandler.sync(this);
            switch (this._input.LA(1)) {
                case 26:
                case 65:
                case 66:
                case 67:
                case 68:
                case 69:
                case 72:
                case 73:
                case 79:
                case 80:
                    this.enterOuterAlt(localctx, 1);
                    {
                        this.state = 851;
                        this.basicLit();
                    }
                    break;
                case 9:
                case 10:
                case 27:
                case 32:
                    this.enterOuterAlt(localctx, 2);
                    {
                        this.state = 852;
                        this.compositeLit();
                    }
                    break;
                case 3:
                    this.enterOuterAlt(localctx, 3);
                    {
                        this.state = 853;
                        this.functionLit();
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
        this.enterRule(localctx, 162, GoParser.RULE_basicLit);
        try {
            this.state = 860;
            this._errHandler.sync(this);
            switch (this._input.LA(1)) {
                case 26:
                    this.enterOuterAlt(localctx, 1);
                    {
                        this.state = 856;
                        this.match(GoParser.NIL_LIT);
                    }
                    break;
                case 65:
                case 66:
                case 67:
                case 68:
                case 72:
                case 73:
                    this.enterOuterAlt(localctx, 2);
                    {
                        this.state = 857;
                        this.integer();
                    }
                    break;
                case 79:
                case 80:
                    this.enterOuterAlt(localctx, 3);
                    {
                        this.state = 858;
                        this.string_();
                    }
                    break;
                case 69:
                    this.enterOuterAlt(localctx, 4);
                    {
                        this.state = 859;
                        this.match(GoParser.FLOAT_LIT);
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
    integer() {
        let localctx = new IntegerContext(this, this._ctx, this.state);
        this.enterRule(localctx, 164, GoParser.RULE_integer);
        let _la;
        try {
            this.enterOuterAlt(localctx, 1);
            {
                this.state = 862;
                _la = this._input.LA(1);
                if (!(((((_la - 65)) & ~0x1F) === 0 && ((1 << (_la - 65)) & 399) !== 0))) {
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
    operandName() {
        let localctx = new OperandNameContext(this, this._ctx, this.state);
        this.enterRule(localctx, 166, GoParser.RULE_operandName);
        try {
            this.enterOuterAlt(localctx, 1);
            {
                this.state = 864;
                this.match(GoParser.IDENTIFIER);
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
    qualifiedIdent() {
        let localctx = new QualifiedIdentContext(this, this._ctx, this.state);
        this.enterRule(localctx, 168, GoParser.RULE_qualifiedIdent);
        try {
            this.enterOuterAlt(localctx, 1);
            {
                this.state = 866;
                this.match(GoParser.IDENTIFIER);
                this.state = 867;
                this.match(GoParser.DOT);
                this.state = 868;
                this.match(GoParser.IDENTIFIER);
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
    compositeLit() {
        let localctx = new CompositeLitContext(this, this._ctx, this.state);
        this.enterRule(localctx, 170, GoParser.RULE_compositeLit);
        try {
            this.enterOuterAlt(localctx, 1);
            {
                this.state = 870;
                this.literalType();
                this.state = 871;
                this.literalValue();
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
    literalType() {
        let localctx = new LiteralTypeContext(this, this._ctx, this.state);
        this.enterRule(localctx, 172, GoParser.RULE_literalType);
        let _la;
        try {
            this.state = 885;
            this._errHandler.sync(this);
            switch (this._interp.adaptivePredict(this._input, 97, this._ctx)) {
                case 1:
                    this.enterOuterAlt(localctx, 1);
                    {
                        this.state = 873;
                        this.structType();
                    }
                    break;
                case 2:
                    this.enterOuterAlt(localctx, 2);
                    {
                        this.state = 874;
                        this.arrayType();
                    }
                    break;
                case 3:
                    this.enterOuterAlt(localctx, 3);
                    {
                        this.state = 875;
                        this.match(GoParser.L_BRACKET);
                        this.state = 876;
                        this.match(GoParser.ELLIPSIS);
                        this.state = 877;
                        this.match(GoParser.R_BRACKET);
                        this.state = 878;
                        this.elementType();
                    }
                    break;
                case 4:
                    this.enterOuterAlt(localctx, 4);
                    {
                        this.state = 879;
                        this.sliceType();
                    }
                    break;
                case 5:
                    this.enterOuterAlt(localctx, 5);
                    {
                        this.state = 880;
                        this.mapType();
                    }
                    break;
                case 6:
                    this.enterOuterAlt(localctx, 6);
                    {
                        this.state = 881;
                        this.typeName();
                        this.state = 883;
                        this._errHandler.sync(this);
                        _la = this._input.LA(1);
                        if (_la === 32) {
                            {
                                this.state = 882;
                                this.typeArgs();
                            }
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
    // @RuleVersion(0)
    literalValue() {
        let localctx = new LiteralValueContext(this, this._ctx, this.state);
        this.enterRule(localctx, 174, GoParser.RULE_literalValue);
        let _la;
        try {
            this.enterOuterAlt(localctx, 1);
            {
                this.state = 887;
                this.match(GoParser.L_CURLY);
                this.state = 892;
                this._errHandler.sync(this);
                _la = this._input.LA(1);
                if (((((_la - 3)) & ~0x1F) === 0 && ((1 << (_la - 3)) & 729809347) !== 0) || ((((_la - 58)) & ~0x1F) === 0 && ((1 << (_la - 58)) & 6344703) !== 0)) {
                    {
                        this.state = 888;
                        this.elementList();
                        this.state = 890;
                        this._errHandler.sync(this);
                        _la = this._input.LA(1);
                        if (_la === 35) {
                            {
                                this.state = 889;
                                this.match(GoParser.COMMA);
                            }
                        }
                    }
                }
                this.state = 894;
                this.match(GoParser.R_CURLY);
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
    elementList() {
        let localctx = new ElementListContext(this, this._ctx, this.state);
        this.enterRule(localctx, 176, GoParser.RULE_elementList);
        try {
            let _alt;
            this.enterOuterAlt(localctx, 1);
            {
                this.state = 896;
                this.keyedElement();
                this.state = 901;
                this._errHandler.sync(this);
                _alt = this._interp.adaptivePredict(this._input, 100, this._ctx);
                while (_alt !== 2 && _alt !== antlr4_1.ATN.INVALID_ALT_NUMBER) {
                    if (_alt === 1) {
                        {
                            {
                                this.state = 897;
                                this.match(GoParser.COMMA);
                                this.state = 898;
                                this.keyedElement();
                            }
                        }
                    }
                    this.state = 903;
                    this._errHandler.sync(this);
                    _alt = this._interp.adaptivePredict(this._input, 100, this._ctx);
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
    keyedElement() {
        let localctx = new KeyedElementContext(this, this._ctx, this.state);
        this.enterRule(localctx, 178, GoParser.RULE_keyedElement);
        try {
            this.enterOuterAlt(localctx, 1);
            {
                this.state = 907;
                this._errHandler.sync(this);
                switch (this._interp.adaptivePredict(this._input, 101, this._ctx)) {
                    case 1:
                        {
                            this.state = 904;
                            this.key();
                            this.state = 905;
                            this.match(GoParser.COLON);
                        }
                        break;
                }
                this.state = 909;
                this.element();
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
    key() {
        let localctx = new KeyContext(this, this._ctx, this.state);
        this.enterRule(localctx, 180, GoParser.RULE_key);
        try {
            this.state = 913;
            this._errHandler.sync(this);
            switch (this._input.LA(1)) {
                case 3:
                case 4:
                case 9:
                case 10:
                case 11:
                case 26:
                case 27:
                case 28:
                case 32:
                case 58:
                case 59:
                case 60:
                case 61:
                case 62:
                case 63:
                case 64:
                case 65:
                case 66:
                case 67:
                case 68:
                case 69:
                case 72:
                case 73:
                case 79:
                case 80:
                    this.enterOuterAlt(localctx, 1);
                    {
                        this.state = 911;
                        this.expression(0);
                    }
                    break;
                case 30:
                    this.enterOuterAlt(localctx, 2);
                    {
                        this.state = 912;
                        this.literalValue();
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
    element() {
        let localctx = new ElementContext(this, this._ctx, this.state);
        this.enterRule(localctx, 182, GoParser.RULE_element);
        try {
            this.state = 917;
            this._errHandler.sync(this);
            switch (this._input.LA(1)) {
                case 3:
                case 4:
                case 9:
                case 10:
                case 11:
                case 26:
                case 27:
                case 28:
                case 32:
                case 58:
                case 59:
                case 60:
                case 61:
                case 62:
                case 63:
                case 64:
                case 65:
                case 66:
                case 67:
                case 68:
                case 69:
                case 72:
                case 73:
                case 79:
                case 80:
                    this.enterOuterAlt(localctx, 1);
                    {
                        this.state = 915;
                        this.expression(0);
                    }
                    break;
                case 30:
                    this.enterOuterAlt(localctx, 2);
                    {
                        this.state = 916;
                        this.literalValue();
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
    structType() {
        let localctx = new StructTypeContext(this, this._ctx, this.state);
        this.enterRule(localctx, 184, GoParser.RULE_structType);
        let _la;
        try {
            this.enterOuterAlt(localctx, 1);
            {
                this.state = 919;
                this.match(GoParser.STRUCT);
                this.state = 920;
                this.match(GoParser.L_CURLY);
                this.state = 926;
                this._errHandler.sync(this);
                _la = this._input.LA(1);
                while (_la === 27 || _la === 62) {
                    {
                        {
                            this.state = 921;
                            this.fieldDecl();
                            this.state = 922;
                            this.eos();
                        }
                    }
                    this.state = 928;
                    this._errHandler.sync(this);
                    _la = this._input.LA(1);
                }
                this.state = 929;
                this.match(GoParser.R_CURLY);
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
    fieldDecl() {
        let localctx = new FieldDeclContext(this, this._ctx, this.state);
        this.enterRule(localctx, 186, GoParser.RULE_fieldDecl);
        try {
            this.enterOuterAlt(localctx, 1);
            {
                this.state = 935;
                this._errHandler.sync(this);
                switch (this._interp.adaptivePredict(this._input, 105, this._ctx)) {
                    case 1:
                        {
                            this.state = 931;
                            this.identifierList();
                            this.state = 932;
                            this.type_();
                        }
                        break;
                    case 2:
                        {
                            this.state = 934;
                            this.embeddedField();
                        }
                        break;
                }
                this.state = 938;
                this._errHandler.sync(this);
                switch (this._interp.adaptivePredict(this._input, 106, this._ctx)) {
                    case 1:
                        {
                            this.state = 937;
                            localctx._tag = this.string_();
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
    string_() {
        let localctx = new String_Context(this, this._ctx, this.state);
        this.enterRule(localctx, 188, GoParser.RULE_string_);
        let _la;
        try {
            this.enterOuterAlt(localctx, 1);
            {
                this.state = 940;
                _la = this._input.LA(1);
                if (!(_la === 79 || _la === 80)) {
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
    embeddedField() {
        let localctx = new EmbeddedFieldContext(this, this._ctx, this.state);
        this.enterRule(localctx, 190, GoParser.RULE_embeddedField);
        let _la;
        try {
            this.enterOuterAlt(localctx, 1);
            {
                this.state = 943;
                this._errHandler.sync(this);
                _la = this._input.LA(1);
                if (_la === 62) {
                    {
                        this.state = 942;
                        this.match(GoParser.STAR);
                    }
                }
                this.state = 945;
                this.typeName();
                this.state = 947;
                this._errHandler.sync(this);
                switch (this._interp.adaptivePredict(this._input, 108, this._ctx)) {
                    case 1:
                        {
                            this.state = 946;
                            this.typeArgs();
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
    functionLit() {
        let localctx = new FunctionLitContext(this, this._ctx, this.state);
        this.enterRule(localctx, 192, GoParser.RULE_functionLit);
        try {
            this.enterOuterAlt(localctx, 1);
            {
                this.state = 949;
                this.match(GoParser.FUNC);
                this.state = 950;
                this.signature();
                this.state = 951;
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
    index() {
        let localctx = new IndexContext(this, this._ctx, this.state);
        this.enterRule(localctx, 194, GoParser.RULE_index);
        try {
            this.enterOuterAlt(localctx, 1);
            {
                this.state = 953;
                this.match(GoParser.L_BRACKET);
                this.state = 954;
                this.expression(0);
                this.state = 955;
                this.match(GoParser.R_BRACKET);
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
    slice_() {
        let localctx = new Slice_Context(this, this._ctx, this.state);
        this.enterRule(localctx, 196, GoParser.RULE_slice_);
        let _la;
        try {
            this.enterOuterAlt(localctx, 1);
            {
                this.state = 957;
                this.match(GoParser.L_BRACKET);
                this.state = 973;
                this._errHandler.sync(this);
                switch (this._interp.adaptivePredict(this._input, 112, this._ctx)) {
                    case 1:
                        {
                            this.state = 959;
                            this._errHandler.sync(this);
                            _la = this._input.LA(1);
                            if (((((_la - 3)) & ~0x1F) === 0 && ((1 << (_la - 3)) & 595591619) !== 0) || ((((_la - 58)) & ~0x1F) === 0 && ((1 << (_la - 58)) & 6344703) !== 0)) {
                                {
                                    this.state = 958;
                                    this.expression(0);
                                }
                            }
                            this.state = 961;
                            this.match(GoParser.COLON);
                            this.state = 963;
                            this._errHandler.sync(this);
                            _la = this._input.LA(1);
                            if (((((_la - 3)) & ~0x1F) === 0 && ((1 << (_la - 3)) & 595591619) !== 0) || ((((_la - 58)) & ~0x1F) === 0 && ((1 << (_la - 58)) & 6344703) !== 0)) {
                                {
                                    this.state = 962;
                                    this.expression(0);
                                }
                            }
                        }
                        break;
                    case 2:
                        {
                            this.state = 966;
                            this._errHandler.sync(this);
                            _la = this._input.LA(1);
                            if (((((_la - 3)) & ~0x1F) === 0 && ((1 << (_la - 3)) & 595591619) !== 0) || ((((_la - 58)) & ~0x1F) === 0 && ((1 << (_la - 58)) & 6344703) !== 0)) {
                                {
                                    this.state = 965;
                                    this.expression(0);
                                }
                            }
                            this.state = 968;
                            this.match(GoParser.COLON);
                            this.state = 969;
                            this.expression(0);
                            this.state = 970;
                            this.match(GoParser.COLON);
                            this.state = 971;
                            this.expression(0);
                        }
                        break;
                }
                this.state = 975;
                this.match(GoParser.R_BRACKET);
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
    typeAssertion() {
        let localctx = new TypeAssertionContext(this, this._ctx, this.state);
        this.enterRule(localctx, 198, GoParser.RULE_typeAssertion);
        try {
            this.enterOuterAlt(localctx, 1);
            {
                this.state = 977;
                this.match(GoParser.DOT);
                this.state = 978;
                this.match(GoParser.L_PAREN);
                this.state = 979;
                this.type_();
                this.state = 980;
                this.match(GoParser.R_PAREN);
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
        this.enterRule(localctx, 200, GoParser.RULE_arguments);
        let _la;
        try {
            this.enterOuterAlt(localctx, 1);
            {
                this.state = 982;
                this.match(GoParser.L_PAREN);
                this.state = 997;
                this._errHandler.sync(this);
                _la = this._input.LA(1);
                if (((((_la - 3)) & ~0x1F) === 0 && ((1 << (_la - 3)) & 595591619) !== 0) || ((((_la - 58)) & ~0x1F) === 0 && ((1 << (_la - 58)) & 6344703) !== 0)) {
                    {
                        this.state = 989;
                        this._errHandler.sync(this);
                        switch (this._interp.adaptivePredict(this._input, 114, this._ctx)) {
                            case 1:
                                {
                                    this.state = 983;
                                    this.expressionList();
                                }
                                break;
                            case 2:
                                {
                                    this.state = 984;
                                    this.type_();
                                    this.state = 987;
                                    this._errHandler.sync(this);
                                    switch (this._interp.adaptivePredict(this._input, 113, this._ctx)) {
                                        case 1:
                                            {
                                                this.state = 985;
                                                this.match(GoParser.COMMA);
                                                this.state = 986;
                                                this.expressionList();
                                            }
                                            break;
                                    }
                                }
                                break;
                        }
                        this.state = 992;
                        this._errHandler.sync(this);
                        _la = this._input.LA(1);
                        if (_la === 42) {
                            {
                                this.state = 991;
                                this.match(GoParser.ELLIPSIS);
                            }
                        }
                        this.state = 995;
                        this._errHandler.sync(this);
                        _la = this._input.LA(1);
                        if (_la === 35) {
                            {
                                this.state = 994;
                                this.match(GoParser.COMMA);
                            }
                        }
                    }
                }
                this.state = 999;
                this.match(GoParser.R_PAREN);
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
    methodExpr() {
        let localctx = new MethodExprContext(this, this._ctx, this.state);
        this.enterRule(localctx, 202, GoParser.RULE_methodExpr);
        try {
            this.enterOuterAlt(localctx, 1);
            {
                this.state = 1001;
                this.type_();
                this.state = 1002;
                this.match(GoParser.DOT);
                this.state = 1003;
                this.match(GoParser.IDENTIFIER);
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
        this.enterRule(localctx, 204, GoParser.RULE_eos);
        try {
            this.state = 1009;
            this._errHandler.sync(this);
            switch (this._interp.adaptivePredict(this._input, 118, this._ctx)) {
                case 1:
                    this.enterOuterAlt(localctx, 1);
                    {
                        this.state = 1005;
                        this.match(GoParser.SEMI);
                    }
                    break;
                case 2:
                    this.enterOuterAlt(localctx, 2);
                    {
                        this.state = 1006;
                        this.match(GoParser.EOF);
                    }
                    break;
                case 3:
                    this.enterOuterAlt(localctx, 3);
                    {
                        this.state = 1007;
                        this.match(GoParser.EOS);
                    }
                    break;
                case 4:
                    this.enterOuterAlt(localctx, 4);
                    {
                        this.state = 1008;
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
            case 24:
                return this.statementList_sempred(localctx, predIndex);
            case 76:
                return this.expression_sempred(localctx, predIndex);
            case 77:
                return this.primaryExpr_sempred(localctx, predIndex);
            case 102:
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
                return this.precpred(this._ctx, 5);
            case 2:
                return this.precpred(this._ctx, 4);
            case 3:
                return this.precpred(this._ctx, 3);
            case 4:
                return this.precpred(this._ctx, 2);
            case 5:
                return this.precpred(this._ctx, 1);
        }
        return true;
    }
    primaryExpr_sempred(localctx, predIndex) {
        switch (predIndex) {
            case 6:
                return this.precpred(this._ctx, 1);
        }
        return true;
    }
    eos_sempred(localctx, predIndex) {
        switch (predIndex) {
            case 7:
                return this.closingBracket();
        }
        return true;
    }
    static get _ATN() {
        if (!GoParser.__ATN) {
            GoParser.__ATN = new antlr4_1.ATNDeserializer().deserialize(GoParser._serializedATN);
        }
        return GoParser.__ATN;
    }
}
GoParser.BREAK = 1;
GoParser.DEFAULT = 2;
GoParser.FUNC = 3;
GoParser.INTERFACE = 4;
GoParser.SELECT = 5;
GoParser.CASE = 6;
GoParser.DEFER = 7;
GoParser.GO = 8;
GoParser.MAP = 9;
GoParser.STRUCT = 10;
GoParser.CHAN = 11;
GoParser.ELSE = 12;
GoParser.GOTO = 13;
GoParser.PACKAGE = 14;
GoParser.SWITCH = 15;
GoParser.CONST = 16;
GoParser.FALLTHROUGH = 17;
GoParser.IF = 18;
GoParser.RANGE = 19;
GoParser.TYPE = 20;
GoParser.CONTINUE = 21;
GoParser.FOR = 22;
GoParser.IMPORT = 23;
GoParser.RETURN = 24;
GoParser.VAR = 25;
GoParser.NIL_LIT = 26;
GoParser.IDENTIFIER = 27;
GoParser.L_PAREN = 28;
GoParser.R_PAREN = 29;
GoParser.L_CURLY = 30;
GoParser.R_CURLY = 31;
GoParser.L_BRACKET = 32;
GoParser.R_BRACKET = 33;
GoParser.ASSIGN = 34;
GoParser.COMMA = 35;
GoParser.SEMI = 36;
GoParser.COLON = 37;
GoParser.DOT = 38;
GoParser.PLUS_PLUS = 39;
GoParser.MINUS_MINUS = 40;
GoParser.DECLARE_ASSIGN = 41;
GoParser.ELLIPSIS = 42;
GoParser.LOGICAL_OR = 43;
GoParser.LOGICAL_AND = 44;
GoParser.EQUALS = 45;
GoParser.NOT_EQUALS = 46;
GoParser.LESS = 47;
GoParser.LESS_OR_EQUALS = 48;
GoParser.GREATER = 49;
GoParser.GREATER_OR_EQUALS = 50;
GoParser.OR = 51;
GoParser.DIV = 52;
GoParser.MOD = 53;
GoParser.LSHIFT = 54;
GoParser.RSHIFT = 55;
GoParser.BIT_CLEAR = 56;
GoParser.UNDERLYING = 57;
GoParser.EXCLAMATION = 58;
GoParser.PLUS = 59;
GoParser.MINUS = 60;
GoParser.CARET = 61;
GoParser.STAR = 62;
GoParser.AMPERSAND = 63;
GoParser.RECEIVE = 64;
GoParser.DECIMAL_LIT = 65;
GoParser.BINARY_LIT = 66;
GoParser.OCTAL_LIT = 67;
GoParser.HEX_LIT = 68;
GoParser.FLOAT_LIT = 69;
GoParser.DECIMAL_FLOAT_LIT = 70;
GoParser.HEX_FLOAT_LIT = 71;
GoParser.IMAGINARY_LIT = 72;
GoParser.RUNE_LIT = 73;
GoParser.BYTE_VALUE = 74;
GoParser.OCTAL_BYTE_VALUE = 75;
GoParser.HEX_BYTE_VALUE = 76;
GoParser.LITTLE_U_VALUE = 77;
GoParser.BIG_U_VALUE = 78;
GoParser.RAW_STRING_LIT = 79;
GoParser.INTERPRETED_STRING_LIT = 80;
GoParser.WS = 81;
GoParser.COMMENT = 82;
GoParser.TERMINATOR = 83;
GoParser.LINE_COMMENT = 84;
GoParser.WS_NLSEMI = 85;
GoParser.COMMENT_NLSEMI = 86;
GoParser.LINE_COMMENT_NLSEMI = 87;
GoParser.EOS = 88;
GoParser.OTHER = 89;
GoParser.EOF = antlr4_1.Token.EOF;
GoParser.RULE_sourceFile = 0;
GoParser.RULE_packageClause = 1;
GoParser.RULE_importDecl = 2;
GoParser.RULE_importSpec = 3;
GoParser.RULE_importPath = 4;
GoParser.RULE_declaration = 5;
GoParser.RULE_constDecl = 6;
GoParser.RULE_constSpec = 7;
GoParser.RULE_identifierList = 8;
GoParser.RULE_expressionList = 9;
GoParser.RULE_typeDecl = 10;
GoParser.RULE_typeSpec = 11;
GoParser.RULE_aliasDecl = 12;
GoParser.RULE_typeDef = 13;
GoParser.RULE_typeParameters = 14;
GoParser.RULE_typeParameterDecl = 15;
GoParser.RULE_typeElement = 16;
GoParser.RULE_typeTerm = 17;
GoParser.RULE_functionDecl = 18;
GoParser.RULE_methodDecl = 19;
GoParser.RULE_receiver = 20;
GoParser.RULE_varDecl = 21;
GoParser.RULE_varSpec = 22;
GoParser.RULE_block = 23;
GoParser.RULE_statementList = 24;
GoParser.RULE_statement = 25;
GoParser.RULE_simpleStmt = 26;
GoParser.RULE_expressionStmt = 27;
GoParser.RULE_sendStmt = 28;
GoParser.RULE_incDecStmt = 29;
GoParser.RULE_assignment = 30;
GoParser.RULE_assign_op = 31;
GoParser.RULE_shortVarDecl = 32;
GoParser.RULE_labeledStmt = 33;
GoParser.RULE_returnStmt = 34;
GoParser.RULE_breakStmt = 35;
GoParser.RULE_continueStmt = 36;
GoParser.RULE_gotoStmt = 37;
GoParser.RULE_fallthroughStmt = 38;
GoParser.RULE_deferStmt = 39;
GoParser.RULE_ifStmt = 40;
GoParser.RULE_switchStmt = 41;
GoParser.RULE_exprSwitchStmt = 42;
GoParser.RULE_exprCaseClause = 43;
GoParser.RULE_exprSwitchCase = 44;
GoParser.RULE_typeSwitchStmt = 45;
GoParser.RULE_typeSwitchGuard = 46;
GoParser.RULE_typeCaseClause = 47;
GoParser.RULE_typeSwitchCase = 48;
GoParser.RULE_typeList = 49;
GoParser.RULE_selectStmt = 50;
GoParser.RULE_commClause = 51;
GoParser.RULE_commCase = 52;
GoParser.RULE_recvStmt = 53;
GoParser.RULE_forStmt = 54;
GoParser.RULE_forClause = 55;
GoParser.RULE_rangeClause = 56;
GoParser.RULE_goStmt = 57;
GoParser.RULE_type_ = 58;
GoParser.RULE_typeArgs = 59;
GoParser.RULE_typeName = 60;
GoParser.RULE_typeLit = 61;
GoParser.RULE_arrayType = 62;
GoParser.RULE_arrayLength = 63;
GoParser.RULE_elementType = 64;
GoParser.RULE_pointerType = 65;
GoParser.RULE_interfaceType = 66;
GoParser.RULE_sliceType = 67;
GoParser.RULE_mapType = 68;
GoParser.RULE_channelType = 69;
GoParser.RULE_methodSpec = 70;
GoParser.RULE_functionType = 71;
GoParser.RULE_signature = 72;
GoParser.RULE_result = 73;
GoParser.RULE_parameters = 74;
GoParser.RULE_parameterDecl = 75;
GoParser.RULE_expression = 76;
GoParser.RULE_primaryExpr = 77;
GoParser.RULE_conversion = 78;
GoParser.RULE_operand = 79;
GoParser.RULE_literal = 80;
GoParser.RULE_basicLit = 81;
GoParser.RULE_integer = 82;
GoParser.RULE_operandName = 83;
GoParser.RULE_qualifiedIdent = 84;
GoParser.RULE_compositeLit = 85;
GoParser.RULE_literalType = 86;
GoParser.RULE_literalValue = 87;
GoParser.RULE_elementList = 88;
GoParser.RULE_keyedElement = 89;
GoParser.RULE_key = 90;
GoParser.RULE_element = 91;
GoParser.RULE_structType = 92;
GoParser.RULE_fieldDecl = 93;
GoParser.RULE_string_ = 94;
GoParser.RULE_embeddedField = 95;
GoParser.RULE_functionLit = 96;
GoParser.RULE_index = 97;
GoParser.RULE_slice_ = 98;
GoParser.RULE_typeAssertion = 99;
GoParser.RULE_arguments = 100;
GoParser.RULE_methodExpr = 101;
GoParser.RULE_eos = 102;
GoParser.literalNames = [null, "'break'",
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
    null, "'('",
    "')'", "'{'",
    "'}'", "'['",
    "']'", "'='",
    "','", "';'",
    "':'", "'.'",
    "'++'", "'--'",
    "':='", "'...'",
    "'||'", "'&&'",
    "'=='", "'!='",
    "'<'", "'<='",
    "'>'", "'>='",
    "'|'", "'/'",
    "'%'", "'<<'",
    "'>>'", "'&^'",
    "'~'", "'!'",
    "'+'", "'-'",
    "'^'", "'*'",
    "'&'", "'<-'"];
GoParser.symbolicNames = [null, "BREAK",
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
GoParser.ruleNames = [
    "sourceFile", "packageClause", "importDecl", "importSpec", "importPath",
    "declaration", "constDecl", "constSpec", "identifierList", "expressionList",
    "typeDecl", "typeSpec", "aliasDecl", "typeDef", "typeParameters", "typeParameterDecl",
    "typeElement", "typeTerm", "functionDecl", "methodDecl", "receiver", "varDecl",
    "varSpec", "block", "statementList", "statement", "simpleStmt", "expressionStmt",
    "sendStmt", "incDecStmt", "assignment", "assign_op", "shortVarDecl", "labeledStmt",
    "returnStmt", "breakStmt", "continueStmt", "gotoStmt", "fallthroughStmt",
    "deferStmt", "ifStmt", "switchStmt", "exprSwitchStmt", "exprCaseClause",
    "exprSwitchCase", "typeSwitchStmt", "typeSwitchGuard", "typeCaseClause",
    "typeSwitchCase", "typeList", "selectStmt", "commClause", "commCase",
    "recvStmt", "forStmt", "forClause", "rangeClause", "goStmt", "type_",
    "typeArgs", "typeName", "typeLit", "arrayType", "arrayLength", "elementType",
    "pointerType", "interfaceType", "sliceType", "mapType", "channelType",
    "methodSpec", "functionType", "signature", "result", "parameters", "parameterDecl",
    "expression", "primaryExpr", "conversion", "operand", "literal", "basicLit",
    "integer", "operandName", "qualifiedIdent", "compositeLit", "literalType",
    "literalValue", "elementList", "keyedElement", "key", "element", "structType",
    "fieldDecl", "string_", "embeddedField", "functionLit", "index", "slice_",
    "typeAssertion", "arguments", "methodExpr", "eos",
];
GoParser._serializedATN = [4, 1, 89, 1012, 2, 0, 7, 0,
    2, 1, 7, 1, 2, 2, 7, 2, 2, 3, 7, 3, 2, 4, 7, 4, 2, 5, 7, 5, 2, 6, 7, 6, 2, 7, 7, 7, 2, 8, 7, 8, 2, 9, 7, 9,
    2, 10, 7, 10, 2, 11, 7, 11, 2, 12, 7, 12, 2, 13, 7, 13, 2, 14, 7, 14, 2, 15, 7, 15, 2, 16, 7, 16, 2,
    17, 7, 17, 2, 18, 7, 18, 2, 19, 7, 19, 2, 20, 7, 20, 2, 21, 7, 21, 2, 22, 7, 22, 2, 23, 7, 23, 2, 24,
    7, 24, 2, 25, 7, 25, 2, 26, 7, 26, 2, 27, 7, 27, 2, 28, 7, 28, 2, 29, 7, 29, 2, 30, 7, 30, 2, 31, 7,
    31, 2, 32, 7, 32, 2, 33, 7, 33, 2, 34, 7, 34, 2, 35, 7, 35, 2, 36, 7, 36, 2, 37, 7, 37, 2, 38, 7, 38,
    2, 39, 7, 39, 2, 40, 7, 40, 2, 41, 7, 41, 2, 42, 7, 42, 2, 43, 7, 43, 2, 44, 7, 44, 2, 45, 7, 45, 2,
    46, 7, 46, 2, 47, 7, 47, 2, 48, 7, 48, 2, 49, 7, 49, 2, 50, 7, 50, 2, 51, 7, 51, 2, 52, 7, 52, 2, 53,
    7, 53, 2, 54, 7, 54, 2, 55, 7, 55, 2, 56, 7, 56, 2, 57, 7, 57, 2, 58, 7, 58, 2, 59, 7, 59, 2, 60, 7,
    60, 2, 61, 7, 61, 2, 62, 7, 62, 2, 63, 7, 63, 2, 64, 7, 64, 2, 65, 7, 65, 2, 66, 7, 66, 2, 67, 7, 67,
    2, 68, 7, 68, 2, 69, 7, 69, 2, 70, 7, 70, 2, 71, 7, 71, 2, 72, 7, 72, 2, 73, 7, 73, 2, 74, 7, 74, 2,
    75, 7, 75, 2, 76, 7, 76, 2, 77, 7, 77, 2, 78, 7, 78, 2, 79, 7, 79, 2, 80, 7, 80, 2, 81, 7, 81, 2, 82,
    7, 82, 2, 83, 7, 83, 2, 84, 7, 84, 2, 85, 7, 85, 2, 86, 7, 86, 2, 87, 7, 87, 2, 88, 7, 88, 2, 89, 7,
    89, 2, 90, 7, 90, 2, 91, 7, 91, 2, 92, 7, 92, 2, 93, 7, 93, 2, 94, 7, 94, 2, 95, 7, 95, 2, 96, 7, 96,
    2, 97, 7, 97, 2, 98, 7, 98, 2, 99, 7, 99, 2, 100, 7, 100, 2, 101, 7, 101, 2, 102, 7, 102, 1, 0, 1,
    0, 1, 0, 1, 0, 1, 0, 5, 0, 212, 8, 0, 10, 0, 12, 0, 215, 9, 0, 1, 0, 1, 0, 1, 0, 3, 0, 220, 8, 0, 1, 0,
    1, 0, 5, 0, 224, 8, 0, 10, 0, 12, 0, 227, 9, 0, 1, 0, 1, 0, 1, 1, 1, 1, 1, 1, 1, 2, 1, 2, 1, 2, 1, 2, 1,
    2, 1, 2, 5, 2, 240, 8, 2, 10, 2, 12, 2, 243, 9, 2, 1, 2, 3, 2, 246, 8, 2, 1, 3, 3, 3, 249, 8, 3, 1, 3,
    1, 3, 1, 4, 1, 4, 1, 5, 1, 5, 1, 5, 3, 5, 258, 8, 5, 1, 6, 1, 6, 1, 6, 1, 6, 1, 6, 1, 6, 5, 6, 266, 8, 6,
    10, 6, 12, 6, 269, 9, 6, 1, 6, 3, 6, 272, 8, 6, 1, 7, 1, 7, 3, 7, 276, 8, 7, 1, 7, 1, 7, 1, 7, 1, 8, 1,
    8, 1, 8, 5, 8, 284, 8, 8, 10, 8, 12, 8, 287, 9, 8, 1, 9, 1, 9, 1, 9, 5, 9, 292, 8, 9, 10, 9, 12, 9, 295,
    9, 9, 1, 10, 1, 10, 1, 10, 1, 10, 1, 10, 1, 10, 5, 10, 303, 8, 10, 10, 10, 12, 10, 306, 9, 10, 1,
    10, 3, 10, 309, 8, 10, 1, 11, 1, 11, 3, 11, 313, 8, 11, 1, 12, 1, 12, 1, 12, 1, 12, 1, 13, 1, 13,
    3, 13, 321, 8, 13, 1, 13, 1, 13, 1, 14, 1, 14, 1, 14, 1, 14, 5, 14, 329, 8, 14, 10, 14, 12, 14, 332,
    9, 14, 1, 14, 1, 14, 1, 15, 1, 15, 1, 15, 1, 16, 1, 16, 1, 16, 5, 16, 342, 8, 16, 10, 16, 12, 16,
    345, 9, 16, 1, 17, 3, 17, 348, 8, 17, 1, 17, 1, 17, 1, 18, 1, 18, 1, 18, 3, 18, 355, 8, 18, 1, 18,
    1, 18, 3, 18, 359, 8, 18, 1, 19, 1, 19, 1, 19, 1, 19, 1, 19, 3, 19, 366, 8, 19, 1, 20, 1, 20, 1, 21,
    1, 21, 1, 21, 1, 21, 1, 21, 1, 21, 5, 21, 376, 8, 21, 10, 21, 12, 21, 379, 9, 21, 1, 21, 3, 21, 382,
    8, 21, 1, 22, 1, 22, 1, 22, 1, 22, 3, 22, 388, 8, 22, 1, 22, 1, 22, 3, 22, 392, 8, 22, 1, 23, 1, 23,
    3, 23, 396, 8, 23, 1, 23, 1, 23, 1, 24, 3, 24, 401, 8, 24, 1, 24, 3, 24, 404, 8, 24, 1, 24, 3, 24,
    407, 8, 24, 1, 24, 1, 24, 1, 24, 4, 24, 412, 8, 24, 11, 24, 12, 24, 413, 1, 25, 1, 25, 1, 25, 1,
    25, 1, 25, 1, 25, 1, 25, 1, 25, 1, 25, 1, 25, 1, 25, 1, 25, 1, 25, 1, 25, 1, 25, 3, 25, 431, 8, 25,
    1, 26, 1, 26, 1, 26, 1, 26, 1, 26, 3, 26, 438, 8, 26, 1, 27, 1, 27, 1, 28, 1, 28, 1, 28, 1, 28, 1,
    29, 1, 29, 1, 29, 1, 30, 1, 30, 1, 30, 1, 30, 1, 31, 3, 31, 454, 8, 31, 1, 31, 1, 31, 1, 32, 1, 32,
    1, 32, 1, 32, 1, 33, 1, 33, 1, 33, 3, 33, 465, 8, 33, 1, 34, 1, 34, 3, 34, 469, 8, 34, 1, 35, 1, 35,
    3, 35, 473, 8, 35, 1, 36, 1, 36, 3, 36, 477, 8, 36, 1, 37, 1, 37, 1, 37, 1, 38, 1, 38, 1, 39, 1, 39,
    1, 39, 1, 40, 1, 40, 1, 40, 1, 40, 1, 40, 1, 40, 1, 40, 1, 40, 1, 40, 3, 40, 496, 8, 40, 1, 40, 1,
    40, 1, 40, 1, 40, 3, 40, 502, 8, 40, 3, 40, 504, 8, 40, 1, 41, 1, 41, 3, 41, 508, 8, 41, 1, 42, 1,
    42, 3, 42, 512, 8, 42, 1, 42, 3, 42, 515, 8, 42, 1, 42, 1, 42, 3, 42, 519, 8, 42, 3, 42, 521, 8,
    42, 1, 42, 1, 42, 5, 42, 525, 8, 42, 10, 42, 12, 42, 528, 9, 42, 1, 42, 1, 42, 1, 43, 1, 43, 1, 43,
    3, 43, 535, 8, 43, 1, 44, 1, 44, 1, 44, 3, 44, 540, 8, 44, 1, 45, 1, 45, 1, 45, 1, 45, 1, 45, 1, 45,
    1, 45, 1, 45, 1, 45, 3, 45, 551, 8, 45, 1, 45, 1, 45, 5, 45, 555, 8, 45, 10, 45, 12, 45, 558, 9,
    45, 1, 45, 1, 45, 1, 46, 1, 46, 3, 46, 564, 8, 46, 1, 46, 1, 46, 1, 46, 1, 46, 1, 46, 1, 46, 1, 47,
    1, 47, 1, 47, 3, 47, 575, 8, 47, 1, 48, 1, 48, 1, 48, 3, 48, 580, 8, 48, 1, 49, 1, 49, 3, 49, 584,
    8, 49, 1, 49, 1, 49, 1, 49, 3, 49, 589, 8, 49, 5, 49, 591, 8, 49, 10, 49, 12, 49, 594, 9, 49, 1,
    50, 1, 50, 1, 50, 5, 50, 599, 8, 50, 10, 50, 12, 50, 602, 9, 50, 1, 50, 1, 50, 1, 51, 1, 51, 1, 51,
    3, 51, 609, 8, 51, 1, 52, 1, 52, 1, 52, 3, 52, 614, 8, 52, 1, 52, 3, 52, 617, 8, 52, 1, 53, 1, 53,
    1, 53, 1, 53, 1, 53, 1, 53, 3, 53, 625, 8, 53, 1, 53, 1, 53, 1, 54, 1, 54, 3, 54, 631, 8, 54, 1, 54,
    1, 54, 3, 54, 635, 8, 54, 3, 54, 637, 8, 54, 1, 54, 1, 54, 1, 55, 3, 55, 642, 8, 55, 1, 55, 1, 55,
    3, 55, 646, 8, 55, 1, 55, 1, 55, 3, 55, 650, 8, 55, 1, 56, 1, 56, 1, 56, 1, 56, 1, 56, 1, 56, 3, 56,
    658, 8, 56, 1, 56, 1, 56, 1, 56, 1, 57, 1, 57, 1, 57, 1, 58, 1, 58, 3, 58, 668, 8, 58, 1, 58, 1, 58,
    1, 58, 1, 58, 1, 58, 3, 58, 675, 8, 58, 1, 59, 1, 59, 1, 59, 3, 59, 680, 8, 59, 1, 59, 1, 59, 1, 60,
    1, 60, 3, 60, 686, 8, 60, 1, 61, 1, 61, 1, 61, 1, 61, 1, 61, 1, 61, 1, 61, 1, 61, 3, 61, 696, 8, 61,
    1, 62, 1, 62, 1, 62, 1, 62, 1, 62, 1, 63, 1, 63, 1, 64, 1, 64, 1, 65, 1, 65, 1, 65, 1, 66, 1, 66, 1,
    66, 1, 66, 3, 66, 714, 8, 66, 1, 66, 1, 66, 5, 66, 718, 8, 66, 10, 66, 12, 66, 721, 9, 66, 1, 66,
    1, 66, 1, 67, 1, 67, 1, 67, 1, 67, 1, 68, 1, 68, 1, 68, 1, 68, 1, 68, 1, 68, 1, 69, 1, 69, 1, 69, 1,
    69, 1, 69, 3, 69, 740, 8, 69, 1, 69, 1, 69, 1, 70, 1, 70, 1, 70, 1, 70, 1, 70, 1, 70, 3, 70, 750,
    8, 70, 1, 71, 1, 71, 1, 71, 1, 72, 1, 72, 3, 72, 757, 8, 72, 1, 73, 1, 73, 3, 73, 761, 8, 73, 1, 74,
    1, 74, 1, 74, 1, 74, 5, 74, 767, 8, 74, 10, 74, 12, 74, 770, 9, 74, 1, 74, 3, 74, 773, 8, 74, 3,
    74, 775, 8, 74, 1, 74, 1, 74, 1, 75, 3, 75, 780, 8, 75, 1, 75, 3, 75, 783, 8, 75, 1, 75, 1, 75, 1,
    76, 1, 76, 1, 76, 1, 76, 3, 76, 791, 8, 76, 1, 76, 1, 76, 1, 76, 1, 76, 1, 76, 1, 76, 1, 76, 1, 76,
    1, 76, 1, 76, 1, 76, 1, 76, 1, 76, 1, 76, 1, 76, 5, 76, 808, 8, 76, 10, 76, 12, 76, 811, 9, 76, 1,
    77, 1, 77, 1, 77, 1, 77, 3, 77, 817, 8, 77, 1, 77, 1, 77, 1, 77, 1, 77, 1, 77, 1, 77, 1, 77, 3, 77,
    826, 8, 77, 5, 77, 828, 8, 77, 10, 77, 12, 77, 831, 9, 77, 1, 78, 1, 78, 1, 78, 1, 78, 3, 78, 837,
    8, 78, 1, 78, 1, 78, 1, 79, 1, 79, 1, 79, 3, 79, 844, 8, 79, 1, 79, 1, 79, 1, 79, 1, 79, 3, 79, 850,
    8, 79, 1, 80, 1, 80, 1, 80, 3, 80, 855, 8, 80, 1, 81, 1, 81, 1, 81, 1, 81, 3, 81, 861, 8, 81, 1, 82,
    1, 82, 1, 83, 1, 83, 1, 84, 1, 84, 1, 84, 1, 84, 1, 85, 1, 85, 1, 85, 1, 86, 1, 86, 1, 86, 1, 86, 1,
    86, 1, 86, 1, 86, 1, 86, 1, 86, 1, 86, 3, 86, 884, 8, 86, 3, 86, 886, 8, 86, 1, 87, 1, 87, 1, 87,
    3, 87, 891, 8, 87, 3, 87, 893, 8, 87, 1, 87, 1, 87, 1, 88, 1, 88, 1, 88, 5, 88, 900, 8, 88, 10, 88,
    12, 88, 903, 9, 88, 1, 89, 1, 89, 1, 89, 3, 89, 908, 8, 89, 1, 89, 1, 89, 1, 90, 1, 90, 3, 90, 914,
    8, 90, 1, 91, 1, 91, 3, 91, 918, 8, 91, 1, 92, 1, 92, 1, 92, 1, 92, 1, 92, 5, 92, 925, 8, 92, 10,
    92, 12, 92, 928, 9, 92, 1, 92, 1, 92, 1, 93, 1, 93, 1, 93, 1, 93, 3, 93, 936, 8, 93, 1, 93, 3, 93,
    939, 8, 93, 1, 94, 1, 94, 1, 95, 3, 95, 944, 8, 95, 1, 95, 1, 95, 3, 95, 948, 8, 95, 1, 96, 1, 96,
    1, 96, 1, 96, 1, 97, 1, 97, 1, 97, 1, 97, 1, 98, 1, 98, 3, 98, 960, 8, 98, 1, 98, 1, 98, 3, 98, 964,
    8, 98, 1, 98, 3, 98, 967, 8, 98, 1, 98, 1, 98, 1, 98, 1, 98, 1, 98, 3, 98, 974, 8, 98, 1, 98, 1, 98,
    1, 99, 1, 99, 1, 99, 1, 99, 1, 99, 1, 100, 1, 100, 1, 100, 1, 100, 1, 100, 3, 100, 988, 8, 100,
    3, 100, 990, 8, 100, 1, 100, 3, 100, 993, 8, 100, 1, 100, 3, 100, 996, 8, 100, 3, 100, 998, 8,
    100, 1, 100, 1, 100, 1, 101, 1, 101, 1, 101, 1, 101, 1, 102, 1, 102, 1, 102, 1, 102, 3, 102, 1010,
    8, 102, 1, 102, 0, 2, 152, 154, 103, 0, 2, 4, 6, 8, 10, 12, 14, 16, 18, 20, 22, 24, 26, 28, 30,
    32, 34, 36, 38, 40, 42, 44, 46, 48, 50, 52, 54, 56, 58, 60, 62, 64, 66, 68, 70, 72, 74, 76, 78,
    80, 82, 84, 86, 88, 90, 92, 94, 96, 98, 100, 102, 104, 106, 108, 110, 112, 114, 116, 118, 120,
    122, 124, 126, 128, 130, 132, 134, 136, 138, 140, 142, 144, 146, 148, 150, 152, 154, 156,
    158, 160, 162, 164, 166, 168, 170, 172, 174, 176, 178, 180, 182, 184, 186, 188, 190, 192,
    194, 196, 198, 200, 202, 204, 0, 9, 2, 0, 27, 27, 38, 38, 1, 0, 39, 40, 2, 0, 51, 56, 59, 63, 1,
    0, 58, 64, 2, 0, 52, 56, 62, 63, 2, 0, 51, 51, 59, 61, 1, 0, 45, 50, 2, 0, 65, 68, 72, 73, 1, 0, 79,
    80, 1076, 0, 206, 1, 0, 0, 0, 2, 230, 1, 0, 0, 0, 4, 233, 1, 0, 0, 0, 6, 248, 1, 0, 0, 0, 8, 252, 1,
    0, 0, 0, 10, 257, 1, 0, 0, 0, 12, 259, 1, 0, 0, 0, 14, 273, 1, 0, 0, 0, 16, 280, 1, 0, 0, 0, 18, 288,
    1, 0, 0, 0, 20, 296, 1, 0, 0, 0, 22, 312, 1, 0, 0, 0, 24, 314, 1, 0, 0, 0, 26, 318, 1, 0, 0, 0, 28,
    324, 1, 0, 0, 0, 30, 335, 1, 0, 0, 0, 32, 338, 1, 0, 0, 0, 34, 347, 1, 0, 0, 0, 36, 351, 1, 0, 0, 0,
    38, 360, 1, 0, 0, 0, 40, 367, 1, 0, 0, 0, 42, 369, 1, 0, 0, 0, 44, 383, 1, 0, 0, 0, 46, 393, 1, 0,
    0, 0, 48, 411, 1, 0, 0, 0, 50, 430, 1, 0, 0, 0, 52, 437, 1, 0, 0, 0, 54, 439, 1, 0, 0, 0, 56, 441,
    1, 0, 0, 0, 58, 445, 1, 0, 0, 0, 60, 448, 1, 0, 0, 0, 62, 453, 1, 0, 0, 0, 64, 457, 1, 0, 0, 0, 66,
    461, 1, 0, 0, 0, 68, 466, 1, 0, 0, 0, 70, 470, 1, 0, 0, 0, 72, 474, 1, 0, 0, 0, 74, 478, 1, 0, 0, 0,
    76, 481, 1, 0, 0, 0, 78, 483, 1, 0, 0, 0, 80, 486, 1, 0, 0, 0, 82, 507, 1, 0, 0, 0, 84, 509, 1, 0,
    0, 0, 86, 531, 1, 0, 0, 0, 88, 539, 1, 0, 0, 0, 90, 541, 1, 0, 0, 0, 92, 563, 1, 0, 0, 0, 94, 571,
    1, 0, 0, 0, 96, 579, 1, 0, 0, 0, 98, 583, 1, 0, 0, 0, 100, 595, 1, 0, 0, 0, 102, 605, 1, 0, 0, 0, 104,
    616, 1, 0, 0, 0, 106, 624, 1, 0, 0, 0, 108, 628, 1, 0, 0, 0, 110, 641, 1, 0, 0, 0, 112, 657, 1, 0,
    0, 0, 114, 662, 1, 0, 0, 0, 116, 674, 1, 0, 0, 0, 118, 676, 1, 0, 0, 0, 120, 685, 1, 0, 0, 0, 122,
    695, 1, 0, 0, 0, 124, 697, 1, 0, 0, 0, 126, 702, 1, 0, 0, 0, 128, 704, 1, 0, 0, 0, 130, 706, 1, 0,
    0, 0, 132, 709, 1, 0, 0, 0, 134, 724, 1, 0, 0, 0, 136, 728, 1, 0, 0, 0, 138, 739, 1, 0, 0, 0, 140,
    749, 1, 0, 0, 0, 142, 751, 1, 0, 0, 0, 144, 754, 1, 0, 0, 0, 146, 760, 1, 0, 0, 0, 148, 762, 1, 0,
    0, 0, 150, 779, 1, 0, 0, 0, 152, 790, 1, 0, 0, 0, 154, 816, 1, 0, 0, 0, 156, 832, 1, 0, 0, 0, 158,
    849, 1, 0, 0, 0, 160, 854, 1, 0, 0, 0, 162, 860, 1, 0, 0, 0, 164, 862, 1, 0, 0, 0, 166, 864, 1, 0,
    0, 0, 168, 866, 1, 0, 0, 0, 170, 870, 1, 0, 0, 0, 172, 885, 1, 0, 0, 0, 174, 887, 1, 0, 0, 0, 176,
    896, 1, 0, 0, 0, 178, 907, 1, 0, 0, 0, 180, 913, 1, 0, 0, 0, 182, 917, 1, 0, 0, 0, 184, 919, 1, 0,
    0, 0, 186, 935, 1, 0, 0, 0, 188, 940, 1, 0, 0, 0, 190, 943, 1, 0, 0, 0, 192, 949, 1, 0, 0, 0, 194,
    953, 1, 0, 0, 0, 196, 957, 1, 0, 0, 0, 198, 977, 1, 0, 0, 0, 200, 982, 1, 0, 0, 0, 202, 1001, 1,
    0, 0, 0, 204, 1009, 1, 0, 0, 0, 206, 207, 3, 2, 1, 0, 207, 213, 3, 204, 102, 0, 208, 209, 3, 4,
    2, 0, 209, 210, 3, 204, 102, 0, 210, 212, 1, 0, 0, 0, 211, 208, 1, 0, 0, 0, 212, 215, 1, 0, 0, 0,
    213, 211, 1, 0, 0, 0, 213, 214, 1, 0, 0, 0, 214, 225, 1, 0, 0, 0, 215, 213, 1, 0, 0, 0, 216, 220,
    3, 36, 18, 0, 217, 220, 3, 38, 19, 0, 218, 220, 3, 10, 5, 0, 219, 216, 1, 0, 0, 0, 219, 217, 1,
    0, 0, 0, 219, 218, 1, 0, 0, 0, 220, 221, 1, 0, 0, 0, 221, 222, 3, 204, 102, 0, 222, 224, 1, 0, 0,
    0, 223, 219, 1, 0, 0, 0, 224, 227, 1, 0, 0, 0, 225, 223, 1, 0, 0, 0, 225, 226, 1, 0, 0, 0, 226, 228,
    1, 0, 0, 0, 227, 225, 1, 0, 0, 0, 228, 229, 5, 0, 0, 1, 229, 1, 1, 0, 0, 0, 230, 231, 5, 14, 0, 0,
    231, 232, 5, 27, 0, 0, 232, 3, 1, 0, 0, 0, 233, 245, 5, 23, 0, 0, 234, 246, 3, 6, 3, 0, 235, 241,
    5, 28, 0, 0, 236, 237, 3, 6, 3, 0, 237, 238, 3, 204, 102, 0, 238, 240, 1, 0, 0, 0, 239, 236, 1,
    0, 0, 0, 240, 243, 1, 0, 0, 0, 241, 239, 1, 0, 0, 0, 241, 242, 1, 0, 0, 0, 242, 244, 1, 0, 0, 0, 243,
    241, 1, 0, 0, 0, 244, 246, 5, 29, 0, 0, 245, 234, 1, 0, 0, 0, 245, 235, 1, 0, 0, 0, 246, 5, 1, 0,
    0, 0, 247, 249, 7, 0, 0, 0, 248, 247, 1, 0, 0, 0, 248, 249, 1, 0, 0, 0, 249, 250, 1, 0, 0, 0, 250,
    251, 3, 8, 4, 0, 251, 7, 1, 0, 0, 0, 252, 253, 3, 188, 94, 0, 253, 9, 1, 0, 0, 0, 254, 258, 3, 12,
    6, 0, 255, 258, 3, 20, 10, 0, 256, 258, 3, 42, 21, 0, 257, 254, 1, 0, 0, 0, 257, 255, 1, 0, 0, 0,
    257, 256, 1, 0, 0, 0, 258, 11, 1, 0, 0, 0, 259, 271, 5, 16, 0, 0, 260, 272, 3, 14, 7, 0, 261, 267,
    5, 28, 0, 0, 262, 263, 3, 14, 7, 0, 263, 264, 3, 204, 102, 0, 264, 266, 1, 0, 0, 0, 265, 262, 1,
    0, 0, 0, 266, 269, 1, 0, 0, 0, 267, 265, 1, 0, 0, 0, 267, 268, 1, 0, 0, 0, 268, 270, 1, 0, 0, 0, 269,
    267, 1, 0, 0, 0, 270, 272, 5, 29, 0, 0, 271, 260, 1, 0, 0, 0, 271, 261, 1, 0, 0, 0, 272, 13, 1, 0,
    0, 0, 273, 275, 3, 16, 8, 0, 274, 276, 3, 116, 58, 0, 275, 274, 1, 0, 0, 0, 275, 276, 1, 0, 0, 0,
    276, 277, 1, 0, 0, 0, 277, 278, 5, 34, 0, 0, 278, 279, 3, 18, 9, 0, 279, 15, 1, 0, 0, 0, 280, 285,
    5, 27, 0, 0, 281, 282, 5, 35, 0, 0, 282, 284, 5, 27, 0, 0, 283, 281, 1, 0, 0, 0, 284, 287, 1, 0,
    0, 0, 285, 283, 1, 0, 0, 0, 285, 286, 1, 0, 0, 0, 286, 17, 1, 0, 0, 0, 287, 285, 1, 0, 0, 0, 288,
    293, 3, 152, 76, 0, 289, 290, 5, 35, 0, 0, 290, 292, 3, 152, 76, 0, 291, 289, 1, 0, 0, 0, 292,
    295, 1, 0, 0, 0, 293, 291, 1, 0, 0, 0, 293, 294, 1, 0, 0, 0, 294, 19, 1, 0, 0, 0, 295, 293, 1, 0,
    0, 0, 296, 308, 5, 20, 0, 0, 297, 309, 3, 22, 11, 0, 298, 304, 5, 28, 0, 0, 299, 300, 3, 22, 11,
    0, 300, 301, 3, 204, 102, 0, 301, 303, 1, 0, 0, 0, 302, 299, 1, 0, 0, 0, 303, 306, 1, 0, 0, 0, 304,
    302, 1, 0, 0, 0, 304, 305, 1, 0, 0, 0, 305, 307, 1, 0, 0, 0, 306, 304, 1, 0, 0, 0, 307, 309, 5, 29,
    0, 0, 308, 297, 1, 0, 0, 0, 308, 298, 1, 0, 0, 0, 309, 21, 1, 0, 0, 0, 310, 313, 3, 24, 12, 0, 311,
    313, 3, 26, 13, 0, 312, 310, 1, 0, 0, 0, 312, 311, 1, 0, 0, 0, 313, 23, 1, 0, 0, 0, 314, 315, 5,
    27, 0, 0, 315, 316, 5, 34, 0, 0, 316, 317, 3, 116, 58, 0, 317, 25, 1, 0, 0, 0, 318, 320, 5, 27,
    0, 0, 319, 321, 3, 28, 14, 0, 320, 319, 1, 0, 0, 0, 320, 321, 1, 0, 0, 0, 321, 322, 1, 0, 0, 0, 322,
    323, 3, 116, 58, 0, 323, 27, 1, 0, 0, 0, 324, 325, 5, 32, 0, 0, 325, 330, 3, 30, 15, 0, 326, 327,
    5, 35, 0, 0, 327, 329, 3, 30, 15, 0, 328, 326, 1, 0, 0, 0, 329, 332, 1, 0, 0, 0, 330, 328, 1, 0,
    0, 0, 330, 331, 1, 0, 0, 0, 331, 333, 1, 0, 0, 0, 332, 330, 1, 0, 0, 0, 333, 334, 5, 33, 0, 0, 334,
    29, 1, 0, 0, 0, 335, 336, 3, 16, 8, 0, 336, 337, 3, 32, 16, 0, 337, 31, 1, 0, 0, 0, 338, 343, 3,
    34, 17, 0, 339, 340, 5, 51, 0, 0, 340, 342, 3, 34, 17, 0, 341, 339, 1, 0, 0, 0, 342, 345, 1, 0,
    0, 0, 343, 341, 1, 0, 0, 0, 343, 344, 1, 0, 0, 0, 344, 33, 1, 0, 0, 0, 345, 343, 1, 0, 0, 0, 346,
    348, 5, 57, 0, 0, 347, 346, 1, 0, 0, 0, 347, 348, 1, 0, 0, 0, 348, 349, 1, 0, 0, 0, 349, 350, 3,
    116, 58, 0, 350, 35, 1, 0, 0, 0, 351, 352, 5, 3, 0, 0, 352, 354, 5, 27, 0, 0, 353, 355, 3, 28, 14,
    0, 354, 353, 1, 0, 0, 0, 354, 355, 1, 0, 0, 0, 355, 356, 1, 0, 0, 0, 356, 358, 3, 144, 72, 0, 357,
    359, 3, 46, 23, 0, 358, 357, 1, 0, 0, 0, 358, 359, 1, 0, 0, 0, 359, 37, 1, 0, 0, 0, 360, 361, 5,
    3, 0, 0, 361, 362, 3, 40, 20, 0, 362, 363, 5, 27, 0, 0, 363, 365, 3, 144, 72, 0, 364, 366, 3, 46,
    23, 0, 365, 364, 1, 0, 0, 0, 365, 366, 1, 0, 0, 0, 366, 39, 1, 0, 0, 0, 367, 368, 3, 148, 74, 0,
    368, 41, 1, 0, 0, 0, 369, 381, 5, 25, 0, 0, 370, 382, 3, 44, 22, 0, 371, 377, 5, 28, 0, 0, 372,
    373, 3, 44, 22, 0, 373, 374, 3, 204, 102, 0, 374, 376, 1, 0, 0, 0, 375, 372, 1, 0, 0, 0, 376, 379,
    1, 0, 0, 0, 377, 375, 1, 0, 0, 0, 377, 378, 1, 0, 0, 0, 378, 380, 1, 0, 0, 0, 379, 377, 1, 0, 0, 0,
    380, 382, 5, 29, 0, 0, 381, 370, 1, 0, 0, 0, 381, 371, 1, 0, 0, 0, 382, 43, 1, 0, 0, 0, 383, 391,
    3, 16, 8, 0, 384, 387, 3, 116, 58, 0, 385, 386, 5, 34, 0, 0, 386, 388, 3, 18, 9, 0, 387, 385, 1,
    0, 0, 0, 387, 388, 1, 0, 0, 0, 388, 392, 1, 0, 0, 0, 389, 390, 5, 34, 0, 0, 390, 392, 3, 18, 9, 0,
    391, 384, 1, 0, 0, 0, 391, 389, 1, 0, 0, 0, 392, 45, 1, 0, 0, 0, 393, 395, 5, 30, 0, 0, 394, 396,
    3, 48, 24, 0, 395, 394, 1, 0, 0, 0, 395, 396, 1, 0, 0, 0, 396, 397, 1, 0, 0, 0, 397, 398, 5, 31,
    0, 0, 398, 47, 1, 0, 0, 0, 399, 401, 5, 36, 0, 0, 400, 399, 1, 0, 0, 0, 400, 401, 1, 0, 0, 0, 401,
    407, 1, 0, 0, 0, 402, 404, 5, 88, 0, 0, 403, 402, 1, 0, 0, 0, 403, 404, 1, 0, 0, 0, 404, 407, 1,
    0, 0, 0, 405, 407, 4, 24, 0, 0, 406, 400, 1, 0, 0, 0, 406, 403, 1, 0, 0, 0, 406, 405, 1, 0, 0, 0,
    407, 408, 1, 0, 0, 0, 408, 409, 3, 50, 25, 0, 409, 410, 3, 204, 102, 0, 410, 412, 1, 0, 0, 0, 411,
    406, 1, 0, 0, 0, 412, 413, 1, 0, 0, 0, 413, 411, 1, 0, 0, 0, 413, 414, 1, 0, 0, 0, 414, 49, 1, 0,
    0, 0, 415, 431, 3, 10, 5, 0, 416, 431, 3, 66, 33, 0, 417, 431, 3, 52, 26, 0, 418, 431, 3, 114,
    57, 0, 419, 431, 3, 68, 34, 0, 420, 431, 3, 70, 35, 0, 421, 431, 3, 72, 36, 0, 422, 431, 3, 74,
    37, 0, 423, 431, 3, 76, 38, 0, 424, 431, 3, 46, 23, 0, 425, 431, 3, 80, 40, 0, 426, 431, 3, 82,
    41, 0, 427, 431, 3, 100, 50, 0, 428, 431, 3, 108, 54, 0, 429, 431, 3, 78, 39, 0, 430, 415, 1,
    0, 0, 0, 430, 416, 1, 0, 0, 0, 430, 417, 1, 0, 0, 0, 430, 418, 1, 0, 0, 0, 430, 419, 1, 0, 0, 0, 430,
    420, 1, 0, 0, 0, 430, 421, 1, 0, 0, 0, 430, 422, 1, 0, 0, 0, 430, 423, 1, 0, 0, 0, 430, 424, 1, 0,
    0, 0, 430, 425, 1, 0, 0, 0, 430, 426, 1, 0, 0, 0, 430, 427, 1, 0, 0, 0, 430, 428, 1, 0, 0, 0, 430,
    429, 1, 0, 0, 0, 431, 51, 1, 0, 0, 0, 432, 438, 3, 56, 28, 0, 433, 438, 3, 58, 29, 0, 434, 438,
    3, 60, 30, 0, 435, 438, 3, 54, 27, 0, 436, 438, 3, 64, 32, 0, 437, 432, 1, 0, 0, 0, 437, 433, 1,
    0, 0, 0, 437, 434, 1, 0, 0, 0, 437, 435, 1, 0, 0, 0, 437, 436, 1, 0, 0, 0, 438, 53, 1, 0, 0, 0, 439,
    440, 3, 152, 76, 0, 440, 55, 1, 0, 0, 0, 441, 442, 3, 152, 76, 0, 442, 443, 5, 64, 0, 0, 443, 444,
    3, 152, 76, 0, 444, 57, 1, 0, 0, 0, 445, 446, 3, 152, 76, 0, 446, 447, 7, 1, 0, 0, 447, 59, 1, 0,
    0, 0, 448, 449, 3, 18, 9, 0, 449, 450, 3, 62, 31, 0, 450, 451, 3, 18, 9, 0, 451, 61, 1, 0, 0, 0,
    452, 454, 7, 2, 0, 0, 453, 452, 1, 0, 0, 0, 453, 454, 1, 0, 0, 0, 454, 455, 1, 0, 0, 0, 455, 456,
    5, 34, 0, 0, 456, 63, 1, 0, 0, 0, 457, 458, 3, 16, 8, 0, 458, 459, 5, 41, 0, 0, 459, 460, 3, 18,
    9, 0, 460, 65, 1, 0, 0, 0, 461, 462, 5, 27, 0, 0, 462, 464, 5, 37, 0, 0, 463, 465, 3, 50, 25, 0,
    464, 463, 1, 0, 0, 0, 464, 465, 1, 0, 0, 0, 465, 67, 1, 0, 0, 0, 466, 468, 5, 24, 0, 0, 467, 469,
    3, 18, 9, 0, 468, 467, 1, 0, 0, 0, 468, 469, 1, 0, 0, 0, 469, 69, 1, 0, 0, 0, 470, 472, 5, 1, 0, 0,
    471, 473, 5, 27, 0, 0, 472, 471, 1, 0, 0, 0, 472, 473, 1, 0, 0, 0, 473, 71, 1, 0, 0, 0, 474, 476,
    5, 21, 0, 0, 475, 477, 5, 27, 0, 0, 476, 475, 1, 0, 0, 0, 476, 477, 1, 0, 0, 0, 477, 73, 1, 0, 0,
    0, 478, 479, 5, 13, 0, 0, 479, 480, 5, 27, 0, 0, 480, 75, 1, 0, 0, 0, 481, 482, 5, 17, 0, 0, 482,
    77, 1, 0, 0, 0, 483, 484, 5, 7, 0, 0, 484, 485, 3, 152, 76, 0, 485, 79, 1, 0, 0, 0, 486, 495, 5,
    18, 0, 0, 487, 496, 3, 152, 76, 0, 488, 489, 3, 204, 102, 0, 489, 490, 3, 152, 76, 0, 490, 496,
    1, 0, 0, 0, 491, 492, 3, 52, 26, 0, 492, 493, 3, 204, 102, 0, 493, 494, 3, 152, 76, 0, 494, 496,
    1, 0, 0, 0, 495, 487, 1, 0, 0, 0, 495, 488, 1, 0, 0, 0, 495, 491, 1, 0, 0, 0, 496, 497, 1, 0, 0, 0,
    497, 503, 3, 46, 23, 0, 498, 501, 5, 12, 0, 0, 499, 502, 3, 80, 40, 0, 500, 502, 3, 46, 23, 0,
    501, 499, 1, 0, 0, 0, 501, 500, 1, 0, 0, 0, 502, 504, 1, 0, 0, 0, 503, 498, 1, 0, 0, 0, 503, 504,
    1, 0, 0, 0, 504, 81, 1, 0, 0, 0, 505, 508, 3, 84, 42, 0, 506, 508, 3, 90, 45, 0, 507, 505, 1, 0,
    0, 0, 507, 506, 1, 0, 0, 0, 508, 83, 1, 0, 0, 0, 509, 520, 5, 15, 0, 0, 510, 512, 3, 152, 76, 0,
    511, 510, 1, 0, 0, 0, 511, 512, 1, 0, 0, 0, 512, 521, 1, 0, 0, 0, 513, 515, 3, 52, 26, 0, 514, 513,
    1, 0, 0, 0, 514, 515, 1, 0, 0, 0, 515, 516, 1, 0, 0, 0, 516, 518, 3, 204, 102, 0, 517, 519, 3, 152,
    76, 0, 518, 517, 1, 0, 0, 0, 518, 519, 1, 0, 0, 0, 519, 521, 1, 0, 0, 0, 520, 511, 1, 0, 0, 0, 520,
    514, 1, 0, 0, 0, 521, 522, 1, 0, 0, 0, 522, 526, 5, 30, 0, 0, 523, 525, 3, 86, 43, 0, 524, 523,
    1, 0, 0, 0, 525, 528, 1, 0, 0, 0, 526, 524, 1, 0, 0, 0, 526, 527, 1, 0, 0, 0, 527, 529, 1, 0, 0, 0,
    528, 526, 1, 0, 0, 0, 529, 530, 5, 31, 0, 0, 530, 85, 1, 0, 0, 0, 531, 532, 3, 88, 44, 0, 532, 534,
    5, 37, 0, 0, 533, 535, 3, 48, 24, 0, 534, 533, 1, 0, 0, 0, 534, 535, 1, 0, 0, 0, 535, 87, 1, 0, 0,
    0, 536, 537, 5, 6, 0, 0, 537, 540, 3, 18, 9, 0, 538, 540, 5, 2, 0, 0, 539, 536, 1, 0, 0, 0, 539,
    538, 1, 0, 0, 0, 540, 89, 1, 0, 0, 0, 541, 550, 5, 15, 0, 0, 542, 551, 3, 92, 46, 0, 543, 544, 3,
    204, 102, 0, 544, 545, 3, 92, 46, 0, 545, 551, 1, 0, 0, 0, 546, 547, 3, 52, 26, 0, 547, 548, 3,
    204, 102, 0, 548, 549, 3, 92, 46, 0, 549, 551, 1, 0, 0, 0, 550, 542, 1, 0, 0, 0, 550, 543, 1, 0,
    0, 0, 550, 546, 1, 0, 0, 0, 551, 552, 1, 0, 0, 0, 552, 556, 5, 30, 0, 0, 553, 555, 3, 94, 47, 0,
    554, 553, 1, 0, 0, 0, 555, 558, 1, 0, 0, 0, 556, 554, 1, 0, 0, 0, 556, 557, 1, 0, 0, 0, 557, 559,
    1, 0, 0, 0, 558, 556, 1, 0, 0, 0, 559, 560, 5, 31, 0, 0, 560, 91, 1, 0, 0, 0, 561, 562, 5, 27, 0,
    0, 562, 564, 5, 41, 0, 0, 563, 561, 1, 0, 0, 0, 563, 564, 1, 0, 0, 0, 564, 565, 1, 0, 0, 0, 565,
    566, 3, 154, 77, 0, 566, 567, 5, 38, 0, 0, 567, 568, 5, 28, 0, 0, 568, 569, 5, 20, 0, 0, 569, 570,
    5, 29, 0, 0, 570, 93, 1, 0, 0, 0, 571, 572, 3, 96, 48, 0, 572, 574, 5, 37, 0, 0, 573, 575, 3, 48,
    24, 0, 574, 573, 1, 0, 0, 0, 574, 575, 1, 0, 0, 0, 575, 95, 1, 0, 0, 0, 576, 577, 5, 6, 0, 0, 577,
    580, 3, 98, 49, 0, 578, 580, 5, 2, 0, 0, 579, 576, 1, 0, 0, 0, 579, 578, 1, 0, 0, 0, 580, 97, 1,
    0, 0, 0, 581, 584, 3, 116, 58, 0, 582, 584, 5, 26, 0, 0, 583, 581, 1, 0, 0, 0, 583, 582, 1, 0, 0,
    0, 584, 592, 1, 0, 0, 0, 585, 588, 5, 35, 0, 0, 586, 589, 3, 116, 58, 0, 587, 589, 5, 26, 0, 0,
    588, 586, 1, 0, 0, 0, 588, 587, 1, 0, 0, 0, 589, 591, 1, 0, 0, 0, 590, 585, 1, 0, 0, 0, 591, 594,
    1, 0, 0, 0, 592, 590, 1, 0, 0, 0, 592, 593, 1, 0, 0, 0, 593, 99, 1, 0, 0, 0, 594, 592, 1, 0, 0, 0,
    595, 596, 5, 5, 0, 0, 596, 600, 5, 30, 0, 0, 597, 599, 3, 102, 51, 0, 598, 597, 1, 0, 0, 0, 599,
    602, 1, 0, 0, 0, 600, 598, 1, 0, 0, 0, 600, 601, 1, 0, 0, 0, 601, 603, 1, 0, 0, 0, 602, 600, 1, 0,
    0, 0, 603, 604, 5, 31, 0, 0, 604, 101, 1, 0, 0, 0, 605, 606, 3, 104, 52, 0, 606, 608, 5, 37, 0,
    0, 607, 609, 3, 48, 24, 0, 608, 607, 1, 0, 0, 0, 608, 609, 1, 0, 0, 0, 609, 103, 1, 0, 0, 0, 610,
    613, 5, 6, 0, 0, 611, 614, 3, 56, 28, 0, 612, 614, 3, 106, 53, 0, 613, 611, 1, 0, 0, 0, 613, 612,
    1, 0, 0, 0, 614, 617, 1, 0, 0, 0, 615, 617, 5, 2, 0, 0, 616, 610, 1, 0, 0, 0, 616, 615, 1, 0, 0, 0,
    617, 105, 1, 0, 0, 0, 618, 619, 3, 18, 9, 0, 619, 620, 5, 34, 0, 0, 620, 625, 1, 0, 0, 0, 621, 622,
    3, 16, 8, 0, 622, 623, 5, 41, 0, 0, 623, 625, 1, 0, 0, 0, 624, 618, 1, 0, 0, 0, 624, 621, 1, 0, 0,
    0, 624, 625, 1, 0, 0, 0, 625, 626, 1, 0, 0, 0, 626, 627, 3, 152, 76, 0, 627, 107, 1, 0, 0, 0, 628,
    636, 5, 22, 0, 0, 629, 631, 3, 152, 76, 0, 630, 629, 1, 0, 0, 0, 630, 631, 1, 0, 0, 0, 631, 637,
    1, 0, 0, 0, 632, 637, 3, 110, 55, 0, 633, 635, 3, 112, 56, 0, 634, 633, 1, 0, 0, 0, 634, 635, 1,
    0, 0, 0, 635, 637, 1, 0, 0, 0, 636, 630, 1, 0, 0, 0, 636, 632, 1, 0, 0, 0, 636, 634, 1, 0, 0, 0, 637,
    638, 1, 0, 0, 0, 638, 639, 3, 46, 23, 0, 639, 109, 1, 0, 0, 0, 640, 642, 3, 52, 26, 0, 641, 640,
    1, 0, 0, 0, 641, 642, 1, 0, 0, 0, 642, 643, 1, 0, 0, 0, 643, 645, 3, 204, 102, 0, 644, 646, 3, 152,
    76, 0, 645, 644, 1, 0, 0, 0, 645, 646, 1, 0, 0, 0, 646, 647, 1, 0, 0, 0, 647, 649, 3, 204, 102,
    0, 648, 650, 3, 52, 26, 0, 649, 648, 1, 0, 0, 0, 649, 650, 1, 0, 0, 0, 650, 111, 1, 0, 0, 0, 651,
    652, 3, 18, 9, 0, 652, 653, 5, 34, 0, 0, 653, 658, 1, 0, 0, 0, 654, 655, 3, 16, 8, 0, 655, 656,
    5, 41, 0, 0, 656, 658, 1, 0, 0, 0, 657, 651, 1, 0, 0, 0, 657, 654, 1, 0, 0, 0, 657, 658, 1, 0, 0,
    0, 658, 659, 1, 0, 0, 0, 659, 660, 5, 19, 0, 0, 660, 661, 3, 152, 76, 0, 661, 113, 1, 0, 0, 0, 662,
    663, 5, 8, 0, 0, 663, 664, 3, 152, 76, 0, 664, 115, 1, 0, 0, 0, 665, 667, 3, 120, 60, 0, 666, 668,
    3, 118, 59, 0, 667, 666, 1, 0, 0, 0, 667, 668, 1, 0, 0, 0, 668, 675, 1, 0, 0, 0, 669, 675, 3, 122,
    61, 0, 670, 671, 5, 28, 0, 0, 671, 672, 3, 116, 58, 0, 672, 673, 5, 29, 0, 0, 673, 675, 1, 0, 0,
    0, 674, 665, 1, 0, 0, 0, 674, 669, 1, 0, 0, 0, 674, 670, 1, 0, 0, 0, 675, 117, 1, 0, 0, 0, 676, 677,
    5, 32, 0, 0, 677, 679, 3, 98, 49, 0, 678, 680, 5, 35, 0, 0, 679, 678, 1, 0, 0, 0, 679, 680, 1, 0,
    0, 0, 680, 681, 1, 0, 0, 0, 681, 682, 5, 33, 0, 0, 682, 119, 1, 0, 0, 0, 683, 686, 3, 168, 84, 0,
    684, 686, 5, 27, 0, 0, 685, 683, 1, 0, 0, 0, 685, 684, 1, 0, 0, 0, 686, 121, 1, 0, 0, 0, 687, 696,
    3, 124, 62, 0, 688, 696, 3, 184, 92, 0, 689, 696, 3, 130, 65, 0, 690, 696, 3, 142, 71, 0, 691,
    696, 3, 132, 66, 0, 692, 696, 3, 134, 67, 0, 693, 696, 3, 136, 68, 0, 694, 696, 3, 138, 69, 0,
    695, 687, 1, 0, 0, 0, 695, 688, 1, 0, 0, 0, 695, 689, 1, 0, 0, 0, 695, 690, 1, 0, 0, 0, 695, 691,
    1, 0, 0, 0, 695, 692, 1, 0, 0, 0, 695, 693, 1, 0, 0, 0, 695, 694, 1, 0, 0, 0, 696, 123, 1, 0, 0, 0,
    697, 698, 5, 32, 0, 0, 698, 699, 3, 126, 63, 0, 699, 700, 5, 33, 0, 0, 700, 701, 3, 128, 64, 0,
    701, 125, 1, 0, 0, 0, 702, 703, 3, 152, 76, 0, 703, 127, 1, 0, 0, 0, 704, 705, 3, 116, 58, 0, 705,
    129, 1, 0, 0, 0, 706, 707, 5, 62, 0, 0, 707, 708, 3, 116, 58, 0, 708, 131, 1, 0, 0, 0, 709, 710,
    5, 4, 0, 0, 710, 719, 5, 30, 0, 0, 711, 714, 3, 140, 70, 0, 712, 714, 3, 32, 16, 0, 713, 711, 1,
    0, 0, 0, 713, 712, 1, 0, 0, 0, 714, 715, 1, 0, 0, 0, 715, 716, 3, 204, 102, 0, 716, 718, 1, 0, 0,
    0, 717, 713, 1, 0, 0, 0, 718, 721, 1, 0, 0, 0, 719, 717, 1, 0, 0, 0, 719, 720, 1, 0, 0, 0, 720, 722,
    1, 0, 0, 0, 721, 719, 1, 0, 0, 0, 722, 723, 5, 31, 0, 0, 723, 133, 1, 0, 0, 0, 724, 725, 5, 32, 0,
    0, 725, 726, 5, 33, 0, 0, 726, 727, 3, 128, 64, 0, 727, 135, 1, 0, 0, 0, 728, 729, 5, 9, 0, 0, 729,
    730, 5, 32, 0, 0, 730, 731, 3, 116, 58, 0, 731, 732, 5, 33, 0, 0, 732, 733, 3, 128, 64, 0, 733,
    137, 1, 0, 0, 0, 734, 740, 5, 11, 0, 0, 735, 736, 5, 11, 0, 0, 736, 740, 5, 64, 0, 0, 737, 738,
    5, 64, 0, 0, 738, 740, 5, 11, 0, 0, 739, 734, 1, 0, 0, 0, 739, 735, 1, 0, 0, 0, 739, 737, 1, 0, 0,
    0, 740, 741, 1, 0, 0, 0, 741, 742, 3, 128, 64, 0, 742, 139, 1, 0, 0, 0, 743, 744, 5, 27, 0, 0, 744,
    745, 3, 148, 74, 0, 745, 746, 3, 146, 73, 0, 746, 750, 1, 0, 0, 0, 747, 748, 5, 27, 0, 0, 748,
    750, 3, 148, 74, 0, 749, 743, 1, 0, 0, 0, 749, 747, 1, 0, 0, 0, 750, 141, 1, 0, 0, 0, 751, 752,
    5, 3, 0, 0, 752, 753, 3, 144, 72, 0, 753, 143, 1, 0, 0, 0, 754, 756, 3, 148, 74, 0, 755, 757, 3,
    146, 73, 0, 756, 755, 1, 0, 0, 0, 756, 757, 1, 0, 0, 0, 757, 145, 1, 0, 0, 0, 758, 761, 3, 148,
    74, 0, 759, 761, 3, 116, 58, 0, 760, 758, 1, 0, 0, 0, 760, 759, 1, 0, 0, 0, 761, 147, 1, 0, 0, 0,
    762, 774, 5, 28, 0, 0, 763, 768, 3, 150, 75, 0, 764, 765, 5, 35, 0, 0, 765, 767, 3, 150, 75, 0,
    766, 764, 1, 0, 0, 0, 767, 770, 1, 0, 0, 0, 768, 766, 1, 0, 0, 0, 768, 769, 1, 0, 0, 0, 769, 772,
    1, 0, 0, 0, 770, 768, 1, 0, 0, 0, 771, 773, 5, 35, 0, 0, 772, 771, 1, 0, 0, 0, 772, 773, 1, 0, 0,
    0, 773, 775, 1, 0, 0, 0, 774, 763, 1, 0, 0, 0, 774, 775, 1, 0, 0, 0, 775, 776, 1, 0, 0, 0, 776, 777,
    5, 29, 0, 0, 777, 149, 1, 0, 0, 0, 778, 780, 3, 16, 8, 0, 779, 778, 1, 0, 0, 0, 779, 780, 1, 0, 0,
    0, 780, 782, 1, 0, 0, 0, 781, 783, 5, 42, 0, 0, 782, 781, 1, 0, 0, 0, 782, 783, 1, 0, 0, 0, 783,
    784, 1, 0, 0, 0, 784, 785, 3, 116, 58, 0, 785, 151, 1, 0, 0, 0, 786, 787, 6, 76, -1, 0, 787, 791,
    3, 154, 77, 0, 788, 789, 7, 3, 0, 0, 789, 791, 3, 152, 76, 6, 790, 786, 1, 0, 0, 0, 790, 788, 1,
    0, 0, 0, 791, 809, 1, 0, 0, 0, 792, 793, 10, 5, 0, 0, 793, 794, 7, 4, 0, 0, 794, 808, 3, 152, 76,
    6, 795, 796, 10, 4, 0, 0, 796, 797, 7, 5, 0, 0, 797, 808, 3, 152, 76, 5, 798, 799, 10, 3, 0, 0,
    799, 800, 7, 6, 0, 0, 800, 808, 3, 152, 76, 4, 801, 802, 10, 2, 0, 0, 802, 803, 5, 44, 0, 0, 803,
    808, 3, 152, 76, 3, 804, 805, 10, 1, 0, 0, 805, 806, 5, 43, 0, 0, 806, 808, 3, 152, 76, 2, 807,
    792, 1, 0, 0, 0, 807, 795, 1, 0, 0, 0, 807, 798, 1, 0, 0, 0, 807, 801, 1, 0, 0, 0, 807, 804, 1, 0,
    0, 0, 808, 811, 1, 0, 0, 0, 809, 807, 1, 0, 0, 0, 809, 810, 1, 0, 0, 0, 810, 153, 1, 0, 0, 0, 811,
    809, 1, 0, 0, 0, 812, 813, 6, 77, -1, 0, 813, 817, 3, 158, 79, 0, 814, 817, 3, 156, 78, 0, 815,
    817, 3, 202, 101, 0, 816, 812, 1, 0, 0, 0, 816, 814, 1, 0, 0, 0, 816, 815, 1, 0, 0, 0, 817, 829,
    1, 0, 0, 0, 818, 825, 10, 1, 0, 0, 819, 820, 5, 38, 0, 0, 820, 826, 5, 27, 0, 0, 821, 826, 3, 194,
    97, 0, 822, 826, 3, 196, 98, 0, 823, 826, 3, 198, 99, 0, 824, 826, 3, 200, 100, 0, 825, 819,
    1, 0, 0, 0, 825, 821, 1, 0, 0, 0, 825, 822, 1, 0, 0, 0, 825, 823, 1, 0, 0, 0, 825, 824, 1, 0, 0, 0,
    826, 828, 1, 0, 0, 0, 827, 818, 1, 0, 0, 0, 828, 831, 1, 0, 0, 0, 829, 827, 1, 0, 0, 0, 829, 830,
    1, 0, 0, 0, 830, 155, 1, 0, 0, 0, 831, 829, 1, 0, 0, 0, 832, 833, 3, 116, 58, 0, 833, 834, 5, 28,
    0, 0, 834, 836, 3, 152, 76, 0, 835, 837, 5, 35, 0, 0, 836, 835, 1, 0, 0, 0, 836, 837, 1, 0, 0, 0,
    837, 838, 1, 0, 0, 0, 838, 839, 5, 29, 0, 0, 839, 157, 1, 0, 0, 0, 840, 850, 3, 160, 80, 0, 841,
    843, 3, 166, 83, 0, 842, 844, 3, 118, 59, 0, 843, 842, 1, 0, 0, 0, 843, 844, 1, 0, 0, 0, 844, 850,
    1, 0, 0, 0, 845, 846, 5, 28, 0, 0, 846, 847, 3, 152, 76, 0, 847, 848, 5, 29, 0, 0, 848, 850, 1,
    0, 0, 0, 849, 840, 1, 0, 0, 0, 849, 841, 1, 0, 0, 0, 849, 845, 1, 0, 0, 0, 850, 159, 1, 0, 0, 0, 851,
    855, 3, 162, 81, 0, 852, 855, 3, 170, 85, 0, 853, 855, 3, 192, 96, 0, 854, 851, 1, 0, 0, 0, 854,
    852, 1, 0, 0, 0, 854, 853, 1, 0, 0, 0, 855, 161, 1, 0, 0, 0, 856, 861, 5, 26, 0, 0, 857, 861, 3,
    164, 82, 0, 858, 861, 3, 188, 94, 0, 859, 861, 5, 69, 0, 0, 860, 856, 1, 0, 0, 0, 860, 857, 1,
    0, 0, 0, 860, 858, 1, 0, 0, 0, 860, 859, 1, 0, 0, 0, 861, 163, 1, 0, 0, 0, 862, 863, 7, 7, 0, 0, 863,
    165, 1, 0, 0, 0, 864, 865, 5, 27, 0, 0, 865, 167, 1, 0, 0, 0, 866, 867, 5, 27, 0, 0, 867, 868, 5,
    38, 0, 0, 868, 869, 5, 27, 0, 0, 869, 169, 1, 0, 0, 0, 870, 871, 3, 172, 86, 0, 871, 872, 3, 174,
    87, 0, 872, 171, 1, 0, 0, 0, 873, 886, 3, 184, 92, 0, 874, 886, 3, 124, 62, 0, 875, 876, 5, 32,
    0, 0, 876, 877, 5, 42, 0, 0, 877, 878, 5, 33, 0, 0, 878, 886, 3, 128, 64, 0, 879, 886, 3, 134,
    67, 0, 880, 886, 3, 136, 68, 0, 881, 883, 3, 120, 60, 0, 882, 884, 3, 118, 59, 0, 883, 882, 1,
    0, 0, 0, 883, 884, 1, 0, 0, 0, 884, 886, 1, 0, 0, 0, 885, 873, 1, 0, 0, 0, 885, 874, 1, 0, 0, 0, 885,
    875, 1, 0, 0, 0, 885, 879, 1, 0, 0, 0, 885, 880, 1, 0, 0, 0, 885, 881, 1, 0, 0, 0, 886, 173, 1, 0,
    0, 0, 887, 892, 5, 30, 0, 0, 888, 890, 3, 176, 88, 0, 889, 891, 5, 35, 0, 0, 890, 889, 1, 0, 0,
    0, 890, 891, 1, 0, 0, 0, 891, 893, 1, 0, 0, 0, 892, 888, 1, 0, 0, 0, 892, 893, 1, 0, 0, 0, 893, 894,
    1, 0, 0, 0, 894, 895, 5, 31, 0, 0, 895, 175, 1, 0, 0, 0, 896, 901, 3, 178, 89, 0, 897, 898, 5, 35,
    0, 0, 898, 900, 3, 178, 89, 0, 899, 897, 1, 0, 0, 0, 900, 903, 1, 0, 0, 0, 901, 899, 1, 0, 0, 0,
    901, 902, 1, 0, 0, 0, 902, 177, 1, 0, 0, 0, 903, 901, 1, 0, 0, 0, 904, 905, 3, 180, 90, 0, 905,
    906, 5, 37, 0, 0, 906, 908, 1, 0, 0, 0, 907, 904, 1, 0, 0, 0, 907, 908, 1, 0, 0, 0, 908, 909, 1,
    0, 0, 0, 909, 910, 3, 182, 91, 0, 910, 179, 1, 0, 0, 0, 911, 914, 3, 152, 76, 0, 912, 914, 3, 174,
    87, 0, 913, 911, 1, 0, 0, 0, 913, 912, 1, 0, 0, 0, 914, 181, 1, 0, 0, 0, 915, 918, 3, 152, 76, 0,
    916, 918, 3, 174, 87, 0, 917, 915, 1, 0, 0, 0, 917, 916, 1, 0, 0, 0, 918, 183, 1, 0, 0, 0, 919,
    920, 5, 10, 0, 0, 920, 926, 5, 30, 0, 0, 921, 922, 3, 186, 93, 0, 922, 923, 3, 204, 102, 0, 923,
    925, 1, 0, 0, 0, 924, 921, 1, 0, 0, 0, 925, 928, 1, 0, 0, 0, 926, 924, 1, 0, 0, 0, 926, 927, 1, 0,
    0, 0, 927, 929, 1, 0, 0, 0, 928, 926, 1, 0, 0, 0, 929, 930, 5, 31, 0, 0, 930, 185, 1, 0, 0, 0, 931,
    932, 3, 16, 8, 0, 932, 933, 3, 116, 58, 0, 933, 936, 1, 0, 0, 0, 934, 936, 3, 190, 95, 0, 935,
    931, 1, 0, 0, 0, 935, 934, 1, 0, 0, 0, 936, 938, 1, 0, 0, 0, 937, 939, 3, 188, 94, 0, 938, 937,
    1, 0, 0, 0, 938, 939, 1, 0, 0, 0, 939, 187, 1, 0, 0, 0, 940, 941, 7, 8, 0, 0, 941, 189, 1, 0, 0, 0,
    942, 944, 5, 62, 0, 0, 943, 942, 1, 0, 0, 0, 943, 944, 1, 0, 0, 0, 944, 945, 1, 0, 0, 0, 945, 947,
    3, 120, 60, 0, 946, 948, 3, 118, 59, 0, 947, 946, 1, 0, 0, 0, 947, 948, 1, 0, 0, 0, 948, 191, 1,
    0, 0, 0, 949, 950, 5, 3, 0, 0, 950, 951, 3, 144, 72, 0, 951, 952, 3, 46, 23, 0, 952, 193, 1, 0,
    0, 0, 953, 954, 5, 32, 0, 0, 954, 955, 3, 152, 76, 0, 955, 956, 5, 33, 0, 0, 956, 195, 1, 0, 0,
    0, 957, 973, 5, 32, 0, 0, 958, 960, 3, 152, 76, 0, 959, 958, 1, 0, 0, 0, 959, 960, 1, 0, 0, 0, 960,
    961, 1, 0, 0, 0, 961, 963, 5, 37, 0, 0, 962, 964, 3, 152, 76, 0, 963, 962, 1, 0, 0, 0, 963, 964,
    1, 0, 0, 0, 964, 974, 1, 0, 0, 0, 965, 967, 3, 152, 76, 0, 966, 965, 1, 0, 0, 0, 966, 967, 1, 0,
    0, 0, 967, 968, 1, 0, 0, 0, 968, 969, 5, 37, 0, 0, 969, 970, 3, 152, 76, 0, 970, 971, 5, 37, 0,
    0, 971, 972, 3, 152, 76, 0, 972, 974, 1, 0, 0, 0, 973, 959, 1, 0, 0, 0, 973, 966, 1, 0, 0, 0, 974,
    975, 1, 0, 0, 0, 975, 976, 5, 33, 0, 0, 976, 197, 1, 0, 0, 0, 977, 978, 5, 38, 0, 0, 978, 979, 5,
    28, 0, 0, 979, 980, 3, 116, 58, 0, 980, 981, 5, 29, 0, 0, 981, 199, 1, 0, 0, 0, 982, 997, 5, 28,
    0, 0, 983, 990, 3, 18, 9, 0, 984, 987, 3, 116, 58, 0, 985, 986, 5, 35, 0, 0, 986, 988, 3, 18, 9,
    0, 987, 985, 1, 0, 0, 0, 987, 988, 1, 0, 0, 0, 988, 990, 1, 0, 0, 0, 989, 983, 1, 0, 0, 0, 989, 984,
    1, 0, 0, 0, 990, 992, 1, 0, 0, 0, 991, 993, 5, 42, 0, 0, 992, 991, 1, 0, 0, 0, 992, 993, 1, 0, 0,
    0, 993, 995, 1, 0, 0, 0, 994, 996, 5, 35, 0, 0, 995, 994, 1, 0, 0, 0, 995, 996, 1, 0, 0, 0, 996,
    998, 1, 0, 0, 0, 997, 989, 1, 0, 0, 0, 997, 998, 1, 0, 0, 0, 998, 999, 1, 0, 0, 0, 999, 1000, 5,
    29, 0, 0, 1000, 201, 1, 0, 0, 0, 1001, 1002, 3, 116, 58, 0, 1002, 1003, 5, 38, 0, 0, 1003, 1004,
    5, 27, 0, 0, 1004, 203, 1, 0, 0, 0, 1005, 1010, 5, 36, 0, 0, 1006, 1010, 5, 0, 0, 1, 1007, 1010,
    5, 88, 0, 0, 1008, 1010, 4, 102, 7, 0, 1009, 1005, 1, 0, 0, 0, 1009, 1006, 1, 0, 0, 0, 1009, 1007,
    1, 0, 0, 0, 1009, 1008, 1, 0, 0, 0, 1010, 205, 1, 0, 0, 0, 119, 213, 219, 225, 241, 245, 248,
    257, 267, 271, 275, 285, 293, 304, 308, 312, 320, 330, 343, 347, 354, 358, 365, 377, 381,
    387, 391, 395, 400, 403, 406, 413, 430, 437, 453, 464, 468, 472, 476, 495, 501, 503, 507,
    511, 514, 518, 520, 526, 534, 539, 550, 556, 563, 574, 579, 583, 588, 592, 600, 608, 613,
    616, 624, 630, 634, 636, 641, 645, 649, 657, 667, 674, 679, 685, 695, 713, 719, 739, 749,
    756, 760, 768, 772, 774, 779, 782, 790, 807, 809, 816, 825, 829, 836, 843, 849, 854, 860,
    883, 885, 890, 892, 901, 907, 913, 917, 926, 935, 938, 943, 947, 959, 963, 966, 973, 987,
    989, 992, 995, 997, 1009];
GoParser.DecisionsToDFA = GoParser._ATN.decisionToState.map((ds, index) => new antlr4_1.DFA(ds, index));
exports.default = GoParser;
class SourceFileContext extends antlr4_1.ParserRuleContext {
    constructor(parser, parent, invokingState) {
        super(parent, invokingState);
        this.parser = parser;
    }
    packageClause() {
        return this.getTypedRuleContext(PackageClauseContext, 0);
    }
    eos_list() {
        return this.getTypedRuleContexts(EosContext);
    }
    eos(i) {
        return this.getTypedRuleContext(EosContext, i);
    }
    EOF() {
        return this.getToken(GoParser.EOF, 0);
    }
    importDecl_list() {
        return this.getTypedRuleContexts(ImportDeclContext);
    }
    importDecl(i) {
        return this.getTypedRuleContext(ImportDeclContext, i);
    }
    functionDecl_list() {
        return this.getTypedRuleContexts(FunctionDeclContext);
    }
    functionDecl(i) {
        return this.getTypedRuleContext(FunctionDeclContext, i);
    }
    methodDecl_list() {
        return this.getTypedRuleContexts(MethodDeclContext);
    }
    methodDecl(i) {
        return this.getTypedRuleContext(MethodDeclContext, i);
    }
    declaration_list() {
        return this.getTypedRuleContexts(DeclarationContext);
    }
    declaration(i) {
        return this.getTypedRuleContext(DeclarationContext, i);
    }
    get ruleIndex() {
        return GoParser.RULE_sourceFile;
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
class PackageClauseContext extends antlr4_1.ParserRuleContext {
    constructor(parser, parent, invokingState) {
        super(parent, invokingState);
        this.parser = parser;
    }
    PACKAGE() {
        return this.getToken(GoParser.PACKAGE, 0);
    }
    IDENTIFIER() {
        return this.getToken(GoParser.IDENTIFIER, 0);
    }
    get ruleIndex() {
        return GoParser.RULE_packageClause;
    }
    // @Override
    accept(visitor) {
        if (visitor.visitPackageClause) {
            return visitor.visitPackageClause(this);
        }
        else {
            return visitor.visitChildren(this);
        }
    }
}
exports.PackageClauseContext = PackageClauseContext;
class ImportDeclContext extends antlr4_1.ParserRuleContext {
    constructor(parser, parent, invokingState) {
        super(parent, invokingState);
        this.parser = parser;
    }
    IMPORT() {
        return this.getToken(GoParser.IMPORT, 0);
    }
    importSpec_list() {
        return this.getTypedRuleContexts(ImportSpecContext);
    }
    importSpec(i) {
        return this.getTypedRuleContext(ImportSpecContext, i);
    }
    L_PAREN() {
        return this.getToken(GoParser.L_PAREN, 0);
    }
    R_PAREN() {
        return this.getToken(GoParser.R_PAREN, 0);
    }
    eos_list() {
        return this.getTypedRuleContexts(EosContext);
    }
    eos(i) {
        return this.getTypedRuleContext(EosContext, i);
    }
    get ruleIndex() {
        return GoParser.RULE_importDecl;
    }
    // @Override
    accept(visitor) {
        if (visitor.visitImportDecl) {
            return visitor.visitImportDecl(this);
        }
        else {
            return visitor.visitChildren(this);
        }
    }
}
exports.ImportDeclContext = ImportDeclContext;
class ImportSpecContext extends antlr4_1.ParserRuleContext {
    constructor(parser, parent, invokingState) {
        super(parent, invokingState);
        this.parser = parser;
    }
    importPath() {
        return this.getTypedRuleContext(ImportPathContext, 0);
    }
    DOT() {
        return this.getToken(GoParser.DOT, 0);
    }
    IDENTIFIER() {
        return this.getToken(GoParser.IDENTIFIER, 0);
    }
    get ruleIndex() {
        return GoParser.RULE_importSpec;
    }
    // @Override
    accept(visitor) {
        if (visitor.visitImportSpec) {
            return visitor.visitImportSpec(this);
        }
        else {
            return visitor.visitChildren(this);
        }
    }
}
exports.ImportSpecContext = ImportSpecContext;
class ImportPathContext extends antlr4_1.ParserRuleContext {
    constructor(parser, parent, invokingState) {
        super(parent, invokingState);
        this.parser = parser;
    }
    string_() {
        return this.getTypedRuleContext(String_Context, 0);
    }
    get ruleIndex() {
        return GoParser.RULE_importPath;
    }
    // @Override
    accept(visitor) {
        if (visitor.visitImportPath) {
            return visitor.visitImportPath(this);
        }
        else {
            return visitor.visitChildren(this);
        }
    }
}
exports.ImportPathContext = ImportPathContext;
class DeclarationContext extends antlr4_1.ParserRuleContext {
    constructor(parser, parent, invokingState) {
        super(parent, invokingState);
        this.parser = parser;
    }
    constDecl() {
        return this.getTypedRuleContext(ConstDeclContext, 0);
    }
    typeDecl() {
        return this.getTypedRuleContext(TypeDeclContext, 0);
    }
    varDecl() {
        return this.getTypedRuleContext(VarDeclContext, 0);
    }
    get ruleIndex() {
        return GoParser.RULE_declaration;
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
        return this.getToken(GoParser.CONST, 0);
    }
    constSpec_list() {
        return this.getTypedRuleContexts(ConstSpecContext);
    }
    constSpec(i) {
        return this.getTypedRuleContext(ConstSpecContext, i);
    }
    L_PAREN() {
        return this.getToken(GoParser.L_PAREN, 0);
    }
    R_PAREN() {
        return this.getToken(GoParser.R_PAREN, 0);
    }
    eos_list() {
        return this.getTypedRuleContexts(EosContext);
    }
    eos(i) {
        return this.getTypedRuleContext(EosContext, i);
    }
    get ruleIndex() {
        return GoParser.RULE_constDecl;
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
class ConstSpecContext extends antlr4_1.ParserRuleContext {
    constructor(parser, parent, invokingState) {
        super(parent, invokingState);
        this.parser = parser;
    }
    identifierList() {
        return this.getTypedRuleContext(IdentifierListContext, 0);
    }
    ASSIGN() {
        return this.getToken(GoParser.ASSIGN, 0);
    }
    expressionList() {
        return this.getTypedRuleContext(ExpressionListContext, 0);
    }
    type_() {
        return this.getTypedRuleContext(Type_Context, 0);
    }
    get ruleIndex() {
        return GoParser.RULE_constSpec;
    }
    // @Override
    accept(visitor) {
        if (visitor.visitConstSpec) {
            return visitor.visitConstSpec(this);
        }
        else {
            return visitor.visitChildren(this);
        }
    }
}
exports.ConstSpecContext = ConstSpecContext;
class IdentifierListContext extends antlr4_1.ParserRuleContext {
    constructor(parser, parent, invokingState) {
        super(parent, invokingState);
        this.parser = parser;
    }
    IDENTIFIER_list() {
        return this.getTokens(GoParser.IDENTIFIER);
    }
    IDENTIFIER(i) {
        return this.getToken(GoParser.IDENTIFIER, i);
    }
    COMMA_list() {
        return this.getTokens(GoParser.COMMA);
    }
    COMMA(i) {
        return this.getToken(GoParser.COMMA, i);
    }
    get ruleIndex() {
        return GoParser.RULE_identifierList;
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
        return this.getTokens(GoParser.COMMA);
    }
    COMMA(i) {
        return this.getToken(GoParser.COMMA, i);
    }
    get ruleIndex() {
        return GoParser.RULE_expressionList;
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
class TypeDeclContext extends antlr4_1.ParserRuleContext {
    constructor(parser, parent, invokingState) {
        super(parent, invokingState);
        this.parser = parser;
    }
    TYPE() {
        return this.getToken(GoParser.TYPE, 0);
    }
    typeSpec_list() {
        return this.getTypedRuleContexts(TypeSpecContext);
    }
    typeSpec(i) {
        return this.getTypedRuleContext(TypeSpecContext, i);
    }
    L_PAREN() {
        return this.getToken(GoParser.L_PAREN, 0);
    }
    R_PAREN() {
        return this.getToken(GoParser.R_PAREN, 0);
    }
    eos_list() {
        return this.getTypedRuleContexts(EosContext);
    }
    eos(i) {
        return this.getTypedRuleContext(EosContext, i);
    }
    get ruleIndex() {
        return GoParser.RULE_typeDecl;
    }
    // @Override
    accept(visitor) {
        if (visitor.visitTypeDecl) {
            return visitor.visitTypeDecl(this);
        }
        else {
            return visitor.visitChildren(this);
        }
    }
}
exports.TypeDeclContext = TypeDeclContext;
class TypeSpecContext extends antlr4_1.ParserRuleContext {
    constructor(parser, parent, invokingState) {
        super(parent, invokingState);
        this.parser = parser;
    }
    aliasDecl() {
        return this.getTypedRuleContext(AliasDeclContext, 0);
    }
    typeDef() {
        return this.getTypedRuleContext(TypeDefContext, 0);
    }
    get ruleIndex() {
        return GoParser.RULE_typeSpec;
    }
    // @Override
    accept(visitor) {
        if (visitor.visitTypeSpec) {
            return visitor.visitTypeSpec(this);
        }
        else {
            return visitor.visitChildren(this);
        }
    }
}
exports.TypeSpecContext = TypeSpecContext;
class AliasDeclContext extends antlr4_1.ParserRuleContext {
    constructor(parser, parent, invokingState) {
        super(parent, invokingState);
        this.parser = parser;
    }
    IDENTIFIER() {
        return this.getToken(GoParser.IDENTIFIER, 0);
    }
    ASSIGN() {
        return this.getToken(GoParser.ASSIGN, 0);
    }
    type_() {
        return this.getTypedRuleContext(Type_Context, 0);
    }
    get ruleIndex() {
        return GoParser.RULE_aliasDecl;
    }
    // @Override
    accept(visitor) {
        if (visitor.visitAliasDecl) {
            return visitor.visitAliasDecl(this);
        }
        else {
            return visitor.visitChildren(this);
        }
    }
}
exports.AliasDeclContext = AliasDeclContext;
class TypeDefContext extends antlr4_1.ParserRuleContext {
    constructor(parser, parent, invokingState) {
        super(parent, invokingState);
        this.parser = parser;
    }
    IDENTIFIER() {
        return this.getToken(GoParser.IDENTIFIER, 0);
    }
    type_() {
        return this.getTypedRuleContext(Type_Context, 0);
    }
    typeParameters() {
        return this.getTypedRuleContext(TypeParametersContext, 0);
    }
    get ruleIndex() {
        return GoParser.RULE_typeDef;
    }
    // @Override
    accept(visitor) {
        if (visitor.visitTypeDef) {
            return visitor.visitTypeDef(this);
        }
        else {
            return visitor.visitChildren(this);
        }
    }
}
exports.TypeDefContext = TypeDefContext;
class TypeParametersContext extends antlr4_1.ParserRuleContext {
    constructor(parser, parent, invokingState) {
        super(parent, invokingState);
        this.parser = parser;
    }
    L_BRACKET() {
        return this.getToken(GoParser.L_BRACKET, 0);
    }
    typeParameterDecl_list() {
        return this.getTypedRuleContexts(TypeParameterDeclContext);
    }
    typeParameterDecl(i) {
        return this.getTypedRuleContext(TypeParameterDeclContext, i);
    }
    R_BRACKET() {
        return this.getToken(GoParser.R_BRACKET, 0);
    }
    COMMA_list() {
        return this.getTokens(GoParser.COMMA);
    }
    COMMA(i) {
        return this.getToken(GoParser.COMMA, i);
    }
    get ruleIndex() {
        return GoParser.RULE_typeParameters;
    }
    // @Override
    accept(visitor) {
        if (visitor.visitTypeParameters) {
            return visitor.visitTypeParameters(this);
        }
        else {
            return visitor.visitChildren(this);
        }
    }
}
exports.TypeParametersContext = TypeParametersContext;
class TypeParameterDeclContext extends antlr4_1.ParserRuleContext {
    constructor(parser, parent, invokingState) {
        super(parent, invokingState);
        this.parser = parser;
    }
    identifierList() {
        return this.getTypedRuleContext(IdentifierListContext, 0);
    }
    typeElement() {
        return this.getTypedRuleContext(TypeElementContext, 0);
    }
    get ruleIndex() {
        return GoParser.RULE_typeParameterDecl;
    }
    // @Override
    accept(visitor) {
        if (visitor.visitTypeParameterDecl) {
            return visitor.visitTypeParameterDecl(this);
        }
        else {
            return visitor.visitChildren(this);
        }
    }
}
exports.TypeParameterDeclContext = TypeParameterDeclContext;
class TypeElementContext extends antlr4_1.ParserRuleContext {
    constructor(parser, parent, invokingState) {
        super(parent, invokingState);
        this.parser = parser;
    }
    typeTerm_list() {
        return this.getTypedRuleContexts(TypeTermContext);
    }
    typeTerm(i) {
        return this.getTypedRuleContext(TypeTermContext, i);
    }
    OR_list() {
        return this.getTokens(GoParser.OR);
    }
    OR(i) {
        return this.getToken(GoParser.OR, i);
    }
    get ruleIndex() {
        return GoParser.RULE_typeElement;
    }
    // @Override
    accept(visitor) {
        if (visitor.visitTypeElement) {
            return visitor.visitTypeElement(this);
        }
        else {
            return visitor.visitChildren(this);
        }
    }
}
exports.TypeElementContext = TypeElementContext;
class TypeTermContext extends antlr4_1.ParserRuleContext {
    constructor(parser, parent, invokingState) {
        super(parent, invokingState);
        this.parser = parser;
    }
    type_() {
        return this.getTypedRuleContext(Type_Context, 0);
    }
    UNDERLYING() {
        return this.getToken(GoParser.UNDERLYING, 0);
    }
    get ruleIndex() {
        return GoParser.RULE_typeTerm;
    }
    // @Override
    accept(visitor) {
        if (visitor.visitTypeTerm) {
            return visitor.visitTypeTerm(this);
        }
        else {
            return visitor.visitChildren(this);
        }
    }
}
exports.TypeTermContext = TypeTermContext;
class FunctionDeclContext extends antlr4_1.ParserRuleContext {
    constructor(parser, parent, invokingState) {
        super(parent, invokingState);
        this.parser = parser;
    }
    FUNC() {
        return this.getToken(GoParser.FUNC, 0);
    }
    IDENTIFIER() {
        return this.getToken(GoParser.IDENTIFIER, 0);
    }
    signature() {
        return this.getTypedRuleContext(SignatureContext, 0);
    }
    typeParameters() {
        return this.getTypedRuleContext(TypeParametersContext, 0);
    }
    block() {
        return this.getTypedRuleContext(BlockContext, 0);
    }
    get ruleIndex() {
        return GoParser.RULE_functionDecl;
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
class MethodDeclContext extends antlr4_1.ParserRuleContext {
    constructor(parser, parent, invokingState) {
        super(parent, invokingState);
        this.parser = parser;
    }
    FUNC() {
        return this.getToken(GoParser.FUNC, 0);
    }
    receiver() {
        return this.getTypedRuleContext(ReceiverContext, 0);
    }
    IDENTIFIER() {
        return this.getToken(GoParser.IDENTIFIER, 0);
    }
    signature() {
        return this.getTypedRuleContext(SignatureContext, 0);
    }
    block() {
        return this.getTypedRuleContext(BlockContext, 0);
    }
    get ruleIndex() {
        return GoParser.RULE_methodDecl;
    }
    // @Override
    accept(visitor) {
        if (visitor.visitMethodDecl) {
            return visitor.visitMethodDecl(this);
        }
        else {
            return visitor.visitChildren(this);
        }
    }
}
exports.MethodDeclContext = MethodDeclContext;
class ReceiverContext extends antlr4_1.ParserRuleContext {
    constructor(parser, parent, invokingState) {
        super(parent, invokingState);
        this.parser = parser;
    }
    parameters() {
        return this.getTypedRuleContext(ParametersContext, 0);
    }
    get ruleIndex() {
        return GoParser.RULE_receiver;
    }
    // @Override
    accept(visitor) {
        if (visitor.visitReceiver) {
            return visitor.visitReceiver(this);
        }
        else {
            return visitor.visitChildren(this);
        }
    }
}
exports.ReceiverContext = ReceiverContext;
class VarDeclContext extends antlr4_1.ParserRuleContext {
    constructor(parser, parent, invokingState) {
        super(parent, invokingState);
        this.parser = parser;
    }
    VAR() {
        return this.getToken(GoParser.VAR, 0);
    }
    varSpec_list() {
        return this.getTypedRuleContexts(VarSpecContext);
    }
    varSpec(i) {
        return this.getTypedRuleContext(VarSpecContext, i);
    }
    L_PAREN() {
        return this.getToken(GoParser.L_PAREN, 0);
    }
    R_PAREN() {
        return this.getToken(GoParser.R_PAREN, 0);
    }
    eos_list() {
        return this.getTypedRuleContexts(EosContext);
    }
    eos(i) {
        return this.getTypedRuleContext(EosContext, i);
    }
    get ruleIndex() {
        return GoParser.RULE_varDecl;
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
class VarSpecContext extends antlr4_1.ParserRuleContext {
    constructor(parser, parent, invokingState) {
        super(parent, invokingState);
        this.parser = parser;
    }
    identifierList() {
        return this.getTypedRuleContext(IdentifierListContext, 0);
    }
    type_() {
        return this.getTypedRuleContext(Type_Context, 0);
    }
    ASSIGN() {
        return this.getToken(GoParser.ASSIGN, 0);
    }
    expressionList() {
        return this.getTypedRuleContext(ExpressionListContext, 0);
    }
    get ruleIndex() {
        return GoParser.RULE_varSpec;
    }
    // @Override
    accept(visitor) {
        if (visitor.visitVarSpec) {
            return visitor.visitVarSpec(this);
        }
        else {
            return visitor.visitChildren(this);
        }
    }
}
exports.VarSpecContext = VarSpecContext;
class BlockContext extends antlr4_1.ParserRuleContext {
    constructor(parser, parent, invokingState) {
        super(parent, invokingState);
        this.parser = parser;
    }
    L_CURLY() {
        return this.getToken(GoParser.L_CURLY, 0);
    }
    R_CURLY() {
        return this.getToken(GoParser.R_CURLY, 0);
    }
    statementList() {
        return this.getTypedRuleContext(StatementListContext, 0);
    }
    get ruleIndex() {
        return GoParser.RULE_block;
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
        return this.getTokens(GoParser.SEMI);
    }
    SEMI(i) {
        return this.getToken(GoParser.SEMI, i);
    }
    EOS_list() {
        return this.getTokens(GoParser.EOS);
    }
    EOS(i) {
        return this.getToken(GoParser.EOS, i);
    }
    get ruleIndex() {
        return GoParser.RULE_statementList;
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
    labeledStmt() {
        return this.getTypedRuleContext(LabeledStmtContext, 0);
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
    breakStmt() {
        return this.getTypedRuleContext(BreakStmtContext, 0);
    }
    continueStmt() {
        return this.getTypedRuleContext(ContinueStmtContext, 0);
    }
    gotoStmt() {
        return this.getTypedRuleContext(GotoStmtContext, 0);
    }
    fallthroughStmt() {
        return this.getTypedRuleContext(FallthroughStmtContext, 0);
    }
    block() {
        return this.getTypedRuleContext(BlockContext, 0);
    }
    ifStmt() {
        return this.getTypedRuleContext(IfStmtContext, 0);
    }
    switchStmt() {
        return this.getTypedRuleContext(SwitchStmtContext, 0);
    }
    selectStmt() {
        return this.getTypedRuleContext(SelectStmtContext, 0);
    }
    forStmt() {
        return this.getTypedRuleContext(ForStmtContext, 0);
    }
    deferStmt() {
        return this.getTypedRuleContext(DeferStmtContext, 0);
    }
    get ruleIndex() {
        return GoParser.RULE_statement;
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
    incDecStmt() {
        return this.getTypedRuleContext(IncDecStmtContext, 0);
    }
    assignment() {
        return this.getTypedRuleContext(AssignmentContext, 0);
    }
    expressionStmt() {
        return this.getTypedRuleContext(ExpressionStmtContext, 0);
    }
    shortVarDecl() {
        return this.getTypedRuleContext(ShortVarDeclContext, 0);
    }
    get ruleIndex() {
        return GoParser.RULE_simpleStmt;
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
        return GoParser.RULE_expressionStmt;
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
        return this.getToken(GoParser.RECEIVE, 0);
    }
    expression_list() {
        return this.getTypedRuleContexts(ExpressionContext);
    }
    expression(i) {
        return this.getTypedRuleContext(ExpressionContext, i);
    }
    get ruleIndex() {
        return GoParser.RULE_sendStmt;
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
class IncDecStmtContext extends antlr4_1.ParserRuleContext {
    constructor(parser, parent, invokingState) {
        super(parent, invokingState);
        this.parser = parser;
    }
    expression() {
        return this.getTypedRuleContext(ExpressionContext, 0);
    }
    PLUS_PLUS() {
        return this.getToken(GoParser.PLUS_PLUS, 0);
    }
    MINUS_MINUS() {
        return this.getToken(GoParser.MINUS_MINUS, 0);
    }
    get ruleIndex() {
        return GoParser.RULE_incDecStmt;
    }
    // @Override
    accept(visitor) {
        if (visitor.visitIncDecStmt) {
            return visitor.visitIncDecStmt(this);
        }
        else {
            return visitor.visitChildren(this);
        }
    }
}
exports.IncDecStmtContext = IncDecStmtContext;
class AssignmentContext extends antlr4_1.ParserRuleContext {
    constructor(parser, parent, invokingState) {
        super(parent, invokingState);
        this.parser = parser;
    }
    expressionList_list() {
        return this.getTypedRuleContexts(ExpressionListContext);
    }
    expressionList(i) {
        return this.getTypedRuleContext(ExpressionListContext, i);
    }
    assign_op() {
        return this.getTypedRuleContext(Assign_opContext, 0);
    }
    get ruleIndex() {
        return GoParser.RULE_assignment;
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
class Assign_opContext extends antlr4_1.ParserRuleContext {
    constructor(parser, parent, invokingState) {
        super(parent, invokingState);
        this.parser = parser;
    }
    ASSIGN() {
        return this.getToken(GoParser.ASSIGN, 0);
    }
    PLUS() {
        return this.getToken(GoParser.PLUS, 0);
    }
    MINUS() {
        return this.getToken(GoParser.MINUS, 0);
    }
    OR() {
        return this.getToken(GoParser.OR, 0);
    }
    CARET() {
        return this.getToken(GoParser.CARET, 0);
    }
    STAR() {
        return this.getToken(GoParser.STAR, 0);
    }
    DIV() {
        return this.getToken(GoParser.DIV, 0);
    }
    MOD() {
        return this.getToken(GoParser.MOD, 0);
    }
    LSHIFT() {
        return this.getToken(GoParser.LSHIFT, 0);
    }
    RSHIFT() {
        return this.getToken(GoParser.RSHIFT, 0);
    }
    AMPERSAND() {
        return this.getToken(GoParser.AMPERSAND, 0);
    }
    BIT_CLEAR() {
        return this.getToken(GoParser.BIT_CLEAR, 0);
    }
    get ruleIndex() {
        return GoParser.RULE_assign_op;
    }
    // @Override
    accept(visitor) {
        if (visitor.visitAssign_op) {
            return visitor.visitAssign_op(this);
        }
        else {
            return visitor.visitChildren(this);
        }
    }
}
exports.Assign_opContext = Assign_opContext;
class ShortVarDeclContext extends antlr4_1.ParserRuleContext {
    constructor(parser, parent, invokingState) {
        super(parent, invokingState);
        this.parser = parser;
    }
    identifierList() {
        return this.getTypedRuleContext(IdentifierListContext, 0);
    }
    DECLARE_ASSIGN() {
        return this.getToken(GoParser.DECLARE_ASSIGN, 0);
    }
    expressionList() {
        return this.getTypedRuleContext(ExpressionListContext, 0);
    }
    get ruleIndex() {
        return GoParser.RULE_shortVarDecl;
    }
    // @Override
    accept(visitor) {
        if (visitor.visitShortVarDecl) {
            return visitor.visitShortVarDecl(this);
        }
        else {
            return visitor.visitChildren(this);
        }
    }
}
exports.ShortVarDeclContext = ShortVarDeclContext;
class LabeledStmtContext extends antlr4_1.ParserRuleContext {
    constructor(parser, parent, invokingState) {
        super(parent, invokingState);
        this.parser = parser;
    }
    IDENTIFIER() {
        return this.getToken(GoParser.IDENTIFIER, 0);
    }
    COLON() {
        return this.getToken(GoParser.COLON, 0);
    }
    statement() {
        return this.getTypedRuleContext(StatementContext, 0);
    }
    get ruleIndex() {
        return GoParser.RULE_labeledStmt;
    }
    // @Override
    accept(visitor) {
        if (visitor.visitLabeledStmt) {
            return visitor.visitLabeledStmt(this);
        }
        else {
            return visitor.visitChildren(this);
        }
    }
}
exports.LabeledStmtContext = LabeledStmtContext;
class ReturnStmtContext extends antlr4_1.ParserRuleContext {
    constructor(parser, parent, invokingState) {
        super(parent, invokingState);
        this.parser = parser;
    }
    RETURN() {
        return this.getToken(GoParser.RETURN, 0);
    }
    expressionList() {
        return this.getTypedRuleContext(ExpressionListContext, 0);
    }
    get ruleIndex() {
        return GoParser.RULE_returnStmt;
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
class BreakStmtContext extends antlr4_1.ParserRuleContext {
    constructor(parser, parent, invokingState) {
        super(parent, invokingState);
        this.parser = parser;
    }
    BREAK() {
        return this.getToken(GoParser.BREAK, 0);
    }
    IDENTIFIER() {
        return this.getToken(GoParser.IDENTIFIER, 0);
    }
    get ruleIndex() {
        return GoParser.RULE_breakStmt;
    }
    // @Override
    accept(visitor) {
        if (visitor.visitBreakStmt) {
            return visitor.visitBreakStmt(this);
        }
        else {
            return visitor.visitChildren(this);
        }
    }
}
exports.BreakStmtContext = BreakStmtContext;
class ContinueStmtContext extends antlr4_1.ParserRuleContext {
    constructor(parser, parent, invokingState) {
        super(parent, invokingState);
        this.parser = parser;
    }
    CONTINUE() {
        return this.getToken(GoParser.CONTINUE, 0);
    }
    IDENTIFIER() {
        return this.getToken(GoParser.IDENTIFIER, 0);
    }
    get ruleIndex() {
        return GoParser.RULE_continueStmt;
    }
    // @Override
    accept(visitor) {
        if (visitor.visitContinueStmt) {
            return visitor.visitContinueStmt(this);
        }
        else {
            return visitor.visitChildren(this);
        }
    }
}
exports.ContinueStmtContext = ContinueStmtContext;
class GotoStmtContext extends antlr4_1.ParserRuleContext {
    constructor(parser, parent, invokingState) {
        super(parent, invokingState);
        this.parser = parser;
    }
    GOTO() {
        return this.getToken(GoParser.GOTO, 0);
    }
    IDENTIFIER() {
        return this.getToken(GoParser.IDENTIFIER, 0);
    }
    get ruleIndex() {
        return GoParser.RULE_gotoStmt;
    }
    // @Override
    accept(visitor) {
        if (visitor.visitGotoStmt) {
            return visitor.visitGotoStmt(this);
        }
        else {
            return visitor.visitChildren(this);
        }
    }
}
exports.GotoStmtContext = GotoStmtContext;
class FallthroughStmtContext extends antlr4_1.ParserRuleContext {
    constructor(parser, parent, invokingState) {
        super(parent, invokingState);
        this.parser = parser;
    }
    FALLTHROUGH() {
        return this.getToken(GoParser.FALLTHROUGH, 0);
    }
    get ruleIndex() {
        return GoParser.RULE_fallthroughStmt;
    }
    // @Override
    accept(visitor) {
        if (visitor.visitFallthroughStmt) {
            return visitor.visitFallthroughStmt(this);
        }
        else {
            return visitor.visitChildren(this);
        }
    }
}
exports.FallthroughStmtContext = FallthroughStmtContext;
class DeferStmtContext extends antlr4_1.ParserRuleContext {
    constructor(parser, parent, invokingState) {
        super(parent, invokingState);
        this.parser = parser;
    }
    DEFER() {
        return this.getToken(GoParser.DEFER, 0);
    }
    expression() {
        return this.getTypedRuleContext(ExpressionContext, 0);
    }
    get ruleIndex() {
        return GoParser.RULE_deferStmt;
    }
    // @Override
    accept(visitor) {
        if (visitor.visitDeferStmt) {
            return visitor.visitDeferStmt(this);
        }
        else {
            return visitor.visitChildren(this);
        }
    }
}
exports.DeferStmtContext = DeferStmtContext;
class IfStmtContext extends antlr4_1.ParserRuleContext {
    constructor(parser, parent, invokingState) {
        super(parent, invokingState);
        this.parser = parser;
    }
    IF() {
        return this.getToken(GoParser.IF, 0);
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
    simpleStmt() {
        return this.getTypedRuleContext(SimpleStmtContext, 0);
    }
    ELSE() {
        return this.getToken(GoParser.ELSE, 0);
    }
    ifStmt() {
        return this.getTypedRuleContext(IfStmtContext, 0);
    }
    get ruleIndex() {
        return GoParser.RULE_ifStmt;
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
class SwitchStmtContext extends antlr4_1.ParserRuleContext {
    constructor(parser, parent, invokingState) {
        super(parent, invokingState);
        this.parser = parser;
    }
    exprSwitchStmt() {
        return this.getTypedRuleContext(ExprSwitchStmtContext, 0);
    }
    typeSwitchStmt() {
        return this.getTypedRuleContext(TypeSwitchStmtContext, 0);
    }
    get ruleIndex() {
        return GoParser.RULE_switchStmt;
    }
    // @Override
    accept(visitor) {
        if (visitor.visitSwitchStmt) {
            return visitor.visitSwitchStmt(this);
        }
        else {
            return visitor.visitChildren(this);
        }
    }
}
exports.SwitchStmtContext = SwitchStmtContext;
class ExprSwitchStmtContext extends antlr4_1.ParserRuleContext {
    constructor(parser, parent, invokingState) {
        super(parent, invokingState);
        this.parser = parser;
    }
    SWITCH() {
        return this.getToken(GoParser.SWITCH, 0);
    }
    L_CURLY() {
        return this.getToken(GoParser.L_CURLY, 0);
    }
    R_CURLY() {
        return this.getToken(GoParser.R_CURLY, 0);
    }
    eos() {
        return this.getTypedRuleContext(EosContext, 0);
    }
    exprCaseClause_list() {
        return this.getTypedRuleContexts(ExprCaseClauseContext);
    }
    exprCaseClause(i) {
        return this.getTypedRuleContext(ExprCaseClauseContext, i);
    }
    expression() {
        return this.getTypedRuleContext(ExpressionContext, 0);
    }
    simpleStmt() {
        return this.getTypedRuleContext(SimpleStmtContext, 0);
    }
    get ruleIndex() {
        return GoParser.RULE_exprSwitchStmt;
    }
    // @Override
    accept(visitor) {
        if (visitor.visitExprSwitchStmt) {
            return visitor.visitExprSwitchStmt(this);
        }
        else {
            return visitor.visitChildren(this);
        }
    }
}
exports.ExprSwitchStmtContext = ExprSwitchStmtContext;
class ExprCaseClauseContext extends antlr4_1.ParserRuleContext {
    constructor(parser, parent, invokingState) {
        super(parent, invokingState);
        this.parser = parser;
    }
    exprSwitchCase() {
        return this.getTypedRuleContext(ExprSwitchCaseContext, 0);
    }
    COLON() {
        return this.getToken(GoParser.COLON, 0);
    }
    statementList() {
        return this.getTypedRuleContext(StatementListContext, 0);
    }
    get ruleIndex() {
        return GoParser.RULE_exprCaseClause;
    }
    // @Override
    accept(visitor) {
        if (visitor.visitExprCaseClause) {
            return visitor.visitExprCaseClause(this);
        }
        else {
            return visitor.visitChildren(this);
        }
    }
}
exports.ExprCaseClauseContext = ExprCaseClauseContext;
class ExprSwitchCaseContext extends antlr4_1.ParserRuleContext {
    constructor(parser, parent, invokingState) {
        super(parent, invokingState);
        this.parser = parser;
    }
    CASE() {
        return this.getToken(GoParser.CASE, 0);
    }
    expressionList() {
        return this.getTypedRuleContext(ExpressionListContext, 0);
    }
    DEFAULT() {
        return this.getToken(GoParser.DEFAULT, 0);
    }
    get ruleIndex() {
        return GoParser.RULE_exprSwitchCase;
    }
    // @Override
    accept(visitor) {
        if (visitor.visitExprSwitchCase) {
            return visitor.visitExprSwitchCase(this);
        }
        else {
            return visitor.visitChildren(this);
        }
    }
}
exports.ExprSwitchCaseContext = ExprSwitchCaseContext;
class TypeSwitchStmtContext extends antlr4_1.ParserRuleContext {
    constructor(parser, parent, invokingState) {
        super(parent, invokingState);
        this.parser = parser;
    }
    SWITCH() {
        return this.getToken(GoParser.SWITCH, 0);
    }
    L_CURLY() {
        return this.getToken(GoParser.L_CURLY, 0);
    }
    R_CURLY() {
        return this.getToken(GoParser.R_CURLY, 0);
    }
    typeSwitchGuard() {
        return this.getTypedRuleContext(TypeSwitchGuardContext, 0);
    }
    eos() {
        return this.getTypedRuleContext(EosContext, 0);
    }
    simpleStmt() {
        return this.getTypedRuleContext(SimpleStmtContext, 0);
    }
    typeCaseClause_list() {
        return this.getTypedRuleContexts(TypeCaseClauseContext);
    }
    typeCaseClause(i) {
        return this.getTypedRuleContext(TypeCaseClauseContext, i);
    }
    get ruleIndex() {
        return GoParser.RULE_typeSwitchStmt;
    }
    // @Override
    accept(visitor) {
        if (visitor.visitTypeSwitchStmt) {
            return visitor.visitTypeSwitchStmt(this);
        }
        else {
            return visitor.visitChildren(this);
        }
    }
}
exports.TypeSwitchStmtContext = TypeSwitchStmtContext;
class TypeSwitchGuardContext extends antlr4_1.ParserRuleContext {
    constructor(parser, parent, invokingState) {
        super(parent, invokingState);
        this.parser = parser;
    }
    primaryExpr() {
        return this.getTypedRuleContext(PrimaryExprContext, 0);
    }
    DOT() {
        return this.getToken(GoParser.DOT, 0);
    }
    L_PAREN() {
        return this.getToken(GoParser.L_PAREN, 0);
    }
    TYPE() {
        return this.getToken(GoParser.TYPE, 0);
    }
    R_PAREN() {
        return this.getToken(GoParser.R_PAREN, 0);
    }
    IDENTIFIER() {
        return this.getToken(GoParser.IDENTIFIER, 0);
    }
    DECLARE_ASSIGN() {
        return this.getToken(GoParser.DECLARE_ASSIGN, 0);
    }
    get ruleIndex() {
        return GoParser.RULE_typeSwitchGuard;
    }
    // @Override
    accept(visitor) {
        if (visitor.visitTypeSwitchGuard) {
            return visitor.visitTypeSwitchGuard(this);
        }
        else {
            return visitor.visitChildren(this);
        }
    }
}
exports.TypeSwitchGuardContext = TypeSwitchGuardContext;
class TypeCaseClauseContext extends antlr4_1.ParserRuleContext {
    constructor(parser, parent, invokingState) {
        super(parent, invokingState);
        this.parser = parser;
    }
    typeSwitchCase() {
        return this.getTypedRuleContext(TypeSwitchCaseContext, 0);
    }
    COLON() {
        return this.getToken(GoParser.COLON, 0);
    }
    statementList() {
        return this.getTypedRuleContext(StatementListContext, 0);
    }
    get ruleIndex() {
        return GoParser.RULE_typeCaseClause;
    }
    // @Override
    accept(visitor) {
        if (visitor.visitTypeCaseClause) {
            return visitor.visitTypeCaseClause(this);
        }
        else {
            return visitor.visitChildren(this);
        }
    }
}
exports.TypeCaseClauseContext = TypeCaseClauseContext;
class TypeSwitchCaseContext extends antlr4_1.ParserRuleContext {
    constructor(parser, parent, invokingState) {
        super(parent, invokingState);
        this.parser = parser;
    }
    CASE() {
        return this.getToken(GoParser.CASE, 0);
    }
    typeList() {
        return this.getTypedRuleContext(TypeListContext, 0);
    }
    DEFAULT() {
        return this.getToken(GoParser.DEFAULT, 0);
    }
    get ruleIndex() {
        return GoParser.RULE_typeSwitchCase;
    }
    // @Override
    accept(visitor) {
        if (visitor.visitTypeSwitchCase) {
            return visitor.visitTypeSwitchCase(this);
        }
        else {
            return visitor.visitChildren(this);
        }
    }
}
exports.TypeSwitchCaseContext = TypeSwitchCaseContext;
class TypeListContext extends antlr4_1.ParserRuleContext {
    constructor(parser, parent, invokingState) {
        super(parent, invokingState);
        this.parser = parser;
    }
    type__list() {
        return this.getTypedRuleContexts(Type_Context);
    }
    type_(i) {
        return this.getTypedRuleContext(Type_Context, i);
    }
    NIL_LIT_list() {
        return this.getTokens(GoParser.NIL_LIT);
    }
    NIL_LIT(i) {
        return this.getToken(GoParser.NIL_LIT, i);
    }
    COMMA_list() {
        return this.getTokens(GoParser.COMMA);
    }
    COMMA(i) {
        return this.getToken(GoParser.COMMA, i);
    }
    get ruleIndex() {
        return GoParser.RULE_typeList;
    }
    // @Override
    accept(visitor) {
        if (visitor.visitTypeList) {
            return visitor.visitTypeList(this);
        }
        else {
            return visitor.visitChildren(this);
        }
    }
}
exports.TypeListContext = TypeListContext;
class SelectStmtContext extends antlr4_1.ParserRuleContext {
    constructor(parser, parent, invokingState) {
        super(parent, invokingState);
        this.parser = parser;
    }
    SELECT() {
        return this.getToken(GoParser.SELECT, 0);
    }
    L_CURLY() {
        return this.getToken(GoParser.L_CURLY, 0);
    }
    R_CURLY() {
        return this.getToken(GoParser.R_CURLY, 0);
    }
    commClause_list() {
        return this.getTypedRuleContexts(CommClauseContext);
    }
    commClause(i) {
        return this.getTypedRuleContext(CommClauseContext, i);
    }
    get ruleIndex() {
        return GoParser.RULE_selectStmt;
    }
    // @Override
    accept(visitor) {
        if (visitor.visitSelectStmt) {
            return visitor.visitSelectStmt(this);
        }
        else {
            return visitor.visitChildren(this);
        }
    }
}
exports.SelectStmtContext = SelectStmtContext;
class CommClauseContext extends antlr4_1.ParserRuleContext {
    constructor(parser, parent, invokingState) {
        super(parent, invokingState);
        this.parser = parser;
    }
    commCase() {
        return this.getTypedRuleContext(CommCaseContext, 0);
    }
    COLON() {
        return this.getToken(GoParser.COLON, 0);
    }
    statementList() {
        return this.getTypedRuleContext(StatementListContext, 0);
    }
    get ruleIndex() {
        return GoParser.RULE_commClause;
    }
    // @Override
    accept(visitor) {
        if (visitor.visitCommClause) {
            return visitor.visitCommClause(this);
        }
        else {
            return visitor.visitChildren(this);
        }
    }
}
exports.CommClauseContext = CommClauseContext;
class CommCaseContext extends antlr4_1.ParserRuleContext {
    constructor(parser, parent, invokingState) {
        super(parent, invokingState);
        this.parser = parser;
    }
    CASE() {
        return this.getToken(GoParser.CASE, 0);
    }
    sendStmt() {
        return this.getTypedRuleContext(SendStmtContext, 0);
    }
    recvStmt() {
        return this.getTypedRuleContext(RecvStmtContext, 0);
    }
    DEFAULT() {
        return this.getToken(GoParser.DEFAULT, 0);
    }
    get ruleIndex() {
        return GoParser.RULE_commCase;
    }
    // @Override
    accept(visitor) {
        if (visitor.visitCommCase) {
            return visitor.visitCommCase(this);
        }
        else {
            return visitor.visitChildren(this);
        }
    }
}
exports.CommCaseContext = CommCaseContext;
class RecvStmtContext extends antlr4_1.ParserRuleContext {
    constructor(parser, parent, invokingState) {
        super(parent, invokingState);
        this.parser = parser;
    }
    expression() {
        return this.getTypedRuleContext(ExpressionContext, 0);
    }
    expressionList() {
        return this.getTypedRuleContext(ExpressionListContext, 0);
    }
    ASSIGN() {
        return this.getToken(GoParser.ASSIGN, 0);
    }
    identifierList() {
        return this.getTypedRuleContext(IdentifierListContext, 0);
    }
    DECLARE_ASSIGN() {
        return this.getToken(GoParser.DECLARE_ASSIGN, 0);
    }
    get ruleIndex() {
        return GoParser.RULE_recvStmt;
    }
    // @Override
    accept(visitor) {
        if (visitor.visitRecvStmt) {
            return visitor.visitRecvStmt(this);
        }
        else {
            return visitor.visitChildren(this);
        }
    }
}
exports.RecvStmtContext = RecvStmtContext;
class ForStmtContext extends antlr4_1.ParserRuleContext {
    constructor(parser, parent, invokingState) {
        super(parent, invokingState);
        this.parser = parser;
    }
    FOR() {
        return this.getToken(GoParser.FOR, 0);
    }
    block() {
        return this.getTypedRuleContext(BlockContext, 0);
    }
    forClause() {
        return this.getTypedRuleContext(ForClauseContext, 0);
    }
    expression() {
        return this.getTypedRuleContext(ExpressionContext, 0);
    }
    rangeClause() {
        return this.getTypedRuleContext(RangeClauseContext, 0);
    }
    get ruleIndex() {
        return GoParser.RULE_forStmt;
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
class ForClauseContext extends antlr4_1.ParserRuleContext {
    constructor(parser, parent, invokingState) {
        super(parent, invokingState);
        this.parser = parser;
    }
    eos_list() {
        return this.getTypedRuleContexts(EosContext);
    }
    eos(i) {
        return this.getTypedRuleContext(EosContext, i);
    }
    expression() {
        return this.getTypedRuleContext(ExpressionContext, 0);
    }
    simpleStmt_list() {
        return this.getTypedRuleContexts(SimpleStmtContext);
    }
    simpleStmt(i) {
        return this.getTypedRuleContext(SimpleStmtContext, i);
    }
    get ruleIndex() {
        return GoParser.RULE_forClause;
    }
    // @Override
    accept(visitor) {
        if (visitor.visitForClause) {
            return visitor.visitForClause(this);
        }
        else {
            return visitor.visitChildren(this);
        }
    }
}
exports.ForClauseContext = ForClauseContext;
class RangeClauseContext extends antlr4_1.ParserRuleContext {
    constructor(parser, parent, invokingState) {
        super(parent, invokingState);
        this.parser = parser;
    }
    RANGE() {
        return this.getToken(GoParser.RANGE, 0);
    }
    expression() {
        return this.getTypedRuleContext(ExpressionContext, 0);
    }
    expressionList() {
        return this.getTypedRuleContext(ExpressionListContext, 0);
    }
    ASSIGN() {
        return this.getToken(GoParser.ASSIGN, 0);
    }
    identifierList() {
        return this.getTypedRuleContext(IdentifierListContext, 0);
    }
    DECLARE_ASSIGN() {
        return this.getToken(GoParser.DECLARE_ASSIGN, 0);
    }
    get ruleIndex() {
        return GoParser.RULE_rangeClause;
    }
    // @Override
    accept(visitor) {
        if (visitor.visitRangeClause) {
            return visitor.visitRangeClause(this);
        }
        else {
            return visitor.visitChildren(this);
        }
    }
}
exports.RangeClauseContext = RangeClauseContext;
class GoStmtContext extends antlr4_1.ParserRuleContext {
    constructor(parser, parent, invokingState) {
        super(parent, invokingState);
        this.parser = parser;
    }
    GO() {
        return this.getToken(GoParser.GO, 0);
    }
    expression() {
        return this.getTypedRuleContext(ExpressionContext, 0);
    }
    get ruleIndex() {
        return GoParser.RULE_goStmt;
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
class Type_Context extends antlr4_1.ParserRuleContext {
    constructor(parser, parent, invokingState) {
        super(parent, invokingState);
        this.parser = parser;
    }
    typeName() {
        return this.getTypedRuleContext(TypeNameContext, 0);
    }
    typeArgs() {
        return this.getTypedRuleContext(TypeArgsContext, 0);
    }
    typeLit() {
        return this.getTypedRuleContext(TypeLitContext, 0);
    }
    L_PAREN() {
        return this.getToken(GoParser.L_PAREN, 0);
    }
    type_() {
        return this.getTypedRuleContext(Type_Context, 0);
    }
    R_PAREN() {
        return this.getToken(GoParser.R_PAREN, 0);
    }
    get ruleIndex() {
        return GoParser.RULE_type_;
    }
    // @Override
    accept(visitor) {
        if (visitor.visitType_) {
            return visitor.visitType_(this);
        }
        else {
            return visitor.visitChildren(this);
        }
    }
}
exports.Type_Context = Type_Context;
class TypeArgsContext extends antlr4_1.ParserRuleContext {
    constructor(parser, parent, invokingState) {
        super(parent, invokingState);
        this.parser = parser;
    }
    L_BRACKET() {
        return this.getToken(GoParser.L_BRACKET, 0);
    }
    typeList() {
        return this.getTypedRuleContext(TypeListContext, 0);
    }
    R_BRACKET() {
        return this.getToken(GoParser.R_BRACKET, 0);
    }
    COMMA() {
        return this.getToken(GoParser.COMMA, 0);
    }
    get ruleIndex() {
        return GoParser.RULE_typeArgs;
    }
    // @Override
    accept(visitor) {
        if (visitor.visitTypeArgs) {
            return visitor.visitTypeArgs(this);
        }
        else {
            return visitor.visitChildren(this);
        }
    }
}
exports.TypeArgsContext = TypeArgsContext;
class TypeNameContext extends antlr4_1.ParserRuleContext {
    constructor(parser, parent, invokingState) {
        super(parent, invokingState);
        this.parser = parser;
    }
    qualifiedIdent() {
        return this.getTypedRuleContext(QualifiedIdentContext, 0);
    }
    IDENTIFIER() {
        return this.getToken(GoParser.IDENTIFIER, 0);
    }
    get ruleIndex() {
        return GoParser.RULE_typeName;
    }
    // @Override
    accept(visitor) {
        if (visitor.visitTypeName) {
            return visitor.visitTypeName(this);
        }
        else {
            return visitor.visitChildren(this);
        }
    }
}
exports.TypeNameContext = TypeNameContext;
class TypeLitContext extends antlr4_1.ParserRuleContext {
    constructor(parser, parent, invokingState) {
        super(parent, invokingState);
        this.parser = parser;
    }
    arrayType() {
        return this.getTypedRuleContext(ArrayTypeContext, 0);
    }
    structType() {
        return this.getTypedRuleContext(StructTypeContext, 0);
    }
    pointerType() {
        return this.getTypedRuleContext(PointerTypeContext, 0);
    }
    functionType() {
        return this.getTypedRuleContext(FunctionTypeContext, 0);
    }
    interfaceType() {
        return this.getTypedRuleContext(InterfaceTypeContext, 0);
    }
    sliceType() {
        return this.getTypedRuleContext(SliceTypeContext, 0);
    }
    mapType() {
        return this.getTypedRuleContext(MapTypeContext, 0);
    }
    channelType() {
        return this.getTypedRuleContext(ChannelTypeContext, 0);
    }
    get ruleIndex() {
        return GoParser.RULE_typeLit;
    }
    // @Override
    accept(visitor) {
        if (visitor.visitTypeLit) {
            return visitor.visitTypeLit(this);
        }
        else {
            return visitor.visitChildren(this);
        }
    }
}
exports.TypeLitContext = TypeLitContext;
class ArrayTypeContext extends antlr4_1.ParserRuleContext {
    constructor(parser, parent, invokingState) {
        super(parent, invokingState);
        this.parser = parser;
    }
    L_BRACKET() {
        return this.getToken(GoParser.L_BRACKET, 0);
    }
    arrayLength() {
        return this.getTypedRuleContext(ArrayLengthContext, 0);
    }
    R_BRACKET() {
        return this.getToken(GoParser.R_BRACKET, 0);
    }
    elementType() {
        return this.getTypedRuleContext(ElementTypeContext, 0);
    }
    get ruleIndex() {
        return GoParser.RULE_arrayType;
    }
    // @Override
    accept(visitor) {
        if (visitor.visitArrayType) {
            return visitor.visitArrayType(this);
        }
        else {
            return visitor.visitChildren(this);
        }
    }
}
exports.ArrayTypeContext = ArrayTypeContext;
class ArrayLengthContext extends antlr4_1.ParserRuleContext {
    constructor(parser, parent, invokingState) {
        super(parent, invokingState);
        this.parser = parser;
    }
    expression() {
        return this.getTypedRuleContext(ExpressionContext, 0);
    }
    get ruleIndex() {
        return GoParser.RULE_arrayLength;
    }
    // @Override
    accept(visitor) {
        if (visitor.visitArrayLength) {
            return visitor.visitArrayLength(this);
        }
        else {
            return visitor.visitChildren(this);
        }
    }
}
exports.ArrayLengthContext = ArrayLengthContext;
class ElementTypeContext extends antlr4_1.ParserRuleContext {
    constructor(parser, parent, invokingState) {
        super(parent, invokingState);
        this.parser = parser;
    }
    type_() {
        return this.getTypedRuleContext(Type_Context, 0);
    }
    get ruleIndex() {
        return GoParser.RULE_elementType;
    }
    // @Override
    accept(visitor) {
        if (visitor.visitElementType) {
            return visitor.visitElementType(this);
        }
        else {
            return visitor.visitChildren(this);
        }
    }
}
exports.ElementTypeContext = ElementTypeContext;
class PointerTypeContext extends antlr4_1.ParserRuleContext {
    constructor(parser, parent, invokingState) {
        super(parent, invokingState);
        this.parser = parser;
    }
    STAR() {
        return this.getToken(GoParser.STAR, 0);
    }
    type_() {
        return this.getTypedRuleContext(Type_Context, 0);
    }
    get ruleIndex() {
        return GoParser.RULE_pointerType;
    }
    // @Override
    accept(visitor) {
        if (visitor.visitPointerType) {
            return visitor.visitPointerType(this);
        }
        else {
            return visitor.visitChildren(this);
        }
    }
}
exports.PointerTypeContext = PointerTypeContext;
class InterfaceTypeContext extends antlr4_1.ParserRuleContext {
    constructor(parser, parent, invokingState) {
        super(parent, invokingState);
        this.parser = parser;
    }
    INTERFACE() {
        return this.getToken(GoParser.INTERFACE, 0);
    }
    L_CURLY() {
        return this.getToken(GoParser.L_CURLY, 0);
    }
    R_CURLY() {
        return this.getToken(GoParser.R_CURLY, 0);
    }
    eos_list() {
        return this.getTypedRuleContexts(EosContext);
    }
    eos(i) {
        return this.getTypedRuleContext(EosContext, i);
    }
    methodSpec_list() {
        return this.getTypedRuleContexts(MethodSpecContext);
    }
    methodSpec(i) {
        return this.getTypedRuleContext(MethodSpecContext, i);
    }
    typeElement_list() {
        return this.getTypedRuleContexts(TypeElementContext);
    }
    typeElement(i) {
        return this.getTypedRuleContext(TypeElementContext, i);
    }
    get ruleIndex() {
        return GoParser.RULE_interfaceType;
    }
    // @Override
    accept(visitor) {
        if (visitor.visitInterfaceType) {
            return visitor.visitInterfaceType(this);
        }
        else {
            return visitor.visitChildren(this);
        }
    }
}
exports.InterfaceTypeContext = InterfaceTypeContext;
class SliceTypeContext extends antlr4_1.ParserRuleContext {
    constructor(parser, parent, invokingState) {
        super(parent, invokingState);
        this.parser = parser;
    }
    L_BRACKET() {
        return this.getToken(GoParser.L_BRACKET, 0);
    }
    R_BRACKET() {
        return this.getToken(GoParser.R_BRACKET, 0);
    }
    elementType() {
        return this.getTypedRuleContext(ElementTypeContext, 0);
    }
    get ruleIndex() {
        return GoParser.RULE_sliceType;
    }
    // @Override
    accept(visitor) {
        if (visitor.visitSliceType) {
            return visitor.visitSliceType(this);
        }
        else {
            return visitor.visitChildren(this);
        }
    }
}
exports.SliceTypeContext = SliceTypeContext;
class MapTypeContext extends antlr4_1.ParserRuleContext {
    constructor(parser, parent, invokingState) {
        super(parent, invokingState);
        this.parser = parser;
    }
    MAP() {
        return this.getToken(GoParser.MAP, 0);
    }
    L_BRACKET() {
        return this.getToken(GoParser.L_BRACKET, 0);
    }
    type_() {
        return this.getTypedRuleContext(Type_Context, 0);
    }
    R_BRACKET() {
        return this.getToken(GoParser.R_BRACKET, 0);
    }
    elementType() {
        return this.getTypedRuleContext(ElementTypeContext, 0);
    }
    get ruleIndex() {
        return GoParser.RULE_mapType;
    }
    // @Override
    accept(visitor) {
        if (visitor.visitMapType) {
            return visitor.visitMapType(this);
        }
        else {
            return visitor.visitChildren(this);
        }
    }
}
exports.MapTypeContext = MapTypeContext;
class ChannelTypeContext extends antlr4_1.ParserRuleContext {
    constructor(parser, parent, invokingState) {
        super(parent, invokingState);
        this.parser = parser;
    }
    elementType() {
        return this.getTypedRuleContext(ElementTypeContext, 0);
    }
    CHAN() {
        return this.getToken(GoParser.CHAN, 0);
    }
    RECEIVE() {
        return this.getToken(GoParser.RECEIVE, 0);
    }
    get ruleIndex() {
        return GoParser.RULE_channelType;
    }
    // @Override
    accept(visitor) {
        if (visitor.visitChannelType) {
            return visitor.visitChannelType(this);
        }
        else {
            return visitor.visitChildren(this);
        }
    }
}
exports.ChannelTypeContext = ChannelTypeContext;
class MethodSpecContext extends antlr4_1.ParserRuleContext {
    constructor(parser, parent, invokingState) {
        super(parent, invokingState);
        this.parser = parser;
    }
    IDENTIFIER() {
        return this.getToken(GoParser.IDENTIFIER, 0);
    }
    parameters() {
        return this.getTypedRuleContext(ParametersContext, 0);
    }
    result() {
        return this.getTypedRuleContext(ResultContext, 0);
    }
    get ruleIndex() {
        return GoParser.RULE_methodSpec;
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
class FunctionTypeContext extends antlr4_1.ParserRuleContext {
    constructor(parser, parent, invokingState) {
        super(parent, invokingState);
        this.parser = parser;
    }
    FUNC() {
        return this.getToken(GoParser.FUNC, 0);
    }
    signature() {
        return this.getTypedRuleContext(SignatureContext, 0);
    }
    get ruleIndex() {
        return GoParser.RULE_functionType;
    }
    // @Override
    accept(visitor) {
        if (visitor.visitFunctionType) {
            return visitor.visitFunctionType(this);
        }
        else {
            return visitor.visitChildren(this);
        }
    }
}
exports.FunctionTypeContext = FunctionTypeContext;
class SignatureContext extends antlr4_1.ParserRuleContext {
    constructor(parser, parent, invokingState) {
        super(parent, invokingState);
        this.parser = parser;
    }
    parameters() {
        return this.getTypedRuleContext(ParametersContext, 0);
    }
    result() {
        return this.getTypedRuleContext(ResultContext, 0);
    }
    get ruleIndex() {
        return GoParser.RULE_signature;
    }
    // @Override
    accept(visitor) {
        if (visitor.visitSignature) {
            return visitor.visitSignature(this);
        }
        else {
            return visitor.visitChildren(this);
        }
    }
}
exports.SignatureContext = SignatureContext;
class ResultContext extends antlr4_1.ParserRuleContext {
    constructor(parser, parent, invokingState) {
        super(parent, invokingState);
        this.parser = parser;
    }
    parameters() {
        return this.getTypedRuleContext(ParametersContext, 0);
    }
    type_() {
        return this.getTypedRuleContext(Type_Context, 0);
    }
    get ruleIndex() {
        return GoParser.RULE_result;
    }
    // @Override
    accept(visitor) {
        if (visitor.visitResult) {
            return visitor.visitResult(this);
        }
        else {
            return visitor.visitChildren(this);
        }
    }
}
exports.ResultContext = ResultContext;
class ParametersContext extends antlr4_1.ParserRuleContext {
    constructor(parser, parent, invokingState) {
        super(parent, invokingState);
        this.parser = parser;
    }
    L_PAREN() {
        return this.getToken(GoParser.L_PAREN, 0);
    }
    R_PAREN() {
        return this.getToken(GoParser.R_PAREN, 0);
    }
    parameterDecl_list() {
        return this.getTypedRuleContexts(ParameterDeclContext);
    }
    parameterDecl(i) {
        return this.getTypedRuleContext(ParameterDeclContext, i);
    }
    COMMA_list() {
        return this.getTokens(GoParser.COMMA);
    }
    COMMA(i) {
        return this.getToken(GoParser.COMMA, i);
    }
    get ruleIndex() {
        return GoParser.RULE_parameters;
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
class ParameterDeclContext extends antlr4_1.ParserRuleContext {
    constructor(parser, parent, invokingState) {
        super(parent, invokingState);
        this.parser = parser;
    }
    type_() {
        return this.getTypedRuleContext(Type_Context, 0);
    }
    identifierList() {
        return this.getTypedRuleContext(IdentifierListContext, 0);
    }
    ELLIPSIS() {
        return this.getToken(GoParser.ELLIPSIS, 0);
    }
    get ruleIndex() {
        return GoParser.RULE_parameterDecl;
    }
    // @Override
    accept(visitor) {
        if (visitor.visitParameterDecl) {
            return visitor.visitParameterDecl(this);
        }
        else {
            return visitor.visitChildren(this);
        }
    }
}
exports.ParameterDeclContext = ParameterDeclContext;
class ExpressionContext extends antlr4_1.ParserRuleContext {
    constructor(parser, parent, invokingState) {
        super(parent, invokingState);
        this.parser = parser;
    }
    primaryExpr() {
        return this.getTypedRuleContext(PrimaryExprContext, 0);
    }
    expression_list() {
        return this.getTypedRuleContexts(ExpressionContext);
    }
    expression(i) {
        return this.getTypedRuleContext(ExpressionContext, i);
    }
    PLUS() {
        return this.getToken(GoParser.PLUS, 0);
    }
    MINUS() {
        return this.getToken(GoParser.MINUS, 0);
    }
    EXCLAMATION() {
        return this.getToken(GoParser.EXCLAMATION, 0);
    }
    CARET() {
        return this.getToken(GoParser.CARET, 0);
    }
    STAR() {
        return this.getToken(GoParser.STAR, 0);
    }
    AMPERSAND() {
        return this.getToken(GoParser.AMPERSAND, 0);
    }
    RECEIVE() {
        return this.getToken(GoParser.RECEIVE, 0);
    }
    DIV() {
        return this.getToken(GoParser.DIV, 0);
    }
    MOD() {
        return this.getToken(GoParser.MOD, 0);
    }
    LSHIFT() {
        return this.getToken(GoParser.LSHIFT, 0);
    }
    RSHIFT() {
        return this.getToken(GoParser.RSHIFT, 0);
    }
    BIT_CLEAR() {
        return this.getToken(GoParser.BIT_CLEAR, 0);
    }
    OR() {
        return this.getToken(GoParser.OR, 0);
    }
    EQUALS() {
        return this.getToken(GoParser.EQUALS, 0);
    }
    NOT_EQUALS() {
        return this.getToken(GoParser.NOT_EQUALS, 0);
    }
    LESS() {
        return this.getToken(GoParser.LESS, 0);
    }
    LESS_OR_EQUALS() {
        return this.getToken(GoParser.LESS_OR_EQUALS, 0);
    }
    GREATER() {
        return this.getToken(GoParser.GREATER, 0);
    }
    GREATER_OR_EQUALS() {
        return this.getToken(GoParser.GREATER_OR_EQUALS, 0);
    }
    LOGICAL_AND() {
        return this.getToken(GoParser.LOGICAL_AND, 0);
    }
    LOGICAL_OR() {
        return this.getToken(GoParser.LOGICAL_OR, 0);
    }
    get ruleIndex() {
        return GoParser.RULE_expression;
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
    conversion() {
        return this.getTypedRuleContext(ConversionContext, 0);
    }
    methodExpr() {
        return this.getTypedRuleContext(MethodExprContext, 0);
    }
    primaryExpr() {
        return this.getTypedRuleContext(PrimaryExprContext, 0);
    }
    DOT() {
        return this.getToken(GoParser.DOT, 0);
    }
    IDENTIFIER() {
        return this.getToken(GoParser.IDENTIFIER, 0);
    }
    index() {
        return this.getTypedRuleContext(IndexContext, 0);
    }
    slice_() {
        return this.getTypedRuleContext(Slice_Context, 0);
    }
    typeAssertion() {
        return this.getTypedRuleContext(TypeAssertionContext, 0);
    }
    arguments() {
        return this.getTypedRuleContext(ArgumentsContext, 0);
    }
    get ruleIndex() {
        return GoParser.RULE_primaryExpr;
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
class ConversionContext extends antlr4_1.ParserRuleContext {
    constructor(parser, parent, invokingState) {
        super(parent, invokingState);
        this.parser = parser;
    }
    type_() {
        return this.getTypedRuleContext(Type_Context, 0);
    }
    L_PAREN() {
        return this.getToken(GoParser.L_PAREN, 0);
    }
    expression() {
        return this.getTypedRuleContext(ExpressionContext, 0);
    }
    R_PAREN() {
        return this.getToken(GoParser.R_PAREN, 0);
    }
    COMMA() {
        return this.getToken(GoParser.COMMA, 0);
    }
    get ruleIndex() {
        return GoParser.RULE_conversion;
    }
    // @Override
    accept(visitor) {
        if (visitor.visitConversion) {
            return visitor.visitConversion(this);
        }
        else {
            return visitor.visitChildren(this);
        }
    }
}
exports.ConversionContext = ConversionContext;
class OperandContext extends antlr4_1.ParserRuleContext {
    constructor(parser, parent, invokingState) {
        super(parent, invokingState);
        this.parser = parser;
    }
    literal() {
        return this.getTypedRuleContext(LiteralContext, 0);
    }
    operandName() {
        return this.getTypedRuleContext(OperandNameContext, 0);
    }
    typeArgs() {
        return this.getTypedRuleContext(TypeArgsContext, 0);
    }
    L_PAREN() {
        return this.getToken(GoParser.L_PAREN, 0);
    }
    expression() {
        return this.getTypedRuleContext(ExpressionContext, 0);
    }
    R_PAREN() {
        return this.getToken(GoParser.R_PAREN, 0);
    }
    get ruleIndex() {
        return GoParser.RULE_operand;
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
class LiteralContext extends antlr4_1.ParserRuleContext {
    constructor(parser, parent, invokingState) {
        super(parent, invokingState);
        this.parser = parser;
    }
    basicLit() {
        return this.getTypedRuleContext(BasicLitContext, 0);
    }
    compositeLit() {
        return this.getTypedRuleContext(CompositeLitContext, 0);
    }
    functionLit() {
        return this.getTypedRuleContext(FunctionLitContext, 0);
    }
    get ruleIndex() {
        return GoParser.RULE_literal;
    }
    // @Override
    accept(visitor) {
        if (visitor.visitLiteral) {
            return visitor.visitLiteral(this);
        }
        else {
            return visitor.visitChildren(this);
        }
    }
}
exports.LiteralContext = LiteralContext;
class BasicLitContext extends antlr4_1.ParserRuleContext {
    constructor(parser, parent, invokingState) {
        super(parent, invokingState);
        this.parser = parser;
    }
    NIL_LIT() {
        return this.getToken(GoParser.NIL_LIT, 0);
    }
    integer() {
        return this.getTypedRuleContext(IntegerContext, 0);
    }
    string_() {
        return this.getTypedRuleContext(String_Context, 0);
    }
    FLOAT_LIT() {
        return this.getToken(GoParser.FLOAT_LIT, 0);
    }
    get ruleIndex() {
        return GoParser.RULE_basicLit;
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
class IntegerContext extends antlr4_1.ParserRuleContext {
    constructor(parser, parent, invokingState) {
        super(parent, invokingState);
        this.parser = parser;
    }
    DECIMAL_LIT() {
        return this.getToken(GoParser.DECIMAL_LIT, 0);
    }
    BINARY_LIT() {
        return this.getToken(GoParser.BINARY_LIT, 0);
    }
    OCTAL_LIT() {
        return this.getToken(GoParser.OCTAL_LIT, 0);
    }
    HEX_LIT() {
        return this.getToken(GoParser.HEX_LIT, 0);
    }
    IMAGINARY_LIT() {
        return this.getToken(GoParser.IMAGINARY_LIT, 0);
    }
    RUNE_LIT() {
        return this.getToken(GoParser.RUNE_LIT, 0);
    }
    get ruleIndex() {
        return GoParser.RULE_integer;
    }
    // @Override
    accept(visitor) {
        if (visitor.visitInteger) {
            return visitor.visitInteger(this);
        }
        else {
            return visitor.visitChildren(this);
        }
    }
}
exports.IntegerContext = IntegerContext;
class OperandNameContext extends antlr4_1.ParserRuleContext {
    constructor(parser, parent, invokingState) {
        super(parent, invokingState);
        this.parser = parser;
    }
    IDENTIFIER() {
        return this.getToken(GoParser.IDENTIFIER, 0);
    }
    get ruleIndex() {
        return GoParser.RULE_operandName;
    }
    // @Override
    accept(visitor) {
        if (visitor.visitOperandName) {
            return visitor.visitOperandName(this);
        }
        else {
            return visitor.visitChildren(this);
        }
    }
}
exports.OperandNameContext = OperandNameContext;
class QualifiedIdentContext extends antlr4_1.ParserRuleContext {
    constructor(parser, parent, invokingState) {
        super(parent, invokingState);
        this.parser = parser;
    }
    IDENTIFIER_list() {
        return this.getTokens(GoParser.IDENTIFIER);
    }
    IDENTIFIER(i) {
        return this.getToken(GoParser.IDENTIFIER, i);
    }
    DOT() {
        return this.getToken(GoParser.DOT, 0);
    }
    get ruleIndex() {
        return GoParser.RULE_qualifiedIdent;
    }
    // @Override
    accept(visitor) {
        if (visitor.visitQualifiedIdent) {
            return visitor.visitQualifiedIdent(this);
        }
        else {
            return visitor.visitChildren(this);
        }
    }
}
exports.QualifiedIdentContext = QualifiedIdentContext;
class CompositeLitContext extends antlr4_1.ParserRuleContext {
    constructor(parser, parent, invokingState) {
        super(parent, invokingState);
        this.parser = parser;
    }
    literalType() {
        return this.getTypedRuleContext(LiteralTypeContext, 0);
    }
    literalValue() {
        return this.getTypedRuleContext(LiteralValueContext, 0);
    }
    get ruleIndex() {
        return GoParser.RULE_compositeLit;
    }
    // @Override
    accept(visitor) {
        if (visitor.visitCompositeLit) {
            return visitor.visitCompositeLit(this);
        }
        else {
            return visitor.visitChildren(this);
        }
    }
}
exports.CompositeLitContext = CompositeLitContext;
class LiteralTypeContext extends antlr4_1.ParserRuleContext {
    constructor(parser, parent, invokingState) {
        super(parent, invokingState);
        this.parser = parser;
    }
    structType() {
        return this.getTypedRuleContext(StructTypeContext, 0);
    }
    arrayType() {
        return this.getTypedRuleContext(ArrayTypeContext, 0);
    }
    L_BRACKET() {
        return this.getToken(GoParser.L_BRACKET, 0);
    }
    ELLIPSIS() {
        return this.getToken(GoParser.ELLIPSIS, 0);
    }
    R_BRACKET() {
        return this.getToken(GoParser.R_BRACKET, 0);
    }
    elementType() {
        return this.getTypedRuleContext(ElementTypeContext, 0);
    }
    sliceType() {
        return this.getTypedRuleContext(SliceTypeContext, 0);
    }
    mapType() {
        return this.getTypedRuleContext(MapTypeContext, 0);
    }
    typeName() {
        return this.getTypedRuleContext(TypeNameContext, 0);
    }
    typeArgs() {
        return this.getTypedRuleContext(TypeArgsContext, 0);
    }
    get ruleIndex() {
        return GoParser.RULE_literalType;
    }
    // @Override
    accept(visitor) {
        if (visitor.visitLiteralType) {
            return visitor.visitLiteralType(this);
        }
        else {
            return visitor.visitChildren(this);
        }
    }
}
exports.LiteralTypeContext = LiteralTypeContext;
class LiteralValueContext extends antlr4_1.ParserRuleContext {
    constructor(parser, parent, invokingState) {
        super(parent, invokingState);
        this.parser = parser;
    }
    L_CURLY() {
        return this.getToken(GoParser.L_CURLY, 0);
    }
    R_CURLY() {
        return this.getToken(GoParser.R_CURLY, 0);
    }
    elementList() {
        return this.getTypedRuleContext(ElementListContext, 0);
    }
    COMMA() {
        return this.getToken(GoParser.COMMA, 0);
    }
    get ruleIndex() {
        return GoParser.RULE_literalValue;
    }
    // @Override
    accept(visitor) {
        if (visitor.visitLiteralValue) {
            return visitor.visitLiteralValue(this);
        }
        else {
            return visitor.visitChildren(this);
        }
    }
}
exports.LiteralValueContext = LiteralValueContext;
class ElementListContext extends antlr4_1.ParserRuleContext {
    constructor(parser, parent, invokingState) {
        super(parent, invokingState);
        this.parser = parser;
    }
    keyedElement_list() {
        return this.getTypedRuleContexts(KeyedElementContext);
    }
    keyedElement(i) {
        return this.getTypedRuleContext(KeyedElementContext, i);
    }
    COMMA_list() {
        return this.getTokens(GoParser.COMMA);
    }
    COMMA(i) {
        return this.getToken(GoParser.COMMA, i);
    }
    get ruleIndex() {
        return GoParser.RULE_elementList;
    }
    // @Override
    accept(visitor) {
        if (visitor.visitElementList) {
            return visitor.visitElementList(this);
        }
        else {
            return visitor.visitChildren(this);
        }
    }
}
exports.ElementListContext = ElementListContext;
class KeyedElementContext extends antlr4_1.ParserRuleContext {
    constructor(parser, parent, invokingState) {
        super(parent, invokingState);
        this.parser = parser;
    }
    element() {
        return this.getTypedRuleContext(ElementContext, 0);
    }
    key() {
        return this.getTypedRuleContext(KeyContext, 0);
    }
    COLON() {
        return this.getToken(GoParser.COLON, 0);
    }
    get ruleIndex() {
        return GoParser.RULE_keyedElement;
    }
    // @Override
    accept(visitor) {
        if (visitor.visitKeyedElement) {
            return visitor.visitKeyedElement(this);
        }
        else {
            return visitor.visitChildren(this);
        }
    }
}
exports.KeyedElementContext = KeyedElementContext;
class KeyContext extends antlr4_1.ParserRuleContext {
    constructor(parser, parent, invokingState) {
        super(parent, invokingState);
        this.parser = parser;
    }
    expression() {
        return this.getTypedRuleContext(ExpressionContext, 0);
    }
    literalValue() {
        return this.getTypedRuleContext(LiteralValueContext, 0);
    }
    get ruleIndex() {
        return GoParser.RULE_key;
    }
    // @Override
    accept(visitor) {
        if (visitor.visitKey) {
            return visitor.visitKey(this);
        }
        else {
            return visitor.visitChildren(this);
        }
    }
}
exports.KeyContext = KeyContext;
class ElementContext extends antlr4_1.ParserRuleContext {
    constructor(parser, parent, invokingState) {
        super(parent, invokingState);
        this.parser = parser;
    }
    expression() {
        return this.getTypedRuleContext(ExpressionContext, 0);
    }
    literalValue() {
        return this.getTypedRuleContext(LiteralValueContext, 0);
    }
    get ruleIndex() {
        return GoParser.RULE_element;
    }
    // @Override
    accept(visitor) {
        if (visitor.visitElement) {
            return visitor.visitElement(this);
        }
        else {
            return visitor.visitChildren(this);
        }
    }
}
exports.ElementContext = ElementContext;
class StructTypeContext extends antlr4_1.ParserRuleContext {
    constructor(parser, parent, invokingState) {
        super(parent, invokingState);
        this.parser = parser;
    }
    STRUCT() {
        return this.getToken(GoParser.STRUCT, 0);
    }
    L_CURLY() {
        return this.getToken(GoParser.L_CURLY, 0);
    }
    R_CURLY() {
        return this.getToken(GoParser.R_CURLY, 0);
    }
    fieldDecl_list() {
        return this.getTypedRuleContexts(FieldDeclContext);
    }
    fieldDecl(i) {
        return this.getTypedRuleContext(FieldDeclContext, i);
    }
    eos_list() {
        return this.getTypedRuleContexts(EosContext);
    }
    eos(i) {
        return this.getTypedRuleContext(EosContext, i);
    }
    get ruleIndex() {
        return GoParser.RULE_structType;
    }
    // @Override
    accept(visitor) {
        if (visitor.visitStructType) {
            return visitor.visitStructType(this);
        }
        else {
            return visitor.visitChildren(this);
        }
    }
}
exports.StructTypeContext = StructTypeContext;
class FieldDeclContext extends antlr4_1.ParserRuleContext {
    constructor(parser, parent, invokingState) {
        super(parent, invokingState);
        this.parser = parser;
    }
    identifierList() {
        return this.getTypedRuleContext(IdentifierListContext, 0);
    }
    type_() {
        return this.getTypedRuleContext(Type_Context, 0);
    }
    embeddedField() {
        return this.getTypedRuleContext(EmbeddedFieldContext, 0);
    }
    string_() {
        return this.getTypedRuleContext(String_Context, 0);
    }
    get ruleIndex() {
        return GoParser.RULE_fieldDecl;
    }
    // @Override
    accept(visitor) {
        if (visitor.visitFieldDecl) {
            return visitor.visitFieldDecl(this);
        }
        else {
            return visitor.visitChildren(this);
        }
    }
}
exports.FieldDeclContext = FieldDeclContext;
class String_Context extends antlr4_1.ParserRuleContext {
    constructor(parser, parent, invokingState) {
        super(parent, invokingState);
        this.parser = parser;
    }
    RAW_STRING_LIT() {
        return this.getToken(GoParser.RAW_STRING_LIT, 0);
    }
    INTERPRETED_STRING_LIT() {
        return this.getToken(GoParser.INTERPRETED_STRING_LIT, 0);
    }
    get ruleIndex() {
        return GoParser.RULE_string_;
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
class EmbeddedFieldContext extends antlr4_1.ParserRuleContext {
    constructor(parser, parent, invokingState) {
        super(parent, invokingState);
        this.parser = parser;
    }
    typeName() {
        return this.getTypedRuleContext(TypeNameContext, 0);
    }
    STAR() {
        return this.getToken(GoParser.STAR, 0);
    }
    typeArgs() {
        return this.getTypedRuleContext(TypeArgsContext, 0);
    }
    get ruleIndex() {
        return GoParser.RULE_embeddedField;
    }
    // @Override
    accept(visitor) {
        if (visitor.visitEmbeddedField) {
            return visitor.visitEmbeddedField(this);
        }
        else {
            return visitor.visitChildren(this);
        }
    }
}
exports.EmbeddedFieldContext = EmbeddedFieldContext;
class FunctionLitContext extends antlr4_1.ParserRuleContext {
    constructor(parser, parent, invokingState) {
        super(parent, invokingState);
        this.parser = parser;
    }
    FUNC() {
        return this.getToken(GoParser.FUNC, 0);
    }
    signature() {
        return this.getTypedRuleContext(SignatureContext, 0);
    }
    block() {
        return this.getTypedRuleContext(BlockContext, 0);
    }
    get ruleIndex() {
        return GoParser.RULE_functionLit;
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
class IndexContext extends antlr4_1.ParserRuleContext {
    constructor(parser, parent, invokingState) {
        super(parent, invokingState);
        this.parser = parser;
    }
    L_BRACKET() {
        return this.getToken(GoParser.L_BRACKET, 0);
    }
    expression() {
        return this.getTypedRuleContext(ExpressionContext, 0);
    }
    R_BRACKET() {
        return this.getToken(GoParser.R_BRACKET, 0);
    }
    get ruleIndex() {
        return GoParser.RULE_index;
    }
    // @Override
    accept(visitor) {
        if (visitor.visitIndex) {
            return visitor.visitIndex(this);
        }
        else {
            return visitor.visitChildren(this);
        }
    }
}
exports.IndexContext = IndexContext;
class Slice_Context extends antlr4_1.ParserRuleContext {
    constructor(parser, parent, invokingState) {
        super(parent, invokingState);
        this.parser = parser;
    }
    L_BRACKET() {
        return this.getToken(GoParser.L_BRACKET, 0);
    }
    R_BRACKET() {
        return this.getToken(GoParser.R_BRACKET, 0);
    }
    COLON_list() {
        return this.getTokens(GoParser.COLON);
    }
    COLON(i) {
        return this.getToken(GoParser.COLON, i);
    }
    expression_list() {
        return this.getTypedRuleContexts(ExpressionContext);
    }
    expression(i) {
        return this.getTypedRuleContext(ExpressionContext, i);
    }
    get ruleIndex() {
        return GoParser.RULE_slice_;
    }
    // @Override
    accept(visitor) {
        if (visitor.visitSlice_) {
            return visitor.visitSlice_(this);
        }
        else {
            return visitor.visitChildren(this);
        }
    }
}
exports.Slice_Context = Slice_Context;
class TypeAssertionContext extends antlr4_1.ParserRuleContext {
    constructor(parser, parent, invokingState) {
        super(parent, invokingState);
        this.parser = parser;
    }
    DOT() {
        return this.getToken(GoParser.DOT, 0);
    }
    L_PAREN() {
        return this.getToken(GoParser.L_PAREN, 0);
    }
    type_() {
        return this.getTypedRuleContext(Type_Context, 0);
    }
    R_PAREN() {
        return this.getToken(GoParser.R_PAREN, 0);
    }
    get ruleIndex() {
        return GoParser.RULE_typeAssertion;
    }
    // @Override
    accept(visitor) {
        if (visitor.visitTypeAssertion) {
            return visitor.visitTypeAssertion(this);
        }
        else {
            return visitor.visitChildren(this);
        }
    }
}
exports.TypeAssertionContext = TypeAssertionContext;
class ArgumentsContext extends antlr4_1.ParserRuleContext {
    constructor(parser, parent, invokingState) {
        super(parent, invokingState);
        this.parser = parser;
    }
    L_PAREN() {
        return this.getToken(GoParser.L_PAREN, 0);
    }
    R_PAREN() {
        return this.getToken(GoParser.R_PAREN, 0);
    }
    expressionList() {
        return this.getTypedRuleContext(ExpressionListContext, 0);
    }
    type_() {
        return this.getTypedRuleContext(Type_Context, 0);
    }
    ELLIPSIS() {
        return this.getToken(GoParser.ELLIPSIS, 0);
    }
    COMMA_list() {
        return this.getTokens(GoParser.COMMA);
    }
    COMMA(i) {
        return this.getToken(GoParser.COMMA, i);
    }
    get ruleIndex() {
        return GoParser.RULE_arguments;
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
class MethodExprContext extends antlr4_1.ParserRuleContext {
    constructor(parser, parent, invokingState) {
        super(parent, invokingState);
        this.parser = parser;
    }
    type_() {
        return this.getTypedRuleContext(Type_Context, 0);
    }
    DOT() {
        return this.getToken(GoParser.DOT, 0);
    }
    IDENTIFIER() {
        return this.getToken(GoParser.IDENTIFIER, 0);
    }
    get ruleIndex() {
        return GoParser.RULE_methodExpr;
    }
    // @Override
    accept(visitor) {
        if (visitor.visitMethodExpr) {
            return visitor.visitMethodExpr(this);
        }
        else {
            return visitor.visitChildren(this);
        }
    }
}
exports.MethodExprContext = MethodExprContext;
class EosContext extends antlr4_1.ParserRuleContext {
    constructor(parser, parent, invokingState) {
        super(parent, invokingState);
        this.parser = parser;
    }
    SEMI() {
        return this.getToken(GoParser.SEMI, 0);
    }
    EOF() {
        return this.getToken(GoParser.EOF, 0);
    }
    EOS() {
        return this.getToken(GoParser.EOS, 0);
    }
    get ruleIndex() {
        return GoParser.RULE_eos;
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
