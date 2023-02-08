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
            v-model="global_search"
            class="w-full outline-none bg-transparent placeholder:text-gray-600"
            placeholder="Search..."
          />
          <i class="fa-solid fa-magnifying-glass ml-4 text-gray-500"></i>
        </div>
      </form>
    </div>
    <div class="flex items-center justify-end mb-5">
      <a
        href="#"
        class="
          text-lg text-dark
          px-3
          py-1
          border-2 border-gray-600
          hover:bg-gray-400 hover:text-white
          active:bg-gray-500
          transition-all
          duration-150
        "
      >
        Newest
      </a>
      <a
        href="#"
        class="
          text-lg text-dark
          px-3
          py-1
          border-r-2 border-t-2 border-b-2 border-gray-600
          hover:bg-gray-400 hover:text-white
          active:bg-gray-500
          transition-all
          duration-150
        "
      >
        Oldest
      </a>
      <a
        href="#"
        class="
          text-lg text-dark
          px-3
          py-1
          border-r-2 border-t-2 border-b-2 border-gray-600
          hover:bg-gray-400 hover:text-white
          active:bg-gray-500
          transition-all
          duration-150
        "
      >
        Popular
      </a>
      <a
        href="#"
        class="
          text-lg text-dark
          px-3
          py-1
          border-r-2 border-t-2 border-b-2 border-gray-600
          hover:bg-gray-400 hover:text-white
          active:bg-gray-500
          transition-all
          duration-150
        "
      >
        Name
      </a>
    </div>
  </div>
</template>

  <script>
import { useStore } from "vuex";
import { ref } from "@vue/reactivity";
import { watch } from "@vue/runtime-core";
export default {
  setup() {
    const store = useStore();
    const page = ref("1");
    const global_search = ref("");

    watch(global_search, (current, previous) => {
      store.dispatch("fetchTagsWithPagination", {
        page: page.value,
        global_search: global_search.value,
        current,
      });
    });
    return { global_search };
  },
};
</script>

  <style>
</style>
