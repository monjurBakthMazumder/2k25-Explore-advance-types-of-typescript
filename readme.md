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

## Generics with Interfaces in TypeScript

In TypeScript, interfaces can be combined with **generics** to build flexible, reusable, and strongly-typed data structures. This is especially useful when the shape of certain properties (like devices or tools a user uses) may vary.

---

### Generic Developer Interface

We define a generic interface `IDeveloper<T, X = null>` which allows us to specify the types for:

- `T`: The smartwatch used by the developer.
- `X`: (Optional) The type of bike the developer uses. Defaults to `null`.

```ts
interface IDeveloper<T, X = null> {
  name: string;
  computer: {
    brand: string;
    model: string;
    releasedYear: number;
  };
  smartWatch: T;
  bike?: X;
}
```

---

### Example 1: Developer with HP Smartwatch (no bike)

We define a `IHPWatch` interface and use it as a generic argument.

```ts
interface IHpWatch {
  brand: string;
  model: string;
  display: string;
}

const developer1: IDeveloper<IHpWatch> = {
  name: "Monjur",
  computer: {
    brand: "HP",
    model: "1200",
    releasedYear: 2025,
  },
  smartWatch: {
    brand: "HP",
    model: "1200",
    display: "4K",
  },
};

console.log("Developer with HP Watch (no bike):", developer1);
```

✔️ **Result:** A developer object where the `smartWatch` follows the `IHPWatch` interface, and `bike` is omitted.

---

### Example 2: Developer with Apple Watch and a Bike

We define additional interfaces for `IAppleWatch` and `IBike`, then pass both types into the `IDeveloper` interface.

```ts
interface IAppleWatch {
  brand: string;
  model: string;
  heartTrack: boolean;
  sleepTrack: boolean;
}

interface IBike {
  brand: string;
  EmgineCapecity: string;
}

const developer2: IDeveloper<IAppleWatch, IBike> = {
  name: "Monjur",
  computer: {
    brand: "HP",
    model: "1200",
    releasedYear: 2025,
  },
  smartWatch: {
    brand: "Apple",
    model: "8500",
    heartTrack: true,
    sleepTrack: true,
  },
  bike: {
    brand: "Yamaha",
    EmgineCapecity: "200cc",
  },
};

console.log("Developer with Apple Watch and Bike:", developer2);
```

**Result:** A strongly typed developer object with both a smartwatch and a bike defined.

---

### Why Use Generics with Interfaces?

| Benefit      | Description                                                    |
| ------------ | -------------------------------------------------------------- |
| Reusability  | Define once, use with multiple types.                          |
| Flexibility  | Swap out smartwatch or bike types easily using generics.       |
| Type Safety  | Prevent incorrect data structure at compile time.              |
| Cleaner Code | Avoids redundant interfaces and promotes consistent structure. |

---

### Summary

- Generics + Interfaces allow for flexible, strongly-typed models.
- Useful for designing reusable blueprints where some parts vary.
- Helps reduce duplication and ensures correctness across use cases.

---

## Functions with Generics

Generics in functions allow you to write **reusable and type-safe code** that works with multiple data types. This is extremely useful when you want to create flexible utilities that maintain type consistency.

---

### Basic Example (Without Generics)

```ts
const createArray = (param: string): string[] => {
  return [param];
};

const result1 = createArray("Bangladesh");
console.log("createArray result:", result1); // ['Bangladesh']
```

This function only accepts strings. If you need to support numbers, booleans, or objects, you'd have to write separate versions for each.

---

### Using Generics for Flexibility

```ts
const createArrayWithGeneric = <T>(param: T): T[] => {
  return [param];
};
```

This generic function can accept any data type. Example usage:

```ts
// String
const result2 = createArrayWithGeneric<string>("Bangladesh");
console.log("Generic with string:", result2); // ['Bangladesh']

// Number
const result3 = createArrayWithGeneric<number>(63546345);
console.log("Generic with number:", result3); // [63546345]

// Boolean
const result4 = createArrayWithGeneric<boolean>(true);
console.log("Generic with boolean:", result4); // [true]
```

---

### Using Generics with Objects

