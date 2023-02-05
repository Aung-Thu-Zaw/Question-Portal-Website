<template>
  <div class="relative flex w-full min-h-screen bg-light">
    <!-- Left Side -->
    <LeftSide />

    <!-- Center -->
    <div class="w-full p-3 bg-light space-y-5 border-l-2 border-r-2 lg:w-1/2">
      <div class="flex flex-wrap items-center justify-between p-8">
        <h1 class="text-3xl md:text-4xl">Top Questions</h1>
        <router-link
          :to="{ name: 'question.create' }"
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
        </router-link>
      </div>

      <FilterButton />

      <QuestionCard />
    </div>

    <!-- Right Side -->
    <RightSide />
  </div>
</template>

<script>
import RightSide from "../../components/RightSide.vue";
import LeftSide from "../../components/LeftSide.vue";
import FilterButton from "../../components/FilterButton.vue";
import QuestionCard from "../../components/QuestionCard.vue";
export default {
  components: {
    RightSide,
    LeftSide,
    FilterButton,
    QuestionCard,
  },

  setup() {
    return {};
  },
};
</script>

<style>
</style>
