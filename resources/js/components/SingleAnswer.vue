<template>
  <div v-if="answerMarkdowns">
    <div v-for="answer in answerMarkdowns" :key="answer.id" class="py-5">
      <div class="font-bold text-lg border bg-green-200 p-3 my-3 rounded-md">
        <i class="fa-solid fa-check mr-2 text-green-600"></i>
        <span class="text-green-700">This answer is working.</span>
      </div>
      <div v-html="answer.answer" class="mb-5"></div>

      <div
        class="flex items-center flex-wrap justify-between w-full my-3 space-y-3 md:space-y-0"
      >
        <div class="flex items-center justify-center space-x-10">
          <span class="font-bold"
            ><i class="fa-solid fa-thumbs-up"></i> Likes</span
          >
          <span class="font-bold"
            ><i class="fa-solid fa-pen-to-square"></i> Edit</span
          >
          <span class="font-bold"><i class="fa-solid fa-flag"></i> Follow</span>
          <span class="font-bold"><i class="fa-solid fa-share"></i> Share</span>
        </div>
        <div>
          <div
            class="flex flex-col items-start justify-center border shadow-md p-3"
          >
            <span
              >answered {{ answer.created_date }} at
              {{ answer.created_time }}</span
            >
            <div class="flex items-center mr-2">
              <img
                src="https://media.istockphoto.com/id/1176489653/fr/photo/belle-femme-noire-%C3%A9tonn%C3%A9e.jpg?s=170667a&w=0&k=20&c=0Gbbr4RSXCrOVYgSBc2wJFeTO9O5z-qcxL2S5DsgMHo="
                alt=""
                class="w-8 h-8 rounded-full object-cover object-center mr-3"
              />
              <a
                href="#"
                class="text-sm font-bold text-blue-500 hover:underline"
              >
                {{ answer.user }}
              </a>
            </div>
          </div>
          <!-- <div
                class="flex flex-col items-start justify-center border shadow-md p-3"
              >
                <span>edited Nov 24, 2010 at 11:15</span>
                <div class="flex items-center mr-2">
                  <img
                    src="https://media.istockphoto.com/id/1176489653/fr/photo/belle-femme-noire-%C3%A9tonn%C3%A9e.jpg?s=170667a&w=0&k=20&c=0Gbbr4RSXCrOVYgSBc2wJFeTO9O5z-qcxL2S5DsgMHo="
                    alt=""
                    class="w-8 h-8 rounded-full object-cover object-center mr-3"
                  />
                  <a href="#" class="text-sm font-bold text-blue-500 hover:underline">
                    Khat Aung Zin
                  </a>
                </div>
              </div> -->
        </div>
      </div>

      <hr />
    </div>
  </div>
</template>

<script>
import { computed, onMounted, reactive, ref, watch } from "vue";
import { useStore } from "vuex";
import { marked } from "marked";
import hljs from "highlight.js";
import highlight from "highlight.js";
import "highlight.js/styles/tokyo-night-dark.css";

export default {
  setup() {
    const store = useStore();
    const answerMarkdowns = reactive([]);

    const question = computed(() => store.getters.getSingleSpecificQuestion);

    const answers = computed(() =>
      store.getters.getAnswersByQuestionId(question.value.id)
    );

    const updateAnswerMarkdowns = () => {
      answerMarkdowns.length = 0;
      if (answers.value) {
        answers.value.forEach((answer) => {
          const markdown = {
            id: answer.id,
            question_id: answer.question_id,
            answer: marked(answer.answer, {
              highlight(md) {
                return highlight.highlightAuto(md).value;
              },
            }),
            created_time: answer.created_time,
            created_date: answer.created_date,
            user: answer.user,
          };
          answerMarkdowns.push(markdown);
        });
      }
    };

    onMounted(() => {
      updateAnswerMarkdowns();
    });

    watch(answers, () => {
      updateAnswerMarkdowns();
    });

    return { answerMarkdowns };
  },
};
</script>

<style>
pre {
  font-size: 0.8rem;
  background: #1a1b26;
  padding: 12.8px;
  color: #9aa5ce;
  border-radius: 8px;
}
</style>
