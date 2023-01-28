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
  upcomingMovies(state) {
    return state.movies;
  },
  lastMovie(state) {
    return state.movies[0];
  },
};
