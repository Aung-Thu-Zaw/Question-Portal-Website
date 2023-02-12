<template>
  <div class="flex flex-wrap items-center justify-between">
    <div class="mb-5">
      <form method="GET">
        <div
          class="
            flex
            items-center
            justify-between
            p-2
            bg-mid
            border border-gray-400
            rounded-sm
            min-w-[80px]
            w-[300px]
          "
        >
          <input
            type="text"
            name=""
            id=""
            v-model="globalSearch"
            class="w-full outline-none bg-transparent placeholder:text-gray-600"
            placeholder="Search..."
          />
          <i class="fa-solid fa-magnifying-glass ml-4 text-gray-500"></i>
        </div>
      </form>
    </div>
    <div class="flex items-center justify-end mb-5">
      <span
        @click="filterUsers('newusers')"
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
            route.path === '/users' && route.query.filter === 'newusers',
          'bg-dark text-white':
            route.path === '/users' && route.query.filter != 'oldusers',
        }"
      >
        New Users
      </span>
      <span
        @click="filterUsers('oldusers')"
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
