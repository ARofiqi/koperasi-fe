<template>
  <div class="bg-gray-400 p-3 rounded-b-xl shadow-lg">
    <router-link :to="{ name: 'homepage' }">
      <font-awesome-icon :icon="['fas', 'arrow-left']" class="text-white" />
    </router-link>
    <img :src="'../../assets/foto produk/' + product.name + '.png'" alt="foto produk" class="w-2/3 mx-auto" />
  </div>
  <div class="px-3 py-5">
    <h2 class="font-semibold text-xl">{{ product.name }}</h2>
    <div class="border-b-2 border-solid border-gray-400 flex items-center justify-between pb-3">
      <div class="py-2">
        <button class="text-3xl px-2 text-primary">-</button>
        <span class="text-2xl border-2 border-solid border-gray-500 px-2 pb-1 rounded-lg">1</span>
        <button class="text-3xl px-2 text-primary">+</button>
      </div>
      <p class="text-3xl font-semibold">Rp {{ product.price }}</p>
    </div>
    <div class="border-b-2 border-solid border-gray-400 pb-3">
      <h3 class="font-semibold py-3 text-lg">Product Detail</h3>
      <p>{{ product.detail }}</p>
    </div>
    <div class="flex items-center justify-between">
      <h3 class="font-semibold py-3 text-lg">Review</h3>
      <Review :rating="product.rating" />
    </div>
    <div class="bg-primary text-white flex items-center gap-5 justify-center p-3 rounded-lg">
      <font-awesome-icon :icon="['fas', 'plus']" />
      <h3 class="font-semibold text-xl">Masukan Keranjang</h3>
    </div>
  </div>
</template>

<script>
import Review from "../../components/review.vue";
import products from "../../assets/dataProduct.json";
export default {
  name: "ProductPage",
  data() {
    return {
      product: products[0]
    };
  },
  components: {
    Review,
  },
};
</script>
