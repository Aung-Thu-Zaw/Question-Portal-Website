<template>
  <div class="flex flex-wrap items-center justify-between">
    <div class="mb-5">
      <form method="GET">
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
        @click="filterUsers('newusers')"
        class="filter-button border-l-2"
        :class="{
          'bg-dark text-white':
            route.path === '/users' && route.query.filter === 'newusers',
          'bg-dark text-white':
            route.path === '/users' && route.query.filter != 'oldusers',
        }"
      >
        New Users
      </span>
      <span
        @click="filterUsers('oldusers')"
        class="filter-button"
        :class="{
          'bg-dark text-white':
            route.path === '/users' && route.query.filter === 'oldusers',
        }"
      >
        Old Users
      </span>
    </div>
  </div>
</template>

  <script>
import { useRoute } from "vue-router";
import { useRouter } from "vue-router";
import { useStore } from "vuex";
import { ref } from "@vue/reactivity";
import { onMounted, onUnmounted, watch } from "@vue/runtime-core";
export default {
  setup() {
    const store = useStore();
    const route = useRoute();
    const router = useRouter();
    const page = ref("1");
    const globalSearch = ref(route.query.search ? route.query.search : "");

    watch(globalSearch, (current, previous) => {
      store.dispatch("fetchUsersWithPagination", {
        page: page.value,
        globalSearch: globalSearch.value,
        filterBy: route.query.filter,
        current,
      });

      if (route.query.filter) {
        router.push({
          path: "/users",
          query: {
            search: globalSearch.value,
            filter: route.query.filter,
          },
        });
      } else {
        router.push({
          path: "/users",
          query: {
            search: globalSearch.value,
            filter: "newusers",
          },
        });
      }
    });

    const filterUsers = (filterBy = "newusers") => {
      store.dispatch("fetchUsersWithPagination", {
        page: page.value,
        globalSearch: globalSearch.value,
        filterBy,
      });

      if (route.query.search) {
        router.push({
          path: "/users",
          query: {
            search: route.query.search,
            filter: filterBy,
          },
        });
      } else {
        router.push({
          path: "/users",
          query: {
            filter: filterBy,
          },
        });
      }
    };

    return {
      route,
      globalSearch,
      filterUsers,
    };
  },
};
</script>

    <style>
</style>
