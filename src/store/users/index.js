import UsersGetters from "./getters.js";
import UsersMutations from "./mutations.js";
import UsersActions from "./actions.js";

const user = JSON.parse(localStorage.getItem("user"));

const initialState = user
  ? { status: { loggedIn: true }, user }
  : { status: { loggedIn: false }, user: null };

export default {
  namespaced: true,
  state() {
    return {
      users: [],
      localUser: initialState,
    };
  },
  getters: UsersGetters,
  mutations: UsersMutations,
  actions: UsersActions,
};
