const { Triangle, Circle, Square } = require('./lib/shapes.js');
const inquirer = require('inquirer');
const fs = require('fs');
const SVG = require('./lib/svg.js');

    inquirer
            .prompt ([
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
            .then((res) => {
                let shape;
                if(res.shapeForm === 'Triangle'){
                    const triangle = new Triangle();
                    fs.writeFile('./examples/logo.svg', triangle.render(),
                        (error) => {
                            if(error){
                                console.log(error);
                            }
                        }); 
                } else if (res.shapeForm === 'Circle'){
                    const circle = new Circle();
                    fs.writeFile('./examples/logo.svg', circle.render(),
                        (error) => {
                            if(error) {
                                console.log(error);
                            }
                        });
                } else {
                    const square = new Square();
                    fs.writeFile('./examples/logo.svg', square.render(),
                        (error) => {
                            if(error) {
                                console.log(error);
                            }
                        }
                    )}
            })
            .then(() => {
                console.log("Generated logo.svg");
            })
/*
let shape;
if (shapeForm ==='Triangle'){
    shape = new Triangle();
} else if (shapeForm === 'Circle'){
    shape = new Circle();
} else {
    shape = new Square();
}
shape.setColor(shapeColor);


*/ 