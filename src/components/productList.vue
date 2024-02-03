<template>
  <div class="list-card mt-3 flex flex-col gap-3">
    <Card v-for="data in this.dataList" :key="data.id" :id="data.id" :name="data.name" :price="data.price" :category="data.category" />
    <div v-if="this.dataList.length == 0" class="text-center p-5">
      <p class="text-xl">Barang yang anda cari</p>
      <p class="text-lg">Tidak Ditemukan</p>
    </div>
  </div>
</template>

<script>
import Card from "./card.vue";
import Loading from "./loading.vue";

export default {
  name: "ProductList",
  data() {
    return {
      isLoading: false,
    };
  },
  props: {
    dataList: Array,
  },
  components: {
    Card,
    Loading,
  },
  methods: {
    fetchData() {
      this.isLoading = true;
      setTimeout(() => {
        this.isLoading = false;
      }, 2000);
    },
  },
  created() {
    this.fetchData();
  },
};
</script>
