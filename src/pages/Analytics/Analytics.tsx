import React, { useState } from "react";
import { Chart } from "chart.js/auto";
import { CategoryScale } from "chart.js";
import LineChart from "../../components/LineCahrt/LineChart";
import Header from "../../components/Header/Header";
import {
  PrimaryTitle,
  ChartContainer,
  TableFilterContainer,
  ChartTitle,
  ChartNumber,
} from "./Analytics.styled";
import { Col, Row, Space } from "antd";
import AnalyticsFilterBox from "../../components/AnalyticsFilterBox/AnalyticsFilterBox";
import BarChart from "../../components/BarChart/BarChart";

const style: React.CSSProperties = { background: "#0092ff", padding: "8px 0" };

const Data = [
  {
    id: 1,
    day: "15 Jan",
    messages: 149,
  },
  {
    id: 2,
    day: "16 Jan",
    messages: 147,
  },
  {
    id: 3,
    day: "17 Jan",
    messages: 155,
  },
  {
    id: 4,
    day: "18 Jan",
    messages: 151,
  },
  {
    id: 5,
    day: "19 Jan",
    messages: 142,
  },
  {
    id: 6,
    day: "20 Jan",
    messages: 130,
  },
  {
    id: 5,
    day: "21 Jan",
    messages: 160,
  },
  {
    id: 5,
    day: "22 Jan",
    messages: 180,
  },
  {
    id: 5,
    day: "23 Jan",
    messages: 142,
  },
  {
    id: 5,
    day: "24 Jan",
    messages: 162,
  },
  {
    id: 5,
    day: "25 Jan",
    messages: 143,
  },
];

Chart.register(CategoryScale);

function Analytics() {
  const [chartData, setChartData] = useState({
    labels: Data.map((data) => data.day),
    datasets: [
      {
        label: "CROSS-CHAIN MESSAGES",
        data: Data.map((data) => data.messages),
        backgroundColor: "rgba(57, 255, 101, 0.2)",
        borderColor: "rgba(57, 255, 101, 0.2)",
        borderWidth: 2,
      },
    ],
  });

  return (
    <>
      <Header />
      <PrimaryTitle level={2}>Analytics</PrimaryTitle>

      <ChartContainer direction="vertical">
        <TableFilterContainer gutter={16}>
          <Col span={8}>
            <Space direction="vertical">
              <ChartTitle>TOTAL CROSS-CHAIN MESSAGES</ChartTitle>
              <ChartNumber>205,921</ChartNumber>
            </Space>
          </Col>
          <Col span={16}>
            <AnalyticsFilterBox />
          </Col>
        </TableFilterContainer>
        <LineChart chartData={chartData} />
      </ChartContainer>
      <ChartContainer direction="vertical">
        <TableFilterContainer gutter={16}>
          <Col span={8}>
            <Space direction="vertical">
              <ChartTitle>TOTAL RELAYERS</ChartTitle>
              <ChartNumber>205,921</ChartNumber>
            </Space>
          </Col>
          <Col span={16}>
            <AnalyticsFilterBox />
          </Col>
        </TableFilterContainer>
        <BarChart chartData={chartData} />
      </ChartContainer>
    </>
  );
}

export default Analytics;
