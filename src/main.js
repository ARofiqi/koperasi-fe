import { createApp } from "vue";
import "./assets/tailwind.css";
import "./style.css";
import App from "./App.vue";
import router from "./routers";

import "./registerServiceWorker";
import fontAwesomeIcon from "./fontAwesomeIcon.js";

createApp(App).use(router).component("font-awesome-icon", fontAwesomeIcon).mount("#app");
