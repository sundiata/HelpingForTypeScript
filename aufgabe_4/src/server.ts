// Typalias aus der Vorlesung (zusammengesetzte Daten).
// In der Vorlesung heißt der Typ Server, manchmal auch ServerInstance.
// Hier sind die Methoden aus Aufgabe 4a und 4b ergänzt.
//
// Arbeitsspeicher und Speicherplatz sind in GB.
// cpu ist ein Text, z.B. "Xeon" oder "Xeon Enterprise".

// Kurzbeschreibung 4a:
// berechnePreis ermittelt den Preis einer Serverinstanz.

// Datenanalyse 4a:
// Eingabe: die Daten des Servers (über this)
//   arbeitsspeicher: number, GB
//   speicherplatz: number, GB
//   cpu: string
// Ausgabe: number, Preis in Euro
//
// Bestandteile:
//   Arbeitsspeicher: 6 Euro pro GB, mindestens 40 Euro
//   Speicherplatz: je angefangene 500 GB 25 Euro
//   CPU: 100 Euro, plus 30 Euro wenn "Enterprise" im Namen steht
//   IT-Pauschale: 120 Euro, bei jedem Server
//
// Verarbeitung:
//   Die vier Teile einzeln ausrechnen und addieren.
//   Beim Speicher Math.ceil, damit auf die nächsten 500 GB aufgerundet wird.

// Kurzbeschreibung 4b:
// erweitereArbeitsspeicher gibt einen Server mit mehr Arbeitsspeicher zurück.

// Datenanalyse 4b:
// Eingabe:
//   zusatz: number, die GB die dazukommen
// Ausgabe:
//   Server, mit dem neuen Arbeitsspeicher
// Speicherplatz und CPU bleiben unverändert.
// Wird der Speicher durch den Zusatz kleiner, bleibt der alte Wert.

export type Server = {
  arbeitsspeicher: number;
  speicherplatz: number;
  cpu: string;
  berechnePreis(this: Server): number;
  erweitereArbeitsspeicher(this: Server, zusatz: number): Server;
};

// Baut ein Server-Objekt. Die Methoden stehen direkt am Objekt,
// damit this.cpu und this.arbeitsspeicher funktionieren.
export function erstelleServer(
  arbeitsspeicher: number,
  speicherplatz: number,
  cpu: string
): Server {
  let server: Server = {
    arbeitsspeicher: arbeitsspeicher,
    speicherplatz: speicherplatz,
    cpu: cpu,

    // Funktionsrumpf 4a
    berechnePreis: function (this: Server): number {
      // Schablone: Teile berechnen, am Ende summieren

      let preisRam = this.arbeitsspeicher * 6;
      if (preisRam < 40) {
        preisRam = 40;
      }

      let bloecke = Math.ceil(this.speicherplatz / 500);
      let preisPlatte = bloecke * 25;

      let preisCpu = 100;
      if (this.cpu.includes("Enterprise")) {
        preisCpu = 130;
      }

      let pauschale = 120;

      return preisRam + preisPlatte + preisCpu + pauschale;
    },

    // Funktionsrumpf 4b
    erweitereArbeitsspeicher: function (this: Server, zusatz: number): Server {
      // Schablone: rechnen, dann prüfen ob das Ergebnis kleiner wäre
      let neuerRam = this.arbeitsspeicher + zusatz;
      if (neuerRam < this.arbeitsspeicher) {
        neuerRam = this.arbeitsspeicher;
      }

      return erstelleServer(neuerRam, this.speicherplatz, this.cpu);
    },
  };

  return server;
}
