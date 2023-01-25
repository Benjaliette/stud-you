export default {
  movies(state) {
    return state.movies;
  },
  nowPlaying(state) {
    return state.movies;
  },
  topMovies(state) {
    return state.movies;
  },
  watchlistMovies(state) {
    return state.movies.filter((movie) => movie.saved);
  },
};
