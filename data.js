// Tour de France 2026 Tipprunde — Daten
// ⚠️  AUTOMATISCH GENERIERT von build_data.py aus tdf_tippspiel_master.xlsx.
//     Nicht von Hand bearbeiten — stattdessen die xlsx ändern und
//     `python build_data.py` ausführen.
export const STAGES_DONE = 1;
export const STAGES_TOTAL = 21;

// bonus = Trikot-Bonus (Gelb/Berg/Gruen/Weiss/Mannschaft, siehe
// FINAL_CLASSIFICATION) -- gehoert zur Gesamtpunktzahl, aber NICHT zu
// den Etappen-Punkten (steht erst am Tourende fest).
export const PLAYERS = [
  {n:'Janik', avg:32.0, best:[1,32], worst:[1,32], tip:'FDJ United - SUEZ', tipPts:0, bonus:0, stages:[32], ranks:[3]},
  {n:'Lanci', avg:43.0, best:[1,43], worst:[1,43], tip:'EF Education-Oatly', tipPts:0, bonus:0, stages:[43], ranks:[2]},
  {n:'Reto', avg:85.0, best:[1,85], worst:[1,85], tip:'CANYON//SRAM', tipPts:0, bonus:0, stages:[85], ranks:[1]},
  {n:'Sebbo', avg:23.0, best:[1,23], worst:[1,23], tip:'CANYON//SRAM', tipPts:0, bonus:0, stages:[23], ranks:[4]},
];

