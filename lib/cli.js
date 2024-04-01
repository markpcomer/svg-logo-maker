const inquirer = require("inquirer");
const { writeFile } = require(fs/promises);

class CLI {
    run(){
        return inquirer
            .prompt ([
                {
                    type: 'input',
                    name: 'shapeText',
                    message: "Please enter logo text here. Do not enter more than 3 characters.",
                    validate: (shapeText) => {
                        if(shapeText.length > 3) {
                            return "Do not enter more than 3 characters."
                        }
                    }
                },
                {
                    type: 'input',
                    name: 'textColor',
                    message: "Enter what color you'd like for text color. Enter a color keyword or hexidecimal number.",
                },
                {
                    type: 'checkbox',
                    name: 'shapeForm',
                    message: "Please select a shape.",
                    options: ['Circle', 'Triangle', 'Square'],
                },
                {
                    type: 'input',
                    name: 'shapeColor',
                    message: "Please enter your shape's color. Enter a color keyword or hexidecimal number.",
                },
            ])
    }
}

function writeFile(fileName, data) {
    fs.writeFile(fileName, data, (err) => {
        err ? console.log(err) : console.log("SVG generated");;
    });
}

function init() {
    
}



module.exports = CLI;