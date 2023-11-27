<template>
  <div>
    <div class="w-full -z-50 relatif">
      <svg width="" height="363" viewBox="0 0 330 463" xmlns="http://www.w3.org/2000/svg">
        <ellipse cx="17" cy="58.5" rx="435" ry="296.5" class="fill-primary" />
      </svg>
    </div>
    <h2 class="font-semibold text-5xl text-white absolute top-20 left-7">Selamat<br />Datang</h2>
  </div>
  <div class="flex flex-col items-center gap-5">
    <form action="/api/login" class="flex flex-col gap-3 w-full px-5">
      <input type="text" id="username" placeholder="username" class="w-full py-2 px-4 text-xl rounded-full block border-2 border-gray-700 border-solid" />
      <div class="bg-white w-full py-2 px-4 text-xl rounded-full border-2 border-gray-700 border-solid flex justify-between items-center">
        <input id="password" placeholder="password" class="focus:outline-none" :type="showPassword ? 'text' : 'password'" />
        <font-awesome-icon id="iconEye" class="w-6 h-6 text-black" :icon="showPassword ? ['far', 'eye-slash'] : ['far', 'eye']" @click="toggleShowPassword" />
      </div>
      <p class="text-right text-sm text-gray-500">Forget Your Password?</p>
      <button type="submit" class="bg-primary text-white p-3 rounded-full font-semibold text-xl">Login</button>
    </form>
  </div>
  <div class="p-5 flex items-center gap-3 justify-center">
    <svg class="fill-gray-300" width="130" height="4" viewBox="0 0 140 4" fill="none" xmlns="http://www.w3.org/2000/svg">
      <rect width="140" height="4" />
    </svg>
    <p class="text-gray-400">or</p>
    <svg class="fill-gray-300" width="130" height="4" viewBox="0 0 140 4" fill="none" xmlns="http://www.w3.org/2000/svg">
      <rect width="140" height="4" />
    </svg>
  </div>
  <div class="flex gap-10 justify-center">
    <font-awesome-icon class="w-8 h-8 text-white bg-red-600 p-3 rounded-full" :icon="['fab', 'google']" />
    <font-awesome-icon class="w-8 h-8 text-white bg-blue-600 p-3 rounded-full" :icon="['fab', 'facebook']" />
    <font-awesome-icon class="w-8 h-8 text-white bg-green-600 p-3 rounded-full" :icon="['fab', 'whatsapp']" />
  </div>
  <p class="text-center text-sm text-gray-500 pt-10 italic">
    Don`t have account?
    <router-link :to="{ name: 'signup' }">Sign Up</router-link>
  </p>
</template>

<script>
export default {
  name: "LoginPage",
  data() {
    return {
      showPassword: false,
    };
  },
  methods: {
    toggleShowPassword() {
      this.showPassword = !this.showPassword;
    },
  },
};
</script>
