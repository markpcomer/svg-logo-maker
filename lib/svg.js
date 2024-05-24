// The SVG class, 

class SVG {
    constructor() {
      this.textEl = "";
      this.shapeEl = "";
    }
  
    render() {
      return `<svg version="1.1" width="300" height="200" xmlns="http://www.w3.org/2000/svg">${this.shapeEl}${this.textEl}</svg>`;
    }

    validateText(shapeText) {
      if (shapeText.length > 3) {
        throw new Error("Text must not exceed 3 characters.");
      } 
    }

    setText(shapeText, textColor) {
      this.validateText(shapeText);
      this.textEl = `<text x="150" y="125" font-size="60" text-anchor="middle" fill="${textColor}">${shapeText}</text>`;
    }

    setShape(shape) {
      this.shapeEl = shape.render();
    }
  }
  
  module.exports = SVG;
  