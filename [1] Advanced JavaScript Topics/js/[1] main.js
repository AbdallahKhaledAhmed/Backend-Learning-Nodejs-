// var VS let VS const
// const can't change it's value later and you have to initalize the value at declearation
const pi = 3.14;
// pi = 3;  => error

function fo() {
  // for (var i = 0; i < 6; i++) {      var => can access the i outside the for loop scope until we reach the end of the fo function because i is hoisted
  // for (const i = 0; i < 6; i++) {    let & const => can't access the i outside the for loop scope
  for (let i = 0; i < 6; i++) {
    console.log(i);
  }
  //   console.log(i); => error if using let or const
}
fo();

// ===========================================================

// template string literal
const firstName = "Abdallah";
const lastName = "Khaled";
const fullName = firstName + " " + lastName; // old syntax
const fullName1 = `${firstName} ${lastName}`; // ES6 syntax

// ===========================================================

// Arrow Function Expretion (ES6)
const sayHello = (username) => {
  console.log("Hello " + username);
};

// ===========================================================

// Destructuring Objects
const student = {
  firstName: "Abdallah",
  lastName: "Khaled",
  age: 21,
  gpa: 4,
  level: 3,
};
const { firstName: fn, lastName: ln, age: ag, gpa: gp, level: lv } = student;
console.log(fn);

// Destructuring Arrays
const names = ["Abdallah", "Khaled", "Ahmed"];
const [name1, , name3] = names;
console.log(name3);
