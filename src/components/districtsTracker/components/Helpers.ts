import {
  CaseHistory,
  HistoryResult,
  IncidenceHistory,
} from "typings/districts";

export const mergeCasesAndIncidences = (
  cases: CaseHistory[],
  incidences: IncidenceHistory[]
) => {
  let resultList: HistoryResult[] = [];
  cases.forEach((c) => {
    let incidence = incidences.find((inc) => inc.date === c.date);
    resultList.push({
      key: String(c.date),
      ...c,
      weekIncidence: incidence ? incidence.weekIncidence : 0,
    });
  });

  return resultList;
};
