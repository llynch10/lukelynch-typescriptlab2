import Greeter from "../src/index";

export default class JavaScriptGreeter extends Greeter {
  greet(name: string): string {
    return `console.log('${this.greeting}, ${name}!')`;
  }
}
