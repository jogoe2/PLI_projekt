import {Parser, TokenStream} from 'antlr4';
import GoParserUntyped from './GoParserUntyped';

export default class GoParserBase extends Parser {
    constructor(input: TokenStream) {
        super(input);
    }

    closingBracket() {
        let stream = this._input;
        let prevTokenType = stream.LA(1);
        
        return prevTokenType === GoParserUntyped.R_CURLY || prevTokenType === GoParserUntyped.R_PAREN;
    }
}