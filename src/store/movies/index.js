import MoviesGetters from "./getters.js";
import MoviesMutations from "./mutations.js";
import MoviesActions from "./actions.js";

export default {
  namespaced: true,
  state() {
    return {
      movies: [],
      searchResults: [],
    };
  },
  getters: MoviesGetters,
  mutations: MoviesMutations,
  actions: MoviesActions,
};