```ts
interface IUser {
  name: string;
  age: number;
}

const result5 = createArrayWithGeneric<IUser>({
  name: "Md Monjur Bath Mazumder",
  age: 23,
});

console.log("Generic with object:", result5);
// Output: [{ name: 'Md Monjur Bath Mazumder', age: 23 }]
```

This helps preserve strong typing when working with structured data like interfaces.

---

## Creating Tuples with Generics

You can also use generics to return multiple values as a tuple:

```ts
const createTupleWithGeneric = <T, Q>(param1: T, param2: Q): [T, Q] => {
  return [param1, param2];
};
```

### Tuple of string and number

```ts
const tuple1 = createTupleWithGeneric<string, number>("Bangladesh", 63546345);
console.log("Tuple with string and number:", tuple1); // ['Bangladesh', 63546345]
```

### Tuple of number and object

```ts
const tuple2 = createTupleWithGeneric<number, IUser>(323423, {
  name: "Md Monjur Bath Mazumder",
  age: 23,
});

console.log("Tuple with number and user:", tuple2);
// Output: [323423, { name: 'Md Monjur Bath Mazumder', age: 23 }]
```

---

### Why Use Generics?

- Reusability: Define a single function for multiple types.
- Type Safety: Maintains proper type relationships across parameters and return values.
- Improved Developer Experience: Offers better autocompletion and compile-time checks.
- Scalable Design: Ideal for library and API development.

---

## Constraints in TypeScript

When using **generics** in TypeScript, you may want to ensure that the generic type has a specific shape or structure. This is where **constraints** come into play. You can use `extends` to restrict what kinds of values are allowed as type arguments.

---

### Example: Enforcing Structure with Constraints

Let's consider a scenario where we want to add a course to a student object. We need to ensure that the student object contains at least `id`, `name`, and `email`.

```ts
const addCourseToStudent = <
  T extends { id: number; name: string; email: string }
>(
  student: T
) => {
  const course = "Next Level Web Development";
  return {
    ...student,
    course,
  };
};
```

### How It Works:

- `T extends { id: number; name: string; email: string }>` ensures the object passed **must include at least** these three properties.
- This keeps the function flexible (it can take extra properties too) but **type-safe**.

---

### Example 1: Student with Additional `role` Property

```ts
const student1 = addCourseToStudent<{
  id: number;
  name: string;
  email: string;
  role: string;
}>({
  id: 22,
  name: "Monjur",
  email: "monjur@gmail.com",
  role: "User",
});

console.log("Student 1 with course:", student1);
```

**Output:**

```json
{
  "id": 22,
  "name": "Monjur",
  "email": "monjur@gmail.com",
  "role": "User",
  "course": "Next Level Web Development"
}
```

---

### Example 2: Student with `role` and `age` Properties

```ts
const student2 = addCourseToStudent<{
  id: number;
  name: string;
  email: string;
  role: string;
  age: number;
}>({
  id: 54,
  name: "Monjur",
  email: "monjur@gmail.com",
  role: "Admin",
  age: 22,
});

console.log("Student 2 with course:", student2);
```

**Output:**

```json
{
  "id": 54,
  "name": "Monjur",
  "email": "monjur@gmail.com",
  "role": "Admin",
  "age": 22,
  "course": "Next Level Web Development"
}
```

---

### Why Use Constraints?

- ✅ Enforce minimum required structure on generic types.
- ✅ Maintain type safety with flexibility for additional properties.
- ✅ Ideal for utility functions, form validators, API responses, etc.

---

## Constraint Using `keyof`

In TypeScript, the `keyof` operator is a powerful tool that allows you to create types based on the keys of an object. It is especially useful when working with **generic functions** where you want to ensure a parameter corresponds to a valid property name of a given object.

---

### Basic Example

Suppose we have a type that defines some vehicles:

```ts
type TVehicle = {
  bike: string;
  car: string;
  ship: string;
};
```

You can manually create a union type of the keys like this:

```ts
type TOwn1 = "bike" | "car" | "ship";
```

Or more efficiently, you can let TypeScript derive this union using `keyof`:

```ts
type TOwn2 = keyof TVehicle; // Equivalent to: "bike" | "car" | "ship"
```

These types can then be used as values:

```ts
const person1: TOwn1 = "bike";
const person2: TOwn2 = "car";

console.log("Person1 owns:", person1); // Output: bike
console.log("Person2 owns:", person2); // Output: car
```

