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
    -operate √
    -equals √
    -clear √
    -divide by zero error √
    -backspace (bonus) √
    -early equals √

- other things needed
    - array to hold current operand or operator √
    - array to hold each completed number / operand for evaluation √
    - array which contain what is displayed on the calculator screen (implement last) 
    
*/
const memory = []; // need to hold completed numbers / operands for eval by calculate function
const currentMemory = []; // need array for current 'uncommitted' number / operand
const displayScreen = []; // need array for what will be seen by user on display


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

function operate(num1 = memory[memory.length - 3], num2 = memory[memory.length - 1], operation = memory[memory.length - 2]) {
  if (isFinite(num1) && isFinite(num2) && (typeof(operation) === "string")) {
    if (operation === '/' && num2 === 0) return console.log("divide by zero error");
    if (operation === '+') return add(num1, num2);
    if (operation === '-') return subtract(num1, num2);
    if (operation === '*') return multiply(num1, num2);
    if (operation === '/') return divide(num1, num2);
  } else {
    console.log("ERROR");
  }
  console.log("test");
}

function equals(operator = memory[memory.length - 1]) {
  if (operator === '=') return operate();
}

function clear() {
    memory.splice(0, memory.length);
    currentMemory.splice(0, currentMemory.length);
    displayScreen.splice(0, displayScreen.length);
    console.log("CLEAR");
}

function backspace(currentMem = currentMemory){
    currentMem.pop();
    //displayScreen.pop();
    console.log("<<");
}


