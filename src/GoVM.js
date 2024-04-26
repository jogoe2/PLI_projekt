Object.entries(require("sicp")).forEach(
	([name, exported]) => (global[name] = exported),
);

/* ************************************
 * Virtual machine with tagged pointers 
 * ************************************/

/* **********************
 * using arrays as stacks
 * **********************/

// add values destructively to the end of
// given array; return the array
const push = (array, ...items) => {
	for (let item of items) {
		array.push(item);
	}
	return array;
};

// return the last element of given array
// without changing the array
const peek = (array, address) => array.slice(-1 - address)[0];


/* *************************
 * HEAP
 * *************************/

// HEAP is an array of bytes (JS ArrayBuffer)

const word_size = 8;
const mega = 2 ** 20;

// heap_make allocates a heap of given size
// (in megabytes)and returns a DataView of that,
// see https://www.javascripture.com/DataView
const heap_make = (bytes) => {
	if (bytes % 8 !== 0) error("heap bytes must be divisible by 8");
	const data = new ArrayBuffer(bytes);
	const view = new DataView(data);
	return view;
};

// we randomly pick a heap size of 1000000 bytes
const HEAP = heap_make(1000000);

// free is the next free index in HEAP
// we keep allocating as if there was no tomorrow
let free = 0;

// for debugging: display all bits of the heap
const heap_display = () => {
	display("", "heap:");
	for (let i = 0; i < free; i++) {
		display(
			word_to_string(heap_get(i)),
			stringify(i) + " " + stringify(heap_get(i)) + " ",
		);
	}
};

// heap_allocate allocates a given number of words
// on the heap and marks the first word with a 1-byte tag.
// the last two bytes of the first word indicate the number
// of children (addresses) that follow the tag word:
// [1 byte tag, 4 bytes payload (depending on node type),
//  2 bytes #children, 1 byte unused]
// Note: payload depends on the type of node
const size_offset = 5;
const heap_allocate = (tag, size) => {
	const address = free;
	free += size;
	HEAP.setUint8(address * word_size, tag);
	HEAP.setUint16(address * word_size + size_offset, size);
	return address;
};

// get and set a word in heap at given address
const heap_get = (address) => HEAP.getFloat64(address * word_size);

const heap_set = (address, x) => HEAP.setFloat64(address * word_size, x);

// child index starts at 0
const heap_get_child = (address, child_index) =>
	heap_get(address + 1 + child_index);

const heap_set_child = (address, child_index, value) =>
	heap_set(address + 1 + child_index, value);

const heap_get_tag = (address) => HEAP.getUint8(address * word_size);

const heap_get_size = (address) =>
	HEAP.getUint16(address * word_size + size_offset);

// the number of children is one less than the size
// except for number nodes:
//                 they have size 2 but no children
const heap_get_number_of_children = (address) =>
	heap_get_tag(address) === Number_tag ? 0 : get_size(address) - 1;

// access byte in heap, using address and offset
const heap_set_byte_at_offset = (address, offset, value) =>
	HEAP.setUint8(address * word_size + offset, value);

const heap_get_byte_at_offset = (address, offset, value) =>
	HEAP.getUint8(address * word_size + offset);

// access byte in heap, using address and offset
const heap_set_2_bytes_at_offset = (address, offset, value) =>
	HEAP.setUint16(address * word_size + offset, value);

const heap_get_2_bytes_at_offset = (address, offset, value) =>
	HEAP.getUint16(address * word_size + offset);

// ADDED CHANGE
const heap_set_4_bytes_at_offset = (address, offset, value) =>
	HEAP.setUint32(address * word_size + offset, value);

// ADDED CHANGE
const heap_get_4_bytes_at_offset = (address, offset, value) =>
	HEAP.getUint32(address * word_size + offset);

// for debugging: return a string that shows the bits
// of a given word
const word_to_string = (word) => {
	const buf = new ArrayBuffer(8);
	const view = new DataView(buf);
	view.setFloat64(0, word);
	let binStr = "";
	for (let i = 0; i < 8; i++) {
		binStr += ("00000000" + view.getUint8(i).toString(2)).slice(-8) + " ";
	}
	return binStr;
};

// values

// All values are allocated on the heap as nodes. The first
// word of the node is a header, and the first byte of the
// header is a tag that identifies the type of node

const False_tag = 0;
const True_tag = 1;
const Number_tag = 2;
const Null_tag = 3;
const Unassigned_tag = 4;
const Undefined_tag = 5;
const Blockframe_tag = 6;
const Callframe_tag = 7;
const Closure_tag = 8;
const Frame_tag = 9;
const Environment_tag = 10;
const Pair_tag = 11;
const Builtin_tag = 12;
const String_tag = 13;
const Goroutineframe_tag = 14;
const Pointer_tag = 15;
const Chan_tag = 16;
const WaitGroup_tag = 17;
const Mutex_tag = 18;
const Internal_tag = 19;


