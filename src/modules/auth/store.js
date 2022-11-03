import { defineStore } from "pinia";
//import { getError } from "../utils/helpers";
import AuthService from "./authService";
import { useUserStore } from "stores/all";
import { Notify } from "quasar";

export const useAuthStore = defineStore("authStore", {
  state: () => ({
    user: null,
    error: null,
    loading: false,
  }),

  actions: {
    async login(payload) {
      try {
        const userCreditals = await AuthService.login(payload);
        this.user = userCreditals;
        return userCreditals;
      } catch (error) {
        Notify.create({ message: error.code });
      }
    },
    async logout() {
      try {
        const userStore = useUserStore();
        await AuthService.logout();
        this.user = null;
        userStore.user = null;
        this.router.push({ path: "/login" });
      } catch (error) {
        this.user = null;
        this.error = getError(error);
      }
    },
    // Получение текущего пользователя
    async getAuthUser() {
      try {
        // Устанавливаю флаг загрузки на активный
        this.loading = true;
        //
        this.user = await AuthService.getAuthUser();

        this.loading = false;
        return this.user;
      } catch (error) {
        // обнуляю данные
        this.user = null;
        // флаг загрузки
        this.loading = false;
        // вывод ошибки
        this.error = getError(error);
      }
    },
    async registration(payload) {
      try {
        const userStore = useUserStore();
        const userCreditals = await AuthService.registerUser(payload);
        this.user = userCreditals.user;
        await userStore.createUser(this.user.uid, payload);
        return this.user;
      } catch (error) {
        Notify.create({ message: error.code });
      }
    },
    async resetPassword(email) {
      try {
        const status = await AuthService.resetPassword(email);
        Notify.create({
          message: "Для восстановления аккаунта проверте ваш почтовый ящик",
        });
      } catch (error) {
        Notify.create({ message: error.code });
      }
    },
  },

  getters: {
    loggedIn: (state) => !!state.user,
    isAdmin: (state) => (state.user ? state.user.isAdmin : false),
  },
});