// Fahrer: n, t=Team, s=Spezialist, a=Alter, b=Startnummer, p=Punkte gesamt,
// bd=[Etappe,Punkte] bester Tag, by=getippt von, st=Punkte je Etappe,
// c=Kosten aus RIderPoints.csv fürs Kanter-Kader (null wenn unbekannt),
// img=Wikipedia-Fotolink (null wenn kein Artikel/Foto gefunden), bonus=Trikot-Bonus
// (bereits in p enthalten, siehe CLASSIFICATION_BONUS)
export const RIDERS = [
  {n:'Wiebes Lorena', t:'Team SD Worx - Protime', s:'Sprint', a:27, b:47, p:30, bd:[1,30], by:['Reto'], st:[30], c:null, img:'https://upload.wikimedia.org/wikipedia/commons/thumb/9/9c/TDFF25-E3_023_Lorena_Wiebes.jpg/250px-TDFF25-E3_023_Lorena_Wiebes.jpg', bonus:0},
  {n:'Le Court-Pienaar Kim', t:'AG Insurance - Soudal Team', s:'Classic', a:30, b:71, p:20, bd:[1,20], by:['Reto'], st:[20], c:null, img:'https://upload.wikimedia.org/wikipedia/commons/thumb/8/8b/TDFF25-E2_017_Kim_Le_Court.jpg/250px-TDFF25-E2_017_Kim_Le_Court.jpg', bonus:0},
  {n:'Vollering Demi', t:'FDJ United - SUEZ', s:'Classic', a:29, b:11, p:15, bd:[1,15], by:['Janik','Lanci','Reto','Sebbo'], st:[15], c:null, img:'https://upload.wikimedia.org/wikipedia/commons/thumb/4/45/Demi_Vollering_-_2025_European_road_championship_podium_-_Guilherand-Granges.jpg/250px-Demi_Vollering_-_2025_European_road_championship_podium_-_Guilherand-Granges.jpg', bonus:0},
  {n:'Pieterse Puck', t:'Fenix-Premier Tech', s:'Classic', a:24, b:91, p:12, bd:[1,12], by:[], st:[12], c:null, img:'https://upload.wikimedia.org/wikipedia/commons/thumb/9/99/2024_UCI_Road_World_Championships_%E2%80%93_Women_Elite_Road_race_medal_ceremony_27_%28cropped%29.jpg/250px-2024_UCI_Road_World_Championships_%E2%80%93_Women_Elite_Road_race_medal_ceremony_27_%28cropped%29.jpg', bonus:0},
  {n:'Rüegg Noemi', t:'EF Education-Oatly', s:'Classic', a:25, b:86, p:11, bd:[1,11], by:['Lanci'], st:[11], c:null, img:'https://upload.wikimedia.org/wikipedia/commons/thumb/5/54/Jumbo_tour_de_france_reims_1408734_%28cropped%29.jpg/250px-Jumbo_tour_de_france_reims_1408734_%28cropped%29.jpg', bonus:0},
  {n:'Longo Borghini Elisa', t:'UAE Team L\'IMAD', s:'Classic', a:34, b:35, p:10, bd:[1,10], by:[], st:[10], c:null, img:'https://upload.wikimedia.org/wikipedia/commons/thumb/b/bb/2025_AGR_start_-_Elisa_Longo_Borghini_3_%28cropped%29.jpg/250px-2025_AGR_start_-_Elisa_Longo_Borghini_3_%28cropped%29.jpg', bonus:0},
  {n:'Niewiadoma Kasia', t:'CANYON//SRAM', s:'Classic', a:31, b:21, p:9, bd:[1,9], by:['Janik','Lanci'], st:[9], c:null, img:'https://upload.wikimedia.org/wikipedia/commons/thumb/2/23/TDFF24_Kasia_Niewiadoma.jpg/250px-TDFF24_Kasia_Niewiadoma.jpg', bonus:0},
  {n:'Ferrand-Prévot Pauline', t:'Team Visma | Lease a Bike', s:'Classic', a:34, b:1, p:8, bd:[1,8], by:['Janik','Lanci','Reto'], st:[8], c:null, img:'https://upload.wikimedia.org/wikipedia/commons/thumb/6/67/TDFF25-E3_033_Marianne_Vos_PFP_%28cropped_2%29.jpg/250px-TDFF25-E3_033_Marianne_Vos_PFP_%28cropped_2%29.jpg', bonus:0},
  {n:'ReusserMarlen Movistar Team', t:'EF Education-Oatly', s:'Hills', a:25, b:85, p:7, bd:[1,7], by:[], st:[7], c:null, img:'https://upload.wikimedia.org/wikipedia/commons/thumb/4/4a/Movistar_Team_2017_logo.svg/250px-Movistar_Team_2017_logo.svg.png', bonus:0},
  {n:'Blasi Paula', t:'UAE Team L\'IMAD', s:'Classic', a:23, b:32, p:6, bd:[1,6], by:['Reto','Sebbo'], st:[6], c:null, img:'https://upload.wikimedia.org/wikipedia/commons/thumb/8/88/GPMF2025-06_Paula_Blasi.jpg/250px-GPMF2025-06_Paula_Blasi.jpg', bonus:0},
  {n:'KerbaolCédrine EF Education-Oatly', t:'Movistar Team', s:'TT', a:34, b:51, p:6, bd:[1,6], by:['Reto'], st:[6], c:null, img:'https://upload.wikimedia.org/wikipedia/commons/thumb/2/24/EF_Education_-_Oatly_-_Paris-Roubaix_2025.jpg/250px-EF_Education_-_Oatly_-_Paris-Roubaix_2025.jpg', bonus:0},
  {n:'Fisher-Black Niamh', t:'Lidl - Trek', s:'GC', a:25, b:64, p:5, bd:[1,5], by:[], st:[5], c:null, img:'https://upload.wikimedia.org/wikipedia/commons/thumb/e/eb/2020_Fleche_Wallonne_PauleKa_Niamh_Fisher-Black.jpg/250px-2020_Fleche_Wallonne_PauleKa_Niamh_Fisher-Black.jpg', bonus:0},
  {n:'van der Breggen Anna', t:'Team SD Worx - Protime', s:'Classic', a:36, b:41, p:3, bd:[1,3], by:[], st:[3], c:null, img:'https://upload.wikimedia.org/wikipedia/commons/thumb/8/82/20180929_UCI_Road_World_Championships_Innsbruck_Women_Elite_Road_Race_Anna_van_der_Breggen_850_8252.jpg/250px-20180929_UCI_Road_World_Championships_Innsbruck_Women_Elite_Road_Race_Anna_van_der_Breggen_850_8252.jpg', bonus:0},
  {n:'Holmgren Isabella', t:'Lidl - Trek', s:'Climber', a:21, b:65, p:2, bd:[1,2], by:['Sebbo'], st:[2], c:null, img:'https://upload.wikimedia.org/wikipedia/commons/thumb/d/d5/Isabella_Holmgren_-_2023_UCI_Road_World_Championships_%28Women%27s_junior_road_race%29.jpg/250px-Isabella_Holmgren_-_2023_UCI_Road_World_Championships_%28Women%27s_junior_road_race%29.jpg', bonus:0},
  {n:'Mahé Océane', t:'Ma Petite Entreprise', s:'Hills', a:24, b:197, p:2, bd:[1,2], by:[], st:[2], c:null, img:'https://upload.wikimedia.org/wikipedia/commons/thumb/5/5d/Grand_Prix_de_Chamb%C3%A9ry_2026_-_%C3%89quipe_Ma_Petite_Entreprise.JPG/250px-Grand_Prix_de_Chamb%C3%A9ry_2026_-_%C3%89quipe_Ma_Petite_Entreprise.JPG', bonus:0},
  {n:'García Mavi', t:'UAE Team L\'IMAD', s:'Hills', a:42, b:34, p:1, bd:[1,1], by:[], st:[1], c:null, img:'https://upload.wikimedia.org/wikipedia/commons/thumb/e/ec/Mavi_Garcia_%28Strade_Bianche_2020%29.jpg/250px-Mavi_Garcia_%28Strade_Bianche_2020%29.jpg', bonus:0},
  {n:'Aalerud Katrine', t:'Uno-X Mobility', s:'Hills', a:31, b:171, p:0, bd:null, by:['Lanci'], st:[0], c:null, img:'https://upload.wikimedia.org/wikipedia/commons/thumb/a/a0/Katrine_Aalerud_VM_2016.jpg/250px-Katrine_Aalerud_VM_2016.jpg', bonus:0},
  {n:'Balsamo Elisa', t:'Lidl - Trek', s:'Classic', a:28, b:61, p:0, bd:null, by:['Janik'], st:[0], c:null, img:'https://upload.wikimedia.org/wikipedia/commons/thumb/3/36/2024_UEC_Track_Elite_European_Championships_148.jpg/250px-2024_UEC_Track_Elite_European_Championships_148.jpg', bonus:0},
  {n:'Brand Lucinda', t:'Lidl - Trek', s:'Classic', a:37, b:63, p:0, bd:null, by:['Sebbo'], st:[0], c:null, img:'https://upload.wikimedia.org/wikipedia/commons/thumb/6/67/2021_WK_Vlaanderen_002_Lucinda_Brand2.jpg/250px-2021_WK_Vlaanderen_002_Lucinda_Brand2.jpg', bonus:0},
  {n:'Casasola Sara', t:'Fenix-Premier Tech', s:'Hills', a:26, b:92, p:0, bd:null, by:['Lanci'], st:[0], c:null, img:'https://upload.wikimedia.org/wikipedia/commons/thumb/c/c2/Sara_Casasola_-_2024_Tour_of_Britain_Women_%28stage_3%29_%28cropped%29.jpg/250px-Sara_Casasola_-_2024_Tour_of_Britain_Women_%28stage_3%29_%28cropped%29.jpg', bonus:0},
  {n:'Cavallar Valentina', t:'Team SD Worx - Protime', s:'Climber', a:25, b:43, p:0, bd:null, by:['Lanci','Sebbo'], st:[0], c:null, img:null, bonus:0},
  {n:'Ciabocco Eleonora', t:'Team Picnic PostNL', s:'Hills', a:22, b:121, p:0, bd:null, by:['Sebbo'], st:[0], c:null, img:null, bonus:0},
  {n:'Coupland Mackenzie', t:'Liv AlUla Jayco', s:'Classic', a:20, b:112, p:0, bd:null, by:['Lanci'], st:[0], c:null, img:null, bonus:0},
  {n:'Dideriksen Amalie', t:'Cofidis Women Team', s:'Classic', a:30, b:144, p:0, bd:null, by:['Lanci'], st:[0], c:null, img:null, bonus:0},
  {n:'Faulkner Kristen', t:'EF Education-Oatly', s:'Classic', a:33, b:84, p:0, bd:null, by:['Reto'], st:[0], c:null, img:null, bonus:0},
  {n:'Georgi Pfeiffer', t:'Team Picnic PostNL', s:'Classic', a:25, b:124, p:0, bd:null, by:['Lanci'], st:[0], c:null, img:null, bonus:0},
  {n:'Griffin Mia', t:'Team Picnic PostNL', s:'Classic', a:27, b:125, p:0, bd:null, by:['Sebbo'], st:[0], c:null, img:null, bonus:0},
  {n:'Hengeveld Daniek', t:'Team Visma | Lease a Bike', s:'TT', a:23, b:4, p:0, bd:null, by:['Lanci'], st:[0], c:null, img:'https://upload.wikimedia.org/wikipedia/commons/thumb/b/b3/2023_SLT_S4_Cauberg_start_team_DSM-Firmenich_Daniek_Hengeveld.jpg/250px-2023_SLT_S4_Cauberg_start_team_DSM-Firmenich_Daniek_Hengeveld.jpg', bonus:0},
  {n:'Jansen Eline', t:'VolkerWessels Cycling Team', s:'Hills', a:24, b:164, p:0, bd:null, by:['Lanci'], st:[0], c:null, img:null, bonus:0},
  {n:'Klöser Rosa Maria', t:'CANYON//SRAM', s:'Classic', a:30, b:24, p:0, bd:null, by:['Janik'], st:[0], c:null, img:'https://upload.wikimedia.org/wikipedia/commons/thumb/1/18/Rosa_Maria_Kl%C3%B6ser_N_74_-_Praris-Roubaix_2025.jpg/250px-Rosa_Maria_Kl%C3%B6ser_N_74_-_Praris-Roubaix_2025.jpg', bonus:0},
  {n:'Koch Franziska', t:'FDJ United - SUEZ', s:'Classic', a:26, b:14, p:0, bd:null, by:['Janik','Sebbo'], st:[0], c:null, img:'https://upload.wikimedia.org/wikipedia/commons/thumb/6/6b/2023_SLT_S4_Cauberg_start_team_DSM-Firmenich_Franziska_Koch.jpg/250px-2023_SLT_S4_Cauberg_start_team_DSM-Firmenich_Franziska_Koch.jpg', bonus:0},
  {n:'Kool Charlotte', t:'Fenix-Premier Tech', s:'Sprint', a:27, b:96, p:0, bd:null, by:['Reto'], st:[0], c:null, img:'https://upload.wikimedia.org/wikipedia/commons/thumb/7/72/2023_RideLondon_Classique_-_stage_1_winner_056_Charlotte_Kool.JPG/250px-2023_RideLondon_Classique_-_stage_1_winner_056_Charlotte_Kool.JPG', bonus:0},
  {n:'Kopecky Lotte', t:'Team SD Worx - Protime', s:'Classic', a:30, b:45, p:0, bd:null, by:['Janik','Sebbo'], st:[0], c:null, img:'https://upload.wikimedia.org/wikipedia/commons/thumb/5/5f/Lotte_Kopecky_poseert_in_KOERSkaffee_%28cropped%29.jpg/250px-Lotte_Kopecky_poseert_in_KOERSkaffee_%28cropped%29.jpg', bonus:0},
  {n:'Kraak Amber', t:'FDJ United - SUEZ', s:'Hills', a:32, b:15, p:0, bd:null, by:['Janik','Lanci'], st:[0], c:null, img:'https://upload.wikimedia.org/wikipedia/commons/thumb/7/78/2022_Fleche_Wallonne_finish_Amber_Kraak.jpg/250px-2022_Fleche_Wallonne_finish_Amber_Kraak.jpg', bonus:0},
  {n:'Lippert Liane', t:'Movistar Team', s:'Hills', a:28, b:54, p:0, bd:null, by:['Sebbo'], st:[0], c:null, img:'https://upload.wikimedia.org/wikipedia/commons/thumb/f/f8/2018_Women%27s_Tour_de_Yorkshire_-_Liane_Lippert.jpg/250px-2018_Women%27s_Tour_de_Yorkshire_-_Liane_Lippert.jpg', bonus:0},
  {n:'Niedermaier Antonia', t:'CANYON//SRAM', s:'GC', a:23, b:25, p:0, bd:null, by:['Sebbo'], st:[0], c:null, img:'https://upload.wikimedia.org/wikipedia/commons/thumb/d/d1/2024_UCI_Road_World_Championships_%E2%80%93_Women_Elite_Road_race_medal_ceremony_23_%28Antonia_Niedermaier%29.jpg/250px-2024_UCI_Road_World_Championships_%E2%80%93_Women_Elite_Road_race_medal_ceremony_23_%28Antonia_Niedermaier%29.jpg', bonus:0},
  {n:'Nooijen Lieke', t:'Team Visma | Lease a Bike', s:'TT', a:25, b:5, p:0, bd:null, by:['Lanci'], st:[0], c:null, img:'https://upload.wikimedia.org/wikipedia/commons/thumb/8/86/2023_SLT_S1_Gennep_podium_6.jpg/250px-2023_SLT_S1_Gennep_podium_6.jpg', bonus:0},
  {n:'Paladin Soraya', t:'CANYON//SRAM', s:'Hills', a:33, b:26, p:0, bd:null, by:['Sebbo'], st:[0], c:null, img:null, bonus:0},
  {n:'Paternoster Letizia', t:'Liv AlUla Jayco', s:'Classic', a:27, b:115, p:0, bd:null, by:['Sebbo'], st:[0], c:null, img:null, bonus:0},
  {n:'Patiño Paula', t:'Laboral Kutxa - Fundación Euskadi', s:'Hills', a:29, b:156, p:0, bd:null, by:['Lanci'], st:[0], c:null, img:null, bonus:0},
  {n:'Schweinberger Christina', t:'Fenix-Premier Tech', s:'TT', a:29, b:97, p:0, bd:null, by:['Sebbo'], st:[0], c:null, img:null, bonus:0},
];

