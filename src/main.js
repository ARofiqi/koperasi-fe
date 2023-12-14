import { createApp } from "vue";
import "./assets/tailwind.css";
import "./style.css";
import App from "./App.vue";
import router from "./routers";

import { library } from "@fortawesome/fontawesome-svg-core";
import { FontAwesomeIcon } from "@fortawesome/vue-fontawesome";
import {
  faCartShopping,
  faGear,
  faMagnifyingGlass,
  faFilter,
  faHouse,
  faBell,
  faUser,
  faArrowLeft,
  faArrowRight,
  faEdit,
  faMapLocation,
  faUserGroup,
  faShare,
  faRightFromBracket,
  faStar,
  faPlus,
  faMinus,
  faLock,
  faTrashCan,
  faCamera,
} from "@fortawesome/free-solid-svg-icons";
import { faEye, faEyeSlash, faNoteSticky } from "@fortawesome/free-regular-svg-icons";
import { faFacebook, faGoogle, faWhatsapp } from "@fortawesome/free-brands-svg-icons";
import './registerServiceWorker'

library.add(
  faCartShopping,
  faGear,
  faMagnifyingGlass,
  faFilter,
  faHouse,
  faBell,
  faUser,
  faArrowLeft,
  faArrowRight,
  faEdit,
  faMapLocation,
  faUserGroup,
  faShare,
  faRightFromBracket,
  faStar,
  faPlus,
  faMinus,
  faNoteSticky,
  faEye,
  faEyeSlash,
  faGoogle,
  faFacebook,
  faWhatsapp,
  faLock,
  faTrashCan,
  faCamera
);
createApp(App)
  .use(router)
  .component("font-awesome-icon", FontAwesomeIcon)
  .mount("#app");
