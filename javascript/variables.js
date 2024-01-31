// var: Function-scoped, can be redeclared and reassigned.
// let: Block-scoped, can be reassigned but not redeclared.
// const: Block-scoped, cannot be redeclared or reassigned after initialization.

// var example
var x = 10;
var x = 20; // Redeclaration is allowed

// let example
let y = 30;
y = 40; // Can be reassigned, but not redeclared

// const example
const z = 50;
// z = 60; // Error: Cannot reassign a constant variable
console.log(x);

console.log(y);
console.log(z);

// Fetch API example for AJAX request

function fetchUser() {
  fetch("https://jsonplaceholder.typicode.com/posts")
    .then((response) => response.json())
    .then((data) => console.log(data))
    .catch((error) => console.error("Error:", error));
}

fetchUser();
