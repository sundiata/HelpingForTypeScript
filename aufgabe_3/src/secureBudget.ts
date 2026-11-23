// Kurzbeschreibung:
// Begrenzt ein Förderbudget auf den erlaubten Bereich.
// Liegt der Wert darunter, kommt die untere Grenze zurück.
// Liegt er darüber, kommt die obere Grenze zurück.
// Sonst bleibt der Wert so.

// Datenanalyse:
// Eingabe:
//   x: number   der berechnete Förderwert
//   l: number   untere Grenze (lower bound)
//   u: number   obere Grenze (upper bound)
//   x, l und u sind reelle Zahlen.
// Ausgabe:
//   number
//   x, wenn l <= x <= u
//   l, wenn x < l
//   u, wenn x > u
//
// Verarbeitung:
//   Fallunterscheidung. Erst prüfen, ob x unter l liegt,
//   dann ob x über u liegt. Der Rest ist der Normalfall.

// Funktionskopf, Name steht so in der Aufgabenstellung
export function secureBudget(x: number, l: number, u: number): number {
  // Schablone: if / else if / else

  if (x < l) {
    return l;
  } else if (x > u) {
    return u;
  } else {
    return x;
  }
}
