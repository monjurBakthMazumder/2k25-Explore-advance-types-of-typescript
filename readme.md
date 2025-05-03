# 2k25: Explore Advanced Types of TypeScript

This guide offers a comprehensive overview of essential and advanced TypeScript concepts. Whether you're just starting out or brushing up your skills, this documentation walks you through key topics—from basic setup to powerful type manipulation techniques including generics, conditional types, and utility types.

---

## 🛠 TypeScript Project Setup

### 1. Initialize TypeScript

```bash
tsc --init
```

### 2. Update `tsconfig.json`

```json
{
  "compilerOptions": {
    "rootDir": "./src/",
    "outDir": "./dist/",
    "target": "es2016",
    "module": "commonjs",
    "strict": true,
    "esModuleInterop": true
  }
}
```

### 3. Install `ts-node-dev`

```bash
npm install -g ts-node-dev
```

### 4. Run the project

```bash
ts-node-dev --respawn --transpile-only src/index.ts
```

---

## 📁 Folder Structure

```
2k25-Explore-advance-types-of-typescript/
├── src/             # All TypeScript source files
│   ├── index.ts     # Entry point
│   └── examples/    # Example scripts (types, functions, etc.)
├── dist/            # Compiled JavaScript output
├── tsconfig.json    # TypeScript compiler configuration
└── README.md        # This documentation file
```

---

## Advanced Types

Take your TypeScript skills to the next level with advanced type techniques:

1. **Type Assertion & Type Narrowing**
   Guide TypeScript when it's unsure about a variable’s type. Use type assertions and refine types for safety and accuracy.

2. **Interfaces: `type` vs `interface`**
   Understand the difference and best use cases for `type` aliases and `interface` structures.

3. **Introduction to Generics**
   Create reusable code components that work across different types with TypeScript generics.

4. **Generics with Interfaces**
   Use generics inside interfaces to make strongly typed, reusable components and APIs.

5. **Functions with Generics**
   Write flexible, type-safe functions that can accept multiple types with ease.

6. **Constraints in Generics**
   Limit which types a generic can accept, ensuring more predictable and robust code.

7. **Constraints Using `keyof`**
   Leverage `keyof` to restrict generics to known object properties.

8. **Asynchronous TypeScript**
   Use TypeScript's type system to safely handle asynchronous code and promises.

9. **Conditional Types**
   Build dynamic types that adapt based on input conditions.

10. **Mapped Types**
    Transform existing types into new ones by iterating over keys with mapped types.

11. **Utility Types**
    Simplify code with TypeScript’s built-in utility types like `Partial`, `Pick`, `Record`, `Required`, and more.

---

## Type Assertion & Type Narrowing in TypeScript

TypeScript sometimes cannot determine the exact type of a variable, especially when using `any` or union types like `string | number`. In such cases, **type assertion** and **type narrowing** help guide TypeScript's type system for safer, more accurate code.

---

### Example 1: Type Assertion with `any`

```ts
let anything: any;

// Assign a string value to a variable typed as 'any'
anything = "Md Monjur Bakh Mazumder";

// Use type assertion to tell TypeScript it's a string
const nameLength = (anything as string).length;
console.log("Length of the name:", nameLength); // 👉 Output: 27
```

**Explanation:**
TypeScript allows us to assert the type of `anything` as `string` using `(anything as string)`, which enables safe access to string-specific properties like `.length`.

---

### Example 2: Type Narrowing with Union Types

```ts
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
```

**Explanation:**
This function handles inputs as either a string or number. Using `typeof`, we narrow down the type inside the function to correctly parse and process the input. Then we use `as` assertions when retrieving the results, because TypeScript can't infer the exact return type from a union.

---

### Example 3: Type Assertion in Error Handling

```ts
type TCustomError = {
  message: string;
};

try {
  // Simulating an error for demonstration
  throw { message: "Something went wrong!" };
} catch (error) {
  // Type assertion to access the error message
  console.log("Caught error:", (error as TCustomError).message); // 👉 Output: Something went wrong!
}
```

**Explanation:**
In `catch` blocks, TypeScript assumes the error is of type `unknown`. To safely access properties like `.message`, we use a type assertion (`error as TCustomError`) to tell TypeScript what to expect.

---

### Summary

- **Type Assertion** (`as`) tells TypeScript what type a variable should be treated as.
- **Type Narrowing** uses conditions like `typeof` to let TypeScript infer more specific types.
- These techniques help make TypeScript code more type-safe and error-resistant, especially when dealing with flexible or uncertain input values.

---

## Interface vs Type in TypeScript

TypeScript gives you two powerful tools to define custom types: `type` aliases and `interface`. While they may appear similar, each has unique strengths.

This section explores the differences, similarities, and best use cases—with practical examples.

---

### ✅ Defining Object Shapes

Both `type` and `interface` can be used to define the shape of an object.

```ts
// Using 'type'
type TUser = {
  name: string;
  age: number;
};

type TUserWithRole = TUser & { role: string };

// Using 'interface'
interface IUser {
  name: string;
  age: number;
}

interface IUserWithRole extends IUser {
  role: string;
}
```

```ts
const user1: IUser = {
  name: "Md Monjur Bath Mazumder",
  age: 23,
};

const user2: TUserWithRole = {
  name: "Md Monjur Bath Mazumder",
  age: 23,
  role: "manager",
};

const user3: IUserWithRole = {
  name: "Md Monjur Bath Mazumder",
  age: 23,
  role: "manager",
};

console.log("User with interface:", user1);
console.log("User with type:", user2);
console.log("User with interface + extend:", user3);
```

