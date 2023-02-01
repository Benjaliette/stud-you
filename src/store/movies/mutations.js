import axios from "axios";

const basePicUrl = "https://image.tmdb.org/t/p/original";

export default {
  addRating(state, payload) {
    const selectedMovie = state.movies.find((movie) => movie === payload);
    selectedMovie.rating = payload.rate;
  },
  async loadMovies(state, payload) {
    const response = await axios.get(payload.url);
    await response.data.results.forEach((movie) => {
      const index = state.movies.findIndex((item) => item.id === movie.id);
      if (index === -1) {
        state.movies.push({
          id: movie.id,
          title: movie.title,
          year: Number(movie.release_date.split("-")[0]),
          rating: movie.vote_average,
          poster: `${basePicUrl}${movie.poster_path}`,
          type: [payload.type],
        });
      } else {
        state.movies[index].type.push(payload.type);
      }
    });
  },
};
