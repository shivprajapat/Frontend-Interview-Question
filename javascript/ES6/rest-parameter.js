const sum = (...numbers) => {
  return numbers.reduce((callback, currentValue) => {
    return callback + currentValue;
  });
};

console.log("sum:", sum(1, 2, 3,4));
