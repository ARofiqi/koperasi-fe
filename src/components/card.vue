<template>
  <router-link :to="{ name: 'product', params: { id: this.id } }">
    <div id="card">
      <div class="h-auto w-2/5 p-5">
        <img :src="'/foto produk/' + name + '.png'" alt="foto produk" class="" />
      </div>
      <div class="w-3/5 py-2 px-3 flex flex-col justify-between gap-2">
        <h2 class="text-lg font-semibold">{{ this.name }}</h2>
        <div class="flex justify-between py-2 items-center">
          <p class="text-gray-600 font-medium">Rp.{{ this.price }}</p>
          <div>
            <font-awesome-icon :icon="['fas', 'cart-shopping']" class="w-5 h-5 inline-block bg-green-500 text-white text-xl p-3" @click="addToCart" />
          </div>
        </div>
      </div>
    </div>
  </router-link>
</template>

<script>
import Swal from "sweetalert2";

export default {
  name: "Card",
  props: {
    id: String,
    name: String,
    price: Number,
  },  
  methods: {
    addToCart: () => {
      Swal.fire("SweetAlert2 is working!");
    },
  },
};
</script>

<style scoped>
#card {
  background: white;
  box-shadow: 0 0 5px rgb(209, 209, 209);
  border: 1px rgb(209, 209, 209) solid;
  border-radius: 10px;

  display: flex;
  overflow: hidden;
}
</style>
