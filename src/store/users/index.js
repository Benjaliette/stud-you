import UsersGetters from "./getters.js";
import UsersMutations from "./mutations.js";
import UsersActions from "./actions.js";

const user = JSON.parse(localStorage.getItem("user"));
// const user = {
//   id: 1,
//   firstName: "Fname",
//   lastName: "Lname",
//   username: "user123",
//   email: "user@mail.fr",
//   password: "123456",
//   description: "I love cinema like I like my coffee, black and white",
//   profilePicture: require("@/assets/default_avatar.png"),
//   watchlistMovies: [
//     {
//       id: 1,
//       title: "Movie's title",
//       year: 2000,
//       rating: 10,
//       poster: require("@/assets/affiche_type.webp"),
//       read: false,
//     },
//     {
//       id: 2,
//       title: "Movie's title",
//       year: 2000,
//       rating: 10,
//       poster: require("@/assets/affiche_type.webp"),
//       read: true,
//     },
//     {
//       id: 3,
//       title: "Movie's title",
//       year: 2000,
//       rating: 10,
//       poster: require("@/assets/affiche_type.webp"),
//       read: false,
//     },
//     {
//       id: 4,
//       title: "Movie's title",
//       year: 2000,
//       rating: 8,
//       poster: require("@/assets/affiche_type.webp"),
//       read: true,
//     },
//     {
//       id: 5,
//       title: "Movie's title",
//       year: 2000,
//       rating: 9,
//       poster: require("@/assets/affiche_type.webp"),
//       read: true,
//     },
//   ],
// };

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
