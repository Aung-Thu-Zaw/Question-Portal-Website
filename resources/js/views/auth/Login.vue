 <template>
  <div
    class="flex items-center justify-center min-h-screen bg-lightGray font-roboto"
  >
    <!-- Form Container -->
    <div
      class="flex flex-col items-center justify-between w-100 px-10 py-10 bg-white border-2 rounded-md shadow-md md:flex-row md:px-5 md:w-[800px]"
    >
      <img
        src="../../assets/images/logo-light.png"
        alt=""
        class="hidden md:block w-1/2"
      />
      <!-- Form Start -->
      <form
        @submit.prevent="handleLogin"
        class="bg-white w-full md:px-5 md:w-1/2"
      >
        <h1 class="text-center text-2xl text-dark mb-5 font-bold">
          Login With My Social Account
        </h1>
        <div class="mb-3">
          <label for="Name">Email</label>
          <div
            class="flex items-center justify-between border border-gray-500 w-full rounded-md p-2"
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
              v-model="loginFormData.email"
            />
          </div>
          <p
            v-if="validationErrorMessage"
            class="text-center text-red-600 mt-3"
          >
            {{ validationErrorMessage }}
          </p>
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
            class="flex items-center justify-between border border-gray-500 w-full rounded-md p-2"
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
              v-model="loginFormData.password"
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

        <div class="mb-5 flex items-center justify-between">
          <div>
            <input type="checkbox" name="" id="" class="mr-2" />
            <span>Keep me login</span>
          </div>
          <div>
            <a href="#" class="text-blue-500 underline hover:text-blue-800"
              >Forgot Password?</a
            >
          </div>
        </div>
        <div class="mb-3">
          <button
            type="submit"
            class="p-3 border bg-dark text-white w-full rounded-md hover:bg-gray-500 hover:text-black duration-150"
          >
            Login
          </button>
        </div>

        <p class="text-center text-sm">
          You don't have any account yet?
          <router-link
            :to="{ name: 'register' }"
            class="text-blue-600 font-bold hover:cursor-pointer hover:underline"
            >Create Account</router-link
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
export default {
  setup() {
    const store = useStore();
    const router = useRouter();
    const validationErrors = ref(null);
    const validationErrorMessage = ref("");
    const loginFormData = reactive({
      email: "",
      password: "",
    });

    const handleLogin = async () => {
      try {
        const response = await store.dispatch("login", loginFormData);

        if (!response) {
          throw new Error("Response data not Found!");
        }

        return router.push({
          path: "/",
          query: { message: "Welcome Back" },
        });
      } catch (error) {
        if (error.response?.data) {
          validationErrors.value = error.response.data.errors;
          validationErrorMessage.value = error.response.data.message;
        }
        console.log(error);
      }
    };

    return {
      loginFormData,
      handleLogin,
      validationErrors,
      validationErrorMessage,
    };
  },
};
</script>

 <style>
</style>
