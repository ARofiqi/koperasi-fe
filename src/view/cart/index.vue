<template>
  <div class="p-3 pb-5 bg-primary rounded-b-xl shadow-lg">
    <router-link :to="{ name: 'homepage' }">
      <font-awesome-icon :icon="['fas', 'arrow-left']" class="text-white" />
    </router-link>
    <h2 class="text-center text-white text-2xl font-light">Halaman Cart</h2>
  </div>
  <div class="p-3">
    <ProductList :dataList="data" />
  </div>
</template>

<script>
import dataCart from "@/assets/dataCart.json";
import ProductList from "@/components/productList.vue";
export default {
  name: "cartPage",
  data() {
    return {
      data: dataCart,
    };
  },
  components: {
    ProductList,
  },
};
</script>
