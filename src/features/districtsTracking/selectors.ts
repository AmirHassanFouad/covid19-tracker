import { createSelector } from "@reduxjs/toolkit";
import { RootState } from "../../store";

export const getState = (state: RootState) => state.district;

export const isLoading = createSelector(getState, (state) => state.isLoading);
export const getStatus = createSelector(getState, (state) => state.status);
export const getCounty = createSelector(getState, (state) => state.county);

export const getDistrictsList = createSelector(
  getState,
  (state) => state.districts
);
export const getCasesList = createSelector(getState, (state) => state.cases);
export const getIncidencesList = createSelector(
  getState,
  (state) => state.incidences
);
