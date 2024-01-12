import { createRouter, createWebHistory } from "vue-router";

import navbar from "@/components/navbar.vue";

import homepage from "@/view/home/index.vue";

import forum from "@/view/forum/index.vue";
import detailForum from "@/view/forum/detail.vue";

import setting from "@/view/setting/index.vue";
import product from "@/view/product/index.vue";
import cart from "@/view/cart/index.vue";
import loginPage from "@/view/login/index.vue";
import signupPage from "@/view/signup/index.vue";

import profil from "@/view/profil/index.vue";
import profilEdit from "@/view/profil/edit.vue";

import settingProfil from "@/view/setting/profil.vue";
import settingLocation from "@/view/setting/location.vue";
import settingShare from "@/view/setting/share.vue";
import settingSupport from "@/view/setting/support.vue";
import settingLogout from "@/view/setting/logout.vue";

import adminDashboard from "@/view/admin/dashboard/index.vue";
import navbarAdmin from "@/components/admin/navbar.vue";
import ADUser from "@/view/admin/view/user/index.vue";
import ADTransaction from "@/view/admin/view/transaction/index.vue";
import ADCashflow from "@/view/admin/view/cashflow/index.vue";
import ADInventory from "@/view/admin/view/inventory/index.vue";

const routes = [
  {
    path: "/",
    name: "homepage",
    components: {
      main: homepage,
      navbar: navbar,
    },
  },
  {
    path: "/login",
    name: "login",
    components: {
      main: loginPage,
    },
  },
  {
    path: "/signup",
    name: "signup",
    components: {
      main: signupPage,
    },
  },
  {
    path: "/forum",
    name: "forum",
    components: {
      main: forum,
      navbar: navbar,
    },
  },
  {
    path: "/forum/:id",
    name: "detailForum",
    components: {
      main: detailForum,
      navbar: navbar,
    },
  },
  {
    path: "/profil/:id",
    name: "profil",
    components: {
      main: profil,
      navbar: navbar,
    },
  },
  {
    path: "/profil/:id/edit",
    name: "profilEdit",
    components: {
      main: profilEdit,
      navbar: navbar,
    },
  },
  {
    path: "/setting",
    name: "setting",
    components: {
      main: setting,
    },
  },
  {
    path: "/setting/profil/:id",
    name: "settingProfil",
    components: {
      main: settingProfil,
    },
  },
  {
    path: "/setting/location",
    name: "settingLocation",
    components: {
      main: settingLocation,
    },
  },
  {
    path: "/setting/logout",
    name: "settingLogout",
    components: {
      main: settingLogout,
    },
  },
  {
    path: "/setting/share",
    name: "settingShare",
    components: {
      main: settingShare,
    },
  },
  {
    path: "/setting/support",
    name: "settingSupport",
    components: {
      main: settingSupport,
    },
  },
  {
    path: "/product/:id",
    name: "product",
    components: {
      main: product,
      navbar: navbar,
    },
  },
  {
    path: "/cart",
    name: "cart",
    components: {
      main: cart,
      navbar: navbar,
    },
  },
  {
    path: "/dashboard",
    name: "adminDashboard",
    components: {
      main: adminDashboard,
    },
    children: [
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
    ],
  },
];

const router = createRouter({
  routes,
  history: createWebHistory(),
});

export default router;
