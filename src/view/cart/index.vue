<template>
  <div class="p-3 pb-5 bg-primary rounded-b-xl shadow-lg">
    <Back class="text-white"/>
    <h2 class="text-center text-white text-2xl font-light">Halaman Cart</h2>
  </div>
  <div class="p-3">
    <div class="list-card mt-3 flex flex-col gap-3">
      <CardProductCart v-for="item in this.data" :key="item.id" :id="item.id" :name="item.name" :price="item.price" :quantity="item.quantity" />
      <p>hai</p>
    </div>
  </div>
</template>

<script>
// import dataCart from "@/assets/dataCart.json";
import CardProductCart from "@/components/cardProductCart.vue";
import Back from "@/components/back.vue";
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
      ],
    };
  },
  components: {
    CardProductCart,
    Back
  },
};
</script>
