import ADUser from "@/view/admin/view/user/index.vue";
import ADTransaction from "@/view/admin/view/transaction/index.vue";
import ADCashflow from "@/view/admin/view/cashflow/index.vue";
import ADInventory from "@/view/admin/view/inventory/index.vue";

import adminDashboard from "@/view/admin/dashboard/index.vue";

import ADLogin from "@/view/admin/view/login/index.vue";

const dashboard = [
  {
    path: "/dashboard",
    name: "adminDashboard",
    components: {
      main: adminDashboard,
    },
    children: [
      {
        path: "user",
        name: "ADUser",
        components: {
          main: ADUser,
        },
      },
      {
        path: "cashflow",
        name: "ADCashflow",
        components: {
          main: ADCashflow,
        },
      },
      {
        path: "transaction",
        name: "ADTransaction",
        components: {
          main: ADTransaction,
        },
      },
      {
        path: "inventory",
        name: "ADInventory",
        components: {
          main: ADInventory,
        },
      },
    ],
  },
  {
    path: "/dashboard/login",
    name: "ADLogin",
    components: {
      main: ADLogin,
    },
  },
];

export default dashboard;
