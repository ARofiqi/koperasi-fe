<template>
  <div>
    <button v-if="isInstalled" @click="downloadApp">Download Aplikasi</button>
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
        this.deferredPrompt.prompt();
        this.deferredPrompt.userChoice.then((choiceResult) => {
          if (choiceResult.outcome === "accepted") {
            console.log("Aplikasi diinstal");
          } else {
            console.log("Pemasangan dibatalkan");
          }
          this.deferredPrompt = null;
        });
      }
    },
    openApp() {
      alert("Aplikasi Dibuka!");
    },
    checkInstallability() {
      window.addEventListener("beforeinstallprompt", (event) => {
        event.preventDefault();
        this.deferredPrompt = event;
        this.isInstalled = false;
      });
      window.addEventListener("appinstalled", () => {
        this.isInstalled = true;
      });
    },
  },
  mounted() {
    if (window.matchMedia("(display-mode: standalone)").matches) {
      this.isInstalled = true;
    } else {
      this.checkInstallability();
    }
  },
};
</script>
