import profil from "@/view/profil/index.vue";
import profilEdit from "@/view/profil/edit.vue";

import navbar from "@/components/navbar.vue";

const route = [
  {
    path: "/profil/:id",
    name: "profil",
    components: {
      main: profil,
      navbar: navbar,
    },
  },
  {
    path: "/profil/:id/edit",
    name: "profilEdit",
    components: {
      main: profilEdit,
      navbar: navbar,
    },
  },
];

export default route;
