<template>
  <router-view name="navbar"></router-view>
  <div class="contain">
    <router-view name="main"></router-view>
  </div>
</template>

<script setup>
</script>

<style scoped>
.contain {
  padding-bottom: 70px;
}
</style>
