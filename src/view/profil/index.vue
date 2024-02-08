<template>
  <div class="bg-primary">
    <div class="py-4 px-3">
      <div class="flex justify-between">
        <div class="text-white">
          <h2 class="font-semibold text-xl">Hi {{ dataUser.name }}</h2>
          <p>Saldo</p>
          <p>{{ formatRupiah(dataUser.saldo) }}</p>
        </div>
        <img src="/profil.jpg" alt="foto profil" class="w-16 h-16 bg-gray-500 rounded-full" />
      </div>
    </div>
    <div class="bg-white rounded-t-xl p-3">
      <div class="border-b-2 border-solid border-gray-300 py-5">
        <h2 class="pb-5">Grafik</h2>
        <Chart
          :labels="['January', 'February', 'March', 'April', 'Mei', 'Juni', 'Juli', 'Agustus', 'September', 'Oktober', 'November', 'Desember']"
          :data1="{
            title: 'saldo masuk',
            data: [23, 12, 45, 8, 37, 5, 19, 42, 14, 29, 31, 6],
          }"
          :data2="{
            title: 'saldo keluar',
            data: [7, 33, 18, 49, 22, 4, 41, 11, 28, 36, 14, 9],
          }"
        />
      </div>
      <div class="border-b-2 border-solid border-gray-300 flex gap-6 py-5">
        <div class="bg-gray-200 flex-grow rounded-lg p-3">
          <h3 class="font-bold">Pemasukan</h3>
          <p class="text-green-600 font-bold">{{ formatRupiah(dataUser.pemasukan) }}</p>
        </div>
        <div class="bg-gray-200 flex-grow rounded-lg p-3">
          <h3 class="font-bold">Pengeluaran</h3>
          <p class="text-red-600 font-bold">{{ formatRupiah(dataUser.pengeluaran) }}</p>
        </div>
      </div>
      <div class="pt-5">
        <h3 class="font-bold">Produk Yang Sering Dibeli</h3>
        <!-- <ProductList :dataList="dataUser.mostProduct" /> -->
      </div>
    </div>
  </div>
</template>

<script>
import Chart from "@/components/chart.vue";
import ProductList from "@/components/productList.vue";
import axiosInstance from "@/axios.js";

export default {
  name: "ProfilPage",
  data() {
    return {
      dataUser: [],
    };
  },
  components: {
    ProductList,
    Chart,
  },
  methods: {
    formatRupiah(num) {
      const formatter = new Intl.NumberFormat("id-ID", {
        style: "currency",
        currency: "IDR",
      });

      return formatter.format(num);
    },
    fetch() {
      const id = this.$route.params.id;
      axiosInstance
        .get(`/api/user/${id}`)
        .then((result) => {
          this.dataUser = result[0].payload.data[0];
          console.log(this.dataUser);
        })
        .catch((err) => {
          console.error(err);
        });
    },
  },
  mounted() {
    this.fetch();
  },
};
</script>
