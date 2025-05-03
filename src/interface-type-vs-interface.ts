{
  // ✅ Interface vs Type in TypeScript

  // 🔷 Using 'type' to define object shape
  type TUser = {
    name: string;
    age: number;
  };

  // 🔷 Extending a type using intersection (&)
  type TUserWithRole = TUser & { role: string };

  // ✅ Using the 'type' system for primitive types (only possible with type, not interface)
  type TRoleNumber = number;

  // ✅ Create object using extended type
  const user2: TUserWithRole = {
    name: "Md Monjur Bath Mazumder",
    age: 23,
    role: "manager",
  };

  console.log("User with role using type:", user2);

  // 🔷 Using 'interface' to define object structure
  interface IUser {
    name: string;
    age: number;
  }

  // 🔷 Extending an interface
  interface IUserWithRole extends IUser {
    role: string;
  }

  const user1: IUser = {
    name: "Md Monjur Bath Mazumder",
    age: 23,
  };

  const user3: IUserWithRole = {
    name: "Md Monjur Bath Mazumder",
    age: 23,
    role: "manager",
  };

  console.log("User using interface:", user1);
  console.log("User with role using interface:", user3);

  // 🔍 Note:
  // - Interfaces can’t define primitive types directly.
  // - Types can define primitives, unions, tuples, and more.
  // - Interfaces are more commonly used for object shapes and can be extended multiple times.

  // ✅ Type & Interface for Arrays

  // Using type for array of numbers
  type TRole = number[];

  const roleNumbers1: TRole = [342, 43, 546, 6, 67, 756];
  console.log("Role numbers using type:", roleNumbers1);

  // Using interface with index signature for arrays
  interface IRole {
    [index: number]: number;
  }

  const roleNumbers2: IRole = [342, 43, 546, 6, 67, 756];
  console.log("Role numbers using interface:", roleNumbers2);

  // ✅ Function Types

  // Define function type using 'type'
  type TAdd = (num1: number, num2: number) => number;

  // Define function type using 'interface'
  interface IAdd {
    (num1: number, num2: number): number;
  }

  const add1: TAdd = (num1, num2) => num1 + num2;
  const add2: IAdd = (num1, num2) => num1 + num2;

  console.log("Add using type:", add1(10, 20)); // 👉 Output: 30
  console.log("Add using interface:", add2(15, 25)); // 👉 Output: 40
}
