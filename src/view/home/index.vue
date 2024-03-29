<template>
  <div class="bg-primary absolute w-full h-20 rounded-b-2xl -z-50"></div>
  <div class="px-4 py-3">
    <div class="flex gap-5 justify-between pb-4">
      <div @click="goToProfil">
        <img src="profil.jpg" alt="foto profil" class="w-6 h-6 bg-gray-400 rounded-full" />
      </div>
      <div class="flex gap-5">
        <router-link :to="{ name: 'setting' }">
          <font-awesome-icon class="w-6 h-6 text-white" :icon="['fas', 'gear']" />
        </router-link>
      </div>
    </div>
    <div class="flex gap-1 m-auto">
      <div class="border-2 border-solid border-gray-300 rounded-md w-3/5 bg-white">
        <font-awesome-icon v-on="this.searchProducts" :icon="['fas', 'magnifying-glass']" class="w-1/6 text-gray-400" />
        <input v-model="search" type="text" id="search" @keyup.enter="searchProducts" class="w-5/6 p-2 bg-inherit focus:outline-none" placeholder="search..." />
      </div>
      <select v-model="selectedCategory" id="category" class="w-2/5 border-2 border-solid border-gray-300 rounded-md bg-white focus:outline-none">
        <option value="">All category</option>
        <option v-for="category in uniqueCategories" :key="category" :value="category" v-text="category"></option>
      </select>
    </div>
    <div>
      <div class="flex justify-between mt-3">
        <div>
          <p v-text="selectedCategory" v-if="selectedCategory"></p>
          <p v-else>All category</p>
        </div>
        <p id="seeAll">Lihat Semua</p>
      </div>
      <ProductList :dataList="filteredProducts" v-if="selectedCategory" />
      <ProductList :dataList="searchProducts" v-else-if="search" />
      <ProductList :dataList="paginatedData" v-else />
    </div>
  </div>
</template>

<script>
import ProductList from "@/components/productList.vue";
import axiosInstance from "@/axios.js";

export default {
  name: "homePage",
  data() {
    return {
      data: [],
      search: "",
      selectedCategory: "",
      currentPage: 1,
      itemsPerPage: 6,
    };
  },
  components: {
    ProductList,
  },
  methods: {
    goToProfil() {
      this.$router.push({ name: "profil", params: { id: "1" } });
    },
    fetch() {
      const token = localStorage.getItem("token");
      axiosInstance
        .get("/api/homepage", {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        })
        .then((result) => {
          this.data = result.data;
          this.dataFiltered = result.data;
        })
        .catch(() => {
          this.$router.push("/login");
        });
    },
  },
  computed: {
    searchProducts() {
      this.selectedCategory = "";
      return this.data.filter((product) => product.name.toLowerCase().includes(this.search.toLowerCase()));
    },
    uniqueCategories() {
      return [...new Set(this.data.map((product) => product.category))];
    },
    filteredProducts() {
      if (this.selectedCategory) {
        return this.data.filter((product) => product.category === this.selectedCategory);
      } else {
        return this.data;
      }
    },
    totalPages() {
      return Math.ceil(this.data.length / this.itemsPerPage);
    },
    paginatedData() {
      const start = (this.currentPage - 1) * this.itemsPerPage;
      const end = start + this.itemsPerPage;
      return this.data.slice(start, end);
    },
  },
  created() {
    this.fetch();
  },
  beforeRouteEnter(to, from, next) {
    const token = localStorage.getItem("token");
    axiosInstance
      .get("/api/homepage/auth", {
        headers: { Authorization: token },
      })
      .then(() => {
        next();
      })
      .catch(() => {
        next({ path: "/login" });
      });
  },
};
</script>
