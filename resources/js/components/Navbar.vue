<template>
  <!-- Navbar -->
  <nav id="navbar" class="fixed top-0 left-0 right-0 z-10 font-playfair">
    <div
      class="
        flex
        items-center
        justify-between
        px-5
        py-3
        bg-dark
        border-b-2 border-b-slate-600
      "
    >
      <!-- Logo -->
      <div
        ref="mobile-menu-btn"
        class="flex items-center justify-between w-auto"
      >
        <!-- Mobile Hamburger Button -->
        <div
          class="md:hidden mr-5"
          @click="isMobileMenuClosed = !isMobileMenuClosed"
        >
          <button
            @click="isButtonClosed = !isButtonClosed"
            type="button"
            class="z-40 block hamburger md:hidden focus:outline-none"
            :class="toggleHamburgerButton"
          >
            <span class="hamburger-top border-2"></span>
            <span class="hamburger-middle border-2"></span>
            <span class="hamburger-bottom border-2"></span>
          </button>
        </div>
        <h1 class="text-2xl text-gray-900 font-bold mr-5">
          <router-link to="/"> Questions Portal </router-link>
        </h1>
      </div>

      <!-- Search Form -->
      <form action="">
        <div
          class="
            hidden
            items-center
            justify-between
            p-3
            bg-mid
            border border-gray-400
            rounded-xl
            min-w-[100px]
            md:w-[500px] md:flex
          "
        >
          <input
            type="text"
            name=""
            id=""
            class="w-full outline-none bg-transparent placeholder:text-gray-600"
            placeholder="Search..."
          />
          <i class="fa-solid fa-magnifying-glass ml-4 text-gray-500"></i>
        </div>
      </form>

      <!-- Notification And  Profile -->
      <div class="flex items-center justify-between w-[150px] md:w-[120px]">
        <!-- Search Bar Mobile Button-->
        <div
          class="
            group
            flex
            items-center
            justify-between
            p-3
            bg-mid
            rounded-3xl
            md:hidden
            hover:cursor-pointer hover:bg-gray-600
            transition-all
          "
          @click="isSearchBoxHidden = !isSearchBoxHidden"
        >
          <i
            class="
              fa-solid fa-magnifying-glass
              text-gray-700
              group-hover:text-white
            "
          ></i>
        </div>

        <!-- Notification Button -->
        <div
          class="
            relative
            group
            flex
            items-center
            justify-center
            w-4
            h-4
            p-5
            rounded-full
            bg-mid
            hover:bg-gray-600 hover:cursor-pointer
            transition-all
          "
          @click="isNotificationBoxHidden = !isNotificationBoxHidden"
        >
          <i class="fa-solid fa-bell text-gray-700 group-hover:text-white"></i>
          <span
            class="
              absolute
              -top-2
              -right-2
              text-center text-sm text-white
              bg-red-600
              w-5
              h-5
              rounded-full
            "
            >99</span
          >
        </div>
        <!-- Profile Button -->
        <div @click="isProfileBoxHidden = !isProfileBoxHidden">
          <img
            src="https://media.istockphoto.com/id/1176489653/fr/photo/belle-femme-noire-%C3%A9tonn%C3%A9e.jpg?s=170667a&w=0&k=20&c=0Gbbr4RSXCrOVYgSBc2wJFeTO9O5z-qcxL2S5DsgMHo="
            alt=""
            class="
              w-10
              h-10
              rounded-full
              object-cover object-center
              ring-2 ring-blue-500
              hover:cursor-pointer
            "
          />
        </div>
      </div>
    </div>

    <!-- Notification Box-->
    <div
      class="
        absolute
        right-3
        z-10
        w-[350px]
        h-[930px]
        p-2
        bg-white
        rounded-lg
        shadow-2xl
        border-cyan-900
        overflow-y-scroll
        notification-scroll
      "
      :class="toggleNotificationBox"
    >
      <div class="flex items-center justify-between border-b-4 mb-3">
        <h1 class="text-xl text-dark font-bold pl-3 py-3">Notifications</h1>
        <span
          ref="close-btn"
          class="
            flex
            items-center
            justify-center
            w-6
            h-6
            rounded-full
            bg-gray-300
            hover:bg-gray-500 hover:text-white
            active:bg-gray-500
            hover:cursor-pointer
            transition-all
            duration-100
          "
          @click="isNotificationBoxHidden = !isNotificationBoxHidden"
        >
          <i class="fa-solid fa-xmark"></i>
        </span>
      </div>
      <!-- Single Notification -->
      <!-- Loop This -->
      <div class="border-b-2">
        <div class="flex items-start p-2 w-full">
          <img src="" alt="" class="w-10 rounded-full mr-2" />
          <div>
            <div>
              <span class="font-bold text-sm text-gray-800 mr-1"
                >Aung Thu Zaw</span
              >
              <span class="text-gray-600 text-sm"
                >"Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Neque, est!"
              </span>
            </div>
            <div class="flex items-center">
              <span
                class="w-3 h-3 rounded-full mr-2 bg-blue-500 animate-pulse"
              ></span>
              <span class="text-blue-500 text-sm">2 hours ago</span>
            </div>
          </div>
        </div>
      </div>
    </div>

    <!-- Profile Box -->
    <div
      class="
        absolute
        top-15
        right-0
        w-[150px]
        h-auto
        z-10
        bg-white
        rounded-md
        shadow-lg
        border-2 border-gray-300
      "
      :class="toggleProfileBox"
    >
      <div
        class="
          py-2
          px-4
          w-full
          text-sm
          hover:bg-gray-400
          transition-all
          border-b-2
        "
      >
        <i class="fa-solid fa-id-card mr-3"></i>
        <span> Profile </span>
      </div>
      <div class="py-2 px-4 w-full text-sm hover:bg-gray-400 transition-all">
        <i class="fa-solid fa-right-from-bracket mr-3"></i>
        <span> Logout </span>
      </div>
    </div>

    <!-- Mobile Search Form -->
    <div
      class="absolute z-10 w-full border bg-gray-600 p-5"
      :class="toggleMobileSearchInput"
    >
      <form action="">
        <div
          class="
            flex
            items-center
            justify-between
            p-3
            bg-mid
            border border-gray-400
            rounded-xl
            min-w-[100px]
            md:w-[500px] md:flex
          "
        >
          <input
            type="text"
            name=""
            id=""
            class="w-full outline-none bg-transparent placeholder:text-gray-600"
            placeholder="Search..."
          />
          <i class="fa-solid fa-magnifying-glass ml-4 text-gray-500"></i>
        </div>
      </form>
    </div>

    <!-- Mobile Menu  -->
    <div
      class="absolute z-10 bg-white border-2 shadow-lg px-5 w-[60%] md:hidden"
      :class="toggleMobileMenu"
    >
      <div class="py-10 w-full">
        <a
          href="#"
          class="
            block
            text-xl
            w-full
            p-2
            px-5
            border-2
            rounded-md
            shadow-md
            bg-white
            hover:bg-dark hover:text-white
            transition-all
          "
        >
          <i class="fa-solid fa-house mr-3"></i>
          Home
        </a>
      </div>

      <div class="py-1 mb-3">
        <h1 class="text-3xl text-gray-400 tracking-wide mb-5 px-2">Public</h1>

        <div
          class="
            text-md
            py-3
            border-b-2
            px-5
            text-gray-700
            hover:bg-dark hover:text-white
            transition-all
          "
        >
          <i class="fa-solid fa-question mr-3"></i>
          <span>Questions</span>
        </div>
        <div
          class="
            text-md
            py-3
            border-b-2
            px-5
            text-gray-700
            hover:bg-dark hover:text-white
            transition-all
          "
        >
          <i class="fa-solid fa-tag mr-3"></i>
          <span>Tags</span>
        </div>
        <div
          class="
            text-md
            py-3
            border-b-2
            px-5
            text-gray-700
            hover:bg-dark hover:text-white
            transition-all
          "
        >
          <i class="fa-solid fa-users mr-3"></i>
          <span>Users</span>
        </div>
      </div>

      <!-- Question Groups -->
      <div class="py-3 mb-3">
        <h1 class="text-xl text-gray-400 tracking-wide mb-3 px-2">
          Your Question Groups
        </h1>

        <SingleYourQuestionGroupCard />
      </div>

      <!-- Disscussion Groups -->
      <div class="py-3 mb-3">
        <h1 class="text-xl text-gray-400 tracking-wide mb-3 px-2">
          Your Disscussion Chat Groups
        </h1>

        <SingleYourDiscussionGroupCard />
      </div>
    </div>
  </nav>
