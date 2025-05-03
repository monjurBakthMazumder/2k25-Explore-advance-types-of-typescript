{
  // ✅ Introduction to Generics in TypeScript

  // 🔹 GenericArray<T> is a reusable type alias for arrays of any data type.
  type GenericArray<T> = Array<T>;

  // --- Number Arrays ---
  const rollNumber1: number[] = [234, 234, 234, 2, 34, 234, 234];
  const rollNumber2: Array<number> = [234, 234, 234, 2, 34, 234, 234];
  const rollNumber3: GenericArray<number> = [234, 234, 234, 2, 34, 234, 234];

  console.log("Roll numbers (native):", rollNumber1);
  console.log("Roll numbers (Array<T>):", rollNumber2);
  console.log("Roll numbers (GenericArray<T>):", rollNumber3);

  // --- String Arrays ---
  const mentors1: string[] = ["x", "y", "z"];
  const mentors2: Array<string> = ["x", "y", "z"];
  const mentors3: GenericArray<string> = ["x", "y", "z"];

  console.log("Mentors (native):", mentors1);
  console.log("Mentors (Array<T>):", mentors2);
  console.log("Mentors (GenericArray<T>):", mentors3);

  // --- Boolean Arrays ---
  const bool1: boolean[] = [true, false, true];
  const bool2: Array<boolean> = [true, false, true];
  const bool3: GenericArray<boolean> = [true, false, true];

  console.log("Boolean values (native):", bool1);
  console.log("Boolean values (Array<T>):", bool2);
  console.log("Boolean values (GenericArray<T>):", bool3);

  // --- Array of Objects with Generics ---
  const users: GenericArray<{ name: string; age: number }> = [
    { name: "Monjur", age: 23 },
    { name: "Mazumder", age: 34 },
  ];

  console.log("Users with GenericArray:", users);

  // ✅ Generic Tuples

  // A generic tuple can hold two values of different types.
  type GenericTuple<X, Y> = [X, Y];

  const user1: GenericTuple<string, string> = ["x", "y"];
  console.log("GenericTuple<string, string>:", user1);

  const userWithId: GenericTuple<string, { name: string; age: number }> = [
    "x",
    {
      name: "Monjur",
      age: 23,
    },
  ];

  console.log("GenericTuple<string, object>:", userWithId);
}
