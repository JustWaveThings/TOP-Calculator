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

/* instructions 
Create the functions that populate the display when you click the number buttons… you should be storing the ‘display value’ in a variable somewhere for use in the next step.

 ****** ADDITIONAL ADVICE sought / received.  ***** separate dom element manipulation from 'logic code'. Once logic is complete -- serve that info to the dom modifiers. Please excuse the excessive comments. I need them to straighten this out. I know this is not best practice for code comments. */

const memory = []; // LOGIC - holds in each element a complete operand, operator, or result to be available to be evaluated or cleared.
const numberOrOperatorInProgress = [];  //LOGIC -  holds an array of the current numbers or single operator that upon activating action, will be added to memory

const calcButtons = document.querySelectorAll('.num , .operator, .equal');  // dom

calcButtons.forEach((button) =>
  button.addEventListener(
    "click",
    (e) => (
      numberOrOperatorInProgress.push(button.id),
      display(),
      //memoryHandler(),
      console.log(`The last entry on the calculator was ${numberOrOperatorInProgress[numberOrOperatorInProgress["length"] - 1]}`),
      evaluateLastAction()
    )
  )
);
 // logic - this is how we get the button clicked on the page into the numberOrOperatorInProgress and how we display the numbers on the screen at the time of click.


const display = () => document.getElementById('displayNums').textContent = numberOrOperatorInProgress.join(''); // dom

const uncommittedNumber = display; // separates logic from dom use

const uncommittedArr = [...uncommittedNumber()];

// handle logic section  // no dom manipulation allowed here. 

const arrayStatusObj = {
  empty: 0,
  operator_pending: 1,
  number_pending: 2,
}; // logic

// const arrayStatus = (memory.length === 0) ? 'empty' : memory.length; //  logic 

const uncommittedNumberLengthDefinitions = {
  empty: 0,
}

// memoryHandler is main workhorse of the calc.  It's responsible for monitoring uncommittedNumber and memory and acting when certain conditions of them each are met and calling the utility functions to 'operate the calc. I will be very interested to see how others have completed this part of the project. I have many nested conditionals and that makes me nervous but I don't see a way around it. 

function memoryHandler(arrStatus = memory.length) { //all logic in this function 
  if (arrStatus === arrayStatusObj.empty) {
    /*
       - if displayValue.length is === 0,  ignore all inputs except numbers, and dot.
          - else enable all buttons except equals
       - if minus is hit display alert "premium feature" (project doesn't explicitly say we have to deal with negative operands)
       - array.push() once numbers are entered and operator is hit
    */
    
    console.log("in the first codeblock of memoryHandler");
    
  
  } else if (arrStatus === arrayStatusObj.operator_pending) {
    /* 
       - listen to all inputs except equals and handle per refactor logic below
       - array.push() on number hit after operator hit
       - splice to clear array if clear hit
    */
    console.log("in the 2nd codeblock");
  } else if (arrStatus === arrayStatusObj.number_pending) {
    /* 
      - ignore equal 
      - if the next to last element is a '/' and the last is '0' = display "Div by 0 Error" and disable all buttons except clear (maybe turn it a different color too)
    */
   // console.log("in the 3rd codeblock");
  } else {
    /* 
        - first chance to evaluate pattern. Should be a slam dunk as it's not possible to really input the wrong things
            - evaluate memory for the pattern operand operator operand:
              if true pass them to operate() function
              if false something is wrong at the first iteration (arrStatus === 3) (throw an error), after the first iteration - beyond index[2] - we'd continue evaluating at every increase in the memory.length
    */
    //console.log("in the 4th codeblock - the else");
  }
}

function evaluateLastAction(lastAction = numberOrOperatorInProgress[numberOrOperatorInProgress['length']-1]) {
  switch (lastAction) {
    case "=":
      console.log("user input equals");
      break;
    case "+":
      console.log("user input a plus");
      operate(num1, num2, add);
      break;
    case "-":
      console.log("user input a minus");
      operate(num1, num2, subtract);
      break;
    case "x":
      console.log("user input a multiplication operator");
      operate(num1, num2, multiply);
      break;
    case "/":
      console.log("user input a division operator");
      operate(num1, num2, divide);
      break;
    case ".":
      /* this will hold all the dot logic of when to allow and when to disallow, as well as when to effectively toggle the dot on the screen
      -- dot cases to address
        -- arr[0] = . -- needs to be allowed
        -- arr[0,1] or any sequential .. that would need to be 'toggled' - the last two dots would need to be removed from array.
        -- else -- 2nd dot on arr would need to be ignored
      
      
      */
      if (lastAction === "." && !numberOrOperatorInProgress.includes(".")) {
        console.log("allow the dot");
      } else if (lastAction === "." && numberOrOperatorInProgress[numberOrOperatorInProgress.length - 2] === ".") {
        console.log("two dots in a row - need to remove both dots from array");
      } else if (lastAction === "." && numberOrOperatorInProgress.reverse().includes('.', 1)) {
        console.log("remove last dot, one already exists");
      } else {
        console.log("allow the dot");
      }
      break;
    case "clear":
      console.log("user input clear");
      break;
    default:
      console.log("user input number");
  };
}
// /* 
// pseudocode for calc logic ( there have been updates in the code blocks as new things were uncovered that below did not address -- like checking the length of the number in process at arrStatus === 0):

// basic use case (normal // expected use)

//     Storing / sending for evaluation / displaying / clearing memory.

//       Refactor --- using same example '5 * 2 / 5 ='

//       memory after each 'step'
//         [5] - user
//         [5, *] - user
//         [5, *, 2] - user
//         [5, *, 2, 10] - evaluate [0,1,2] / append result to end [3], display result [3]
//         [5, *, 2, 10, /] - user 
//         [5, *, 2, 10, /, 2] - user
//         [5, *, 2, 10, /, 2, 5] evaluate [3,4,5] / append result to end [6], display result [6]

//         - based on this, it looks like we need to evaluate the array's last 3 elements and if it matches a pattern of operand - operator - operand, then we evaluate, append to array and display 

//       for the refactored path we'd need to use:
//         - memory to hold user inputs and the returned evaluations  (done)
//         - array method to append user inputs / evaluations to memory (push())
//         - array method to evaluate last 3 elements of array (switch or generic conditional)
//         - clear array function when user hits clear (splice() with a 100 element delete argument )
//         - pre-path logic that REPLACES the last operator in the array if operator is hit. ex: user hit wrong operator, or hit same operator twice or more times.  (if operator, check last element to see if its also an operator. if different operator, replace last element not append array, else, don't append array and continue)


//     Attack evaluating the inputs and refining the output before display; 

//       - input  ** waiting to be coded out ***
//           at array[]
//             - disable(or ignore) all inputs except numbers, and dot 
//               - once dot has been clicked, and another number has been clicked, disable dot button until operator button hit
//             - if minus is hit display message "premium feature"
//           at array[0]
//             - enable all inputs and handle per refactor logic above
//              - if the next to last element is a '/' and the last is '0' = display "Div by 0 Error" and disable all buttons except clear (maybe turn it a different color too)


//       - output
//         - Round to 4 decimal places if needed. Don't put 0's on to pad.  (conditional that tests how many decimal places are in the returned evaluation and calls round(), else doesn't change value.)
        

//       - handling memory (DONE)
//         - if statement to check length of array

     
     
//       - evaluating  (DONE)
//         - this is already handled in the operate() function - we pass num1, num2, num3  from the memory


// let's get it done!