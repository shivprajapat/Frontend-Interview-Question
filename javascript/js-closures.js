//  JavaScript closure example
// Example : 1
function outerFunction() {
  const outerVariable = "I am from the outer function";

  function innerFunction() {
    console.log(outerVariable);
  }

  return innerFunction;
}

const closureExample = outerFunction();
closureExample(); // Outputs: I am from the outer function

// Example : 2

function outer(i = 0) {
  return function inner() {
    return i++;
  };
}

const closure = outer();
console.log(closure());
console.log(closure());

useEffect(() => {
  //  componentDidMount

  return () => {
    //  componentDidUpdate
  };
}, [third]); //  componentWillUnmount
