import React from 'react'
import { Pie } from 'react-chartjs-2'
import {Chart as ChartJS} from 'chart.js/auto'
import { SUBDOMAIN_DETAILS } from '@/Data/ChartData'

export default function PieChart() {
  return (
    <div style={{ width: 400 }}>
      <Pie
        data={{
          labels: SUBDOMAIN_DETAILS.map((item) => item.domain),
          datasets: [
            {
              label: "Subdomain details",
              data: SUBDOMAIN_DETAILS.map((info) => info.Scan),
              backgroundColor: ["#3C5F64", "#71888D", "#1F2828", "#0A282F"],
              
            },
          ],
        }}
        
      />
    </div>
  );
}
