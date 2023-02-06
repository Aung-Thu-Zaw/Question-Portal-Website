<template>
  <div class="relative flex w-full min-h-screen bg-light mt-20">
    <!-- Left Side -->
    <LeftSide />

    <div class="w-full p-5 bg-light border-l-2 border-r-2">
      <div
        class="flex flex-wrap-reverse items-start justify-between md:flex-wrap"
      >
        <h1 class="text-2xl w-[85%]">
          {{ question.question }}
        </h1>
        <router-link
          :to="{ name: 'questions.create' }"
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
            block
          "
        >
          Ask Question
        </router-link>
      </div>

      <div class="flex items-center border-b py-3">
        <span class="text-sm mr-10">
          <span class="text-gray-400 mr-1">Asked</span>
          Today
        </span>
        <span class="text-sm mr-10">
          <span class="text-gray-400 mr-1">Modified</span>
          Today
        </span>
        <span class="text-sm mr-10">
          <span class="text-gray-400 mr-1">Viewed</span>
          {{ question.view }} times
        </span>
      </div>

      <div class="flex flex-col w-full px-5 bg-light xl:flex-row">
        <div class="w-full p-5 bg-light border-r-2">
          {{ question.detail }}
        </div>

        <div class="bg-light w-full xl:w-[40%]">
          <RelatedQuestions />
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { useStore } from "vuex";
import RelatedQuestions from "../../components/RelatedQuestions.vue";
import LeftSide from "../../components/LeftSide.vue";
import { computed, onMounted } from "@vue/runtime-core";

export default {
  components: {
    RelatedQuestions,
    LeftSide,
  },
  props: ["slug"],

  setup(props) {
    const store = useStore();

    onMounted(async () => {
      return await store.dispatch("fetchSingleSpecificQuestion", props.slug);
    });

    return {
      question: computed(() => store.getters.getSingleSpecificQuestion),
    };
  },
};
</script>

<style>
</style>
