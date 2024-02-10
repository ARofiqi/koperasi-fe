<template>
  <div>
    <div class="py-5 flex items-center justify-between">
      <button @click="addProduct" class="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">tambah product</button>
      <div class="flex gap-2">
        <input type="text" id="search" @keypress.enter="searchProduct" class="border-2 border-solid p-1 rounded-sm" v-model="filter.vName" placeholder="Search Product ..." />
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
        <tbody v-if="paginatedData.length !== 0">
          <tr v-for="item in paginatedData" :key="item" class="bg-white border-b dark:bg-gray-800 dark:border-gray-700">
            <th scope="row" class="px-4 py-5 font-medium text-gray-900 whitespace-nowrap dark:text-white">{{ item.id }}</th>
            <th scope="row" class="px-4 py-5 font-medium text-gray-900 whitespace-nowrap dark:text-white">{{ item.name }}</th>
            <td class="px-4 py-5">{{ item.category }}</td>
            <td class="px-4 py-5">{{ formatRupiah(item.price) }}</td>
            <td class="px-4 py-5 text-center">{{ item.quantity }}</td>
            <td class="px-4 py-5">{{ item.detail }}</td>
            <td class="px-4 py-5 text-center">{{ item.rating }}</td>
            <td class="px-4 py-5 text-right">
              <button @click="editProduct(item.id)" class="font-medium text-blue-600 dark:text-blue-500 hover:underline">Edit</button>
            </td>
            <td class="px-4 py-5 text-right">
              <button @click="deleteProduct(item.id)" class="font-medium text-red-600 dark:text-red-500 hover:underline">Hapus</button>
            </td>
          </tr>
        </tbody>
        <tbody v-else>
          <tr>
            <td colspan="9" class="text-center p-3">Tidak Ada data Yang Ditemukan</td>
          </tr>
        </tbody>
        <tbody>
          <tr>
            <td class="text-center p-3">
              <button v-if="currentPage > 1" @click="prevPage" class="bg-blue-500 hover:bg-blue-700 text-white font-bold py-1 px-2 rounded border-2 border-blue-500">Prev</button>
            </td>
            <td class="text-center p-3"></td>
            <td class="text-center p-3"></td>
            <td class="text-center p-3"></td>
            <td class="text-center p-3"></td>
            <td class="text-center p-3"></td>
            <td class="text-center p-3"></td>
            <td class="text-center p-3"></td>
            <td class="text-center p-3">
              <button v-if="currentPage < totalPages" @click="nextPage" class="bg-blue-500 hover:bg-blue-700 text-white font-bold py-1 px-2 rounded border-2 border-blue-500">Next</button>
            </td>
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
      listCategory: [],
      filter: {
        vCategory: "All Category",
        vPrice: "All Price",
        vQuantity: "All Quantity",
        vRating: "All Rating",
        vName: "",
      },
      currentPage: 1,
      itemsPerPage: 6,
    };
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
    totalPages() {
      return Math.ceil(this.dataFiltered.length / this.itemsPerPage);
    },
    paginatedData() {
      const start = (this.currentPage - 1) * this.itemsPerPage;
      const end = start + this.itemsPerPage;
      return this.dataFiltered.slice(start, end);
    },
  },
  watch: {
    dataFiltered() {
      this.currentPage = 1;
    },
  },
  methods: {
    formatRupiah(num) {
      const formatter = new Intl.NumberFormat("id-ID", {
        style: "currency",
        currency: "IDR",
      });

      return formatter.format(num);
    },
    deleteProduct(id) {
      Swal.fire({
        title: "Apakah Anda Yakin?",
        text: "Anda Tidak Dapat Mengembalikannya lagi!",
        icon: "warning",
        showCancelButton: true,
        confirmButtonColor: "#3085d6",
        cancelButtonColor: "#d33",
        confirmButtonText: "Ya",
      }).then(async (result) => {
        if (result.isConfirmed) {
          console.log("id = ", id);
          await axiosInstance
            .delete(`/api/admin/inventory/${id}`)
            .then((response) => {
              this.fetch();
              Swal.fire({
                title: "Berhasil",
                text: "Data Berhasil Dihapus",
                icon: "success",
              });
            })
            .catch((err) => {
              console.error(err);
              Swal.fire({
                title: "Gagal",
                text: "Data Gagal Dihapus",
                icon: "error",
              });
            });
        }
      });
    },
    editProduct(id) {
      const dataRow = this.data.find((item) => item.id === id);
      Swal.fire({
        title: "Mengedit Barang",
        html: `
        <div class="flex flex-col gap-5">
          <div class="flex flex-col justify-center items-left gap-3">
            <label for="name" class="text-left">Nama\t:</label>
            <input value=${dataRow.name} type="text" name="name" id="name" class="bg-inherit p-3 border-2 border-gray-300 border-solid" required>
          </div>
          <div class="flex flex-col justify-center items-left gap-3">
              <label for="category" class="text-left">Kategori\t:</label>
              <input value=${dataRow.category} type="text" name="category" id="category" class="bg-inherit p-3 border-2 border-gray-300 border-solid" required>
          </div>
          <div class="flex flex-col justify-center items-left gap-3">
            <label for="price" class="text-left">Harga\t:</label>
            <input value=${dataRow.price} type="number" name="price" id="price" class="appearance-none bg-inherit p-3 border-2 border-gray-300 border-solid" required>
          </div>
          <div class="flex flex-col justify-center items-left gap-3">
            <label for="quantity" class="text-left">Kuantitas\t:</label>
            <input value=${dataRow.quantity} type="number" name="quantity" id="quantity" class="appearance-none bg-inherit p-3 border-2 border-gray-300 border-solid" required>
          </div>
          <div class="flex flex-col justify-center items-left gap-3">
            <label for="detail" class="text-left">Detail\t:</label>
            <textarea type="text" name="detail" id="detail" rows=10 class="resize-none bg-inherit p-3 border-2 border-gray-300  border-solid" required>${dataRow.detail}</textarea>
          </div>
        </div>
  `,
        inputAttributes: {
          autocapitalize: "off",
        },
        showCancelButton: true,
        cancelButtonColor: "#F31D10",
        confirmButtonText: "Edit",
        confirmButtonColor: "#3085d6",
        showLoaderOnConfirm: true,
        preConfirm: async () => {
          const popup = Swal.getPopup();
          const name = popup.querySelector("#name").value;
          const category = popup.querySelector("#category").value;
          const price = popup.querySelector("#price").value;
          const quantity = popup.querySelector("#quantity").value;
          const detail = popup.querySelector("#detail").value;

          const errors = {};

          if (!name.trim() || name === null) {
            errors.name = "Nama Perlu Diisi";
          }

          if (!category.trim() || category === null) {
            errors.category = "Kategori Perlu Diisi";
          }

          if (!price || isNaN(Number(price)) || price < 0) {
            errors.price = "Harga Perlu Diisi";
          }

          if (!quantity || isNaN(Number(quantity)) || quantity < 0) {
            errors.quantity = "Jumlah Perlu Diisi";
          }

          if (!detail.trim() || price === null) {
            errors.detail = "Detail Barang Perlu Diisi";
          }

          if (Object.keys(errors).length > 0) {
            const errorMessage = Object.values(errors).join("<br>");
            Swal.fire({
              icon: "error",
              title: "Validation Errors",
              html: errorMessage,
              confirmButtonText: "OK",
            });
          } else {
            Swal.fire({
              title: "Apakah Kamu Yakin",
              icon: "warning",
              showCancelButton: true,
              confirmButtonColor: "#3085d6",
              cancelButtonColor: "#d33",
              confirmButtonText: "Ya",
            }).then(async (result) => {
              if (result.isConfirmed) {
                const id = dataRow.id;
                const rating = dataRow.rating;
                const data = { id, name, price, quantity, category, rating, detail };
                await axiosInstance
                  .put("/api/admin/inventory", data)
                  .then((response) => {
                    this.fetch();
                    Swal.fire({
                      title: "Berhasil",
                      text: "Data Berhasil Diedit.",
                      icon: "success",
                    });
                  })
                  .catch((err) => {
                    console.error(err);
                    Swal.fire({
                      title: "Gagal",
                      text: "Data Gagal Diedit.",
                      icon: "error",
                    });
                  });
              }
            });
          }
        },
      });
    },
    addProduct() {
      Swal.fire({
        title: "Tambahkan Barang",
        html: `
        <div class="flex flex-col gap-5">
          <div class="flex flex-col justify-center items-left gap-3">
            <label for="name" class="text-left">Nama\t:</label>
            <input type="text" name="name" id="name" class="bg-inherit p-3 border-2 border-gray-300 border-solid" required>
          </div>
          <div class="flex flex-col justify-center items-left gap-3">
              <label for="category" class="text-left">Kategori\t:</label>
              <input type="text" name="category" id="category" class="bg-inherit p-3 border-2 border-gray-300 border-solid" required>
          </div>
          <div class="flex flex-col justify-center items-left gap-3">
            <label for="price" class="text-left">Harga\t:</label>
            <input type="number" name="price" id="price" class="bg-inherit p-3 border-2 border-gray-300 border-solid" required>
          </div>
          <div class="flex flex-col justify-center items-left gap-3">
            <label for="quantity" class="text-left">Kuantitas\t:</label>
            <input type="number" name="quantity" id="quantity" class="bg-inherit p-3 border-2 border-gray-300 border-solid" required>
          </div>
          <div class="flex flex-col justify-center items-left gap-3">
              <label for="detail" class="text-left">Detail\t:</label>
              <textarea type="text" name="detail" id="detail" rows=10 class="resize-none bg-inherit p-3 border-2 border-gray-300  border-solid" required></textarea>
          </div>
        </div>
  `,
        inputAttributes: {
          autocapitalize: "off",
        },
        showCancelButton: true,
        cancelButtonColor: "#F31D10",
        confirmButtonText: "Tambah",
        confirmButtonColor: "#3085d6",
        showLoaderOnConfirm: true,
        preConfirm: async () => {
          const popup = Swal.getPopup();
          const name = popup.querySelector("#name").value;
          const category = popup.querySelector("#category").value;
          const price = popup.querySelector("#price").value;
          const quantity = popup.querySelector("#quantity").value;
          const detail = popup.querySelector("#detail").value;

          const errors = {};

          if (!name.trim() || name === null) {
            errors.name = "Nama Perlu Diisi";
          }

          if (!category.trim() || category === null) {
            errors.category = "Kategori Perlu Diisi";
          }

          if (!price || isNaN(Number(price)) || price === null) {
            errors.price = "Harga Perlu Diisi";
          }

          if (!detail.trim() || price < 0) {
            errors.detail = "Detail Barang Perlu Diisi";
          }

          if (!quantity || isNaN(Number(quantity)) || quantity < 0) {
            errors.quantity = "Jumlah Perlu Diisi";
          }

          const data = { name, price, category, quantity, detail };

          if (Object.keys(errors).length > 0) {
            const errorMessage = Object.values(errors).join("<br>");
            Swal.fire({
              icon: "error",
              title: "Validation Errors",
              html: errorMessage,
              confirmButtonText: "OK",
            });
          } else {
            Swal.fire({
              title: "Apakah Kamu Yakin",
              icon: "warning",
              showCancelButton: true,
              confirmButtonColor: "#3085d6",
              cancelButtonColor: "#d33",
              confirmButtonText: "Ya",
            }).then(async (result) => {
              if (result.isConfirmed) {
                await axiosInstance
                  .post("/api/admin/inventory", data)
                  .then((response) => {
                    console.log(response);
                    this.fetch();
                    Swal.fire({
                      title: "Berhasil",
                      text: "Data Berhasil Ditambahkan.",
                      icon: "success",
                    });
                  })
                  .catch((err) => {
                    console.error(err);
                    Swal.fire({
                      title: "Gagal",
                      text: "Data Gagal Ditambahkan.",
                      icon: "error",
                    });
                  });
              }
            });
          }
        },
      });
    },
    fetch() {
      axiosInstance
        .get(`/api/admin/inventory`)
        .then((result) => {
          this.data = result.data;
          this.dataFiltered = this.data;
          this.listCategory = [...new Set(this.data.map((product) => product.category))];
        })
        .catch((err) => {
          console.error(err);
        });
    },
    //   axiosInstance
    //     .get(url)
    //     .then((result) => {
    //       this.data = result[0].payload.data;
    //       this.dataFiltered = result[0].payload.data;
    //       this.listCategory = [...new Set(this.data.map((product) => product.category))];
    //       this.prevPage = result[0].metadata.prev;
    //       this.nextPage = result[0].metadata.next;
    //     })
    //     .catch((error) => {
    //       console.error("Error fetching data:", error);
    //     });
    // },
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
    nextPage() {
      if (this.currentPage < this.totalPages) {
        this.currentPage++;
      }
    },
    prevPage() {
      if (this.currentPage > 1) {
        this.currentPage--;
      }
    },
  },
  created() {
    this.fetch();
  },
};
</script>
