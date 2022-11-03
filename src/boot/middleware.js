import { boot } from "quasar/wrappers";
import { useAuthStore, useUserStore } from "stores/all";

export default boot(async ({ router }) => {
  // Маршруты для гостей
  const guestAuthRoutes = [
    "login",
    "registration",
    "forgotPassword",
    "passwordReset",
  ];

  router.beforeEach(async (to) => {
    const authStore = useAuthStore();
    const user = await authStore.getAuthUser();
    if (user) {
      const userStore = useUserStore();
      await userStore.getCurrentUser(user.uid);
    }
    if (to.meta.requiresAuth && !user) {
      // this route requires auth, check if logged in
      // if not, redirect to login page.
      return {
        path: "/login",
        // save the location we were at to come back later
        query: { redirect: to.fullPath },
      };
    }

    if (user && guestAuthRoutes.includes(to.name)) {
      return {
        path: "/",
      };
    }
  });
});