**Explanation:**

- Both `type` and `interface` allow us to define object structure.
- Both can be extended (`interface` with `extends`, `type` with `&` intersection).
- Interfaces are slightly more flexible when working with object inheritance.

---

### Primitive Types: Only with `type`

```ts
type TRoleNumber = number; // ✅ Valid

// ❌ Interfaces can't define primitive types directly
// interface IRoleNumber = number; // Invalid
```

**Use `type` when you want to define primitive values, union types, or more complex types.**

---

### Arrays with Type and Interface

```ts
// Using 'type' for array
type TRole = number[];
const roleNumbers1: TRole = [342, 43, 546, 6, 67, 756];
console.log("Role numbers using type:", roleNumbers1);

// Using 'interface' with index signature
interface IRole {
  [index: number]: number;
}
const roleNumbers2: IRole = [342, 43, 546, 6, 67, 756];
console.log("Role numbers using interface:", roleNumbers2);
```

**Both `type` and `interface` can be used for arrays. Use whichever suits your context best.**

---

### ⚙️ Function Types

```ts
// Function type using 'type'
type TAdd = (num1: number, num2: number) => number;

// Function type using 'interface'
interface IAdd {
  (num1: number, num2: number): number;
}

const add1: TAdd = (num1, num2) => num1 + num2;
const add2: IAdd = (num1, num2) => num1 + num2;

console.log("Add using type:", add1(10, 20)); // 👉 30
console.log("Add using interface:", add2(15, 25)); // 👉 40
```

**Both are valid, and function types work well with either `type` or `interface`.**

---

### Summary: Type vs Interface

| Feature                 | `type`                           | `interface`                   |
| ----------------------- | -------------------------------- | ----------------------------- |
| Object type definition  | ✅ Yes                           | ✅ Yes                        |
| Extend another type     | ✅ Via intersection (`&`)        | ✅ Via `extends`              |
| Implements (with class) | ✅ Yes                           | ✅ Yes                        |
| Use for primitives      | ✅ Yes                           | ❌ No                         |
| Declaration merging     | ❌ No                            | ✅ Yes                        |
| Preferred for objects   | ✔ When using unions & primitives | ✔ When defining API contracts |

---

📌 **Rule of Thumb**

- Use `interface` for defining object shapes, especially when working with classes or APIs.
- Use `type` for primitives, union types, intersections, or when you need more flexibility.

---

## Introduction to Generics in TypeScript

Generics are a powerful feature in TypeScript that allow you to create reusable components or functions that work with any data type, while still maintaining type safety.

They are especially useful when building libraries, utility functions, or working with collections of data.

---

### Generic Arrays

A common use of generics is to define arrays that can hold any type of data, while ensuring type safety.

```ts
type GenericArray<T> = Array<T>;
```

We can now use `GenericArray<T>` for different types:

```ts
// Numbers
const rollNumber1: number[] = [234, 234, 234];
const rollNumber2: Array<number> = [234, 234, 234];
const rollNumber3: GenericArray<number> = [234, 234, 234];

console.log("Roll numbers (GenericArray):", rollNumber3);

// Strings
const mentors: GenericArray<string> = ["x", "y", "z"];
console.log("Mentors (GenericArray):", mentors);

// Booleans
const flags: GenericArray<boolean> = [true, false, true];
console.log("Booleans (GenericArray):", flags);

// Objects
const users: GenericArray<{ name: string; age: number }> = [
  { name: "Monjur", age: 23 },
  { name: "Mazumder", age: 34 },
];
console.log("Users (GenericArray of objects):", users);
```

**Why Use Generic Arrays?**

- Reusability: Define once, use with many types.
- Type Safety: Prevents accidental type mismatches.
- Clean Syntax: Improves readability for complex data structures.

---

### Generic Tuples

Tuples are fixed-length arrays where each position can hold a different type. We can also make them generic!

```ts
type GenericTuple<X, Y> = [X, Y];
```

```ts
const user1: GenericTuple<string, string> = ["Alice", "Admin"];
console.log("Tuple with strings:", user1);

const userWithId: GenericTuple<string, { name: string; age: number }> = [
  "user-123",
  { name: "Monjur", age: 23 },
];
console.log("Tuple with string and object:", userWithId);
```

**Why Use Generic Tuples?**

- Strong typing for structured pairs.
- Useful for key-value pairs, ID-object relationships, and more.
- Great for returning multiple values from a function.

---

### When to Use Generics

| Use Case                             | Why Use Generics?                      |
| ------------------------------------ | -------------------------------------- |
| Reusable Array/Collection Structures | Type-safe and flexible                 |
| Functions That Accept Many Types     | Enforce input/output types dynamically |
| Utility Libraries                    | Generic utilities work for all types   |
| API Response Wrappers                | Flexible return data models            |

---

### Summary

- Generics make your code **reusable, scalable, and type-safe**.
- Use generic arrays like `GenericArray<T>` for consistent handling of different types.
- Use generic tuples to strongly type fixed-length, mixed-type values.
- TypeScript generics help you write better, cleaner, and safer code.

---

## 👨‍💻 Author

**Md Monjur Bakth Mazumder**  
Software Engineer & Lead Frontend Developer  
[Qrinux](https://www.qrinux.com/)  
[Email me](mailto:md.monjurmbm2001@gmail.com)  
[Portfolio](https://mdmonjurbakthmazumder.netlify.app)

_Passionate about building clean, maintainable, and scalable applications._
