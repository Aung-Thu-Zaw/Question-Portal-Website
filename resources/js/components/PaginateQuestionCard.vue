<template>
  <!-- Question Card -->
  <div
    v-for="question in questions.data"
    :key="question.id"
    class="
      flex flex-col
      items-start
      justify-between
      shadow-lg
      bg-light
      p-5
      border-2 border-gray-200
      space-y-5
      rounded-md
    "
  >
    <div class="relative w-full">
      <div class="flex items-center justify-between w-full">
        <a href="#" class="text-blue-500 hover:underline">
          <h1 class="text-xl md:text-2xl">
            <router-link
              :to="{
                name: 'questions.details',
                params: { slug: question.slug },
              }"
            >
              {{ question.id }}
              {{ question.question }}
            </router-link>
          </h1>
        </a>
        <span
          class="
            flex
            items-center
            justify-center
            w-8
            h-7
            rounded-full
            hover:text-gray-500 hover:cursor-pointer
            transition-all
          "
          @click="isMenuBoxHidden = !isMenuBoxHidden"
        >
          <i class="fa-solid fa-ellipsis-vertical"></i>
        </span>
      </div>

      <div
        class="
          absolute
          top-12
          right-0
          flex-col
          items-start
          justify-between
          border
          shadow
          bg-white
          rounded-md
        "
        :class="toggleMenuBox"
      >
        <div
          class="py-2 px-4 w-full hover:bg-gray-400 transition-all border-b-2"
        >
          <i class="fa-solid fa-share mr-3"></i>
          <span> Share </span>
        </div>

        <div class="py-2 px-4 w-full hover:bg-gray-400 transition-all">
          <i class="fa-solid fa-bookmark mr-3"></i>
          <span> Save To Bookmark </span>
        </div>
      </div>
    </div>
    <div class="flex items-center flex-wrap w-full">
      <a
        href="#"
        class="
          bg-slate-500
          text-white
          px-5
          py-1
          text-sm text-bold
          rounded-sm
          mr-2
        "
      >
        HTML
      </a>
      <a
        href="#"
        class="
          bg-slate-500
          text-white
          px-5
          py-1
          text-sm text-bold
          rounded-sm
          mr-2
        "
      >
        Css
      </a>
      <a
        href="#"
        class="
          bg-slate-500
          text-white
          px-5
          py-1
          text-sm text-bold
          rounded-sm
          mr-2
        "
      >
        Javascript
      </a>
    </div>
    <div
      class="
        flex
        items-center
        flex-wrap
        justify-between
        w-full
        space-y-3
        md:space-y-0
      "
    >
      <div class="flex items-center justify-center space-x-10">
        <span class="font-bold text-gray-600">3 Likes</span>
        <span class="font-bold text-gray-600">2 Answers</span>
        <span class="font-bold text-gray-600">{{ question.view }} Views</span>
      </div>
      <div class="flex items-center justify-center">
        <div class="flex items-center mr-2">
          <img
            src="https://media.istockphoto.com/id/1176489653/fr/photo/belle-femme-noire-%C3%A9tonn%C3%A9e.jpg?s=170667a&w=0&k=20&c=0Gbbr4RSXCrOVYgSBc2wJFeTO9O5z-qcxL2S5DsgMHo="
            alt=""
            class="w-8 h-8 rounded-full object-cover object-center mr-3"
          />
          <a href="#" class="font-bold text-blue-500 hover:underline">
            Aung Thu Zaw
          </a>
        </div>
        <span class="text-gray-500 mr-2">asked</span>
        <span>{{ question.created_time }}</span>
      </div>
    </div>
  </div>
  <div class="flex flex-wrap items-center justify-center">
    <TailwindPagination
      class="flex items-center"
      active-classes="bg-blue-50 border-blue-500 text-blue-600"
      item-classes="bg-white text-gray-500 border-gray-300 hover:bg-gray-50"
      :data="questions"
      :limit="2"
      @pagination-change-page="fetchQuestionsWithPagination"
    />
  </div>
</template>

<script>
import { TailwindPagination } from "laravel-vue-pagination";
import { ref } from "@vue/reactivity";
import { computed, onMounted } from "@vue/runtime-core";
import { useStore } from "vuex";
export default {
  components: {
    TailwindPagination,
  },
  setup() {
    const store = useStore();

    const isMenuBoxHidden = ref(true);

    const toggleMenuBox = computed(() => {
      return {
        hidden: isMenuBoxHidden.value == true,
        flex: isMenuBoxHidden.value == false,
      };
    });

    const fetchQuestionsWithPagination = onMounted(async (page = 1) => {
      await store.dispatch("fetchQuestionsWithPagination", {
        page,
        filterBy: "newest",
      });
    });

    return {
      isMenuBoxHidden,
      toggleMenuBox,
      questions: computed(() => store.getters.getPaginateQuestions),
      fetchQuestionsWithPagination,
    };
  },
};
</script>

<style>
</style>
