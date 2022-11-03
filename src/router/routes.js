import { routes as authRoutes } from "src/modules/auth";
import { routes as controlsRoutes } from "src/modules/controls";

const routes = [
  {
    path: "/",
    component: () => import("layouts/MainLayout.vue"),
  },

  // Always leave this as last one,
  // but you can also remove it
  {
    path: "/:catchAll(.*)*",
    component: () => import("pages/ErrorNotFound.vue"),
  },
];

export default [...routes, ...authRoutes, ...controlsRoutes];
