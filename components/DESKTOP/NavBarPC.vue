<template>
  <section
    class="navBarPC max-[990px]:hidden h-max w-full max-w-[100vw] overflow-x-hidden flex items-center justify-between py-[4vh] px-[6vw] bg-gradient-to-b from-[#fff] to-[#f1f1f1] font-outfit"
  >
    <div class="h-full w-[35%] flex items-center justify-start">
      <HamburgerIcon @click="openMenu" class="text-[3.8vh] cursor-pointer" />
    </div>
    <div class="h-full w-[25%] flex justify-center items-center">
      <a
        href="/"
        class="h-max w-max block font-[300] text-[3.2vw] text-[#333] tracking-[-.1vw]"
      >
        WOLTIZ
      </a>
    </div>
    <div class="h-full w-[35%] flex justify-end gap-[8vw] items-center">
      <CartIconPC @click="openCart" class="cursor-pointer" />
    </div>
  </section>
  <!-- MENU PAGE -->
  <div
    v-if="isMenuOpen"
    class="menuPageMOB opacity-0 invisible font-outfit fixed top-0 left-0 h-screen w-screen bg-[#f5f3f1] z-[9999]"
  >
    <div
      class="h-max w-screen px-[4vw] items-center flex justify-between pt-[4vh]"
    >
      <a
        href="/"
        class="h-max w-max font-[300] text-[7.2vh] text-[#333] tracking-[-.1vw]"
      >
        WOLTIZ
      </a>
      <span>
        <CloseIcon class="text-[2.8vw] cursor-pointer" @click="closeMenu" />
      </span>
    </div>
    <div
      class="h-[66vh] w-screen flex flex-col justify-center gap-[2vh] items-start px-[4vw] text-[2.4vw]"
    >
      <a href="/">Flooring</a><a href="/about">About</a
      ><a href="/contact">Contact</a><a href="/privacy">Privacy Policy</a>

      <a
        class="bg-[#333] px-[1vw] rounded-sm text-[#f1f1f1] text-[3.4svh] py-[1svh] mt-[5svh]"
        href="/designer"
        >Designer Login</a
      >
    </div>
    <div class="h-[20vh] w-screen flex flex-col">
      <div
        class="flex h-full w-full justify-between px-[4vw] items-center"
      ></div>
      <div
        class="flex h-full w-full justify-between px-[4vw] text-[1.2vw] items-center"
      >
        <span>Under Development | Demo</span>
        <span>Woltiz</span>
      </div>
    </div>
  </div>
  <!-- CART PAGE -->
  <div
    class="cartPageMOB invisible opacity-0 font-outfit fixed top-0 left-0 h-[100dvh] w-screen bg-[#f5f3f1] z-[999999]"
  >
    <div
      v-if="userStore.cart.length > 0"
      class="h-max w-full flex items-center justify-between py-[3.2vh] px-[4vw] bg-[#fff] rounded-b-[12vw]"
    >
      <div class="h-max w-max flex flex-col">
        <span class="text-[2.8svh] flex items-center gap-[2vw]">
          <UserIcon class="text-[4svh]" />
          <span class="flex flex-col items-start">
            {{ capitalizeName(userPreference.name) }}
            <button
              class="text-[1.6svh] text-[#999] w-full text-left font-[300] tracking-[.4vw]"
            >
              {{ userPreference.phone }}
            </button>
          </span>
        </span>
      </div>
      <span class="text-[4.2svh] mr-[2vw]"
        ><CloseIcon @click="closeCart"
      /></span>
    </div>
    <div
      v-else
      class="h-max w-full flex justify-between items-center pt-[4vh] px-[6vw] text-[4vh]"
    >
      <a
        href="/"
        class="h-max w-max font-[300] text-[4.2vh] text-[#333] tracking-[-.1vw]"
      >
        WOLTIZ
      </a>
      <CloseIcon @click="closeCart" />
    </div>

    <!-- Scrollable content section -->
    <div
      :key="userStore.cartKey"
      v-if="userStore.cart.length > 0"
      class="h-[70vh] w-full test overflow-y-auto px-[4vw] pb-[6vh]"
    >
      <div v-for="(item, index) in userStore.cart" :key="index">
        <ReusablePrefNavCardMOB :item="item" :key="index" />
      </div>
      <div class="h-max w-full px-[4vw] flex justify-center">
        <button
          @click="HandleOrderConfirmation"
          class="text-[2.4svh] tracking-[.4vw] bottom-[2vh] px-[4vw] min-[990px]:py-[2vh] rounded-md py-[2.4vh] text-white bg-[#222] text-center shadow-xl"
        >
          <loadingIcon v-if="isConfirmLoading" class="text-white" />
          <span class="text-[2svh]" v-else> PROCEED TO CHECKOUT </span>
        </button>
      </div>
    </div>

    <!-- No items section -->
    <div
      v-else
      class="h-max w-full flex items-center flex-col gap-[16svh] pt-[18svh] px-[4vw]"
    >
      <NuxtImg class="w-[10vw]" src="/icons/box.webp" />
      <span class="text-[2vw] font-[300] text-center">
        Oops! It looks like you don't have any saved preferences yet. <br />
        Start exploring and add your favorite options!
      </span>
      <a
        class="text-[1.8vw] tracking-[.4vw] px-[4vw] rounded-md py-[3.2vh] text-white bg-[#222] text-center shadow-xl fixed bottom-[6vh] left-[50vw] translate-x-[-50%] w-[40vw] shadow-xl"
        href="/flooring"
        >EXPLORE</a
      >
    </div>
  </div>
</template>

<script setup>
import gsap from "gsap";
import useUserStore from "~/stores/user";
const userStore = useUserStore();

import ReusablePrefNavCardMOB from "./../MOBILE/FLOORING/DetailsReviewCards/ReusablePrefNavCard.vue";

import UserIcon from "./../../public/icons/UserIcon.vue";
import CloseIcon from "./../../public/icons/closeIcon";
import HamburgerIcon from "~/public/icons/HamburgerIcon.vue";

const restrictedAccess = useCookie("restrictedAccess");

const isMenuOpen = ref(false);
const isCartOpen = ref(false);
const userPreference = ref("");
const router = useRouter();
const isMobile = ref(false);

import CartIconPC from "./CartIconPC.vue";
const isConfirmLoading = ref(false);
function openMenu() {
  isMenuOpen.value = true;
  handleAutoAlpha("menuPageMOB", 1);
  DISABLE_SCROLL();
}
function closeMenu() {
  handleAutoAlpha("menuPageMOB", 0);
  ENABLE_SCROLL();
  isMenuOpen.value = false;
}

function openCart() {
  isCartOpen.value = true;
  handleAutoAlpha("cartPageMOB", 1);
  DISABLE_SCROLL();
}
function closeCart() {
  handleAutoAlpha("cartPageMOB", 0);
  ENABLE_SCROLL();
  isMenuOpen.value = false;
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
