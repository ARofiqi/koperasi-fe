import settingMain from "@/view/setting/index.vue";
import settingProfil from "@/view/setting/profil.vue";
import settingLocation from "@/view/setting/location.vue";
import settingShare from "@/view/setting/share.vue";
import settingSupport from "@/view/setting/support.vue";

const setting = [
  {
    path: "/setting",
    name: "setting",
    components: {
      main: settingMain,
    },
  },
  {
    path: "/setting/profil/:id",
    name: "settingProfil",
    components: {
      main: settingProfil,
    },
  },
  {
    path: "/setting/location",
    name: "settingLocation",
    components: {
      main: settingLocation,
    },
  },
  {
    path: "/setting/share",
    name: "settingShare",
    components: {
      main: settingShare,
    },
  },
  {
    path: "/setting/support",
    name: "settingSupport",
    components: {
      main: settingSupport,
    },
  },
];

export default setting;