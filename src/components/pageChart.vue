<template>
  <Bar
    id="my-chart-id"
    :options="chartOptions"
    :data="chartData"
  />
</template>

<script>
import { Bar } from 'vue-chartjs'
import { Chart as ChartJS, Title, Tooltip, Legend, BarElement, CategoryScale, LinearScale } from 'chart.js'

ChartJS.register(Title, Tooltip, Legend, BarElement, CategoryScale, LinearScale)

export default {
  name: 'BarChart',
  components: { Bar },
  data() {
    return {
      chartData: {
        labels: [ '탄수화물', '단백질', '지방' ],
        datasets: [
          {
            data: [30.25, 9.40, 12.87],
            backgroundColor: [
              'rgba(255, 99, 132, 0.5)', // 탄수화물의 색상
              'rgba(54, 162, 235, 0.5)', // 단백질의 색상
              'rgba(255, 206, 86, 0.5)' // 지방의 색상
            ]
          }
        ]
      },
      chartOptions: {
        responsive: true,
        plugins: {
          title: {
            display: true,
            text: '3대 영양소',
            font: {
              size: 12 // 폰트 크기 조정
            }
          }
        }
      }
    }
  }
}
</script>