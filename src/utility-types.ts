{
  // Utility Types in TypeScript

  // Define a base type for a person
  type TPerson = {
    name: string;
    age: number;
    emai?: string;
    contactNo: string;
  };

  // Pick: Select specific properties from a type
  type TName = Pick<TPerson, "name">;
  const nameOnly: TName = { name: "Monjur" };
  console.log("Picked name:", nameOnly);

  type TNameAge = Pick<TPerson, "name" | "age">;
  const nameAge: TNameAge = { name: "Monjur", age: 23 };
  console.log("Picked name and age:", nameAge);

  // Omit: Exclude specific properties from a type
  type TContactInfo = Omit<TPerson, "name" | "age">;
  const contactInfo: TContactInfo = {
    contactNo: "1234567890",
    emai: "monjur@example.com",
  };
  console.log("Omitted name and age:", contactInfo);

  // Required: Make all properties required (no optional fields)
  type TRequiredPerson = Required<TPerson>;
  const requiredPerson: TRequiredPerson = {
    name: "Monjur",
    age: 23,
    emai: "monjur@example.com",
    contactNo: "1234567890",
  };
  console.log("Required person:", requiredPerson);

  // Partial: Make all properties optional
  type TPartialPerson = Partial<TPerson>;
  const partialPerson: TPartialPerson = { name: "Monjur" };
  console.log("Partial person:", partialPerson);

  // Readonly: Make all properties read-only
  type TReadonlyPerson = Readonly<TPerson>;
  const readonlyPerson: TReadonlyPerson = {
    name: "Monjur",
    age: 23,
    emai: "monjur@example.com",
    contactNo: "1234567890",
  };
  console.log("Readonly person:", readonlyPerson);
  // readonlyPerson.name = "Test"; // ❌ Error: Cannot assign to 'name' because it is a read-only property

  // Record: Create an object type with specified key-value types
  type TMyObj = Record<string, string>;
  const myOnj: TMyObj = {
    a: "aa",
    b: "bb",
    c: "cc",
  };
  console.log("Record of string-string:", myOnj);

  const EmptyObj: Record<string, unknown> = {
    name: "Monjur",
    age: 23,
    isAdmin: true,
  };
  console.log("Record with unknown values:", EmptyObj);
}
