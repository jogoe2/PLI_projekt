import { CommonTokenStream, CharStream } from 'antlr4';
import GoLexer from './parser/GoLexer.js';
import GoParser from './parser/GoParserUntyped.js';
import GoCompiler from './GoCompilerUntyped.js';
import {run} from './GoExecuter.js'

async function parseFile(filePath: string) {
    try {
        const fileContent = `
        func main() {
            var ch = make(1);
            go func () {
                Println("0.5");
                Println(<-ch);
                Println(<-ch);
            }()
            Println("1");
            ch <- 112;
            Println("2");
            ch <- 113;
            Println("3");
            ch <- 114;
            Println("4");
            Println("3.5");
            //ch <- 111;
            Println("4");
    }
        `; //= await fs.readFile(filePath, { encoding: 'utf8' });
        const input = new CharStream(fileContent);
        const lexer = new GoLexer(input);
        const tokens = new CommonTokenStream(lexer);
        const parser = new GoParser(tokens);
        const tree = parser.sourceFile();
        console.log("parsing done");
        console.log(tree.toStringTree(null,parser))
        const compiler = new GoCompiler();
        const instrs = compiler.compile_program(tree)
        instrs.push(({tag: "DONE"}))
        run(instrs);
    } catch (error) {
        console.error('Error processing file:', error);
    }
}

const filePath = 'src/parserTest/example.go';
parseFile(filePath);