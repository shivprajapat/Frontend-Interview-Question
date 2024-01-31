const greet = (name = "shiv") => {
  return `Hello ${name}!`;
};

console.log(greet());
console.log(greet("jon"));
