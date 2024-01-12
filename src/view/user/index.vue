<template>
  <NavBar />
  <div class="container">
    <router-view></router-view>
  </div>
</template>

<script setup>
import NavBar from "@/components/navBar.vue";
</script>

<style scoped>
.container {
  padding-bottom: 70px;
}
</style>
