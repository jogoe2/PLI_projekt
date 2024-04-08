// Generated from /Users/johannesgottle/Dokumente/Studium/PLI_NUS/PLI_projekt/src/GoParserUntyped.g4 by ANTLR 4.13.1
// noinspection ES6UnusedImports,JSUnusedGlobalSymbols,JSUnusedLocalSymbols

import {
	ATN,
	ATNDeserializer, DecisionState, DFA, FailedPredicateException,
	RecognitionException, NoViableAltException, BailErrorStrategy,
	Parser, ParserATNSimulator,
	RuleContext, ParserRuleContext, PredictionMode, PredictionContextCache,
	TerminalNode, RuleNode,
	Token, TokenStream,
	Interval, IntervalSet
} from 'antlr4';
import GoParserUntypedVisitor from "./GoParserUntypedVisitor.js";

// for running tests with parameters, TODO: discuss strategy for typed parameters in CI
// eslint-disable-next-line no-unused-vars
type int = number;

import GoParserBase from './GoParserBase';

export default class GoParserUntyped extends GoParserBase {
	public static readonly BREAK = 1;
	public static readonly DEFAULT = 2;
	public static readonly FUNC = 3;
	public static readonly INTERFACE = 4;
	public static readonly SELECT = 5;
	public static readonly CASE = 6;
	public static readonly DEFER = 7;
	public static readonly GO = 8;
	public static readonly MAP = 9;
	public static readonly STRUCT = 10;
	public static readonly CHAN = 11;
	public static readonly ELSE = 12;
	public static readonly GOTO = 13;
	public static readonly PACKAGE = 14;
	public static readonly SWITCH = 15;
	public static readonly CONST = 16;
	public static readonly FALLTHROUGH = 17;
	public static readonly IF = 18;
	public static readonly RANGE = 19;
	public static readonly TYPE = 20;
	public static readonly CONTINUE = 21;
	public static readonly FOR = 22;
	public static readonly IMPORT = 23;
	public static readonly RETURN = 24;
	public static readonly VAR = 25;
	public static readonly NIL_LIT = 26;
	public static readonly BOOL_LIT = 27;
	public static readonly IDENTIFIER = 28;
	public static readonly L_PAREN = 29;
	public static readonly R_PAREN = 30;
	public static readonly L_CURLY = 31;
	public static readonly R_CURLY = 32;
	public static readonly L_BRACKET = 33;
	public static readonly R_BRACKET = 34;
	public static readonly ASSIGN = 35;
	public static readonly COMMA = 36;
	public static readonly SEMI = 37;
	public static readonly COLON = 38;
	public static readonly DOT = 39;
	public static readonly PLUS_PLUS = 40;
	public static readonly MINUS_MINUS = 41;
	public static readonly DECLARE_ASSIGN = 42;
	public static readonly ELLIPSIS = 43;
	public static readonly LOGICAL_OR = 44;
	public static readonly LOGICAL_AND = 45;
	public static readonly EQUALS = 46;
	public static readonly NOT_EQUALS = 47;
	public static readonly LESS = 48;
	public static readonly LESS_OR_EQUALS = 49;
	public static readonly GREATER = 50;
	public static readonly GREATER_OR_EQUALS = 51;
	public static readonly OR = 52;
	public static readonly DIV = 53;
	public static readonly MOD = 54;
	public static readonly LSHIFT = 55;
	public static readonly RSHIFT = 56;
	public static readonly BIT_CLEAR = 57;
	public static readonly UNDERLYING = 58;
	public static readonly EXCLAMATION = 59;
	public static readonly PLUS = 60;
	public static readonly MINUS = 61;
	public static readonly CARET = 62;
	public static readonly STAR = 63;
	public static readonly AMPERSAND = 64;
	public static readonly RECEIVE = 65;
	public static readonly DECIMAL_LIT = 66;
	public static readonly BINARY_LIT = 67;
	public static readonly OCTAL_LIT = 68;
	public static readonly HEX_LIT = 69;
	public static readonly FLOAT_LIT = 70;
	public static readonly DECIMAL_FLOAT_LIT = 71;
	public static readonly HEX_FLOAT_LIT = 72;
	public static readonly IMAGINARY_LIT = 73;
	public static readonly RUNE_LIT = 74;
	public static readonly BYTE_VALUE = 75;
	public static readonly OCTAL_BYTE_VALUE = 76;
	public static readonly HEX_BYTE_VALUE = 77;
	public static readonly LITTLE_U_VALUE = 78;
	public static readonly BIG_U_VALUE = 79;
	public static readonly RAW_STRING_LIT = 80;
	public static readonly INTERPRETED_STRING_LIT = 81;
	public static readonly WS = 82;
	public static readonly COMMENT = 83;
	public static readonly TERMINATOR = 84;
	public static readonly LINE_COMMENT = 85;
	public static readonly WS_NLSEMI = 86;
	public static readonly COMMENT_NLSEMI = 87;
	public static readonly LINE_COMMENT_NLSEMI = 88;
	public static readonly EOS = 89;
	public static readonly OTHER = 90;
	public static readonly EOF = Token.EOF;
	public static readonly RULE_sourceFile = 0;
	public static readonly RULE_declaration = 1;
	public static readonly RULE_constDecl = 2;
	public static readonly RULE_identifierList = 3;
	public static readonly RULE_expressionList = 4;
	public static readonly RULE_functionDecl = 5;
	public static readonly RULE_varDecl = 6;
	public static readonly RULE_block = 7;
	public static readonly RULE_statementList = 8;
	public static readonly RULE_statement = 9;
	public static readonly RULE_simpleStmt = 10;
	public static readonly RULE_expressionStmt = 11;
	public static readonly RULE_sendStmt = 12;
	public static readonly RULE_assignment = 13;
	public static readonly RULE_returnStmt = 14;
	public static readonly RULE_ifStmt = 15;
	public static readonly RULE_forStmt = 16;
	public static readonly RULE_goStmt = 17;
	public static readonly RULE_methodSpec = 18;
	public static readonly RULE_parameters = 19;
	public static readonly RULE_expression = 20;
	public static readonly RULE_primaryExpr = 21;
	public static readonly RULE_operand = 22;
	public static readonly RULE_basicLit = 23;
	public static readonly RULE_string_ = 24;
	public static readonly RULE_functionLit = 25;
	public static readonly RULE_arguments = 26;
	public static readonly RULE_eos = 27;
	public static readonly literalNames: (string | null)[] = [ null, "'break'", 
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
                                                            "'<-'" ];
	public static readonly symbolicNames: (string | null)[] = [ null, "BREAK", 
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
                                                             "EOS", "OTHER" ];
	// tslint:disable:no-trailing-whitespace
	public static readonly ruleNames: string[] = [
		"sourceFile", "declaration", "constDecl", "identifierList", "expressionList", 
		"functionDecl", "varDecl", "block", "statementList", "statement", "simpleStmt", 
		"expressionStmt", "sendStmt", "assignment", "returnStmt", "ifStmt", "forStmt", 
		"goStmt", "methodSpec", "parameters", "expression", "primaryExpr", "operand", 
		"basicLit", "string_", "functionLit", "arguments", "eos",
	];
	public get grammarFileName(): string { return "GoParserUntyped.g4"; }
	public get literalNames(): (string | null)[] { return GoParserUntyped.literalNames; }
	public get symbolicNames(): (string | null)[] { return GoParserUntyped.symbolicNames; }
	public get ruleNames(): string[] { return GoParserUntyped.ruleNames; }
	public get serializedATN(): number[] { return GoParserUntyped._serializedATN; }

	protected createFailedPredicateException(predicate?: string, message?: string): FailedPredicateException {
		return new FailedPredicateException(this, predicate, message);
	}

