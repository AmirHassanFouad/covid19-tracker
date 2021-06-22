import { useState } from "react";
import { Tabs, Card } from "antd";
import { BarChartOutlined, TableOutlined } from "@ant-design/icons";

import { ChartView } from "./ChartView";
import { TableView } from "./TableView";

type ResultsView = "chart" | "table";

export function Results() {
  const [selectedTab, setSelectedTab] = useState<ResultsView>("table");

  return (
    <Card>
      <Tabs
        type="card"
        activeKey={selectedTab}
        defaultActiveKey={selectedTab}
        onChange={(newTab) => {
          setSelectedTab(newTab as ResultsView);
        }}
      >
        <Tabs.TabPane
          tab={
            <span>
              <TableOutlined />
              Table view
            </span>
          }
          key="table"
        >
          <TableView />
        </Tabs.TabPane>
        <Tabs.TabPane
          tab={
            <span>
              <BarChartOutlined />
              Chart view
            </span>
          }
          key="chart"
        >
          <div>
            <ChartView />
          </div>
        </Tabs.TabPane>
      </Tabs>
    </Card>
  );
}
