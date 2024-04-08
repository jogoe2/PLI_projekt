package main

import "fmt"

// Define a function type with the signature func(int, ...int) int
type myFuncType func(int, ...int) int

func main() {
	// Assign a function literal with the signature to a variable
	var myFunc = func(x int, y int) int {
		return 1
	}
	// Use the function
	result := myFunc(10, 1) // This will be 10 + 1 + 2 + 3 + 4 = 20
	fmt.Println("Result:", result)
}
