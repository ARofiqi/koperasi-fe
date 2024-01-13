<template>
  <div class="p-3 py-8 bg-primary rounded-b-xl shadow-lg">
    <h2 class="text-center text-white text-2xl font-light">Halaman Pesanan</h2>
  </div>
  <div class="p-3 pb-20">
    <div class="list-card mt-3 flex flex-col gap-2">
      <div v-for="item in data" :key="item.id" class="bg-white shadow-xl flex">
        <div class="w-2/5 p-3 grid items-center">
          <img :src="'/foto produk/' + item.name + '.png'" alt="foto produk" />
        </div>
        <div class="w-2/5 py-2 flex flex-col justify-between">
          <h2 class="text-lg font-semibold">{{ item.name }}</h2>
          <div class="flex py-2 items-start flex-col">
            <div>
              <p class="text-gray-600 text-sm">{{ formatRupiah(item.price) }}</p>
              <p class="text-gray-600 text-sm">Total = {{ formatRupiah(item.price * item.quantity) }}</p>
            </div>
            <div class="flex items-center gap-2">
              <button class="text-3xl text-primary focus:bg-none flex items-center" @click="if (item.quantity > 0) item.quantity--;"><font-awesome-icon :icon="['fas', 'minus']" class="w-4 h-4" /></button>
              <input type="number" :value="item.quantity" class="text-gray-600 font-medium w-10 border-2 border-gray border-solid text-center" />
              <button class="text-3xl text-primary flex items-center" @click="item.quantity++"><font-awesome-icon :icon="['fas', 'plus']" class="w-4 h-4" /></button>
            </div>
          </div>
        </div>
        <div class="w-1/5 grid justify-center items-center">
          <button class="bg-red-600 text-white p-2 rounded-lg" @click="this.delete(item.id)"><font-awesome-icon class="w-5 h-5 text-white" :icon="['fas', 'trash-can']" /></button>
        </div>
      </div>
    </div>
  </div>
  <div class="fixed z-40 bottom-16 bg-primary w-full h-20 rounded-t-xl flex justify-between">
    <div class="p-3 flex items-center">
      <p class="text-white">Total = {{ formatRupiah(totalPrice) }}</p>
    </div>
    <Button class="bg-red-600 text-white border-none flex items-center px-2"> Check Out </Button>
  </div>
</template>

<script>
import dataCart from "@/assets/dataCart.json";
import CardProductCart from "@/components/cardProductCart.vue";
import Back from "@/components/back.vue";
import Swal from "sweetalert2";

export default {
  name: "cartPage",
  data() {
    return {
      data: dataCart,
    };
  },
  components: {
    CardProductCart,
    Back,
  },
  computed: {
    totalPrice() {
      return this.data.reduce((total, product) => total + product.price * product.quantity, 0);
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
        title: "Are you sure?",
        text: "You won't be able to revert this!",
        icon: "warning",
        showCancelButton: true,
        confirmButtonColor: "#3085d6",
        cancelButtonColor: "#d33",
        confirmButtonText: "Yes, delete it!",
      }).then((result) => {
        if (result.isConfirmed) {
          this.data = this.data.filter((item) => item.id !== id);
          Swal.fire({
            title: "Deleted!",
            text: "Your Product has been deleted.",
            icon: "success",
          });
        }
      });
    },
  },
};
</script>
