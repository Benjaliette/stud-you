import { createStore } from "vuex";

import MoviesModule from "./movies/index.js";
import UsersModule from "./users/index.js";

export default createStore({
  state() {
    return {
      firebaseConfig: {
        apiKey: process.env.VUE_APP_FIREBASE_KEY,
        authDomain: "stud-you-c57a9.firebaseapp.com",
        databaseURL:
          "https://stud-you-c57a9-default-rtdb.europe-west1.firebasedatabase.app",
        projectId: "stud-you-c57a9",
        storageBucket: "stud-you-c57a9.appspot.com",
        messagingSenderId: "51709989327",
        appId: "1:51709989327:web:49befc21808416201882ba",
      },
    };
  },
  getters: {
    firebaseConfig(state) {
      return state.firebaseConfig;
    },
  },
  mutations: {},
  actions: {},
  modules: {
    movies: MoviesModule,
    users: UsersModule,
  },
});
