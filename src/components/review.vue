<template>
  <div class="flex items-center">
    <font-awesome-icon v-for="s in rating" :key="s" :icon="['fas', 'star']" class="text-yellow-400" />
    <font-awesome-icon v-for="w in 5 - rating" :key="w" :icon="['fas', 'star']" class="text-gray-300" />
    <p class="pl-2 font-semibold">{{ this.rating }}/{{ this.maxReview }}</p>
  </div>
</template>

<script>
export default {
  name: "Review",
  data() {
    return {
      maxReview: 5,
    };
  },
  props: {
    rating: Number,
  },
};
</script>
