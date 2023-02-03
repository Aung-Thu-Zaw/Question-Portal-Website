<template>
  <!-- Question Groups -->
  <div class="flex flex-col border p-2 rounded-md space-y-3 bg-white">
    <div
      class="
        flex flex-wrap
        items-center
        justify-between
        w-full
        border-b-2
        p-2
        mb-2
      "
    >
      <h1 class="text-xl">Question Groups</h1>
      <button
        class="
          border-2 border-dark
          px-3
          py-1
          rounded-md
          hover:bg-dark hover:text-white
          transition-all
        "
      >
        See All
      </button>
    </div>

    <SingleQuestionGroupCard />
  </div>
</template>

<script>
import SingleQuestionGroupCard from "./SingleQuestionGroupCard.vue";
export default {
  components: { SingleQuestionGroupCard },
};
</script>

<style>
</style>
