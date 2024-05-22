const inquirer = require("inquirer");
const fs = require('fs');
const { Triangle, Circle, Square } = require('./shapes.js');
const SVG = require('./svg.js');

    inquirer
            .prompt ([
                {
                    type: 'input',
                    name: 'shapeText',
                    message: "Please enter logo text here. Do not enter more than 3 characters.",
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
            .then((res) => {
                if(res.shapeForm === 'Triangle'){
                    const triangle = new Triangle(res.shapeText, res.textColor, res.shapeColor);
                    fs.writeFile('./examples/logo.svg', triangle.render(),
                        (error) => {
                            if(error){
                                console.log(error);
                            }
                        }); 
                } else if (res.shapeForm === 'Circle'){
                    const circle = new Circle(res.shapeText, res.textColor, res.shapeColor);
                    fs.writeFile('./examples/logo.svg', circle.render(),
                        (error) => {
                            if(error) {
                                console.log(error);
                            }
                        });
                } else {
                    const square = new Square(res.shapeText, res.textColor, res.shapeColor);
                    fs.writeFile('./examples/logo.svg', square.render(),
                        (error) => {
                            if(error) {
                                console.log(error);
                            }
                        }
                    )}
            })
            .then(() => {
                console.log("Your logo.svg has been generated!");
            })
