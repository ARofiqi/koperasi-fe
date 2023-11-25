<template>
  <div class="bg-primary absolute w-full h-20 rounded-b-2xl -z-50"></div>
  <div class="px-4 py-3">
    <div class="flex gap-5 justify-between pb-4">
      <router-link :to="{ name: 'profil' }"><img src="profil.jpg" alt="foto profil" class="w-6 h-6 bg-gray-400 rounded-full" /></router-link>
      <div class="flex gap-5">
        <router-link :to="{ name: 'setting' }">
          <font-awesome-icon class="w-6 h-6" :icon="['fas', 'gear']" style="color: #ffffff" />
        </router-link>
        <font-awesome-icon class="w-6 h-6" :icon="['fas', 'cart-shopping']" style="color: #ffffff" />
      </div>
    </div>
    <div class="flex gap-1 m-auto">
      <div class="border-2 border-solid border-gray-300 rounded-md w-4/6 bg-white">
        <font-awesome-icon v-on="this.searchProducts" :icon="['fas', 'magnifying-glass']" class="w-1/6 text-gray-400" />
        <input v-model="search" type="text" id="search" @keyup.enter="searchProducts" class="w-5/6 p-2 bg-inherit focus:outline-none" placeholder="search..." />
      </div>
      <select v-model="selectedCategory" id="category" class="w-2/6 border-2 border-solid border-gray-300 rounded-md bg-white focus:outline-none">
        <option value="">
          All category
          <!-- <font-awesome-icon :icon="['fas', 'filter']" class="text-gray-400" /> -->
        </option>
        <option v-for="category in uniqueCategories" :key="category" :value="category">
          {{ category }}
        </option>
      </select>
    </div>
    <div>
      <div class="flex justify-between mt-3">
        <p v-text="selectedCategory" v-if="selectedCategory"></p>
        <p v-else>All category</p>
        <p id="seeAll">Lihat Semua</p>
      </div>

      <ProductList :dataList="filteredProducts" v-if="selectedCategory" />
      <ProductList :dataList="searchProducts" v-else-if="search" />
      <ProductList :dataList="dataProduct" v-else />
    </div>
  </div>
</template>

<script>
import ProductList from "../../components/productList.vue";
import dataProduct from "../../assets/dataProduct.json";
export default {
  name: "homePage",
  data() {
    return {
      dataProduct: dataProduct,
      search: "",
      selectedCategory: "",
    };
  },
  components: {
    ProductList,
  },
  computed: {
    searchProducts() {
      this.selectedCategory = "";
      return this.dataProduct.filter((product) => product.name.toLowerCase().includes(this.search.toLowerCase()));
    },
    uniqueCategories() {
      return [...new Set(this.dataProduct.map((product) => product.category))];
    },
    filteredProducts() {
      if (this.selectedCategory) {
        return this.dataProduct.filter((product) => product.category === this.selectedCategory);
      } else {
        return this.dataProduct;
      }
    },
  },
};
</script>
