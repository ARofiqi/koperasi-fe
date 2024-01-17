<template>
  <div class="relative overflow-x-auto">
    <table class="w-full text-sm text-left rtl:text-right border-2 border-gray-100 border-solid text-gray-500 dark:text-gray-400">
      <thead class="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
        <tr>
          <th scope="col" class="px-6 py-3">Id</th>
          <th scope="col" class="px-6 py-3">tanggal</th>
          <th scope="col" class="px-6 py-3">pelanggan</th>
          <th scope="col" class="px-6 py-3">barang</th>
        </tr>
      </thead>
      <tbody>
        <tr v-for="item in data" :key="item" class="bg-white border-b dark:bg-gray-800 dark:border-gray-700">
          <th scope="row" class="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white">{{ item.id }}</th>
          <td class="px-6 py-4">{{ item.tanggal }}</td>
          <td class="px-6 py-4">{{ item.pelanggan.nama }}</td>
          <td class="px-6 py-2">
            <table class="w-full text-sm text-left rtl:text-right border-2 border-gray-100 border-solid text-gray-500 dark:text-gray-400">
              <thead class="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
                <tr>
                  <th scope="col" class="px-6 py-3">Id</th>
                  <th scope="col" class="px-6 py-3">Nama</th>
                  <th scope="col" class="px-6 py-3">harga</th>
                  <th scope="col" class="px-6 py-3">jumlah</th>
                </tr>
              </thead>
              <tbody>
                <tr v-for="item in item.barang" :key="item" class="bg-white border-b dark:bg-gray-800 dark:border-gray-700">
                  <th scope="row" class="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white">{{ item.id }}</th>
                  <td class="px-6 py-4">{{ item.nama }}</td>
                  <td class="px-6 py-4">{{ item.harga }}</td>
                  <td class="px-6 py-4">{{ item.jumlah }}</td>
                </tr>
              </tbody>
            </table>
          </td>
        </tr>
      </tbody>
    </table>
  </div>
</template>

<script>
import dataTransaksi from "@/assets/dataTransaksi.json";

export default {
  data() {
    return {
      data: dataTransaksi,
    };
  },
  components: {},
};
</script>
