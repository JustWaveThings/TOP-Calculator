/* 
Your calculator is going to contain functions for all of the basic math operators you typically find on simple calculators, so start by creating functions for the following items and testing them in your browser’s console.
add
subtract
multiply
divide
Create a new function operate that takes an operator and 2 numbers and then calls one of the above functions on the numbers.
*/

function add(num1, num2) {
    return num1 + num2;
}

function subtract(num1, num2) {
  return num1 - num2;
}

function multiply(num1, num2) {
  return num1 * num2;
}

function divide(num1, num2) {
  return num1 / num2;
}

function operate (num1, num2, operation) {
    return operation(num1, num2);
}

// console.log(operate(2000, 2, multiply));


/*
Create the functions that populate the display when you click the number buttons… you should be storing the ‘display value’ in a variable somewhere for use in the next step.
*/


const dispArray = [];

function disp(dispArray) {
  return document.getElementById('displayNums').textContent = dispArray;
}

const displayValue = disp(dispArray);

const calcButtons = document.querySelectorAll('.num , .operator, .equal');

calcButtons.forEach((button) =>
  button.addEventListener("click", () => {
    dispArray.push(button.id);
    console.log(`what should display on screen: ${dispArray.join('')}`);
    disp(dispArray.join(''));
  })
);



























/*
Make the calculator work! You’ll need to store the first number that is input into the calculator when a user presses an operator, and also save which operation has been chosen and then operate() on them when the user presses the “=” key.

You should already have the code that can populate the display, so once operate() has been called, update the display with the ‘solution’ to the operation.

This is the hardest part of the project. You need to figure out how to store all the values and call the operate function with them. Don’t feel bad if it takes you a while to figure out the logic.
*/