<template>
  <svg class="fixed -z-40" width="304" height="440" viewBox="0 0 354 440" fill="none" xmlns="http://www.w3.org/2000/svg">
    <g filter="url(#filter0_d_100_61)">
      <ellipse cx="11.5" cy="136" rx="338.5" ry="296" class="fill-primary" />
    </g>
  </svg>
  <svg class="fixed right-0 bottom-0 -z-40" width="249" height="285" viewBox="0 0 249 285" fill="none" xmlns="http://www.w3.org/2000/svg">
    <g filter="url(#filter0_d_100_79)">
      <ellipse cx="331" cy="277" rx="327" ry="277" class="fill-primary" />
    </g>
  </svg>
  <div class="flex justify-between p-3 items-center">
    <h1 class="text-4xl font-semibold text-white">Forum<br />Bahagia</h1>
    <font-awesome-icon class="w-6 h-6 text-black" :icon="['fas', 'magnifying-glass']" />
  </div>
  <div class="flex flex-col gap-3 p-3 rounded-md">
    <CardForum v-for="(item, index) in data" :key="index" :name="item.name" :email="item.email" :description="item.description" />
  </div>
</template>

<script>
import CardForum from "@/components/cardForum.vue";
import dataForum from "@/assets/dataForum.json";
export default {
  data() {
    return {
      data: dataForum,
    };
  },
  components: {
    CardForum,
  },
};
</script>