// Record<string, tuple(number, string)> where the key is the hash of the string
// and the value is a tuple of the address of the string and the string itself
let stringPool = {}; // ADDED CHANGE

// all values (including literals) are allocated on the heap.

// We allocate canonical values for
// true, false, undefined, null, and unassigned
// and make sure no such values are created at runtime

// boolean values carry their value (0 for false, 1 for true)
// in the byte following the tag
const False = heap_allocate(False_tag, 1);
const is_False = (address) => heap_get_tag(address) === False_tag;
const True = heap_allocate(True_tag, 1);
const is_True = (address) => heap_get_tag(address) === True_tag;

const is_Boolean = (address) => is_True(address) || is_False(address);

const Null = heap_allocate(Null_tag, 1);
const is_Null = (address) => heap_get_tag(address) === Null_tag;

const Unassigned = heap_allocate(Unassigned_tag, 1);
const is_Unassigned = (address) => heap_get_tag(address) === Unassigned_tag;

const Undefined = heap_allocate(Undefined_tag, 1);
const is_Undefined = (address) => heap_get_tag(address) === Undefined_tag;

// strings:
// [1 byte tag, 4 byte hash to stringPool,
// 2 bytes #children, 1 byte unused]
// Note: #children is 0

// Hash any string to a 32-bit unsigned integer
const hashString = (str) => {
	let hash = 5381;
	for (let i = 0; i < str.length; i++) {
		const char = str.charCodeAt(i);
		hash = (hash << 5) + hash + char;
		hash = hash & hash;
	}
	return hash >>> 0;
};

// const result = hashString("hello");
// display(result, "hash of hello:");
// const result2 = hashString("hello world");
// display(result2, "hash of hello world:");

const String = heap_allocate(String_tag, 1);
const is_String = (address) => heap_get_tag(address) === String_tag;

const heap_allocate_String = (str) => {
	const hash = hashString(str);
	const address_or_undefined = stringPool[hash];

	if (address_or_undefined !== undefined) {
		return address_or_undefined[0];
	}

	const address = heap_allocate(String_tag, 1);
	heap_set_4_bytes_at_offset(address, 1, hash);

	// Store the string in the string pool
	stringPool[hash] = [address, str];

	return address;
};

const heap_get_string_hash = (address) =>
	heap_get_4_bytes_at_offset(address, 1);

const heap_get_string = (address) =>
	stringPool[heap_get_string_hash(address)][1];

// builtins: builtin id is encoded in second byte
// [1 byte tag, 1 byte id, 3 bytes unused,
//  2 bytes #children, 1 byte unused]
// Note: #children is 0

const is_Builtin = (address) => heap_get_tag(address) === Builtin_tag;

const heap_allocate_Builtin = (id) => {
	const address = heap_allocate(Builtin_tag, 1);
	heap_set_byte_at_offset(address, 1, id);
	return address;
};

const heap_get_Builtin_id = (address) => heap_get_byte_at_offset(address, 1);

// closure
// [1 byte tag, 1 byte arity, 2 bytes pc, 1 byte unused,
//  2 bytes #children, 1 byte unused]
// followed by the address of env
// note: currently bytes at offset 4 and 7 are not used;
//   they could be used to increase pc and #children range

const heap_allocate_Closure = (arity, pc, env) => {
	const address = heap_allocate(Closure_tag, 2);
	heap_set_byte_at_offset(address, 1, arity);
	heap_set_2_bytes_at_offset(address, 2, pc);
	heap_set(address + 1, env);
	return address;
};

const heap_get_Closure_arity = (address) => heap_get_byte_at_offset(address, 1);

const heap_get_Closure_pc = (address) => heap_get_2_bytes_at_offset(address, 2);

const heap_get_Closure_environment = (address) => heap_get_child(address, 0);

const is_Closure = (address) => heap_get_tag(address) === Closure_tag;

// block frame
// [1 byte tag, 4 bytes unused,
//  2 bytes #children, 1 byte unused]

const heap_allocate_Blockframe = (env) => {
	const address = heap_allocate(Blockframe_tag, 2);
	heap_set(address + 1, env);
	return address;
};

const heap_get_Blockframe_environment = (address) => heap_get_child(address, 0);

const is_Blockframe = (address) => heap_get_tag(address) === Blockframe_tag;

// call frame
// [1 byte tag, 1 byte unused, 2 bytes pc,
//  1 byte unused, 2 bytes #children, 1 byte unused]
// followed by the address of env

const heap_allocate_Callframe = (env, pc) => {
	const address = heap_allocate(Callframe_tag, 2);
	heap_set_2_bytes_at_offset(address, 2, pc);
	heap_set(address + 1, env);
	return address;
};

const heap_get_Callframe_environment = (address) => heap_get_child(address, 0);

const heap_get_Callframe_pc = (address) =>
	heap_get_2_bytes_at_offset(address, 2);

const is_Callframe = (address) => heap_get_tag(address) === Callframe_tag;

