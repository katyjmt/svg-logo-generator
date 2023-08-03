const inquirer = require('inquirer');
// Use colour validation package to validate text and shape colours
const validateColour = require('validate-color');

class CLI {
    constructor() {
        // Object containing user responses (text: string, textColour: string...)
        this.userAnswers = {};
        // Welcome message logged to the console when user launches app
        this.getStarted = console.log('Hi, welcome to SVG logo Generator. We\'re here to help you create the mediocre logo of your dreams. Please answer four simple questions to get started:');
    }
    run() {
        // User prompts re logo styling using Inquirer package:
        return inquirer
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
                        if (txtColour && validateColour(txtColour)) {
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
                        if (shpColour && validateColour(shpColour)) {
                            return true;
                        } else {
                            return 'Please enter a valid colour';
                        };
                    },
                },
            ])
            // Once responses completed by user, add them to userAnswers object
            .then(({text, textColour, shapes, shapeColour}) => {
                this.userAnswers.push({text, textColour, shapes, shapeColour});
                console.log(this.userAnswers);
            })
    }
}

// Export CLI module for use in app
exports.CLI = CLI;