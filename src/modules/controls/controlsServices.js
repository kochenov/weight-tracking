import { db } from "boot/firebase";
import { ref, child, push, update, onValue } from "firebase/database";

export default {
  /**
   * Добавление животных для всех пользователей, доступно только админу
   * @param {*} payload {label, word1, word2, word5}
   */
  async addAnimal(payload) {
    //const newPostKey = push(child(ref(db), "animals")).key;
    const updates = {};
    updates["/animals/" + payload.label] = payload;
    await update(ref(db), updates);
  },
  /**
   * Добавление животных для всех пользователей
   * @param {*} payload {label, word1, word2, word5}
   */
  async addUserAnimal(payload, uid) {
    //const newPostKey = push(child(ref(db), "animals")).key;
    const updates = {};
    updates["users/" + uid + "/animals/meta/" + payload.label] = payload;
    await update(ref(db), updates);
  },

  async addHistoryVes(payload) {
    //const newPostKey = push(child(ref(db), "animals/")).key;
    const data = {
      animal: payload.animal,
      days: payload.days,
      count: payload.count,
      scope: payload.scope,
    };
    const updates = {};
    updates[
      "/animals-history/" +
        payload.user +
        "/" +
        payload.animal.label +
        "/" +
        payload.days
    ] = data;
    await update(ref(db), updates);
  },
  /**
   *
   * @param {*} uid id пользователя
   * @param {*} animalLabel название животного
   * @returns
   */
  async getListHistory(uid, animalLabel) {
    const dbRef = ref(db, "animals-history/" + uid + "/" + animalLabel);

    try {
      let data = [];
      let option = [];
      let series = [];
      await onValue(
        dbRef,
        (snapshot) => {
          snapshot.forEach((childSnapshot) => {
            const childKey = childSnapshot.key;
            const childData = childSnapshot.val();
            data.push(childData);
            option.push(Number(childData.days) + " дней");
            series.push(Number(childData.scope));
            /* console.log("key", childKey);
            console.log("value", childData); */
          });
        },
        {
          onlyOnce: true,
        }
      );
      return { data, option, series };
    } catch (error) {
      console.log(error);
    }
  },

  async addPart(payload, uid, nameAnimal) {
    const newPostKey = push(
      child(
        ref(db),
        "users/" + uid + "/animals/" + nameAnimal + "/animal-parts/"
      )
    ).key;
    const updates = {};
    updates[
      "users/" + uid + "/animals/" + nameAnimal + "/animal-parts/" + newPostKey
    ] = payload;
    await update(ref(db), updates);
  },

  async getListParts(uid, nameAnimal) {
    const dbRef = ref(
      db,
      "users/" + uid + "/animals/" + nameAnimal + "/animal-parts/"
    );

    try {
      let data = [];
      await onValue(
        dbRef,
        (snapshot) => {
          snapshot.forEach((childSnapshot) => {
            const childKey = childSnapshot.key;
            const childData = childSnapshot.val();

            data.push({ id: childKey, ...childData });
          });
        },
        {
          onlyOnce: true,
        }
      );

      return data;
    } catch (error) {}
  },
};
