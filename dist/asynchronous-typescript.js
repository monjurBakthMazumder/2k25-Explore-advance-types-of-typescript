"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
{
    // Asynchronous TypeScript
    // TypeScript fully supports async/await with Promises.
    // We define functions that return Promise<T> and handle their responses using async/await syntax.
    // Example 1: Create a Promise that resolves to a boolean
    const createPromise1 = () => {
        return new Promise((resolve, reject) => {
            const data = true;
            if (data) {
                resolve(data);
            }
            else {
                reject("Failed to load data");
            }
        });
    };
    // Async function to consume the above promise
    const showData1 = () => __awaiter(void 0, void 0, void 0, function* () {
        const data = yield createPromise1();
        console.log("Boolean Promise Result:", data); // Output: true
        return data;
    });
    showData1();
    const createPromise2 = () => {
        return new Promise((resolve, reject) => {
            const data = { something: "This is something" };
            if (data) {
                resolve(data);
            }
            else {
                reject("Failed to load object data");
            }
        });
    };
    // Async function to consume the custom object promise
    const showData2 = () => __awaiter(void 0, void 0, void 0, function* () {
        const data = yield createPromise2();
        console.log("Object Promise Result:", data); // Output: { something: "This is something" }
        return data;
    });
    showData2();
    const getTodo = () => __awaiter(void 0, void 0, void 0, function* () {
        const response = yield fetch("https://jsonplaceholder.typicode.com/todos/1");
        const data = yield response.json();
        console.log("Fetched Todo:", data); // Output: { id: 1, userId: 1, title: "...", completed: false }
        return data;
    });
    getTodo();
}
