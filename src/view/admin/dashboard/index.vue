<template>
  <div>
    <Navbar />
    <div class="ml-64 p-10">
      <Menu />
      <router-view name="main"></router-view>
    </div>
  </div>
</template>

<script>
import Navbar from "@/components/admin/navbar.vue";
import Menu from "@/components/admin/menu.vue";
export default {
  components: {
    Navbar,
    Menu,
  },
};
</script>
