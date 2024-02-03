<template>
  <div id="card">
    <div class="h-auto w-2/5 p-5 relative flex justify-center items-center" @click="goToProductDetail">
      <img :src="'/foto produk/' + name + '.png'" alt="foto produk" class="absolute" @error="handleImageError" />
    </div>
    <div class="w-3/5 py-2 px-3 flex flex-col justify-between gap-2">
      <h2 class="text-lg font-semibold" @click="goToProductDetail">{{ this.name }}</h2>
      <p class="text-gray-500 font-medium">{{ this.category }}</p>
      <div class="flex justify-between py-1 items-center">
        <p class="text-gray-600 font-medium">{{ formatRupiah(this.price) }}</p>
        <div>
          <font-awesome-icon :icon="['fas', 'cart-shopping']" class="w-5 h-5 inline-block bg-green-500 text-white text-xl p-2" @click="addToCart" />
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import Swal from "sweetalert2";

export default {
  name: "Card",
  props: {
    id: {
      type: Number,
    },
    name: {
      type: String,
      default: "unknow",
    },
    price: {
      type: Number,
      default: 0,
    },
    category: {
      type: String,
      default: "Unknows"
    }
  },
  methods: {
    addToCart: () => {
      Swal.fire("Product berhasil ditambahkan ke keranjang");
    },
    handleImageError(event) {
      event.target.src = "/foto produk/unknow.png";
    },
    formatRupiah(num) {
      const formatter = new Intl.NumberFormat("id-ID", {
        style: "currency",
        currency: "IDR",
      });

      return formatter.format(num);
    },
    goToProductDetail() {
      this.$router.push({ name: "product", params: { id: this.id } });
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

.border {
  border: black 1px solid;
}
</style>
