export default {
  markMovieAsSaved(context, data) {
    context.commit("markMovie", data);
  },
};
