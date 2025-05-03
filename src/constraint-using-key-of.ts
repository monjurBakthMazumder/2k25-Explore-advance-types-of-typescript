{
  // Constraint using keyof in TypeScript
  // ------------------------------------
  // keyof helps create types based on the keys of another object type.

  // Example object type with specific vehicle keys
  type TVehicle = {
    bike: string;
    car: string;
    ship: string;
  };

  // Manually created union type of keys
  type TOwn1 = "bike" | "car" | "ship";

  const person1: TOwn1 = "bike";

  // Using keyof to automatically derive the union of keys from TVehicle
  type TOwn2 = keyof TVehicle;

  const person2: TOwn2 = "bike"; // works the same as TOwn1

  console.log("Person1 owns:", person1); // Output: bike
  console.log("Person2 owns:", person2); // Output: bike

  // A generic object for testing key-based access
  const user = {
    name: "Monjur",
    age: 23,
    address: "BD",
  };

  // Function to get the value of a property from an object using generics
  // Y is constrained to only allow keys of X (ensures key is valid)
  const getPropertyValue = <X, Y extends keyof X>(obj: X, key: Y) => {
    return obj[key];
  };

  // Accessing valid keys
  const userName = getPropertyValue(user, "name");
  const userAge = getPropertyValue(user, "age");

  console.log("User name:", userName); // Output: Monjur
  console.log("User age:", userAge); // Output: 23
}
