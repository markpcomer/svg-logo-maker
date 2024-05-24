const { Square, Triangle, Circle } = require("./shapes");

describe('Triangle test', () => {
    test('test for a blue triangle', () => {
      const triangle = new Triangle();
      triangle.setColor("blue");
      expect(triangle.render())
      .toEqual('<polygon points="150, 18 244, 182 56, 182" fill="blue" />');
    });
  });

  describe('Circle test', () => {
    test('test for a yellow circle', () => {
      const circle = new Circle();
      circle.setColor("yellow");
      expect(circle.render())
      .toEqual(`<circle cx="150" cy="100" r="80" fill="yellow" />`);
    });
  });

  describe('Square test', () => {
    test('test for a red square', () => {
      const square = new Square();
      square.setColor("red");
      expect(square.render())
      .toEqual(`<rect x="90" y="40" width="120" height="120" fill="red" />`);
    });
  });

  