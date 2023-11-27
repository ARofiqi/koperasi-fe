<template>
  <div>
    <div class="w-full -z-50 relatif">
      <svg width="" height="363" viewBox="0 0 330 463" xmlns="http://www.w3.org/2000/svg">
        <ellipse cx="17" cy="58.5" rx="435" ry="296.5" class="fill-primary" />
      </svg>
    </div>
    <h2 class="font-semibold text-5xl text-white absolute top-20 left-7">Create<br />Account</h2>
  </div>
  <div>
    <form action="/api/signup" class="flex flex-col items-center gap-5 px-5">
      <div class="bg-gray-300 flex items-center px-5 gap-3 w-full rounded-full overflow-hidden">
        <font-awesome-icon class="w-6 h-6 text-gray-500" :icon="['fas', 'user']" />
        <input type="text" placeholder="Nama" class="bg-inherit text-gray-500 text-xl placeholder-gray-500 p-3 focus:outline-none" />
      </div>
      <div class="bg-gray-300 flex items-center px-5 gap-3 w-full rounded-full overflow-hidden">
        <font-awesome-icon class="w-6 h-6 text-gray-500" :icon="['fas', 'user']" />
        <input type="email" placeholder="Email" class="bg-inherit text-gray-500 text-xl placeholder-gray-500 p-3 focus:outline-none" />
      </div>
      <div class="bg-gray-300 flex items-center px-5 gap-3 w-full rounded-full overflow-hidden">
        <font-awesome-icon class="w-6 h-6 text-gray-500" :icon="['fas', 'user']" />
        <input type="number" placeholder="No Telephone" class="bg-inherit text-gray-500 text-xl placeholder-gray-500 p-3 focus:outline-none" />
      </div>
      <div class="bg-gray-300 flex items-center px-5 gap-3 w-full rounded-full overflow-hidden justify-between">
        <div class="flex gap-2 items-center">
          <font-awesome-icon class="w-6 h-6 text-gray-500" :icon="['fas', 'lock']" />
          <input :type="showPassword ? 'text' : 'password'" placeholder="password" class="bg-inherit text-gray-500 text-xl placeholder-gray-500 p-3 focus:outline-none w-5/6" />
        </div>
        <font-awesome-icon id="iconEye" class="w-6 h-6 text-gray-500" :icon="showPassword ? ['far', 'eye-slash'] : ['far', 'eye']" @click="toggleShowPassword" />
      </div>
      <div class="bg-gray-300 flex items-center px-5 gap-3 w-full rounded-full overflow-hidden justify-between">
        <div class="flex gap-2 items-center">
          <font-awesome-icon class="w-6 h-6 text-gray-500" :icon="['fas', 'lock']" />
          <input :type="showPassword ? 'text' : 'password'" placeholder="confirm password" class="bg-inherit text-gray-500 text-xl placeholder-gray-500 p-3 focus:outline-none w-5/6" />
        </div>
        <font-awesome-icon id="iconEye" class="w-6 h-6 text-gray-500" :icon="showPassword ? ['far', 'eye-slash'] : ['far', 'eye']" @click="toggleShowPassword" />
      </div>
      <button type="submit" class="bg-primary text-white p-3 rounded-full font-semibold text-xl w-full">SignUp</button>
    </form>
  </div>
  <p class="text-center text-sm text-gray-500 pt-10 italic">
    Do You have account?
    <router-link :to="{ name: 'login' }">Login</router-link>
  </p>
</template>

<script>
export default {
  name: "signupPage",
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
