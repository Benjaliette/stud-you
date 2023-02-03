import axios from "axios";
import { getDatabase, set, ref, remove, update } from "firebase/database";

export default {
  markMovie(state, payload) {
    const selectedMovie = state.movies.find((movie) => movie === payload);
    selectedMovie.saved = !selectedMovie.saved;
  },
  logSuccess(state, user) {
    state.localUser.status.loggedIn = true;
    state.localUser.user = user;
    localStorage.setItem("user", JSON.stringify(user));
  },
  logFailure(state) {
    state.localUser.status.loggedIn = false;
    state.localUser.user = null;
  },
  logout(state) {
    try {
      state.localUser.status.loggedIn = false;
      state.localUser.user = null;
      localStorage.removeItem("user");
    } catch (error) {
      console.log("ok");
    }
  },
  async addUser(state, payload) {
    const database = getDatabase(payload.app);

    set(ref(database, "users/" + payload.user.id), payload.user);
    state.users.push(payload.user);
  },
  async addMovie(state, payload) {
    const user = state.localUser.user;
    const database = getDatabase(payload.app);
    await set(
      ref(database, "users/" + user.id + "/movies/" + payload.movie.id),
      payload.movie
    );
    if (user.movies) {
      user.movies.push(payload.movie);
    } else {
      user.movies = [payload.movie];
    }
    localStorage.setItem("user", JSON.stringify(user));
  },
  async removeMovie(state, payload) {
    const user = state.localUser.user;
    const database = getDatabase(payload.app);
    await remove(
      ref(database, "users/" + user.id + "/movies/" + payload.movie.id)
    );
    const itemIndex = user.movies.findIndex((x) => x.id === payload.movie.id);
    user.movies.splice(itemIndex, 1);
    localStorage.setItem("user", JSON.stringify(user));
  },
  async addRate(state, payload) {
    const user = state.localUser.user;
    const database = getDatabase(payload.app);
    await set(
      ref(
        database,
        "users/" + user.id + "/movies/" + payload.movie.id + "/myRate"
      ),
      payload.rate
    );
    const userMovie = Object.values(user.movies).find(
      (x) => x.id === payload.movie.id
    );
    userMovie.myRate = payload.rate;
    localStorage.setItem("user", JSON.stringify(user));
  },
  async updateUser(state, payload) {
    const database = getDatabase(payload.app);
    const user = payload.user;
    update(ref(database, "users/" + user.id), {
      id: user.id,
      email: user.email,
      firstName: user.firstName,
      lastName: user.lastName,
      username: user.username,
      description: user.description,
    });
    state.localUser.user = payload.user;
    localStorage.setItem("user", JSON.stringify(user));
  },
};
