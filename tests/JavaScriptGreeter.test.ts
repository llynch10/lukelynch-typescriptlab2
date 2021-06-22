import JavaScriptGreeter from "../src/JavaScriptGreeter";

describe("JavaScriptGreeter class", () => {
  test("the greeting property is set", () => {
    const obj: JavaScriptGreeter = new JavaScriptGreeter("Hello");
    expect(obj.greeting).toBe("Hello");
  });
  test("overides parent and returns proper string", () => {
    const obj: JavaScriptGreeter = new JavaScriptGreeter("Hello");
    expect(obj.greet("Luke")).toBe("console.log('Hello, Luke!')");
  });
  test("overides parent and returns proper string", () => {
    const obj: JavaScriptGreeter = new JavaScriptGreeter("Howdy");
    expect(obj.greet("Bob")).toBe("console.log('Hello, Luke!')");
  });
});
