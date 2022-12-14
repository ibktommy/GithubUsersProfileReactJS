// STEP 1 - Include Dependencies
// Include react
import React from "react";

// Include the react-fusioncharts component
import ReactFC from "react-fusioncharts";

// Include the fusioncharts library
import FusionCharts from "fusioncharts";

// Include the chart type
import Column2D from "fusioncharts/fusioncharts.charts";

// Include the theme as fusion
import FusionTheme from "fusioncharts/themes/fusioncharts.theme.candy";

// Adding the chart and theme as dependency to the core fusioncharts
ReactFC.fcRoot(FusionCharts, Column2D, FusionTheme);

// STEP 4 - Creating the DOM element to pass the react-fusioncharts component
const FusionChart = ({ data }) => {
  const chartConfigs = {
    type: "doughnut2d", // The chart type
    width: "100%", // Width of the chart
    height: "400", // Height of the chart
    dataFormat: "json", // Data type
    dataSource: {
      // Chart Configuration
      chart: {
        //Set the chart caption
        caption: "Stars Per Language",
        //Set the theme for your chart
        theme: "candy",
        // Set Decimaal
        decimals: 0,
        // Set Doughnut Size (radius)
        doughnutRadius: '45%',
        // Remove Percentage symbol
        showPercentValues: 0,
        //Set the chart subcaption
        subCaption: "Classifying languages used based on star rating",
      },
      // Chart Data
      data: data
    }
  };
  return (<ReactFC {...chartConfigs} />);
}

export default FusionChart;