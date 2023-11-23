<template>
  <div class="bg-gray-400 p-3 rounded-b-xl shadow-lg">
    <router-link :to="{ name: 'homepage' }">
      <font-awesome-icon :icon="['fas', 'arrow-left']" class="text-white" />
    </router-link>
    <img src="../../../public/foto produk/minyak.png" alt="foto produk" class="w-2/3 mx-auto" />
  </div>
  <div class="px-3 py-5">
    <h2 class="font-semibold text-xl">Minyak Goreng Bimoli - 2L</h2>
    <div class="border-b-2 border-solid border-gray-400 flex items-center justify-between pb-3">
      <div class="py-2">
        <button class="text-3xl px-2 text-primary">-</button>
        <span class="text-2xl border-2 border-solid border-gray-500 px-2 pb-1 rounded-lg">1</span>
        <button class="text-3xl px-2 text-primary">+</button>
      </div>
      <p class="text-3xl font-semibold">Rp 25.000</p>
    </div>
    <div class="border-b-2 border-solid border-gray-400 pb-3">
      <h3 class="font-semibold py-3 text-lg">Product Detail</h3>
      <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Maiores sequi neque perferendis perspiciatis ab ipsam quae dolore labore sit doloremque nihil aliquam mollitia esse, est, nesciunt, sed id. Reiciendis, aliquam.</p>
    </div>
    <div class="flex items-center justify-between">
      <h3 class="font-semibold py-3 text-lg">Review</h3>
      <Review />
    </div>
  </div>
</template>

<script setup>
import Review from "../../components/review.vue";
</script>
