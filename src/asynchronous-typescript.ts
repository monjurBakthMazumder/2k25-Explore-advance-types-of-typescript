{
  // Asynchronous TypeScript
  // TypeScript fully supports async/await with Promises.
  // We define functions that return Promise<T> and handle their responses using async/await syntax.

  // Example 1: Create a Promise that resolves to a boolean
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

  // Async function to consume the above promise
  const showData1 = async (): Promise<boolean> => {
    const data: boolean = await createPromise1();
    console.log("Boolean Promise Result:", data); // Output: true
    return data;
  };

  showData1();

  // Example 2: Create a Promise that resolves to a custom object
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

  // Async function to consume the custom object promise
  const showData2 = async (): Promise<TSomething> => {
    const data: TSomething = await createPromise2();
    console.log("Object Promise Result:", data); // Output: { something: "This is something" }
    return data;
  };

  showData2();

  // Example 3: Fetch data from an API
  type TTodo = {
    id: number;
    userId: number;
    title: string;
    completed: boolean;
  };

  const getTodo = async (): Promise<TTodo> => {
    const response = await fetch(
      "https://jsonplaceholder.typicode.com/todos/1"
    );
    const data: TTodo = await response.json();
    console.log("Fetched Todo:", data); // Output: { id: 1, userId: 1, title: "...", completed: false }
    return data;
  };

  getTodo();
}
