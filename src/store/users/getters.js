export default {
  isAuth(state) {
    return state.localUser.status.loggedIn;
  },
  userLoggedIn(state) {
    return state.localUser.user;
  },
  userMovies(state) {
    if (state.localUser.user && state.localUser.user.movies) {
      return state.localUser.user.movies;
    } else {
      return null;
    }
  },
  userWatchlist(_state, getters) {
    if (getters.userMovies) {
      const toWatchMovies = Object.values(getters.userMovies).filter(
        (movie) => !movie.myRate
      );
      return toWatchMovies;
    } else {
      return null;
    }
  },
  userTopMovies(_state, getters) {
    if (getters.userMovies) {
      const watchedMovies = Object.values(getters.userMovies).filter(
        (movie) => movie.myRate
      );

      if (watchedMovies.length !== 0) {
        const sortedMovies = watchedMovies.sort(
          (movieA, movieB) =>
            Number(movieB.myRate.rating) - Number(movieA.myRate.rating)
        );
        return sortedMovies.slice(0, 3);
      }
    }
    return null;
  },
};
