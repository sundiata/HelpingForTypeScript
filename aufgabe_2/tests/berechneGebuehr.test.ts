import { berechneGebuehr } from "../src/berechneGebuehr";

// Tests

describe("berechneGebuehr", () => {
  test("bis 30 Minuten kostet 20 Euro", () => {
    expect(berechneGebuehr(0)).toBe(20);
    expect(berechneGebuehr(30)).toBe(20);
  });

  test("bis eine Stunde kostet 35 Euro", () => {
    expect(berechneGebuehr(31)).toBe(35);
    expect(berechneGebuehr(60)).toBe(35);
  });

  test("bis zwei Stunden kostet 50 Euro", () => {
    expect(berechneGebuehr(61)).toBe(50);
    expect(berechneGebuehr(120)).toBe(50);
  });

  test("bis drei Stunden kostet 65 Euro", () => {
    expect(berechneGebuehr(121)).toBe(65);
    expect(berechneGebuehr(180)).toBe(65);
  });

  test("laenger als drei Stunden: (aufgerundete Stunde - 1) * 25", () => {
    // 181 Minuten sind knapp über 3 Stunden, aufgerundet 4 Stunden
    expect(berechneGebuehr(181)).toBe(75);
    // genau 4 Stunden
    expect(berechneGebuehr(240)).toBe(75);
    // 4 Stunden und eine Minute, aufgerundet 5
    expect(berechneGebuehr(241)).toBe(100);
  });
});
