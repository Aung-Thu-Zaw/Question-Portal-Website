<template>
  <div class="group-card-container">
    <div class="single-group-card">
      <h1 class="text-xl">Question Groups</h1>
      <button class="group-card-btn">See All</button>
    </div>

    <SingleQuestionGroupCard />
  </div>
</template>

<script>
import SingleQuestionGroupCard from "./SingleQuestionGroupCard.vue";
export default {
  components: { SingleQuestionGroupCard },
};
</script>

<style>
</style>
