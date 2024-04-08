import { CommonTokenStream, CharStream } from 'antlr4';
import GoLexer from './GoLexer.js';
import GoParser from './GoParserUntyped.js';
import GoCompiler from '../GoCompilerUntyped.js';
import {run} from '../HelperFunctions.js'

async function parseFile(filePath: string) {
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