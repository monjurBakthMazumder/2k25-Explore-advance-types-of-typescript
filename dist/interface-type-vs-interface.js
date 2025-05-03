"use strict";
{
    // ✅ Create object using extended type
    const user2 = {
        name: "Md Monjur Bath Mazumder",
        age: 23,
        role: "manager",
    };
    console.log("User with role using type:", user2);
    const user1 = {
        name: "Md Monjur Bath Mazumder",
        age: 23,
    };
    const user3 = {
        name: "Md Monjur Bath Mazumder",
        age: 23,
        role: "manager",
    };
    console.log("User using interface:", user1);
    console.log("User with role using interface:", user3);
    const roleNumbers1 = [342, 43, 546, 6, 67, 756];
    console.log("Role numbers using type:", roleNumbers1);
    const roleNumbers2 = [342, 43, 546, 6, 67, 756];
    console.log("Role numbers using interface:", roleNumbers2);
    const add1 = (num1, num2) => num1 + num2;
    const add2 = (num1, num2) => num1 + num2;
    console.log("Add using type:", add1(10, 20)); // 👉 Output: 30
    console.log("Add using interface:", add2(15, 25)); // 👉 Output: 40
}
