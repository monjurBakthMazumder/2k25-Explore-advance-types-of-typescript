"use strict";
{
    const person1 = "bike";
    const person2 = "bike"; // works the same as TOwn1
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
    const getPropertyValue = (obj, key) => {
        return obj[key];
    };
    // Accessing valid keys
    const userName = getPropertyValue(user, "name");
    const userAge = getPropertyValue(user, "age");
    console.log("User name:", userName); // Output: Monjur
    console.log("User age:", userAge); // Output: 23
}
