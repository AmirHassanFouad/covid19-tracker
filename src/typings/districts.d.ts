export interface District {
  ags: string;
  county: string;
}

export interface DistrictResponse {
  data: {
    [key: string]: District;
  };
  meta: {
    lastUpdate: Date;
  };
}

export interface BaseHistory {
  date: string;
}

export interface CaseHistory extends BaseHistory {
  cases: number;
}

export interface IncidenceHistory extends BaseHistory {
  weekIncidence: number;
}

export interface HistoryData {
  [key: string]: {
    ags: string;
    name: string;
    history: CaseHistory[] | IncidenceHistory[];
  };
}

export interface DistrictHistory {
  data: HistoryData;
}

export type HistoryResult = CaseHistory | (IncidenceHistory & { key: string });
