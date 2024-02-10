<template>
  <div id="card">
    <div class="h-auto w-2/5 p-5 relative flex justify-center items-center" @click="goToProductDetail">
      <img :src="'/foto produk/' + name + '.png'" alt="foto produk" class="absolute" @error="handleImageError" />
    </div>
    <div class="w-3/5 py-2 px-3 flex flex-col justify-between gap-2">
      <h2 class="text-lg font-semibold" @click="goToProductDetail">{{ this.name }}</h2>
      <p class="text-gray-500 font-medium">{{ this.category }}</p>
      <div class="flex justify-between py-1 items-center">
        <p class="text-gray-600 font-medium">{{ formatRupiah(this.price) }}</p>
        <div>
          <font-awesome-icon :icon="['fas', 'cart-shopping']" class="w-5 h-5 inline-block bg-green-500 text-white text-xl p-2" @click="addToCart" />
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import Swal from "sweetalert2";
import axiosInstance from "../axios";

export default {
  name: "Card",
  props: {
    id: {
      type: Number,
    },
    name: {
      type: String,
      default: "unknow",
    },
    price: {
      type: Number,
      default: 0,
    },
    category: {
      type: String,
      default: "Unknows",
    },
  },
  methods: {
    addToCart() {
      const token = localStorage.getItem("token");
      Swal.fire({
        title: "Masukan Jumlah Barang",
        html: `
        <div class="flex flex-col gap-5">
          <div class="flex flex-col justify-center items-left gap-3">
            <input type="number" name="quantity" id="quantity" class="bg-inherit p-3 border-2 border-gray-300 border-solid" required>
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
          const quantity = popup.querySelector("#quantity").value;

          const errors = {};

          if (!quantity || isNaN(Number(quantity)) || quantity < 0) {
            errors.quantity = "Jumlah Perlu Diisi";
          }

          axiosInstance
            .post("/api/cart", {
              headers: {
                Authorization: `Bearer ${token}`,
                product_id: this.id,
                quantity: quantity,
              },
            })
            .then((result) => {
              const Toast = Swal.mixin({
                toast: true,
                position: "top-end",
                showConfirmButton: false,
                timer: 2000,
                timerProgressBar: false,
              });
              Toast.fire({
                icon: "success",
                title: "Berhasil Menambahkan Produk",
              });
            })
            .catch(() => {
              const Toast = Swal.mixin({
                toast: true,
                position: "top-end",
                showConfirmButton: false,
                timer: 2000,
                timerProgressBar: false,
              });
              Toast.fire({
                icon: "error",
                title: "Gagal Menambahkan Produk",
              });
            });
        },
      });
    },
    handleImageError(event) {
      event.target.src = "/foto produk/unknow.png";
    },
    formatRupiah(num) {
      const formatter = new Intl.NumberFormat("id-ID", {
        style: "currency",
        currency: "IDR",
      });

      return formatter.format(num);
    },
    goToProductDetail() {
      this.$router.push({ name: "product", params: { id: this.id } });
    },
  },
};
</script>

<style scoped>
#card {
  background: white;
  box-shadow: 0 0 5px rgb(209, 209, 209);
  border: 1px rgb(209, 209, 209) solid;
  border-radius: 10px;

  display: flex;
  overflow: hidden;
}

.border {
  border: black 1px solid;
}
</style>
