import districtsReducer, {
  State,
  setStatus,
  setCounty,
  setLoading,
} from "./slice";

import { getDistricts } from "./thunks";
import { District } from "typings/districts";
import { distractsList } from "fixtures";

describe("districts reducer", () => {
  const initialState: State = {
    districts: [],
    cases: [],
    incidences: [],
    isLoading: false,
    county: "",
    status: "idle",
  };

  it("should handle initial state", () => {
    expect(districtsReducer(undefined, { type: "unknown" })).toEqual({
      districts: [],
      cases: [],
      incidences: [],
      isLoading: false,
      county: "",
      status: "idle",
    });
  });

  it("should handle loading", () => {
    const actual = districtsReducer(initialState, setLoading(true));
    expect(actual.isLoading).toEqual(true);
  });

  it("should handle status", () => {
    const actual = districtsReducer(initialState, setStatus("loading"));
    expect(actual.status).toEqual("loading");
  });

  it("should handle county", () => {
    const actual = districtsReducer(initialState, setCounty("SK Hamburg"));
    expect(actual.county).toEqual("SK Hamburg");
  });
  
  it("change loading to true and status to loading when getDistracts is pending", () => {
    const pendingAction = {
      type: getDistricts.pending.type,
    };
    const state = districtsReducer(initialState, pendingAction);
    expect(state.isLoading).toEqual(true);
    expect(state.status).toEqual("loading");
  });

  it("save distracts list in  distracts state when getDistracts is fulfilled", () => {
    const fulfilledAction = {
      type: getDistricts.fulfilled.type,
      payload: distractsList,
    };

    const state = districtsReducer(initialState, fulfilledAction);
    expect(state.isLoading).toEqual(false);
    expect(state.districts).toEqual(distractsList);
    expect(state.status).toEqual("idle");
  });

  it("change loading to false and status to failed when getDistracts is rejected", () => {
    const pendingAction = {
      type: getDistricts.rejected.type,
    };
    const state = districtsReducer(initialState, pendingAction);
    expect(state.isLoading).toEqual(false);
    expect(state.status).toEqual("failed");
  });

  it("save cases and incidences lists in distracts state when getDistracts is fulfilled", () => {
    const distractsList: District[] = [
      { ags: "10041", county: "LK Stadtverband Saarbrücken" },
      { ags: "10042", county: "LK Merzig-Wadern" },
      { ags: "10043", county: "LK Neunkirchen" },
    ];

    const fulfilledAction = {
      type: getDistricts.fulfilled.type,
      payload: distractsList,
    };

    const state = districtsReducer(initialState, fulfilledAction);
    expect(state.isLoading).toEqual(false);
    expect(state.districts).toEqual(distractsList);
    expect(state.status).toEqual("idle");
  });
});
