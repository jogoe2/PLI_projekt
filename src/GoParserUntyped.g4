parser grammar GoParserUntyped;


options {
    tokenVocab = GoLexer;
    superClass = GoParserBase;
}

sourceFile
    :  ((functionDecl | declaration) eos)* EOF
    ;

declaration
    : constDecl
    | varDecl
    ;

constDecl
    : CONST IDENTIFIER ASSIGN expression
    ;

identifierList
    : IDENTIFIER (COMMA IDENTIFIER)*
    ;

expressionList
    : expression (COMMA expression)*
    ;

functionDecl
    : FUNC IDENTIFIER parameters block
    ;

varDecl
    : VAR IDENTIFIER (type | (ASSIGN expression))
    ;

type
    : IDENTIFIER
    ;

block
    : L_CURLY statementList? R_CURLY
    ;

statementList
    : ((SEMI? | EOS? | {this.closingBracket()}?) statement eos)+
    ;

statement
    : declaration
    | simpleStmt
    | goStmt
    | returnStmt
    | block
    | ifStmt
    | forStmt
    ;

simpleStmt
    : sendStmt
    | assignment
    | expressionStmt
    ;

expressionStmt
    : expression
    ;

sendStmt
    : channel = IDENTIFIER RECEIVE expression // no dereference for simplicity
    ;

assignment
    : STAR? IDENTIFIER ASSIGN expression // only one dereference for simplicity
    ;

returnStmt
    : RETURN expression
    ;

ifStmt
    : IF (expression | eos expression ) block (ELSE (ifStmt | block))?
    ;

forStmt
    : FOR expression block
    ;

goStmt
    : GO primaryExpr arguments
    ;

methodSpec
    : IDENTIFIER parameters
    ;


parameters
    : L_PAREN identifierList? R_PAREN
    ;

expression
    : basicLit
    | primaryExpr
    | RECEIVE IDENTIFIER // simplified
    | EXCLAMATION expression 
    | pointer_op = AMPERSAND IDENTIFIER 
    | pointer_op = (STAR | AMPERSAND) IDENTIFIER // for simplicity you can only (de)reference variables
    | ari_unary_op = (PLUS | MINUS ) expression
    | expression ari_bin_op = (PLUS | MINUS | STAR | DIV | MOD ) expression
    | expression rel_op = (
        EQUALS
        | NOT_EQUALS
        | LESS
        | LESS_OR_EQUALS
        | GREATER
        | GREATER_OR_EQUALS
    ) expression
    | expression log_bin_op =(LOGICAL_AND|LOGICAL_OR) expression
    | L_PAREN expression R_PAREN
    ;

primaryExpr
    : operand // mixes just the function literal and the anonymus function call.
    | primaryExpr arguments
    ;

operand
    : functionLit
    | IDENTIFIER
    ;

basicLit
    : BOOL_LIT
    | DECIMAL_LIT
    | string_
    | FLOAT_LIT
    ;

string_
    : RAW_STRING_LIT
    | INTERPRETED_STRING_LIT
    ;

functionLit
    : FUNC parameters block
    ; 

arguments
    : L_PAREN (expressionList)? R_PAREN
    ;

eos
    : SEMI
    | EOF
    | EOS
    | {this.closingBracket()}?
    ;
