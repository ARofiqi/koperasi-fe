<template>
  <div class="flex items-start gap-3 border-b-2 border-gray-200 pb-3 w-full">
    <img :src="this.fotoProfil" alt="profil" class="w-10 h-10 rounded-full shadow-xl" />
    <div>
      <div class="flex justify-between w-full">
        <div>
          <h2 class="text-sm font-bold">{{ this.name }}</h2>
          <p class="text-xs text-gray-400">{{ this.email }}</p>
        </div>
        <p class="text-xs text-gray-500">{{ this.time }}</p>
      </div>
      <p class="text-sm">{{ this.description }}</p>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    name: {
      type: String,
      default: "unknows",
    },
    fotoProfil: {
      type: String,
      default: "/profil.jpg",
    },
    email: {
      type: String,
      default: "unknows@gmail.com",
    },
    time: {
      type: String,
      default: "0 mnt",
    },
    description: {
      type: String,
      default: "unknows",
    },
  },
};
</script>
