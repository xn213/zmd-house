import { createRouter, createWebHistory, createWebHashHistory } from "vue-router";

const router = createRouter({
  history: createWebHashHistory(),
  routes: [
    {
      path: "/",
      name: "home",
      redirect: "/resoldRoom",
    },
    {
      path: "/resoldRoom",
      name: "resoldRoom",
      component: () => import("@/views/resoldRoom/index.vue"),
    },
  ],
});

export default router;
