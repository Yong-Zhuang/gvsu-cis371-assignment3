type Course = {
  id: number;
  title: string;
  creditHours: number;
};

type Student = {
  name: string;
  age: number;
  courses: Array<Course>;
};

const studentsData: Array<Student> = [
  {
    name: "Alice",
    age: 20,
    courses: [
      { id: 1, title: "Math", creditHours: 3 },
      { id: 2, title: "History", creditHours: 2 },
    ],
  },
  {
    name: "Bob",
    age: 22,
    courses: [{ id: 3, title: "Chemistry", creditHours: 4 }],
  },
  {
    name: "Charlie",
    age: 21,
    courses: [
      { id: 1, title: "Math", creditHours: 3 },
      { id: 4, title: "Physics", creditHours: 3 },
    ],
  },
  {
    name: "David",
    age: 23,
    courses: [{ id: 5, title: "Biology", creditHours: 5 }],
  },
  {
    name: "Eve",
    age: 20,
    courses: [{ id: 6, title: "Literature", creditHours: 2 }],
  },
];

function orderByName(a: Student, b: Student): number {
  return a.name.localeCompare(b.name);
}
studentsData.sort(orderByName);
// Task #1. Rewrite the provided sort function using a Lambda (or Fat Arrow) function with an implicit return:
// studentsData.sort(/*You code*/);
console.log("Sort all students by name", studentsData);

// Task #2. Use .every() to determine if all students are older than 18.
// Expected output:
// Are all students older than 18? true
const allAdults = studentsData.every(/*You code*/);
console.log("Are all students older than 18?", allAdults);

// Task #3. Use .some() to check if any student has more than 3 courses.
// Expected output:
// Does any student have more than 3 courses? false
const anyHasManyCourses = studentsData.some(/*You code*/);
console.log("Does any student have more than 3 courses?", anyHasManyCourses);

// Task #4. Find the first student who has taken "Physics" using .find().
// Expected output:
// First student who took Physics: Charlie
const physicsStudent = studentsData.find(/*You code*/);
console.log("First student who took Physics:", physicsStudent?.name);

// Task #5. Determine the index in the studentsData array of the first student who has taken "Biology" using .findIndex().
// Expected output:
// Index of the first student who took Biology: 3
const biologyStudentIndex = studentsData.findIndex(/*You code*/);
console.log(
  "Index of the first student who took Biology:",
  biologyStudentIndex
);

// Task #6. Use .filter() to create a new array containing only students older than 21.
// Expected output:
// Students older than 21 [
//   { name: 'Bob', age: 22, courses: [ [Object] ] },
//   { name: 'David', age: 23, courses: [ [Object] ] }
// ]
const olderThan21 = studentsData.filter(/*You code*/);
console.log("Students older than 21", olderThan21);

// Task #7. Use .map() to create an array of student names.
// Expected output:
// Students enrolled in Math [ 'Alice', 'Bob', 'Charlie', 'David', 'Eve' ]
const mathStudents = studentsData.map(/*You code*/);
console.log("Students enrolled in Math", mathStudents);

// Task #8. Use .forEach() to log to the console each student's name.
// Expected output:
// List of all students:
// Alice
// Bob
// Charlie
// David
// Eve
console.log("List of all students:");
studentsData.forEach(/*You code*/);

// Task #9. Use .reduce() to determine which student has enrolled in the most courses.
// Expected output:
// Student with the most courses Charlie
const mostCourses = studentsData.reduce(/*You code*/);
console.log("Student with the most courses", mostCourses.name);

// Task #10. Determine the number of courses each student has taken and print their name along with the count, Use .map() and .forEach()
// Expected output:
// Alice has taken 2 courses.
// Bob has taken 1 course.
// Charlie has taken 2 courses.
// David has taken 1 course.
// Eve has taken 1 course.
studentsData./*You code*/;

// Task #11(bonus). List all the titles of the courses taken by students younger than 22. This task requires chaining multiple array functions.
// Expected output:
// Courses taken by students younger than 22 [ 'Math', 'History', 'Math', 'Physics', 'Literature' ]
const coursesByYounger =  /*You code*/;
console.log("Courses taken by students younger than 22", coursesByYounger);

// Task #12(bonus). List all unique courses taken by the students using .flatMap() and Set(): a Set is an Array with no duplicate values.
// Expected output:
// Unique courses [ 'Math', 'History', 'Chemistry', 'Physics', 'Biology', 'Literature' ]
const uniqueCourses = /*You code*/ ;
console.log("Unique courses", uniqueCourses);

// Task #13(bonus). Find the student who has the highest total credit hours using .reduce()
// Expected output:
// Student with most credit hours:  Charlie
const mostCreditHours = studentsData.reduce(/*You code*/);
console.log("Student with most credit hours: ", mostCreditHours.name);
