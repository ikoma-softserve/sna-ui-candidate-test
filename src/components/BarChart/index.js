import React, { useEffect, memo } from "react";

import Chart from "chart.js/auto";

const BarChart = memo(function BarChart({ malesCount, femalesCount }) {
  const labels = ["Male", "Female"];
  const data = {
    labels: labels,
    datasets: [
      {
        label: "Employees by gender",
        backgroundColor: "white",
        barPercentage: 0.5,
        borderColor: "white",
        data: [malesCount, femalesCount],
      },
    ],
  };
  const config = {
    type: "bar",
    data: data,
    options: {},
  };

  useEffect(() => {
    const myChart = new Chart(document.getElementById("barChart"), config);
  }, []);

  return <></>;
});

export default BarChart;
