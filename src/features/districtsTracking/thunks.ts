import {
  fetchDistrictCases,
  fetchDistrictIncidences,
  fetchDistricts,
} from "./API";
import { getHistory, transformDistrictsObj } from "./transformers";
import { District } from "typings/districts";
import { createAsyncThunk } from "@reduxjs/toolkit";

export const getDistricts = createAsyncThunk(
  "districts/fetchDistricts",
  async () => {
    let response = await fetchDistricts();
    let districts = transformDistrictsObj(response);
    return districts;
  }
);

export const getDistrictHistory = createAsyncThunk(
  "districts/fetchDistrictHistory",
  async ({ district, days }: { district: District; days: number }) => {
    const { ags, county } = district;
    let response = await Promise.all([
      fetchDistrictCases(ags, days),
      fetchDistrictIncidences(ags, days),
    ]);
    let cases = getHistory(response[0], ags);
    let incidences = getHistory(response[1], ags);
    return { cases, incidences, county };
  }
);
