# PLI_projekt

I used node v18.20.0 and I’m not sure if other versions are working, because you need a relative new version for the antlr related packages, but the scip package I used for the executer doesn’t support the newest node versions.
If you use vscode, you can use the “compile and run” launch configuration specified in launch.json. 
The src folder contains all the file that I actually wrote and tsc compiles then into the dist folder.
The main.ts function is the entry point of my program (gets compiled to main.js). There you can also find the test cases.