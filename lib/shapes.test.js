// Jest tests for triangle, circle and square classes


// Test provided in Assignment instructions for Triangle
const shape = new Triangle();
shape.setColour("blue");
expect(shape.render()).toEqual('<polygon points="150, 18 244, 182 56, 182" fill="blue"/>');