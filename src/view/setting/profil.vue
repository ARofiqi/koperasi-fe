<template>
  <div class="bg-primary p-3 text-white rounded-b-xl">
    <Back />
    <div class="text-center py-3">
      <h1 class="font-semibold text-2xl">Account</h1>
    </div>
  </div>
  <div class="flex flex-col items-center py-10 gap-2">
    <div class="relative inline-block rounded-full w-40 h-40 p-2 border-2 border-primary bg-white">
      <div class="rounded-full">
        <img :src="imageUrl" alt="profil" class="rounded-full" />
      </div>
      <label class="absolute bg-primary text-white right-2 bottom-1 px-2 py-1 rounded-full">
        <font-awesome-icon :icon="['fas', 'camera']" />
        <input type="file" @change="handleFileChange" class="hidden" />
      </label>
    </div>
    <div class="text-center">
      <h2 class="font-bold text-xl">Ahmad Rofiqi</h2>
      <p class="font-semibold text-sm text-gray-500">ahmadrofiqi333@gmail.com</p>
    </div>
    <div>
      <button class="bg-primary text-white px-4 py-2 rounded-md">Edit Profil</button>
    </div>
    <div class="w-full p-3 flex flex-col gap-3">
      <div>
        <p class="font-bold text-lg">Name</p>
        <p class="text-gray-600 bg-gray-300 p-2 rounded-md">Ahmad Rofiqi</p>
      </div>
      <div>
        <p class="font-bold text-lg">Email Address</p>
        <p class="text-gray-600 bg-gray-300 p-2 rounded-md">ahmadrofiqi333@gmail.com</p>
      </div>
      <div>
        <p class="font-bold text-lg">username</p>
        <p class="text-gray-600 bg-gray-300 p-2 rounded-md">@Aro2345</p>
      </div>
      <div>
        <p class="font-bold text-lg">password</p>
        <p class="text-gray-600 bg-gray-300 p-2 rounded-md">**********</p>
      </div>
    </div>
    <div class="w-full flex justify-end p-3">
      <button class="px-3 py-2 bg-red-600 text-white rounded-md">LogOut</button>
    </div>
  </div>
</template>

<script>
import Back from "@/components/back.vue";
export default {
  data() {
    return {
      imageUrl: "/profil.jpg",
    };
  },
  components: {
    Back,
  },
  methods: {
    handleFileChange(event) {
      const file = event.target.files[0];

      if (file) {
        const reader = new FileReader();
        reader.onload = (e) => {
          this.imageUrl = e.target.result;
        };
        reader.readAsDataURL(file);
      }
    },
  },
};
</script>
