const { Circle, Triangle, Square } = require("./shapes");

test("Should render green circle.", () => {
    const shape = new Circle();
    shape.setColor("green");
    expect(shape.render()).toEqual(`<circle cx="150" cy="100" r="80" fill="green" />`);
}
);

test("Should render green triangle.", () => {
    const shape = new Triangle();
    shape.setColor("green");
    expect(shape.render()).toEqual(`<polygon points="150, 18 244, 182 56, 182" fill="green" />`);
}
);

test("Should render green Square.", () => {
    const shape = new Square();
    shape.setColor("green");
    expect(shape.render()).toEqual(`<rect x="90" y="40" width="120" height="120" fill="green" />`);
}
);