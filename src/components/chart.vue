<template>
  <div class="h-64">
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
        labels: this.labels,
        datasets: [
          {
            label: this.data1.title,
            borderColor: "rgb(0, 225, 0)",
            backgroundColor: "rgb(0, 225, 0)",
            data: this.data1.data,
          },
          {
            label: this.data2.title,
            borderColor: "rgb(225, 0,0)",
            backgroundColor: "rgb(225, 0,0)",
            data: this.data2.data,
          },
        ],
      },
      chartOptions: {
        responsive: true,
        maintainAspectRatio: false,
      },
    };
  },
  props: {
    labels: Array,
    data1: Object,
    data2: Object,
  }
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
