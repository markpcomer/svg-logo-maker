// Importing classes from shapes.js, inquirer, fs

const { Triangle, Circle, Square } = require("./lib/shapes");
const inquirer = require("inquirer");
const fs = require("fs");
const { writeFile } = require("fs/promises");
const SVG = require("./lib/svg");

// Command line prompts for SVG logo choices
function init() {
            inquirer.prompt ([
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
            // 
            .then(({shapeText, textColor, shapeForm, shapeColor}) => {
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
              // Writes SVG file using user answer from above prompts
              writeFile("logo.svg", finalSVG.render());
            })
            .then(() => {
                console.log("Generated logo.svg");
            })
            .catch((error) => {
                console.error('An error has occured:', error);
                
            })
}


init();


