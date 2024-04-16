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
const GoLexer_js_1 = __importDefault(require("./parser/GoLexer.js"));
const GoParserUntyped_js_1 = __importDefault(require("./parser/GoParserUntyped.js"));
const GoCompilerUntyped_js_1 = __importDefault(require("./GoCompilerUntyped.js"));
const GoExecuter_js_1 = require("./GoExecuter.js");
function parse_compile_run(fileconten) {
    return __awaiter(this, void 0, void 0, function* () {
        try {
            const input = new antlr4_1.CharStream(fileconten);
            const lexer = new GoLexer_js_1.default(input);
            const tokens = new antlr4_1.CommonTokenStream(lexer);
            const parser = new GoParserUntyped_js_1.default(tokens);
            const tree = parser.sourceFile();
            //console.log("parsing done");
            const compiler = new GoCompilerUntyped_js_1.default();
            const instrs = compiler.compile_program(tree);
            instrs.push(({ tag: "DONE" }));
            (0, GoExecuter_js_1.run)(instrs);
        }
        catch (error) {
            console.error(error);
        }
    });
}
const test1_Filecontent = `
    func main() {
        var mut mutex;
        Println("0");
        Lock(&mut)
        go func () {
            Println("1");
            Lock(&mut);
            Println("2");
            Println("2");
            Println("2");
            Println("2");
            Println("2");
            Unlock(&mut);
        }()
        Println("3");
        Println("3");
        Println("3");
        Println("3");
        Println("3");
        Unlock(&mut);
        Lock(&mut);
        Println("3");
        Unlock(&mut);
    }
`;
//parse_compile_run(test1_Filecontent);
const test2_Filecontent = `
    func main() {
        var ch = make(1);
        go func () {
            Println("1");
            Println(<-ch);
            Println(<-ch);
        }()
        Println("2");
        ch <- 1001;
        Println("3");
        ch <- 1002;
        Println("4");
        ch <- 1003;
        Println("5");
        //ch <- 1004;
        Println("6");
    }
`;
parse_compile_run(test2_Filecontent);
const test3_Filecontent = `
    func main() {
        var wg waitGroup;
        Add(&wg, 2)
        go func () {
            Done(&wg);
        }()
        go func () {
            Done(&wg);
        }()
        Wait(&wg)
        Println("1");
    }
`;
//parse_compile_run(test3_Filecontent);
