<template>
  <div class="flex items-center justify-end">
    <span
      @click="filterQuestions('newest')"
      class="
        text-lg
        px-3
        py-1
        border-2 border-gray-600
        hover:bg-gray-400 hover:text-white
        active:bg-gray-500
        transition-all
        duration-150
      "
      :class="{
        'bg-dark text-white':
          route.path === '/questions' && route.query.filter === 'newest',
        'bg-dark text-white':
          route.path === '/questions' &&
          route.query.filter != 'oldest' &&
          route.query.filter != 'interesting' &&
          route.query.filter != 'week' &&
          route.query.filter != 'month',
      }"
    >
      Newest
    </span>
    <span
      @click="filterQuestions('oldest')"
      class="
        text-lg
        px-3
        py-1
        border-r-2 border-t-2 border-b-2 border-gray-600
        hover:bg-gray-400 hover:text-white
        active:bg-gray-500
        transition-all
        duration-150
      "
      :class="{
        'bg-dark text-white':
          route.path === '/questions' && route.query.filter === 'oldest',
      }"
    >
      Oldest
    </span>
    <span
      @click="filterQuestions('interesting')"
      class="
        text-lg
        px-3
        py-1
        border-r-2 border-t-2 border-b-2 border-gray-600
        hover:bg-gray-400 hover:text-white
        active:bg-gray-500
        transition-all
        duration-150
      "
      :class="{
        'bg-dark text-white':
          route.path === '/questions' && route.query.filter === 'interesting',
      }"
    >
      Interesting
    </span>
    <span
      @click="filterQuestions('week')"
      class="
        text-lg
        px-3
        py-1
        border-r-2 border-t-2 border-b-2 border-gray-600
        hover:bg-gray-400 hover:text-white
        active:bg-gray-500
        transition-all
        duration-150
      "
      :class="{
        'bg-dark text-white':
          route.path === '/questions' && route.query.filter === 'week',
      }"
    >
      Week
    </span>
    <span
      @click="filterQuestions('month')"
      class="
        text-lg
        px-3
        py-1
        border-r-2 border-t-2 border-b-2 border-gray-600
        hover:bg-gray-400 hover:text-white
        active:bg-gray-500
        transition-all
        duration-150
      "
      :class="{
        'bg-dark text-white':
          route.path === '/questions' && route.query.filter === 'month',
      }"
    >
      Month
    </span>
  </div>
</template>

<script>
import { useRoute, useRouter } from "vue-router";
import { useStore } from "vuex";
export default {
  setup() {
    const route = useRoute();
    const router = useRouter();
    const store = useStore();

    const filterQuestions = (filterBy = "newest") => {
      store.dispatch("fetchQuestionsWithPagination", {
        filterBy,
      });
      router.push({
        path: "/questions",
        query: {
          filter: filterBy,
        },
      });
    };

    return { route, filterQuestions };
  },
};
</script>

<style>
</style>