	constructor(input: TokenStream) {
		super(input);
		this._interp = new ParserATNSimulator(this, GoParserUntyped._ATN, GoParserUntyped.DecisionsToDFA, new PredictionContextCache());
	}
	// @RuleVersion(0)
	public sourceFile(): SourceFileContext {
		let localctx: SourceFileContext = new SourceFileContext(this, this._ctx, this.state);
		this.enterRule(localctx, 0, GoParserUntyped.RULE_sourceFile);
		let _la: number;
		try {
			this.enterOuterAlt(localctx, 1);
			{
			this.state = 64;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			while ((((_la) & ~0x1F) === 0 && ((1 << _la) & 33619976) !== 0)) {
				{
				{
				this.state = 58;
				this._errHandler.sync(this);
				switch (this._input.LA(1)) {
				case 3:
					{
					this.state = 56;
					this.functionDecl();
					}
					break;
				case 16:
				case 25:
					{
					this.state = 57;
					this.declaration();
					}
					break;
				default:
					throw new NoViableAltException(this);
				}
				this.state = 60;
				this.eos();
				}
				}
				this.state = 66;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
			}
			this.state = 67;
			this.match(GoParserUntyped.EOF);
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return localctx;
	}
	// @RuleVersion(0)
	public declaration(): DeclarationContext {
		let localctx: DeclarationContext = new DeclarationContext(this, this._ctx, this.state);
		this.enterRule(localctx, 2, GoParserUntyped.RULE_declaration);
		try {
			this.state = 71;
			this._errHandler.sync(this);
			switch (this._input.LA(1)) {
			case 16:
				this.enterOuterAlt(localctx, 1);
				{
				this.state = 69;
				this.constDecl();
				}
				break;
			case 25:
				this.enterOuterAlt(localctx, 2);
				{
				this.state = 70;
				this.varDecl();
				}
				break;
			default:
				throw new NoViableAltException(this);
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return localctx;
	}
	// @RuleVersion(0)
	public constDecl(): ConstDeclContext {
		let localctx: ConstDeclContext = new ConstDeclContext(this, this._ctx, this.state);
		this.enterRule(localctx, 4, GoParserUntyped.RULE_constDecl);
		try {
			this.enterOuterAlt(localctx, 1);
			{
			this.state = 73;
			this.match(GoParserUntyped.CONST);
			this.state = 74;
			this.match(GoParserUntyped.IDENTIFIER);
			this.state = 75;
			this.match(GoParserUntyped.ASSIGN);
			this.state = 76;
			this.expression(0);
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return localctx;
	}
	// @RuleVersion(0)
	public identifierList(): IdentifierListContext {
		let localctx: IdentifierListContext = new IdentifierListContext(this, this._ctx, this.state);
		this.enterRule(localctx, 6, GoParserUntyped.RULE_identifierList);
		let _la: number;
		try {
			this.enterOuterAlt(localctx, 1);
			{
			this.state = 78;
			this.match(GoParserUntyped.IDENTIFIER);
			this.state = 83;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			while (_la===36) {
				{
				{
				this.state = 79;
				this.match(GoParserUntyped.COMMA);
				this.state = 80;
				this.match(GoParserUntyped.IDENTIFIER);
				}
				}
				this.state = 85;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
			}
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return localctx;
	}
	// @RuleVersion(0)
	public expressionList(): ExpressionListContext {
		let localctx: ExpressionListContext = new ExpressionListContext(this, this._ctx, this.state);
		this.enterRule(localctx, 8, GoParserUntyped.RULE_expressionList);
		let _la: number;
		try {
			this.enterOuterAlt(localctx, 1);
			{
			this.state = 86;
			this.expression(0);
			this.state = 91;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			while (_la===36) {
				{
				{
				this.state = 87;
				this.match(GoParserUntyped.COMMA);
				this.state = 88;
				this.expression(0);
				}
				}
				this.state = 93;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
			}
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return localctx;
	}
	// @RuleVersion(0)
	public functionDecl(): FunctionDeclContext {
		let localctx: FunctionDeclContext = new FunctionDeclContext(this, this._ctx, this.state);
		this.enterRule(localctx, 10, GoParserUntyped.RULE_functionDecl);
		try {
			this.enterOuterAlt(localctx, 1);
			{
			this.state = 94;
			this.match(GoParserUntyped.FUNC);
			this.state = 95;
			this.match(GoParserUntyped.IDENTIFIER);
			this.state = 96;
			this.parameters();
			this.state = 97;
			this.block();
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return localctx;
	}
	// @RuleVersion(0)
	public varDecl(): VarDeclContext {
		let localctx: VarDeclContext = new VarDeclContext(this, this._ctx, this.state);
		this.enterRule(localctx, 12, GoParserUntyped.RULE_varDecl);
		try {
			this.enterOuterAlt(localctx, 1);
			{
			this.state = 99;
			this.match(GoParserUntyped.VAR);
			this.state = 100;
			this.match(GoParserUntyped.IDENTIFIER);
			this.state = 101;
			this.match(GoParserUntyped.ASSIGN);
			this.state = 102;
			this.expression(0);
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return localctx;
	}
	// @RuleVersion(0)
	public block(): BlockContext {
		let localctx: BlockContext = new BlockContext(this, this._ctx, this.state);
		this.enterRule(localctx, 14, GoParserUntyped.RULE_block);
		try {
			this.enterOuterAlt(localctx, 1);
			{
			this.state = 104;
			this.match(GoParserUntyped.L_CURLY);
			this.state = 106;
			this._errHandler.sync(this);
			switch ( this._interp.adaptivePredict(this._input, 5, this._ctx) ) {
			case 1:
				{
				this.state = 105;
				this.statementList();
				}
				break;
			}
			this.state = 108;
			this.match(GoParserUntyped.R_CURLY);
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return localctx;
	}
	// @RuleVersion(0)
	public statementList(): StatementListContext {
		let localctx: StatementListContext = new StatementListContext(this, this._ctx, this.state);
		this.enterRule(localctx, 16, GoParserUntyped.RULE_statementList);
		let _la: number;
		try {
			let _alt: number;
			this.enterOuterAlt(localctx, 1);
			{
			this.state = 122;
			this._errHandler.sync(this);
			_alt = 1;
			do {
				switch (_alt) {
				case 1:
					{
					{
					this.state = 117;
					this._errHandler.sync(this);
					switch ( this._interp.adaptivePredict(this._input, 8, this._ctx) ) {
					case 1:
						{
						this.state = 111;
						this._errHandler.sync(this);
						_la = this._input.LA(1);
						if (_la===37) {
							{
							this.state = 110;
							this.match(GoParserUntyped.SEMI);
							}
						}

						}
						break;
					case 2:
						{
						this.state = 114;
						this._errHandler.sync(this);
						_la = this._input.LA(1);
						if (_la===89) {
							{
							this.state = 113;
							this.match(GoParserUntyped.EOS);
							}
						}

						}
						break;
					case 3:
						{
						this.state = 116;
						if (!(this.closingBracket())) {
							throw this.createFailedPredicateException("this.closingBracket()");
						}
						}
						break;
					}
					this.state = 119;
					this.statement();
					this.state = 120;
					this.eos();
					}
					}
					break;
				default:
					throw new NoViableAltException(this);
				}
				this.state = 124;
				this._errHandler.sync(this);
				_alt = this._interp.adaptivePredict(this._input, 9, this._ctx);
			} while (_alt !== 2 && _alt !== ATN.INVALID_ALT_NUMBER);
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return localctx;
	}
	// @RuleVersion(0)
	public statement(): StatementContext {
		let localctx: StatementContext = new StatementContext(this, this._ctx, this.state);
		this.enterRule(localctx, 18, GoParserUntyped.RULE_statement);
		try {
			this.state = 133;
			this._errHandler.sync(this);
			switch (this._input.LA(1)) {
			case 16:
			case 25:
				this.enterOuterAlt(localctx, 1);
				{
				this.state = 126;
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
				this.state = 127;
				this.simpleStmt();
				}
				break;
			case 8:
				this.enterOuterAlt(localctx, 3);
				{
				this.state = 128;
				this.goStmt();
				}
				break;
			case 24:
				this.enterOuterAlt(localctx, 4);
				{
				this.state = 129;
				this.returnStmt();
				}
				break;
			case 31:
				this.enterOuterAlt(localctx, 5);
				{
				this.state = 130;
				this.block();
				}
				break;
			case 18:
				this.enterOuterAlt(localctx, 6);
				{
				this.state = 131;
				this.ifStmt();
				}
				break;
			case 22:
				this.enterOuterAlt(localctx, 7);
				{
				this.state = 132;
				this.forStmt();
				}
				break;
			default:
				throw new NoViableAltException(this);
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return localctx;
	}
	// @RuleVersion(0)
	public simpleStmt(): SimpleStmtContext {
		let localctx: SimpleStmtContext = new SimpleStmtContext(this, this._ctx, this.state);
		this.enterRule(localctx, 20, GoParserUntyped.RULE_simpleStmt);
		try {
			this.state = 138;
			this._errHandler.sync(this);
			switch ( this._interp.adaptivePredict(this._input, 11, this._ctx) ) {
			case 1:
				this.enterOuterAlt(localctx, 1);
				{
				this.state = 135;
				this.sendStmt();
				}
				break;
			case 2:
				this.enterOuterAlt(localctx, 2);
				{
				this.state = 136;
				this.assignment();
				}
				break;
			case 3:
				this.enterOuterAlt(localctx, 3);
				{
				this.state = 137;
				this.expressionStmt();
				}
				break;
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return localctx;
	}
	// @RuleVersion(0)
	public expressionStmt(): ExpressionStmtContext {
		let localctx: ExpressionStmtContext = new ExpressionStmtContext(this, this._ctx, this.state);
		this.enterRule(localctx, 22, GoParserUntyped.RULE_expressionStmt);
		try {
			this.enterOuterAlt(localctx, 1);
			{
			this.state = 140;
			this.expression(0);
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return localctx;
	}
	// @RuleVersion(0)
	public sendStmt(): SendStmtContext {
		let localctx: SendStmtContext = new SendStmtContext(this, this._ctx, this.state);
		this.enterRule(localctx, 24, GoParserUntyped.RULE_sendStmt);
		try {
			this.enterOuterAlt(localctx, 1);
			{
			this.state = 142;
			localctx._channel = this.match(GoParserUntyped.IDENTIFIER);
			this.state = 143;
			this.match(GoParserUntyped.RECEIVE);
			this.state = 144;
			this.expression(0);
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return localctx;
	}
	// @RuleVersion(0)
	public assignment(): AssignmentContext {
		let localctx: AssignmentContext = new AssignmentContext(this, this._ctx, this.state);
		this.enterRule(localctx, 26, GoParserUntyped.RULE_assignment);
		let _la: number;
		try {
			this.enterOuterAlt(localctx, 1);
			{
			this.state = 147;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (_la===63) {
				{
				this.state = 146;
				this.match(GoParserUntyped.STAR);
				}
			}

			this.state = 149;
			this.match(GoParserUntyped.IDENTIFIER);
			this.state = 150;
			this.match(GoParserUntyped.ASSIGN);
			this.state = 151;
			this.expression(0);
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return localctx;
	}
	// @RuleVersion(0)
	public returnStmt(): ReturnStmtContext {
		let localctx: ReturnStmtContext = new ReturnStmtContext(this, this._ctx, this.state);
		this.enterRule(localctx, 28, GoParserUntyped.RULE_returnStmt);
		try {
			this.enterOuterAlt(localctx, 1);
			{
			this.state = 153;
			this.match(GoParserUntyped.RETURN);
			this.state = 154;
			this.expression(0);
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return localctx;
	}
	// @RuleVersion(0)
	public ifStmt(): IfStmtContext {
		let localctx: IfStmtContext = new IfStmtContext(this, this._ctx, this.state);
		this.enterRule(localctx, 30, GoParserUntyped.RULE_ifStmt);
		try {
			this.enterOuterAlt(localctx, 1);
			{
			this.state = 156;
			this.match(GoParserUntyped.IF);
			this.state = 161;
			this._errHandler.sync(this);
			switch ( this._interp.adaptivePredict(this._input, 13, this._ctx) ) {
			case 1:
				{
				this.state = 157;
				this.expression(0);
				}
				break;
			case 2:
				{
				this.state = 158;
				this.eos();
				this.state = 159;
				this.expression(0);
				}
				break;
			}
			this.state = 163;
			this.block();
			this.state = 169;
			this._errHandler.sync(this);
			switch ( this._interp.adaptivePredict(this._input, 15, this._ctx) ) {
			case 1:
				{
				this.state = 164;
				this.match(GoParserUntyped.ELSE);
				this.state = 167;
				this._errHandler.sync(this);
				switch (this._input.LA(1)) {
				case 18:
					{
					this.state = 165;
					this.ifStmt();
					}
					break;
				case 31:
					{
					this.state = 166;
					this.block();
					}
					break;
				default:
					throw new NoViableAltException(this);
				}
				}
				break;
			}
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return localctx;
	}
	// @RuleVersion(0)
	public forStmt(): ForStmtContext {
		let localctx: ForStmtContext = new ForStmtContext(this, this._ctx, this.state);
		this.enterRule(localctx, 32, GoParserUntyped.RULE_forStmt);
		try {
			this.enterOuterAlt(localctx, 1);
			{
			this.state = 171;
			this.match(GoParserUntyped.FOR);
			this.state = 172;
			this.expression(0);
			this.state = 173;
			this.block();
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return localctx;
	}
	// @RuleVersion(0)
	public goStmt(): GoStmtContext {
		let localctx: GoStmtContext = new GoStmtContext(this, this._ctx, this.state);
		this.enterRule(localctx, 34, GoParserUntyped.RULE_goStmt);
		try {
			this.enterOuterAlt(localctx, 1);
			{
			this.state = 175;
			this.match(GoParserUntyped.GO);
			this.state = 176;
			this.primaryExpr(0);
			this.state = 177;
			this.arguments();
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return localctx;
	}
	// @RuleVersion(0)
	public methodSpec(): MethodSpecContext {
		let localctx: MethodSpecContext = new MethodSpecContext(this, this._ctx, this.state);
		this.enterRule(localctx, 36, GoParserUntyped.RULE_methodSpec);
		try {
			this.enterOuterAlt(localctx, 1);
			{
			this.state = 179;
			this.match(GoParserUntyped.IDENTIFIER);
			this.state = 180;
			this.parameters();
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return localctx;
	}
	// @RuleVersion(0)
	public parameters(): ParametersContext {
		let localctx: ParametersContext = new ParametersContext(this, this._ctx, this.state);
		this.enterRule(localctx, 38, GoParserUntyped.RULE_parameters);
		let _la: number;
		try {
			this.enterOuterAlt(localctx, 1);
			{
			this.state = 182;
			this.match(GoParserUntyped.L_PAREN);
			this.state = 184;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (_la===28) {
				{
				this.state = 183;
				this.identifierList();
				}
			}

			this.state = 186;
			this.match(GoParserUntyped.R_PAREN);
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return localctx;
	}

	public expression(): ExpressionContext;
	public expression(_p: number): ExpressionContext;
	// @RuleVersion(0)
	public expression(_p?: number): ExpressionContext {
		if (_p === undefined) {
			_p = 0;
		}

		let _parentctx: ParserRuleContext = this._ctx;
		let _parentState: number = this.state;
		let localctx: ExpressionContext = new ExpressionContext(this, this._ctx, _parentState);
		let _prevctx: ExpressionContext = localctx;
		let _startState: number = 40;
		this.enterRecursionRule(localctx, 40, GoParserUntyped.RULE_expression, _p);
		let _la: number;
		try {
			let _alt: number;
			this.enterOuterAlt(localctx, 1);
			{
			this.state = 205;
			this._errHandler.sync(this);
			switch ( this._interp.adaptivePredict(this._input, 17, this._ctx) ) {
			case 1:
				{
				this.state = 189;
				this.basicLit();
				}
				break;
			case 2:
				{
				this.state = 190;
				this.primaryExpr(0);
				}
				break;
			case 3:
				{
				this.state = 191;
				this.match(GoParserUntyped.RECEIVE);
				this.state = 192;
				this.match(GoParserUntyped.IDENTIFIER);
				}
				break;
			case 4:
				{
				this.state = 193;
				this.match(GoParserUntyped.EXCLAMATION);
				this.state = 194;
				this.expression(8);
				}
				break;
			case 5:
				{
				this.state = 195;
				localctx._pointer_op = this.match(GoParserUntyped.AMPERSAND);
				this.state = 196;
				this.match(GoParserUntyped.IDENTIFIER);
				}
				break;
			case 6:
				{
				this.state = 197;
				localctx._pointer_op = this._input.LT(1);
				_la = this._input.LA(1);
				if(!(_la===63 || _la===64)) {
				    localctx._pointer_op = this._errHandler.recoverInline(this);
				}
				else {
					this._errHandler.reportMatch(this);
				    this.consume();
				}
				this.state = 198;
				this.match(GoParserUntyped.IDENTIFIER);
				}
				break;
			case 7:
				{
				this.state = 199;
				localctx._ari_unary_op = this._input.LT(1);
				_la = this._input.LA(1);
				if(!(_la===60 || _la===61)) {
				    localctx._ari_unary_op = this._errHandler.recoverInline(this);
				}
				else {
					this._errHandler.reportMatch(this);
				    this.consume();
				}
				this.state = 200;
				this.expression(5);
				}
				break;
			case 8:
				{
				this.state = 201;
				this.match(GoParserUntyped.L_PAREN);
				this.state = 202;
				this.expression(0);
				this.state = 203;
				this.match(GoParserUntyped.R_PAREN);
				}
				break;
			}
			this._ctx.stop = this._input.LT(-1);
			this.state = 218;
			this._errHandler.sync(this);
			_alt = this._interp.adaptivePredict(this._input, 19, this._ctx);
			while (_alt !== 2 && _alt !== ATN.INVALID_ALT_NUMBER) {
				if (_alt === 1) {
					if (this._parseListeners != null) {
						this.triggerExitRuleEvent();
					}
					_prevctx = localctx;
					{
					this.state = 216;
					this._errHandler.sync(this);
					switch ( this._interp.adaptivePredict(this._input, 18, this._ctx) ) {
					case 1:
						{
						localctx = new ExpressionContext(this, _parentctx, _parentState);
						this.pushNewRecursionContext(localctx, _startState, GoParserUntyped.RULE_expression);
						this.state = 207;
						if (!(this.precpred(this._ctx, 4))) {
							throw this.createFailedPredicateException("this.precpred(this._ctx, 4)");
						}
						this.state = 208;
						localctx._ari_bin_op = this._input.LT(1);
						_la = this._input.LA(1);
						if(!(((((_la - 53)) & ~0x1F) === 0 && ((1 << (_la - 53)) & 1411) !== 0))) {
						    localctx._ari_bin_op = this._errHandler.recoverInline(this);
						}
						else {
							this._errHandler.reportMatch(this);
						    this.consume();
						}
						this.state = 209;
						this.expression(5);
						}
						break;
					case 2:
						{
						localctx = new ExpressionContext(this, _parentctx, _parentState);
						this.pushNewRecursionContext(localctx, _startState, GoParserUntyped.RULE_expression);
						this.state = 210;
						if (!(this.precpred(this._ctx, 3))) {
							throw this.createFailedPredicateException("this.precpred(this._ctx, 3)");
						}
						this.state = 211;
						localctx._rel_op = this._input.LT(1);
						_la = this._input.LA(1);
						if(!(((((_la - 46)) & ~0x1F) === 0 && ((1 << (_la - 46)) & 63) !== 0))) {
						    localctx._rel_op = this._errHandler.recoverInline(this);
						}
						else {
							this._errHandler.reportMatch(this);
						    this.consume();
						}
						this.state = 212;
						this.expression(4);
						}
						break;
					case 3:
						{
						localctx = new ExpressionContext(this, _parentctx, _parentState);
						this.pushNewRecursionContext(localctx, _startState, GoParserUntyped.RULE_expression);
						this.state = 213;
						if (!(this.precpred(this._ctx, 2))) {
							throw this.createFailedPredicateException("this.precpred(this._ctx, 2)");
						}
						this.state = 214;
						localctx._log_bin_op = this._input.LT(1);
						_la = this._input.LA(1);
						if(!(_la===44 || _la===45)) {
						    localctx._log_bin_op = this._errHandler.recoverInline(this);
						}
						else {
							this._errHandler.reportMatch(this);
						    this.consume();
						}
						this.state = 215;
						this.expression(3);
						}
						break;
					}
					}
				}
				this.state = 220;
				this._errHandler.sync(this);
				_alt = this._interp.adaptivePredict(this._input, 19, this._ctx);
			}
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.unrollRecursionContexts(_parentctx);
		}
		return localctx;
	}

	public primaryExpr(): PrimaryExprContext;
	public primaryExpr(_p: number): PrimaryExprContext;
	// @RuleVersion(0)
	public primaryExpr(_p?: number): PrimaryExprContext {
		if (_p === undefined) {
			_p = 0;
		}

		let _parentctx: ParserRuleContext = this._ctx;
		let _parentState: number = this.state;
		let localctx: PrimaryExprContext = new PrimaryExprContext(this, this._ctx, _parentState);
		let _prevctx: PrimaryExprContext = localctx;
		let _startState: number = 42;
		this.enterRecursionRule(localctx, 42, GoParserUntyped.RULE_primaryExpr, _p);
		try {
			let _alt: number;
			this.enterOuterAlt(localctx, 1);
			{
			{
			this.state = 222;
			this.operand();
			}
			this._ctx.stop = this._input.LT(-1);
			this.state = 228;
			this._errHandler.sync(this);
			_alt = this._interp.adaptivePredict(this._input, 20, this._ctx);
			while (_alt !== 2 && _alt !== ATN.INVALID_ALT_NUMBER) {
				if (_alt === 1) {
					if (this._parseListeners != null) {
						this.triggerExitRuleEvent();
					}
					_prevctx = localctx;
					{
					{
					localctx = new PrimaryExprContext(this, _parentctx, _parentState);
					this.pushNewRecursionContext(localctx, _startState, GoParserUntyped.RULE_primaryExpr);
					this.state = 224;
					if (!(this.precpred(this._ctx, 1))) {
						throw this.createFailedPredicateException("this.precpred(this._ctx, 1)");
					}
					this.state = 225;
					this.arguments();
					}
					}
				}
				this.state = 230;
				this._errHandler.sync(this);
				_alt = this._interp.adaptivePredict(this._input, 20, this._ctx);
			}
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.unrollRecursionContexts(_parentctx);
		}
		return localctx;
	}
	// @RuleVersion(0)
	public operand(): OperandContext {
		let localctx: OperandContext = new OperandContext(this, this._ctx, this.state);
		this.enterRule(localctx, 44, GoParserUntyped.RULE_operand);
		try {
			this.state = 233;
			this._errHandler.sync(this);
			switch (this._input.LA(1)) {
			case 3:
				this.enterOuterAlt(localctx, 1);
				{
				this.state = 231;
				this.functionLit();
				}
				break;
			case 28:
				this.enterOuterAlt(localctx, 2);
				{
				this.state = 232;
				this.match(GoParserUntyped.IDENTIFIER);
				}
				break;
			default:
				throw new NoViableAltException(this);
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return localctx;
	}
	// @RuleVersion(0)
	public basicLit(): BasicLitContext {
		let localctx: BasicLitContext = new BasicLitContext(this, this._ctx, this.state);
		this.enterRule(localctx, 46, GoParserUntyped.RULE_basicLit);
		try {
			this.state = 239;
			this._errHandler.sync(this);
			switch (this._input.LA(1)) {
			case 27:
				this.enterOuterAlt(localctx, 1);
				{
				this.state = 235;
				this.match(GoParserUntyped.BOOL_LIT);
				}
				break;
			case 66:
				this.enterOuterAlt(localctx, 2);
				{
				this.state = 236;
				this.match(GoParserUntyped.DECIMAL_LIT);
				}
				break;
			case 80:
			case 81:
				this.enterOuterAlt(localctx, 3);
				{
				this.state = 237;
				this.string_();
				}
				break;
			case 70:
				this.enterOuterAlt(localctx, 4);
				{
				this.state = 238;
				this.match(GoParserUntyped.FLOAT_LIT);
				}
				break;
			default:
				throw new NoViableAltException(this);
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return localctx;
	}
	// @RuleVersion(0)
	public string_(): String_Context {
		let localctx: String_Context = new String_Context(this, this._ctx, this.state);
		this.enterRule(localctx, 48, GoParserUntyped.RULE_string_);
		let _la: number;
		try {
			this.enterOuterAlt(localctx, 1);
			{
			this.state = 241;
			_la = this._input.LA(1);
			if(!(_la===80 || _la===81)) {
			this._errHandler.recoverInline(this);
			}
			else {
				this._errHandler.reportMatch(this);
			    this.consume();
			}
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return localctx;
	}
	// @RuleVersion(0)
	public functionLit(): FunctionLitContext {
		let localctx: FunctionLitContext = new FunctionLitContext(this, this._ctx, this.state);
		this.enterRule(localctx, 50, GoParserUntyped.RULE_functionLit);
		try {
			this.enterOuterAlt(localctx, 1);
			{
			this.state = 243;
			this.match(GoParserUntyped.FUNC);
			this.state = 244;
			this.parameters();
			this.state = 245;
			this.block();
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return localctx;
	}
	// @RuleVersion(0)
	public arguments(): ArgumentsContext {
		let localctx: ArgumentsContext = new ArgumentsContext(this, this._ctx, this.state);
		this.enterRule(localctx, 52, GoParserUntyped.RULE_arguments);
		let _la: number;
		try {
			this.enterOuterAlt(localctx, 1);
			{
			this.state = 247;
			this.match(GoParserUntyped.L_PAREN);
			this.state = 249;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if ((((_la) & ~0x1F) === 0 && ((1 << _la) & 939524104) !== 0) || ((((_la - 59)) & ~0x1F) === 0 && ((1 << (_la - 59)) & 6293751) !== 0)) {
				{
				this.state = 248;
				this.expressionList();
				}
			}

			this.state = 251;
			this.match(GoParserUntyped.R_PAREN);
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return localctx;
	}
	// @RuleVersion(0)
	public eos(): EosContext {
		let localctx: EosContext = new EosContext(this, this._ctx, this.state);
		this.enterRule(localctx, 54, GoParserUntyped.RULE_eos);
		try {
			this.state = 257;
			this._errHandler.sync(this);
			switch ( this._interp.adaptivePredict(this._input, 24, this._ctx) ) {
			case 1:
				this.enterOuterAlt(localctx, 1);
				{
				this.state = 253;
				this.match(GoParserUntyped.SEMI);
				}
				break;
			case 2:
				this.enterOuterAlt(localctx, 2);
				{
				this.state = 254;
				this.match(GoParserUntyped.EOF);
				}
				break;
			case 3:
				this.enterOuterAlt(localctx, 3);
				{
				this.state = 255;
				this.match(GoParserUntyped.EOS);
				}
				break;
			case 4:
				this.enterOuterAlt(localctx, 4);
				{
				this.state = 256;
				if (!(this.closingBracket())) {
					throw this.createFailedPredicateException("this.closingBracket()");
				}
				}
				break;
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return localctx;
	}

	public sempred(localctx: RuleContext, ruleIndex: number, predIndex: number): boolean {
		switch (ruleIndex) {
		case 8:
			return this.statementList_sempred(localctx as StatementListContext, predIndex);
		case 20:
			return this.expression_sempred(localctx as ExpressionContext, predIndex);
		case 21:
			return this.primaryExpr_sempred(localctx as PrimaryExprContext, predIndex);
		case 27:
			return this.eos_sempred(localctx as EosContext, predIndex);
		}
		return true;
	}
	private statementList_sempred(localctx: StatementListContext, predIndex: number): boolean {
		switch (predIndex) {
		case 0:
			return this.closingBracket();
		}
		return true;
	}
	private expression_sempred(localctx: ExpressionContext, predIndex: number): boolean {
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
	private primaryExpr_sempred(localctx: PrimaryExprContext, predIndex: number): boolean {
		switch (predIndex) {
		case 4:
			return this.precpred(this._ctx, 1);
		}
		return true;
	}
	private eos_sempred(localctx: EosContext, predIndex: number): boolean {
		switch (predIndex) {
		case 5:
			return this.closingBracket();
		}
		return true;
	}

	public static readonly _serializedATN: number[] = [4,1,90,260,2,0,7,0,2,
	1,7,1,2,2,7,2,2,3,7,3,2,4,7,4,2,5,7,5,2,6,7,6,2,7,7,7,2,8,7,8,2,9,7,9,2,
	10,7,10,2,11,7,11,2,12,7,12,2,13,7,13,2,14,7,14,2,15,7,15,2,16,7,16,2,17,
	7,17,2,18,7,18,2,19,7,19,2,20,7,20,2,21,7,21,2,22,7,22,2,23,7,23,2,24,7,
	24,2,25,7,25,2,26,7,26,2,27,7,27,1,0,1,0,3,0,59,8,0,1,0,1,0,5,0,63,8,0,
	10,0,12,0,66,9,0,1,0,1,0,1,1,1,1,3,1,72,8,1,1,2,1,2,1,2,1,2,1,2,1,3,1,3,
	1,3,5,3,82,8,3,10,3,12,3,85,9,3,1,4,1,4,1,4,5,4,90,8,4,10,4,12,4,93,9,4,
	1,5,1,5,1,5,1,5,1,5,1,6,1,6,1,6,1,6,1,6,1,7,1,7,3,7,107,8,7,1,7,1,7,1,8,
	3,8,112,8,8,1,8,3,8,115,8,8,1,8,3,8,118,8,8,1,8,1,8,1,8,4,8,123,8,8,11,
	8,12,8,124,1,9,1,9,1,9,1,9,1,9,1,9,1,9,3,9,134,8,9,1,10,1,10,1,10,3,10,
	139,8,10,1,11,1,11,1,12,1,12,1,12,1,12,1,13,3,13,148,8,13,1,13,1,13,1,13,
	1,13,1,14,1,14,1,14,1,15,1,15,1,15,1,15,1,15,3,15,162,8,15,1,15,1,15,1,
	15,1,15,3,15,168,8,15,3,15,170,8,15,1,16,1,16,1,16,1,16,1,17,1,17,1,17,
	1,17,1,18,1,18,1,18,1,19,1,19,3,19,185,8,19,1,19,1,19,1,20,1,20,1,20,1,
	20,1,20,1,20,1,20,1,20,1,20,1,20,1,20,1,20,1,20,1,20,1,20,1,20,1,20,3,20,
	206,8,20,1,20,1,20,1,20,1,20,1,20,1,20,1,20,1,20,1,20,5,20,217,8,20,10,
	20,12,20,220,9,20,1,21,1,21,1,21,1,21,1,21,5,21,227,8,21,10,21,12,21,230,
	9,21,1,22,1,22,3,22,234,8,22,1,23,1,23,1,23,1,23,3,23,240,8,23,1,24,1,24,
	1,25,1,25,1,25,1,25,1,26,1,26,3,26,250,8,26,1,26,1,26,1,27,1,27,1,27,1,
	27,3,27,258,8,27,1,27,0,2,40,42,28,0,2,4,6,8,10,12,14,16,18,20,22,24,26,
	28,30,32,34,36,38,40,42,44,46,48,50,52,54,0,6,1,0,63,64,1,0,60,61,3,0,53,
	54,60,61,63,63,1,0,46,51,1,0,44,45,1,0,80,81,274,0,64,1,0,0,0,2,71,1,0,
	0,0,4,73,1,0,0,0,6,78,1,0,0,0,8,86,1,0,0,0,10,94,1,0,0,0,12,99,1,0,0,0,
	14,104,1,0,0,0,16,122,1,0,0,0,18,133,1,0,0,0,20,138,1,0,0,0,22,140,1,0,
	0,0,24,142,1,0,0,0,26,147,1,0,0,0,28,153,1,0,0,0,30,156,1,0,0,0,32,171,
	1,0,0,0,34,175,1,0,0,0,36,179,1,0,0,0,38,182,1,0,0,0,40,205,1,0,0,0,42,
	221,1,0,0,0,44,233,1,0,0,0,46,239,1,0,0,0,48,241,1,0,0,0,50,243,1,0,0,0,
	52,247,1,0,0,0,54,257,1,0,0,0,56,59,3,10,5,0,57,59,3,2,1,0,58,56,1,0,0,
	0,58,57,1,0,0,0,59,60,1,0,0,0,60,61,3,54,27,0,61,63,1,0,0,0,62,58,1,0,0,
	0,63,66,1,0,0,0,64,62,1,0,0,0,64,65,1,0,0,0,65,67,1,0,0,0,66,64,1,0,0,0,
	67,68,5,0,0,1,68,1,1,0,0,0,69,72,3,4,2,0,70,72,3,12,6,0,71,69,1,0,0,0,71,
	70,1,0,0,0,72,3,1,0,0,0,73,74,5,16,0,0,74,75,5,28,0,0,75,76,5,35,0,0,76,
	77,3,40,20,0,77,5,1,0,0,0,78,83,5,28,0,0,79,80,5,36,0,0,80,82,5,28,0,0,
	81,79,1,0,0,0,82,85,1,0,0,0,83,81,1,0,0,0,83,84,1,0,0,0,84,7,1,0,0,0,85,
	83,1,0,0,0,86,91,3,40,20,0,87,88,5,36,0,0,88,90,3,40,20,0,89,87,1,0,0,0,
	90,93,1,0,0,0,91,89,1,0,0,0,91,92,1,0,0,0,92,9,1,0,0,0,93,91,1,0,0,0,94,
	95,5,3,0,0,95,96,5,28,0,0,96,97,3,38,19,0,97,98,3,14,7,0,98,11,1,0,0,0,
	99,100,5,25,0,0,100,101,5,28,0,0,101,102,5,35,0,0,102,103,3,40,20,0,103,
	13,1,0,0,0,104,106,5,31,0,0,105,107,3,16,8,0,106,105,1,0,0,0,106,107,1,
	0,0,0,107,108,1,0,0,0,108,109,5,32,0,0,109,15,1,0,0,0,110,112,5,37,0,0,
	111,110,1,0,0,0,111,112,1,0,0,0,112,118,1,0,0,0,113,115,5,89,0,0,114,113,
	1,0,0,0,114,115,1,0,0,0,115,118,1,0,0,0,116,118,4,8,0,0,117,111,1,0,0,0,
	117,114,1,0,0,0,117,116,1,0,0,0,118,119,1,0,0,0,119,120,3,18,9,0,120,121,
	3,54,27,0,121,123,1,0,0,0,122,117,1,0,0,0,123,124,1,0,0,0,124,122,1,0,0,
	0,124,125,1,0,0,0,125,17,1,0,0,0,126,134,3,2,1,0,127,134,3,20,10,0,128,
	134,3,34,17,0,129,134,3,28,14,0,130,134,3,14,7,0,131,134,3,30,15,0,132,
	134,3,32,16,0,133,126,1,0,0,0,133,127,1,0,0,0,133,128,1,0,0,0,133,129,1,
	0,0,0,133,130,1,0,0,0,133,131,1,0,0,0,133,132,1,0,0,0,134,19,1,0,0,0,135,
	139,3,24,12,0,136,139,3,26,13,0,137,139,3,22,11,0,138,135,1,0,0,0,138,136,
	1,0,0,0,138,137,1,0,0,0,139,21,1,0,0,0,140,141,3,40,20,0,141,23,1,0,0,0,
	142,143,5,28,0,0,143,144,5,65,0,0,144,145,3,40,20,0,145,25,1,0,0,0,146,
	148,5,63,0,0,147,146,1,0,0,0,147,148,1,0,0,0,148,149,1,0,0,0,149,150,5,
	28,0,0,150,151,5,35,0,0,151,152,3,40,20,0,152,27,1,0,0,0,153,154,5,24,0,
	0,154,155,3,40,20,0,155,29,1,0,0,0,156,161,5,18,0,0,157,162,3,40,20,0,158,
	159,3,54,27,0,159,160,3,40,20,0,160,162,1,0,0,0,161,157,1,0,0,0,161,158,
	1,0,0,0,162,163,1,0,0,0,163,169,3,14,7,0,164,167,5,12,0,0,165,168,3,30,
	15,0,166,168,3,14,7,0,167,165,1,0,0,0,167,166,1,0,0,0,168,170,1,0,0,0,169,
	164,1,0,0,0,169,170,1,0,0,0,170,31,1,0,0,0,171,172,5,22,0,0,172,173,3,40,
	20,0,173,174,3,14,7,0,174,33,1,0,0,0,175,176,5,8,0,0,176,177,3,42,21,0,
	177,178,3,52,26,0,178,35,1,0,0,0,179,180,5,28,0,0,180,181,3,38,19,0,181,
	37,1,0,0,0,182,184,5,29,0,0,183,185,3,6,3,0,184,183,1,0,0,0,184,185,1,0,
	0,0,185,186,1,0,0,0,186,187,5,30,0,0,187,39,1,0,0,0,188,189,6,20,-1,0,189,
	206,3,46,23,0,190,206,3,42,21,0,191,192,5,65,0,0,192,206,5,28,0,0,193,194,
	5,59,0,0,194,206,3,40,20,8,195,196,5,64,0,0,196,206,5,28,0,0,197,198,7,
	0,0,0,198,206,5,28,0,0,199,200,7,1,0,0,200,206,3,40,20,5,201,202,5,29,0,
	0,202,203,3,40,20,0,203,204,5,30,0,0,204,206,1,0,0,0,205,188,1,0,0,0,205,
	190,1,0,0,0,205,191,1,0,0,0,205,193,1,0,0,0,205,195,1,0,0,0,205,197,1,0,
	0,0,205,199,1,0,0,0,205,201,1,0,0,0,206,218,1,0,0,0,207,208,10,4,0,0,208,
	209,7,2,0,0,209,217,3,40,20,5,210,211,10,3,0,0,211,212,7,3,0,0,212,217,
	3,40,20,4,213,214,10,2,0,0,214,215,7,4,0,0,215,217,3,40,20,3,216,207,1,
	0,0,0,216,210,1,0,0,0,216,213,1,0,0,0,217,220,1,0,0,0,218,216,1,0,0,0,218,
	219,1,0,0,0,219,41,1,0,0,0,220,218,1,0,0,0,221,222,6,21,-1,0,222,223,3,
	44,22,0,223,228,1,0,0,0,224,225,10,1,0,0,225,227,3,52,26,0,226,224,1,0,
	0,0,227,230,1,0,0,0,228,226,1,0,0,0,228,229,1,0,0,0,229,43,1,0,0,0,230,
	228,1,0,0,0,231,234,3,50,25,0,232,234,5,28,0,0,233,231,1,0,0,0,233,232,
	1,0,0,0,234,45,1,0,0,0,235,240,5,27,0,0,236,240,5,66,0,0,237,240,3,48,24,
	0,238,240,5,70,0,0,239,235,1,0,0,0,239,236,1,0,0,0,239,237,1,0,0,0,239,
	238,1,0,0,0,240,47,1,0,0,0,241,242,7,5,0,0,242,49,1,0,0,0,243,244,5,3,0,
	0,244,245,3,38,19,0,245,246,3,14,7,0,246,51,1,0,0,0,247,249,5,29,0,0,248,
	250,3,8,4,0,249,248,1,0,0,0,249,250,1,0,0,0,250,251,1,0,0,0,251,252,5,30,
	0,0,252,53,1,0,0,0,253,258,5,37,0,0,254,258,5,0,0,1,255,258,5,89,0,0,256,
	258,4,27,5,0,257,253,1,0,0,0,257,254,1,0,0,0,257,255,1,0,0,0,257,256,1,
	0,0,0,258,55,1,0,0,0,25,58,64,71,83,91,106,111,114,117,124,133,138,147,
	161,167,169,184,205,216,218,228,233,239,249,257];

	private static __ATN: ATN;
	public static get _ATN(): ATN {
		if (!GoParserUntyped.__ATN) {
			GoParserUntyped.__ATN = new ATNDeserializer().deserialize(GoParserUntyped._serializedATN);
		}

		return GoParserUntyped.__ATN;
	}


	static DecisionsToDFA = GoParserUntyped._ATN.decisionToState.map( (ds: DecisionState, index: number) => new DFA(ds, index) );

}

export class SourceFileContext extends ParserRuleContext {
	constructor(parser?: GoParserUntyped, parent?: ParserRuleContext, invokingState?: number) {
		super(parent, invokingState);
    	this.parser = parser;
	}
	public EOF(): TerminalNode {
		return this.getToken(GoParserUntyped.EOF, 0);
	}
	public eos_list(): EosContext[] {
		return this.getTypedRuleContexts(EosContext) as EosContext[];
	}
	public eos(i: number): EosContext {
		return this.getTypedRuleContext(EosContext, i) as EosContext;
	}
	public functionDecl_list(): FunctionDeclContext[] {
		return this.getTypedRuleContexts(FunctionDeclContext) as FunctionDeclContext[];
	}
	public functionDecl(i: number): FunctionDeclContext {
		return this.getTypedRuleContext(FunctionDeclContext, i) as FunctionDeclContext;
	}
	public declaration_list(): DeclarationContext[] {
		return this.getTypedRuleContexts(DeclarationContext) as DeclarationContext[];
	}
	public declaration(i: number): DeclarationContext {
		return this.getTypedRuleContext(DeclarationContext, i) as DeclarationContext;
	}
    public get ruleIndex(): number {
    	return GoParserUntyped.RULE_sourceFile;
	}
	// @Override
	public accept<Result>(visitor: GoParserUntypedVisitor<Result>): Result {
		if (visitor.visitSourceFile) {
			return visitor.visitSourceFile(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class DeclarationContext extends ParserRuleContext {
	constructor(parser?: GoParserUntyped, parent?: ParserRuleContext, invokingState?: number) {
		super(parent, invokingState);
    	this.parser = parser;
	}
	public constDecl(): ConstDeclContext {
		return this.getTypedRuleContext(ConstDeclContext, 0) as ConstDeclContext;
	}
	public varDecl(): VarDeclContext {
		return this.getTypedRuleContext(VarDeclContext, 0) as VarDeclContext;
	}
    public get ruleIndex(): number {
    	return GoParserUntyped.RULE_declaration;
	}
	// @Override
	public accept<Result>(visitor: GoParserUntypedVisitor<Result>): Result {
		if (visitor.visitDeclaration) {
			return visitor.visitDeclaration(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class ConstDeclContext extends ParserRuleContext {
	constructor(parser?: GoParserUntyped, parent?: ParserRuleContext, invokingState?: number) {
		super(parent, invokingState);
    	this.parser = parser;
	}
	public CONST(): TerminalNode {
		return this.getToken(GoParserUntyped.CONST, 0);
	}
	public IDENTIFIER(): TerminalNode {
		return this.getToken(GoParserUntyped.IDENTIFIER, 0);
	}
	public ASSIGN(): TerminalNode {
		return this.getToken(GoParserUntyped.ASSIGN, 0);
	}
	public expression(): ExpressionContext {
		return this.getTypedRuleContext(ExpressionContext, 0) as ExpressionContext;
	}
    public get ruleIndex(): number {
    	return GoParserUntyped.RULE_constDecl;
	}
	// @Override
	public accept<Result>(visitor: GoParserUntypedVisitor<Result>): Result {
		if (visitor.visitConstDecl) {
			return visitor.visitConstDecl(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class IdentifierListContext extends ParserRuleContext {
	constructor(parser?: GoParserUntyped, parent?: ParserRuleContext, invokingState?: number) {
		super(parent, invokingState);
    	this.parser = parser;
	}
	public IDENTIFIER_list(): TerminalNode[] {
	    	return this.getTokens(GoParserUntyped.IDENTIFIER);
	}
	public IDENTIFIER(i: number): TerminalNode {
		return this.getToken(GoParserUntyped.IDENTIFIER, i);
	}
	public COMMA_list(): TerminalNode[] {
	    	return this.getTokens(GoParserUntyped.COMMA);
	}
	public COMMA(i: number): TerminalNode {
		return this.getToken(GoParserUntyped.COMMA, i);
	}
    public get ruleIndex(): number {
    	return GoParserUntyped.RULE_identifierList;
	}
	// @Override
	public accept<Result>(visitor: GoParserUntypedVisitor<Result>): Result {
		if (visitor.visitIdentifierList) {
			return visitor.visitIdentifierList(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class ExpressionListContext extends ParserRuleContext {
	constructor(parser?: GoParserUntyped, parent?: ParserRuleContext, invokingState?: number) {
		super(parent, invokingState);
    	this.parser = parser;
	}
	public expression_list(): ExpressionContext[] {
		return this.getTypedRuleContexts(ExpressionContext) as ExpressionContext[];
	}
	public expression(i: number): ExpressionContext {
		return this.getTypedRuleContext(ExpressionContext, i) as ExpressionContext;
	}
	public COMMA_list(): TerminalNode[] {
	    	return this.getTokens(GoParserUntyped.COMMA);
	}
	public COMMA(i: number): TerminalNode {
		return this.getToken(GoParserUntyped.COMMA, i);
	}
    public get ruleIndex(): number {
    	return GoParserUntyped.RULE_expressionList;
	}
	// @Override
	public accept<Result>(visitor: GoParserUntypedVisitor<Result>): Result {
		if (visitor.visitExpressionList) {
			return visitor.visitExpressionList(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class FunctionDeclContext extends ParserRuleContext {
	constructor(parser?: GoParserUntyped, parent?: ParserRuleContext, invokingState?: number) {
		super(parent, invokingState);
    	this.parser = parser;
	}
	public FUNC(): TerminalNode {
		return this.getToken(GoParserUntyped.FUNC, 0);
	}
	public IDENTIFIER(): TerminalNode {
		return this.getToken(GoParserUntyped.IDENTIFIER, 0);
	}
	public parameters(): ParametersContext {
		return this.getTypedRuleContext(ParametersContext, 0) as ParametersContext;
	}
	public block(): BlockContext {
		return this.getTypedRuleContext(BlockContext, 0) as BlockContext;
	}
    public get ruleIndex(): number {
    	return GoParserUntyped.RULE_functionDecl;
	}
	// @Override
	public accept<Result>(visitor: GoParserUntypedVisitor<Result>): Result {
		if (visitor.visitFunctionDecl) {
			return visitor.visitFunctionDecl(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class VarDeclContext extends ParserRuleContext {
	constructor(parser?: GoParserUntyped, parent?: ParserRuleContext, invokingState?: number) {
		super(parent, invokingState);
    	this.parser = parser;
	}
	public VAR(): TerminalNode {
		return this.getToken(GoParserUntyped.VAR, 0);
	}
	public IDENTIFIER(): TerminalNode {
		return this.getToken(GoParserUntyped.IDENTIFIER, 0);
	}
	public ASSIGN(): TerminalNode {
		return this.getToken(GoParserUntyped.ASSIGN, 0);
	}
	public expression(): ExpressionContext {
		return this.getTypedRuleContext(ExpressionContext, 0) as ExpressionContext;
	}
    public get ruleIndex(): number {
    	return GoParserUntyped.RULE_varDecl;
	}
	// @Override
	public accept<Result>(visitor: GoParserUntypedVisitor<Result>): Result {
		if (visitor.visitVarDecl) {
			return visitor.visitVarDecl(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class BlockContext extends ParserRuleContext {
	constructor(parser?: GoParserUntyped, parent?: ParserRuleContext, invokingState?: number) {
		super(parent, invokingState);
    	this.parser = parser;
	}
	public L_CURLY(): TerminalNode {
		return this.getToken(GoParserUntyped.L_CURLY, 0);
	}
	public R_CURLY(): TerminalNode {
		return this.getToken(GoParserUntyped.R_CURLY, 0);
	}
	public statementList(): StatementListContext {
		return this.getTypedRuleContext(StatementListContext, 0) as StatementListContext;
	}
    public get ruleIndex(): number {
    	return GoParserUntyped.RULE_block;
	}
	// @Override
	public accept<Result>(visitor: GoParserUntypedVisitor<Result>): Result {
		if (visitor.visitBlock) {
			return visitor.visitBlock(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class StatementListContext extends ParserRuleContext {
	constructor(parser?: GoParserUntyped, parent?: ParserRuleContext, invokingState?: number) {
		super(parent, invokingState);
    	this.parser = parser;
	}
	public statement_list(): StatementContext[] {
		return this.getTypedRuleContexts(StatementContext) as StatementContext[];
	}
	public statement(i: number): StatementContext {
		return this.getTypedRuleContext(StatementContext, i) as StatementContext;
	}
	public eos_list(): EosContext[] {
		return this.getTypedRuleContexts(EosContext) as EosContext[];
	}
	public eos(i: number): EosContext {
		return this.getTypedRuleContext(EosContext, i) as EosContext;
	}
	public SEMI_list(): TerminalNode[] {
	    	return this.getTokens(GoParserUntyped.SEMI);
	}
	public SEMI(i: number): TerminalNode {
		return this.getToken(GoParserUntyped.SEMI, i);
	}
	public EOS_list(): TerminalNode[] {
	    	return this.getTokens(GoParserUntyped.EOS);
	}
	public EOS(i: number): TerminalNode {
		return this.getToken(GoParserUntyped.EOS, i);
	}
    public get ruleIndex(): number {
    	return GoParserUntyped.RULE_statementList;
	}
	// @Override
	public accept<Result>(visitor: GoParserUntypedVisitor<Result>): Result {
		if (visitor.visitStatementList) {
			return visitor.visitStatementList(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class StatementContext extends ParserRuleContext {
	constructor(parser?: GoParserUntyped, parent?: ParserRuleContext, invokingState?: number) {
		super(parent, invokingState);
    	this.parser = parser;
	}
	public declaration(): DeclarationContext {
		return this.getTypedRuleContext(DeclarationContext, 0) as DeclarationContext;
	}
	public simpleStmt(): SimpleStmtContext {
		return this.getTypedRuleContext(SimpleStmtContext, 0) as SimpleStmtContext;
	}
	public goStmt(): GoStmtContext {
		return this.getTypedRuleContext(GoStmtContext, 0) as GoStmtContext;
	}
	public returnStmt(): ReturnStmtContext {
		return this.getTypedRuleContext(ReturnStmtContext, 0) as ReturnStmtContext;
	}
	public block(): BlockContext {
		return this.getTypedRuleContext(BlockContext, 0) as BlockContext;
	}
	public ifStmt(): IfStmtContext {
		return this.getTypedRuleContext(IfStmtContext, 0) as IfStmtContext;
	}
	public forStmt(): ForStmtContext {
		return this.getTypedRuleContext(ForStmtContext, 0) as ForStmtContext;
	}
    public get ruleIndex(): number {
    	return GoParserUntyped.RULE_statement;
	}
	// @Override
	public accept<Result>(visitor: GoParserUntypedVisitor<Result>): Result {
		if (visitor.visitStatement) {
			return visitor.visitStatement(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class SimpleStmtContext extends ParserRuleContext {
	constructor(parser?: GoParserUntyped, parent?: ParserRuleContext, invokingState?: number) {
		super(parent, invokingState);
    	this.parser = parser;
	}
	public sendStmt(): SendStmtContext {
		return this.getTypedRuleContext(SendStmtContext, 0) as SendStmtContext;
	}
	public assignment(): AssignmentContext {
		return this.getTypedRuleContext(AssignmentContext, 0) as AssignmentContext;
	}
	public expressionStmt(): ExpressionStmtContext {
		return this.getTypedRuleContext(ExpressionStmtContext, 0) as ExpressionStmtContext;
	}
    public get ruleIndex(): number {
    	return GoParserUntyped.RULE_simpleStmt;
	}
	// @Override
	public accept<Result>(visitor: GoParserUntypedVisitor<Result>): Result {
		if (visitor.visitSimpleStmt) {
			return visitor.visitSimpleStmt(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class ExpressionStmtContext extends ParserRuleContext {
	constructor(parser?: GoParserUntyped, parent?: ParserRuleContext, invokingState?: number) {
		super(parent, invokingState);
    	this.parser = parser;
	}
	public expression(): ExpressionContext {
		return this.getTypedRuleContext(ExpressionContext, 0) as ExpressionContext;
	}
    public get ruleIndex(): number {
    	return GoParserUntyped.RULE_expressionStmt;
	}
	// @Override
	public accept<Result>(visitor: GoParserUntypedVisitor<Result>): Result {
		if (visitor.visitExpressionStmt) {
			return visitor.visitExpressionStmt(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class SendStmtContext extends ParserRuleContext {
	public _channel!: Token;
	constructor(parser?: GoParserUntyped, parent?: ParserRuleContext, invokingState?: number) {
		super(parent, invokingState);
    	this.parser = parser;
	}
	public RECEIVE(): TerminalNode {
		return this.getToken(GoParserUntyped.RECEIVE, 0);
	}
	public expression(): ExpressionContext {
		return this.getTypedRuleContext(ExpressionContext, 0) as ExpressionContext;
	}
	public IDENTIFIER(): TerminalNode {
		return this.getToken(GoParserUntyped.IDENTIFIER, 0);
	}
    public get ruleIndex(): number {
    	return GoParserUntyped.RULE_sendStmt;
	}
	// @Override
	public accept<Result>(visitor: GoParserUntypedVisitor<Result>): Result {
		if (visitor.visitSendStmt) {
			return visitor.visitSendStmt(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class AssignmentContext extends ParserRuleContext {
	constructor(parser?: GoParserUntyped, parent?: ParserRuleContext, invokingState?: number) {
		super(parent, invokingState);
    	this.parser = parser;
	}
	public IDENTIFIER(): TerminalNode {
		return this.getToken(GoParserUntyped.IDENTIFIER, 0);
	}
	public ASSIGN(): TerminalNode {
		return this.getToken(GoParserUntyped.ASSIGN, 0);
	}
	public expression(): ExpressionContext {
		return this.getTypedRuleContext(ExpressionContext, 0) as ExpressionContext;
	}
	public STAR(): TerminalNode {
		return this.getToken(GoParserUntyped.STAR, 0);
	}
    public get ruleIndex(): number {
    	return GoParserUntyped.RULE_assignment;
	}
	// @Override
	public accept<Result>(visitor: GoParserUntypedVisitor<Result>): Result {
		if (visitor.visitAssignment) {
			return visitor.visitAssignment(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class ReturnStmtContext extends ParserRuleContext {
	constructor(parser?: GoParserUntyped, parent?: ParserRuleContext, invokingState?: number) {
		super(parent, invokingState);
    	this.parser = parser;
	}
	public RETURN(): TerminalNode {
		return this.getToken(GoParserUntyped.RETURN, 0);
	}
	public expression(): ExpressionContext {
		return this.getTypedRuleContext(ExpressionContext, 0) as ExpressionContext;
	}
    public get ruleIndex(): number {
    	return GoParserUntyped.RULE_returnStmt;
	}
	// @Override
	public accept<Result>(visitor: GoParserUntypedVisitor<Result>): Result {
		if (visitor.visitReturnStmt) {
			return visitor.visitReturnStmt(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class IfStmtContext extends ParserRuleContext {
	constructor(parser?: GoParserUntyped, parent?: ParserRuleContext, invokingState?: number) {
		super(parent, invokingState);
    	this.parser = parser;
	}
	public IF(): TerminalNode {
		return this.getToken(GoParserUntyped.IF, 0);
	}
	public block_list(): BlockContext[] {
		return this.getTypedRuleContexts(BlockContext) as BlockContext[];
	}
	public block(i: number): BlockContext {
		return this.getTypedRuleContext(BlockContext, i) as BlockContext;
	}
	public expression(): ExpressionContext {
		return this.getTypedRuleContext(ExpressionContext, 0) as ExpressionContext;
	}
	public eos(): EosContext {
		return this.getTypedRuleContext(EosContext, 0) as EosContext;
	}
	public ELSE(): TerminalNode {
		return this.getToken(GoParserUntyped.ELSE, 0);
	}
	public ifStmt(): IfStmtContext {
		return this.getTypedRuleContext(IfStmtContext, 0) as IfStmtContext;
	}
    public get ruleIndex(): number {
    	return GoParserUntyped.RULE_ifStmt;
	}
	// @Override
	public accept<Result>(visitor: GoParserUntypedVisitor<Result>): Result {
		if (visitor.visitIfStmt) {
			return visitor.visitIfStmt(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class ForStmtContext extends ParserRuleContext {
	constructor(parser?: GoParserUntyped, parent?: ParserRuleContext, invokingState?: number) {
		super(parent, invokingState);
    	this.parser = parser;
	}
	public FOR(): TerminalNode {
		return this.getToken(GoParserUntyped.FOR, 0);
	}
	public expression(): ExpressionContext {
		return this.getTypedRuleContext(ExpressionContext, 0) as ExpressionContext;
	}
	public block(): BlockContext {
		return this.getTypedRuleContext(BlockContext, 0) as BlockContext;
	}
    public get ruleIndex(): number {
    	return GoParserUntyped.RULE_forStmt;
	}
	// @Override
	public accept<Result>(visitor: GoParserUntypedVisitor<Result>): Result {
		if (visitor.visitForStmt) {
			return visitor.visitForStmt(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class GoStmtContext extends ParserRuleContext {
	constructor(parser?: GoParserUntyped, parent?: ParserRuleContext, invokingState?: number) {
		super(parent, invokingState);
    	this.parser = parser;
	}
	public GO(): TerminalNode {
		return this.getToken(GoParserUntyped.GO, 0);
	}
	public primaryExpr(): PrimaryExprContext {
		return this.getTypedRuleContext(PrimaryExprContext, 0) as PrimaryExprContext;
	}
	public arguments(): ArgumentsContext {
		return this.getTypedRuleContext(ArgumentsContext, 0) as ArgumentsContext;
	}
    public get ruleIndex(): number {
    	return GoParserUntyped.RULE_goStmt;
	}
	// @Override
	public accept<Result>(visitor: GoParserUntypedVisitor<Result>): Result {
		if (visitor.visitGoStmt) {
			return visitor.visitGoStmt(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class MethodSpecContext extends ParserRuleContext {
	constructor(parser?: GoParserUntyped, parent?: ParserRuleContext, invokingState?: number) {
		super(parent, invokingState);
    	this.parser = parser;
	}
	public IDENTIFIER(): TerminalNode {
		return this.getToken(GoParserUntyped.IDENTIFIER, 0);
	}
	public parameters(): ParametersContext {
		return this.getTypedRuleContext(ParametersContext, 0) as ParametersContext;
	}
    public get ruleIndex(): number {
    	return GoParserUntyped.RULE_methodSpec;
	}
	// @Override
	public accept<Result>(visitor: GoParserUntypedVisitor<Result>): Result {
		if (visitor.visitMethodSpec) {
			return visitor.visitMethodSpec(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class ParametersContext extends ParserRuleContext {
	constructor(parser?: GoParserUntyped, parent?: ParserRuleContext, invokingState?: number) {
		super(parent, invokingState);
    	this.parser = parser;
	}
	public L_PAREN(): TerminalNode {
		return this.getToken(GoParserUntyped.L_PAREN, 0);
	}
	public R_PAREN(): TerminalNode {
		return this.getToken(GoParserUntyped.R_PAREN, 0);
	}
	public identifierList(): IdentifierListContext {
		return this.getTypedRuleContext(IdentifierListContext, 0) as IdentifierListContext;
	}
    public get ruleIndex(): number {
    	return GoParserUntyped.RULE_parameters;
	}
	// @Override
	public accept<Result>(visitor: GoParserUntypedVisitor<Result>): Result {
		if (visitor.visitParameters) {
			return visitor.visitParameters(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class ExpressionContext extends ParserRuleContext {
	public _pointer_op!: Token;
	public _ari_unary_op!: Token;
	public _ari_bin_op!: Token;
	public _rel_op!: Token;
	public _log_bin_op!: Token;
	constructor(parser?: GoParserUntyped, parent?: ParserRuleContext, invokingState?: number) {
		super(parent, invokingState);
    	this.parser = parser;
	}
	public basicLit(): BasicLitContext {
		return this.getTypedRuleContext(BasicLitContext, 0) as BasicLitContext;
	}
	public primaryExpr(): PrimaryExprContext {
		return this.getTypedRuleContext(PrimaryExprContext, 0) as PrimaryExprContext;
	}
	public RECEIVE(): TerminalNode {
		return this.getToken(GoParserUntyped.RECEIVE, 0);
	}
	public IDENTIFIER(): TerminalNode {
		return this.getToken(GoParserUntyped.IDENTIFIER, 0);
	}
	public EXCLAMATION(): TerminalNode {
		return this.getToken(GoParserUntyped.EXCLAMATION, 0);
	}
	public expression_list(): ExpressionContext[] {
		return this.getTypedRuleContexts(ExpressionContext) as ExpressionContext[];
	}
	public expression(i: number): ExpressionContext {
		return this.getTypedRuleContext(ExpressionContext, i) as ExpressionContext;
	}
	public AMPERSAND(): TerminalNode {
		return this.getToken(GoParserUntyped.AMPERSAND, 0);
	}
	public STAR(): TerminalNode {
		return this.getToken(GoParserUntyped.STAR, 0);
	}
	public PLUS(): TerminalNode {
		return this.getToken(GoParserUntyped.PLUS, 0);
	}
	public MINUS(): TerminalNode {
		return this.getToken(GoParserUntyped.MINUS, 0);
	}
	public L_PAREN(): TerminalNode {
		return this.getToken(GoParserUntyped.L_PAREN, 0);
	}
	public R_PAREN(): TerminalNode {
		return this.getToken(GoParserUntyped.R_PAREN, 0);
	}
	public DIV(): TerminalNode {
		return this.getToken(GoParserUntyped.DIV, 0);
	}
	public MOD(): TerminalNode {
		return this.getToken(GoParserUntyped.MOD, 0);
	}
	public EQUALS(): TerminalNode {
		return this.getToken(GoParserUntyped.EQUALS, 0);
	}
	public NOT_EQUALS(): TerminalNode {
		return this.getToken(GoParserUntyped.NOT_EQUALS, 0);
	}
	public LESS(): TerminalNode {
		return this.getToken(GoParserUntyped.LESS, 0);
	}
	public LESS_OR_EQUALS(): TerminalNode {
		return this.getToken(GoParserUntyped.LESS_OR_EQUALS, 0);
	}
	public GREATER(): TerminalNode {
		return this.getToken(GoParserUntyped.GREATER, 0);
	}
	public GREATER_OR_EQUALS(): TerminalNode {
		return this.getToken(GoParserUntyped.GREATER_OR_EQUALS, 0);
	}
	public LOGICAL_AND(): TerminalNode {
		return this.getToken(GoParserUntyped.LOGICAL_AND, 0);
	}
	public LOGICAL_OR(): TerminalNode {
		return this.getToken(GoParserUntyped.LOGICAL_OR, 0);
	}
    public get ruleIndex(): number {
    	return GoParserUntyped.RULE_expression;
	}
	// @Override
	public accept<Result>(visitor: GoParserUntypedVisitor<Result>): Result {
		if (visitor.visitExpression) {
			return visitor.visitExpression(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class PrimaryExprContext extends ParserRuleContext {
	constructor(parser?: GoParserUntyped, parent?: ParserRuleContext, invokingState?: number) {
		super(parent, invokingState);
    	this.parser = parser;
	}
	public operand(): OperandContext {
		return this.getTypedRuleContext(OperandContext, 0) as OperandContext;
	}
	public primaryExpr(): PrimaryExprContext {
		return this.getTypedRuleContext(PrimaryExprContext, 0) as PrimaryExprContext;
	}
	public arguments(): ArgumentsContext {
		return this.getTypedRuleContext(ArgumentsContext, 0) as ArgumentsContext;
	}
    public get ruleIndex(): number {
    	return GoParserUntyped.RULE_primaryExpr;
	}
	// @Override
	public accept<Result>(visitor: GoParserUntypedVisitor<Result>): Result {
		if (visitor.visitPrimaryExpr) {
			return visitor.visitPrimaryExpr(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class OperandContext extends ParserRuleContext {
	constructor(parser?: GoParserUntyped, parent?: ParserRuleContext, invokingState?: number) {
		super(parent, invokingState);
    	this.parser = parser;
	}
	public functionLit(): FunctionLitContext {
		return this.getTypedRuleContext(FunctionLitContext, 0) as FunctionLitContext;
	}
	public IDENTIFIER(): TerminalNode {
		return this.getToken(GoParserUntyped.IDENTIFIER, 0);
	}
    public get ruleIndex(): number {
    	return GoParserUntyped.RULE_operand;
	}
	// @Override
	public accept<Result>(visitor: GoParserUntypedVisitor<Result>): Result {
		if (visitor.visitOperand) {
			return visitor.visitOperand(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class BasicLitContext extends ParserRuleContext {
	constructor(parser?: GoParserUntyped, parent?: ParserRuleContext, invokingState?: number) {
		super(parent, invokingState);
    	this.parser = parser;
	}
	public BOOL_LIT(): TerminalNode {
		return this.getToken(GoParserUntyped.BOOL_LIT, 0);
	}
	public DECIMAL_LIT(): TerminalNode {
		return this.getToken(GoParserUntyped.DECIMAL_LIT, 0);
	}
	public string_(): String_Context {
		return this.getTypedRuleContext(String_Context, 0) as String_Context;
	}
	public FLOAT_LIT(): TerminalNode {
		return this.getToken(GoParserUntyped.FLOAT_LIT, 0);
	}
    public get ruleIndex(): number {
    	return GoParserUntyped.RULE_basicLit;
	}
	// @Override
	public accept<Result>(visitor: GoParserUntypedVisitor<Result>): Result {
		if (visitor.visitBasicLit) {
			return visitor.visitBasicLit(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class String_Context extends ParserRuleContext {
	constructor(parser?: GoParserUntyped, parent?: ParserRuleContext, invokingState?: number) {
		super(parent, invokingState);
    	this.parser = parser;
	}
	public RAW_STRING_LIT(): TerminalNode {
		return this.getToken(GoParserUntyped.RAW_STRING_LIT, 0);
	}
	public INTERPRETED_STRING_LIT(): TerminalNode {
		return this.getToken(GoParserUntyped.INTERPRETED_STRING_LIT, 0);
	}
    public get ruleIndex(): number {
    	return GoParserUntyped.RULE_string_;
	}
	// @Override
	public accept<Result>(visitor: GoParserUntypedVisitor<Result>): Result {
		if (visitor.visitString_) {
			return visitor.visitString_(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class FunctionLitContext extends ParserRuleContext {
	constructor(parser?: GoParserUntyped, parent?: ParserRuleContext, invokingState?: number) {
		super(parent, invokingState);
    	this.parser = parser;
	}
	public FUNC(): TerminalNode {
		return this.getToken(GoParserUntyped.FUNC, 0);
	}
	public parameters(): ParametersContext {
		return this.getTypedRuleContext(ParametersContext, 0) as ParametersContext;
	}
	public block(): BlockContext {
		return this.getTypedRuleContext(BlockContext, 0) as BlockContext;
	}
    public get ruleIndex(): number {
    	return GoParserUntyped.RULE_functionLit;
	}
	// @Override
	public accept<Result>(visitor: GoParserUntypedVisitor<Result>): Result {
		if (visitor.visitFunctionLit) {
			return visitor.visitFunctionLit(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class ArgumentsContext extends ParserRuleContext {
	constructor(parser?: GoParserUntyped, parent?: ParserRuleContext, invokingState?: number) {
		super(parent, invokingState);
    	this.parser = parser;
	}
	public L_PAREN(): TerminalNode {
		return this.getToken(GoParserUntyped.L_PAREN, 0);
	}
	public R_PAREN(): TerminalNode {
		return this.getToken(GoParserUntyped.R_PAREN, 0);
	}
	public expressionList(): ExpressionListContext {
		return this.getTypedRuleContext(ExpressionListContext, 0) as ExpressionListContext;
	}
    public get ruleIndex(): number {
    	return GoParserUntyped.RULE_arguments;
	}
	// @Override
	public accept<Result>(visitor: GoParserUntypedVisitor<Result>): Result {
		if (visitor.visitArguments) {
			return visitor.visitArguments(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class EosContext extends ParserRuleContext {
	constructor(parser?: GoParserUntyped, parent?: ParserRuleContext, invokingState?: number) {
		super(parent, invokingState);
    	this.parser = parser;
	}
	public SEMI(): TerminalNode {
		return this.getToken(GoParserUntyped.SEMI, 0);
	}
	public EOF(): TerminalNode {
		return this.getToken(GoParserUntyped.EOF, 0);
	}
	public EOS(): TerminalNode {
		return this.getToken(GoParserUntyped.EOS, 0);
	}
    public get ruleIndex(): number {
    	return GoParserUntyped.RULE_eos;
	}
	// @Override
	public accept<Result>(visitor: GoParserUntypedVisitor<Result>): Result {
		if (visitor.visitEos) {
			return visitor.visitEos(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}
