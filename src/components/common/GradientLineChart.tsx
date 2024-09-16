import Chart from "chart.js/auto";

interface Props {
  detail1?: string;
  detail2?: string;
  title?: string;
}

export default function GradientLineChart({
  detail1 = "4% more",
  detail2 = "in 2021",
  title = "Sales overview",
}: Props) {
  const chartRef = useRef<HTMLCanvasElement>(null);
  const chartInstance = useRef<Chart | null>(null);

  useEffect(() => {
    if (chartRef.current) {
      var ctx = chartRef.current?.getContext("2d");

      var gradientStroke1 = ctx?.createLinearGradient(0, 230, 0, 50);

      gradientStroke1?.addColorStop(1, "rgba(94, 114, 228, 0.2)");
      gradientStroke1?.addColorStop(0.2, "rgba(94, 114, 228, 0.0)");
      gradientStroke1?.addColorStop(0, "rgba(94, 114, 228, 0)");
      chartInstance.current = new Chart(ctx!, {
        type: "line",
        data: {
          labels: ["Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"],
          datasets: [
            {
              label: "Mobile apps",
              tension: 0.4,
              pointRadius: 0,
              borderColor: "#4BB543 ",
              backgroundColor: gradientStroke1,
              borderWidth: 3,
              fill: true,
              data: [50, 40, 300, 220, 500, 250, 400, 230, 500],
              // maxBarThickness: 6,
            },
          ],
        },
        options: {
          responsive: true,
          maintainAspectRatio: false,
          plugins: {
            legend: {
              display: false,
            },
          },
          interaction: {
            intersect: false,
            mode: "index",
          },
          scales: {
            y: {
              grid: {
                // drawBorder: false,
                display: true,
                drawOnChartArea: true,
                drawTicks: false,
                // borderDash: [5, 5],
              },
              ticks: {
                display: true,
                padding: 10,
                color: "#fbfbfb",
                font: {
                  size: 11,
                  family: "Open Sans",
                  style: "normal",
                  lineHeight: 2,
                },
              },
            },
            x: {
              grid: {
                // drawBorder: false,
                display: false,
                drawOnChartArea: false,
                drawTicks: false,
                // borderDash: [5, 5],
              },
              ticks: {
                display: true,
                color: "#ccc",
                padding: 20,
                font: {
                  size: 11,
                  family: "Open Sans",
                  style: "normal",
                  lineHeight: 2,
                },
              },
            },
          },
        },
      });
    }

    return () => {
      if (chartInstance.current) {
        chartInstance.current.destroy();
      }
    };
  }, [])

  return (
    <div className="card">
      <div className="pb-0 card-header mb-0">
        <h6>{title }</h6>
        <p className="text-sm">
          <i className="fa fa-arrow-up text-success"></i>
          <span className="font-weight-bold">{ detail1 }</span>
          { detail2 ? ` ${detail2}` : ''}
        </p>
      </div>
      <div className="p-3 card-body">
        <div className="chart">
          <canvas ref={chartRef} className="chart-canvas" height="300"></canvas>
        </div>
      </div>
    </div>
  );
}
