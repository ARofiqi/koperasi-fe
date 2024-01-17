<template>
  <div class="relative overflow-x-auto">
    <table class="w-full text-sm text-left rtl:text-right  border-2 border-gray-100 border-solid text-gray-500 dark:text-gray-400">
      <thead class="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
        <tr>
          <th scope="col" class="px-6 py-3">Id</th>
          <th scope="col" class="px-6 py-3">Nama</th>
          <th scope="col" class="px-6 py-3">Email</th>
          <th scope="col" class="px-6 py-3">No Telephone</th>
        </tr>
      </thead>
      <tbody>
        <tr v-for="item in data" :key="item" class="odd:bg-white even:bg-gray-50 bg-white border-b dark:bg-gray-800 dark:border-gray-700">
          <th scope="row" class="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white">{{ item.id }}</th>
          <td class="px-6 py-4">{{ item.name }}</td>
          <td class="px-6 py-4">{{ item.email }}</td>
          <td class="px-6 py-4">{{ item.noTelephone }}</td>
        </tr>
      </tbody>
    </table>
  </div>
</template>

<script>
import dataUser from "@/assets/dataUser.json";

export default {
  data() {
    return {
      data: dataUser,
    };
  },
  components: {},
};
</script>
