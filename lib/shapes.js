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
        this.textPositionX = 150;
        this.textPositionY = 100;
        this.textAnchor = "middle";
        this.textDominantBaseline = "middle";
        this.fontSize = "40px";
    }
    // render() method returns XML string for text
    render() {
        return `<text x="${this.textPositionX}" y="${this.textPositionY}" font-size="${this.fontSize}" fill="${this.textColour}" text-anchor="${this.textAnchor}" dominant-baseline="${this.textDominantBaseline}">${this.text}</text>`
    }
}

// Export classes for use in module
module.exports = { Shape, Triangle, Circle, Square, Text };