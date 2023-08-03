const Inquirer = require('inquirer');
const { Triangle, Circle, Square, Text } = require('./shapes.js');
// Use colour validation package to validate text and shape colours
const validateColor = require('validate-color').default;
// Use fs package to create svg files
const { writeFile } = require('fs/promises');
// Use createSvg as data input to writeFile function
const { createSVG } = require('./createSvg.js');

class CLI {
    constructor() {
        // Array containing user responses (text: string, textColour: string...)
        this.userAnswers = [];
        // Welcome message logged to the console when user launches app
        this.getStarted = console.log('Hi, welcome to SVG logo Generator. We\'re here to help you create the mediocre logo of your dreams. Please answer four simple questions to get started:');
        // Variable to store SVG shape output
        this.shapeSVG = '';
    }
    run() {
        // User prompts re logo styling using Inquirer package:
        return Inquirer
            .prompt([
                {
                    type: 'input',
                    message: 'Enter up to three characters to add to your logo.',
                    name: 'text',
                    validate(answer) {
                        if (answer.length <= 3) {
                            return true;
                        } else {
                            return 'Please enter no more than 3 characters.'
                        };
                    },
                },
                {
                    type: 'input',
                    message: 'Choose a text colour (keyword or hex).',
                    name: 'textColour',
                    validate(txtColour) {
                        if (txtColour && validateColor(txtColour)) {
                            return true;
                        } else {
                            return 'Please enter a valid colour';
                        };
                    },
                },
                {
                    type: 'rawlist',
                    message: 'Select a logo shape.',
                    name: 'shapes',
                    choices: ['circle', 'triangle', 'square'],
                },
                {
                    type: 'input',
                    message: 'Choose a shape colour (keyword or hex).',
                    name: 'shapeColour',
                    validate(shpColour) {
                        if (shpColour && validateColor(shpColour)) {
                            return true;
                        } else {
                            return 'Please enter a valid colour';
                        };
                    },
                },
            ])
            // Once responses completed by user, generate shape and text SVG
            .then(({ text, textColour, shapes, shapeColour }) => {
                switch(shapes) {
                    case 'circle':
                        const circleObject = new Circle(shapeColour);
                        this.shapeSVG = circleObject.render();
                        break;
                    case 'triangle':
                        const triangleObject = new Triangle(shapeColour);
                        this.shapeSVG = triangleObject.render();
                        break;
                    case 'square':
                        const squareObject = new Square(shapeColour);
                        this.shapeSVG = squareObject.render();
                        break;
                };
                const textObject = new Text(text, textColour);
                this.textSVG = textObject.render();
                return writeFile(
                    join(__dirname, '..', 'output', 'logo.svg'),
                    createSVG(this.shapeSVG, this.textSVG)
                );
            })
    }
}


// Export CLI module for use in app
module.exports = CLI;