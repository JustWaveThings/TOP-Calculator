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
    - array which contain what is displayed on the calculator screen (implement last) √
    
*/
const memory = []; // need to hold completed numbers / operands for eval by operate function
const currentMemory = []; // need array for current 'uncommitted' number / operand
const displayScreen = []; // need array for what will be seen by user on display which is different than the current memory
let result;

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
  if (num2 === 0) {
    result = "Div/0 Error"
  } else {
    result = num1 / num2;
  }
  return result;
}

function operate(num1 = +memory[memory.length - 3], num2 = +memory[memory.length - 1], operation = memory[memory.length - 2]) {
  if (isFinite(num1) && isFinite(num2) && (typeof (operation) === "string")) {
    (operation === 'add') ? add(num1, num2) : "";
    (operation === 'subtract') ? subtract(num1, num2) : "";
    (operation === 'multiply') ? multiply(num1, num2) : "";
    (operation === 'divide') ? divide(num1, num2) : "";
    console.log(`num1 = ${num1}`);
    console.log(`operation = ${operation} `);
    console.log(`num2 = ${num2}`);
     console.log(
       `num1 type = ${typeof num1}, num2 type = ${typeof num2}, operation type = ${typeof operation}`
     );
  } else if (isFinite(num1) || isFinite(num2) || typeof operation === "string") {
    console.log('memory does not match correct pattern (num, operator, num');
    console.log(`num1 type = ${typeof num1}, num2 type = ${typeof num2}, operation type = ${typeof operation}`);
    console.log(`num1 = ${num1}`);
    console.log(`operation = ${operation} `);
    console.log(`num2 = ${num2}`);
  } else {
    console.log("Error in operate fcn");
  }
  for (let i = 1; i <= 3; i++) {
    memory.pop(memory.length - i);
  }
  memory.push(result);
  clearScreen();
  displayScreen.push(result);
}

function clearScreen() {
  displayScreen.splice(0, displayScreen.length);
}

function clearCurrentMemory() {
  currentMemory.splice(0, currentMemory.length);
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
  console.log("<"); 
}

const calcButtons = document.querySelectorAll('.num , .operator, .equal, .other');  

let but;

calcButtons.forEach((button) =>
  button.addEventListener(
    "click",
    (e) => (
      but = button.id,
      buttonF()
    )
  )
)
  
function buttonF() {
  console.log(but);
  display();
  switch (but) {
    case "=":
      memory.push(+currentMemory.join(''));
      clearCurrentMemory();
      clearScreen();
      operate();
      break;
    case "9":
    case "8":
    case "7":
    case "6":
    case "5":
    case "4":
    case "3":
    case "2":
    case "1":
    case "0":
      currentMemory.push(+but);
      displayScreen.push(+but);
      display();
      break;
    case "add":
      operation();
      memory.push('add');
      break;
    case "subtract":
      operation();
      memory.push('subtract');
      break;
    case "multiply":
      operation();
      memory.push('multiply');
      break;
    case "divide":
      operation();
      memory.push('divide');
      break;
    case "clear":
      clearAll();
      break;
    case "<":
      backspace();
      break;
    default:
      console.log("switch statement error");
      break;
  }
  console.log(` memory -  ${memory}, currentMemory - ${currentMemory}, displayScreen - ${displayScreen}, display - ${display()}`);
}

function operation() {
  if (memory.length != 1) memory.push(+currentMemory.join(""));
  console.log(memory);
  clearCurrentMemory();
  clearScreen();
}

const display = () => document.getElementById('displayNums').textContent = displayScreen.join(''); 