</template>

<script>
import SingleYourQuestionGroupCard from "./SingleYourQuestionGroupCard.vue";
import SingleYourDiscussionGroupCard from "./SingleYourDiscussionGroupCard.vue";
import { ref } from "@vue/reactivity";
import { computed } from "@vue/runtime-core";
export default {
  components: {
    SingleYourQuestionGroupCard,
    SingleYourDiscussionGroupCard,
  },

  setup() {
    const isNotificationBoxHidden = ref(true);
    const isProfileBoxHidden = ref(true);
    const isSearchBoxHidden = ref(true);
    const isMobileMenuHidden = ref(true);
    const isButtonClosed = ref(false);
    const isMobileMenuClosed = ref(true);

    const toggleNotificationBox = computed(() => {
      return {
        hidden: isNotificationBoxHidden.value,
      };
    });

    const toggleProfileBox = computed(() => {
      return {
        hidden: isProfileBoxHidden.value,
      };
    });

    const toggleMobileSearchInput = computed(() => {
      return {
        hidden: isSearchBoxHidden.value,
      };
    });

    const toggleHamburgerButton = computed(() => {
      return {
        open: isButtonClosed.value,
      };
    });

    const toggleMobileMenu = computed(() => {
      return {
        hidden: isMobileMenuClosed.value,
      };
    });

    return {
      isNotificationBoxHidden,
      isProfileBoxHidden,
      isSearchBoxHidden,
      isMobileMenuHidden,
      isButtonClosed,
      isMobileMenuClosed,
      toggleNotificationBox,
      toggleProfileBox,
      toggleMobileSearchInput,
      toggleHamburgerButton,
      toggleMobileMenu,
    };
  },
};
</script>

<style scoped>
.notification-scroll::-webkit-scrollbar {
  display: none;
}

/* Hamburger Menu */

.hamburger {
  cursor: pointer;
  width: 24px;
  height: 24px;
  transition: all 0.25s;
  position: relative;
}

.hamburger-top,
.hamburger-middle,
.hamburger-bottom {
  position: absolute;
  width: 24px;
  height: 2px;
  top: 0;
  left: 0;
  background: #fff;
  transform: rotate(0);
  transition: all 0.5s;
}

.hamburger-middle {
  transform: translateY(7px);
}
.hamburger-bottom {
  transform: translateY(14px);
}

.open {
  transform: rotate(90deg);
}

.open .hamburger-top {
  transform: rotate(45deg) translateY(6px) translateX(6px);
}

.open .hamburger-middle {
  display: none;
}

.open .hamburger-bottom {
  transform: rotate(-45deg) translateY(6px) translateX(-6px);
}
</style>
