import { secureBudget } from "../src/secureBudget";

// Tests

describe("secureBudget", () => {
  test("Wert innerhalb der Grenzen bleibt gleich", () => {
    expect(secureBudget(50, 10, 100)).toBe(50);
  });

  test("Wert auf der Grenze bleibt gleich", () => {
    expect(secureBudget(10, 10, 100)).toBe(10);
    expect(secureBudget(100, 10, 100)).toBe(100);
  });

  test("zu kleiner Wert wird auf l angehoben", () => {
    expect(secureBudget(3, 10, 100)).toBe(10);
    expect(secureBudget(-5, -1, 4)).toBe(-1);
  });

  test("zu grosser Wert wird auf u gekappt", () => {
    expect(secureBudget(250, 10, 100)).toBe(100);
    expect(secureBudget(2.5, 0, 2)).toBe(2);
  });
});
