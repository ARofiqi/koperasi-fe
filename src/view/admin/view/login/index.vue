<template>
  <div class="bg-green-500 w-full p-10 absolute inset-0 flex flex-col justify-center items-center gap-5">
    <h1 class="text-center text-xl">Masuk Sebagai Admin</h1>
    <form @submit.prevent="login" class="w-1/3">
      <div class="grid grid-cols-2 p-3">
        <label for="username"> username </label>
        <input type="text" v-model="user.username" required />
      </div>
      <div class="grid grid-cols-2 p-3">
        <label for="password"> password </label>
        <input type="password" v-model="user.password" required />
      </div>
      <button type="submit" class="m-3 py-1 px-3 bg-blue-600 rounded-lg text-white">Login</button>
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
    };
  },
  methods: {
    async login() {
      axiosInstance
        .post("/api/admin/login", this.user)
        .then((result) => {
          const token = result.token;
          localStorage.setItem("token", token);

          this.$router.push("/dashboard");
        })
        .catch((err) => {
          console.error(err);
        });
    },
  },
};
</script>
