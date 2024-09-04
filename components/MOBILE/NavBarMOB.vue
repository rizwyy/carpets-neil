<template>
  <!-- NAV BAR -->
  <div
    id="NavBarMOB"
    class="navBarMOB bg-navBarBG opacity-[.2] min-[990px]:hidden h-[12vh] px-[6vw] w-full flex items-center justify-between z-[99] font-outfit relative"
  >
    <div class="h-max w-max">
      <HamburgerIcon @click="openMenu" class="text-[3.8vh]" />
    </div>
    <a
      href="/"
      class="h-max w-max absolute top-[50%] left-[50%] translate-x-[-58%] translate-y-[-50%] font-[300] text-[5vh] text-[#333] tracking-[-.1vw]"
    >
      WOLTIZ
    </a>
    <div class="h-max w-max"><CartIconMOB @click="openCart" /></div>
  </div>
  <!-- --------- -->
  <!-- --------- -->
  <!-- MENU -->
  <!-- --------- -->
  <!-- --------- -->
  <div
    v-if="isMenuOpen"
    class="menuPageMOB opacity-0 invisible font-outfit fixed top-0 left-0 h-[100dvh] w-screen bg-[#f5f3f1] z-[999999]"
  >
    <div class="h-[14svh] w-screen px-[4vw] items-center flex justify-between">
      <a
        href="/"
        class="h-max w-max font-[300] text-[5vh] text-[#333] tracking-[-.1vw]"
      >
        WOLTIZ
      </a>
      <span class="text-[5vh]">
        <CloseIcon @click="closeMenu" />
      </span>
    </div>
    <div
      class="h-[66svh] w-screen flex flex-col justify-center gap-[2vh] items-start px-[4vw] text-[3.8vh]"
    >
      <a href="/">Designer</a><a href="/about">About</a><span>Contact</span
      ><a href="/privacy">Privacy Policy</a>
    </div>
    <div class="h-[20svh] w-screen flex flex-col justify-start">
      <div class="flex h-full w-full justify-between px-[6vw] items-center">
        <span>Under Development | Demo</span>
        <span>Woltiz</span>
      </div>
    </div>
  </div>
  <!-- --------- -->
  <!-- --------- -->
  <!-- CART -->
  <!-- --------- -->
  <!-- --------- -->
  <div
    class="cartPageMOB invisible opacity-0 font-outfit fixed top-0 left-0 h-[100dvh] w-screen bg-[#f5f3f1] z-[999999]"
  >
    <div
      v-if="userStore.cart.length > 0"
      class="h-max w-full flex items-center justify-between py-[3.2vh] px-[4vw] bg-[#fff] rounded-b-[12vw]"
    >
      <div class="h-max w-max flex flex-col">
        <span class="text-[2.8svh] flex items-center gap-[2vw]">
          <UserIcon class="text-[4vh]" />
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
      class="h-max w-full flex justify-end pt-[4vh] pr-[6vw] text-[4vh]"
    >
      <CloseIcon @click="closeCart" />
    </div>

    <!-- Scrollable content section -->
    <div
      v-if="userStore.cart.length > 0"
      class="h-[70vh] w-full test overflow-y-auto px-[4vw] pb-[6vh]"
    >
      <div v-for="(item, index) in userStore.cart" :key="index">
        <ReusablePrefNavCardMOB :item="item" :key="index" />
      </div>
      <!-- <div class="h-max w-full px-[4vw] flex justify-center">
        <button
          @click="handleConfirmation"
          class="text-[2.4svh] tracking-[.4vw] max-[990px]:fixed bottom-[2vh] max-[990px]:w-[92vw] px-[4vw] min-[990px]:py-[2vh] rounded-md py-[2.4vh] text-white bg-[#222] text-center shadow-xl"
        >
          PROCEED TO CHECKOUT
        </button>
      </div> -->
    </div>

    <!-- No items section -->
    <div
      v-else
      class="h-max w-full flex items-center flex-col gap-[16svh] pt-[18svh] px-[4vw]"
    >
      <NuxtImg class="h-[16svh]" src="/icons/box.webp" />
      <span class="text-[2.4vh] font-[300] text-center">
        Oops! It looks like you don't have any saved preferences yet. Start
        exploring and add your favorite options!
      </span>
      <a
        class="text-[2.4svh] tracking-[.4vw] max-[990px]:fixed bottom-[2vh] max-[990px]:w-[92vw] px-[4vw] min-[990px]:py-[2vh] rounded-md py-[2.4vh] text-white bg-[#222] text-center shadow-xl"
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

const isAccessRestricted = useCookie("isAccessRestricted");

const isMenuOpen = ref(false);
const isCartOpen = ref(false);
const userPreference = ref("");
const router = useRouter();

import CartIconMOB from "./CartIconMOB.vue";

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

async function handleConfirmation() {
  // Check if userData exists and has name, phone, and email
  let { name, phone, email } = userStore.userData;

  // If any of the fields are empty, fetch from userPreference cookie
  if (!name || !phone || !email) {
    const userPreference = useCookie("userPreference").value;

    if (userPreference) {
      name = name || userPreference.name;
      phone = phone || userPreference.phone;
      email = email || userPreference.email;
    }
  }

  // Create userData object to pass to HandleOrderConfirmation
  const userData = {
    name: name || "Unknown", // Default to "Unknown" if still empty
    phone: phone || "0000000000", // Default to a placeholder phone number
    email: email || "unknown@example.com", // Default to a placeholder email
  };

  const result = await HandleOrderConfirmation({
    cartItems: userStore.cart,
    userData: userData,
  });
  if (result.success) {
    // Redirect to success page using vanilla JS

    isAccessRestricted.value = false;
    router.push("/flooring/success");
  } else {
    // Handle error
    console.error(result.message);
  }
}

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
