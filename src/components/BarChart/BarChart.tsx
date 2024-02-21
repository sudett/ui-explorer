import { Bar } from "react-chartjs-2";
import { BarChartContainer } from "./BarChart.styled";

function BarChart({ chartData }) {
  return (
    <BarChartContainer>
      <Bar
        data={chartData}
        options={{
          plugins: {
            title: {
              display: true,
              text: "Users Gained between 2016-2020",
            },
            legend: {
              display: false,
            },
          },
        }}
      />
    </BarChartContainer>
  );
}

export default BarChart;
