<template>
  <div class="list-card mt-3 flex flex-col gap-3">
    <Card v-for="data in this.dataList" :key="data.id" :id="data.id" :name="data.name" :price="data.price" />
  </div>
</template>

<script>
import Card from "./card.vue";
export default {
  name: "ProductList",
  props: {
    dataList: Array,
  },
  components: {
    Card,
  },
};
</script>
