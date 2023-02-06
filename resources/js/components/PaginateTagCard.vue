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
export default {
  components: {
    TailwindPagination,
  },
  setup() {
    const store = useStore();

    const fetchTagsWithPagination = onMounted(async (page) => {
      await store.dispatch("fetchTagsWithPagination", page);
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
