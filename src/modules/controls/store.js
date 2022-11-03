import { defineStore } from "pinia";
import { Notify } from "quasar";
import { useAuthStore } from "stores/all";
import { useUserStore } from "stores/all";
import { db } from "boot/firebase";
import { ref, child, push, update, onValue } from "firebase/database";
import { markRaw, toRaw } from "vue";

export const useControlStore = defineStore("controlStore", {
  state: () => ({
    currentAnimal: null, // Выбранное для расчёта животное
    currentPart: null, // Выбранная партия
    allAnimals: [], // список всех животных
    allParts: [], // список всех партий
    countAnimals: null, // Количество животных
    oldAnimals: null, // Восраст животных
    midleVes: null, // средний вес зверей текущего расчёта
    allVes: [], // Вес всех животных
    step: 1, // Текущий шаг расчётов
    tempOnResult: null, // Промежуточные данные для первого отображения графика (Животное, Партия)
    resultGraphOptions: [], // Опции для гафафика
    resultGraphSeries: [], // Вес
    resultGraph: [], // Общий результат
    allResults: [], // Все результаты , для всех животных
    listPartsResult: [], // Список партий, конкретного животного, если есть расчёты
    error: null,
    loading: false,
  }),

  actions: {
    /**
     * Получить системные + пользовательские списки животных
     */
    async getSistemAnimals() {
      const dbRef = ref(db, "animals");
      try {
        await onValue(dbRef, (snapshot) => {
          snapshot.forEach((childSnapshot) => {
            //const childKey = childSnapshot.key;
            const childData = childSnapshot.val();
            this.allAnimals.push(childData);
          });
        });
        await this.getUserAmimals();
      } catch (error) {
        console.log(error);
      }
    },
    // Пользовательские списки животных
    async getUserAmimals() {
      const authStore = useAuthStore();

      const dbRef = ref(db, "users/" + authStore.user.uid + "/animals/meta");

      try {
        await onValue(dbRef, (snapshot) => {
          snapshot.forEach((childSnapshot) => {
            //const childKey = childSnapshot.key;
            const childData = childSnapshot.val();
            const isInclude = this.allAnimals.every(
              (v) => v.label !== childData.label
            );
            if (isInclude) {
              this.allAnimals.push(childData);
            }
          });
        });
      } catch (error) {
        console.log(error);
      }
    },
    // Добавить новое животное в БД
    async addAnimals(payload) {
      const authStore = useAuthStore();
      const userStore = useUserStore();
      try {
        const updates = {};
        if (userStore.user && userStore.user.admin) {
          updates["/animals/" + payload.label] = payload;
          await update(ref(db), updates);
        } else {
          updates[
            "users/" + authStore.user.uid + "/animals/meta/" + payload.label
          ] = payload;
          await update(ref(db), updates);
        }
        const isInclude = this.allAnimals.every(
          (v) => v.label !== payload.label
        );
        if (isInclude) {
          this.allAnimals.push(payload);
        }
        Notify.create({
          message: "Новое животное успешно добавлено!",
          color: "green",
        });
      } catch (error) {
        console.log(error);
      }
    },
    /**
     * Получить список партий выбранного животного, конкретного пользователя
     */
    async getListParts() {
      const authStore = useAuthStore();
      const dbRef = ref(
        db,
        "users/" +
          authStore.user.uid +
          "/animals/" +
          this.currentAnimal.label +
          "/animal-parts/"
      );
      this.allParts = [];
      try {
        await onValue(dbRef, (snapshot) => {
          snapshot.forEach((childSnapshot) => {
            const childKey = childSnapshot.key;
            const childData = childSnapshot.val();
            this.allParts.push({ id: childKey, ...childData });
          });
        });
      } catch (error) {
        console.log(error);
      }
    },
    /**
     * Добавление новой партии животных
     * @param {*} payload
     */
    async addPart(payload) {
      const authStore = useAuthStore();
      this.allParts = [];
      const newPostKey = push(
        child(
          ref(db),
          "users/" +
            authStore.user.uid +
            "/animals/" +
            this.currentAnimal.label +
            "/animal-parts/"
        )
      ).key;
      const updates = {};
      updates[
        "users/" +
          authStore.user.uid +
          "/animals/" +
          this.currentAnimal.label +
          "/animal-parts/" +
          newPostKey
      ] = payload;
      await update(ref(db), updates);
    },
    /**
     * Сохранение расчётов в БД
     */
    async addHistoryVes() {
      const authStore = useAuthStore();
      const data = {
        animal: this.currentAnimal,
        part: this.currentPart.label,
        days: this.oldAnimals,
        count: this.countAnimals,
        scope: this.midleVes,
        allVes: this.allVes,
      };
      const updates = {};
      updates[
        "/animals-history/" +
          authStore.user.uid +
          "/" +
          this.currentAnimal.label +
          "/" +
          this.currentPart.label +
          "/" +
          this.oldAnimals
      ] = data;
      await update(ref(db), updates);
    },
    /**
     * Возвращает список веса для графика
     * @param {*} animal Название животного
     * @param {*} part  Название партии
     *
     */
    async getListHistory(animal, part) {
      return new Promise((resolve) => {
        const authStore = useAuthStore();
        const dbRef = ref(
          db,
          "animals-history/" + authStore.user.uid + "/" + animal + "/" + part
        );

        this.resultGraphOptions = [];
        this.resultGraphSeries = [];
        this.currentAnimal = null;
        onValue(dbRef, (snapshot) => {
          snapshot.forEach((childSnapshot) => {
            const childKey = childSnapshot.key;
            const childData = childSnapshot.val();
            this.resultGraph.push(childData);
            if (!this.currentAnimal) {
              this.currentAnimal = childData.animal;
            }
            this.resultGraphOptions.push(childData.scope);
            this.resultGraphSeries.push({
              x: Number(childKey) + " дней",
              y: Number(childData.scope),
            });
          });
        });

        resolve(true);
      });
    },

    async getListAllResult() {
      const authStore = useAuthStore();
      const dbRef = ref(db, "animals-history/" + authStore.user.uid + "/");
      this.allResults = [];
      try {
        await onValue(dbRef, (snapshot) => {
          snapshot.forEach((childSnapshot) => {
            const childKey = childSnapshot.key;
            const childData = childSnapshot.val();
            this.allResults.push({
              animal: childKey,
              parts: childData,
            });
          });
        });
      } catch (error) {
        console.log(error);
      }
    },
  },

  getters: {
    //getCurrentAnimal: (state) => state.resultGraph[0].animal,
    /*isAdmin: (state) => (state.user ? state.user.isAdmin : false), */
  },
});
