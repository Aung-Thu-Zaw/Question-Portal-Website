<template>
  <div class="p-5 bg-light min-h-screen md:p-20">
    <div class="md:container md:mx-auto">
      <h1 class="text-3xl mb-10 font-bold">Ask a public question</h1>

      <div class="p-5 bg-blue-200 rounded-md mb-10">
        <h1 class="text-2xl mb-5">Writing a good question</h1>
        <p class="text-red-800 mb-5">
          This site is only support for technology problems.
        </p>

        <p>Steps</p>
        <ul class="list-disc px-5">
          <li>Summarize your problem in a one-line title.</li>
          <li>Describe your problem in more detail.</li>
          <li>Describe what you tried and what you expected to happen.</li>
          <li>
            Add “tags” which help surface your question to members of the
            community.
          </li>
          <li>Review your question and post it to the site.</li>
        </ul>
      </div>
      <form action="" method="POST">
        <div class="mb-5 p-5 border bg-white rounded-md shadow-sm">
          <h3 class="text-2xl font-semibold">Title</h3>
          <p class="my-3">
            Be specific and imagine you're asking a question to another person.
          </p>
          <input
            type="text"
            class="border-2 p-3 w-full outline-none rounded-md"
            placeholder="Write Your Question?"
          />
        </div>
      </form>
    </div>
  </div>
</template>

<script>
export default {};
</script>

<style>
</style>