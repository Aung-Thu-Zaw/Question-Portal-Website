<template>
  <div class="p-5 bg-light min-h-screen md:p-20 mt-16">
    <div class="md:container md:mx-auto">
      <h1 class="text-3xl mb-10 font-bold">Ask a public question</h1>

      <div class="p-5 bg-blue-200 rounded-md mb-10">
        <h1 class="text-2xl mb-5">Writing a good question</h1>
        <p class="text-red-800 mb-5">
          This site is only support for technology problems.
        </p>

        <p>Steps</p>
        <ul class="list-disc px-5">
          <li>Summarize your problem in a one-line title.</li>
          <li>Describe your problem in more detail.</li>
          <li>Describe what you tried and what you expected to happen.</li>
          <li>
            Add “tags” which help surface your question to members of the
            community.
          </li>
          <li>Review your question and post it to the site.</li>
        </ul>
      </div>
      <form @submit.prevent="handleCreateQuestion">
        <div class="mb-5 p-5 border bg-white rounded-md shadow-sm">
          <h3 class="text-2xl font-semibold text-gray-700">Question Title *</h3>
          <p class="my-3 text-gray-500">
            Be specific and imagine you're asking a question to another person.
          </p>

          <input type="hidden" v-model="questionFormData.user_id" />
          <input
            type="text"
            class="border-2 p-3 w-full outline-none rounded-md"
            placeholder="Write Your Question?"
            required
            v-model="questionFormData.question"
          />
          <p
            v-for="message in validationErrors?.question"
            :key="message.question"
            class="text-center text-red-600 mt-3"
          >
            {{ message }}
          </p>
        </div>

        <div class="mb-5 p-5 border bg-white rounded-md shadow-sm">
          <h3 class="text-2xl font-semibold text-gray-700">Problem Detail *</h3>
          <p class="my-3 text-gray-500">
            What are the details of your problem?
          </p>
          <v-md-editor
            v-model="questionFormData.problem_detail"
            height="400px"
          />
          <p
            v-for="message in validationErrors?.problem_detail"
            :key="message.problem_detail"
            class="text-center text-red-600 mt-3"
          >
            {{ message }}
          </p>
        </div>

        <div class="mb-5 p-5 border bg-white rounded-md shadow-sm">
          <h3 class="text-2xl font-semibold text-gray-700">Expect Answer *</h3>
          <p class="my-3 text-gray-500">
            What did you try and what would you expecting?
          </p>
          <v-md-editor
            v-model="questionFormData.expect_answer"
            height="400px"
          />
          <p
            v-for="message in validationErrors?.expect_answer"
            :key="message.expect_answer"
            class="text-center text-red-600 mt-3"
          >
            {{ message }}
          </p>
        </div>

        <!-- <div class="mb-5 p-5 border bg-white rounded-md shadow-sm">
          <h3 class="text-2xl font-semibold text-gray-700">Tags *</h3>
          <p class="my-3 text-gray-500">
            Add up to 5 tags to describe what your question is about. Start
            typing to see suggestions.
          </p>
          <input
            type="text"
            class="border-2 p-3 w-full outline-none rounded-md"
            placeholder="Eg. (html, css, javascript)"
            required
            v-model="tags"
          />
        </div> -->

        <div class="my-4 flex items-center justify-end">
          <button
            class="py-3 px-8 border bg-blue-500 hover:bg-blue-700 text-white transition-all rounded-lg font-bold"
          >
            Ask Question
          </button>
        </div>
      </form>
    </div>
  </div>
  {{ questionFormData }}
</template>

<script>
import { reactive, ref } from "@vue/reactivity";
import { useStore } from "vuex";
import { useRouter } from "vue-router";
import { computed } from "vue";

export default {
  setup() {
    const store = useStore();
    const router = useRouter();
    const validationErrors = ref(null);

    const user = computed(() => {
      return store.getters.getUser;
    });

    const questionFormData = reactive({
      user_id: user.value.id ? user.value.id : null,
      question: "",
      problem_detail: "",
      expect_answer: "",
    });

    const handleCreateQuestion = async () => {
      try {
        const response = await store.dispatch("createQuestion", {
          questionFormData,
          token: store.getters.getToken,
        });

        if (!response) {
          throw new Error("Response data not found!");
        }

        router.push("/questions");
      } catch (error) {
        if (error.response?.data) {
          validationErrors.value = error.response.data.errors;
        }
      }
    };

    return {
      questionFormData,
      handleCreateQuestion,
      validationErrors,
    };
  },
};
</script>

<style>
</style>
