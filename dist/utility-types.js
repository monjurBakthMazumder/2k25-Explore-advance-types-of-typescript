"use strict";
{
    const nameOnly = { name: "Monjur" };
    console.log("Picked name:", nameOnly);
    const nameAge = { name: "Monjur", age: 23 };
    console.log("Picked name and age:", nameAge);
    const contactInfo = {
        contactNo: "1234567890",
        emai: "monjur@example.com",
    };
    console.log("Omitted name and age:", contactInfo);
    const requiredPerson = {
        name: "Monjur",
        age: 23,
        emai: "monjur@example.com",
        contactNo: "1234567890",
    };
    console.log("Required person:", requiredPerson);
    const partialPerson = { name: "Monjur" };
    console.log("Partial person:", partialPerson);
    const readonlyPerson = {
        name: "Monjur",
        age: 23,
        emai: "monjur@example.com",
        contactNo: "1234567890",
    };
    console.log("Readonly person:", readonlyPerson);
    const myOnj = {
        a: "aa",
        b: "bb",
        c: "cc",
    };
    console.log("Record of string-string:", myOnj);
    const EmptyObj = {
        name: "Monjur",
        age: 23,
        isAdmin: true,
    };
    console.log("Record with unknown values:", EmptyObj);
}
