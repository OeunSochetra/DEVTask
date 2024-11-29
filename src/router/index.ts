import RouterName from "../constants/router-name";
import { createRouter, createWebHistory } from "vue-router";

export const router = createRouter({
  history: createWebHistory(),
  routes: [
    {
      path: "/",
      redirect: "/dev",
    },
    {
      path: "/dev",
      name: RouterName.DEV,
      component: () => import("../views/dev/index.vue"),
    },
    {
      path: "/dev/job/:id",
      name: RouterName.DETAIL,
      component: () => import("../views/dev/detail.vue"),
    },
    {
      path: "/jobs",
      name: RouterName.JOBS,
      component: () => import("../views/jobs/index.vue"),
    },
    {
      path: "/area/:id",
      name: RouterName.AREA,
      component: () => import("../views/area/index.vue"),
    },
    {
      path: "/post",
      name: RouterName.POST,
      component: () => import("../views/post/index.vue"),
    },
    {
      path: "/privacy-policy",
      name: RouterName.PRIVATE_POLICY,
      component: () => import("../views/privacyPolicy/index.vue"),
    },
  ],
});

export default router;
