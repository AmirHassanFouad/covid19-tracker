import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { District, CaseHistory, IncidenceHistory } from "typings/districts";
import { requestsReducer } from "./requests";

type Status = "idle" | "loading" | "failed";

export interface State {
  districts: District[];
  cases: CaseHistory[];
  incidences: IncidenceHistory[];
  isLoading: boolean;
  county: string;
  status: Status;
}

const initialState: State = {
  districts: [],
  cases: [],
  incidences: [],
  isLoading: false,
  county: "",
  status: "idle",
};

export const districtsSlice = createSlice({
  name: "districts",
  initialState,
  reducers: {
    setLoading: (state: State, action: PayloadAction<boolean>) => {
      state.isLoading = action.payload;
    },
    setStatus: (state: State, action: PayloadAction<Status>) => {
      state.status = action.payload;
    },
    setCounty: (state, action: PayloadAction<string>) => {
      // Redux Toolkit allows us to write "mutating" logic in reducers. It
      // doesn't actually mutate the state because it uses the Immer library,
      // which detects changes to a "draft state" and produces a brand new
      // immutable state based off those changes
      state.county = action.payload;
    },
  },
  extraReducers: requestsReducer,
});

/** Actions */
export const { setLoading, setStatus, setCounty } = districtsSlice.actions;

/* Reducer */
export default districtsSlice.reducer;
