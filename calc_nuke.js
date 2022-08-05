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
const displayScreen = []; // need array for what will be seen by user on display which is different than the current memory
let result = 0;

function add(num1, num2) {
  result = num1 + num2;
  return result;
}

function subtract(num1, num2) {
  result = num1 - num2;
  return result;
}

function multiply(num1, num2) {
  result = num1 * num2;
  return result;
}

function divide(num1, num2) {
  result = num1 / num2;
  return result;
}

function operate(num1 = memory[memory.length - 3], num2 = memory[memory.length - 1], operation = memory[memory.length - 2]) {
  if (isFinite(num1) && isFinite(num2) && (typeof(operation) === "string")) {
    if (operation === '/' && num2 === 0) return console.log("divide by zero error");
    (operation === '+') ? add(num1, num2) : "";
    (operation === '-') ? subtract(num1, num2): "";
    (operation === '*') ? multiply(num1, num2): "";
    (operation === '/') ? divide(num1, num2):  "";
  } else {
    console.log("ERROR");
  }
  for (let i = 1; i <= 3; i++) {
    memory.pop(memory.length - i);
  }
  memory.push(result);
  displayScreen.push(result);
  currentDisplay();
  console.log(`memory - ${memory}`); 
}

function currentDisplay() {
  console.log(`displayScreen - ${displayScreen}`);
}

function equals() {
  return operate();
}

function clearScreen() {
  displayScreen.splice(0, displayScreen.length);
}

function clearAll() {
  memory.splice(0, memory.length);
  currentMemory.splice(0, currentMemory.length);
  displayScreen.splice(0, displayScreen.length);
  console.log("CLEAR");
}

function backspace(currentMem = currentMemory, dispScreen = displayScreen){
  currentMem.pop();
  dispScreen.pop();
  console.log("<<"); 
}
