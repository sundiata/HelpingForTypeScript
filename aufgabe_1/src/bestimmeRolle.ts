// 1. Kurzbeschreibung
// Die Funktion ordnet einer Berechtigungs-ID die passende Rolle
// in einem E-Government-Portal zu.

// 2. Datenanalyse
// Eingabe:
//   id: number
//   Eine Berechtigungs-ID. Erwartet werden die im Portal vergebenen IDs.
//
// Zuordnung (Wertebereich der Eingabe -> Bedeutung):
//   1                  -> Rolle "Bürger:in"
//   2, 3, 4 oder 5     -> Rolle "Sachbearbeitung"
//   6, 7, 8 oder 10    -> Rolle "Amtsleitung"
//   9 oder 11          -> Rolle "Systemadministration"
//   12 bis 99          -> Rolle "Externe Beratung / Dienstleistung"
//                        (12 und 99 gehören dazu)
//   jede andere Zahl   -> ungültige ID
//
// Ausgabe:
//   string | undefined
//   Der Rollenname, wenn die ID einer Rolle entspricht.
//   undefined, wenn die ID ungültig ist.
//
// Verarbeitung:
//   Fallunterscheidung. Mehrere IDs einer Rolle werden mit || verbunden.
//   Der Bereich 12 bis 99 wird mit && geprüft (id >= 12 und id <= 99).
//   Eine ungültige ID wird nicht weiter behandelt: die Funktion gibt
//   dafür undefined zurück.

// 3. Funktionskopf inkl. Typen für Argument und Ergebnis
export function bestimmeRolle(id: number): string | undefined {
  // 5. Schablone: Fallunterscheidung (if / else if / else)
  // 6. Funktionsrumpf

  if (id === 1) {
    return "Bürger:in";
  } else if (id === 2 || id === 3 || id === 4 || id === 5) {
    return "Sachbearbeitung";
  } else if (id === 6 || id === 7 || id === 8 || id === 10) {
    return "Amtsleitung";
  } else if (id === 9 || id === 11) {
    return "Systemadministration";
  } else if (id >= 12 && id <= 99) {
    return "Externe Beratung / Dienstleistung";
  } else {
    return undefined;
  }
}