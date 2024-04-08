"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.run = void 0;
Object.entries(require('sicp'))
    .forEach(([name, exported]) => global[name] = exported);
const HelperFunctions_1 = require("./HelperFunctions");
const binop_microcode = {
    '+': (x, y) => (is_number(x) && is_number(y)) ||
        (is_string(x) && is_string(y))
        ? x + y
        : error([x, y], "+ expects two numbers" +
            " or two strings, got:"),
    // todo: add error handling to JS for the following, too
    '*': (x, y) => x * y,
    '-': (x, y) => x - y,
    '/': (x, y) => x / y,
    '%': (x, y) => x % y,
    '<': (x, y) => x < y,
    '<=': (x, y) => x <= y,
    '>=': (x, y) => x >= y,
    '>': (x, y) => x > y,
    '===': (x, y) => x === y,
    '!==': (x, y) => x !== y
};
// v2 is popped before v1
const apply_binop = (op, v2, v1) => (0, HelperFunctions_1.JS_value_to_address)(binop_microcode[op]((0, HelperFunctions_1.address_to_JS_value)(v1), (0, HelperFunctions_1.address_to_JS_value)(v2)));
const unop_microcode = {
    '-unary': x => -x,
    '!': x => !x
};
const apply_unop = (op, v) => (0, HelperFunctions_1.JS_value_to_address)(unop_microcode[op]((0, HelperFunctions_1.address_to_JS_value)(v)));
const apply_builtin = (builtin_id) => {
    const result = builtin_array[builtin_id]();
    OS.pop(); // pop fun
    (0, HelperFunctions_1.push)(OS, result);
};
// creating global runtime environment
const primitive_values = Object.values(HelperFunctions_1.primitive_object);
const frame_address = (0, HelperFunctions_1.heap_allocate_Frame)(primitive_values.length);
for (let i = 0; i < primitive_values.length; i++) {
    const primitive_value = primitive_values[i];
    if (typeof primitive_value === "object" &&
        primitive_value.hasOwnProperty("id")) {
        heap_set_child(frame_address, i, heap_allocate_Builtin(primitive_value.id));
    }
    else if (typeof primitive_value === "undefined") {
        heap_set_child(frame_address, i, Undefined);
    }
    else {
        heap_set_child(frame_address, i, heap_allocate_Number(primitive_value));
    }
}
const global_environment = heap_Environment_extend(frame_address, heap_empty_Environment);
/* *******
 * machine
 * *******/
