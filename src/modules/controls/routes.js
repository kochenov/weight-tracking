export default [
  {
    path: "",
    meta: {
      requiresAuth: true,
    },
    component: () => import("layouts/MainLayout.vue"),
    children: [
      {
        path: "",
        name: "form",
        component: () => import("./pages/IndexPage.vue"),
      },
      {
        path: "/result-all",
        name: "listAll",
        component: () => import("./pages/ListPage.vue"),
      },
    ],
  },
];
