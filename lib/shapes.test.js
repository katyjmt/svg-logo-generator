// Jest tests for triangle, circle and square classes
const { Triangle, Circle, Square, Text } = require('./shapes.js');

// Test for Triangle
test('Creates a blue triangle.', () => {
    const shape = new Triangle();
    shape.shapeColour = "blue";
    expect(shape.render()).toEqual('<polygon points="150, 18 244, 182 56, 182" fill="blue"/>');
});

// Test for Circle
test('Creates a yellow circle.', () => {
    const shape = new Circle();
    shape.shapeColour = "#fcba03";
    expect(shape.render()).toEqual('<circle r="82" cx="150" cy="100" fill="#fcba03"/>');
});

// Test for Square
test('Creates a purple square.', () => {
    const shape = new Square();
    shape.shapeColour = "purple";
    expect(shape.render()).toEqual('<rect x="68" y="18" width="164" height="164" fill="purple"/>');
});


