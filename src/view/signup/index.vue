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
    <form @submit.prevent="register" class="flex flex-col gap-5 px-5">
      <div class="bg-gray-300 flex items-center px-5 gap-3 w-full rounded-full overflow-hidden">
        <font-awesome-icon class="w-6 h-6 text-gray-500" :icon="['fas', 'user']" />
        <input type="email" v-model="email" placeholder="Email" @focus="clearEmailMessage" class="bg-inherit text-gray-500 text-xl placeholder-gray-500 p-3 focus:outline-none" />
      </div>
      <ErrorInput massage="Email harus diisi" v-if="!email && focused.email" />
      <div class="bg-gray-300 flex items-center px-5 gap-3 w-full rounded-full overflow-hidden justify-between">
        <div class="flex gap-2 items-center">
          <font-awesome-icon class="w-6 h-6 text-gray-500" :icon="['fas', 'lock']" />
          <input :type="showPassword ? 'text' : 'password'" v-model="password" placeholder="password" @focus="clearPasswordMessage" class="bg-inherit text-gray-500 text-xl placeholder-gray-500 p-3 focus:outline-none w-5/6" />
        </div>
        <font-awesome-icon id="iconEye" class="w-6 h-6 text-gray-500" :icon="showPassword ? ['far', 'eye-slash'] : ['far', 'eye']" @click="toggleShowPassword" />
      </div>
      <ErrorInput massage="Password harus diisi" v-if="!password && focused.password" />
      <div class="bg-gray-300 flex items-center px-5 gap-3 w-full rounded-full overflow-hidden justify-between">
        <div class="flex gap-2 items-center">
          <font-awesome-icon class="w-6 h-6 text-gray-500" :icon="['fas', 'lock']" />
          <input
            :type="showPassword ? 'text' : 'password'"
            v-model="confirmPassword"
            placeholder="confirm password"
            @focus="clearConfirmPassswordMessage"
            class="bg-inherit text-gray-500 text-xl placeholder-gray-500 p-3 focus:outline-none w-5/6"
          />
        </div>
        <font-awesome-icon id="iconEye" class="w-6 h-6 text-gray-500" :icon="showPassword ? ['far', 'eye-slash'] : ['far', 'eye']" @click="toggleShowPassword" />
      </div>
      <ErrorInput massage="Confirm Password harus diisi" v-if="!confirmPassword && focused.confirmPassword" />
      <ErrorInput massage="Confirm Password tidak sesuai" v-if="password != confirmPassword" />
      <button type="submit" :disabled="!formIsValid" class="bg-primary text-white p-3 rounded-full font-semibold text-xl w-full">SignUp</button>
    </form>
  </div>
  <p class="text-center text-sm text-gray-500 pt-10 italic">
    Do You have account?
    <router-link :to="{ name: 'login' }">Login</router-link>
  </p>
</template>

<script>
import ErrorInput from "@/components/errorInput.vue";
import axiosInstance from "@/axios";
export default {
  name: "signupPage",
  data() {
    return {
      showPassword: false,
      email: "",
      password: "",
      confirmPassword: "",
      focused: {
        email: false,
        password: false,
        confirmPassword: false,
      },
    };
  },
  components: {
    ErrorInput,
  },
  computed: {
    formIsValid() {
      return this.email && this.password && this.confirmPassword;
    },
  },
  methods: {
    toggleShowPassword() {
      this.showPassword = !this.showPassword;
    },
    clearEmailMessage() {
      this.focused.email = true;
    },
    clearPasswordMessage() {
      this.focused.password = true;
    },
    clearConfirmPassswordMessage() {
      this.focused.confirmPassword = true;
    },
    register() {
      const data = { email: this.email, password: this.password, confirmPassword: this.confirmPassword };
      console.log(data);
      axiosInstance
        .post("/api/register", data)
        .then((result) => {
          console.log("Hasil : ", result);
        })
        .catch((err) => {
          console.log("Error : ", err);
        });
    },
  },
};
</script>
