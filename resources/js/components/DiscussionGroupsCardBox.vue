<template>
  <!-- Discussion Groups -->
  <div class="group-card-container">
    <div class="single-group-card">
      <h1 class="text-xl">Disscussion Chat Groups</h1>
      <button class="group-card-btn">See All</button>
    </div>

    <SingleDiscussionGroupCard />
  </div>
</template>

<script>
import SingleDiscussionGroupCard from "./SingleDiscussionGroupCard.vue";
export default {
  components: { SingleDiscussionGroupCard },
};
</script>

<style>
</style>
