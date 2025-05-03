{
  // Conditional Types in TypeScript
  // Conditional types allow us to define types that depend on a condition.

  // Example 1: Basic conditional types
  type a1 = number;
  type b1 = undefined;

  // If a1 is assignable to null, return true, else return false.
  type x = a1 extends null ? true : false;

  // If a1 is assignable to null, return true; else check if b1 is assignable to undefined, and return undefined, otherwise return any.
  type y = a1 extends null ? true : b1 extends undefined ? undefined : any;

  // Example 2: Conditional types with keys of an object
  // Define a type `TRich` with vehicle properties
  type TRich = {
    bike: string;
    car: string;
    ship: string;
  };

  // TCheckVehicle checks if a type T is a key in TRich.
  type TCheckVehicle<T> = T extends keyof TRich ? true : false;

  // Check for existing keys in TRich (bike, car, ship) and non-existing keys (plane)
  type THasBike = TCheckVehicle<"bike">; // Should resolve to `true`
  type THasCar = TCheckVehicle<"car">; // Should resolve to `true`
  type THasPlane = TCheckVehicle<"plane">; // Should resolve to `false`
}
