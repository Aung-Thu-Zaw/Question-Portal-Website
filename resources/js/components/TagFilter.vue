<template>
  <div class="flex flex-wrap items-center justify-between">
    <div class="mb-5">
      <form>
        <div class="filter-search-box">
          <input
            type="text"
            name=""
            id=""
            v-model="globalSearch"
            class="filter-search-input"
            placeholder="Search..."
          />
          <i class="fa-solid fa-magnifying-glass ml-4 text-gray-500"></i>
        </div>
      </form>
    </div>
    <div class="flex items-center justify-end mb-5">
      <span
        @click="filterTags('newest')"
        class="filter-button border-l-2"
        :class="{
          'bg-dark text-white':
            route.path === '/tags' && route.query.filter === 'newest',
          'bg-dark text-white':
            route.path === '/tags' &&
            route.query.filter != 'oldest' &&
            route.query.filter != 'name',
        }"
      >
        Newest
      </span>
      <span
        @click="filterTags('oldest')"
        class="filter-button"
        :class="{
          'bg-dark text-white':
            route.path === '/tags' && route.query.filter === 'oldest',
        }"
      >
        Oldest
      </span>
      <span
        @click="filterTags('name')"
        class="filter-button"
        :class="{
          'bg-dark text-white':
            route.path === '/tags' && route.query.filter === 'name',
        }"
      >
        Name
      </span>
    </div>
  </div>
</template>

<script>
import { useRoute } from "vue-router";
import { useRouter } from "vue-router";
import { useStore } from "vuex";
import { ref } from "@vue/reactivity";
import { onMounted, watch } from "@vue/runtime-core";
export default {
  setup() {
    const store = useStore();
    const route = useRoute();
    const router = useRouter();
    const page = ref("1");
    const globalSearch = ref(route.query.search ? route.query.search : "");

    watch(globalSearch, (current, previous) => {
      store.dispatch("fetchTagsWithPagination", {
        page: page.value,
        globalSearch: globalSearch.value,
        filterBy: route.query.filter,
        current,
      });

      if (route.query.filter) {
        router.push({
          path: "/tags",
          query: {
            search: globalSearch.value,
            filter: route.query.filter,
          },
        });
      } else {
        router.push({
          path: "/tags",
          query: {
            search: globalSearch.value,
            filter: "newest",
          },
        });
      }
    });

    const filterTags = async (filterBy = "newest") => {
      await store.dispatch("fetchTagsWithPagination", {
        page: page.value,
        globalSearch: globalSearch.value,
        filterBy,
      });

      router.push({
        path: "/tags",
        query: {
          filter: filterBy,
        },
      });

      if (route.query.search) {
        router.push({
          path: "/tags",
          query: {
            search: route.query.search,
            filter: filterBy,
          },
        });
      } else {
        router.push({
          path: "/tags",
          query: {
            filter: filterBy,
          },
        });
      }
    };

    return {
      route,
      globalSearch,
      filterTags,
    };
  },
};
</script>

  <style>
</style>
