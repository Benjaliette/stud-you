import { createApp } from "vue";
import App from "./App.vue";
import router from "./router";
import store from "./store";

/* import the CSS files from assets */
import "./assets/container.css";
import "./assets/colors.css";
import "./assets/sizes.css";

/* import the fontawesome core */
import { library } from "@fortawesome/fontawesome-svg-core";

/* import font awesome icon component */
import { FontAwesomeIcon } from "@fortawesome/vue-fontawesome";

/* import specific icons */
import {
  faFilm,
  faHeart,
  faCalendarDays,
  faUser,
  faGear,
  faArrowRightFromBracket,
  faMagnifyingGlass,
  faXmark,
} from "@fortawesome/free-solid-svg-icons";

/* import base UI components */
import BaseButton from "./components/UI/BaseButton.vue";
import BaseCard from "./components/UI/BaseCard.vue";
import BaseCarousel from "./components/UI/BaseCarousel.vue";
import BaseFlag from "./components/UI/BaseFlag.vue";
import BaseSearchBar from "./components/UI/BaseSearchBar.vue";

library.add(
  faFilm,
  faHeart,
  faCalendarDays,
  faUser,
  faGear,
  faArrowRightFromBracket,
  faMagnifyingGlass,
  faXmark
);

const app = createApp(App);

app.component("base-button", BaseButton);
app.component("base-card", BaseCard);
app.component("base-carousel", BaseCarousel);
app.component("base-flag", BaseFlag);
app.component("base-search-bar", BaseSearchBar);
app.component("font-awesome-icon", FontAwesomeIcon);

app.use(store);
app.use(router);

app.mount("#app");
