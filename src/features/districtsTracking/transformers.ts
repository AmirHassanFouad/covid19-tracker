import {
  CaseHistory,
  District,
  DistrictHistory,
  DistrictResponse,
  IncidenceHistory,
} from "typings/districts";

export const transformDistrictsObj = ({
  data,
}: DistrictResponse): District[] => {
  return Object.values(data).map(({ ags, county }: District) => ({
    ags,
    county,
  }));
};

export const getHistory = (
  { data }: DistrictHistory,
  ags: string
): CaseHistory[] | IncidenceHistory[] => {
  return data[ags].history;
};
