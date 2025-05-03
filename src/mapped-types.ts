{
  // Mapped Types Example

  // Example of an array of numbers
  const arrOfNumer: number[] = [2, 4, 7];
  // Example of an array of strings
  const arrOfString1: string[] = ["2", "4", "7"];

  // Mapping number array to string array using `map()`
  const arrOfString2: string[] = arrOfNumer.map((number) => number.toString());
  console.log("Array of numbers:", arrOfNumer); // Output: [2, 4, 7]
  console.log("Array of strings (initial):", arrOfString1); // Output: ["2", "4", "7"]
  console.log("Array of strings (mapped from numbers):", arrOfString2); // Output: ["2", "4", "7"]

  // Mapped Types Example with Object Structures

  // Defining a type for a shape (height and width in numbers)
  type TAreaNumber = {
    height: number;
    width: number;
  };

  // Defining a type for a shape (height and width in strings)
  type TAreaString1 = {
    height: string;
    width: string;
  };

  // Using a mapped type to convert the properties of TAreaNumber to strings
  type TAreaString2 = {
    [key in "height" | "width"]: string;
  };

  // Using a mapped type with `keyof` operator to make the properties of TAreaNumber into strings
  type TAreaString3 = {
    [key in keyof TAreaNumber]: string;
  };

  // Extracting a specific property type from TAreaNumber
  type THeight = TAreaNumber["height"]; // Output: number

  // Mapped type with a generic type for flexibility
  type TAreaStringGeneric<T> = {
    [key in keyof T]: T[key];
  };

  // Defining an object with a string height and a number width using a generic mapped type
  const area1: TAreaStringGeneric<{ height: string; width: number }> = {
    height: "100",
    width: 500,
  };

  console.log("Mapped type area with string height and number width:", area1);
  // Output: { height: "100", width: 500 }
}
