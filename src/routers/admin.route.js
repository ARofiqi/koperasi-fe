import navbarAdmin from "@/components/admin/navbar.vue";
import ADUser from "@/view/admin/view/user/index.vue";
import ADTransaction from "@/view/admin/view/transaction/index.vue";
import ADCashflow from "@/view/admin/view/cashflow/index.vue";
import ADInventory from "@/view/admin/view/inventory/index.vue";

const dashboard = [
  {
    path: "/dashboard/user",
    name: "ADUser",
    components: {
      main: ADUser,
      navbar: navbarAdmin,
    },
  },
  {
    path: "/dashboard/cashflow",
    name: "ADCashflow",
    components: {
      main: ADCashflow,
      navbar: navbarAdmin,
    },
  },
  {
    path: "/dashboard/transaction",
    name: "ADTransaction",
    components: {
      main: ADTransaction,
      navbar: navbarAdmin,
    },
  },
  {
    path: "/dashboard/inventory",
    name: "ADInventory",
    components: {
      main: ADInventory,
      navbar: navbarAdmin,
    },
  },
];

export default dashboard;
