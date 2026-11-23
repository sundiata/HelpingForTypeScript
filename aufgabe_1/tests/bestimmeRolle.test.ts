import { bestimmeRolle } from "../src/bestimmeRolle";

// 4. Tests mit Jest

describe("bestimmeRolle", () => {
  test("ID 1 ist die Rolle Bürger:in", () => {
    expect(bestimmeRolle(1)).toBe("Bürger:in");
  });

  test.each([2, 3, 4, 5])("ID %i ist die Rolle Sachbearbeitung", (id) => {
    expect(bestimmeRolle(id)).toBe("Sachbearbeitung");
  });

  test.each([6, 7, 8, 10])("ID %i ist die Rolle Amtsleitung", (id) => {
    expect(bestimmeRolle(id)).toBe("Amtsleitung");
  });

  test.each([9, 11])("ID %i ist die Rolle Systemadministration", (id) => {
    expect(bestimmeRolle(id)).toBe("Systemadministration");
  });

  test("IDs von 12 bis 99 sind Externe Beratung / Dienstleistung", () => {
    expect(bestimmeRolle(12)).toBe("Externe Beratung / Dienstleistung");
    expect(bestimmeRolle(50)).toBe("Externe Beratung / Dienstleistung");
    expect(bestimmeRolle(99)).toBe("Externe Beratung / Dienstleistung");
  });

  test.each([0, -1, 100])(
    "ID %i ist ungültig und ergibt undefined",
    (id) => {
      expect(bestimmeRolle(id)).toBeUndefined();
    }
  );
});
