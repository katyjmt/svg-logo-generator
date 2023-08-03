const CLI = require('./cli.js');

function createSVG(shape, text) {
    return `<svg width="300" height="200" version="1.1" xmlns="http://www.w3.org/2000/svg">
${shape}
${text}
</svg>`
}

module.exports = { createSVG };