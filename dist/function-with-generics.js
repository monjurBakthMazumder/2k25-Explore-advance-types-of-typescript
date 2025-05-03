"use strict";
{
    // 🔹 Function without generics — only works with string
    const createArray = (param) => {
        return [param];
    };
    const result1 = createArray("Bangladesh");
    console.log("createArray result:", result1); // Output: ['Bangladesh']
    // 🔹 Function with generics — can work with any type
    const createArrayWithGeneric = (param) => {
        return [param];
    };
    // ✅ Using string
    const result2 = createArrayWithGeneric("Bangladesh");
    console.log("Generic with string:", result2); // Output: ['Bangladesh']
    // ✅ Using number
    const result3 = createArrayWithGeneric(63546345);
    console.log("Generic with number:", result3); // Output: [63546345]
    // ✅ Using boolean
    const result4 = createArrayWithGeneric(true);
    console.log("Generic with boolean:", result4); // Output: [true]
    const result5 = createArrayWithGeneric({
        name: "Md Monjur Bath Mazumder",
        age: 23,
    });
    console.log("Generic with object:", result5);
    // Output: [{ name: 'Md Monjur Bath Mazumder', age: 23 }]
    // 🔹 Generic Tuple Function — combines two values of any types into a tuple
    const createTupleWithGeneric = (param1, param2) => {
        return [param1, param2];
    };
    // ✅ Tuple with string and number
    const tuple1 = createTupleWithGeneric("Bangladesh", 63546345);
    console.log("Tuple with string and number:", tuple1); // Output: ['Bangladesh', 63546345]
    // ✅ Tuple with number and IUser object
    const tuple2 = createTupleWithGeneric(323423, {
        name: "Md Monjur Bath Mazumder",
        age: 23,
    });
    console.log("Tuple with number and user:", tuple2);
    // Output: [323423, { name: 'Md Monjur Bath Mazumder', age: 23 }]
}
