import Room from "../src/room";

describe("Room", () => {
  test("Room constructor sets properties", () => {
    const room: Room = new Room("Purple", 40, 20);
    expect(room.name).toBe("Purple");
    expect(room.length).toBe(40);
    expect(room.width).toBe(20);
  });
  test("calculate area", () => {
    const room: Room = new Room("Green", 10, 20);
    expect(room.getArea()).toBe(200);
  });
});
