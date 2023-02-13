<template>
  <div class="hidden bg-light lg:block lg:w-1/4 p-5 space-y-5 font-rubik">
    <QuestionGroupsCardBox />

    <DiscussionGroupsCardBox />
  </div>
</template>

<script>
import DiscussionGroupsCardBox from "./DiscussionGroupsCardBox.vue";
import QuestionGroupsCardBox from "./QuestionGroupsCardBox.vue";
export default {
  components: {
    DiscussionGroupsCardBox,
    QuestionGroupsCardBox,
  },
};
</script>

<style>
</style>
