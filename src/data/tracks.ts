export interface TrackData {
  id: string;
  name: string;
  country: string;
  date: { start: string; end: string; month: string };
  length: string;
  distance: string;
  laps: string;
  schedule: { name: string; date: string; time: string; isRace?: boolean }[];
  winners: { name: string; wins: number; desc: string }[];
  shape: number[][]; // [x, y, z] points for CatmullRomCurve3
  glbNodeName?: string;
  cancelled?: boolean;
}

export const tracks: TrackData[] = [
  // ⚠️ CANCELLED - Bahrain & Saudi Arabian GPs were cancelled in 2026 due to the Middle East conflict
  {
    id: "bahrain",
    name: "Sakhir",
    country: "Bahrain",
    cancelled: true,
    date: { start: "10", end: "12", month: "APR" },
    length: "5.412",
    distance: "308.238",
    laps: "57",
    schedule: [
      { name: "Practice 1", date: "10 APR", time: "14:30" },
      { name: "Practice 2", date: "10 APR", time: "18:00" },
      { name: "Practice 3", date: "11 APR", time: "15:30" },
      { name: "Qualifying", date: "11 APR", time: "19:00" },
      { name: "Race", date: "12 APR", time: "18:00", isRace: true },
    ],
    winners: [
      { name: "Lewis Hamilton", wins: 5, desc: "Most wins at this circuit." },
      { name: "Sebastian Vettel", wins: 4, desc: "Won in 2012, 2013, 2017, 2018." },
      { name: "Fernando Alonso", wins: 3, desc: "Won the inaugural race in 2004." },
      { name: "Max Verstappen", wins: 2, desc: "Won in 2023 and 2024." }
    ],
    shape: [
      [0, 0, 5], [4, 0, 4], [6, 0, 0], [4, 0, -4], [0, 0, -5], [-4, 0, -4], [-6, 0, 0], [-4, 0, 4]
    ],
    glbNodeName: "sakhir"
  },
  {
    id: "saudi",
    name: "Jeddah",
    country: "Saudi Arabia",
    cancelled: true,
    date: { start: "17", end: "19", month: "APR" },
    length: "6.174",
    distance: "308.450",
    laps: "50",
    schedule: [
      { name: "Practice 1", date: "17 APR", time: "16:30" },
      { name: "Practice 2", date: "17 APR", time: "20:00" },
      { name: "Practice 3", date: "18 APR", time: "16:30" },
      { name: "Qualifying", date: "18 APR", time: "20:00" },
      { name: "Race", date: "19 APR", time: "20:00", isRace: true },
    ],
    winners: [
      { name: "Max Verstappen", wins: 2, desc: "Won in 2022 and 2024." },
      { name: "Lewis Hamilton", wins: 1, desc: "Won the inaugural race in 2021." },
      { name: "Sergio Perez", wins: 1, desc: "Won in 2023." }
    ],
    shape: [
      [0, 0, 8], [2, 0, 6], [1, 0, 0], [3, 0, -4], [0, 0, -8], [-2, 0, -6], [-1, 0, 0], [-3, 0, 4]
    ],
    glbNodeName: "jeddah"
  },
  {
    id: "australia",
    name: "Melbourne",
    country: "Australia",
    date: { start: "06", end: "08", month: "MAR" },
    length: "5.278",
    distance: "306.124",
    laps: "58",
    schedule: [
      { name: "Practice 1", date: "06 MAR", time: "01:30" },
      { name: "Practice 2", date: "06 MAR", time: "05:00" },
      { name: "Practice 3", date: "07 MAR", time: "01:30" },
      { name: "Qualifying", date: "07 MAR", time: "05:00" },
      { name: "Race", date: "08 MAR", time: "04:00", isRace: true },
    ],
    winners: [
      { name: "Michael Schumacher", wins: 4, desc: "Dominant in the early 2000s." },
      { name: "Jenson Button", wins: 3, desc: "Won in 2009, 2010, 2012." },
      { name: "Sebastian Vettel", wins: 3, desc: "Won in 2011, 2017, 2018." }
    ],
    shape: [
      [5, 0, 5], [6, 0, 0], [4, 0, -5], [-2, 0, -6], [-5, 0, -2], [-4, 0, 3], [0, 0, 6]
    ],
    glbNodeName: "melbourne"
  },
  {
    id: "china",
    name: "Shanghai",
    country: "China",
    date: { start: "13", end: "15", month: "MAR" },
    length: "5.451",
    distance: "305.066",
    laps: "56",
    schedule: [
      { name: "Practice 1", date: "13 MAR", time: "03:30" },
      { name: "Sprint Quali", date: "13 MAR", time: "07:30" },
      { name: "Sprint", date: "14 MAR", time: "03:00" },
      { name: "Qualifying", date: "14 MAR", time: "07:00" },
      { name: "Race", date: "15 MAR", time: "07:00", isRace: true },
    ],
    winners: [
      { name: "Lewis Hamilton", wins: 6, desc: "Most successful driver here." },
      { name: "Fernando Alonso", wins: 2, desc: "Won in 2005 and 2013." },
      { name: "Max Verstappen", wins: 1, desc: "Won in 2024." }
    ],
    shape: [
      [3, 0, 6], [5, 0, 2], [2, 0, -3], [0, 0, -6], [-3, 0, -4], [-5, 0, 0], [-2, 0, 4], [0, 0, 5]
    ],
    glbNodeName: "shanghai"
  },
  {
    id: "japan",
    name: "Suzuka",
    country: "Japan",
    date: { start: "27", end: "29", month: "MAR" },
    length: "5.807",
    distance: "307.471",
    laps: "53",
    schedule: [
      { name: "Practice 1", date: "27 MAR", time: "02:30" },
      { name: "Practice 2", date: "27 MAR", time: "06:00" },
      { name: "Practice 3", date: "28 MAR", time: "02:30" },
      { name: "Qualifying", date: "28 MAR", time: "06:00" },
      { name: "Race", date: "29 MAR", time: "06:00", isRace: true },
    ],
    winners: [
      { name: "Michael Schumacher", wins: 6, desc: "First win in 1995, last in 2004." },
      { name: "Lewis Hamilton", wins: 4, desc: "Won in 2014, 2015, 2017, 2018." },
      { name: "Sebastian Vettel", wins: 4, desc: "Won in 2009, 2010, 2012, 2013." },
      { name: "Max Verstappen", wins: 4, desc: "Won in 2022, 2023, 2024, 2025." }
    ],
    shape: [
      [0, 0, 5], [5, 0, 5], [8, 0, 2], [6, 0, -2], [2, 0, -4], [-2, 0, -2], [-5, 0, 2], [-8, 0, 4], [-10, 0, 2], [-8, 0, -2], [-4, 0, -4], [0, 0, -2], [3, 0, 1], [1, 0, 4], [-2, 0, 5]
    ],
    glbNodeName: "suzuka"
  },
  {
    id: "miami",
    name: "Miami",
    country: "USA",
    date: { start: "01", end: "03", month: "MAY" },
    length: "5.412",
    distance: "308.326",
    laps: "57",
    schedule: [
      { name: "Practice 1", date: "01 MAY", time: "17:30" },
      { name: "Sprint Quali", date: "01 MAY", time: "21:30" },
      { name: "Sprint", date: "02 MAY", time: "17:00" },
      { name: "Qualifying", date: "02 MAY", time: "21:00" },
      { name: "Race", date: "03 MAY", time: "21:00", isRace: true },
    ],
    winners: [
      { name: "Max Verstappen", wins: 2, desc: "Won in 2022 and 2023." },
      { name: "Lando Norris", wins: 1, desc: "Maiden F1 victory in 2024." }
    ],
    shape: [
      [-6, 0, 2], [-4, 0, 5], [0, 0, 4], [4, 0, 6], [6, 0, 2], [3, 0, -2], [5, 0, -5], [0, 0, -6], [-4, 0, -3]
    ],
    glbNodeName: "miami"
  },
  {
    id: "canada",
    name: "Montreal",
    country: "Canada",
    date: { start: "22", end: "24", month: "MAY" },
    length: "4.361",
    distance: "305.270",
    laps: "70",
    schedule: [
      { name: "Practice 1", date: "22 MAY", time: "17:30" },
      { name: "Sprint Quali", date: "22 MAY", time: "21:30" },
      { name: "Sprint", date: "23 MAY", time: "17:00" },
      { name: "Qualifying", date: "23 MAY", time: "21:00" },
      { name: "Race", date: "24 MAY", time: "21:00", isRace: true },
    ],
    winners: [
      { name: "Michael Schumacher", wins: 7, desc: "Tied for most wins." },
      { name: "Lewis Hamilton", wins: 7, desc: "Tied for most wins." },
      { name: "Max Verstappen", wins: 3, desc: "Won in 2022, 2023, 2024." }
    ],
    shape: [
      [6, 0, 2], [4, 0, -3], [0, 0, -5], [-4, 0, -2], [-6, 0, 3], [-2, 0, 5], [2, 0, 4]
    ],
    glbNodeName: "montreal"
  },
  {
    id: "monaco",
    name: "Monaco",
    country: "Monaco",
    date: { start: "05", end: "07", month: "JUN" },
    length: "3.337",
    distance: "260.286",
    laps: "78",
    schedule: [
      { name: "Practice 1", date: "05 JUN", time: "12:30" },
      { name: "Practice 2", date: "05 JUN", time: "16:00" },
      { name: "Practice 3", date: "06 JUN", time: "11:30" },
      { name: "Qualifying", date: "06 JUN", time: "15:00" },
      { name: "Race", date: "07 JUN", time: "14:00", isRace: true },
    ],
    winners: [
      { name: "Ayrton Senna", wins: 6, desc: "The Master of Monaco." },
      { name: "Graham Hill", wins: 5, desc: "Mr. Monaco." },
      { name: "Michael Schumacher", wins: 5, desc: "Won in 1994, 1995, 1997, 1999, 2001." }
    ],
    shape: [
      [4, 0, 4], [2, 0, 2], [5, 0, -1], [3, 0, -4], [-1, 0, -5], [-4, 0, -2], [-3, 0, 2], [-5, 0, 5], [0, 0, 6]
    ],
    glbNodeName: "monaco"
  },
  {
    id: "spain",
    name: "Barcelona",
    country: "Spain",
    date: { start: "12", end: "14", month: "JUN" },
    length: "4.657",
    distance: "307.236",
    laps: "66",
    schedule: [
      { name: "Practice 1", date: "12 JUN", time: "12:30" },
      { name: "Practice 2", date: "12 JUN", time: "16:00" },
      { name: "Practice 3", date: "13 JUN", time: "11:30" },
      { name: "Qualifying", date: "13 JUN", time: "15:00" },
      { name: "Race", date: "14 JUN", time: "14:00", isRace: true },
    ],
    winners: [
      { name: "Michael Schumacher", wins: 6, desc: "Tied for most wins." },
      { name: "Lewis Hamilton", wins: 6, desc: "Tied for most wins." },
      { name: "Max Verstappen", wins: 4, desc: "Won in 2016, 2022, 2023, 2024." }
    ],
    shape: [
      [3, 0, 5], [6, 0, 1], [4, 0, -4], [0, 0, -6], [-5, 0, -3], [-4, 0, 2], [-1, 0, 5]
    ],
    glbNodeName: "barcelona"
  },
  {
    id: "austria",
    name: "Spielberg",
    country: "Austria",
    date: { start: "26", end: "28", month: "JUN" },
    length: "4.318",
    distance: "306.452",
    laps: "71",
    schedule: [
      { name: "Practice 1", date: "26 JUN", time: "12:30" },
      { name: "Practice 2", date: "26 JUN", time: "16:00" },
      { name: "Practice 3", date: "27 JUN", time: "11:30" },
      { name: "Qualifying", date: "27 JUN", time: "15:00" },
      { name: "Race", date: "28 JUN", time: "14:00", isRace: true },
    ],
    winners: [
      { name: "Max Verstappen", wins: 4, desc: "Most wins here." },
      { name: "Alain Prost", wins: 3, desc: "Won in 1983, 1985, 1986." },
      { name: "Valtteri Bottas", wins: 2, desc: "Won in 2017, 2020." }
    ],
    shape: [
      [4, 0, 4], [5, 0, -2], [2, 0, -5], [-3, 0, -4], [-5, 0, 0], [-2, 0, 5]
    ],
    glbNodeName: "speilberg"
  },
  {
    id: "britain",
    name: "Silverstone",
    country: "Great Britain",
    date: { start: "03", end: "05", month: "JUL" },
    length: "5.891",
    distance: "306.198",
    laps: "52",
    schedule: [
      { name: "Practice 1", date: "03 JUL", time: "12:30" },
      { name: "Sprint Quali", date: "03 JUL", time: "16:30" },
      { name: "Sprint", date: "04 JUL", time: "12:00" },
      { name: "Qualifying", date: "04 JUL", time: "16:00" },
      { name: "Race", date: "05 JUL", time: "15:00", isRace: true },
    ],
    winners: [
      { name: "Lewis Hamilton", wins: 9, desc: "Record holder for most wins at a single circuit." },
      { name: "Jim Clark", wins: 5, desc: "Legendary British driver." },
      { name: "Alain Prost", wins: 5, desc: "Won in 1983, 1985, 1989, 1990, 1993." }
    ],
    shape: [
      [0, 0, 6], [4, 0, 4], [6, 0, 0], [3, 0, -4], [-2, 0, -5], [-6, 0, -2], [-5, 0, 3], [-2, 0, 5]
    ],
    glbNodeName: "silverstone"
  },
  {
    id: "belgium",
    name: "Spa",
    country: "Belgium",
    date: { start: "17", end: "19", month: "JUL" },
    length: "7.004",
    distance: "308.052",
    laps: "44",
    schedule: [
      { name: "Practice 1", date: "17 JUL", time: "12:30" },
      { name: "Practice 2", date: "17 JUL", time: "16:00" },
      { name: "Practice 3", date: "18 JUL", time: "11:30" },
      { name: "Qualifying", date: "18 JUL", time: "15:00" },
      { name: "Race", date: "19 JUL", time: "14:00", isRace: true },
    ],
    winners: [
      { name: "Michael Schumacher", wins: 6, desc: "Most wins at Spa." },
      { name: "Ayrton Senna", wins: 5, desc: "Won consecutively from 1988 to 1991." },
      { name: "Lewis Hamilton", wins: 5, desc: "Won in 2010, 2015, 2017, 2020, 2024." }
    ],
    shape: [
      [2, 0, 7], [6, 0, 3], [4, 0, -2], [1, 0, -6], [-3, 0, -5], [-6, 0, -1], [-4, 0, 4], [-1, 0, 6]
    ],
    glbNodeName: "spa-francorchamps"
  },
  {
    id: "hungary",
    name: "Budapest",
    country: "Hungary",
    date: { start: "24", end: "26", month: "JUL" },
    length: "4.381",
    distance: "306.630",
    laps: "70",
    schedule: [
      { name: "Practice 1", date: "24 JUL", time: "12:30" },
      { name: "Practice 2", date: "24 JUL", time: "16:00" },
      { name: "Practice 3", date: "25 JUL", time: "11:30" },
      { name: "Qualifying", date: "25 JUL", time: "15:00" },
      { name: "Race", date: "26 JUL", time: "14:00", isRace: true },
    ],
    winners: [
      { name: "Lewis Hamilton", wins: 8, desc: "Most wins at the Hungaroring." },
      { name: "Michael Schumacher", wins: 4, desc: "Won in 1994, 1998, 2001, 2004." },
      { name: "Ayrton Senna", wins: 3, desc: "Won in 1988, 1991, 1992." }
    ],
    shape: [
      [3, 0, 5], [5, 0, 1], [2, 0, -3], [4, 0, -6], [-1, 0, -5], [-4, 0, -2], [-6, 0, 2], [-2, 0, 4]
    ],
    glbNodeName: "mogyorod"
  },
  {
    id: "netherlands",
    name: "Zandvoort",
    country: "Netherlands",
    date: { start: "21", end: "23", month: "AUG" },
    length: "4.259",
    distance: "306.587",
    laps: "72",
    schedule: [
      { name: "Practice 1", date: "21 AUG", time: "11:30" },
      { name: "Sprint Quali", date: "21 AUG", time: "15:30" },
      { name: "Sprint", date: "22 AUG", time: "11:00" },
      { name: "Qualifying", date: "22 AUG", time: "15:00" },
      { name: "Race", date: "23 AUG", time: "14:00", isRace: true },
    ],
    winners: [
      { name: "Jim Clark", wins: 4, desc: "Most wins at Zandvoort." },
      { name: "Max Verstappen", wins: 3, desc: "Won in 2021, 2022, 2023." },
      { name: "Jackie Stewart", wins: 3, desc: "Won in 1968, 1969, 1973." }
    ],
    shape: [
      [4, 0, 4], [6, 0, 0], [3, 0, -4], [-1, 0, -5], [-5, 0, -2], [-4, 0, 3], [0, 0, 5]
    ],
    glbNodeName: "zandvoort"
  },
  {
    id: "italy",
    name: "Monza",
    country: "Italy",
    date: { start: "04", end: "06", month: "SEP" },
    length: "5.793",
    distance: "306.720",
    laps: "53",
    schedule: [
      { name: "Practice 1", date: "04 SEP", time: "11:30" },
      { name: "Practice 2", date: "04 SEP", time: "15:00" },
      { name: "Practice 3", date: "05 SEP", time: "11:30" },
      { name: "Qualifying", date: "05 SEP", time: "15:00" },
      { name: "Race", date: "06 SEP", time: "14:00", isRace: true },
    ],
    winners: [
      { name: "Michael Schumacher", wins: 5, desc: "Tied for most wins." },
      { name: "Lewis Hamilton", wins: 5, desc: "Tied for most wins." },
      { name: "Nelson Piquet", wins: 4, desc: "Won in 1980, 1983, 1986, 1987." }
    ],
    shape: [
      [0, 0, 7], [3, 0, 4], [6, 0, -2], [2, 0, -6], [-2, 0, -5], [-5, 0, 0], [-3, 0, 5]
    ],
    glbNodeName: "monza"
  },
  // NEW in 2026: Madrid replaces Imola on the calendar
  {
    id: "premio",
    name: "Premio de España",
    country: "Spain",
    date: { start: "11", end: "13", month: "SEP" },
    length: "5.476",
    distance: "307.236",
    laps: "56",
    schedule: [
      { name: "Practice 1", date: "11 SEP", time: "12:30" },
      { name: "Practice 2", date: "11 SEP", time: "16:00" },
      { name: "Practice 3", date: "12 SEP", time: "11:30" },
      { name: "Qualifying", date: "12 SEP", time: "15:00" },
      { name: "Race", date: "13 SEP", time: "14:00", isRace: true },
    ],
    winners: [
      { name: "TBD", wins: 0, desc: "Inaugural race in 2026." }
    ],
    shape: [
      [3, 0, 5], [6, 0, 2], [4, 0, -3], [0, 0, -6], [-4, 0, -4], [-6, 0, 0], [-3, 0, 4], [0, 0, 5]
    ],
    glbNodeName: "barcelona"
  },
  {
    id: "azerbaijan",
    name: "Baku",
    country: "Azerbaijan",
    date: { start: "24", end: "26", month: "SEP" },
    length: "6.003",
    distance: "306.049",
    laps: "51",
    schedule: [
      { name: "Practice 1", date: "24 SEP", time: "09:30" },
      { name: "Practice 2", date: "24 SEP", time: "13:00" },
      { name: "Practice 3", date: "25 SEP", time: "09:30" },
      { name: "Qualifying", date: "25 SEP", time: "13:00" },
      { name: "Race", date: "26 SEP", time: "12:00", isRace: true },
    ],
    winners: [
      { name: "Sergio Perez", wins: 2, desc: "Won in 2021 and 2023." },
      { name: "Daniel Ricciardo", wins: 1, desc: "Won in 2017." },
      { name: "Lewis Hamilton", wins: 1, desc: "Won in 2018." }
    ],
    shape: [
      [5, 0, 5], [7, 0, 1], [4, 0, -3], [1, 0, -6], [-3, 0, -4], [-6, 0, 0], [-4, 0, 4], [0, 0, 6]
    ],
    glbNodeName: "baku"
  },
  {
    id: "singapore",
    name: "Marina Bay",
    country: "Singapore",
    date: { start: "09", end: "11", month: "OCT" },
    length: "4.940",
    distance: "306.143",
    laps: "62",
    schedule: [
      { name: "Practice 1", date: "09 OCT", time: "09:30" },
      { name: "Sprint Quali", date: "09 OCT", time: "13:30" },
      { name: "Sprint", date: "10 OCT", time: "10:00" },
      { name: "Qualifying", date: "10 OCT", time: "14:00" },
      { name: "Race", date: "11 OCT", time: "13:00", isRace: true },
    ],
    winners: [
      { name: "Sebastian Vettel", wins: 5, desc: "Most wins here." },
      { name: "Lewis Hamilton", wins: 4, desc: "Won in 2009, 2014, 2017, 2018." },
      { name: "Fernando Alonso", wins: 2, desc: "Won in 2008 and 2010." }
    ],
    shape: [
      [4, 0, 5], [6, 0, 2], [3, 0, -2], [5, 0, -5], [0, 0, -6], [-4, 0, -3], [-6, 0, 1], [-2, 0, 4]
    ],
    glbNodeName: "singapore"
  },
  {
    id: "usa",
    name: "Austin",
    country: "USA",
    date: { start: "23", end: "25", month: "OCT" },
    length: "5.513",
    distance: "308.405",
    laps: "56",
    schedule: [
      { name: "Practice 1", date: "23 OCT", time: "18:30" },
      { name: "Practice 2", date: "23 OCT", time: "22:00" },
      { name: "Practice 3", date: "24 OCT", time: "18:30" },
      { name: "Qualifying", date: "24 OCT", time: "22:00" },
      { name: "Race", date: "25 OCT", time: "20:00", isRace: true },
    ],
    winners: [
      { name: "Lewis Hamilton", wins: 5, desc: "Most wins at COTA." },
      { name: "Max Verstappen", wins: 3, desc: "Won in 2021, 2022, 2023." },
      { name: "Sebastian Vettel", wins: 1, desc: "Won in 2013." }
    ],
    shape: [
      [3, 0, 6], [6, 0, 2], [4, 0, -3], [0, 0, -6], [-4, 0, -4], [-6, 0, 0], [-3, 0, 4], [0, 0, 5]
    ],
    glbNodeName: "austin"
  },
  {
    id: "mexico",
    name: "Mexico City",
    country: "Mexico",
    date: { start: "30", end: "01", month: "NOV" },
    length: "4.304",
    distance: "305.354",
    laps: "71",
    schedule: [
      { name: "Practice 1", date: "30 OCT", time: "18:30" },
      { name: "Practice 2", date: "30 OCT", time: "22:00" },
      { name: "Practice 3", date: "31 OCT", time: "17:30" },
      { name: "Qualifying", date: "31 OCT", time: "21:00" },
      { name: "Race", date: "01 NOV", time: "20:00", isRace: true },
    ],
    winners: [
      { name: "Max Verstappen", wins: 5, desc: "Most wins here." },
      { name: "Jim Clark", wins: 3, desc: "Won in 1962, 1963, 1967." },
      { name: "Lewis Hamilton", wins: 2, desc: "Won in 2016 and 2019." }
    ],
    shape: [
      [5, 0, 4], [6, 0, -1], [3, 0, -5], [-1, 0, -6], [-5, 0, -3], [-6, 0, 2], [-2, 0, 5], [2, 0, 6]
    ],
    glbNodeName: "mexico-city"
  },
  {
    id: "brazil",
    name: "Interlagos",
    country: "Brazil",
    date: { start: "06", end: "08", month: "NOV" },
    length: "4.309",
    distance: "305.879",
    laps: "71",
    schedule: [
      { name: "Practice 1", date: "06 NOV", time: "15:30" },
      { name: "Practice 2", date: "06 NOV", time: "19:00" },
      { name: "Practice 3", date: "07 NOV", time: "14:30" },
      { name: "Qualifying", date: "07 NOV", time: "18:00" },
      { name: "Race", date: "08 NOV", time: "17:00", isRace: true },
    ],
    winners: [
      { name: "Alain Prost", wins: 6, desc: "Most wins in Brazil." },
      { name: "Michael Schumacher", wins: 4, desc: "Won in 1994, 1995, 2000, 2002." },
      { name: "Lewis Hamilton", wins: 3, desc: "Won in 2016, 2018, 2021." }
    ],
    shape: [
      [4, 0, 5], [6, 0, 1], [3, 0, -4], [-1, 0, -5], [-5, 0, -2], [-4, 0, 3], [0, 0, 6]
    ],
    glbNodeName: "sao-paulo"
  },
  {
    id: "vegas",
    name: "Las Vegas",
    country: "USA",
    date: { start: "20", end: "22", month: "NOV" },
    length: "6.201",
    distance: "309.958",
    laps: "50",
    schedule: [
      { name: "Practice 1", date: "20 NOV", time: "00:30" },
      { name: "Practice 2", date: "20 NOV", time: "04:00" },
      { name: "Practice 3", date: "21 NOV", time: "00:30" },
      { name: "Qualifying", date: "21 NOV", time: "04:00" },
      { name: "Race", date: "22 NOV", time: "04:00", isRace: true },
    ],
    winners: [
      { name: "Max Verstappen", wins: 1, desc: "Won the inaugural race in 2023." },
      { name: "George Russell", wins: 1, desc: "Won in 2024." }
    ],
    shape: [
      [2, 0, 7], [5, 0, 4], [6, 0, -2], [3, 0, -6], [-2, 0, -5], [-6, 0, -1], [-4, 0, 5], [-1, 0, 6]
    ],
    glbNodeName: "las-vegas"
  },
  {
    id: "qatar",
    name: "Lusail",
    country: "Qatar",
    date: { start: "27", end: "29", month: "NOV" },
    length: "5.419",
    distance: "308.611",
    laps: "57",
    schedule: [
      { name: "Practice 1", date: "27 NOV", time: "13:30" },
      { name: "Practice 2", date: "27 NOV", time: "17:00" },
      { name: "Practice 3", date: "28 NOV", time: "14:30" },
      { name: "Qualifying", date: "28 NOV", time: "18:00" },
      { name: "Race", date: "29 NOV", time: "16:00", isRace: true },
    ],
    winners: [
      { name: "Max Verstappen", wins: 2, desc: "Won in 2023 and 2024." },
      { name: "Lewis Hamilton", wins: 1, desc: "Won the inaugural race in 2021." }
    ],
    shape: [
      [4, 0, 5], [6, 0, 1], [3, 0, -4], [-2, 0, -5], [-6, 0, -1], [-4, 0, 4], [0, 0, 6]
    ],
    glbNodeName: "lusail"
  },
  {
    id: "abudhabi",
    name: "Yas Marina",
    country: "UAE",
    date: { start: "04", end: "06", month: "DEC" },
    length: "5.281",
    distance: "306.183",
    laps: "58",
    schedule: [
      { name: "Practice 1", date: "04 DEC", time: "09:30" },
      { name: "Practice 2", date: "04 DEC", time: "13:00" },
      { name: "Practice 3", date: "05 DEC", time: "10:30" },
      { name: "Qualifying", date: "05 DEC", time: "14:00" },
      { name: "Race", date: "06 DEC", time: "13:00", isRace: true },
    ],
    winners: [
      { name: "Lewis Hamilton", wins: 5, desc: "Most wins at Yas Marina." },
      { name: "Max Verstappen", wins: 5, desc: "Won from 2020 to 2024." },
      { name: "Sebastian Vettel", wins: 3, desc: "Won in 2009, 2010, 2013." }
    ],
    shape: [
      [3, 0, 6], [6, 0, 2], [4, 0, -3], [1, 0, -6], [-3, 0, -5], [-6, 0, 0], [-4, 0, 4], [0, 0, 5]
    ],
    glbNodeName: "yas-marina"
  }
];