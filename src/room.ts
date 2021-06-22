export default class Room {
  name: string;
  length: number;
  width: number;

  constructor(name: string, length: number, width: number) {
    this.name = name;
    this.length = length;
    this.width = width;
  }
  getArea(): number {
    return this.length * this.width;
  }
}
