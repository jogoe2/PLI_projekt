import { CommonTokenStream, CharStream } from 'antlr4';
import GoLexer from './parser/GoLexer.js';
import GoParser from './parser/GoParserUntyped.js';
import GoCompiler from './GoCompilerUntyped.js';
import {run} from './GoVM.js'

async function parse_compile_run(fileconten: string) {
    try {
        const input = new CharStream(fileconten);
        const lexer = new GoLexer(input);
        const tokens = new CommonTokenStream(lexer);
        const parser = new GoParser(tokens);
        const tree = parser.sourceFile();
        //console.log("parsing done");
        const compiler = new GoCompiler();
        const instrs = compiler.compile_program(tree)
        instrs.push(({tag: "DONE"}))
        run(instrs);
    } catch (error) {
        console.error(error);
    }
}

const test1_Filecontent = 
`
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
`
//parse_compile_run(test1_Filecontent);

const test2_Filecontent = 
`
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
`
parse_compile_run(test2_Filecontent);

const test3_Filecontent = 
`
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
`
//parse_compile_run(test3_Filecontent);