---

### Real-World Example: Generic Function With `keyof`

Let's say you want to create a utility function that retrieves the value of a specific property from an object. You can ensure the key being accessed is valid using a generic constraint:

```ts
const user = {
  name: "Monjur",
  age: 23,
  address: "BD",
};

const getPropertyValue = <X, Y extends keyof X>(obj: X, key: Y) => {
  return obj[key];
};

const userName = getPropertyValue(user, "name"); // OK
const userAge = getPropertyValue(user, "age"); // OK

console.log("User name:", userName); // Output: Monjur
console.log("User age:", userAge); // Output: 23
```

---

### Why Use `keyof` With Constraints?

- ✅ Ensures the provided key actually exists on the object.
- ✅ Enables fully type-safe access to object properties.
- ✅ Makes generic utility functions more robust and reusable.

---

This pattern is particularly useful in form handling, dynamic property lookups, building libraries, or anywhere dynamic object access is required with type safety.

---

## Asynchronous TypeScript

Asynchronous programming is crucial in modern web development, especially when dealing with tasks like API calls, file reading, or timers. TypeScript fully supports asynchronous operations using `Promises` and `async/await` syntax — allowing you to write clean, readable, and type-safe asynchronous code.

---

### 1. **Basic Promise Example with `boolean`**

```ts
const createPromise1 = (): Promise<boolean> => {
  return new Promise<boolean>((resolve, reject) => {
    const data: boolean = true;
    if (data) {
      resolve(data);
    } else {
      reject("Failed to load data");
    }
  });
};

const showData1 = async (): Promise<boolean> => {
  const data: boolean = await createPromise1();
  console.log("Boolean Promise Result:", data);
  return data;
};

showData1();
```

> ✅ We define a promise that resolves a boolean and consume it using `async/await`.

---

### 2. **Promise with a Custom Object Type**

```ts
type TSomething = {
  something: string;
};

const createPromise2 = (): Promise<TSomething> => {
  return new Promise<TSomething>((resolve, reject) => {
    const data: TSomething = { something: "This is something" };
    if (data) {
      resolve(data);
    } else {
      reject("Failed to load object data");
    }
  });
};

const showData2 = async (): Promise<TSomething> => {
  const data: TSomething = await createPromise2();
  console.log("Object Promise Result:", data);
  return data;
};

showData2();
```

> ✅ Promises can return objects by defining a custom type (`TSomething`) and using `Promise<TSomething>`.

---

### 3. **Fetching Data from an API using `fetch`**

```ts
type TTodo = {
  id: number;
  userId: number;
  title: string;
  completed: boolean;
};

const getTodo = async (): Promise<TTodo> => {
  const response = await fetch("https://jsonplaceholder.typicode.com/todos/1");
  const data: TTodo = await response.json();
  console.log("Fetched Todo:", data);
  return data;
};

getTodo();
```

> ✅ You can define the expected response from an API using interfaces or types like `TTodo` to ensure type safety and clarity.

---

### Why Use Async with TypeScript?

- **Type safety**: You always know what data you're dealing with.
- **Cleaner syntax**: `async/await` avoids the pyramid of doom caused by chained `.then()` calls.
- **Easy debugging**: Using tools like `console.log` with strongly-typed data makes debugging predictable.

---

## Conditional Types in TypeScript

Conditional types in TypeScript allow you to define types that depend on a condition. This makes TypeScript more flexible and powerful when dealing with types that vary based on some condition.

The syntax for a conditional type looks like this:

```ts
T extends U ? X : Y
```

Where:

- `T` is a type that will be checked.
- `U` is a type that `T` is being compared to.
- `X` is the type returned if `T` extends `U`.
- `Y` is the type returned if `T` does not extend `U`.

### Key Benefits

- **Type safety:** Conditional types allow for more granular control over type resolution.
- **Dynamic typing:** They enable more dynamic behavior based on types.
- **Code clarity:** Makes complex type logic easier to understand and manage.

## Example 1: Basic Conditional Type

```ts
type a1 = number;
type b1 = undefined;

// Check if `a1` extends null. If true, return `true`; otherwise, return `false`.
type x = a1 extends null ? true : false; // Expected Output: false
```

