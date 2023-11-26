<template>
  <nav>
    <router-link :to="{ name: 'homepage' }" class="flex flex-col grow text-center p-3">
      <font-awesome-icon :icon="['fas', 'house']" />
      Home
    </router-link>
    <router-link :to="{ name: 'pesanan' }" class="flex flex-col grow text-center p-3">
      <font-awesome-icon :icon="['far', 'note-sticky']" />
      Pesanan
    </router-link>
    <router-link :to="{ name: 'notification' }" class="flex flex-col grow text-center p-3">
      <font-awesome-icon :icon="['fas', 'bell']" />
      Notification
    </router-link>
    <router-link :to="{ name: 'profil', params: { id: '1' } }" class="flex flex-col grow text-center p-3">
      <font-awesome-icon :icon="['fas', 'user']" />
      Profil
    </router-link>
  </nav>
</template>

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
</style>
