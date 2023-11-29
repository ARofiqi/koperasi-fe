<template>
  <div class="bg-green-400 w-full h-24 fixed top-0 left-0 right-0 flex justify-center items-center text-lg text-white rounded-b-xl">{{ this.massage }}</div>
</template>

<script>
export default {
  name: "notification",
  props: {
    massage: String,
    tipe: {
      type: String,
      default: "success",
      validator: (value) => {
        return ["success", "failed"].includes(value);
      },
    },
  },
};
</script>

<style scoped>
div {
  animation: show 3000ms;
}

@keyframes show {
  0% {
    top: -100px;
  }
  25% {
    top: 0;
  }
  75% {
    top: 0;
  }
  100% {
    top: -100px;
  }
}
</style>
