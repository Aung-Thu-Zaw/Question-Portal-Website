<template>
  <div class="grid-card-container">
    <div v-for="user in users.data" :key="user.id" class="grid-card">
      <div class="flex items-center mb-3">
        <img src="../assets/images/logo-dark.png" alt="" class="w-12 mr-3" />
        <div class="flex flex-col items-start justify-between">
          <span class="text-lg font-bold text-slate-600"
            >{{ user.id }} {{ user.name }}</span
          >
          <span class="text-sm text-slate-500">taninaryi , Myeik</span>
        </div>
      </div>
      <div class="flex flex-wrap items-center justify-between">
        <span>18 questions</span>
        <span>5 answers</span>
      </div>
    </div>
  </div>
  <div class="flex items-center justify-center w-full">
    <TailwindPagination
      class="flex items-center"
      active-classes="bg-blue-50 border-blue-500 text-blue-600"
      item-classes="bg-white text-gray-500 border-gray-300 hover:bg-gray-50"
      :data="users"
      :limit="2"
      @pagination-change-page="fetchUsersWithPagination"
    />
  </div>
</template>

  <script>
import { TailwindPagination } from "laravel-vue-pagination";
import { computed, onMounted } from "@vue/runtime-core";
import { useStore } from "vuex";
import { useRoute, useRouter } from "vue-router";
export default {
  components: {
    TailwindPagination,
  },
  setup() {
    const store = useStore();
    const route = useRoute();
    const router = useRouter();

    const fetchUsersWithPagination = onMounted(async (page = 1) => {
      await store.dispatch("fetchUsersWithPagination", {
        page,
        globalSearch: route.query.search ? route.query.search : "",
        filterBy: route.query.filter ? route.query.filter : "newusers",
      });

      if (route.query.page || page != 1) {
        router.push({
          path: "/users",
          query: {
            page,
            filter: route.query.filter ? route.query.filter : "newusers",
          },
        });
      } else {
        router.replace({
          path: "/users",
          query: {},
        });
      }

      if (page != 1 && route.query.search) {
        router.push({
          path: "/users",
          query: {
            page,
            search: route.query.search ? route.query.search : "",
            filter: route.query.filter ? route.query.filter : "newusers",
          },
        });
      } else if (route.query.page && route.query.search) {
        router.push({
          path: "/users",
          query: {
            page,
            search: route.query.search ? route.query.search : "",
            filter: route.query.filter ? route.query.filter : "newusers",
          },
        });
      }
    });

    return {
      users: computed(() => store.getters.getPaginateUsers),
      fetchUsersWithPagination,
    };
  },
};
</script>

  <style>
</style>
