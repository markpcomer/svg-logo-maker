const { Square, Triangle, Circle } = require("./shapes");

describe('Component', () => {
    test('should throw error if render() is called', () => {
      const component = new Component();
      const err = new Error('Child class must implement a render() method.')
      expect(component.render).toThrow(err);
    });
  });