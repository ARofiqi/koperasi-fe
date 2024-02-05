<template>
  <div class="w-full p-5 absolute inset-0 flex flex-col justify-center items-center gap-3">
    <h1 class="text-center text-xl">Masuk Sebagai Admin</h1>
    <span class="flex items-center font-medium tracking-wide text-red-500 text-xs mt-1 ml-1" v-if="!isLoggin"> Gagal Login Sebagai Admin, <br />Cek Kembali Username dan password Anda </span>
    <form @submit.prevent="login" class="max-w-sm mx-auto">
      <div class="mb-5">
        <label for="username" class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">username</label>
        <input
          type="text"
          id="username"
          class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
          v-model="user.username"
          required
        />
      </div>
      <div class="mb-5">
        <label for="password" class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">password</label>
        <input
          :type="showPass ? 'text' : 'password'"
          id="password"
          class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
          v-model="user.password"
          required
        />
      </div>
      <div class="flex items-start mb-5">
        <div class="flex items-center h-5">
          <input
            id="show_pass"
            type="checkbox"
            value=""
            v-model="showPass"
            class="w-4 h-4 border border-gray-300 rounded bg-gray-50 focus:ring-3 focus:ring-blue-300 dark:bg-gray-700 dark:border-gray-600 dark:focus:ring-blue-600 dark:ring-offset-gray-800 dark:focus:ring-offset-gray-800"
            required
          />
        </div>
        <label for="show_pass" class="ms-2 text-sm font-medium text-gray-900 dark:text-gray-300">Show Password</label>
      </div>
      <button
        type="submit"
        class="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
      >
        Submit
      </button>
    </form>
  </div>
</template>

<script>
import axiosInstance from "@/axios";
export default {
  data() {
    return {
      user: {
        username: "",
        password: "",
      },
      isLoggin: true,
      showPass: false,
    };
  },
  methods: {
    async login() {
      this.isLoggin = true;
      axiosInstance
        .post("/api/admin/login", this.user)
        .then((result) => {
          const token = result.token;
          localStorage.setItem("token", token);
          this.$router.push("/dashboard");
        })
        .catch((err) => {
          console.error(err);
          this.isLoggin = false;
          this.user = {
            username: "",
            password: "",
          };
        });
    },
  },
};
</script>
