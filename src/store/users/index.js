import UsersGetters from "./getters.js";
import UsersMutations from "./mutations.js";
import UsersActions from "./actions.js";

// const user = JSON.parse(localStorage.getItem("user"));
const user = {
  firstName: "Fname",
  lastName: "Lname",
  email: "user@mail.fr",
  password: "123456",
};

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
