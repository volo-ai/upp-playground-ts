import { playgroundFunction } from "./playground";

describe("Playground", () => {
  it("should be true", () => {
    expect(playgroundFunction()).toEqual("Let's do some stuff!");
  });
});
