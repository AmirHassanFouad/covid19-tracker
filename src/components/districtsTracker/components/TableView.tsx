import { useMemo } from "react";
import { useSelector } from "react-redux";
import { format } from "date-fns";

import {
  getCasesList,
  getIncidencesList,
} from "features/districtsTracking/selectors";
import { HistoryResult } from "typings/districts";
import { Table } from "antd";
import { mergeCasesAndIncidences } from "./Helpers";

const columns = [
  {
    title: "Date",
    dataIndex: "date",
    key: "date",
    width: 150,
    render: (date: Date) => <span>{format(new Date(date), "yyyy-MM-dd")}</span>,
  },
  {
    title: "Cases",
    dataIndex: "cases",
    key: "cases",
    width: 150,
  },
  {
    title: "Week incidence",
    dataIndex: "weekIncidence",
    key: "weekIncidence",
    width: 150,
    render: (incidence: number) => (
      <span>{Math.round(incidence * 100) / 100}</span>
    ),
  },
];

export function TableView() {
  const cases = useSelector(getCasesList);
  const incidences = useSelector(getIncidencesList);

  const data = useMemo((): HistoryResult[] => {
    return mergeCasesAndIncidences(cases, incidences);
  }, [cases, incidences]);

  return <Table columns={columns} dataSource={data} scroll={{ y: 240 }} />;
}
