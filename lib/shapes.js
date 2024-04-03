
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
        return
    }
}

class Circle extends Shape {
    constructor(shapeText, textColor, shapeForm, shapeColor) {
        super(shapeText, textColor, shapeForm, shapeColor)
    }
    render() {
        return
    }
}
class Square extends Shape {
    constructor(shapeText, textColor, shapeForm, shapeColor) {
        super(shapeText, textColor, shapeForm, shapeColor)
    }
    render() {
        return
    }
}

module.exports = { Circle, Triangle, Square };
