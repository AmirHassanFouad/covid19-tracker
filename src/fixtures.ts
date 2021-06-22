import {
  CaseHistory,
  District,
  HistoryResult,
  IncidenceHistory,
} from "typings/districts";

export const distractsList: District[] = [
  { ags: "10041", county: "LK Stadtverband Saarbrücken" },
  { ags: "10042", county: "LK Merzig-Wadern" },
  { ags: "10043", county: "LK Neunkirchen" },
];

export const districtCasesList: CaseHistory[] = [
  { cases: 37, date: "2021-06-16T00:00:00.000Z " },
  { cases: 8, date: "2021-06-17T00:00:00.000Z " },
  { cases: 5, date: "2021-06-18T00:00:00.000Z " },
  { cases: 3, date: "2021-06-19T00:00:00.000Z " },
  { cases: 4, date: "2021-06-20T00:00:00.000Z " },
];

export const districtIncidencesList: IncidenceHistory[] = [
  {
    weekIncidence: 23.111623434615506,
    date: "2021-06-16T00:00:00.000Z ",
  },
  {
    weekIncidence: 23.396952118993475,
    date: "2021-06-17T00:00:00.000Z ",
  },
  {
    weekIncidence: 21.11432264396972,
    date: "2021-06-18T00:00:00.000Z ",
  },
  {
    weekIncidence: 21.68498001272566,
    date: "2021-06-19T00:00:00.000Z ",
  },
  {
    weekIncidence: 21.68498001272566,
    date: "2021-06-20T00:00:00.000Z ",
  },
];

export const mergedCasesAndIncidencesList: HistoryResult[] = [
  {
    cases: 37,
    weekIncidence: 23.111623434615506,
    date: "2021-06-16T00:00:00.000Z ",
    key: "2021-06-16T00:00:00.000Z ",
  },
  {
    cases: 8,
    weekIncidence: 23.396952118993475,
    date: "2021-06-17T00:00:00.000Z ",
    key: "2021-06-17T00:00:00.000Z ",
  },
  {
    cases: 5,
    weekIncidence: 21.11432264396972,
    date: "2021-06-18T00:00:00.000Z ",
    key: "2021-06-18T00:00:00.000Z ",
  },
  {
    cases: 3,
    weekIncidence: 21.68498001272566,
    date: "2021-06-19T00:00:00.000Z ",
    key: "2021-06-19T00:00:00.000Z ",
  },
  {
    cases: 4,
    weekIncidence: 21.68498001272566,
    date: "2021-06-20T00:00:00.000Z ",
    key: "2021-06-20T00:00:00.000Z ",
  },
];
