#! /usr/bin/env node

import chalk from "chalk";
import inquirer from "inquirer";


function rainbowText(text: any) {
    const rainbowColors = [
        chalk.red.bold.italic,
        chalk.yellow.bold.italic,
        chalk.green.bold.italic,
        chalk.blue.bold.italic,
        chalk.magenta.bold.italic,
        chalk.cyan.bold.italic
    ];

    let coloredText = '';
    for (let i = 0; i < text.length; i++) {
        const color = rainbowColors[i % rainbowColors.length];
        coloredText += color(text[i]);
    }
    return coloredText;
    }

    const currentDateTime = new Date();
    const currentDate = currentDateTime.toLocaleDateString();
    const currentTime = currentDateTime.toLocaleTimeString();

    console.log(rainbowText(`\nDate: ${currentDate} & Time: ${currentTime}`));
    console.log();

    console.log(chalk.yellowBright.italic.bold.underline("\n🟠🟢🔵  Welcome to the Quiz Game 🔵🟢🟠\n"));


let {name} = await inquirer.prompt([{
    name : "name",
    type : "input",
    message : chalk.rgb(255, 0, 255).italic.bold("Kindly Enter Your Name : "),
    validate : (input)=>{
        if(!input || /^\d+$/.test(input)){
            return ("\nPlease Enter Only Alphabetic Words");
            
        }else{
            return true
        }
    }
    
}])

console.log(chalk.italic.bold.rgb(80, 200, 120)(`\nLet's start the quiz, ${name}!\n`));


// score variable
let score :number = 0


// function
async function startQuiz(name: string) {

    // Question 1
    let quest1 = await inquirer.prompt([{

        name:"q1",
        type : "list",
        message : chalk.italic.bold.underline.rgb(255, 219, 88)(" QUESTION 01: In TypeScript: var, let, and const are keywords, what are they used for?"),
        choices : ["a)  Variable declarations.", "b)  Declaring functions.", "c)  Importing modules.",
                    "d) Defining classes."]

        }])

        if(quest1.q1 == "a)  Variable declarations."){
            
            console.log(chalk.italic.bold.rgb(57, 255, 20)(`\n${name} Your answer is correct, you got 5 point\n`));

            score += 5;
    
}else{
    console.log(chalk.italic.bold.rgb(255, 56, 0)(`\nThe answer is incorrect, The correct answer is option A ("Variable declarations."), You Got 0 point\n`));
    }

    // Question 2
    let quest2 = await inquirer.prompt([{

        name:"q2",
        type : "list",
        message : chalk.italic.bold.underline.rgb(255, 219, 88)( " QUESTION 02 : In TypeScript: (+, -, *, /, %, =) these signs are called?"),
        choices : ["a) Unary operators.", "b) Arithmetic and assignment operators.",
                    "c) Comparison operators.", "d) Logical operators."]
        }])

    if(quest2.q2 == "b) Arithmetic and assignment operators."){
        
        console.log(chalk.italic.bold.rgb(57, 255, 20)(`\n${name} Your answer is correct, you got 5 point\n`));

        score += 5;
        
    }else{
        console.log(chalk.italic.bold.rgb(255, 56, 0)(`\nThe answer is incorrect,The correct answer is option B ("Arithmetic and assignment operators."),You Got 0 point\n`));
        }

    // Question 3
    let quest3 = await inquirer.prompt([{

        name:"q3",
        type : "list",
        message : chalk.italic.bold.underline.rgb(255, 219, 88)( " QUESTION 03 : In TypeScript: which statement is used to perform conditional execution based on a condition?"),

        choices : ["a)  switch.", "b) for loop.", "c) if-else.", "d) try-catch."]
    }])

    if(quest3.q3 == "c) if-else."){

    console.log(chalk.italic.bold.rgb(57, 255, 20)(`\n${name} Your answer is correct, You got 5 point\n`));

    score += 5;

    }else{
        console.log(chalk.italic.bold.rgb(255, 56, 0)(`\nThe answer is incorrect, The correct answer is option C ("if-else."), You Got 0 point\n`));
        }

    // Question 4
    let quest4 = await inquirer.prompt([{

        name:"q4",
        type : "list",
        message : chalk.italic.bold.underline.rgb(255, 219, 88)( " QUESTION 04 : In TypeScript, which construct is used to define reusable blocks of code?"),
        choices : ["a)  Arrays.", "b) Functions.", "c)  Objects.", "d) Promises."]

    }])

    if(quest4.q4 == "b) Functions."){

    console.log(chalk.italic.bold.rgb(57, 255, 20)(`\n${name} Your answer is correct, You got 5 point\n`));

    score += 5;

    }else{
        console.log(chalk.italic.bold.rgb(255, 56, 0)(`\nThe answer is incorrect, The correct answer is option B ("Functions.") You Got 0 point\n`));
        }

    //  Question 5
    let quest5 = await inquirer.prompt([{

        name:"q5",
        type : "list",
        message : chalk.italic.bold.underline.rgb(255, 219, 88)( " QUESTION 05 : In TypeScript, what are import and export used for, in the context of modules?"),

        choices : ["a) Managing asynchronous operations.", "b) Declaring variables within a function.",
        "c) Controlling the flow of execution in loops.", "d) Importing and exporting code between modules."]
    }])

    if(quest5.q5 == "d) Importing and exporting code between modules."){

        console.log(chalk.italic.bold.rgb(57, 255, 20)(`\n${name} Your answer is correct, You got 5 point.\n `));

        score += 5;

    }else{
        console.log(chalk.italic.bold.rgb(255, 56, 0)(`\nThe answer is incorrect, The correct answer is option D ("Importing and exporting code between modules."), You Got 0 point\n`));
        }

    // Question 6
    let quest6 = await inquirer.prompt([{

        name:"q6",
        type : "list",
        message : chalk.italic.bold.underline.rgb(255, 219, 88)( " QUESTION 06 : In TypeScript, which construct is used to represent a collection of key-value pairs?"),

        choices : ["a) Arrays.", "b) Objects.", "c) Functions.", "d) Classes."]
        }])

    if(quest6.q6 == "b) Objects.") {

    console.log(chalk.italic.bold.rgb(57, 255, 20)(`\n${name} Your answer is correct, You got 5 point.\n `));

    score += 5;

    }else{
        console.log(chalk.italic.bold.rgb(255, 56, 0)(`\nThe answer is incorrect, The correct answer is option B ("Objects."), You Got 0 point\n`));
        }

  // Calculate total score
    console.log(chalk.italic.bold.rgb(255, 0, 255)(`\nTotal Score for ${name}: ${score}/30`));

    if (score > 20) {
    console.log(chalk.italic.bold.rgb(57, 255, 20)(`\nYour work is truly outstanding. Great job!`));
    } else {
    console.log(chalk.italic.bold.rgb(255, 56, 0)(`\nNice attempt. Keep learning and improving!`));
    }

console.log(chalk.italic.bold.rgb(255, 0, 255)("\n 🌟 THANK YOU, TRY AGAIN FOR THIS QUIZ 🌟 \n"));
console.log(chalk.italic.bold.rgb(255, 0, 255)("\nAuthor: Asadiftekhar\n"));

}

startQuiz(name)