<template>
  <div>
    <Navbar />
    <div class="ml-64 p-10">
      <router-view name="main"></router-view>
    </div>
  </div>
</template>

<script>
import Navbar from "@/components/admin/navbar.vue";
export default {
  components: {
    Navbar,
  },
};
</script>
