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
const GoVM_js_1 = require("./GoVM.js");
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
            (0, GoVM_js_1.run)(instrs);
        }
        catch (error) {
            console.error(error);
        }
    });
}
//some sequencial programs
const test0_Filecontent = ` 
    func main() {
        Println("test0:")

        var x = 1;
        Println(x);
        const y = x > 5 && 3 < 6;
        Println(y);
        Println("test" + "0");
    }
`;
parse_compile_run(test0_Filecontent);
const test1_Filecontent = ` 
    func main() {
        Println("test1:")

        var x = 1;
        if x > 1 {
            Println("err")
        } else {
            Println(x)
        }
        
    }
`;
parse_compile_run(test1_Filecontent);
const test2_Filecontent = ` 
    func main() {
        Println("test2:")

        var x = 1;
        for x < 10 {
            Println(x);
            x = x + 1;
        }
        
    }
`;
parse_compile_run(test2_Filecontent);
const test3_Filecontent = ` 
    func main() {
        Println("test3:")

        var x = func (y) {
            return y + 1;
        }
        const z = x(2);
        Println(z)
    }
`;
parse_compile_run(test3_Filecontent);
const test4_Filecontent = ` 
var k = 5;

func addk (x) {
    return x + k;
}

func main() {
    Println("test4:")

    Println(addk(4))
}
`;
parse_compile_run(test4_Filecontent);
// parallel program
const test5_Filecontent = ` 
var k = 5;

func addk (x) {
    Println(x + k);
}

func main() {
    Println("test5:")

    go addk(4);
    Println("main")
}
`;
parse_compile_run(test5_Filecontent);
const test6_Filecontent = ` 
func main() {
    Println("test6:")

    var wg waitGroup;
    Add(&wg, 2)
    go func (x) {
        Println(x)
        go func (y) {
            Println(y+1)
            Done(&wg);
        }(x)
        Done(&wg);
    }(0)
    Wait(&wg)
}
`;
parse_compile_run(test6_Filecontent);
const test7_Filecontent = `
    func main() {
        Println("test7:")

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
parse_compile_run(test7_Filecontent);
const test8_Filecontent = `
    func main() {
        Println("test8:")

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
parse_compile_run(test8_Filecontent);
const test9_Filecontent = `
    func main() {
        Println("test9:")

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
parse_compile_run(test9_Filecontent);
