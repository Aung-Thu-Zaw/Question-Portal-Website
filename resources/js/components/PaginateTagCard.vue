<template>
  <div
    class="
      grid grid-cols-1
      gap-3
      sm:grid-cols-2
      md:grid-cols-2
      lg:grid-cols-3
      xl:grid-cols-4
    "
  >
    <div
      v-for="tag in tags.data"
      :key="tag.id"
      class="
        border-2 border-gray-500
        shadow-sm
        rounded-sm
        h-auto
        max-h-170px
        p-5
      "
    >
      <div class="flex flex-col items-start justify-between mb-2">
        <a
          href="#"
          class="
            bg-slate-500
            text-white
            px-5
            py-1
            text-sm text-bold
            rounded-sm
            mb-3
          "
        >
          {{ tag.id }}
          {{ tag.name }}
        </a>
        <p class="text-sm text-gray-600">
          {{ tag.description }}
        </p>
      </div>
      <div class="flex items-center justify-between">
        <span class="text-sm text-gray-500">1 Questions</span>
        <span class="text-sm text-gray-500">{{ tag.created_time }}</span>
      </div>
    </div>
  </div>
  <div class="flex items-center justify-center w-full">
    <TailwindPagination
      class="flex items-center"
      active-classes="bg-blue-50 border-blue-500 text-blue-600"
      item-classes="bg-white text-gray-500 border-gray-300 hover:bg-gray-50"
      :data="tags"
      :limit="2"
      @pagination-change-page="fetchTagsWithPagination"
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

    const fetchTagsWithPagination = onMounted(async (page = 1) => {
      await store.dispatch("fetchTagsWithPagination", {
        page,
        globalSearch: route.query.search ? route.query.search : "",
        filterBy: route.query.filter ? route.query.filter : "newest",
      });

      if (route.query.page || page != 1) {
        router.push({
          path: "/tags",
          query: {
            page,
            filter: route.query.filter ? route.query.filter : "newest",
          },
        });
      } else {
        router.replace({
          path: "/tags",
          query: {},
        });
      }

      if (page != 1 && route.query.search) {
        router.push({
          path: "/tags",
          query: {
            page,
            search: route.query.search ? route.query.search : "",
            filter: route.query.filter ? route.query.filter : "newest",
          },
        });
      } else if (route.query.page && route.query.search) {
        router.push({
          path: "/tags",
          query: {
            page,
            search: route.query.search ? route.query.search : "",
            filter: route.query.filter ? route.query.filter : "newest",
          },
        });
      }
    });

    return {
      tags: computed(() => store.getters.getPaginateTags),
      fetchTagsWithPagination,
    };
  },
};
</script>

<style>
</style>
