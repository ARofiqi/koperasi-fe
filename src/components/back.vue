<template>
  <font-awesome-icon :icon="['fas', 'arrow-left']" @click="goBack" />
</template>

<script>
export default {
  methods: {
    goBack() {
      this.$router.go(-1);
    },
  },
};
</script>