### Explanation:

In this example:

- `a1` is of type `number`.
- We check if `a1` extends `null`. Since `number` is not assignable to `null`, the type `x` resolves to `false`.

---

## Example 2: Nested Conditional Types

```ts
type y = a1 extends null ? true : b1 extends undefined ? undefined : any; // Expected Output: undefined
```

### Explanation:

This demonstrates how we can have conditional types nested inside each other:

- First, it checks if `a1` extends `null`. Since it doesn't, it checks if `b1` extends `undefined`.
- If `b1` extends `undefined`, the type resolves to `undefined`. Otherwise, it resolves to `any`.

---

## Example 3: Conditional Types with Object Keys

```ts
type TRich = {
  bike: string;
  car: string;
  ship: string;
};

type TCheckVehicle<T> = T extends keyof TRich ? true : false;

type THasBike = TCheckVehicle<"bike">; // Expected Output: true
type THasCar = TCheckVehicle<"car">; // Expected Output: true
type THasPlane = TCheckVehicle<"plane">; // Expected Output: false
```

### Explanation:

Here, we define an object `TRich` with keys `bike`, `car`, and `ship`, and use a conditional type to check whether a type `T` is one of those keys:

- `THasBike` will resolve to `true` because `"bike"` is a key in `TRich`.
- `THasCar` will resolve to `true` because `"car"` is also a key.
- `THasPlane` will resolve to `false` because `"plane"` is not a key of `TRich`.

---

## Summary

Conditional types are a powerful feature in TypeScript that allows you to define types that depend on certain conditions, improving the flexibility and safety of your code. By using `extends` and conditional logic, you can create complex type relationships that react dynamically based on the type in question.

### Key Takeaways:

- Conditional types let you create types that change depending on other types.
- They are useful for more complex type transformations.
- Using `keyof`, you can dynamically check for keys in an object and resolve types accordingly.

