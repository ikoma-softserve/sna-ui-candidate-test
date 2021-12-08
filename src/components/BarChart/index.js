import React, { useEffect, memo, useMemo } from "react";
import PropTypes from "prop-types";

import Chart from "chart.js/auto";

const labels = ["Male", "Female"];

const BarChart = memo(function BarChart({ malesCount, femalesCount }) {
  const data = useMemo(
    () => ({
      labels: labels,
      datasets: [
        {
          label: "Employees by gender",
          backgroundColor: ["#fff", "#0a1f49"],
          barPercentage: 0.8,
          barThickness: 180,
          borderColor: "white",
          data: [malesCount, femalesCount],
        },
      ],
    }),
    [malesCount, femalesCount]
  );
  const config = useMemo(
    () => ({
      type: "bar",
      data: data,
      options: {},
    }),
    [data]
  );

  useEffect(() => {
    const chart = new Chart(document.getElementById("barChart"), config);
    chart.update();

    return () => {
      chart.destroy();
    };
  }, [config]);

  return (
    <div className={"App-BarChart"}>
      <canvas id="barChart" />
    </div>
  );
});

BarChart.propTypes = {
  malesCount: PropTypes.number,
  femalesCount: PropTypes.number,
};

export default BarChart;
