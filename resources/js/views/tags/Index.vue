<template>
  <div class="relative flex w-full min-h-screen bg-light mt-20 font-rubik">
    <LeftSide />

    <div class="w-full p-3 bg-light space-y-5 border-l-2 lg:w-[70%]">
      <div class="flex flex-col items-start justify-between p-8">
        <h1 class="text-3xl md:text-4xl mb-5">Tags</h1>
        <p>
          A tag is a keyword or label that categorizes your question with other,
          similar questions. Using the right tags makes it easier for others to
          find and answer your question.
        </p>
      </div>

      <TagFilter />

      <PaginateTagCard />
    </div>
  </div>
</template>

<script>
import PaginateTagCard from "../../components/PaginateTagCard.vue";
import LeftSide from "../../components/LeftSide.vue";
import TagFilter from "../../components/TagFilter.vue";
export default {
  components: {
    PaginateTagCard,
    LeftSide,
    TagFilter,
  },

  setup() {
    return {};
  },
};
</script>

<style>
</style>
