<template>
  <div class="p-3 pb-5 bg-primary rounded-b-xl shadow-lg">
    <Back class="text-white" />
    <h2 class="text-center text-white text-2xl font-light">Halaman Cart</h2>
  </div>
  <div class="p-3 pb-20">
    <div class="list-card mt-3 flex flex-col gap-3">
      <div v-for="item in data" :key="item.id" class="bg-white shadow-xl flex">
        <div class="w-2/5 p-5 grid items-center">
          <img :src="'/foto produk/' + item.name + '.png'" alt="foto produk" />
        </div>
        <div class="w-2/5 py-2 flex flex-col justify-between">
          <h2 class="text-lg font-semibold">{{ item.name }}</h2>
          <div class="flex py-2 items-start flex-col">
            <div>
              <p class="text-gray-600">Rp.{{ item.price }}</p>
              <p class="text-gray-600">Total = Rp.{{ item.price * item.quantity }}</p>
            </div>
            <div class="flex items-center gap-2">
              <button class="text-3xl text-primary focus:bg-none flex items-center" @click="if (item.quantity > 0) item.quantity--;"><font-awesome-icon :icon="['fas', 'minus']" class="w-4 h-4" /></button>
              <input type="number" :value="item.quantity" class="text-gray-600 font-medium w-10 border-2 border-gray border-solid text-center" />
              <button class="text-3xl text-primary flex items-center" @click="item.quantity++"><font-awesome-icon :icon="['fas', 'plus']" class="w-4 h-4" /></button>
            </div>
          </div>
        </div>
        <div class="w-1/5 grid justify-center gap-2 items-center">
          <button class="bg-red-600 text-white p-2 rounded-lg" @click="this.delete(item.id)"><font-awesome-icon class="w-5 h-5 text-white" :icon="['fas', 'trash-can']" /></button>
        </div>
      </div>
    </div>
  </div>
  <div class="fixed z-40 bottom-16 bg-primary w-full h-20 rounded-t-xl flex justify-between">
    <div class="p-3 flex items-center">
      <p class="text-white">Total = Rp.{{ totalPrice }}</p>
    </div>
    <Button class="bg-red-600 text-white border-none flex items-center px-2"> Check Out </Button>
  </div>
</template>

<script>
// import dataCart from "@/assets/dataCart.json";
import CardProductCart from "@/components/cardProductCart.vue";
import Back from "@/components/back.vue";
import Swal from "sweetalert2";

export default {
  name: "cartPage",
  data() {
    return {
      data: [
        {
          id: "1",
          name: "Minyak botol bimoli - 2L",
          price: 25000,
          quantity: 20,
        },
        {
          id: "2",
          name: "Telur Ayam Negeri",
          price: 5500,
          quantity: 15,
        },
        {
          id: "3",
          name: "Indomie Goreng",
          price: 4000,
          quantity: 30,
        },
        {
          id: "4",
          name: "Minyak botol bimoli - 2L",
          price: 25000,
          quantity: 20,
        },
        {
          id: "5",
          name: "Telur Ayam Negeri",
          price: 5500,
          quantity: 15,
        },
        {
          id: "6",
          name: "Indomie Goreng",
          price: 4000,
          quantity: 30,
        },
      ],
    };
  },
  components: {
    CardProductCart,
    Back,
  },
  computed: {
    totalPrice() {
      return this.data.reduce((total, product) => total + product.price, 0);
    },
  },
  methods: {
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
            text: "Your file has been deleted.",
            icon: "success",
          });
        }
      });
    },
  },
};
</script>