// Teamwertungs-Punkte je Team (nur Teams mit Punkten)
export const TEAM_TIP_PTS = {
};

// Team-Kosten aus RIderPoints.csv fürs Kanter-Kader (nur Teams mit bekanntem Preis)
export const TEAM_COSTS = {
  'Team Visma | Lease a Bike': 30,
  'Lidl - Trek': 20,
  'Movistar Team': 20,
  'Team Picnic PostNL': 10,
  'Uno-X Mobility': 10,
};

// Team-Punkte je Etappe (nur Teams mit bekanntem Preis) — Basis, um den
// Tagesbeitrag eines Team-Tipps im Kanter-Kader auszurechnen.
export const TEAM_STAGE_POINTS = {
  'Lidl - Trek': [0],
  'Movistar Team': [0],
  'Team Picnic PostNL': [0],
  'Team Visma | Lease a Bike': [0],
  'Uno-X Mobility': [0],
};

// Kanter-Kader: budget-optimales Team je Etappe (<=560 Kosten, <=15 Fahrer
// + optionaler Team-Tipp), unabhängig für jede Etappe optimiert — nur mit
// Wissen der Ergebnisse bis zu dieser Etappe ('hätte man's bis dahin gewusst').
export const OPTIMAL_TEAMS = [
  {stage:1, team:null, teamCost:0, teamPoints:0, totalCost:0, totalPoints:0, riders:[]},
];

