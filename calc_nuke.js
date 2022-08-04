/* 
After a two-week break for vacation, and after talking over my project with a more experienced person,  I have decided to nuke and approach calculator project differently. I am going to get a fully working calc in the console, then I'll go back and link it to the working html / css. 
*/

/* 

Plan 

- obvious functions needed
    -add √
    -subtract √
    -divide √
    -multiply √
    -operate
    -equal
    -clear √
    -input decimal (bonus)
    -divide by zero 
    -backspace (bonus)
    -early equals

- other things needed
    - array to hold current operand or operator 
    - array to hold each completed number / operand for evaluation
    - array which contain what is displayed on the calculator screen (implement last)
    
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
function operate(num1, num2, operation) {
  return operation(num1, num2);
}

const memory = []; // need to hold completed numbers / operands for eval by calculate function
const currentMemory = []; // need array for current 'uncommitted' number / operand
const displayScreen = []; // need array for what will be seen by user on display
let lastAction = 0; // need a variable to hold the last keypress



function clear() {
    memory.splice(0, memory.length);
    currentMemory.splice(0, currentMemory.length);
    displayScreen.splice(0, displayScreen.length);
    console.log("Clear has been pushed");
}

function backspace(currentMemory = currentMemory, displayScreen = displayScreen){
    currentMemory.pop();
    displayScreen.pop();
    console.log("backspace has been pushed");
}
