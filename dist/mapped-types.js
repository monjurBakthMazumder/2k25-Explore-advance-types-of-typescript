"use strict";
{
    // Mapped Types Example
    // Example of an array of numbers
    const arrOfNumer = [2, 4, 7];
    // Example of an array of strings
    const arrOfString1 = ["2", "4", "7"];
    // Mapping number array to string array using `map()`
    const arrOfString2 = arrOfNumer.map((number) => number.toString());
    console.log("Array of numbers:", arrOfNumer); // Output: [2, 4, 7]
    console.log("Array of strings (initial):", arrOfString1); // Output: ["2", "4", "7"]
    console.log("Array of strings (mapped from numbers):", arrOfString2); // Output: ["2", "4", "7"]
    // Defining an object with a string height and a number width using a generic mapped type
    const area1 = {
        height: "100",
        width: 500,
    };
    console.log("Mapped type area with string height and number width:", area1);
    // Output: { height: "100", width: 500 }
}
