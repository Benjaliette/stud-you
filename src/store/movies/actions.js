import axios from "axios";

const baseUrl = "https://api.themoviedb.org/3/movie/";
const basePicUrl = "https://image.tmdb.org/t/p/original";

export default {
  rateMovie(context, data) {
    context.commit("addRating", data);
  },
  async loadMovies(context) {
    if (context.state.movies.length === 0) {
      const apiKey = process.env.VUE_APP_TMDB_KEY;
      const popularUrl = `${baseUrl}popular?api_key=${apiKey}`;
      context.commit("loadMovies", { url: popularUrl, type: "popular" });
      const topRatedUrl = `${baseUrl}top_rated?api_key=${apiKey}`;
      context.commit("loadMovies", { url: topRatedUrl, type: "topRated" });
      const upcomingUrl = `${baseUrl}upcoming?api_key=${apiKey}&region=FR`;
      context.commit("loadMovies", { url: upcomingUrl, type: "upcoming" });
      const nowPlayingUrl = `${baseUrl}now_playing?api_key=${apiKey}&region=FR`;
      context.commit("loadMovies", { url: nowPlayingUrl, type: "nowPlaying" });
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
