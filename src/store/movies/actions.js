export default {
  markMovieAsSaved(context, data) {
    context.commit("markMovie", data);
  },
  rateMovie(context, data) {
    context.commit("addRating", data);
  },
};
