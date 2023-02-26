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
          class="border px-3 py-2 rounded-lg bg-dark text-white md:px-5 hover:bg-gray-600 transition-all block"
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
          <div v-html="problemDetailMarkdown" class="mb-5"></div>
          <div v-html="expectAnswerMarkdown" class="mb-5"></div>

          <hr />

          <div>
            <div class="flex items-center justify-between">
              <h3 class="text-2xl">10 Answers</h3>
              <form>
                <select
                  name=""
                  id=""
                  class="border-2 border-slate-400 w-[300px] outline-none px-3 py-1 bg-white rounded-md"
                >
                  <option value="" selected disabled>Sort By</option>
                  <option value="">Oldest</option>
                  <option value="">Newest</option>
                </select>
              </form>
            </div>

            <SingleAnswer />

            <hr />

            <AnswerForm />
          </div>
        </div>

        <div class="bg-light w-full xl:w-[40%]">
          <RelatedQuestions />
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import SingleAnswer from "../../components/SingleAnswer.vue";
import AnswerForm from "../../components/AnswerForm.vue";
import hljs from "highlight.js";
import "highlight.js/styles/tokyo-night-dark.css";
import highlight from "highlight.js";
import { marked } from "marked";
import { useStore } from "vuex";
import RelatedQuestions from "../../components/RelatedQuestions.vue";
import LeftSide from "../../components/LeftSide.vue";
import { computed, onMounted, ref } from "@vue/runtime-core";
import { useRoute, useRouter } from "vue-router";

export default {
  components: {
    SingleAnswer,
    AnswerForm,
    RelatedQuestions,
    LeftSide,
  },
  props: ["id", "slug"],

  setup(props) {
    const store = useStore();
    const route = useRoute();
    const router = useRouter();

    console.log(highlight);
    onMounted(async () => {
      await store.dispatch("fetchSingleSpecificQuestion", props.id);
      hljs.initHighlightingOnLoad();
    });

    const question = computed(() => {
      return store.getters.getSingleSpecificQuestion;
    });

    const problemDetailMarkdown = computed(() => {
      if (question.value && question.value.problem_detail) {
        return marked(question.value.problem_detail, {
          highlight(md) {
            return highlight.highlightAuto(md).value;
          },
        });
      }
      return "";
    });
    const expectAnswerMarkdown = computed(() => {
      if (question.value && question.value.expect_answer) {
        return marked(question.value.expect_answer, {
          highlight(md) {
            return highlight.highlightAuto(md).value;
          },
        });
      }
      return "";
    });

    return {
      question,
      problemDetailMarkdown,
      expectAnswerMarkdown,
    };
  },
};
</script>

<style>
pre {
  font-size: 0.8rem;
}
</style>
