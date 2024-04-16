// Generated from /Users/johannesgottle/Dokumente/Studium/PLI_NUS/PLI_projekt/src/GoParserUntyped.g4 by ANTLR 4.13.1

import {ParseTreeVisitor} from 'antlr4';


import { SourceFileContext } from "./GoParserUntyped";
import { DeclarationContext } from "./GoParserUntyped";
import { ConstDeclContext } from "./GoParserUntyped";
import { IdentifierListContext } from "./GoParserUntyped";
import { ExpressionListContext } from "./GoParserUntyped";
import { FunctionDeclContext } from "./GoParserUntyped";
import { VarDeclContext } from "./GoParserUntyped";
import { TypeContext } from "./GoParserUntyped";
import { BlockContext } from "./GoParserUntyped";
import { StatementListContext } from "./GoParserUntyped";
import { StatementContext } from "./GoParserUntyped";
import { SimpleStmtContext } from "./GoParserUntyped";
import { ExpressionStmtContext } from "./GoParserUntyped";
import { SendStmtContext } from "./GoParserUntyped";
import { AssignmentContext } from "./GoParserUntyped";
import { ReturnStmtContext } from "./GoParserUntyped";
import { IfStmtContext } from "./GoParserUntyped";
import { ForStmtContext } from "./GoParserUntyped";
import { GoStmtContext } from "./GoParserUntyped";
import { MethodSpecContext } from "./GoParserUntyped";
import { ParametersContext } from "./GoParserUntyped";
import { ExpressionContext } from "./GoParserUntyped";
import { PrimaryExprContext } from "./GoParserUntyped";
import { OperandContext } from "./GoParserUntyped";
import { BasicLitContext } from "./GoParserUntyped";
import { String_Context } from "./GoParserUntyped";
import { FunctionLitContext } from "./GoParserUntyped";
import { ArgumentsContext } from "./GoParserUntyped";
import { EosContext } from "./GoParserUntyped";


/**
 * This interface defines a complete generic visitor for a parse tree produced
 * by `GoParserUntyped`.
 *
 * @param <Result> The return type of the visit operation. Use `void` for
 * operations with no return type.
 */
export default class GoParserUntypedVisitor<Result> extends ParseTreeVisitor<Result> {
	/**
	 * Visit a parse tree produced by `GoParserUntyped.sourceFile`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitSourceFile?: (ctx: SourceFileContext) => Result;
	/**
	 * Visit a parse tree produced by `GoParserUntyped.declaration`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitDeclaration?: (ctx: DeclarationContext) => Result;
	/**
	 * Visit a parse tree produced by `GoParserUntyped.constDecl`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitConstDecl?: (ctx: ConstDeclContext) => Result;
	/**
	 * Visit a parse tree produced by `GoParserUntyped.identifierList`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitIdentifierList?: (ctx: IdentifierListContext) => Result;
	/**
	 * Visit a parse tree produced by `GoParserUntyped.expressionList`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitExpressionList?: (ctx: ExpressionListContext) => Result;
	/**
	 * Visit a parse tree produced by `GoParserUntyped.functionDecl`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitFunctionDecl?: (ctx: FunctionDeclContext) => Result;
	/**
	 * Visit a parse tree produced by `GoParserUntyped.varDecl`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitVarDecl?: (ctx: VarDeclContext) => Result;
	/**
	 * Visit a parse tree produced by `GoParserUntyped.type`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitType?: (ctx: TypeContext) => Result;
	/**
	 * Visit a parse tree produced by `GoParserUntyped.block`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitBlock?: (ctx: BlockContext) => Result;
	/**
	 * Visit a parse tree produced by `GoParserUntyped.statementList`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitStatementList?: (ctx: StatementListContext) => Result;
	/**
	 * Visit a parse tree produced by `GoParserUntyped.statement`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitStatement?: (ctx: StatementContext) => Result;
	/**
	 * Visit a parse tree produced by `GoParserUntyped.simpleStmt`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitSimpleStmt?: (ctx: SimpleStmtContext) => Result;
	/**
	 * Visit a parse tree produced by `GoParserUntyped.expressionStmt`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitExpressionStmt?: (ctx: ExpressionStmtContext) => Result;
	/**
	 * Visit a parse tree produced by `GoParserUntyped.sendStmt`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitSendStmt?: (ctx: SendStmtContext) => Result;
	/**
	 * Visit a parse tree produced by `GoParserUntyped.assignment`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitAssignment?: (ctx: AssignmentContext) => Result;
	/**
	 * Visit a parse tree produced by `GoParserUntyped.returnStmt`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitReturnStmt?: (ctx: ReturnStmtContext) => Result;
	/**
	 * Visit a parse tree produced by `GoParserUntyped.ifStmt`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitIfStmt?: (ctx: IfStmtContext) => Result;
	/**
	 * Visit a parse tree produced by `GoParserUntyped.forStmt`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitForStmt?: (ctx: ForStmtContext) => Result;
	/**
	 * Visit a parse tree produced by `GoParserUntyped.goStmt`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitGoStmt?: (ctx: GoStmtContext) => Result;
	/**
	 * Visit a parse tree produced by `GoParserUntyped.methodSpec`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitMethodSpec?: (ctx: MethodSpecContext) => Result;
	/**
	 * Visit a parse tree produced by `GoParserUntyped.parameters`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitParameters?: (ctx: ParametersContext) => Result;
	/**
	 * Visit a parse tree produced by `GoParserUntyped.expression`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitExpression?: (ctx: ExpressionContext) => Result;
	/**
	 * Visit a parse tree produced by `GoParserUntyped.primaryExpr`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitPrimaryExpr?: (ctx: PrimaryExprContext) => Result;
	/**
	 * Visit a parse tree produced by `GoParserUntyped.operand`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitOperand?: (ctx: OperandContext) => Result;
	/**
	 * Visit a parse tree produced by `GoParserUntyped.basicLit`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitBasicLit?: (ctx: BasicLitContext) => Result;
	/**
	 * Visit a parse tree produced by `GoParserUntyped.string_`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitString_?: (ctx: String_Context) => Result;
	/**
	 * Visit a parse tree produced by `GoParserUntyped.functionLit`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitFunctionLit?: (ctx: FunctionLitContext) => Result;
	/**
	 * Visit a parse tree produced by `GoParserUntyped.arguments`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitArguments?: (ctx: ArgumentsContext) => Result;
	/**
	 * Visit a parse tree produced by `GoParserUntyped.eos`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitEos?: (ctx: EosContext) => Result;
}

