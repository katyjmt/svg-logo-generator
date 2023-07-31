// Module to create and export 'Shape', 'Triangle', 'Circle', 'Square' and 'Text' classes

// Parent 'Shape' class with common properties for svg shapes
class Shape {
    constructor(shapeColour) {
        this.shapeColour = shapeColour;
    }
}

// 'Triangle' class inherits from 'Shape' class and adds triangle-specific properties
class Triangle extends Shape {
    constructor(shapeColour) {
        super(shapeColour);
        // TO DO: MAKE THESE NOT HARD-CODED
        this.polygonPoints = "150, 18 244, 182 56, 182"; 
    }
    // render() method returns XML string for SVG triangle in specified shape colour
    render() {
        return `<polygon points="${this.polygonPoints}" fill="${this.shapeColour}"/>`
    }
}

// 'Circle' class inherits from 'Shape' class and adds circle-specific properties
class Circle extends Shape {
    constructor(shapeColour) {
        super(shapeColour);
        // TO DO: MAKE THESE NOT HARD-CODED
        this.circleRadius = 82;
        this.circleCentrePositionX = 150;
        this.circleCentrePositionY = 100; 
    }
    // render() method returns XML string for SVG circle in specified shape colour
    render() {
        return `<circle r="${this.circleRadius}" cx="${this.circleCentrePositionX}" cy="${this.circleCentrePositionY}" fill="${this.shapeColour}"/>`
    }
}

// 'Square' class inherits from 'Shape' class and adds square-specific properties
class Square extends Shape {
    constructor(shapeColour) {
        super(shapeColour);
        // TO DO: MAKE THESE NOT HARD-CODED
        this.squareTopLeftPositionX = 68;
        this.squareTopLeftPositionY = 18;
        this.squareWidthHeight = 164;
    }
    // render() method returns XML string for SVG circle in specified shape colour
    render() {
        return `<rect x="${this.squareTopLeftPositionX}" y="${this.squareTopLeftPositionY}" width="${this.squareWidthHeight}" height="${this.squareWidthHeight}" fill="${this.shapeColour}"/>`
    }
}

// 'Text' class with common text properties
class Text {
    constructor(text, textColour) {
        this.text = text;
        this.textColour = textColour;
        // TO DO: MAKE THESE NOT HARD-CODED
        this.textPositionX = 150;
        this.textPositionY = 100;
        this.textAnchor = "middle";
        this.textDominantBaseline = "middle";
    }
}

module.exports = Shape;
module.exports = Triangle;
module.exports = Circle;
module.exports = Square;
module.exports = Text;