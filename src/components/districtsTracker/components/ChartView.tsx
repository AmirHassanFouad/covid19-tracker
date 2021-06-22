import { format } from "date-fns";
import { Line } from "react-chartjs-2";
import { useSelector } from "react-redux";
import {
  getCasesList,
  getCounty,
  getIncidencesList,
} from "features/districtsTracking/selectors";
import { useMemo } from "react";

export function ChartView() {
  const cases = useSelector(getCasesList);
  const incidences = useSelector(getIncidencesList);
  const county = useSelector(getCounty);

  const data = useMemo(
    () => ({
      labels: cases.map((c) => format(new Date(c.date), "yyyy-MM-dd")),
      datasets: [
        {
          label: "# of cases",
          data: cases.map((c) => c.cases),
          backgroundColor: ["rgba(255, 99, 132 )"],
          borderColor: ["rgba(255, 99, 132, 1)"],
          barThickness: 15,
        },
        {
          label: "week incidences",
          data: incidences.map((i) => i.weekIncidence),
          backgroundColor: ["rgba(54, 162, 235 )"],
          borderColor: ["rgba(54, 162, 235, 1)"],
          barThickness: 15,
        },
      ],
    }),
    [cases, incidences]
  );

  const options = useMemo(() => {
    return {
      indexAxis: "x",
      responsive: true,
      maintainAspectRatio: false,
      plugins: {
        legend: {
          position: "top",
        },
        title: {
          display: county && true,
          text: `Covid-19 Cases and incidences in ${county}`,
        },
      },
    };
  }, [county]);

  return (
    <Line width={100} height={300} type="" data={data} options={options} />
  );
}
