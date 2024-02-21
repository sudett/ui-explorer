import { Line } from "react-chartjs-2";
import { LineChartContainer } from "./LineChart.styled";

function LineChart({ chartData }) {
  return (
    <LineChartContainer>
      <Line
        data={chartData}
        options={{
          plugins: {
            // title: {
            //   display: true,
            //   text: "Users Gained Between 2016 and 2020",
            // },
            legend: { display: false },
          },
        }}
      />
    </LineChartContainer>
  );
}

export default LineChart;