// Festes Kanter-Kader-Team (Optimum der letzten gefahrenen Etappe) als
// durchgehende Baseline — cum = eigene kumulierte Punkte über alle gefahrenen
// Etappen (anders als OPTIMAL_TEAMS, das je Etappe wechseln kann).
export const KANTER_KADER = {stage:1, team:null, teamCost:0, teamPoints:0, totalCost:0, totalPoints:0, riders:[], cum:[0]};

// Finale Klassements der echten Tour (Gelbes/Berg-/Grünes/Weißes Trikot +
// Team-Wertung), aus 'S22 GC'..'S26 TeamRank' in 'Ergebnisse_Roh' — keine
// Etappen, sondern die Abschluss-Platzierungen. Manche Wertungen sind nur
// teilweise befüllt (fehlende Plätze einfach nicht vorhanden).
export const FINAL_CLASSIFICATION = {
  GC: [],
  Mountain: [],
  Sprint: [],
  Youth: [],
  TeamRank: [],
};

// Bonus-Punkte fuer den jeweiligen Trikot-Sieger (nur Platz 1 zaehlt,
// siehe Sheet 'Punktematrix': Gelb/Berg/Gruen/Weiss/Mannschaft) — bereits
// in PLAYERS[].bonus / RIDERS[].p / TEAM_TIP_PTS eingerechnet.
export const CLASSIFICATION_BONUS = {
  GC: 3,
  Mountain: 2,
  Sprint: 2,
  Youth: 2,
  TeamRank: 2,
};

