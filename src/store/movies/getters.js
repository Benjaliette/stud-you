export default {
  movies(state) {
    return state.movies.popular;
  },
  nowPlaying(state) {
    return state.movies.nowPlaying;
  },
  topMovies(state) {
    return state.movies.topRated;
  },
  watchlistMovies(state) {
    return state.movies.filter((movie) => movie.saved);
  },
  upcomingMovies(state) {
    return state.movies.upcoming;
  },
  lastMovie(state) {
    return state.movies.popular[
      Math.floor(Math.random() * state.movies.popular.length)
    ];
  },
};
