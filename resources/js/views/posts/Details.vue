<template>
  <div
    class="relative flex w-full min-h-screen bg-light border border-green-800"
  >
    <!-- Left Side -->
    <LeftSide />

    <div class="w-full p-5 bg-light border-l-2 border-r-2">
      <div
        class="flex flex-wrap-reverse items-start justify-between md:flex-wrap"
      >
        <h1 class="text-2xl w-[85%]">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Assumenda
          magnam nisi, error iusto expedita qui! Expedita quae exercitationem
          impedit recusandae tenetur! Officiis, voluptatum voluptates illo in
          eveniet veniam laborum molestiae!
        </h1>
        <router-link
          :to="{ name: 'post.create' }"
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
          30 times
        </span>
      </div>

      <div class="flex flex-col w-full px-5 bg-light xl:flex-row">
        <div class="w-full p-5 bg-light border-r-2">
          Lorem ipsum dolor, sit amet consectetur adipisicing elit. Corrupti
          distinctio reprehenderit quam veniam asperiores ea illum provident,
          ratione velit odit veritatis omnis excepturi officia dicta cum eveniet
          quia! Animi repellat, error et totam necessitatibus possimus sed
          reprehenderit delectus reiciendis in libero quaerat, at inventore.
          Fugiat dolor atque iusto accusantium porro eaque velit aspernatur
          quos, maxime facere consequuntur non ratione. Laudantium rem veniam
          voluptate quo, odit quasi quisquam cupiditate natus fuga blanditiis
          aut, facilis commodi, saepe incidunt neque fugit. Rerum laboriosam sed
          excepturi in soluta ipsa repellat, illo tempora magnam nihil
          consectetur id qu
        </div>

        {{ question }}

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
  props: ["id"],

  setup(props) {
    const store = useStore();

    console.log(store.getters.getQuestions);

    return {
      //   question: computed(() => store.getters.getQuestionById(3)),
    };
  },
};
</script>

<style>
</style>
