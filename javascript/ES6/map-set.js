// Map
const numberMap = new Map().set("one", 1);

console.log(numberMap);

// Set
const numbers = [1, 2, 3, 1, 5, 2];

const uniqueValue = new Set(numbers);

console.log(uniqueValue);

uniqueValue.forEach((callback, value) => console.log(value));
