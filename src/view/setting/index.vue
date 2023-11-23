<template>
  <div class="bg-primary p-3 rounded-b-2xl shadow-lg">
    <router-link :to="{ name: 'homepage' }">
      <font-awesome-icon :icon="['fas', 'arrow-left']" class="text-white" />
    </router-link>
    <h2 class="text-center text-2xl text-white">Setting</h2>
    <div class="flex justify-around align-middle items-center my-5 text-white">
      <img src="profil.jpg" alt="profil" class="w-12 h-12 rounded-full" />
      <div>
        <h3 class="font-semibold">Abdurrahman</h3>
        <p class="text-sm">Abdurrahman21@gmail.com</p>
      </div>
      <font-awesome-icon :icon="['fas', 'edit']" />
    </div>
  </div>
  <div class="p-3">
    <div class="flex justify-between items-center py-4 px-2">
      <div class="flex items-center gap-5">
        <font-awesome-icon :icon="['fas', 'user']" class="w-5 h-5" />
        <p class="font-semibold text-xl">Account</p>
      </div>
      <font-awesome-icon :icon="['fas', 'arrow-right']" />
    </div>
    <div class="flex justify-between items-center py-4 px-2">
      <div class="flex items-center gap-5">
        <font-awesome-icon :icon="['fas', 'bell']" class="w-5 h-5" />
        <p class="font-semibold text-xl">Notification</p>
      </div>
      <font-awesome-icon :icon="['fas', 'arrow-right']" />
    </div>
    <div class="flex justify-between items-center py-4 px-2">
      <div class="flex items-center gap-5">
        <font-awesome-icon :icon="['fas', 'map-location']" class="w-5 h-5" />
        <p class="font-semibold text-xl">Location</p>
      </div>
      <font-awesome-icon :icon="['fas', 'arrow-right']" />
    </div>
    <div class="flex justify-between items-center py-4 px-2">
      <div class="flex items-center gap-5">
        <font-awesome-icon :icon="['fas', 'user-group']" class="w-5 h-5" />
        <p class="font-semibold text-xl">Support</p>
      </div>
      <font-awesome-icon :icon="['fas', 'arrow-right']" />
    </div>
    <div class="flex justify-between items-center py-4 px-2">
      <div class="flex items-center gap-5">
        <font-awesome-icon :icon="['fas', 'share']" class="w-5 h-5" />
        <p class="font-semibold text-xl">Share</p>
      </div>
      <font-awesome-icon :icon="['fas', 'arrow-right']" />
    </div>
    <div class="flex justify-between items-center py-4 px-2">
      <div class="flex items-center gap-5">
        <font-awesome-icon :icon="['fas', 'right-from-bracket']" class="w-5 h-5" />
        <p class="font-semibold text-xl">Logout</p>
      </div>
      <font-awesome-icon :icon="['fas', 'arrow-right']" />
    </div>
  </div>
</template>
