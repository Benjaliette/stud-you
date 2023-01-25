import { createStore } from "vuex";

import MoviesModule from "./movies/index.js";
import UsersModule from "./users/index.js";

export default createStore({
  state: {},
  getters: {},
  mutations: {},
  actions: {},
  modules: {
    movies: MoviesModule,
    users: UsersModule,
  },
});
