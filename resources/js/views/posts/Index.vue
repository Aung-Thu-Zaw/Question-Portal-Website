<template>
  <div class="relative flex w-full min-h-screen bg-light">
    <!-- Left side -->
    <div class="hidden bg-light md:block md:w-1/3 lg:w-1/4 xl:px-10">
      <SideNavbar />
    </div>

    <!-- Center -->
    <div class="w-full p-3 bg-light space-y-5 border-l-2 border-r-2 lg:w-1/2">
      <div class="flex flex-wrap items-center justify-between p-8">
        <h1 class="text-3xl md:text-4xl">Top Questions</h1>
        <button
          class="
            border
            px-3
            py-2
            rounded-lg
            bg-dark
            text-white
            md:px-5
            hover:bg-gray-600
            transition-all
          "
        >
          Ask Question
        </button>
      </div>

      <FilterButton />

      <QuestionCard />
    </div>

    <!-- Right Side -->
    <div class="hidden bg-light lg:block lg:w-1/4 p-5 space-y-5">
      <QuestionGroupsCardBox />

      <DiscussionGroupsCardBox />
    </div>
  </div>
</template>

<script>
import { useRoute } from "vue-router";
import FilterButton from "../../components/FilterButton.vue";
import SideNavbar from "../../components/SideNavbar.vue";
import DiscussionGroupsCardBox from "../../components/DiscussionGroupsCardBox.vue";
import QuestionGroupsCardBox from "../../components/QuestionGroupsCardBox.vue";
import QuestionCard from "../../components/QuestionCard.vue";
export default {
  components: {
    FilterButton,
    SideNavbar,
    DiscussionGroupsCardBox,
    QuestionGroupsCardBox,
    QuestionCard,
  },

  setup() {
    return {};
  },
};
</script>

<style>
</style>
