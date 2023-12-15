<template>
  <nav class="z-50">
    <router-link :to="{ name: 'homepage' }" :class="{ active: $route.path === '/' }" class="flex flex-col grow text-center p-3">
      <font-awesome-icon :icon="['fas', 'house']" />
      Home
    </router-link>
    <router-link :to="{ name: 'cart' }" :class="{ active: isActive('/cart') }" class="flex flex-col grow text-center p-3">
      <font-awesome-icon :icon="['far', 'note-sticky']" />
      Pesanan
    </router-link>
    <router-link :to="{ name: 'forum' }" :class="{ active: isActive('/forum') }" class="flex flex-col grow text-center p-3">
      <font-awesome-icon :icon="['fas', 'bell']" />
      Forum
    </router-link>
    <router-link :to="{ name: 'profil', params: { id: '1' } }" :class="{ active: isActive('/profil') }" class="flex flex-col grow text-center p-3">
      <font-awesome-icon :icon="['fas', 'user']" />
      Profil
    </router-link>
  </nav>
</template>

<script>
export default {
  methods: {
    isActive(path) {
      return this.$route.path.startsWith(path);
    },
  },
};
</script>

<style scoped>
nav {
  background: #fff;

  display: flex;

  box-shadow: 0 -4px 5px rgb(216, 216, 216);
  border-top-left-radius: 10px;
  border-top-right-radius: 10px;

  position: fixed;
  bottom: 0;
  right: 0;
  left: 0;
}
.active {
  color: #2cb4f2;
}
</style>
