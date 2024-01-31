const numbers = [1, 2, 3, 4, 5];

const sum = numbers.reduce((callback, value) => callback + value, 0);
console.log(sum);
