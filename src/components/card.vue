<template>
  <router-link :to="{ name: 'product', params: { id: this.id } }">
    <div id="card">
      <img :src="'/foto produk/' + name + '.png'" alt="foto produk" class="h-auto w-2/5 p-5" />
      <div class="w-3/5 py-2 px-3 flex flex-col justify-between">
        <h2 class="text-lg font-semibold">{{ this.name }}</h2>
        <div class="flex justify-between py-2">
          <p class="text-gray-600 font-medium">Rp.{{ this.price }}</p>
          <!-- <div class="px-2 py-1 bg-green-700 text-white" v-if="this.isAdd">+</div> -->
        </div>
      </div>
    </div>
  </router-link>
</template>

<script>
export default {
  name: "Card",
  props: {
    id: String,
    name: String,
    price: Number,
    // isAdd: {
    //   type: Boolean,
    //   default: true,
    // },
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
