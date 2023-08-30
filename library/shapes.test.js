const { Circle, Triangle, Square } = require("./shapes");

test("Should render green circle.", () => {
    const shape = new Circle();
    shape.setColor("green");
    expect(shape.render()).toEqual(`<circle cx="150" cy="100" r="80" fill="green" />`);
}
);