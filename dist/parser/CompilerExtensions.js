"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.compile_time_environment_position = exports.compile_time_environment_extend = exports.global_compile_environment = void 0;
Object.entries(require('sicp'))
    .forEach(([name, exported]) => global[name] = exported);
/* ************************
 * compile-time environment
 * ************************/
// a compile-time environment is an array of
// compile-time frames, and a compile-time frame
// is an array of symbols
// find the position [frame-index, value-index]
// of a given symbol x
const compile_time_environment_position = (env, x) => {
    let frame_index = env.length;
    while (value_index(env[--frame_index], x) === -1) { }
    display(frame_index);
    display(env[frame_index]);
    return [frame_index, value_index(env[frame_index], x)];
};
exports.compile_time_environment_position = compile_time_environment_position;
const value_index = (frame, x) => {
    for (let i = 0; i < frame.length; i++) {
        if (frame[i] === x)
            return i;
    }
    return -1;
};
// in this machine, the builtins take their
// arguments directly from the operand stack,
// to save the creation of an intermediate
// argument array
const builtin_object = {
    display: () => {
        const address = OS.pop();
        display(address_to_JS_value(address));
        return address;
    },
    get_time: () => JS_value_to_address(get_time()),
    error: () => error(address_to_JS_value(OS.pop())),
    is_number: () => (is_Number(OS.pop()) ? True : False),
    is_boolean: () => (is_Boolean(OS.pop()) ? True : False),
    is_undefined: () => (is_Undefined(OS.pop()) ? True : False),
    is_string: () => (is_String(OS.pop()) ? True : False), // ADDED CHANGE
    is_function: () => is_Closure(OS.pop()),
    math_sqrt: () => JS_value_to_address(math_sqrt(address_to_JS_value(OS.pop()))),
    pair: () => {
        const tl = OS.pop();
        const hd = OS.pop();
        return heap_allocate_Pair(hd, tl);
    },
    is_pair: () => (is_Pair(OS.pop()) ? True : False),
    head: () => heap_get_child(OS.pop(), 0),
    tail: () => heap_get_child(OS.pop(), 1),
    is_null: () => (is_Null(OS.pop()) ? True : False),
    set_head: () => {
        const val = OS.pop();
        const p = OS.pop();
        heap_set_child(p, 0, val);
    },
    set_tail: () => {
        const val = OS.pop();
        const p = OS.pop();
        heap_set_child(p, 1, val);
    },
};
const primitive_object = {};
const builtin_array = [];
{
    let i = 0;
    for (const key in builtin_object) {
        primitive_object[key] = {
            tag: "BUILTIN",
            id: i,
            arity: arity(builtin_object[key]),
        };
        builtin_array[i++] = builtin_object[key];
    }
}
const constants = {
    undefined: Undefined,
    math_E: math_E,
    math_LN10: math_LN10,
    math_LN2: math_LN2,
    math_LOG10E: math_LOG10E,
    math_LOG2E: math_LOG2E,
    math_PI: math_PI,
    math_SQRT1_2: math_SQRT1_2,
    math_SQRT2: math_SQRT2,
};
for (const key in constants)
    primitive_object[key] = constants[key];
const compile_time_environment_extend = (vs, e) => {
    //  make shallow copy of e
    return push([...e], vs);
};
exports.compile_time_environment_extend = compile_time_environment_extend;
// compile-time frames only need synbols (keys), no values
const global_compile_frame = Object.keys(primitive_object);
const global_compile_environment = [global_compile_frame];
exports.global_compile_environment = global_compile_environment;