// goroutine frame
// [1 byte tag, 1 byte unused, 2 bytes pc,
//  1 byte unused, 2 bytes #children, 1 byte unused]
// followed by the address of env

const heap_allocate_Goroutineframe = (env, pc) => {
	const address = heap_allocate(Goroutineframe_tag, 2);
	heap_set_2_bytes_at_offset(address, 2, pc);
	heap_set(address + 1, env);
	return address;
};

const heap_get_Goroutineframe_environment = (address) => heap_get_child(address, 0);

const is_Goroutineframe = (address) => heap_get_tag(address) === Goroutineframe_tag;

// WaitGroup
// [1 byte tag, 4 bytes unused,
//  2 bytes #children, 1 byte unused]
// followed by counter and
// by the address to a queue that stores all the waiting goroutines
// In the official go impl this is done with a semaphore implementaion(weighted tress) for better performance
const heap_allocate_WaitGroup = (counter = 0, queue_address = heap_allocate_Queue()) => {
	const address = heap_allocate(WaitGroup_tag, 3);
	heap_set(address + 1, counter);
	heap_set(address + 2, queue_address);
	return address;
}

const is_WaitGroup = (address) => heap_get_tag(address) === WaitGroup_tag;


// Queue
// [1 byte tag, 4 bytes unused,
//  2 bytes #children, 1 byte unused]
// followed by address to head and address to tail
// used to store goroutine ids
const heap_allocate_Queue = () => {
	const address = heap_allocate(Internal_tag, 3);
	heap_set(address + 1, -1);
	heap_set(address + 2, -1);
	return address;
}

const heap_add_Elem_to_Queue = (queue_address, number) => {
	const el_address = heap_allocate(Internal_tag, 3);
	heap_set(el_address + 1, -1);
	heap_set(el_address + 2, number);
	//display(number, "number: ")
	//display(el_address + 2, "eladdress: ")
	if(heap_get(queue_address + 1) == -1) {
		heap_set(queue_address + 1, el_address);
	}else {
		const last_el_address = heap_get(queue_address + 1);
		heap_set(last_el_address + 1, el_address);
	}
	heap_set(queue_address + 2, el_address);
}

const heap_pop_Elem_from_Queue = (queue_address) => {
	var el_address = heap_get(queue_address+1)
	if(el_address === -1) error("queue is empty")
	const next_address =  heap_get(el_address+1);

	heap_set(queue_address+1, next_address);
	if(next_address === -1) {
		heap_set(queue_address+2, -1);
	}
	//display(el_address + 2, "eladdress: ")
	//display(heap_get(el_address+2));
	return heap_get(el_address+2);
}

const heap_isEmpty_Queue = (queue_address) => 
	(heap_get(queue_address+1) === -1)

// Channel
// [1 byte tag, 4 bytes unused,
//  2 bytes #children, 1 byte unused]
// followed by the address of the buffer element and the id of the sender that put the element in the buffer.
const heap_allocate_Chan = (size) => {
	const address = heap_allocate(Chan_tag, 8);
	const buffer_address = size == 0 ? -1 : heap_allocate_Buffer(size);
	heap_set(address + 1, 0); 						// total data in the queue
	heap_set(address + 2, size);					// size of the circular queue
	heap_set(address + 3, buffer_address);			// points to an array
	heap_set(address + 4, 0); 						// send index
	heap_set(address + 5, 0); 						// receive index
	heap_set(address + 6, heap_allocate_Queue());	// list of recv waiters
	heap_set(address + 7, heap_allocate_Queue()); 	// list of send waiters
	return address;
}

const is_Chan = (address) => heap_get_tag(address) === Chan_tag;

const heap_allocate_Buffer = (size) =>  heap_allocate(Internal_tag, size+1);

// Mutex
// [1 byte tag, 4 bytes unused,
//  2 bytes #children, 1 byte unused]
// followed by the value if mutex is locked (value = 0) or free (1) and
// by the address to a queue that stores all the waiting goroutines
const heap_allocate_Mutex = (mutexState = 1, queue_address = heap_allocate_Queue()) => {
	const address = heap_allocate(Mutex_tag, 3)
	heap_set(address+1, mutexState);
	heap_set(address+2, queue_address);
	return address;
}

const is_Mutex = (address) => heap_get_tag(address) === Mutex_tag;

// environment frame
// [1 byte tag, 4 bytes unused,
//  2 bytes #children, 1 byte unused]
// followed by the addresses of its values

const heap_allocate_Frame = (number_of_values) =>
	heap_allocate(Frame_tag, number_of_values + 1);



const heap_Frame_display = (address) => {
	display("", "Frame:");
	const size = heap_get_number_of_children(address);
	display(size, "frame size:");
	for (let i = 0; i < size; i++) {
		display(i, "value address:");
		const value = heap_get_child(address, i);
		display(value, "value:");
		display(word_to_string(value), "value word:");
	}
};

// environment
// [1 byte tag, 4 bytes unused,
//  2 bytes #children, 1 byte unused]
// followed by the addresses of its frames

