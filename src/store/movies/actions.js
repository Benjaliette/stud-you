import axios from "axios";

export default {
  markMovieAsSaved(context, data) {
    context.commit("markMovie", data);
  },
  rateMovie(context, data) {
    context.commit("addRating", data);
  },
  async getMovies(context) {
    if (context.state.movies.length !== 0) {
      const url = `https://api.themoviedb.org/3/movie/popular?api_key=${process.env.VUE_APP_TMDB_KEY}`;
      const response = await axios.get(url);
      // console.log(response.data.results);
      const movies = response.data.results.map((movie) => {
        return {
          id: movie.id,
          title: movie.title,
          year: Number(movie.release_date.split("-")[0]),
          rating: movie.vote_average,
          poster: `https://image.tmdb.org/t/p/original${movie.poster_path}`,
        };
      });

      context.state.movies = movies;
    }
  },
};
