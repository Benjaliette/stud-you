import axios from "axios";
import { getDatabase, set, ref } from "firebase/database";

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
    state.localUser.status.loggedIn = false;
    state.localUser.user = null;
    localStorage.removeItem("user");
  },
  async loadUsers() {
    const response = axios.get(
      "https://stud-you-c57a9-default-rtdb.europe-west1.firebasedatabase.app/users.json"
    );
  },
  async addUser(state, payload) {
    const database = getDatabase(payload.app);

    set(ref(database, "users/" + payload.user.id), payload.user);
    state.users.push(payload.user);
  },
};
