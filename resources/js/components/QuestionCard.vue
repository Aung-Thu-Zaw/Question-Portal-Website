<template>
  <div v-for="question in questions" :key="question.id" class="question-card">
    <div class="relative w-full">
      <div class="flex items-center justify-between w-full">
        <h1 class="text-xl">
          <router-link
            :to="{
              name: 'questions.details',
              params: { id: question.id, slug: question.slug },
            }"
            class="text-blue-500 hover:underline"
          >
            {{ question.question }}
          </router-link>
        </h1>
      </div>
    </div>
    <div class="flex items-center flex-wrap w-full">
      <a
        v-for="tag in question.tags"
        :key="tag.id"
        href="#"
        class="question-tag"
      >
        {{ tag.name }}
      </a>
    </div>
    <div
      class="flex items-center flex-wrap justify-between w-full space-y-3 md:space-y-0"
    >
      <div class="flex items-center justify-center space-x-10">
        <span class="font-bold">{{ question.like }} Likes</span>
        <span class="font-bold">{{ question.total_answer }} Answers</span>
        <span class="font-bold">{{ question.view }} Views</span>
      </div>
      <div class="flex items-center justify-center">
        <div class="flex items-center mr-2">
          <img
            src="https://media.istockphoto.com/id/1176489653/fr/photo/belle-femme-noire-%C3%A9tonn%C3%A9e.jpg?s=170667a&w=0&k=20&c=0Gbbr4RSXCrOVYgSBc2wJFeTO9O5z-qcxL2S5DsgMHo="
            alt=""
            class="w-8 h-8 rounded-full object-cover object-center mr-3"
          />
          <a href="#" class="text-sm font-bold text-blue-500 hover:underline">
            {{ question.user }}
          </a>
        </div>
        <span class="text-gray-500 mr-2">asked</span>
        <span>{{ question.created_time }}</span>
      </div>
    </div>
  </div>
</template>

<script>
import { useStore } from "vuex";
import { ref } from "@vue/reactivity";
import { computed, onMounted } from "@vue/runtime-core";
export default {
  setup() {
    const store = useStore();

    onMounted(async () => await store.dispatch("fetchAllQuestions"));

    const questions = computed(() => store.getters.getQuestions);

    return {
      questions,
    };
  },
};
</script>

<style>
</style>
