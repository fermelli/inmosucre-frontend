import Vue from "vue";
import VueRouter from "vue-router";
import Home from "../views/Home/Index.vue";

Vue.use(VueRouter);

const routes = [
  {
    path: "/",
    name: "Home",
    component: Home,
  },
  {
    path: "/agencies",
    name: "Agencies",
    component: () =>
      import(/* webpackChunkName: "agencies" */ "../views/Agency/Index.vue"),
  },
  {
    path: "/properties",
    name: "Properties",
    component: () =>
      import(
        /* webpackChunkName: "properties" */ "../views/Property/Index.vue"
      ),
  },
  {
    path: "/sellers",
    name: "Sellers",
    component: () =>
      import(/* webpackChunkName: "sellers" */ "../views/Seller/Index.vue"),
  },
  {
    path: "/clients",
    name: "Clients",
    component: () =>
      import(/* webpackChunkName: "clients" */ "../views/Client/Index.vue"),
  },
];

const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes,
});

export default router;
