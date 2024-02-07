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
    <form @submit.prevent="login" class="flex flex-col gap-3 w-full px-5">
      <div>
        <input name="email" v-model="email" type="text" id="email" placeholder="email" @focus="clearEmailMessage" class="w-full py-2 px-4 text-xl rounded-full block border-2 border-gray-700 border-solid" required />
        <ErrorInput massage="Email harus diisi" v-if="!email && focused.email" />
      </div>
      <div>
        <div class="bg-white w-full py-2 px-4 text-xl rounded-full border-2 border-gray-700 border-solid flex justify-between items-center">
          <input name="password" v-model="password" :type="showPassword ? 'text' : 'password'" id="password" placeholder="password" @focus="clearPasswordMessage" class="focus:outline-none" required />
          <font-awesome-icon :icon="showPassword ? ['far', 'eye-slash'] : ['far', 'eye']" @click="toggleShowPassword" class="w-6 h-6 text-black" />
        </div>
        <ErrorInput massage="Password harus diisi" v-if="!password && focused.password" />
      </div>
      <p class="text-right text-sm text-gray-500">Forget Your Password?</p>
      <button type="submit" :disabled="!formIsValid" class="bg-primary text-white p-3 rounded-full font-semibold text-xl">Login</button>
    </form>
  </div>
  <Or />
  <div class="flex gap-10 justify-center">
    <font-awesome-icon class="w-8 h-8 text-white bg-red-600 p-3 rounded-full" :icon="['fab', 'google']" />
    <font-awesome-icon class="w-8 h-8 text-white bg-blue-600 p-3 rounded-full" :icon="['fab', 'facebook']" />
    <font-awesome-icon class="w-8 h-8 text-white bg-green-600 p-3 rounded-full" :icon="['fab', 'whatsapp']" />
  </div>
  <p class="text-center text-sm text-gray-500 pt-10 italic">
    Don`t have account?
    <router-link :to="{ name: 'signup' }" class="italic">Sign Up</router-link>
  </p>
</template>

<script>
import { Form, Field, ErrorMessage } from "vee-validate";
import Or from "@/components/or.vue";
import ErrorInput from "@/components/errorInput.vue";
import axiosInstance from "@/axios";

export default {
  name: "LoginPage",
  data() {
    return {
      showPassword: false,
      email: "",
      password: "",
      focused: {
        email: false,
        password: false,
      },
    };
  },
  computed: {
    formIsValid() {
      return this.email && this.password;
    },
  },
  components: {
    Form,
    Field,
    ErrorMessage,
    Or,
    ErrorInput,
  },
  methods: {
    toggleShowPassword() {
      this.showPassword = !this.showPassword;
    },
    async login() {
      const data = { email: this.email, password: this.password };
      console.log(data);
      axiosInstance
        .post("/api/login", data)
        .then((result) => {
          const token = result.token;
          localStorage.setItem("token", token);
          this.$router.push("/");
        })
        .catch((err) => {
          console.error(err);
        });
    },
    clearEmailMessage() {
      this.focused.email = true;
    },
    clearPasswordMessage() {
      this.focused.password = true;
    },
  },
};
</script>
