// uses a contructor function with blank strings which allow the user to assign values of their choice

class SVG {
    constructor() {
        this.textEl = "";
        this.shapeEl = "";
    }
    setText(text, color) {
        if (text.length > 3) throw new Error ("Length must not be greater than three characters.");
        this.textEl = `<text x="150" y="125" font-size="36" text-anchor="middle" fill="${color}">${text}</text>`;
    }
    setShape(shape) {
        this.shapeEl = shape.render()
    }
    render() {
        return `<svg version="1.1" width="300" height="200" xmlns="http://www.w3.org/2000/svg">${this.shapeEl}${this.textEl}</svg>`;
    }
}

// exports the SVG class for us in index.js

module.exports = SVG;
