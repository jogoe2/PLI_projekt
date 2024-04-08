"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const antlr4_1 = require("antlr4");
const GoParserUntyped_1 = __importDefault(require("./GoParserUntyped"));
class GoParserBase extends antlr4_1.Parser {
    constructor(input) {
        super(input);
    }
    closingBracket() {
        let stream = this._input;
        let prevTokenType = stream.LA(1);
        return prevTokenType === GoParserUntyped_1.default.R_CURLY || prevTokenType === GoParserUntyped_1.default.R_PAREN;
    }
}
exports.default = GoParserBase;
