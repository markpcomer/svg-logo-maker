// Importing inquirer, and classes from shapes.js & svg.js, 
const { Triangle, Circle, Square } = require("./lib/shapes");
const inquirer = require("inquirer");
const { writeFile } = require("fs/promises");
const SVG = require("./lib/svg");

// Command line prompts for SVG logo choices
async function promptUser() {
    return inquirer.prompt ([
        {
            type: 'input',
            name: 'shapeText',
            message: "Please enter up to 3 characters.",
        },
        {
            type: 'input',
            name: 'textColor',
            message: "Enter what color you'd like for text color. Enter a color keyword or hexidecimal number.",
        },
        {
            type: 'list',
            name: 'shapeForm',
            message: "Please select a shape.",
            choices: ['Circle', 'Triangle', 'Square'],
        },
        {
            type: 'input',
            name: 'shapeColor',
            message: "Please enter your shape's color. Enter a color keyword or hexidecimal number.",
        },
    ])
    }

    // Function to create SVG logo according to user choices
async function createSVG({ shapeText, textColor, shapeForm, shapeColor }) {
    let shape;
    if (shapeForm === 'Triangle'){
        shape = new Triangle();
    } else if (shapeForm === 'Circle'){
        shape = new Circle();
    } else {
        shape = new Square();
    }
    shape.setColor(shapeColor);
    let finalSVG = new SVG();
    finalSVG.setText(shapeText, textColor);
    finalSVG.setShape(shape);    

    try {
        await writeFile("logo.svg", finalSVG.render());
        console.log("Generated logo.svg");
    } catch (error) {
        console.error("An error has occured", error);
    }
}

// Function to initialize the application
async function init(){
    try {
        const userChoices = await promptUser();
        await createSVG(userChoices);
    } catch (error) {
        console.error("An error has occured", error);
    }
}

// Call init to start the application
init();
  