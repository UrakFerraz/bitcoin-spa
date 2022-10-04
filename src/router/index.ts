import { createRouter, createWebHistory } from "vue-router";

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: "/",
      redirect: "/coin/bitcoin",
    },
    {
      path: "/about",
      name: "about",
      component: () => import("../views/AboutView.vue"),
    },
    {
      path: "/coin/:id",
      name: "coin",
      component: () => import("../views/CoinView.vue"),
      props: true,
    },
  ],
});

export default router;
