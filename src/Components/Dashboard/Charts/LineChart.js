import React from 'react'
import { Line } from 'react-chartjs-2'
import { WEEKLY_SCANS } from '@/Data/ChartData'
import {Chart as ChartJS } from 'chart.js/auto'

export default function LineChart() {
  return (
    <div style={{ width: 650 }}>
      <Line
        data={{
          labels: WEEKLY_SCANS.map((data) => data.Day),
          responsive: true,

          datasets: [
            {
              label: "This week scans",
              data: WEEKLY_SCANS.map((item) => item.Scan),
              backgroundColor: ["#63C0D2"],
              borderColor: ["#63C0D2"],
              color: "white",
            },
          ],
        }}
      />
    </div>
  );
}
