import React from "react";
import ReactFC from "react-fusioncharts";
import FusionCharts from "fusioncharts";
import Chart from "fusioncharts/fusioncharts.charts";
import FusionTheme from "fusioncharts/themes/fusioncharts.theme.fusion";

ReactFC.fcRoot(FusionCharts, Chart, FusionTheme);

const ChartComponent = ({ data }) => {
  const chartConfigs = {
    type: "bar2d",
    width: "100%",
    height: "400",
    dataFormat: "json",
    dataSource: {
      // Chart Configuration
      chart: {
        caption: "Most Forked",
        theme: "fusion",
        yAxisName: "Forks",
        xAxisName: "Repos",
        yAxisNameFontSize: 20,
        xAxisNameFontSize: 20,
        yAxisNameFontBold: 1,
        xAxisNameFontBold: 1,
        paletteColors:
          "#2caeba, #5D62B5, #FFC533, #F2726F, #8d6e63, #1de9b6, #6E80CA",
      },
      // Chart Data
      data,
    },
  };
  return <ReactFC {...chartConfigs} />;
};

export default ChartComponent;
