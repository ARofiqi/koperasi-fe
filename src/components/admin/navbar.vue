<template>
  <div class="bg-primary w-64 h-screen fixed text-white">
    <div class="flex p-6 gap-5 items-center">
      <img src="/logo.png" alt="" class="w-8 h-8" />
      <div class="font-semibold">
        <h2>Dashboard Admin</h2>
        <p>Koperasi Bahagia</p>
      </div>
    </div>
    <nav class="flex flex-col gap-10 mt-20 font-semibold">
      <router-link :to="{ name: 'ADUser' }" :class="{ active: isActive('/dashboard/user') }" class="px-6 py-3">User</router-link>
      <router-link :to="{ name: 'ADTransaction' }" :class="{ active: isActive('/dashboard/transaction') }" class="px-6 py-3">Transaction</router-link>
      <router-link :to="{ name: 'ADInventory' }" :class="{ active: isActive('/dashboard/inventory') }" class="px-6 py-3">Inventory</router-link>
      <router-link :to="{ name: 'ADCashflow' }" :class="{ active: isActive('/dashboard/cashflow') }" class="px-6 py-3">Cashflow</router-link>
    </nav>
  </div>
</template>

<script>
export default {
  methods: {
    isActive(path) {
      return this.$route.path.startsWith(path);
    },
  },
};
</script>

<style scoped>
.active {
  --tw-bg-opacity: 1;
  background-color: rgb(147 197 253 / var(--tw-bg-opacity));
}
</style>
