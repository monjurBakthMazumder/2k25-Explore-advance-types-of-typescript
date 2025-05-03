

#  2k25: Explore Advanced Types of TypeScript

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

##  Type Assertion & Type Narrowing in TypeScript

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

* **Type Assertion** (`as`) tells TypeScript what type a variable should be treated as.
* **Type Narrowing** uses conditions like `typeof` to let TypeScript infer more specific types.
* These techniques help make TypeScript code more type-safe and error-resistant, especially when dealing with flexible or uncertain input values.

---

Let me know if you'd like similar sections for other advanced topics like generics, `keyof`, or utility types!



## 👨‍💻 Author

**Md Monjur Bakth Mazumder**  
Software Engineer & Lead Frontend Developer  
[Qrinux](https://www.qrinux.com/)  
[Email me](mailto:md.monjurmbm2001@gmail.com)  
[Portfolio](https://mdmonjurbakthmazumder.netlify.app)  

*Passionate about building clean, maintainable, and scalable applications.*
