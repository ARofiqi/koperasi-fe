<template>
  <div>
    <div class="py-5 flex items-center justify-between">
      <button @click="addProduct" class="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">tambah product</button>
      <div class="flex gap-2">
        <input type="text" id="search" class="border-2 border-solid p-1 rounded-sm" v-model="filter.vName" placeholder="Search Product ..." />
        <button @click="searchProduct" class="bg-blue-500 hover:bg-blue-700 text-white font-bold py-1 px-2 rounded border-2 border-blue-500">Cari</button>
      </div>
    </div>
    <div class="relative overflow-x-auto shadow-md sm:rounded-lg">
      <table class="w-full text-sm text-left rtl:text-right text-gray-500 dark:text-gray-400">
        <thead class="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
          <tr>
            <th scope="col" class="px-3 py-3">Id</th>
            <th scope="col" class="px-3 py-3">Product name</th>
            <th scope="col" class="px-2 py-3">
              <select name="category" id="category" class="bg-inherit" v-model="filter.vCategory" @change="setFilterByCategory">
                <option value="All Category">All Category</option>
                <option v-for="item in listCategory" :key="item" :value="item">{{ item }}</option>
              </select>
            </th>
            <th scope="col" class="px-2 py-3">
              <select name="price" id="price" class="bg-inherit" v-model="filter.vPrice" @change="setFilterByPrice">
                <option value="All Price" selected>All price</option>
                <option value="asc">lower</option>
                <option value="desc">higher</option>
              </select>
            </th>
            <th scope="col" class="px-2 py-3">
              <select name="quantity" id="quantity" class="bg-inherit" v-model="filter.vQuantity" @change="setFilterByQuantity">
                <option value="All Quantity" selected>Quantity</option>
                <option value="asc">lower</option>
                <option value="desc">higher</option>
              </select>
            </th>
            <th scope="col" class="px-3 py-3">
              <div class="flex items-center">Detail</div>
            </th>
            <th scope="col" class="px-3 py-3">
              <select name="rating" id="rating" class="bg-inherit" v-model="filter.vRating" @change="setFilterByRating">
                <option value="All Rating" selected>Rating</option>
                <option value="asc">lower</option>
                <option value="desc">higher</option>
              </select>
            </th>
            <th scope="col" class="px-3 py-3">
              <span class="sr-only">Edit</span>
            </th>
            <th scope="col" class="px-3 py-3">
              <span class="sr-only">Hapus</span>
            </th>
          </tr>
        </thead>
        <tbody v-if="dataFiltered.length !== 0">
          <tr v-for="item in dataFiltered" :key="item" class="bg-white border-b dark:bg-gray-800 dark:border-gray-700">
            <th scope="row" class="px-4 py-5 font-medium text-gray-900 whitespace-nowrap dark:text-white">{{ item.id }}</th>
            <th scope="row" class="px-4 py-5 font-medium text-gray-900 whitespace-nowrap dark:text-white">{{ item.name }}</th>
            <td class="px-4 py-5">{{ item.category }}</td>
            <td class="px-4 py-5">{{ formatRupiah(item.price) }}</td>
            <td class="px-4 py-5 text-center">{{ item.quantity }}</td>
            <td class="px-4 py-5">{{ item.detail }}</td>
            <td class="px-4 py-5 text-center">{{ item.rating }}</td>
            <td class="px-4 py-5 text-right">
              <button @click="editProduct" class="font-medium text-blue-600 dark:text-blue-500 hover:underline">Edit</button>
            </td>
            <td class="px-4 py-5 text-right">
              <button @click="deleteProduct" class="font-medium text-red-600 dark:text-red-500 hover:underline">Hapus</button>
            </td>
          </tr>
        </tbody>
        <tbody>
          <tr>
            <td colspan="9" class="text-center p-3">Tidak Ada data Yang Ditemukan</td>
          </tr>
        </tbody>
      </table>
    </div>
  </div>
</template>

<script>
// import dataProduct from "@/assets/dataProduct";
import Swal from "sweetalert2";
import axiosInstance from "@/axios";

