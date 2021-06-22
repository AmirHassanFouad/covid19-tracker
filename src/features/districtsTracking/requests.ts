import { ActionReducerMapBuilder } from "@reduxjs/toolkit";

import { State } from "./slice";
import { getDistrictHistory, getDistricts } from "./thunks";
import { CaseHistory, IncidenceHistory } from "typings/districts";

/**
 * Requests Reducer
 */
export const requestsReducer = (builder: ActionReducerMapBuilder<State>) =>
  builder
    .addCase(getDistricts.pending, (state) => {
      state.status = "loading";
      state.isLoading = true;
    })
    .addCase(getDistricts.fulfilled, (state, action) => {
      state.status = "idle";
      state.isLoading = false;
      state.districts = action.payload;
    })
    .addCase(getDistricts.rejected, (state) => {
      state.status = "failed";
      state.isLoading = false;
    })
    .addCase(getDistrictHistory.pending, (state) => {
      state.status = "loading";
      state.isLoading = true;
    })
    .addCase(getDistrictHistory.fulfilled, (state, action) => {
      state.status = "idle";
      state.isLoading = false;
      state.cases = action.payload.cases as CaseHistory[];
      state.incidences = action.payload.incidences as IncidenceHistory[];
      state.county = action.payload.county;
    })
    .addCase(getDistrictHistory.rejected, (state) => {
      state.status = "failed";
      state.isLoading = false;
    });
