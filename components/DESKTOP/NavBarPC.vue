<template>
  <section
    class="navBarPC max-[990px]:hidden h-max w-full max-w-[100vw] overflow-x-hidden flex items-center justify-between py-[4vh] px-[6vw] bg-gradient-to-b from-[#fff] to-[#f1f1f1] font-outfit"
  >
    <div class="h-full w-[35%] flex items-center justify-start">
      <HamburgerIcon @click="openMenu" class="text-[2.4rem] cursor-pointer" />
    </div>
    <div class="h-full w-[25%] flex justify-center items-center">
      <a
        href="/"
        class="h-max w-max block font-[300] text-[3.2rem] text-[#333] tracking-[-.1vw]"
      >
        WOLTIZ
      </a>
    </div>
    <div class="h-full w-[35%] flex justify-end gap-[4vw] items-center">
      <CartIconPC @click="openCart" class="cursor-pointer text-[2rem]" />
      <SearchBarPC class="cursor-pointer text-[2rem]" />
    </div>
  </section>
  <!-- MENU PAGE -->
  <div
    @click.self="closeMenu"
    class="menuPagePC opacity-0 invisible font-outfit fixed top-0 left-0 h-[100dvh] flex flex-col justify-end w-screen bg-transparent z-[999999] backdrop-blur-[12px] bg-[#fff1]"
  >
    <div
      class="menuPageContainerPC translate-x-[-100%] opacity-0 invisible h-full w-[50%] bg-[#f1f1f1] flex flex-col items-start overflow-hidden rounded-r-lg"
    >
      <div
        class="h-max w-full px-[4vw] items-center flex justify-between pt-[4vh]"
      >
        <a
          href="/"
          class="h-max w-max font-[300] text-[3rem] text-[#333] tracking-[-.1vw]"
        >
          WOLTIZ
        </a>
        <span>
          <Icon
            @click="closeMenu"
            icon="material-symbols:close-small-rounded"
            class="text-[3.2rem] text-[#777] cursor-pointer"
          />
        </span>
      </div>
      <div
        class="h-[66vh] w-screen flex flex-col justify-center gap-[3.2vh] items-start px-[4.2vw] text-[2.4rem] text-[#666]"
      >
        <a
          class="flex items-center gap-[1vw] hover:translate-x-[5%] duration-300 transition-all ease-in-out"
          href="/"
          >Flooring <arowTopRightIcon /></a
        ><a
          class="flex items-center gap-[1vw] hover:translate-x-[5%] duration-300 transition-all ease-in-out"
          href="/about"
          >About <arowTopRightIcon /></a
        ><a
          class="flex items-center gap-[1vw] hover:translate-x-[5%] duration-300 transition-all ease-in-out"
          href="/contact"
          >Contact <arowTopRightIcon /></a
        ><a
          class="flex items-center gap-[1vw] hover:translate-x-[5%] duration-300 transition-all ease-in-out"
          href="/privacy"
          >Privacy Policy <arowTopRightIcon
        /></a>

        <a
          class="flex items-center gap-[1vw] hover:translate-x-[5%] duration-300 transition-all ease-in-out"
          href="/designer"
          >Designer Login <arowTopRightIcon
        /></a>
      </div>
      <div class="h-[20vh] w-screen flex flex-col">
        <div
          class="flex h-full w-full justify-between px-[4vw] items-center"
        ></div>
        <div
          class="flex h-full w-full justify-between px-[4vw] py-[4vh] text-[1.8rem] items-center"
        >
          <span>Under Development | Demo</span>
          <span>Woltiz</span>
        </div>
      </div>
    </div>
  </div>
  <!-- CART PAGE -->
  <div
    @click.self="closeCart"
    class="cartPagePC invisible opacity-0 font-outfit fixed top-0 left-0 h-[100dvh] flex justify-end w-screen bg-transparent z-[999999] backdrop-blur-[12px] bg-[#fff1]"
  >
    <div
      v-auto-animate
      class="h-full w-[42%] bg-[#f1f1f1] rounded-l-lg flex flex-col items-start relative cartPageContainerPC invisible opacity-0 translate-x-[50%]"
    >
      <div
        v-if="userStore.cart.length > 0"
        class="h-max w-full flex items-center justify-between py-[3.2vh] px-[2vw]"
      >
        <span class="text-[2rem] mr-[2vw]">
          <Icon
            @click="closeCart"
            icon="material-symbols:close-small-rounded"
            class="text-[3.2rem] text-[#777] cursor-pointer"
        /></span>
        <div class="h-max w-max flex flex-col">
          <span class="text-[2.8svh] flex items-center gap-[2vw]">
            <span class="flex flex-col items-start">
              Hi, {{ capitalizeName(userPreference.name) }}
              <button
                class="text-[1.6svh] text-[#999] w-full text-right font-[300] tracking-[.1vw]"
              >
                {{ userPreference.phone }}
              </button>
            </span>
          </span>
        </div>
      </div>
      <div
        v-else
        class="h-max w-full flex justify-between items-center pt-[4vh] px-[2vw] text-[3rem]"
      >
        <Icon
          @click="closeCart"
          icon="material-symbols:close-small-rounded"
          class="text-[3.2rem] text-[#777] cursor-pointer"
        />
      </div>

      <!-- Scrollable content section -->
      <div
        v-auto-animate
        :key="userStore.cartKey"
        v-if="userStore.cart.length > 0"
        class="flex-grow w-full overflow-y-auto px-[0vw] pb-[12vh]"
      >
        <ul v-auto-animate v-for="(item, index) in userStore.cart" :key="index">
          <ReusablePrefNavCardMOB :item="item" :key="index" />
        </ul>
        <div v-auto-animate class="h-max w-[42vw] fixed bottom-0 right-0">
          <button
            @click="HandleOrderConfirmation"
            class="text-[2rem] w-full tracking-[.2vw] px-[4vw] py-[3.2vh] text-white bg-[#222] text-center shadow-xl"
          >
            <loadingIcon v-if="isConfirmLoading" class="text-white" />
            <span class="text-[2rem]" v-else> PROCEED TO CHECKOUT </span>
          </button>
        </div>
      </div>

      <!-- No items section -->
      <div
        v-auto-animate
        v-else
        class="h-max w-full flex items-center justify-between flex-col gap-[16vh] pt-[12vh] flex-grow"
      >
        <div
          class="h-max w-full px-[0vw] flex items-center justify-between flex-col gap-[2vw] flex-[4]"
        >
          <Icon
            icon="mdi:cart-off"
            class="text-[12rem] text-[#999] cursor-pointer"
          />
          <span class="text-[1.4rem] font-[300] text-center">
            Oops! It looks like you don't have any saved preferences yet. <br />
            Start exploring and add your favorite options!
          </span>
        </div>
        <div class="h-max w-full relative flex justify-center flex-[1]">
          <a
            class="text-[1.8rem] w-full bg-[#222] text-[#f1f1f1] text-center flex items-center justify-center py-[1.2rem] tracking-[.4vw]"
            href="/flooring"
            >EXPLORE</a
          >
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import gsap from "gsap";
import useUserStore from "~/stores/user";
const userStore = useUserStore();

