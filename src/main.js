import { createApp } from "vue";
import App from "./App.vue";
import router from "./router";
import store from "./store";
import "./assets/container.css";

import BaseButton from "./components/UI/BaseButton.vue";

const app = createApp(App);

app.component("base-button", BaseButton);

app.use(store);
app.use(router);

app.mount("#app");
