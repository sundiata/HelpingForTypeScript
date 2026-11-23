// Kurzbeschreibung:
// Rechnet aus, was die Beratungssimulation je nach Nutzungsdauer kostet.

// Datenanalyse:
// Eingabe:
//   minuten: number
//   Wie lange die Simulation genutzt wurde, in Minuten.
// Ausgabe:
//   number
//   Die Gebühr in Euro.
//
// Zuordnung:
//   bis 30 Minuten        -> 20 Euro
//   bis 60 Minuten        -> 35 Euro
//   bis 120 Minuten       -> 50 Euro
//   bis 180 Minuten       -> 65 Euro
//   alles darüber         -> (n - 1) * 25 Euro
//   n ist die aufgerundete Stundenzahl, also Math.ceil(minuten / 60)
//
// Verarbeitung:
//   Fallunterscheidung von oben nach unten.
//   Die lange Dauer kommt in den else-Zweig, weil sie keine feste Obergrenze hat.

// Funktionskopf
export function berechneGebuehr(minuten: number): number {
  // Schablone: if / else if / else

  if (minuten <= 30) {
    return 20;
  } else if (minuten <= 60) {
    return 35;
  } else if (minuten <= 120) {
    return 50;
  } else if (minuten <= 180) {
    return 65;
  } else {
    let stunden = Math.ceil(minuten / 60);
    return (stunden - 1) * 25;
  }
}
