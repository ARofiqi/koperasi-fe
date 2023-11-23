<template>
  <div class="bg-primary">
    <div class="py-4 px-3">
      <div class="flex justify-between">
        <div class="text-white">
          <h2 class="font-semibold text-xl">Hi Abdurrahman</h2>
          <p>Saldo</p>
          <p>Rp.350.000</p>
        </div>
        <img src="../../../public/profil.jpg" alt="foto profil" class="w-16 h-16 bg-gray-500 rounded-full" />
      </div>
    </div>
    <div class="bg-white rounded-t-xl p-3">
      <div class="border-b-2 border-solid border-gray-300 py-5">
        <h2 class="pb-5">Grafik</h2>
        <Chart />
      </div>
      <div class="border-b-2 border-solid border-gray-300 flex gap-6 py-5">
        <div class="bg-gray-200 flex-grow rounded-lg p-3">
          <h3 class="font-bold">Pemasukan</h3>
          <p class="text-red-600 font-bold">Rp 400.000</p>
        </div>
        <div class="bg-gray-200 flex-grow rounded-lg p-3">
          <h3 class="font-bold">Pengeluaran</h3>
          <p class="text-green-600 font-bold">Rp 40.000</p>
        </div>
      </div>
      <div class="pt-5">
        <h3 class="font-bold">Produk Yang Sering Dibeli</h3>
        <div class="list-card mt-3 flex flex-col gap-3">
          <Card title="Minyak Botol Bimoli - 2L" :price="20000" :isAdd="false" />
          <Card title="Minyak Botol Bimoli - 2L" :price="20000" :isAdd="false" />
          <Card title="Minyak Botol Bimoli - 2L" :price="20000" :isAdd="false" />
          <Card title="Minyak Botol Bimoli - 2L" :price="20000" :isAdd="false" />
          <Card title="Minyak Botol Bimoli - 2L" :price="20000" :isAdd="false" />
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import Chart from "../../components/chart.vue";
import Card from "../../components/card.vue";
</script>
