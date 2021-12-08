import React, { useEffect, useMemo, memo } from "react";
import PropTypes from "prop-types";

import Chart from "chart.js/auto";

const labels = ["Developer", "QA", "CEO", "Marketing Specialist", "CFO"];

const PieChart = memo(function BarChart({
  developersCount,
  QAsCount,
  CEOsCount,
  marketingSpecialistCount,
  CFOsCount,
}) {
  const getData = useMemo(
    () => ({
      labels: labels,
      datasets: [
        {
          label: "Employees by job title",
          backgroundColor: ["#fff", "#46639c", "#8096c2", "#0a1f49", "#334c7c"],
          barPercentage: 0.5,
          borderColor: "white",
          data: [
            developersCount,
            QAsCount,
            CEOsCount,
            marketingSpecialistCount,
            CFOsCount,
          ],
        },
      ],
    }),
    [developersCount, QAsCount, CEOsCount, marketingSpecialistCount, CFOsCount]
  );

  const config = useMemo(
    () => ({
      type: "doughnut",
      data: getData,
      options: {},
    }),
    [getData]
  );

  useEffect(() => {
    const chart = new Chart(document.getElementById("pieChart"), config);
    chart.update();

    return () => {
      chart.destroy();
    };
  }, [config]);

  return (
    <div className={"App-PieChart"}>
      <canvas id="pieChart" />
    </div>
  );
});

PieChart.propTypes = {
  developersCount: PropTypes.number,
  QAsCount: PropTypes.number,
  CEOsCount: PropTypes.number,
  marketingSpecialistCount: PropTypes.number,
  CFOsCount: PropTypes.number,
};

export default PieChart;
