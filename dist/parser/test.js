"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const antlr4_1 = require("antlr4");
const GoLexer_js_1 = __importDefault(require("./GoLexer.js"));
const GoParserUntyped_js_1 = __importDefault(require("./GoParserUntyped.js"));
const GoCompilerUntyped_js_1 = __importDefault(require("../GoCompilerUntyped.js"));
const HelperFunctions_js_1 = require("../HelperFunctions.js");
function parseFile(filePath) {
    return __awaiter(this, void 0, void 0, function* () {
        try {
            const fileContent = `
        func main() {
            var ch = make(0);
            Println("");
            go func () {
                Println("1");
                Println("1");
                Println("1");
                Println("1");
                Println("1");
                Println("1");
                ch <- 100;
                Println("2");
                Println("2");
                Println("2");
                Println("2");
                Println("2");
                Println("2");
                Println(<-ch);
                Println("2");
                Println("2");


            }()
            Println("");
            Println("");
            Println(<-ch);
            Println(<-ch);
            Println("");
        }
        `; //= await fs.readFile(filePath, { encoding: 'utf8' });
            const input = new antlr4_1.CharStream(fileContent);
            const lexer = new GoLexer_js_1.default(input);
            const tokens = new antlr4_1.CommonTokenStream(lexer);
            const parser = new GoParserUntyped_js_1.default(tokens);
            const tree = parser.sourceFile();
            console.log("parsing done");
            console.log(tree.toStringTree(null, parser));
            const compiler = new GoCompilerUntyped_js_1.default();
            const instrs = compiler.compile_program(tree);
            instrs.push(({ tag: "DONE" }));
            (0, HelperFunctions_js_1.run)(instrs);
        }
        catch (error) {
            console.error('Error processing file:', error);
        }
    });
}
const filePath = 'src/parserTest/example.go';
parseFile(filePath);
