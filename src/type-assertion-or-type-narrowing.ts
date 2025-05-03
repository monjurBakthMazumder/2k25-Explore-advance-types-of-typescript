{
  // ✅ Type Assertion / Type Narrowing

  let anything: any;

  // Assigning a string to a variable with type 'any'
  anything = "Md Monjur Bakh Mazumder";

  // Using type assertion to tell TypeScript that 'anything' is a string
  const nameLength = (anything as string).length;
  console.log("Length of the name:", nameLength); // 👉 Output: 27

  // ✅ Function to convert kg to gm with type narrowing
  const kgToGm = (value: string | number): string | number | undefined => {
    if (typeof value === "string") {
      const convertedValue = parseFloat(value) * 1000;
      return `The converted value is: ${convertedValue}g`;
    }
    if (typeof value === "number") {
      return value * 1000;
    }
  };

  const result1 = kgToGm(100) as number;
  const result2 = kgToGm("305") as string;

  console.log("100kg in grams:", result1); // 👉 Output: 100000
  console.log("305kg in grams (string):", result2); // 👉 Output: The converted value is: 305000g

  // ✅ Custom error handling with type assertion
  type TCustomError = {
    message: string;
  };

  try {
    // For demonstration, we'll throw an error manually
    throw { message: "Something went wrong!" };
  } catch (error) {
    // Using type assertion to access the message property
    console.log("Caught error:", (error as TCustomError).message); // 👉 Output: Something went wrong!
  }
}
