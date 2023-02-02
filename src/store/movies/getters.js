export default {
  movies(state) {
    return state.movies.filter((movie) => movie.type.includes("popular"));
  },
  nowPlaying(state) {
    return state.movies.filter((movie) => movie.type.includes("nowPlaying"));
  },
  topMovies(state) {
    return state.movies.filter((movie) => movie.type.includes("topRated"));
  },
  watchlistMovies(state) {
    return state.movies.filter((movie) => movie.saved);
  },
  upcomingMovies(state) {
    return state.movies.filter((movie) => movie.type.includes("upcoming"));
  },
  lastMovie(_state, getters) {
    return getters.movies[Math.floor(Math.random() * getters.movies.length)];
  },
  searchResults(state) {
    return state.searchResults;
  },
};
