# 🚴 TdF 2026 – JS-Dashboard (alternatives Frontend)

Dieses Verzeichnis enthält – **zusätzlich** zum bestehenden R/Quarto-Bericht
(`index.qmd`) – ein eigenständiges, interaktives Web-Dashboard für unsere
Tour-de-France-2026-Tipprunde. Es ist eine statische Vanilla-JS-Seite (kein
Build-Tool, kein `npm install`) und liest **exakt dieselbe Datenquelle** wie
der R-Bericht: `tdf_tippspiel_master.xlsx`.

> Das R/Quarto-Setup bleibt vollständig erhalten und unverändert. Dieses
> Dashboard ist ein **Alternativ-Frontend**, keine Ablösung.

## Was es zeigt

Fünf Tabs, dazu ein Detail-Drawer je Spieler/Fahrer:

- **Gesamtstand** – Rangliste mit Rangänderungen, Trikot-Badges, Rang-Verlauf
  (Sparklines) und rotierender „Teamfunk / Trash-Talk"-Box.
- **Etappen** – Punkte je Etappe mit Etappen-Auswahl, Tagessieger,
  Balken-Ranking und kumulativem Punkte-Linienchart.
- **Fahrer** – beste Fahrer-Picks, durchsuchbare Fahrerliste.
- **Teams** – Team-Wertungspunkte je Team + Team-Tipp jedes Spielers.
- **Duell** – Kopf-an-Kopf-Vergleich zweier Spieler.

Zwei Designs: **Le Tour** (hell, `index.html`) und **Nachtfahrt** (dunkel),
umschaltbar oben rechts.

## Datenfluss (identisch zur Excel-Logik, in Python nachgebaut)

```
tdf_tippspiel_master.xlsx  →  build_data.py  →  data.js  →  index.html (UI)
```

`tdf_tippspiel_master.xlsx` ist die **einzige Datenquelle**. `build_data.py`
liest die Roh-Eingaben und berechnet daraus alle Punkte/Ränge – genauso, wie
es die Excel-Formeln tun (`Ergebnisse_Roh` × `Punktematrix`, pro Tipp
aufsummiert). Damit ist das Ergebnis **unabhängig davon, ob Excel die Formeln
neu gerechnet hat**; einfache Zellverweise (z. B. `=Startlist2026!D2`) werden
im Skript selbst aufgelöst.

Roh-Eingaben, die von Hand gepflegt werden (alles andere wird berechnet):

| Sheet | Inhalt |
|---|---|
| `Ergebnisse_Roh` | Etappenergebnisse: Plätze 1–15 + Trikots + Mannschaft, eine Spalte je Etappe |
| `Punktematrix` | Punkte je Platz / Wertung |
| `Spieler_Teams` (Spalte A/B) | welche Fahrer + welches Team jeder Spieler tippt |
| `Startlist2026` | Fahrer-Stammdaten (BIB, Specialty, Age, Rider, Team) |
| `Quotes` | Teamfunk / Trash-Talk (Spalten: Spieler, Spruch) |

`build_data.py` schreibt `STAGES_DONE`, `STAGES_TOTAL`, `PLAYERS`, `RIDERS`,
`TEAM_TIP_PTS` und `QUOTES` nach `data.js`.

## Aktualisieren

```bash
pip install openpyxl        # einmalig
python build_data.py        # data.js neu erzeugen
```

Die enthaltene GitHub Action `.github/workflows/build-data.yml` baut `data.js`
außerdem automatisch neu, sobald `tdf_tippspiel_master.xlsx` nach `main`
gepusht wird.

## Lokal ansehen

Wegen ES-Modul-Imports und `fetch` muss die Seite über **HTTP** laufen
(`file://` funktioniert nicht):

```bash
python3 -m http.server 8000   # → http://localhost:8000
```

(Benötigt Internet: React und die Fonts kommen per CDN.)

## Dateien

| Datei | |
|---|---|
| `index.html` | Standard-Seite (Le-Tour-Design) |
| `TdF-Tipprunde-LeTour.dc.html` / `TdF-Tipprunde-Nachtfahrt.dc.html` | Design-Quellen (hell / dunkel) |
| `support.js` | Claude-Design-Client-Runtime (generiert – nicht bearbeiten) |
| `build_data.py` | xlsx → data.js |
| `data.js` | generierte Statistik (nicht von Hand bearbeiten) |
| `tdf_tippspiel_master.xlsx` | Master-Dokument (inkl. neuem `Quotes`-Sheet) |
| `.github/workflows/build-data.yml` | CI: baut data.js bei xlsx-Änderung |
