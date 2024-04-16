/*
 [The "BSD licence"] Copyright (c) 2017 Sasa Coh, Michał Błotniak
 Copyright (c) 2019 Ivan Kochurkin, kvanttt@gmail.com, Positive Technologies 
 Copyright (c) 2019 Dmitry Rassadin, flipparassa@gmail.com,Positive Technologies All rights reserved. 
 Copyright (c) 2021 Martin Mirchev, mirchevmartin2203@gmail.com
 Copyright (c) 2023 Dmitry Litovchenko, i@dlitovchenko.ru

 Redistribution and use in source and binary forms, with or without modification, are permitted
 provided that the following conditions are met: 1. Redistributions of source code must retain the
 above copyright notice, this list of conditions and the following disclaimer. 2. Redistributions in
 binary form must reproduce the above copyright notice, this list of conditions and the following
 disclaimer in the documentation and/or other materials provided with the distribution. 3. The name
 of the author may not be used to endorse or promote products derived from this software without
 specific prior written permission.

 THIS SOFTWARE IS PROVIDED BY THE AUTHOR ``AS IS'' AND ANY EXPRESS OR IMPLIED WARRANTIES, INCLUDING,
 BUT NOT LIMITED TO, THE IMPLIED WARRANTIES OF MERCHANTABILITY AND FITNESS FOR A PARTICULAR PURPOSE
 ARE DISCLAIMED. IN NO EVENT SHALL THE AUTHOR BE LIABLE FOR ANY DIRECT, INDIRECT, INCIDENTAL,
 SPECIAL, EXEMPLARY, OR CONSEQUENTIAL DAMAGES (INCLUDING, BUT NOT LIMITED TO, PROCUREMENT OF
 SUBSTITUTE GOODS OR SERVICES; LOSS OF USE, DATA, OR PROFITS; OR BUSINESS INTERRUPTION) HOWEVER
 CAUSED AND ON ANY THEORY OF LIABILITY, WHETHER IN CONTRACT, STRICT LIABILITY, OR TORT (INCLUDING
 NEGLIGENCE OR OTHERWISE) ARISING IN ANY WAY OUT OF THE USE OF THIS SOFTWARE, EVEN IF ADVISED OF THE
 POSSIBILITY OF SUCH DAMAGE.
 */

/*
 * A Go grammar for ANTLR 4 derived from the Go Language Specification https://golang.org/ref/spec
 */

// $antlr-format alignTrailingComments true, columnLimit 150, minEmptyLines 1, maxEmptyLinesToKeep 1, reflowComments false, useTab false
// $antlr-format allowShortRulesOnASingleLine false, allowShortBlocksOnASingleLine true, alignSemicolons hanging, alignColons hanging

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
