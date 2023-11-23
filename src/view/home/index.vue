<template>
  <div class="bg-primary absolute w-full h-20 rounded-b-2xl -z-50"></div>
  <div class="px-4 py-3">
    <div class="flex gap-5 justify-between pb-4">
      <router-link :to="{ name: 'profil' }"><img src="profil.jpg" alt="foto profil" class="w-6 h-6 bg-gray-400 rounded-full" /></router-link>
      <div class="flex gap-5">
        <router-link :to="{ name: 'setting' }">
          <font-awesome-icon class="w-6 h-6" :icon="['fas', 'gear']" style="color: #ffffff" />
        </router-link>
        <font-awesome-icon class="w-6 h-6" :icon="['fas', 'cart-shopping']" style="color: #ffffff" />
      </div>
    </div>
    <div class="flex gap-2 m-auto">
      <div class="border-2 border-solid border-gray-300 rounded-md w-5/6 bg-white">
        <font-awesome-icon :icon="['fas', 'magnifying-glass']" class="w-1/6 text-gray-400" />
        <input type="text" id="search" class="w-5/6 p-2 bg-inherit focus:outline-none" placeholder="search..." />
      </div>
      <button class="w-1/6 border-2 border-solid border-gray-300 rounded-md bg-white">
        <font-awesome-icon :icon="['fas', 'filter']" class="text-gray-400" />
      </button>
    </div>
    <div>
      <div class="flex justify-between mt-3">
        <p id="category">Sembako</p>
        <p id="seeAll">Lihat Semua</p>
      </div>
      <div class="list-card mt-3 flex flex-col gap-3">
        <Card v-for="data in dataProduct" :key="data" :name="data.name" :price="data.price" />
      </div>
    </div>
  </div>
</template>

<script setup>
import Card from "../../components/card.vue";
import dataProduct from "../../assets/dataProduct.json";
</script>
