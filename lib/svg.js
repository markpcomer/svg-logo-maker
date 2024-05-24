// The SVG class

class SVG {
    constructor() {
      //Text & shape elements
      this.textEl = "";
      this.shapeEl = "";
    }
  
    // Renders the SVG
    render() {
      return `<svg version="1.1" width="300" height="200" xmlns="http://www.w3.org/2000/svg">${this.shapeEl}${this.textEl}</svg>`;
    }

    // Validates text length, sends error if over 3
    validateText(shapeText) {
      if (shapeText.length > 3) {
        throw new Error("Text must not exceed 3 characters.");
      } 
    }

    // Sets text element
    setText(shapeText, textColor) {
      this.validateText(shapeText);
      this.textEl = `<text x="150" y="125" font-size="60" text-anchor="middle" fill="${textColor}">${shapeText}</text>`;
    }

    // Sets shape element
    setShape(shape) {
      this.shapeEl = shape.render();
    }
  }
  
  // Exports SVG file
  module.exports = SVG;
  