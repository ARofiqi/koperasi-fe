import { createRouter, createWebHistory } from "vue-router";

import navbar from "@/components/navbar.vue";

import homepage from "@/view/home/index.vue";

import forum from "@/view/forum/index.vue";
import detailForum from "@/view/forum/detail.vue";

import product from "@/view/product/index.vue";
import cart from "@/view/cart/index.vue";
import checkout from "@/view/cart/checkout.vue";
import loginPage from "@/view/login/index.vue";
import signupPage from "@/view/signup/index.vue";

import dashboard from "./admin.route";
import setting from "./setting.route";
import user from "./user.route";

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
    path: "/checkout",
    name: "checkout",
    components: {
      main: checkout,
    },
  },
  ...user,
  ...setting,
  ...dashboard,
];

const router = createRouter({
  routes,
  history: createWebHistory(),
});

export default router;
