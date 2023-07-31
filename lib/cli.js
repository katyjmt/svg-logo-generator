const inquirer = require('inquirer');

inquirer
    .prompt([
        {
            type: 'input',
            message: 'Enter up to three characters to add to your logo.'
            name: 'text',
        },
        {
            type: 'input',
            message: 'Choose a text colour (keyword or hex).'
            name: 'textColour',
        },
        {
            type: 'rawlist',
            message: 'Select a shape.'
            name: 'shapes',
            choices: ['circle', 'triangle', 'square'],
        },
        {
            type: 'input',
            message: 'Choose a colour for your shape (keyword or hex).'
            name: 'shapeColour',
        },
    ])
    .then((response) => 
        // What to do with the user responses...
    )