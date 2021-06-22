import {
  districtCasesList,
  districtIncidencesList,
  mergedCasesAndIncidencesList,
} from "../../../fixtures";
import { mergeCasesAndIncidences } from "./Helpers";

describe("Helper functions", () => {
  it("should merge cases and incidences successfully", () => {
    const result = mergeCasesAndIncidences(
      districtCasesList,
      districtIncidencesList
    );
    expect(result).toEqual(mergedCasesAndIncidencesList);
  });
});
