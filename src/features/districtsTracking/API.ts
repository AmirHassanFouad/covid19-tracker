const baseUrl = "https://api.corona-zahlen.org/districts";

export function fetchDistricts() {
  return fetch(baseUrl, { method: "GET" }).then((response) => {
    return response.json();
  });
}

export function fetchDistrictCases(ags: string, days: number = 0) {
  return fetch(`${baseUrl}/${ags}/history/cases${days > 0 ? `/${days}` : ""}`, {
    method: "GET",
  }).then((response) => {
    return response.json();
  });
}

export function fetchDistrictIncidences(ags: string, days: number = 0) {
  return fetch(
    `${baseUrl}/${ags}/history/incidence${days > 0 ? `/${days}` : ""}`,
    {
      method: "GET",
    }
  ).then((response) => {
    return response.json();
  });
}