// Teamfunk — Trash Talk der Runde (Sheet 'Quotes' in der xlsx pflegen).
export const QUOTES = [
  {by:'Richard NB', txt:'Funkspruch: Du sitzt im Gelben Trikot — nicht nervös werden, deine Picks tragen dich. Locker bleiben bis Paris.'},
  {by:'Conni K', txt:'Bleib am Hinterrad des Führenden, gib nicht nach. Zwei Bergetappen, dann drehst du auf und tippst ihn nieder.'},
  {by:'Chrysli', txt:'Kopf hoch, das Zeitfahren liegt dir. Hol dir die Punkte zurück, die du in den Sprints liegen gelassen hast.'},
  {by:'Cindy', txt:'Du hast früh geführt, jetzt kommt die harte Phase. Kräfte einteilen, deine Kletterer bringen es in Woche drei.'},
  {by:'Reto', txt:'Attacke! Die Ausreißergruppe geht — dein Pick ist vorne dabei. Jetzt volles Risiko, das zahlt sich aus.'},
  {by:'Rikki', txt:'Neun Plätze in einer Woche gutgemacht — genau so. Dranbleiben, das Feld kommt dir langsam entgegen.'},
  {by:'Sebbo', txt:'Ruhig fahren, keine Experimente. Deine konstanten Tipps sind Gold wert, wenn die anderen einbrechen.'},
  {by:'Jakob', txt:'Trink was, iss was — die lange Bergankunft kommt erst. Spar dir deine Top-Fahrer für den entscheidenden Tag auf.'},
  {by:'Nora', txt:'Ich weiß, die Punkte kommen nicht wie erhofft. Vertrau der Auswahl, wir korrigieren nach dem Ruhetag.'},
  {by:'Till', txt:'Dein Team-Tipp läuft wie ein Uhrwerk. Halt die Position, sichere die Zähler — heute nichts Dummes riskieren.'},
];

export function buildPlayers(){
  return PLAYERS.map(p => {
    const stages = p.stages;
    const total = stages.reduce((a, b) => a + b, 0) + (p.bonus || 0);
    const cum = []; let s = 0;
    stages.forEach(v => { s += v; cum.push(s); });
    return { ...p, total, cum };
  });
}
