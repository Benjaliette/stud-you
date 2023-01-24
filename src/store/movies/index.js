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
          poster: require("@/assets/affiche_type.webp"),
          saved: false,
        },
        {
          id: 2,
          title: "Movie's title",
          year: 2000,
          rating: 10,
          poster: require("@/assets/affiche_type.webp"),
          saved: true,
        },
        {
          id: 3,
          title: "Movie's title",
          year: 2000,
          rating: 10,
          poster: require("@/assets/affiche_type.webp"),
          saved: false,
        },
        {
          id: 4,
          title: "Movie's title",
          year: 2000,
          rating: 10,
          poster: require("@/assets/affiche_type.webp"),
          saved: false,
        },
        {
          id: 5,
          title: "Movie's title",
          year: 2000,
          rating: 10,
          poster: require("@/assets/affiche_type.webp"),
          saved: false,
        },
        {
          id: 6,
          title: "Movie's title",
          year: 2000,
          rating: 10,
          poster: require("@/assets/affiche_type.webp"),
          saved: false,
        },
        {
          id: 7,
          title: "Movie's title",
          year: 2000,
          rating: 10,
          poster: require("@/assets/affiche_type.webp"),
          saved: true,
        },
        {
          id: 8,
          title: "Movie's title",
          year: 2000,
          rating: 10,
          poster: require("@/assets/affiche_type.webp"),
          saved: false,
        },
        {
          id: 9,
          title: "Movie's title",
          year: 2000,
          rating: 10,
          poster: require("@/assets/affiche_type.webp"),
          saved: false,
        },
        {
          id: 10,
          title: "Movie's title",
          year: 2000,
          rating: 10,
          poster: require("@/assets/affiche_type.webp"),
          saved: false,
        },
        {
          id: 11,
          title: "Movie's title",
          year: 2000,
          rating: 10,
          poster: require("@/assets/affiche_type.webp"),
          saved: false,
        },
        {
          id: 12,
          title: "Movie's title",
          year: 2000,
          rating: 10,
          poster: require("@/assets/affiche_type.webp"),
          saved: false,
        },
        {
          id: 13,
          title: "Movie's title",
          year: 2000,
          rating: 10,
          poster: require("@/assets/affiche_type.webp"),
          saved: false,
        },
        {
          id: 14,
          title: "Movie's title",
          year: 2000,
          rating: 10,
          poster: require("@/assets/affiche_type.webp"),
          saved: false,
        },
      ],
    };
  },
  getters: MoviesGetters,
  mutations: MoviesMutations,
  actions: MoviesActions,
};
