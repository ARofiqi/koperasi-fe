<template>
  <div v-if="product">
    <div class="bg-gray-400 p-3 rounded-b-xl shadow-lg">
      <Back class="text-white" />
      <img :src="'/foto produk/' + this.product.name + '.png'" alt="foto produk" @error="handleImageError" class="w-2/3 mx-auto" />
    </div>
    <div class="px-3 py-5">
      <h2 class="font-semibold text-xl">{{ this.product.name }}</h2>
      <div class="border-b-2 border-solid border-gray-400 flex items-start justify-between pb-3">
        <div class="py-2 flex items-center">
          <button class="text-3xl text-primary focus:bg-none flex items-center" @click="if (quantity > 0) quantity--;"><font-awesome-icon :icon="['fas', 'minus']" class="w-4 h-4" /></button>
          <input class="w-12 text-center text-xl border-2 border-solid border-gray-500 mx-2 p-1 items-center rounded-lg" type="number" v-model="quantity" />
          <button class="text-3xl text-primary flex items-center" @click="quantity++"><font-awesome-icon :icon="['fas', 'plus']" class="w-4 h-4" /></button>
        </div>
        <div class="text-right">
          <p class="text-3xl font-semibold">{{ formatRupiah(this.product.price) }}</p>
          <p v-if="quantity > 1">{{ formatRupiah(this.product.price) }} x {{ this.quantity }}= {{ formatRupiah(this.quantity * this.product.price) }}</p>
        </div>
      </div>
      <div class="border-b-2 border-solid border-gray-400 pb-3">
        <h3 class="font-semibold py-3 text-lg">Product Detail</h3>
        <p v-text="this.product.detail"></p>
      </div>
      <div class="flex items-center justify-between">
        <h3 class="font-semibold py-3 text-lg">Review</h3>
        <Review :rating="this.product.rating" />
      </div>
      <button @click="orderProduct" class="bg-primary text-white flex items-center gap-5 justify-center w-full p-3 rounded-lg">
        <font-awesome-icon :icon="['fas', 'plus']" />
        <h3 class="font-semibold text-xl">Masukan Keranjang</h3>
      </button>
    </div>
  </div>
</template>

<script>
import Review from "@/components/review.vue";
import products from "@/assets/dataProduct.json";
import Back from "@/components/back.vue";
import Swal from "sweetalert2";
// import axios from "@/axios";
export default {
  name: "ProductPage",
  data() {
    return {
      product: null,
      quantity: 1,
      totalHarga: 0,
      order: null,
      isOrder: false,
    };
  },
  components: {
    Review,
    Back,
  },
  methods: {
    fetchProductDetails() {
      const productId = this.$route.params.id;
      const data = products.reduce((accumulator, currentValue) => {
        accumulator[currentValue.id] = currentValue;
        return accumulator;
      }, {});
      this.product = data[productId];
    },
    orderProduct() {
      try {
        const data = {
          id: this.product.id,
          name: this.product.name,
          price: this.product.price,
          quantity: this.quantity,
          totalHarga: this.product.price * this.quantity,
        };
        this.order = data;
        console.log(this.order);
        Swal.fire({
          icon: "success",
          title: "Produk berhasil ditambahkan ke keranjang",
          timer: 1500,
        });
      } catch (error) {
        Swal.fire({
          icon: "error",
          title: "Produk Gagal ditambahkan ke keranjang",
          timer: 1500,
        });
        console.log(error);
      }
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
  },
  mounted() {
    this.fetchProductDetails();
    // axios
    //   .get("/endpoint")
    //   .then((response) => {
    //     this.data = response;
    //   })
    //   .catch((error) => {
    //     console.error("Error fetching data:", error);
    //   });
  },
};
</script>