const heap_allocate_Environment = (number_of_frames) =>
	heap_allocate(Environment_tag, number_of_frames + 1);

const heap_empty_Environment = heap_allocate_Environment(0);

// access environment given by address
// using a "position", i.e. a pair of
// frame index and value index
const heap_get_Environment_value = (env_address, position) => {
	const [frame_index, value_index] = position;
	const frame_address = heap_get_child(env_address, frame_index);
	return heap_get_child(frame_address, value_index);
};

const heap_set_Environment_value = (env_address, position, value) => {
	//display(env_address, "env_address:")
	const [frame_index, value_index] = position;
	const frame_address = heap_get_child(env_address, frame_index);
	heap_set_child(frame_address, value_index, value);
};

// extend a given environment by a new frame:
// create a new environment that is bigger by 1
// frame slot than the given environment.
// copy the frame Addresses of the given
// environment to the new environment.
// enter the address of the new frame to end
// of the new environment
const heap_Environment_extend = (frame_address, env_address) => {
	const old_size = heap_get_size(env_address);
	const new_env_address = heap_allocate_Environment(old_size);
	let i;
	for (i = 0; i < old_size - 1; i++) {
		heap_set_child(new_env_address, i, heap_get_child(env_address, i));
	}
	heap_set_child(new_env_address, i, frame_address);
	return new_env_address;
};

// for debuggging: display environment
const heap_Environment_display = (env_address) => {
	const size = heap_get_number_of_children(env_address);
	display("", "Environment:");
	display(size, "environment size:");
	for (let i = 0; i < size; i++) {
		display(i, "frame index:");
		const frame = heap_get_child(env_address, i);
		heap_Frame_display(frame);
	}
};

// pair
// [1 byte tag, 4 bytes unused,
//  2 bytes #children, 1 byte unused]
// followed by head and tail addresses, one word each
const heap_allocate_Pair = (hd, tl) => {
	const pair_address = heap_allocate(Pair_tag, 3);
	heap_set_child(pair_address, 0, hd);
	heap_set_child(pair_address, 1, tl);
	return pair_address;
};

const is_Pair = (address) => heap_get_tag(address) === Pair_tag;

// pointer
// [1 byte tag, 4 bytes unused,
//  2 bytes #children, 1 byte unused]
// followed by head and tail addresses, one word each
const heap_allocate_Pointer = (hd, tl) => {
	const pointer_address = heap_allocate(Pointer_tag, 3);
	heap_set_child(pointer_address, 0, hd);
	heap_set_child(pointer_address, 1, tl);
	return pointer_address;
};

const is_Pointer = (address) => heap_get_tag(address) === Pointer_tag;

// number
// [1 byte tag, 4 bytes unused,
//  2 bytes #children, 1 byte unused]
// followed by the number, one word
// note: #children is 0

const heap_allocate_Number = (n) => {
	const number_address = heap_allocate(Number_tag, 2);
	heap_set(number_address + 1, n);
	return number_address;
};

const is_Number = (address) => heap_get_tag(address) === Number_tag;

//
// conversions between addresses and JS_value
//

const address_to_JS_value = (x) =>
	is_Boolean(x)
		? is_True(x)
			? true
			: false
		: is_Number(x)
		? heap_get(x + 1)
		: is_Undefined(x)
		? undefined
		: is_Unassigned(x)
		? "<unassigned>"
		: is_Null(x)
		? null
		: is_String(x) // ADDED CHANGE
		? heap_get_string(x) // ADDED CHANGE
		: is_Pair(x) || is_Pointer(x)
		? [
				address_to_JS_value(heap_get_child(x, 0)),
				address_to_JS_value(heap_get_child(x, 1))
		  ]
		: is_WaitGroup(x)
		? "<WaitGroup>"
		: is_Closure(x)
		? "<closure>"
		: is_Builtin(x)
		? "<builtin>"
		: is_Unbufchan(x)
		? "<unbuf chan>"
		: "unknown word tag: " + word_to_string(x);

const JS_value_to_address = (x) =>
	is_boolean(x)
		? x
			? True
			: False
		: is_number(x)
		? heap_allocate_Number(x)
		: is_undefined(x)
		? Undefined
		: is_null(x)
		? Null
		: is_string(x) // ADDED CHANGE
		? heap_allocate_String(x) // ADDED CHANGE
		: is_pair(x)
		? heap_allocate_Pair(
				JS_value_to_address(head(x)),
				JS_value_to_address(tail(x)),
		  )
		: "unknown word tag: " + word_to_string(x);

/* ************************
 * compile-time environment
 * ************************/

// a compile-time environment is an array of
// compile-time frames, and a compile-time frame
// is an array of symbols

// find the position [frame-index, value-index]
// of a given symbol x
export const compile_time_environment_position = (env, x) => {
	let frame_index = env.length;
	while (value_index(env[--frame_index], x) === -1) {
		if(frame_index === 0) {
			error(`symbol ${x} not found`)
		}
	}
	return [frame_index, value_index(env[frame_index], x)];
};

