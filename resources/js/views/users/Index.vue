<template>
  <div class="relative flex w-full min-h-screen bg-light mt-20 font-rubik">
    <LeftSide />

    <div class="w-full p-3 bg-light space-y-5 border-l-2 lg:w-[70%]">
      <h1 class="text-3xl md:text-4xl mb-5 p-8">Users</h1>

      <UserFilter />

      <PaginateUserCard />
    </div>
  </div>
</template>

  <script>
import PaginateUserCard from "../../components/PaginateUserCard.vue";
import LeftSide from "../../components/LeftSide.vue";
import UserFilter from "../../components/UserFilter.vue";
export default {
  components: {
    PaginateUserCard,
    LeftSide,
    UserFilter,
  },

  setup() {
    return {};
  },
};
</script>

  <style>
</style>
