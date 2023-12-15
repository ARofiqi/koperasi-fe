<template>
  <router-link :to="{ name: 'detailForum', params: { id: id } }">
    <div class="p-3 flex gap-4 items-center shadow-xl border-gray-100 border-2 bg-white">
      <img src="/profil.jpg" alt="profil" class="w-12 h-12 rounded-full" />
      <div>
        <h1 class="text-xl font-semibold">{{ this.name }}</h1>
        <p class="text-xs mb-2 text-gray-500">{{ this.email }}</p>
        <p class="text-sm">{{ this.description }}</p>
      </div>
    </div>
  </router-link>
</template>

<script>
export default {
  props: {
    id: String,
    name: String,
    email: String,
    description: String,
  },
};
</script>
