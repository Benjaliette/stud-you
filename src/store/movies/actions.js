import axios from "axios";

const baseUrl = "https://api.themoviedb.org/3/movie/";
const basePicUrl = "https://image.tmdb.org/t/p/original";

export default {
  markMovieAsSaved(context, data) {
    context.commit("markMovie", data);
  },
  rateMovie(context, data) {
    context.commit("addRating", data);
  },
  async loadPopularMovies(context) {
    if (context.state.movies.popular.length === 0) {
      const url = `${baseUrl}popular?api_key=${process.env.VUE_APP_TMDB_KEY}`;
      const response = await axios.get(url);
      const movies = await response.data.results.map((movie) => {
        return {
          id: movie.id,
          title: movie.title,
          year: Number(movie.release_date.split("-")[0]),
          rating: movie.vote_average,
          poster: `${basePicUrl}${movie.poster_path}`,
        };
      });
      context.state.movies.popular = movies;
    }
  },
  async loadTopRatedMovies(context) {
    if (context.state.movies.topRated.length === 0) {
      const url = `${baseUrl}top_rated?api_key=${process.env.VUE_APP_TMDB_KEY}`;
      const response = await axios.get(url);
      const movies = await response.data.results.map((movie) => {
        return {
          id: movie.id,
          title: movie.title,
          year: Number(movie.release_date.split("-")[0]),
          rating: movie.vote_average,
          poster: `${basePicUrl}${movie.poster_path}`,
        };
      });
      context.state.movies.topRated = movies;
    }
  },
  async loadUpcomingMovies(context) {
    if (context.state.movies.upcoming.length === 0) {
      const url = `${baseUrl}upcoming?api_key=${process.env.VUE_APP_TMDB_KEY}`;
      const response = await axios.get(url);
      const movies = await response.data.results.map((movie) => {
        return {
          id: movie.id,
          title: movie.title,
          year: Number(movie.release_date.split("-")[0]),
          rating: movie.vote_average,
          poster: `${basePicUrl}${movie.poster_path}`,
        };
      });
      context.state.movies.upcoming = movies;
    }
  },
  async loadNowPlayingMovies(context) {
    if (context.state.movies.nowPlaying.length === 0) {
      const url = `${baseUrl}now_playing?api_key=${process.env.VUE_APP_TMDB_KEY}`;
      const response = await axios.get(url);
      const movies = await response.data.results.map((movie) => {
        return {
          id: movie.id,
          title: movie.title,
          year: Number(movie.release_date.split("-")[0]),
          rating: movie.vote_average,
          poster: `${basePicUrl}${movie.poster_path}`,
        };
      });
      context.state.movies.nowPlaying = movies;
    }
  },
  async getMoviesOverview(context, data) {
    const movieDetails = await axios.get(
      `${baseUrl}${data.id}?api_key=${process.env.VUE_APP_TMDB_KEY}&language=fr-FR`
    );
    const overview = movieDetails.data.overview;
    const itemIndex = context.state.movies.findIndex((x) => x.id === data.id);
    context.state.movies[itemIndex].description = overview;
  },

  async getActors(context, data) {
    const url = `${baseUrl}${data.id}/credits?api_key=${process.env.VUE_APP_TMDB_KEY}`;
    const response = await axios.get(url);
    const actors = response.data.cast.slice(0, 10).map((actor) => {
      return {
        id: actor.id,
        name: actor.name,
        char: actor.character,
        picture: `${basePicUrl}${actor.profile_path}`,
      };
    });
    const itemIndex = context.state.movies.findIndex((x) => x.id === data.id);
    context.state.movies[itemIndex].actors = actors;
  },
};
