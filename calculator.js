const prompt = require('prompt');

// Built off of the Ada curriculum hints for using prompt
const calculateUserInput = function(error, promptInput) {
  console.log(`Calculating: ${promptInput.num1} ${promptInput.operation} ${promptInput.num2}`);

  switch (promptInput.operation) {
    case "+":
    case "add":
      console.log(`Result: ${promptInput.num1 + promptInput.num2}`);
      break;
    case "-":
    case "subtract":
      console.log(`Result: ${promptInput.num1 - promptInput.num2}`);
      break;
    case "*":
    case "multiply":
      console.log(`Result: ${promptInput.num1 * promptInput.num2}`);
      break;
    case "/":
    case "divide":
      if (promptInput.num2 === 0) return console.log("ERROR: Cannot divide by 0.");
      console.log(`Result: ${promptInput.num1 / promptInput.num2}`);
      break;
    case "^":
    case "exponential":
      console.log(`Result: ${Math.pow(promptInput.num1, promptInput.num2)}`);
      break;
    case "%":
    case "mod":
      console.log(`Result: ${promptInput.num1 % promptInput.num2}`);
      break;
  }
} 

const schema = {
  properties: {
    num1: {
      description: "Enter the first number",
      pattern: /^[-]?\d+(\.\d+)?$/,
      message: "Invalid input, please enter a rational number.",
      required: true,
      before: function(value) { return parseFloat(value) }  
    },
    num2: {
      description: "Enter the second number",
      pattern: /^[-]?\d+(\.\d+)?$/,
      message: "Invalid input, please enter a rational number.",
      required: true,
      before: function(value) { return parseFloat(value) } 
    },
    operation: {
      description: "Enter the name or symbol for an arithmetic operation",
      pattern: /^(add|subtract|multiply|divide|exponential|mod|\-|\+|\/|\*|\%|\^){1}$/i,
      message: "Invalid input, please enter an operator symbol or string.",
      required: true,
      before: function(value) { return value.trim().toLowerCase() } 
    }
  }
}

console.log("Welcome to the Javascript Calculator!");
prompt.start();
prompt.get(schema, calculateUserInput);

