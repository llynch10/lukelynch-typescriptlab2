import LoudGreeter from "../src/LoudGreeter";

describe("loudGreeter class", () => {
  test("the greeting property is set", () => {
    let obj: LoudGreeter = new LoudGreeter("Hello");
    expect(obj.greeting).toBe("Hello");
  });
  test("loud greeter adds extra !", () => {
    let obj: LoudGreeter = new LoudGreeter("Hello");
    expect(obj.greet("Luke")).toBe("Hello, Luke!!");
  });
  test("add volume method adds extra !", () => {
    let obj: LoudGreeter = new LoudGreeter("Hello");
    obj.addVolume();
    obj.addVolume();
    obj.addVolume();
    expect(obj.greet("Luke")).toBe("Hello, Luke!!!!!");
  });
});
