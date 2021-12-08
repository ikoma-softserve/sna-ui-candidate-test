import React, { useEffect, memo } from "react";

import Chart from "chart.js/auto";

const PieChart = memo(function BarChart({
  developersCount,
  QAsCount,
  CEOsCount,
  marketingSpecialistCount,
}) {
  const labels = ["Developer", "QA", "CEO", "Marketing Specialist"];

  const data = {
    labels: labels,
    datasets: [
      {
        label: "Employees by job title",
        backgroundColor: ["#fff", "#46639c", "#8096c2", "#0a1f49"],
        barPercentage: 0.5,
        borderColor: "white",
        data: [developersCount, QAsCount, CEOsCount, marketingSpecialistCount],
      },
    ],
  };
  const config = {
    type: "doughnut",
    data: data,
    options: {},
  };

  useEffect(() => {
    const myChart = new Chart(document.getElementById("pieChart"), config);
  }, []);

  return <></>;
});

export default PieChart;
