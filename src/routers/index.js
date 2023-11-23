import { createRouter, createWebHistory } from "vue-router";

import homepage from "../view/home/index.vue";
import pesanan from "../view/pesanan/index.vue";
import notification from "../view/notification/index.vue";
import profil from "../view/profil/index.vue";
import setting from "../view/setting/index.vue";
import product from "../view/product/index.vue";

const routes = [
  {
    path: "/",
    name: "homepage",
    component: homepage,
  },
  {
    path: "/pesanan",
    name: "pesanan",
    component: pesanan,
  },
  {
    path: "/notification",
    name: "notification",
    component: notification,
  },
  {
    path: "/profil",
    name: "profil",
    component: profil,
  },
  {
    path: "/setting",
    name: "setting",
    component: setting,
  },
  {
    path: "/product",
    name: "product",
    component: product,
  },
];

const router = createRouter({
  routes,
  history: createWebHistory(),
});

export default router;
