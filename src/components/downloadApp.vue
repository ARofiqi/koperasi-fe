<template>
  <div>
    <button v-if="!isInstalled" @click="downloadApp">Download Aplikasi</button>
    <button v-else @click="openApp">Buka Aplikasi</button>
  </div>
</template>

<script>
export default {
  data() {
    return {
      isInstalled: false,
      deferredPrompt: null,
    };
  },
  methods: {
    downloadApp() {
      if (this.deferredPrompt) {
        // Memanggil prompt untuk menginstal aplikasi
        this.deferredPrompt.prompt();

        // Menunggu hasil prompt
        this.deferredPrompt.userChoice.then((choiceResult) => {
          if (choiceResult.outcome === "accepted") {
            // Pengguna memilih menginstal aplikasi
            console.log("Aplikasi diinstal");
          } else {
            // Pengguna memilih tidak menginstal aplikasi
            console.log("Pemasangan dibatalkan");
          }

          // Setelah prompt selesai, atur kembali deferredPrompt menjadi null
          this.deferredPrompt = null;
        });
      }
    },
    openApp() {
      // Logika untuk membuka aplikasi
      alert("Aplikasi Dibuka!");
    },
    checkInstallability() {
      // Event listener untuk menyimpan prompt untuk instalasi
      window.addEventListener("beforeinstallprompt", (event) => {
        // Mencegah prompt instalasi default
        event.preventDefault();

        // Menyimpan event prompt untuk digunakan nanti
        this.deferredPrompt = event;

        // Setel state untuk menampilkan tombol "Download Aplikasi"
        this.isInstalled = false;
      });

      // Event listener untuk memantau status instalasi aplikasi
      window.addEventListener("appinstalled", () => {
        // Setel state untuk menampilkan tombol "Buka Aplikasi"
        this.isInstalled = true;
      });
    },
  },
  mounted() {
    // Mengecek apakah aplikasi sudah diinstal sebelumnya
    if (window.matchMedia("(display-mode: standalone)").matches) {
      this.isInstalled = true;
    } else {
      // Memanggil fungsi untuk memeriksa kemampuan instalasi
      this.checkInstallability();
    }
  },
};
</script>
