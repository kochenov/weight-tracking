export default [
  {
    path: "",
    component: () => import("layouts/MainLayout.vue"),
    children: [
      {
        path: "",
        name: "form",
        component: () => import("./pages/IndexPage.vue"),
      },
    ],
  },
];
