// importing inquirer, creating the svg file, and assigning a destination to the logo

const { prompt } = require("inquirer");
const SVG = require("./library/svg");
const { Circle, Triangle, Square } = require("./library/shapes");
const { writeFile } = require("fs/promises");
const { join } = require("path");

// proving the user with prompts for building a logo

prompt([
    {
        type: "input",
        name: "text",
        message: "Input 3 characters or less."
    },
    {
        type: "input",
        name: "textColor",
        message: "Choose a text color."
    },
    {
        type: "list",
        name: "shape",
        message: "Choose a shape.",
        choices: ["Circle", "Triangle", "Square"]
    },
    {
        type: "input",
        name: "shapeColor",
        message: "Choose a shape color."
    }

// an if else statements handles the user's input for shape generation
    
]).then(response => {
    let shape;
    if (response.shape === "Circle")
        shape = new Circle();
    else if (response.shape === "Triangle")
        shape = new Triangle();
    else
        shape = new Square();
    shape.setColor(response.shapeColor)

    const svg = new SVG();
    svg.setText(response.text, response.textColor);
    svg.setShape(shape);

    return writeFile(join("dist", "logo.svg"), svg.render());
}).then(() => {
    console.log("Generated logo.svg");
});
