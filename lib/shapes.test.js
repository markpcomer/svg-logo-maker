// Importing shape classes from shapes.js
const { Square, Triangle, Circle } = require("./shapes");

// Tests the triangle class
describe('Triangle test', () => {
  // Tests rendering blue triangle
    test('renders a blue triangle', () => {
      const triangle = new Triangle();
      triangle.setColor("blue");
      expect(triangle.render())
      .toEqual('<polygon points="150, 18 244, 182 56, 182" fill="blue" />');
    });
    // Tests setting color to blue
    test('sets color to blue', () => {
      const triangle = new Triangle();
      triangle.setColor("blue");
      expect(triangle.color).toBe("blue");
    });
  });

  //Tests the circle class
  describe('Circle test', () => {
    //Tests rendering a yellow circle
    test('renders a yellow circle', () => {
      const circle = new Circle();
      circle.setColor("yellow");
      expect(circle.render())
      .toEqual(`<circle cx="150" cy="100" r="80" fill="yellow" />`);
    });
    //Tests setting color to yellow
    test('sets color to yellow', () => {
      const circle = new Circle();
      circle.setColor("yellow");
      expect(circle.color).toBe("yellow");
    });
  });

  // Tests the square class
  describe('Square test', () => {
    // Tests rendering a red square
    test('renders a red square', () => {
      const square = new Square();
      square.setColor("red");
      expect(square.render())
      .toEqual(`<rect x="90" y="40" width="120" height="120" fill="red" />`);
    });
    //Tests setting color to red
    test('sets color to red', () => {
      const square = new Square();
      square.setColor("red");
      expect(square.color).toBe("red");
    });
  });

  