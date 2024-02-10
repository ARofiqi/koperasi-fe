<template>
  <router-view name="navbar"></router-view>
  <div class="contain">
    <router-view name="main"></router-view>
  </div>
</template>

<script>
export default {
  beforeRouteEnter(to, from, next) {
    const token = localStorage.getItem("token");
    axiosInstance
      .get("/api/user/auth", {
        headers: { Authorization: token },
      })
      .then((result) => {
        next();
      })
      .catch((err) => {
        next({ path: "/login" });
      });
  },
};
</script>

<style scoped>
.contain {
  padding-bottom: 70px;
}
</style>
