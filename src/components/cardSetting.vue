<template>
  <div class="flex justify-between items-center py-4 px-2">
    <div class="flex items-center gap-5">
      <font-awesome-icon :icon="this.icon" class="w-5 h-5" />
      <p class="font-semibold text-xl" v-text="this.title"></p>
    </div>
    <font-awesome-icon :icon="['fas', 'arrow-right']" />
  </div>
</template>

<script>
export default {
  name: "cardSetting",
  props: {
    icon: Array,
    title: String,
  },
};
</script>
