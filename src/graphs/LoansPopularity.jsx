import React from "react";
import ReactApexChart from "react-apexcharts";
// import "apexcharts/dist/apexcharts.css";

const LoansPopularity = () => {
  // Chart options
  const options = {
    xaxis: {
      categories: ["fee loan", "housing", "business", "emergency", "family"],
    },
    colors: ["green"],
  };

  // Chart data
  const series = [
    {
      name: "Series 1",
      data: [30, 40, 25, 50, 49],
    },
  ];

  return (
    <div>
      <h1>Loans performance</h1>
      <ReactApexChart
        options={options}
        series={series}
        type="bar"
        height={450}
      />
    </div>
  );
};

export default LoansPopularity;
