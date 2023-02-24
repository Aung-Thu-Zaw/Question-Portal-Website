<template>
  <div class="hidden bg-light lg:block lg:w-1/4 p-5 space-y-5 font-rubik">
    <QuestionGroupsCardContainer />

    <DiscussionGroupsCardContainer />
  </div>
</template>

<script>
import DiscussionGroupsCardContainer from "./DiscussionGroupsCardContainer.vue";
import QuestionGroupsCardContainer from "./QuestionGroupsCardContainer.vue";
export default {
  components: {
    DiscussionGroupsCardContainer,
    QuestionGroupsCardContainer,
  },
};
</script>

<style>
</style>
