<template>
  <div
    class="container mx-auto min-h-screen flex flex-col items-center justify-center"
  >
    <h1 class="text-9xl">404</h1>
    <p class="text-xl text-slate-400 font-bold mb-5">Not Found URL</p>

    <router-link to="/" class="text-blue-500 animate-bounce">
      <i class="fa-solid fa-arrow-left mr-3"></i>
      Go back to home page
    </router-link>
  </div>
</template>

<script>
export default {};
</script>

<style>
</style>
