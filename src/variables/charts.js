// used inside src/views/examples/LandingPage.js
export const CHART_COLORS = {
  red: "rgb(255, 99, 132)",
  orange: "rgb(255, 159, 64)",
  yellow: "rgb(255, 205, 86)",
  green: "rgb(75, 192, 192)",
  blue: "rgb(54, 162, 235)",
  purple: "rgb(153, 102, 255)",
  dark: "rgb(136, 153, 166)",
  grey: "rgb(201, 203, 207)"
};

const bigChart = {
  data: (canvas) => {
    let ctx = canvas.getContext("2d");

    let gradientFill = ctx.createLinearGradient(0, 230, 0, 50);

    gradientFill.addColorStop(1, "rgba(29,140,248,0.2)");
    gradientFill.addColorStop(0.4, "rgba(29,140,248,0.0)");
    gradientFill.addColorStop(0, "rgba(29,140,248,0)"); //blue colors

    return {
      labels: [
        "Live Launch Burn",
        "Pre-Sale",
        "General Availability",
        "Partnerships",
        "Marketing",
        "Community",
        "Dev",
        "Daily Live Burn",
      ],
      datasets: [
        {
          label: "Dataset 1",
          data: [20, 24, 16, 10, 10, 3, 7, 10],
          backgroundColor: Object.values(CHART_COLORS),
        },
      ],
      // datasets: [
      //   {
      //     label: "Data",
      //     fill: true,
      //     backgroundColor: gradientFill,
      //     borderColor: "#1d8cf8",
      //     borderWidth: 2,
      //     borderDash: [],
      //     borderDashOffset: 0.0,
      //     pointBackgroundColor: "#1d8cf8",
      //     pointBorderColor: "rgba(255,255,255,0)",
      //     pointHoverBackgroundColor: "#5464ed",
      //     //pointHoverBorderColor:'rgba(35,46,55,1)',
      //     pointBorderWidth: 20,
      //     pointHoverRadius: 4,
      //     pointHoverBorderWidth: 15,
      //     pointRadius: 4,
      //     data: [80, 160, 200, 160, 250, 280, 220, 190, 200, 250, 290, 320],
      //   },
      // ],
    };
  },
  options: {
    maintainAspectRatio: false,
    legend: {
      display: true,
      position: "left",
    },

    tooltips: {
      backgroundColor: "#fff",
      titleFontColor: "#ccc",
      bodyFontColor: "#666",
      bodySpacing: 4,
      xPadding: 12,
      mode: "nearest",
      intersect: 0,
      position: "nearest",
      callbacks: {
        label: function (tooltipItem, data) {
          var dataset = data.datasets[tooltipItem.datasetIndex];
          var meta = dataset._meta[Object.keys(dataset._meta)[0]];
          var total = meta.total;
          var currentValue = dataset.data[tooltipItem.index];
          var percentage = parseFloat(
            ((currentValue / total) * 100).toFixed(1)
          );
          return currentValue + " (" + percentage + "%)";
        },
        title: function (tooltipItem, data) {
          return data.labels[tooltipItem[0].index];
        },
      },
    },
    responsive: true,
  },
};

export default bigChart;