import CartIconPC from "./CartIconPC.vue";
import ReusablePrefNavCardMOB from "./../MOBILE/FLOORING/DetailsReviewCards/ReusablePrefNavCard.vue";

import UserIcon from "./../../public/icons/UserIcon.vue";
import CloseIcon from "./../../public/icons/closeIcon";
import HamburgerIcon from "~/public/icons/HamburgerIcon.vue";
import loadingIcon from "~/public/icons/loadingIcon.vue";
import arowTopRightIcon from "~/public/icons/arowTopRightIcon.vue";
import SearchBarPC from "../SearchBar/SearchBarPC.vue";
import { Icon } from "@iconify/vue/dist/iconify.js";

const restrictedAccess = useCookie("restrictedAccess");

const isMenuOpen = ref(false);
const isCartOpen = ref(false);
const userPreference = ref("");
const router = useRouter();
const isMobile = ref(false);

const isConfirmLoading = ref(false);
function openMenu() {
  isMenuOpen.value = true;
  handleAutoAlpha("menuPagePC", 1);
  DISABLE_SCROLL();
  handleAutoAlpha("menuPageContainerPC", 1, 0, 0);
}
function openCart() {
  isCartOpen.value = true;
  handleAutoAlpha("cartPagePC", 1);
  DISABLE_SCROLL();
  handleAutoAlpha("cartPageContainerPC", 1, 0, 0);
}

function closeMenu() {
  handleAutoAlpha("menuPagePC", 0);
  ENABLE_SCROLL();
  handleAutoAlpha("menuPageContainerPC", 0, "-50%", 0);

  isMenuOpen.value = false;
}

function closeCart() {
  handleAutoAlpha("cartPagePC", 0);
  ENABLE_SCROLL();
  handleAutoAlpha("cartPageContainerPC", 0, "50%", 0);

  isCartOpen.value = false;
}
// Function to capitalize the first letter of the name
function capitalizeName(name) {
  if (!name) return "";
  return name.charAt(0).toUpperCase() + name.slice(1).toLowerCase();
}

const HandleOrderConfirmation = () => {
  isConfirmLoading.value = true;

  // Step 1: Set the cookie and validate
  useFetch("/api/set-cookie")
    .then(({ data, error }) => {
      if (error?.value) {
        throw new Error("Error setting cookie: " + error.value);
      }
      console.log("SET COOKIE DONE");
    })
    .then(async () => {
      // Step 2: Iterate over each cart item and update them individually
      for (const item of userStore.cart) {
        // Ensure the isOrderConfirmed property is set to true
        item.isOrderConfirmed = true;

        // Prepare the user data object for each item
        const userData = {
          id: item.id, // Make sure the id is included for updating the log
          name: userStore.userData.name,
          phone: addCountryCode(
            userStore.userData.phone,
            userStore.preference.country
          ), // Add country code if missing
          email: "",
          preference: item, // Include the current cart item as preference
          isOrderConfirmed: true,
        };

        // Call the update-logs API instead of insert-logs
        const response = await fetch("/api/update-log", {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify(userData),
        });

        if (!response.ok) {
          throw new Error(`Error updating log for item: ${item.id}`);
        }

        const logData = await response.json();
        console.log("Log updated for item:", logData);
      }
    })
    .then(() => {
      // Step 3: Clear user data and cart after successful update
      userStore.userData.email = "";
      userStore.userData.name = "";
      userStore.userData.phone = "";
      userStore.cart = []; // Clear the cart

      userPreference.value = null;
      restrictedAccess.value = false;

      isConfirmLoading.value = false;
      router.push(`/flooring/checkout`);
      console.log("SUCCESS");
    })
    .catch((err) => {
      isConfirmLoading.value = false;
      restrictedAccess.value = true;
      handleTempAnimation("errOverlayMOB");
      console.error("Unexpected errors:", err.message);
    });
};

onMounted(() => {
  handleDOMEntry("navBarMOB");

  const userPreferenceCookie = useCookie("userPreference").value;
  if (
    userPreferenceCookie &&
    typeof toRaw(userPreferenceCookie).name === "string"
  ) {
    userPreference.value = userPreferenceCookie;
  }
});
</script>
<style scoped>
.font-outfit {
  font-family: "Outfit", sans-serif;
  font-optical-sizing: auto;
  font-weight: 300;
  font-style: normal;
}
</style>
