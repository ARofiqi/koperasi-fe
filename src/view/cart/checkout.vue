<template>
  <div class="px-5 py-3 bg-primary shadow-lg flex items-center gap-5">
    <Back class="text-white" />
    <div class="text-center text-white text-xl font-light">Halaman Checkout</div>
  </div>
</template>

<script>
import Back from "@/components/back.vue";
export default {
  name: "checkoutPage",
  components: {
    Back,
  },
  methods: {},
};
</script>