For further reading, you can check out the official TypeScript documentation on [Conditional Types](https://www.typescriptlang.org/docs/).

### Notes:

1. **Conditional Types:** This feature allows TypeScript to choose between different types based on a condition.
2. **`keyof` Operator:** The `keyof` operator is useful for checking if a type is one of the keys of an object.
3. **Practical Uses:** You can use conditional types for a variety of tasks like validating keys in an object, transforming types, or making decisions in generic functions.

---

## Mapped Types in TypeScript

Mapped types are a powerful feature in TypeScript that allows you to transform the properties of an existing type into new ones. This can be helpful for scenarios where you need to create types based on the properties of another type or modify the properties of an existing object. In this section, we'll explore how mapped types work, and how to use them with arrays and objects.

---

### 1. **Basic Example of Mapped Types with Arrays**

---

First, let’s look at an example with arrays where we convert elements from one type to another:

```typescript
const arrOfNumer: number[] = [2, 4, 7];
const arrOfString1: string[] = ["2", "4", "7"];

// Mapping number array to string array using `map()`
const arrOfString2: string[] = arrOfNumer.map((number) => number.toString());
console.log("Array of numbers:", arrOfNumer);
console.log("Array of strings (initial):", arrOfString1);
console.log("Array of strings (mapped from numbers):", arrOfString2);
```

In this example, we start with an array of numbers (`arrOfNumer`) and an array of strings (`arrOfString1`). By using the `map()` function, we create a new array (`arrOfString2`) where each number is converted into a string. This demonstrates how mapped types can help transform an array's elements.

---

### 2. **Mapped Types with Object Types**

---

Mapped types are commonly used with object types as well. Let’s consider the following example where we create a mapped type to convert object properties:

```typescript
type TAreaNumber = {
  height: number;
  width: number;
};

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
```

In this example:

- `TAreaNumber` is a type with numeric properties `height` and `width`.
- `TAreaString1` is another type where both properties are strings.
- `TAreaString2` and `TAreaString3` are mapped types that dynamically map over the keys of `TAreaNumber` and set the property types to `string`.

---

### 3. **Extracting Types with `keyof`**

---

You can also use the `keyof` operator with mapped types to extract specific property types. In the example below:

```typescript
type THeight = TAreaNumber["height"];
console.log("Type of height in TAreaNumber:", THeight);
```

The type `THeight` will be `number`, because it's extracting the type of the `height` property from `TAreaNumber`.

---

### 4. **Mapped Types with Generics**

---

Mapped types can also work with generics to create more flexible types:

```typescript
type TAreaStringGeneric<T> = {
  [key in keyof T]: T[key];
};

const area1: TAreaStringGeneric<{ height: string; width: number }> = {
  height: "100",
  width: 500,
};

console.log("Mapped type area with string height and number width:", area1);
```

Here, we define a generic mapped type `TAreaStringGeneric`, which takes an object type `T` and maps over its properties, preserving the original types. This provides a flexible way to create types based on any object you pass in.

### Summary

- **Mapped Types**: Enable transformation of types by iterating over keys and modifying their values.
- **`keyof` Operator**: Can be used to extract specific property types from an object.
- **Generics**: Allow you to create mapped types that work with any type, providing flexibility and reusability.

Mapped types are incredibly powerful and can be used to manipulate and derive new types based on the properties of other types. By understanding and utilizing mapped types, you can write more dynamic and reusable TypeScript code.

---

# TypeScript Utility Types

TypeScript provides built-in **utility types** that help you transform existing types easily and concisely. Below is an explanation of commonly used utility types along with examples.

---

## 🔹 1. `Pick<Type, Keys>`

Creates a new type by picking a subset of properties from another type.

```ts
type TPerson = {
  name: string;
  age: number;
  contactNo: string;
};

type TName = Pick<TPerson, "name">; // { name: string }
type TNameAge = Pick<TPerson, "name" | "age">; // { name: string; age: number }

const nameOnly: TName = { name: "Monjur" };
```

---

## 🔹 2. `Omit<Type, Keys>`

Creates a new type by **excluding** certain keys from an existing type.

```ts
type TContactInfo = Omit<TPerson, "name" | "age">; // { contactNo: string }

const contactInfo: TContactInfo = {
  contactNo: "1234567890",
};
```

---

## 🔹 3. `Required<Type>`

Converts all optional properties of a type to **required**.

```ts
type TPerson = {
  name: string;
  age: number;
  email?: string;
  contactNo: string;
};

type TRequiredPerson = Required<TPerson>;

const person: TRequiredPerson = {
  name: "Monjur",
  age: 23,
  email: "monjur@example.com",
  contactNo: "1234567890",
};
```

---

## 🔹 4. `Partial<Type>`

Makes all properties **optional**.

```ts
type TPartialPerson = Partial<TPerson>;

const partialPerson: TPartialPerson = {
  name: "Monjur",
};
```

---

## 🔹 5. `Readonly<Type>`

Makes all properties **immutable** (read-only).

```ts
type TReadonlyPerson = Readonly<TPerson>;

const readonlyPerson: TReadonlyPerson = {
  name: "Monjur",
  age: 23,
  email: "monjur@example.com",
  contactNo: "1234567890",
};

// readonlyPerson.name = "Test"; ❌ Error: Cannot assign to 'name' because it is a read-only property
```

---

## 🔹 6. `Record<Keys, Type>`

Creates an object type with specified keys and value types.

```ts
type TMyObj = Record<string, string>;

const myObj: TMyObj = {
  a: "aa",
  b: "bb",
  c: "cc",
};

const anyObj: Record<string, unknown> = {
  name: "Monjur",
  age: 23,
  isAdmin: true,
};
```

---

## ✅ Summary Table

| Utility Type   | Description                                               |
| -------------- | --------------------------------------------------------- |
| `Pick<T, K>`   | Picks specific properties from a type.                    |
| `Omit<T, K>`   | Removes specific properties from a type.                  |
| `Required<T>`  | Makes all properties required.                            |
| `Partial<T>`   | Makes all properties optional.                            |
| `Readonly<T>`  | Makes all properties read-only.                           |
| `Record<K, T>` | Creates an object type with keys of `K` and values of `T` |

---

## 👨‍💻 Author

**Md Monjur Bakth Mazumder**  
Software Engineer & Lead Frontend Developer  
[Qrinux](https://www.qrinux.com/)  
[Email me](mailto:md.monjurmbm2001@gmail.com)  
[Portfolio](https://mdmonjurbakthmazumder.netlify.app)

_Passionate about building clean, maintainable, and scalable applications._
