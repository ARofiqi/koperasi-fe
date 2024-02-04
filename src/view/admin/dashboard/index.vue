<template>
  <div>
    <Navbar />
    <div class="ml-64 p-10">
      <Menu />
      <router-view name="main"></router-view>
    </div>
  </div>
</template>

<script>
import Navbar from "@/components/admin/navbar.vue";
import Menu from "@/components/admin/menu.vue";
import axiosInstance from "@/axios";

export default {
  components: {
    Navbar,
    Menu,
  },
  beforeRouteEnter(to, from, next) {
    const token = localStorage.getItem("token");
    axiosInstance
      .get("/api/admin/dashboard", {
        headers: { Authorization: token },
      })
      .then((result) => {
        console.log(result);
        next();
      })
      .catch((err) => {
        next({ path: "/dashboard/login" });
        console.error(err);
      });
  },
};
</script>
