<template>
  <svg class="fixed -z-40" width="354" height="738" viewBox="0 0 404 738" fill="none" xmlns="http://www.w3.org/2000/svg">
    <g filter="url(#filter0_d_100_99)">
      <ellipse cx="11.5" cy="285" rx="338.5" ry="445" fill="#02B0FF" />
    </g>
  </svg>
  <div class="p-3 text-white flex justify-between items-center">
    <Back />
    <img src="/profil.jpg" alt="profil" class="w-8 h-8 rounded-full shadow-xl" />
  </div>
  <div class="bg-white mx-3 mb-20 shadow-2xl" v-if="data">
    <div class="flex items-center justify-between p-3">
      <div class="flex items-center gap-3">
        <img src="/profil.jpg" alt="profil" class="w-10 h-10 rounded-full shadow-xl" />
        <div>
          <h2 class="text-sm font-bold">{{ this.data.name }}</h2>
          <p class="text-xs text-gray-400">{{ this.data.email }}</p>
        </div>
      </div>
      <button class="bg-white border-2 border-blue-400 text-blue-400 px-3 text-sm rounded-full">Ikuti</button>
    </div>
    <div class="mx-3 text-lg border-gray-200 pb-3 border-b-2">
      <p>{{ this.data.description }}</p>
      <div class="flex gap-2 text-sm text-gray-400 mt-3 items-center">
        <p>19.20</p>
        <p>-</p>
        <p>10 Nov 2023</p>
      </div>
    </div>
    <div class="p-3">
      <h2 class="font-bold text-lg">Komentar</h2>
      <div class="flex flex-col gap-3 items-center justify-between p-3">
        <CardForumComment v-for="item in comment" :key="item.id" :name="item.name" :email="item.email" :time="item.time" :description="item.description" />
      </div>
    </div>
  </div>
  <div class="fixed z-40 bottom-12 bg-gray-200 w-full p-3 pb-10 flex items-center gap-3">
    <input type="text" v-model="newComment" @keypress.enter="sendComment" class="bg-inherit border-gray-400 text-gray-600 border-2 grow p-2" />
    <font-awesome-icon @click="sendComment" class="w-6 h-6 text-gray-400" :icon="['fas', 'arrow-right']" />
  </div>
</template>

<script>
import Back from "@/components/back.vue";
import CardForumComment from "@/components/cardForumComment.vue";
import dataForum from "@/assets/dataForum.json";

export default {
  data() {
    return {
      data: null,
      comment: null,
      newComment: null,
    };
  },
  components: {
    Back,
    CardForumComment,
  },
  methods: {
    getData() {
      const forumId = this.$route.params.id;
      this.data = dataForum.find((item) => item.id == forumId);
    },
    getComment() {
      this.comment = this.data.comment;
    },
    sendComment() {
      alert(this.newComment);
    },
  },
  mounted() {
    this.getData();
    this.getComment();
  },
};
</script>
