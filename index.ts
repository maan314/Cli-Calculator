#! /usr/bin/env node
//SHABANG

import inquirer from "inquirer";
const answer = await inquirer.prompt([
    { message: "Enter first number", type:"number", name:"firstNumber"},
    { message: "Enter second number", type:"number", name:"secondNumber"},
    { message:"select one of the operators to perform the operation",type: "list",name:"operator",
      choices: ["Addition", "Subtraction", "Multiplication", "Division"],},
]);
//conditional statements
if(answer.operator === "Addition"){
    console.log('Answer:',answer.firstNumber + answer.secondNumber);
}else if (answer.operator === "Subtraction"){
    console.log('Answer:',answer.firstNumber - answer.secondNumber);
}else if( answer.operator === "Multiplication"){
    console.log('Answer:',answer.firstNumber * answer.secondNumber)
}else if ( answer.operator === "Division"){
    console.log('Answer:',answer.firstNumber / answer.secondNumber)
}else {
    console.log("Please Select the Correct operator")
};