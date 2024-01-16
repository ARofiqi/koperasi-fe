<template>
  <div>
    <div class="py-5">
      <button @click="addProduct" class="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">tambah product</button>
    </div>
    <div class="relative overflow-x-auto shadow-md sm:rounded-lg">
      <table class="w-full text-sm text-left rtl:text-right text-gray-500 dark:text-gray-400">
        <thead class="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
          <tr>
            <th scope="col" class="px-6 py-3">Product name</th>
            <th scope="col" class="px-6 py-3">
              <select name="category" id="category" class="bg-inherit">
                <option value="All Category">All Category</option>
                <option value="sembako">sembako</option>
              </select>
            </th>
            <th scope="col" class="px-6 py-3">
              <div class="flex items-center">
                <select name="price" id="price" class="bg-inherit">
                  <option value="">All price</option>
                  <option value="higher">higher</option>
                  <option value="lower">lower</option>
                </select>
              </div>
            </th>
            <th scope="col" class="px-6 py-3">
              <div class="flex items-center">Quantity</div>
            </th>
            <th scope="col" class="px-6 py-3">
              <span class="sr-only">Edit</span>
            </th>
            <th scope="col" class="px-6 py-3">
              <span class="sr-only">Hapus</span>
            </th>
          </tr>
        </thead>
        <tbody>
          <tr v-for="item in data" :key="item" class="bg-white border-b dark:bg-gray-800 dark:border-gray-700">
            <th scope="row" class="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white">{{ item.name }}</th>
            <td class="px-6 py-4">{{ item.category }}</td>
            <td class="px-6 py-4">{{ formatRupiah(item.price) }}</td>
            <td class="px-6 py-4">{{ item.quantity }}</td>
            <td class="px-6 py-4 text-right">
              <button @click="editProduct" class="font-medium text-blue-600 dark:text-blue-500 hover:underline">Edit</button>
            </td>
            <td class="px-6 py-4 text-right">
              <button @click="deleteProduct" class="font-medium text-red-600 dark:text-red-500 hover:underline">Hapus</button>
            </td>
          </tr>
        </tbody>
      </table>
    </div>
  </div>
</template>

<script>
import dataProduct from "@/assets/dataProduct";
import Swal from "sweetalert2";

export default {
  data() {
    return {
      data: dataProduct,
      dataAdd: { nama: null, category: null, price: 0 },
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
                <label for="name" class="w-1/2">Nama</label>
                <input type="text" name="name" id="name" class="swal2-input w-1/2" >
            </div>
            <div>
                <label for="category" class="w-1/2">Kategori</label>
                <input type="text" name="category" id="category" class="swal2-input w-1/2" >
            </div>
            <div>
                <label for="price" class="w-1/2">Harga</label>
                <input type="text" name="price" id="price" class="swal2-input w-1/2" >
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
          const result = { nama: name, kategori: category, harga: price };
          console.log(result);
        },
      });
    },
  },
};
</script>
