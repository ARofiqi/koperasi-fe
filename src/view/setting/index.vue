<template>
  <div class="bg-primary p-3 rounded-b-2xl shadow-lg">
    <Back class="text-white"/>
    <h1 class="text-center text-2xl text-white">Setting</h1>
    <div class="flex justify-around align-middle items-center my-5 text-white">
      <router-link :to="{ name: 'profil', params: { id: '1' } }">
        <img src="profil.jpg" alt="profil" class="w-12 h-12 rounded-full" />
      </router-link>
      <div>
        <h2 class="font-semibold">Abdurrahman</h2>
        <p class="text-sm">Abdurrahman21@gmail.com</p>
      </div>
      <router-link :to="{ name: 'profilEdit' }">
        <font-awesome-icon :icon="['fas', 'edit']" />
      </router-link>
    </div>
  </div>
  <div class="p-3">
    <router-link :to="{ name: 'settingProfil' }">
      <CardSetting :title="'Account'" :icon="['fas', 'user']" />
    </router-link>
    <router-link :to="{ name: 'notification' }">
      <CardSetting :title="'Notification'" :icon="['fas', 'bell']" />
    </router-link>
    <router-link :to="{ name: 'settingLocation' }">
      <CardSetting :title="'Location'" :icon="['fas', 'map-location']" />
    </router-link>
    <router-link :to="{ name: 'settingSupport' }">
      <CardSetting :title="'Support'" :icon="['fas', 'user-group']" />
    </router-link>
    <router-link :to="{ name: 'settingShare' }">
      <CardSetting :title="'Share'" :icon="['fas', 'share']" />
    </router-link>
    <router-link :to="{ name: 'settingLogout' }">
      <CardSetting :title="'Logout'" :icon="['fas', 'right-from-bracket']" />
    </router-link>
  </div>
</template>

<script>
import CardSetting from "@/components/cardSetting.vue";
import Back from "@/components/back.vue";
export default {
  name: "SettingPage",
  components: {
    CardSetting,
    Back
  },
};
</script>
