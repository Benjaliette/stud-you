import {
  getAuth,
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
} from "firebase/auth";
import { initializeApp } from "firebase/app";
import axios from "axios";

export default {
  async signup(context, data) {
    try {
      const app = await initializeApp(context.rootGetters.firebaseConfig);
      const auth = await getAuth(app);
      const response = await createUserWithEmailAndPassword(
        auth,
        data.email,
        data.password
      );
      if (response) {
        const userResponse = response.user;
        const user = {
          id: userResponse.uid,
          email: userResponse.email,
          accessToken: userResponse.accessToken,
          firstName: "",
          lastName: "",
          username: data.username,
          description: "",
          profilePicture: require("@/assets/default_avatar.png"),
          watchlistMovies: [],
        };
        context.commit("addUser", { user, app });
        context.commit("logSuccess", user);
      }
    } catch (error) {
      const errorCode = error.code;
      context.commit("logFailure");
      throw error.code;
    }
  },
  async login(context, data) {
    try {
      const app = await initializeApp(context.rootGetters.firebaseConfig);
      const auth = await getAuth(app);
      const userResponse = await signInWithEmailAndPassword(
        auth,
        data.email,
        data.password
      );
      if (userResponse) {
        axios(
          `https://stud-you-c57a9-default-rtdb.europe-west1.firebasedatabase.app/users/${userResponse.user.uid}.json`
        ).then((response) => context.commit("logSuccess", response.data));
      }
    } catch (error) {
      const errorCode = error.code;
      context.commit("logFailure");
      throw errorCode;
    }
  },
  logout(context) {
    context.commit("logout");
  },
};
