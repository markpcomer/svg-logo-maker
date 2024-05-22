
class Shape {
    constructor(shapeText, textColor, shapeForm, shapeColor) {
        this.shapeText = shapeText;
        this.textColor = textColor;
        this.shapeForm = shapeForm;
        this.shapeColor = shapeColor;
    }
}

class Triangle extends Shape {
    constructor(shapeText, textColor, shapeForm, shapeColor) {
        super(shapeText, textColor, shapeForm, shapeColor)
    }
    render() {
        return `<polygon points="150, 18 244, 182 56, 182" fill="${this.color}" />`
    }
}

class Circle extends Shape {
    constructor(shapeText, textColor, shapeForm, shapeColor) {
        super(shapeText, textColor, shapeForm, shapeColor)
    }
    render() {
        return `circle cx="150" cy="100" r="80" fill="${this.color}" />`
    }
}
class Square extends Shape {
    constructor(shapeText, textColor, shapeForm, shapeColor) {
        super(shapeText, textColor, shapeForm, shapeColor)
    }
    render() {
        return `<rect x="90" y="40" width="120" height="120" fill="${this.color}" />`
    }
}

/*
<svg version="1.1" width="300" height="200" xmlns="http://www.w3.org/2000/svg">

  <circle cx="150" cy="100" r="80" fill="green" />

  <text x="150" y="125" font-size="60" text-anchor="middle" fill="white">SVG</text>

</svg>

<svg version="1.1" width="300" height="200" xmlns="http://www.w3.org/2000/svg">

  <rect x="90" y="40" width="120" height="120" fill="turquoise" />

  <text x="150" y="125" font-size="60" text-anchor="middle" fill="#444">SVG</text>

</svg>

<svg version="1.1" width="300" height="200" xmlns="http://www.w3.org/2000/svg">

  <polygon points="150, 18 244, 182 56, 182" fill="bisque" />

  <text x="150" y="150" font-size="60" text-anchor="middle" fill="#3a0467">SVG</text>

</svg>
*/

module.exports = { Circle, Triangle, Square };
