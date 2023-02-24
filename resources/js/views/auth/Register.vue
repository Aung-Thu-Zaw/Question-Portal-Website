<template>
  <div
    class="
      flex
      items-center
      justify-center
      min-h-screen
      bg-lightGray
      font-roboto
    "
  >
    <!-- Form Container -->
    <div
      class="
        flex flex-col
        items-center
        justify-between
        w-100
        px-10
        py-10
        bg-white
        border-2
        rounded-md
        shadow-md
        md:flex-row md:px-5 md:w-[800px]
      "
    >
      <img
        src="../../assets/images/logo-light.png"
        alt=""
        class="hidden md:block w-1/2"
      />
      <!-- Form Start -->
      <form
        @submit.prevent="handleRegister"
        class="bg-white w-full md:px-5 md:w-1/2"
      >
        <h1 class="text-center text-2xl text-dark mb-5 font-bold">
          Create My Social Account
        </h1>

        <div class="mb-3">
          <label for="Name">Name</label>
          <div
            class="
              flex
              items-center
              justify-between
              border border-gray-500
              w-full
              rounded-md
              p-2
            "
          >
            <span>
              <i class="fa-solid fa-user text-gray-600"></i>
            </span>
            <input
              type="text"
              name="name"
              class="px-2 w-full focus:outline-none placeholder:text-gray-400"
              placeholder="Enter your name"
              required
              v-model="registerData.name"
            />
          </div>
          <p
            v-for="message in validationErrors?.name"
            :key="message.name"
            class="text-center text-red-600 mt-3"
          >
            {{ message }}
          </p>
        </div>
        <div class="mb-3">
          <label for="Name">Email</label>
          <div
            class="
              flex
              items-center
              justify-between
              border border-gray-500
              w-full
              rounded-md
              p-2
            "
          >
            <span>
              <i class="fa-solid fa-envelope text-gray-600"></i>
            </span>
            <input
              type="email"
              name="email"
              class="px-2 w-full focus:outline-none placeholder:text-gray-400"
              placeholder="Enter your email"
              required
              v-model="registerData.email"
            />
          </div>
          <p
            v-for="message in validationErrors?.email"
            :key="message.email"
            class="text-center text-red-600 mt-3"
          >
            {{ message }}
          </p>
        </div>
        <div class="mb-3">
          <label for="Name">Password</label>
          <div
            class="
              flex
              items-center
              justify-between
              border border-gray-500
              w-full
              rounded-md
              p-2
            "
          >
            <span>
              <i class="fa-solid fa-lock text-gray-600"></i>
            </span>
            <input
              type="password"
              name="password"
              class="px-2 w-full focus:outline-none placeholder:text-gray-400"
              placeholder="Enter your password"
              required
              v-model="registerData.password"
            />
          </div>
          <p
            v-for="message in validationErrors?.password"
            :key="message.password"
            class="text-center text-red-600 mt-3"
          >
            {{ message }}
          </p>
        </div>
        <div class="mb-5">
          <label for="Name">Confirm Password</label>
          <div
            class="
              flex
              items-center
              justify-between
              border border-gray-500
              w-full
              rounded-md
              p-2
            "
          >
            <span>
              <i class="fa-solid fa-lock text-gray-600"></i>
            </span>
            <input
              type="password"
              name="confirmation_password"
              class="px-2 w-full focus:outline-none placeholder:text-gray-400"
              placeholder="Retype your password"
              required
              v-model="registerData.password_confirmation"
            />
          </div>
        </div>
        <div class="mb-3">
          <button
            type="submit"
            class="
              p-3
              border
              bg-dark
              text-white
              w-full
              rounded-md
              hover:bg-gray-500 hover:text-black
              duration-150
            "
          >
            Sign Up
          </button>
        </div>
        <p class="text-center text-sm">
          Already have account?
          <router-link
            :to="{ name: 'login' }"
            class="text-blue-600 font-bold hover:cursor-pointer hover:underline"
            >Login</router-link
          >
        </p>
      </form>
      <!-- Form End -->
    </div>
  </div>
</template>

<script>
import { useStore } from "vuex";
import { reactive, ref } from "@vue/reactivity";
import { useRouter } from "vue-router";
import { computed } from "@vue/runtime-core";
export default {
  setup() {
    const store = useStore();
    const router = useRouter();
    const registerData = reactive({
      name: "",
      email: "",
      password: "",
      password_confirmation: "",
    });

    const handleRegister = async () => {
      try {
        const response = await store.dispatch("register", registerData);

        if (!response) {
          throw new Error("Response Not Found!");
        }

        return router.push("/");
      } catch (error) {
        console.log(error.message);
      }
    };

    const validationErrors = computed(() => {
      return store.getters.getValidationErrors;
    });

    return { registerData, handleRegister, validationErrors };
  },
};
</script>

<style>
</style>
