import { erstelleServer } from "../src/server";

// Tests für 4a und 4b, drei verschiedene Server

describe("berechnePreis", () => {
  test("kleiner RAM wird auf 40 Euro angehoben, 1100 GB kosten 75 Euro", () => {
    // 4 GB * 6 = 24, also Minimum 40
    // 1100 GB -> 3 * 25 = 75 (Beispiel aus der Aufgabe)
    // CPU ohne Enterprise: 100
    // Pauschale: 120
    let s = erstelleServer(4, 1100, "Intel Xeon");
    expect(s.berechnePreis()).toBe(40 + 75 + 100 + 120);
  });

  test("1500 GB kosten genauso viel wie 1100 GB, Enterprise kostet extra", () => {
    // 8 * 6 = 48, liegt über dem Minimum
    // 1500 / 500 = 3 Blöcke = 75
    // Enterprise: 130
    let s = erstelleServer(8, 1500, "AMD EPYC Enterprise");
    expect(s.berechnePreis()).toBe(48 + 75 + 130 + 120);
  });

  test("genau 500 GB sind ein Block, kleingeschriebenes enterprise zaehlt nicht", () => {
    // 16 * 6 = 96
    // 500 GB = 25 Euro
    // includes sucht "Enterprise", darum hier nur 100 Euro CPU
    let s = erstelleServer(16, 500, "Xeon enterprise");
    expect(s.berechnePreis()).toBe(96 + 25 + 100 + 120);
  });
});

describe("erweitereArbeitsspeicher", () => {
  test("positiver Zusatz wird auf den Arbeitsspeicher addiert", () => {
    let alt = erstelleServer(8, 1000, "Intel Xeon");
    let neu = alt.erweitereArbeitsspeicher(4);

    expect(neu.arbeitsspeicher).toBe(12);
    expect(neu.speicherplatz).toBe(1000);
    expect(neu.cpu).toBe("Intel Xeon");
  });

  test("negativer Zusatz macht den Speicher nicht kleiner", () => {
    let alt = erstelleServer(8, 1000, "Intel Xeon");
    let neu = alt.erweitereArbeitsspeicher(-4);

    expect(neu.arbeitsspeicher).toBe(8);
  });
});
