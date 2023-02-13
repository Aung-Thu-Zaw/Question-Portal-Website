<template>
  <div class="py-10 w-full">
    <router-link
      to="/"
      class="
        block
        text-xl
        w-full
        p-2
        px-5
        border-2
        rounded-md
        shadow-md
        hover:bg-dark hover:opacity-75 hover:text-white
        transition-all
      "
      :class="{ 'bg-dark text-white': route.path === '/' }"
    >
      <i class="fa-solid fa-house mr-3"></i>
      Home
    </router-link>
  </div>

  <div class="py-1 mb-3">
    <h1 class="text-3xl text-gray-400 tracking-wide mb-5 px-2">Public</h1>

    <router-link :to="{ name: 'questions.index' }">
      <div
        class="
          text-md
          py-3
          border-b-2
          px-5
          hover:bg-dark hover:opacity-75 hover:text-white
          transition-all
        "
        :class="{
          'bg-dark text-white': route.path === '/questions',
          'text-gray-700': route.path != '/questions',
        }"
      >
        <i class="fa-solid fa-question mr-3"></i>
        <span>Questions</span>
      </div>
    </router-link>

    <router-link :to="{ name: 'tags.index' }">
      <div
        class="
          text-md
          py-3
          border-b-2
          px-5
          hover:bg-dark hover:opacity-75 hover:text-white
          transition-all
        "
        :class="{
          'bg-dark text-white': route.path === '/tags',
          'text-gray-700': route.path != '/tags',
        }"
      >
        <i class="fa-solid fa-tag mr-3"></i>
        <span>Tags</span>
      </div>
    </router-link>

    <router-link :to="{ name: 'users.index' }">
      <div
        class="
          text-md
          py-3
          border-b-2
          px-5
          hover:bg-dark hover:opacity-75 hover:text-white
          transition-all
        "
        :class="{
          'bg-dark text-white': route.path === '/users',
          'text-gray-700': route.path != '/users',
        }"
      >
        <i class="fa-solid fa-users mr-3"></i>
        <span>Users</span>
      </div>
    </router-link>
  </div>

  <!-- Question Groups -->
  <div class="py-3 mb-3">
    <h1 class="text-xl text-gray-400 tracking-wide mb-3 px-2">
      Your Question Groups
    </h1>
    <SingleYourQuestionGroupCard />
  </div>

  <!-- Disscussion Groups -->
  <div class="py-3 mb-3">
    <h1 class="text-xl text-gray-400 tracking-wide mb-3 px-2">
      Your Disscussion Chat Groups
    </h1>
    <SingleYourDiscussionGroupCard />
  </div>
</template>

<script>
import { useRoute } from "vue-router";
import SingleYourDiscussionGroupCard from "./SingleYourDiscussionGroupCard.vue";
import SingleYourQuestionGroupCard from "./SingleYourQuestionGroupCard.vue";
export default {
  components: {
    SingleYourDiscussionGroupCard,
    SingleYourQuestionGroupCard,
  },

  setup() {
    const route = useRoute();
    return { route };
  },
};
</script>

<style>
</style>