export default {
  data() {
    return {
      data: [],
      dataFiltered: [],
      dataAdd: { nama: null, category: null, price: 0 },
      listCategory: [],
      filter: {
        vCategory: "All Category",
        vPrice: "All Price",
        vQuantity: "All Quantity",
        vRating: "All Rating",
        vName: "",
      },
    };
  },
  methods: {
    formatRupiah(num) {
      const formatter = new Intl.NumberFormat("id-ID", {
        style: "currency",
        currency: "IDR",
      });

      return formatter.format(num);
    },
    deleteProduct() {
      Swal.fire({
        title: "Are you sure?",
        text: "You won't be able to revert this!",
        icon: "warning",
        showCancelButton: true,
        confirmButtonColor: "#3085d6",
        cancelButtonColor: "#d33",
        confirmButtonText: "Yes, delete it!",
      }).then((result) => {
        if (result.isConfirmed) {
          Swal.fire({
            title: "Deleted!",
            text: "Your file has been deleted.",
            icon: "success",
          });
        }
      });
    },
    editProduct() {
      Swal.fire({
        title: "Edit Porduct",
        html: `
        <div>
            <div>
                <label for="name" class="w-1/2">Nama</label>
                <input type="text" name="name" id="name" class="swal2-input w-1/2">
            </div>
            <div>
                <label for="category" class="w-1/2">Kategori</label>
                <input type="text" name="category" id="category" class="swal2-input w-1/2">
            </div>
            <div>
                <label for="price" class="w-1/2">Harga</label>
                <input type="text" name="price" id="price" class="swal2-input w-1/2">
            </div>
        </div>`,
        inputAttributes: {
          autocapitalize: "off",
        },
        showCancelButton: true,
        confirmButtonText: "Confirm",
        showLoaderOnConfirm: true,
        preConfirm: async () => {
          console.log("berhasil");
        },
      });
    },
    addProduct() {
      Swal.fire({
        title: "Add Porduct",
        html: `
        <div>
            <div>
                <label for="name" class="w-20 text-left">Nama</label>
                <input type="text" name="name" id="name" class="swal2-input w-fit" >
            </div>
            <div>
                <label for="category" class="w-20 text-left">Kategori</label>
                <input type="text" name="category" id="category" class="swal2-input w-fit" >
            </div>
            <div>
                <label for="price" class="w-20 text-left">Harga</label>
                <input type="number" name="price" id="price" class="swal2-input w-fit" >
            </div>
            <div>
                <label for="quantity" class="w-20 text-left">Kuantitas</label>
                <input type="number" name="quantity" id="quantity" class="swal2-input w-fit">
            </div>
            <div>
                <label for="detail" class="w-20 text-left">Detail</label>
                <input type="text" name="detail" id="detail" class="swal2-input w-fit" >
            </div>
        </div>
  `,
        inputAttributes: {
          autocapitalize: "off",
        },
        showCancelButton: true,
        confirmButtonText: "Confirm",
        showLoaderOnConfirm: true,
        preConfirm: async () => {
          const popup = Swal.getPopup();
          const name = popup.querySelector("#name").value;
          const category = popup.querySelector("#category").value;
          const price = popup.querySelector("#price").value;
          // const quantity = popup.querySelector("#quantity").value;
          const detail = popup.querySelector("#detail").value;

          const result = { name: name, price: price, category: category, detail: detail };

          axiosInstance
            .post("/api/admin/inventory", result)
            .then((result) => {
              this.data = result[0].payload.data;
              this.dataFiltered = result[0].payload.data;
              this.listCategory = [...new Set(this.data.map((product) => product.category))];
            })
            .catch((err) => {
              console.error(err);
            });
        },
      });
    },
    fetch() {
      axiosInstance
        .get("/api/admin/inventory")
        .then((result) => {
          this.data = result[0].payload.data;
          this.dataFiltered = result[0].payload.data;
          this.listCategory = [...new Set(this.data.map((product) => product.category))];
        })
        .catch((err) => {
          console.error(err);
        });
    },
    setFilterByCategory() {
      const vCategory = this.filter.vCategory;

      if (vCategory === "All Category") {
        this.fetch();
      } else {
        this.dataFiltered = this.filterProductsByCategory(vCategory);
      }
    },
    setFilterByPrice() {
      const vPrice = this.filter.vPrice;
      if (vPrice === "All Price") {
        this.fetch();
      } else {
        this.dataFiltered = this.filterProductsByPrice(vPrice);
      }
    },
    setFilterByQuantity() {
      const vQuantity = this.filter.vQuantity;
      if (vQuantity === "All Quantity") {
        this.fetch();
      } else {
        this.dataFiltered = this.filterProductsByQuantity(vQuantity);
      }
    },
    setFilterByRating() {
      const vRating = this.filter.vRating;
      if (vRating === "All Rating") {
        this.fetch();
      } else {
        this.dataFiltered = this.filterProductsByRating(vRating);
      }
    },
    filterProductsByCategory(category) {
      return this.data.filter((product) => product.category === category);
    },
    filterProductsByPrice(type) {
      return type === "asc" ? this.data.slice().sort((a, b) => a.price - b.price) : this.data.slice().sort((a, b) => b.price - a.price);
    },
    filterProductsByQuantity(type) {
      return type === "asc" ? this.data.slice().sort((a, b) => a.quantity - b.quantity) : this.data.slice().sort((a, b) => b.quantity - a.quantity);
    },
    filterProductsByRating(type) {
      return type === "asc" ? this.data.slice().sort((a, b) => a.rating - b.rating) : this.data.slice().sort((a, b) => b.rating - a.rating);
    },
  },
  computed: {
    searchProduct() {
      const searchTerm = this.filter.vName.toLowerCase();
      if (searchTerm === "") {
        this.fetch();
      } else {
        this.dataFiltered = this.data.filter((product) => product.name.toLowerCase().includes(searchTerm));
      }
    },
  },
  mounted() {
    this.fetch();
  },
};
</script>