// machine registers
let OS; // JS array (stack) of words (Addresses,
//        word-encoded literals, numbers)
let PC; // JS number
let E; // heap Address
let RTS; // JS array (stack) of Addresses
let HEAP; // (declared above already)
SP; // (declared above already)
const microcode = {
    LDC: instr => (0, HelperFunctions_1.push)(OS, (0, HelperFunctions_1.JS_value_to_address)(instr.val)),
    UNOP: instr => (0, HelperFunctions_1.push)(OS, apply_unop(instr.sym, OS.pop())),
    BINOP: instr => (0, HelperFunctions_1.push)(OS, apply_binop(instr.sym, OS.pop(), OS.pop())),
    POP: instr => OS.pop(),
    JOF: instr => PC = is_True(OS.pop()) ? PC : instr.addr,
    GOTO: instr => PC = instr.addr,
    ENTER_SCOPE: instr => {
        (0, HelperFunctions_1.push)(RTS, heap_allocate_Blockframe(E));
        const frame_address = (0, HelperFunctions_1.heap_allocate_Frame)(instr.num);
        E = heap_Environment_extend(frame_address, E);
        for (let i = 0; i < instr.num; i++) {
            heap_set_child(frame_address, i, Unassigned);
        }
    },
    EXIT_SCOPE: instr => E = heap_get_Blockframe_environment(RTS.pop()),
    LD: instr => {
        const val = heap_get_Environment_value(E, instr.pos);
        if (is_Unassigned(val))
            error("access of unassigned variable");
        (0, HelperFunctions_1.push)(OS, val);
    },
    ASSIGN: instr => heap_set_Environment_value(E, instr.pos, peek(OS, 0)),
    LDF: instr => {
        const closure_address = heap_allocate_Closure(instr.arity, instr.addr, E);
        (0, HelperFunctions_1.push)(OS, closure_address);
    },
    CALL: instr => {
        const arity = instr.arity;
        const fun = peek(OS, arity);
        if (is_Builtin(fun)) {
            return apply_builtin(heap_get_Builtin_id(fun));
        }
        const frame_address = (0, HelperFunctions_1.heap_allocate_Frame)(arity);
        for (let i = arity - 1; i >= 0; i--) {
            heap_set_child(frame_address, i, OS.pop());
        }
        OS.pop(); // pop fun
        (0, HelperFunctions_1.push)(RTS, heap_allocate_Callframe(E, PC));
        E = heap_Environment_extend(frame_address, heap_get_Closure_environment(fun));
        PC = heap_get_Closure_pc(fun);
    },
    TAIL_CALL: instr => {
        const arity = instr.arity;
        const fun = peek(OS, arity);
        if (is_Builtin(fun)) {
            return apply_builtin(heap_get_Builtin_id(fun));
        }
        const frame_address = (0, HelperFunctions_1.heap_allocate_Frame)(arity);
        for (let i = arity - 1; i >= 0; i--) {
            heap_set_child(frame_address, i, OS.pop());
        }
        OS.pop(); // pop fun
        // don't push on RTS here
        E = heap_Environment_extend(frame_address, heap_get_Closure_environment(fun));
        PC = heap_get_Closure_pc(fun);
    },
    RESET: instr => {
        PC--;
        // keep popping...
        const top_frame = RTS.pop();
        if (is_Callframe(top_frame)) {
            // ...until top frame is a call frame
            PC = heap_get_Callframe_pc(top_frame);
            E = heap_get_Callframe_environment(top_frame);
        }
    }
};
function run(instrs) {
    OS = [];
    PC = 0;
    E = global_environment;
    RTS = [];
    //print_code()
    while (!(instrs[PC].tag === 'DONE')) {
        //heap_display()
        //display(PC, "PC: ")
        //display(instrs[PC].tag, "instr: ")
        //print_OS("\noperands:            ");
        //print_RTS("\nRTS:            ");
        const instr = instrs[PC++];
        //display(instrs[PC].tag, "next instruction: ")
        microcode[instr.tag](instr);
    }
    //display(OS, "\nfinal operands:           ")
    //print_OS()
    return (0, HelperFunctions_1.address_to_JS_value)(peek(OS, 0));
}
exports.run = run;
// debugging
const print_code = () => {
    for (let i = 0; i < instrs.length; i = i + 1) {
        const instr = instrs[i];
        display("", stringify(i) + ": " + instr.tag +
            " " +
            (instr.tag === 'GOTO'
                ? stringify(instr.addr)
                : "") +
            (instr.tag === 'ENTER_SCOPE'
                ? stringify(instr.num)
                : "") +
            (instr.tag === 'LDC'
                ? stringify(instr.val)
                : "") +
            (instr.tag === 'ASSIGN'
                ? stringify(instr.pos)
                : "") +
            (instr.tag === 'LD'
                ? stringify(instr.pos)
                : "") +
            (instr.tag === 'BINOP'
                ? stringify(instr.sym)
                : ""));
    }
};
const print_RTS = (x) => {
    display("", x);
    for (let i = 0; i < RTS.length; i = i + 1) {
        const f = RTS[i];
        display("", stringify(i) + ": " + f.tag);
    }
};
const print_OS = (x) => {
    display("", x);
    for (let i = 0; i < OS.length; i = i + 1) {
        const val = OS[i];
        display("", stringify(i) + ": " +
            (0, HelperFunctions_1.address_to_JS_value)(val));
    }
};
// parse_compile_run on top level
// * parse input to json syntax tree
// * compile syntax tree into code
// * run code
const parse_compile_run = program => {
    compile_program(parse_to_json(program));
    return run();
};
