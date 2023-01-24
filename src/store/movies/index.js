import MoviesGetters from "./getters.js";
import MoviesMutations from "./mutations.js";
import MoviesActions from "./actions.js";

export default {
  namespaced: true,
  state() {
    return {
      movies: [
        {
          id: 1,
          title: "Movie's title",
          year: 2000,
          rating: 10,
          poster: require("@/assets/cinema_landing.webp"),
        },
      ],
    };
  },
  getters: MoviesGetters,
  mutations: MoviesMutations,
  actions: MoviesActions,
};
