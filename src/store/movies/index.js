import MoviesGetters from "./getters.js";
import MoviesMutations from "./mutations.js";
import MoviesActions from "./actions.js";

export default {
  namespaced: true,
  state() {
    return {
      movies: {
        popular: [],
        nowPlaying: [],
        topRated: [],
        upcoming: [],
      },
    };
  },
  getters: MoviesGetters,
  mutations: MoviesMutations,
  actions: MoviesActions,
};
