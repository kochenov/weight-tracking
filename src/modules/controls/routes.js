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
      {
        path: "/result/:currentAnimal",
        name: "resultOneAnimal",
        component: () => import("./pages/FullPage.vue"),
      },
      {
        path: "/stat/:animal/:part",
        name: "stat",
        component: () => import("./pages/StatPage.vue"),
      },
    ],
  },
];
