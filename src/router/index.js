import { createRouter, createWebHistory } from "vue-router";
import HomeView from "../views/pages/HomeView.vue";
import store from "../store/index.js";

const routes = [
  {
    path: "/",
    name: "home",
    component: HomeView,
  },
  {
    path: "/browse",
    name: "browse",
    component: () =>
      import(/* webpackChunkName: "about" */ "../views/pages/BrowseView.vue"),
  },
  {
    path: "/watchlist",
    name: "watchlist",
    component: () => import("../views/pages/WatchlistView.vue"),
  },
  {
    path: "/upcoming",
    name: "upcoming",
    component: () => import("../views/pages/UpcomingView.vue"),
  },
  {
    path: "/login",
    name: "login",
    component: () => import("../views/auth/LoginView.vue"),
  },
  {
    path: "/signup",
    name: "signup",
    component: () => import("../views/auth/SignupView.vue"),
  },
  {
    path: "/search",
    name: "search",
    component: () => import("../views/movies/SearchMovies.vue"),
  },
  {
    path: "/users/:id",
    name: "user",
    component: () => import("../views/users/UserProfileView.vue"),
    meta: {
      requiresAuth: true,
    },
  },
  {
    path: "/users/:id/edit",
    name: "editUser",
    component: () => import("../views/users/UserEditView.vue"),
  },
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
});

router.beforeEach((to, from, next) => {
  if (to.meta.requiresAuth && !store.getters["users/isAuth"]) {
    next("/login");
  } else {
    next();
  }
});

export default router;
