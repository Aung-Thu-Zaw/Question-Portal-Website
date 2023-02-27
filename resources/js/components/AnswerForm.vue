<template>
  <div>
    <h3 class="text-2xl">Write Your Answer</h3>
    <form @submit.prevent="handleCreateAnswer">
      <v-md-editor height="400px" v-model="answerFormData.answer" />
      <p
        v-for="message in validationErrors?.answer"
        :key="message.answer"
        class="text-center text-red-600 mt-3"
      >
        {{ message }}
      </p>
      <div class="my-4 flex items-center justify-end">
        <button
          class="py-3 px-8 border bg-blue-500 hover:bg-blue-700 text-white transition-all rounded-lg font-bold"
        >
          Post Your Question
        </button>
      </div>

      {{ answerFormData }}
    </form>
  </div>
</template>

<script>
import { reactive, ref } from "@vue/reactivity";
import { useStore } from "vuex";
import { useRoute, useRouter } from "vue-router";
import { computed } from "vue";
export default {
  props: ["id"],

  setup(props) {
    const store = useStore();
    const route = useRoute();
    const router = useRouter();
    const validationErrors = ref(null);

    const user = computed(() => {
      return store.getters.getUser;
    });

    const answerFormData = reactive({
      user_id: user.value.id ? user.value.id : "",
      question_id: props.id ? props.id : "",
      answer: "",
    });

    const handleCreateAnswer = async () => {
      try {
        const response = await store.dispatch("createAnswer", answerFormData);

        if (!response) {
          throw new Error("Response data not found!");
        }

        router.push(route.path);
      } catch (error) {
        if (error.response?.data) {
          validationErrors.value = error.response.data.errors;
        }
      }
    };

    return {
      answerFormData,
      handleCreateAnswer,
      validationErrors,
    };
  },
};
</script>

<style>
</style>
