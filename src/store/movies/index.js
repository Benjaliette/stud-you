import MoviesGetters from "./getters.js";
import MoviesMutations from "./mutations.js";
import MoviesActions from "./actions.js";

export default {
  namespaced: true,
  state() {
    return {
      movies: [],
    };
  },
  getters: MoviesGetters,
  mutations: MoviesMutations,
  actions: MoviesActions,
};
