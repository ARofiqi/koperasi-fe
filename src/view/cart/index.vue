<template>
  <div class="p-3 py-8 bg-primary rounded-b-xl shadow-lg">
    <h2 class="text-center text-white text-2xl font-light">Pesanan</h2>
  </div>
  <div class="p-3 pb-20">
    <div v-if="data" class="list-card mt-3 flex flex-col gap-2">
      <div v-for="item in data" :key="item.id" class="bg-white shadow-xl flex rounded-lg">
        <div class="w-2/5 p-3 grid items-center">
          <img :src="'/foto produk/' + item.name + '.png'" alt="foto produk" />
        </div>
        <div class="w-2/5 py-2 flex flex-col justify-between">
          <h2 class="text-lg font-semibold">{{ item.name }}</h2>
          <div class="flex py-2 items-start flex-col">
            <div>
              <p class="text-gray-600 text-sm">{{ formatRupiah(item.price) }}</p>
              <p class="text-gray-600 text-sm">Total = {{ formatRupiah(item.price * item.quantity) }}</p>
              <!-- <p class="text-gray-600 text-sm">Total = {{ formatRupiah(item.totalHarga) }}</p> -->
            </div>
            <div class="flex items-center gap-2">
              <button class="text-3xl text-primary focus:bg-none flex items-center" @click="if (item.quantity > 0) item.quantity--;"><font-awesome-icon :icon="['fas', 'minus']" class="w-4 h-4" /></button>
              <input type="number" :value="item.quantity" class="text-gray-600 bg-inherit font-medium w-16 text-center" />
              <button class="text-3xl text-primary flex items-center" @click="item.quantity++"><font-awesome-icon :icon="['fas', 'plus']" class="w-4 h-4" /></button>
            </div>
          </div>
        </div>
        <div class="w-1/5 grid justify-center items-center">
          <button class="bg-red-600 text-white p-2 rounded-lg" @click="this.delete(item.id)"><font-awesome-icon class="w-5 h-5 text-white" :icon="['fas', 'trash-can']" /></button>
        </div>
      </div>
    </div>
    <div v-if="data.length === 0">
      <div class="h-24 flex items-center justify-center">
        <p class="text-gray-600 font-semibold">Kamu Belum Melakukan Pemesanan</p>
      </div>
    </div>
  </div>
  <div class="fixed z-40 bottom-16 bg-primary w-full h-20 rounded-t-xl flex justify-between overflow-hidden">
    <div class="p-3 flex items-center">
      <p class="text-white">Total = {{ formatRupiah(totalPrice) }}</p>
    </div>
    <button class="bg-red-600 text-white border-none flex items-center px-2">
      <router-link :to="{ name: 'checkout' }">Check Out</router-link>
    </button>
  </div>
</template>

<script>
import CardProductCart from "@/components/cardProductCart.vue";
import Back from "@/components/back.vue";
import Swal from "sweetalert2";
import axiosInstance from "@/axios.js";

export default {
  name: "cartPage",
  data() {
    return {
      data: [],
    };
  },
  components: {
    CardProductCart,
    Back,
  },
  computed: {
    totalPrice() {
      return this.data.reduce((total, product) => total + product.totalHarga, 0);
    },
  },
  methods: {
    formatRupiah(num) {
      const formatter = new Intl.NumberFormat("id-ID", {
        style: "currency",
        currency: "IDR",
      });

      return formatter.format(num);
    },
    delete(id) {
      Swal.fire({
        title: "Apakah Anda Yakin?",
        text: "Anda tidak akan dapat mengembalikannya!",
        icon: "warning",
        showCancelButton: true,
        confirmButtonColor: "#3085d6",
        cancelButtonColor: "#d33",
        confirmButtonText: "Yah, saya yakin!",
        cancelButtonText: "Tidak!",
      }).then((result) => {
        if (result.isConfirmed) {
          axiosInstance
            .delete(`/api/cart/${id}`)
            .then((result) => {
              this.fetch();
              Swal.fire({
                title: "Deleted!",
                text: "Produk Berhasil Dihapus dari pesanan.",
                icon: "success",
              });
            })
            .catch((err) => {
              this.fetch();
              Swal.fire({
                title: "Cenceled!",
                text: "Produk Gagal Dihapus dari pesanan.",
                icon: "failed",
              });
            });
        }
      });
    },
    fetch() {
      const token = localStorage.getItem("token");
      axiosInstance
        .get("/api/cart", {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        })
        .then((result) => {
          this.data = result.data;
        })
        .catch(() => {});
    },
  },
  mounted() {
    this.fetch();
  },
};
</script>
