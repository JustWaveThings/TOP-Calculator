/* instructions
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


/* instructions 
Create the functions that populate the display when you click the number buttons… you should be storing the ‘display value’ in a variable somewhere for use in the next step.
*/



const arrayMemory = [];
const displayArray = []; 
const displayValue = disp(displayArray);

function disp(displayArray) {
  return document.getElementById('displayNums').textContent = displayArray;
}


const calcButtons = document.querySelectorAll('.num , .operator, .equal'); 

calcButtons.forEach((button) =>
  button.addEventListener("click", () => {
    displayArray.push(button.id);
    console.log(`what should display on screen: ${displayArray.join('')}`);
    disp(displayArray.join(''));
  })
);


console.log(displayValue);


/* 
pseudocode for calc logic:

basic use case (normal // expected  use)

    Storing / sending for evaluation / displaying / clearing memory.

      Refactor --- using same example '5 * 2 / 5 ='

      arrayMemory after each 'step'
        [5] - user
        [5, *] - user
        [5, *, 2] - user
        [5, *, 2, 10] - evaluate [0,1,2] / append result to end [3], display result [3]
        [5, *, 2, 10, /] - user 
        [5, *, 2, 10, /, 2] - user
        [5, *, 2, 10, /, 2, 5] evaluate [3,4,5] / append result to end [6], display result [6]

        - based on this, it looks like we need to evaluate the array's last 3 elements and if it matches a pattern of operand - operator - operand, then we evaluate, append to array and display 

      for the refactored path we'd need to use:
        - arrayMemory to hold user inputs and the returned evaluations 
        - array method to append user inputs / evaluations to arrayMemory (push())
        - array method to evaluate last 3 elements of array (switch or generic conditional)
        - clear array function when user hits clear (splice() with a 100 element delete argument )
        - pre-path logic that REPLACES the last operator in the array if operator is hit. ex: user hit wrong operator, or hit same operator twice or more times.  (if operator, check last element to see if its also an operator. if different operator, replace last element not append array, else, don't append array and continue)


    Attack evaluating the inputs and refining the output before display; 

      - input 
          at array[]
            - disable(or ignore) all inputs except numbers, and dot
              - once dot has been clicked, and another number has been clicked, disable dot button until operator button hit
            - if minus is hit display message "premium feature"
            - if the next to last element is a '/' and the last is '0' = display "Div by 0 Error" and disable all buttons except clear (maybe turn it a different color too)
          at array[0]
            - enable all inputs and handle per refactor logic above


      - output
        - Round to 4 decimal places if needed. Don't put 0's on to pad.  (conditional that tests how many decimal places are in the returned evaluation and calls round(), else doesn't change value.)
        
     
     
      - evaluating  
        - this is already handled in the operate() function - we pass num1, num2, num3  from the arrayMemory


let's get it done!! 
*/




















/* instructions 
Make the calculator work! You’ll need to store the first number that is input into the calculator when a user presses an operator, and also save which operation has been chosen and then operate() on them when the user presses the “=” key.

You should already have the code that can populate the display, so once operate() has been called, update the display with the ‘solution’ to the operation.

This is the hardest part of the project. You need to figure out how to store all the values and call the operate function with them. Don’t feel bad if it takes you a while to figure out the logic.
*/