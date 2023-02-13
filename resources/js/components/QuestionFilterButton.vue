<template>
  <div class="flex items-center justify-end">
    <span
      @click="filterQuestions('newest')"
      class="filter-button border-l-2"
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
      class="filter-button"
      :class="{
        'bg-dark text-white':
          route.path === '/questions' && route.query.filter === 'oldest',
      }"
    >
      Oldest
    </span>
    <span
      @click="filterQuestions('interesting')"
      class="filter-button"
      :class="{
        'bg-dark text-white':
          route.path === '/questions' && route.query.filter === 'interesting',
      }"
    >
      Interesting
    </span>
    <span
      @click="filterQuestions('week')"
      class="filter-button"
      :class="{
        'bg-dark text-white':
          route.path === '/questions' && route.query.filter === 'week',
      }"
    >
      Week
    </span>
    <span
      @click="filterQuestions('month')"
      class="filter-button"
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
