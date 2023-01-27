export default {
  isAuth(state) {
    return state.localUser.status.loggedIn;
  },
  userLoggedIn(state) {
    return state.localUser.user;
  },
  userTopMovies(state) {
    const watchedMovies = state.localUser.user.watchlistMovies.filter(
      (movie) => movie.read
    );
    const sortedMovies = watchedMovies.sort(
      (movieA, movieB) => movieB.rating - movieA.rating
    );

    return sortedMovies.slice(0, 3);
  },
};
