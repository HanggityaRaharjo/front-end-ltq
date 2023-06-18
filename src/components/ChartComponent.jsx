import React, { useEffect, useRef } from "react";
import Chart from "chart.js/auto";

const ChartComponent = () => {
  const chartRef = useRef(null);

  useEffect(() => {
    const chartInstance = new Chart(chartRef.current, {
      type: "doughnut",
      data: {
        labels: ["Item 1", "Item 2", "Item 3", "Item 4", "Item 5"],
        datasets: [
          {
            label: "Data",
            data: [12, 19, 3, 5, 2],
            backgroundColor: ["green", "salmon", "orange", "blue", "purple"],
            borderColor: [
              "rgba(75, 192, 192, 1)",
              "rgba(255, 99, 132, 1)",
              "rgba(255, 205, 86, 1)",
              "rgba(54, 162, 235, 1)",
              "rgba(153, 102, 255, 1)",
            ],
            borderWidth: 1,
          },
        ],
      },
      options: {
        responsive: true,
        plugins: {
          legend: {
            position: "bottom",
          },
        },
      },
    });

    return () => {
      chartInstance.destroy();
    };
  }, []);

  return <canvas ref={chartRef}></canvas>;
};

export default ChartComponent;
