"use strict";
{
    // --- Number Arrays ---
    const rollNumber1 = [234, 234, 234, 2, 34, 234, 234];
    const rollNumber2 = [234, 234, 234, 2, 34, 234, 234];
    const rollNumber3 = [234, 234, 234, 2, 34, 234, 234];
    console.log("Roll numbers (native):", rollNumber1);
    console.log("Roll numbers (Array<T>):", rollNumber2);
    console.log("Roll numbers (GenericArray<T>):", rollNumber3);
    // --- String Arrays ---
    const mentors1 = ["x", "y", "z"];
    const mentors2 = ["x", "y", "z"];
    const mentors3 = ["x", "y", "z"];
    console.log("Mentors (native):", mentors1);
    console.log("Mentors (Array<T>):", mentors2);
    console.log("Mentors (GenericArray<T>):", mentors3);
    // --- Boolean Arrays ---
    const bool1 = [true, false, true];
    const bool2 = [true, false, true];
    const bool3 = [true, false, true];
    console.log("Boolean values (native):", bool1);
    console.log("Boolean values (Array<T>):", bool2);
    console.log("Boolean values (GenericArray<T>):", bool3);
    // --- Array of Objects with Generics ---
    const users = [
        { name: "Monjur", age: 23 },
        { name: "Mazumder", age: 34 },
    ];
    console.log("Users with GenericArray:", users);
    const user1 = ["x", "y"];
    console.log("GenericTuple<string, string>:", user1);
    const userWithId = [
        "x",
        {
            name: "Monjur",
            age: 23,
        },
    ];
    console.log("GenericTuple<string, object>:", userWithId);
}
