<template>
  <div class="m-2 p-2 h-52">
    <Line v-if="loaded" id="my-chart-id" :options="chartOptions" :data="chartData" />
  </div>
</template>

<script>
import { Chart as ChartJS, CategoryScale, LinearScale, PointElement, LineElement, Title, Tooltip, Legend } from "chart.js";
import { Line } from "vue-chartjs";
ChartJS.register(CategoryScale, LinearScale, PointElement, LineElement, Title, Tooltip, Legend);

export default {
  name: "BarChart",
  components: { Line },
  data() {
    return {
      loaded: true,
      chartData: {
        labels: ["January", "February", "March", "April", "Mei", "Juni", "Juli", "Agustus", "September", "Oktober", "November", "Desember"],
        datasets: [
          {
            label: "saldo masuk",
            borderColor: "rgb(0, 225, 0)",
            backgroundColor: "rgb(0, 225, 0)",
            data: [23, 12, 45, 8, 37, 5, 19, 42, 14, 29, 31, 6],
          },
          {
            label: "saldo keluar",
            borderColor: "rgb(225, 0,0)",
            backgroundColor: "rgb(225, 0,0)",
            data: [7, 33, 18, 49, 22, 4, 41, 11, 28, 36, 14, 9],
          },
        ],
      },
      chartOptions: {
        responsive: true,
        maintainAspectRatio: false,
      },
    };
  },
  // async mounted () {
  //   this.loaded = false

  //   try {
  //     const { userlist } = await fetch('/api/userlist')
  //     this.chartdata = userlist

  //     this.loaded = true
  //   } catch (e) {
  //     console.error(e)
  //   }
  // }
};
</script>

<style></style>
