export default {
  isAuth(state) {
    return state.localUser.status.loggedIn;
  },
  userLoggedIn(state) {
    return state.localUser.user;
  },
  userWatchlist(state) {
    if (state.localUser.user && state.localUser.user.movies) {
      return state.localUser.user.movies;
    } else {
      return null;
    }
  },
  userTopMovies(_state, getters) {
    if (getters.userWatchlist) {
      const watchedMovies = getters.userWatchlist.filter((movie) => movie.read);

      if (watchedMovies.length !== 0) {
        const sortedMovies = watchedMovies.sort(
          (movieA, movieB) => movieB.rating - movieA.rating
        );
        return sortedMovies.slice(0, 3);
      }
    }
    return null;
  },
};
