import { createRouter, createWebHistory } from "vue-router";

import homepage from "@/view/home/index.vue";
import notification from "@/view/notification/index.vue";
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

const routes = [
  {
    path: "/",
    name: "homepage",
    component: homepage,
  },
  {
    path: "/login",
    name: "login",
    component: loginPage,
  },
  {
    path: "/signup",
    name: "signup",
    component: signupPage,
  },
  {
    path: "/notification",
    name: "notification",
    component: notification,
  },
  {
    path: "/profil/:id",
    name: "profil",
    component: profil,
  },
  {
    path: "/profil/:id/edit",
    name: "profilEdit",
    component: profilEdit,
  },
  {
    path: "/setting",
    name: "setting",
    component: setting,
  },
  {
    path: "/setting/profil/:id",
    name: "settingProfil",
    component: settingProfil,
  },
  {
    path: "/setting/location",
    name: "settingLocation",
    component: settingLocation,
  },
  {
    path: "/setting/logout",
    name: "settingLogout",
    component: settingLogout,
  },
  {
    path: "/setting/share",
    name: "settingShare",
    component: settingShare,
  },
  {
    path: "/setting/support",
    name: "settingSupport",
    component: settingSupport,
  },
  {
    path: "/product/:id",
    name: "product",
    component: product,
  },
  {
    path: "/cart",
    name: "cart",
    component: cart,
  },
];

const router = createRouter({
  routes,
  history: createWebHistory(),
});

export default router;
