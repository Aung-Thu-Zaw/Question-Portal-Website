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
      class="
        border-2 border-gray-500
        shadow-sm
        rounded-sm
        h-auto
        max-h-170px
        p-5
      "
    >
      <div class="flex items-center mb-3">
        <img src="../assets/images/logo-dark.png" alt="" class="w-12 mr-3" />
        <div class="flex flex-col items-start justify-between">
          <span class="text-xl font-bold text-slate-600">Aung Thu Zaw</span>
          <span class="text-sm text-slate-500">taninaryi , Myeik</span>
        </div>
      </div>
      <div class="flex flex-wrap items-center justify-between">
        <span class="text-sm text-slate-500">18 questions</span>
        <span class="text-sm text-slate-500">5 answers</span>
      </div>
    </div>
  </div>

  <!-- <div class="flex items-center justify-center w-full">
    <TailwindPagination
      class="flex items-center"
      active-classes="bg-blue-50 border-blue-500 text-blue-600"
      item-classes="bg-white text-gray-500 border-gray-300 hover:bg-gray-50"
      :data="tags"
      :limit="2"
      @pagination-change-page="fetchTagsWithPagination"
    />
  </div> -->
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

    return {};
  },
};
</script>

  <style>
</style>
