const { Circle, Square, Triangle } = require("./shapes");

class svg {
    constructor({text = "", textColor = "", shape = "", shapeColor = ""} = {}) {
        this.text = text;
        this.textColor = textColor;
        this.shape = null;
        this.updateText(text, textColor);
        this.setShapeFromPrompt(shape, shapeColor);
    }

    setShapeFromPrompt(shape, shapeColor) {
        if (!shape) {
            return;
        }
        switch (shape) {
            case "Circle":
                this.shape = new Circle();
                break;
            case "Square":
                this.shape = new Square();
                break;
            case "Triangle":
                this.shape = new Triangle();
                break;
        }
        if (this.shape) {
            this.shape.setColor(shapeColor);
        }
    }

    updateText(text, textColor) {
        if (!text) {
            return;
        }
        if (text.length > 3) {
            throw new Error("Text should not be greater than 3 characters");
        }
        this.text = text;
        this.textColor = textColor;
    }
      
    updateShape(shape, shapeColor) {
        this.shape = shape;
        if (this.shape) {
            this.shape.setColor(shapeColor);
        }
    }
      
    getTextSvg() {
        const { shape, text, textColor } = this;
        if (text) {
            const shapeY = shape ? shape.y : 125;
            return `<text x="150" y="${shapeY}" font-size="60" text-anchor="middle" fill="${textColor}">${text}</text>`;
        }
        return '';
    }
      
    render() {
        const { shape } = this;
        const shapeRender = shape ? shape.render() : '';
        return `<svg version="1.1" width="300" height="200" xmlns="http://www.w3.org/2000/svg">${shapeRender}${this.getTextSvg()}</svg>`;
    }
}

module.exports = svg;