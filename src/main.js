import { createApp } from "vue";
import "./assets/tailwind.css";
import "./style.css";
import App from "./App.vue";
import router from "./routers";

import { library } from "@fortawesome/fontawesome-svg-core";
import { FontAwesomeIcon } from "@fortawesome/vue-fontawesome";
import { faCartShopping, faGear, faMagnifyingGlass, faFilter, faHouse, faBell, faUser, faArrowLeft, faArrowRight, faEdit, faMapLocation, faUserGroup, faShare, faRightFromBracket, faStar, faPlus } from "@fortawesome/free-solid-svg-icons";
import { faNoteSticky } from "@fortawesome/free-regular-svg-icons";

library.add(faCartShopping, faGear, faMagnifyingGlass, faFilter, faHouse, faBell, faUser, faArrowLeft, faArrowRight, faEdit, faMapLocation, faUserGroup, faShare, faRightFromBracket, faStar, faPlus, faNoteSticky);
createApp(App).use(router).component("font-awesome-icon", FontAwesomeIcon).mount("#app");
