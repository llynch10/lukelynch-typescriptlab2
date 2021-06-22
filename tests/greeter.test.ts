import Greeter from "../src/index";

describe("Greeter class", () => {
  test("the constructor sets the greeting property with the provided value", () => {
    let obj: Greeter = new Greeter("Hello");
    expect(obj.greeting).toBe("Hello");
  });
  test("the greet method returns a string in the proper format", () => {
    let obj: Greeter = new Greeter("Hello");
    expect(obj.greet("Luke")).toBe("Hello, Luke!");
  });
});
