// Function to perform addition
function add(a, b) {
    return a + b;
  }
  // Function to perform subtraction
  function subtract(a, b) {
    return a - b;
  }
  // Function to perform multiplication
  function multiply(a, b) {
    return a * b;
  }
  // Function to perform division
  function divide(a, b) {
    if (b === 0) {
      return "Cannot divide by zero";
    }
    return a / b;
  }
  console.log(add(5, 3));    
  console.log(subtract(8, 3));  
  console.log(multiply(4, 2));  
  console.log(divide(10, 2));   
  console.log(divide(10, 0));  
  