const value_index = (frame, x) => {
	for (let i = 0; i < frame.length; i++) {
		if (frame[i] === x) return i;
	}
	return -1;
};

// in this machine, the builtins take their
// arguments directly from the operand stack,
// to save the creation of an intermediate
// argument array
const builtin_object = {
	Println: () => {
		const address = OS.pop();
		display(address_to_JS_value(address));
		return address;
	},
	make: () => {
		const buffer_length = address_to_JS_value(OS.pop());
		return heap_allocate_Chan(buffer_length);
	},
	Wait: () => {
		const pos = address_to_JS_value(OS.pop());
		const waitGroup_address = heap_get_Environment_value(E, pos);
		if (!is_WaitGroup(waitGroup_address)) error("has to be a WaitGroup");
		const counter = heap_get(waitGroup_address+1);
		if(counter > 0){
			const sem_address = heap_get(waitGroup_address+2)
			runtime_Semacquire(sem_address)
		}
	},
	Add: () => {
		const delta = address_to_JS_value(OS.pop());
		const pos = address_to_JS_value(OS.pop());
		waitGroup_add(pos, delta)
	},
	Done: () => {
		const delta = -1;
		const pos = address_to_JS_value(OS.pop());
		waitGroup_add(pos, delta)
	},
	Lock: () => {
		const pos = address_to_JS_value(OS.pop());
		const mutex_address = heap_get_Environment_value(E, pos);
		if (!is_Mutex(mutex_address)) {
			display(address_to_JS_value(mutex_address))
			error("has to be mutex");
		}
		const mutex_state = heap_get(mutex_address+1);
		const queue_address = heap_get(mutex_address+2)
		if(mutex_state == 0){
			runningGoroutine.block()
    		heap_add_Elem_to_Queue(queue_address, runningGoroutine.id);
		} else {
			// allocate new mutex to mimic the copy by value behavior of mutexes
			heap_set_Environment_value(E, pos, heap_allocate_Mutex(0, queue_address));
		}
	},
	Unlock: () => {
		const pos = address_to_JS_value(OS.pop());
		const mutex_address = heap_get_Environment_value(E, pos);
		if (!is_Mutex(mutex_address)) error("has to be mutex");
		const mutex_state = heap_get(mutex_address+1);
		const queue_address = heap_get(mutex_address+2)
		if(!heap_isEmpty_Queue(queue_address) ){
			// hand mutex over to the next one in the queue
			const id = heap_pop_Elem_from_Queue(queue_address);
       		activeGoroutines[id].unblock()
		}else {
			heap_set_Environment_value(E, pos, heap_allocate_Mutex(1, queue_address));
		}

	},
	get_time: () => JS_value_to_address(get_time()),
	error: () => error(address_to_JS_value(OS.pop())),
	is_number: () => (is_Number(OS.pop()) ? True : False),
	is_boolean: () => (is_Boolean(OS.pop()) ? True : False),
	is_undefined: () => (is_Undefined(OS.pop()) ? True : False),
	is_string: () => (is_String(OS.pop()) ? True : False), // ADDED CHANGE
	is_function: () => is_Closure(OS.pop()),
	math_sqrt: () =>
		JS_value_to_address(math_sqrt(address_to_JS_value(OS.pop()))),
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

// helper function for waitgroup add and done
function waitGroup_add(pos, delta) {
		const waitGroup_address = heap_get_Environment_value(E, pos);
		if (!is_WaitGroup(waitGroup_address)) error("has to be a WaitGroup");
		const old_counter = heap_get(waitGroup_address+1);
		//by always allocating a new WaitGroup we make shure that waitgroups are passed by value
		const sem_address = heap_get(waitGroup_address+2)
		if(old_counter+delta < 0) {
			error("sync: WaitGroup counter has to be non negative")
		}
		if(old_counter+delta == 0){
			heap_set_Environment_value(E, pos, heap_allocate_WaitGroup(old_counter+delta, sem_address));
			runtime_Semrelease(sem_address);
		}else {
			heap_set_Environment_value(E, pos, heap_allocate_WaitGroup(old_counter+delta, sem_address));
		}
}

const runtime_Semrelease = (sem_address) => {
	while(!heap_isEmpty_Queue(sem_address)) {
		const id = heap_pop_Elem_from_Queue(sem_address);
		activeGoroutines[id].unblock()
	}
}

const runtime_Semacquire = (sem_address) => {
	runningGoroutine.block()
	heap_add_Elem_to_Queue(sem_address, runningGoroutine.id);
}

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

for (const key in constants) primitive_object[key] = constants[key];

export const compile_time_environment_extend = (vs, e) => {
	//  make shallow copy of e
	return push([...e], vs);
};

// compile-time frames only need synbols (keys), no values
const global_compile_frame = Object.keys(primitive_object);
export const global_compile_environment = [global_compile_frame];

/* **********************
 * operators and builtins
 * **********************/

const binop_microcode = {
	"+": (x, y) =>
		(is_number(x) && is_number(y)) || (is_string(x) && is_string(y))
			? x + y
			: error([x, y], "+ expects two numbers" + " or two strings, got:"),
	// todo: add error handling to JS for the following, too
	"*": (x, y) => x * y,
	"-": (x, y) => x - y,
	"/": (x, y) => x / y,
	"%": (x, y) => x % y,
	"<": (x, y) => x < y,
	"<=": (x, y) => x <= y,
	">=": (x, y) => x >= y,
	">": (x, y) => x > y,
	"==": (x, y) => x === y,
	"!=": (x, y) => x !== y,
	"&&": (x, y) => x && y,
	"||": (x, y) => x || y,
};

// v2 is popped before v1
const apply_binop = (op, v2, v1) =>
	JS_value_to_address(
		binop_microcode[op](address_to_JS_value(v1), address_to_JS_value(v2)),
	);

const unop_microcode = {
	"-": (x) => -x,
	"+": (x) => x,
	"!": (x) => !x,
};

const apply_unop = (op, v) =>
	JS_value_to_address(unop_microcode[op](address_to_JS_value(v)));

const apply_builtin = (builtin_id) => {
	const result = builtin_array[builtin_id]();
	if(!runningGoroutine.isBlocked()){
		OS.pop(); // pop fun
		push(OS, result);
	}
};

// creating global runtime environment
const primitive_values = Object.values(primitive_object);
const frame_address = heap_allocate_Frame(primitive_values.length);
for (let i = 0; i < primitive_values.length; i++) {
	const primitive_value = primitive_values[i];
	if (
		typeof primitive_value === "object" &&
		primitive_value.hasOwnProperty("id")
	) {
		heap_set_child(frame_address, i, heap_allocate_Builtin(primitive_value.id));
	} else if (typeof primitive_value === "undefined") {
		heap_set_child(frame_address, i, Undefined);
	} else {
		heap_set_child(frame_address, i, heap_allocate_Number(primitive_value));
	}
}

const global_environment = heap_Environment_extend(
	frame_address,
	heap_empty_Environment,
);

class Goroutine {
	id;
    OS; // JS array (stack) of words (Addresses,
        //        word-encoded literals, numbers)
    PC; // JS number
    E;  // heap Address
    RTS;// JS array (stack) of Addresses
	finished;
	blocked;

	constructor(id, OS, PC, E, RTS){
		this.id = id;
		this.OS = OS;
		this.PC = PC;
		this.E = E;
		this.RTS = RTS;
		this.finished = false;
		this.blocked = false;
	}

	update(OS, PC, E, RTS){
		this.OS = OS;
		this.PC = PC;
		this.E = E;
		this.RTS = RTS;
		return this;
	}

	block() {
		this.blocked = true;
	}

	unblock() {
		if(this.blocked = true) {
			this.blocked = false;
			runQueue.push(this.id);
		}
	}

	isBlocked() {
		return this.blocked;
	}
}

/* *******
 * machine
 * *******/

// machine registers
let OS; // JS array (stack) of words (Addresses,
//        word-encoded literals, numbers)
let PC; // JS number
let E; // heap Address
let RTS; // JS array (stack) of Addresses
let runQueue; // TODO description
let activeGoroutines
let runningGoroutine;     // TODO description
let numberOfRoutinesCreated;
HEAP; // (declared above already)

const microcode = {
	LDC: (instr) => {
		if(instr.type==undefined) {
			push(OS, JS_value_to_address(instr.val))
		}else if(instr.type=="pointer"){
			const [frame_index, value_index] = instr.val;
			const address  = heap_allocate_Pointer(
									JS_value_to_address(frame_index),
									JS_value_to_address(value_index),
							)
			push(OS, address);
		}
	},
	UNOP: (instr) => push(OS, apply_unop(instr.sym, OS.pop())),
	BINOP: (instr) => push(OS, apply_binop(instr.sym, OS.pop(), OS.pop())),
	POP: (instr) => OS.pop(),
	JOF: (instr) => (PC = is_True(OS.pop()) ? PC : instr.addr),
	GOTO: (instr) => (PC = instr.addr),
	ENTER_SCOPE: (instr) => {
		push(RTS, heap_allocate_Blockframe(E));
		const frame_address = heap_allocate_Frame(instr.num);
		E = heap_Environment_extend(frame_address, E);
		for (let i = 0; i < instr.num; i++) {
			heap_set_child(frame_address, i, Unassigned);
		}
	},
	EXIT_SCOPE: (instr) => (E = heap_get_Blockframe_environment(RTS.pop())),
	LD: (instr) => {
		const pos = instr.pos?? address_to_JS_value(OS.pop()); // if pos is null, the are dereferencing a variable and the position is already on the OS.
		const val = heap_get_Environment_value(E, pos);
		if (is_Unassigned(val)) error("access of unassigned variable");
		push(OS, val);
	},
	ASSIGN: (instr) => {
		if(instr.type == undefined){
			if (instr.isDeref) {
				const pointer_address = heap_get_Environment_value(E, instr.pos);
				if (!is_Pointer(pointer_address)) error("is not a pointer");
				heap_set_Environment_value(E, address_to_JS_value(pointer_address), OS.pop())
			}else{
				heap_set_Environment_value(E, instr.pos, OS.pop())
			}
		}else if(instr.type == "waitGroup") {
			heap_set_Environment_value(E, instr.pos, heap_allocate_WaitGroup());
		}else if(instr.type == "mutex") {
			heap_set_Environment_value(E, instr.pos, heap_allocate_Mutex());
		} else if(instr.type == "int"){
			heap_set_Environment_value(E, instr.pos, heap_allocate_Number(0));
		}else if(instr.type == "string"){
			heap_set_Environment_value(E, instr.pos, heap_allocate_String(""));
		}else {
			error("not supported default type")
		}
	},
	SEND: (instr) => {
		const address = heap_get_Environment_value(E, instr.pos);
		if(!is_Chan(address)) error ("can only send to a channel");
		const qcount = heap_get(address+1);
		const dataqsiz = heap_get(address+2);
		const buffer_addr =  heap_get(address+3);
		const sendx = heap_get(address+4);
		const recvq_addr = heap_get(address+6);
		const sendq_addr = heap_get(address+7);
		// Found a waiting receiver. We pass the value we want to send
		// directly to the receiver, bypassing the channel buffer (if any). 
		if(!heap_isEmpty_Queue(recvq_addr)){
			const rec_id = heap_pop_Elem_from_Queue(recvq_addr);
			const rec_goroutine  = activeGoroutines[rec_id];
			//display(rec_id, "rec_id: ")
			rec_goroutine.OS.push(OS.pop());
			rec_goroutine.unblock();
		}
		// Space is available in the channel buffer. Enqueue the element to send.
		else if(qcount < dataqsiz){
			
			// buffer_addr + send index + 1 for buffer tag
			heap_set(buffer_addr + sendx + 1 , OS.pop());
			heap_set(address+4, sendx+1 == dataqsiz ? 0: sendx+1);
			heap_set(address+1, qcount+1);
			//display( qcount+1, "qcount")
		}
		// Block on the channel. Some receiver will complete our operation for us.
		else {
			heap_add_Elem_to_Queue(sendq_addr, runningGoroutine.id);
			runningGoroutine.block();
		}
	},
	REC: (instr) => {
		//display("rec0")
		const address = heap_get_Environment_value(E, instr.pos);
		if(!is_Chan(address)) error ("can only receive from a channel");
		const qcount = heap_get(address+1);
		const dataqsiz = heap_get(address+2);
		const buffer_addr =  heap_get(address+3);
		const sendx = heap_get(address+4);
		const recvx = heap_get(address+5);
		const recvq_addr = heap_get(address+6);
		const sendq_addr = heap_get(address+7);
		// Just found waiting sender.
		if(!heap_isEmpty_Queue(sendq_addr)){
			//display("rec1")
			const send_id = heap_pop_Elem_from_Queue(sendq_addr);
			const send_goroutine = activeGoroutines[send_id]
			const send_val = send_goroutine.OS.pop();
			send_goroutine.unblock();
			// If buffer is size 0, receive value directly from sender.
			if(dataqsiz == 0){
				OS.push(send_val);
				//display("rec1.1")
			}
			// Otherwise, receive from head of queue
			// and add sender's value to the tail of the queue (both map to
			// the same buffer slot because the queue is full). 
			else {
				//display("rec1.2")
				const elem_addr = buffer_addr + recvx + 1;
				OS.push(heap_get(elem_addr));
				heap_set(elem_addr, send_val);
				heap_set(address+4, sendx+1 == dataqsiz ? 0: sendx+1);
				heap_set(address+5, recvx+1 == dataqsiz ? 0: recvx+1);
			}
		}
		// Receive directly from queue.
		else if(qcount > 0){
			// display("rec2")
			// buffer_addr + receive index + 1 for buffer tag
			OS.push(heap_get(buffer_addr + recvx + 1));
			heap_set(address+5, recvx+1 == dataqsiz ? 0: recvx+1);
			heap_set(address+1, qcount-1);
		}
		// no sender available: block on this channel.
		else {
			//display("rec3")
			heap_add_Elem_to_Queue(recvq_addr, runningGoroutine.id);
			runningGoroutine.block();
		}
	},
	LDF: (instr) => {
		const closure_address = heap_allocate_Closure(instr.arity, instr.addr, E);
		push(OS, closure_address);
	},
	CALL: (instr) => {
		const arity = instr.arity;
		const fun = peek(OS, arity);
		if (is_Builtin(fun)) {
			return apply_builtin(heap_get_Builtin_id(fun));
		}
		const frame_address = heap_allocate_Frame(arity);
		for (let i = arity - 1; i >= 0; i--) {
			heap_set_child(frame_address, i, OS.pop());
		}
		OS.pop(); // pop fun
		push(RTS, heap_allocate_Callframe(E, PC));
		E = heap_Environment_extend(
			frame_address,
			heap_get_Closure_environment(fun),
		);
		PC = heap_get_Closure_pc(fun);
	},
	GO: (instr) => {
		const arity = instr.arity;
		const fun = peek(OS, arity);
		if (is_Builtin(fun)) {
			display("Warning: No goroutine will be created when you call a builtin function.")
			return apply_builtin_goroutine(heap_get_Builtin_id(fun));
		}
		const frame_address = heap_allocate_Frame(arity);
		for (let i = arity - 1; i >= 0; i--) {
			heap_set_child(frame_address, i, OS.pop());
		}
		OS.pop(); // pop fun
		const RTSnew = [];
		push(RTSnew, heap_allocate_Goroutineframe(E, PC));
		const Enew = heap_Environment_extend(
			frame_address,
			heap_get_Closure_environment(fun),
		);
		const PCnew = heap_get_Closure_pc(fun);
		
		const id = numberOfRoutinesCreated++;
		activeGoroutines[id] = new Goroutine(id, [], PCnew, Enew, RTSnew);
		runQueue.push(id);
	},
	TAIL_CALL: (instr) => {
		const arity = instr.arity;
		const fun = peek(OS, arity);
		if (is_Builtin(fun)) {
			return apply_builtin(heap_get_Builtin_id(fun));
		}
		const frame_address = heap_allocate_Frame(arity);
		for (let i = arity - 1; i >= 0; i--) {
			heap_set_child(frame_address, i, OS.pop());
		}
		OS.pop(); // pop fuam
		// don't push on RTS here
		E = heap_Environment_extend(
			frame_address,
			heap_get_Closure_environment(fun),
		);
		PC = heap_get_Closure_pc(fun);
	},
	RESET: (instr) => {
		PC--;
		// keep popping...
		const top_frame = RTS.pop();
		if (is_Callframe(top_frame)) {
			// ...until top frame is a call frame
			PC = heap_get_Callframe_pc(top_frame);
			E = heap_get_Callframe_environment(top_frame);
		} else if(is_Goroutineframe(top_frame)){
			runningGoroutine.finished = true;
		}
	},
};

function contextSwitch(){
	runningGoroutine = activeGoroutines[runQueue.shift()];
	display(runningGoroutine.id, "running Routine: ")
	OS = runningGoroutine.OS;
	PC = runningGoroutine.PC;
	E = runningGoroutine.E;
	RTS = runningGoroutine.RTS;
	}

export function run(instrs) {
	numberOfRoutinesCreated = 0;
	const main_Goroutine = new Goroutine(numberOfRoutinesCreated++, [], 0, global_environment, []);
	
	stringPool = {};

	runQueue = [0];
	activeGoroutines = {0: main_Goroutine};
	contextSwitch()
	//print_code(instrs)
	while (!(instrs[PC].tag === "DONE")) {
		//display(runningGoroutine.id)
		for (let i = 0; i < 100; i++) {
			if(instrs[PC].tag === "DONE") {
				//display(OS, "\nfinal operands:           ")
				//print_OS()
				return;
			}else if(runningGoroutine.finished || runningGoroutine.isBlocked()){
				break;
			}
			//heap_display()
			//display(PC, "PC: ")
			// display(instrs[PC].tag, "instr: ")
			//print_OS("\noperands:            ");
			//print_RTS("\nRTS:            ");
			const instr = instrs[PC++];
			microcode[instr.tag](instr);
			//display(PC, "next instruction: ")
		}

		if(runQueue.length > 0) {
			const id = runningGoroutine.id
			if(!runningGoroutine.finished) {
				activeGoroutines[id] = runningGoroutine.update([...OS], PC, E, [...RTS]);
				if(!runningGoroutine.isBlocked()) {
					runQueue.push(id)
				}
			}else {
				delete activeGoroutines[id];
			}
			contextSwitch()
		}else if(runningGoroutine.finished || runningGoroutine.isBlocked()){
			error("all goroutines are blocked")
		}
	}

	// display(OS, "\nfinal operands:           ")
	// print_OS()
}

// debugging

const print_code = (instrs) => {
	for (let i = 0; i < instrs.length; i = i + 1) {
		const instr = instrs[i];
		display(
			"",
			stringify(i) +
				": " +
				instr.tag +
				" " +
				(instr.tag === "GOTO" ? stringify(instr.addr) : "") +
				(instr.tag === "ENTER_SCOPE" ? stringify(instr.num) : "") +
				(instr.tag === "LDC" ? stringify(instr.val) : "") +
				(instr.tag === "ASSIGN" ? stringify(instr.pos) : "") +
				(instr.tag === "LD" ? stringify(instr.pos) : "") +
				(instr.tag === "BINOP" ? stringify(instr.sym) : ""),
		);
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
		display("", stringify(i) + ": " + address_to_JS_value(val));
	}
};