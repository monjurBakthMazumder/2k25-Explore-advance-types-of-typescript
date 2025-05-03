{
  // Constraints in TypeScript
  // --------------------------
  // Using generic constraints to ensure that only objects with specific structure
  // (id, name, email) can be passed to a function.

  // This function accepts any object that at minimum contains `id`, `name`, and `email`.
  // It then adds a `course` property to the object and returns a new object.
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

  // Example 1: Student with extra property `role`
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
  // Output:
  // {
  //   id: 22,
  //   name: 'Monjur',
  //   email: 'monjur@gmail.com',
  //   role: 'User',
  //   course: 'Next Level Web Development'
  // }

  // Example 2: Student with `role` and additional `age` property
  const student2 = addCourseToStudent<{
    id: number;
    name: string;
    email: string;
    age: number;
  }>({
    id: 54,
    name: "Monjur",
    email: "monjur@gmail.com",
    age: 22,
  });

  console.log("Student 2 with course:", student2);
  // Output:
  // {
  //   id: 54,
  //   name: 'Monjur',
  //   email: 'monjur@gmail.com',
  //   role: 'Admin',
  //   age: 22,
  //   course: 'Next Level Web Development'
  // }
}
