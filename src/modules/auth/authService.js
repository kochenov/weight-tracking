import {
  signInWithEmailAndPassword,
  createUserWithEmailAndPassword,
  sendPasswordResetEmail,
} from "firebase/auth";
import { auth } from "boot/firebase";

export default {
  async login(payload) {
    return await signInWithEmailAndPassword(
      auth,
      payload.email,
      payload.password
    );
  },
  async logout() {
    return await auth.signOut();
  },
  async forgotPassword(payload) {
    await api.get("/sanctum/csrf-cookie");
    return api.post("/forgot-password", payload);
  },
  // Получает текущего пользователя
  async getAuthUser() {
    return new Promise((resolve, reject) => {
      const unsubscribe = auth.onAuthStateChanged((user) => {
        unsubscribe();
        resolve(user);
      }, reject);
    });
  },
  async resetPassword(email) {
    return await sendPasswordResetEmail(auth, email);
  },
  async registerUser(payload) {
    return await createUserWithEmailAndPassword(
      auth,
      payload.email,
      payload.password
    );
  },
  sendVerification(payload) {
    return api.post("/email/verification-notification", payload);
  },
};
