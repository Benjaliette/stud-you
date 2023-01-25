export default {
  markMovie(state, payload) {
    const selectedMovie = state.movies.find((movie) => movie === payload);
    selectedMovie.saved = !selectedMovie.saved;
  },
};
