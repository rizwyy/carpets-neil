<template>
  <!-- NAV BAR -->
  <div
    id="NavBarMOB"
    class="navBarMOB bg-navBarBG opacity-[.2] min-[990px]:hidden h-[12vh] px-[6vw] w-full flex items-center justify-between z-[99] font-outfit relative"
  >
    <div class="h-max w-max">
      <HamburgerIcon @click="openMenu" class="text-[1.8rem]" />
    </div>
    <a
      href="/"
      class="h-max w-max absolute top-[50%] left-[50%] translate-x-[-58%] translate-y-[-50%] font-[300] text-[2.4rem] text-[#333] tracking-[-.1vw]"
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
        class="h-max w-max font-[300] text-[2.8rem] text-[#333] tracking-[-.1rem]"
      >
        WOLTIZ
      </a>
      <span class="text-[2.4rem]">
        <CloseIcon @click="closeMenu" />
      </span>
    </div>
    <div
      class="h-[66svh] w-screen flex flex-col justify-center gap-[2rem] items-start px-[4vw] text-[2rem]"
    >
      <ul class="flex flex-col gap-[1rem]">
        <li v-for="(link, index) in links" :key="index">
          <a
            class="flex items-center gap-[2vw]"
            v-if="link.url"
            :href="link.url"
            >{{ link.label }}
            <Icon
              icon="ic:round-arrow-forward"
              class="text-[1.8rem] text-[#444]"
            />
          </a>
          <span v-else>{{ link.label }}</span>
        </li>
      </ul>
      <a
        class="bg-[#333] px-[6vw] rounded-sm text-[#f1f1f1] text-[3.4svh] py-[1svh] mt-[5svh]"
        href="/designer"
        >Designer Login</a
      >
    </div>
    <div class="h-[20svh] w-screen flex flex-col justify-start">
      <div
        class="flex h-full w-full justify-between px-[6vw] items-center text-[1rem]"
      >
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
    class="cartPageMOB invisible opacity-0 font-outfit fixed top-0 left-0 h-[100dvh] w-screen bg-[#fcfcfc] z-[999999] flex flex-col justify-between"
  >
    <div
      v-if="userStore.cart.length > 0"
      class="h-max w-full flex items-center justify-between py-[3.2vh] px-[4vw] bg-[#fff] rounded-b-[12vw]"
    >
      <button
        @click="HandleOrderConfirmation"
        class="text-[1.2rem] tracking-[.4vw] z-[99] max-[990px]:fixed bottom-[2vh] max-[990px]:w-[92vw] px-[4vw] min-[990px]:py-[2vh] rounded-md py-[2.4vh] text-white bg-[#222] text-center shadow-xl flex items-center justify-center"
      >
        <loadingIcon v-if="isConfirmLoading" class="text-white text-[1.2rem]" />
        <span class="text-[1.2rem]" v-else> PROCEED TO CHECKOUT </span>
      </button>
      <div class="h-max w-max flex flex-col">
        <span class="text-[2.8svh] flex items-start gap-[1vw]">
          Hi,
          <span class="flex flex-col items-start">
            {{ capitalizeName(userPreference.name) }}
          </span>
        </span>
        <button
          class="text-[.8rem] text-[#999] w-full text-left font-[300] tracking-[.4vw]"
        >
          {{ userPreference.phone }}
        </button>
      </div>
      <span class="text-[4.2svh] mr-[2vw]"
        ><CloseIcon @click="closeCart"
      /></span>
    </div>
    <div
      v-else
      class="h-max w-full flex justify-between items-center pt-[1.8rem] px-[6vw] text-[2rem]"
    >
      <a
        href="/"
        class="h-max w-max font-[300] text-[2rem] text-[#333] tracking-[-.1vw]"
      >
        WOLTIZ
      </a>
      <CloseIcon @click="closeCart" />
    </div>

    <!-- Scrollable content section -->
    <ul
      v-auto-animate
      :key="userStore.cartKey"
      v-if="userStore.cart.length > 0"
      class="flex-grow w-full test overflow-y-auto px-[4vw] pb-[6.8rem]"
    >
      <li v-for="(item, index) in userStore.cart" :key="index">
        <ReusablePrefNavCardMOB :item="item" :key="index" />
      </li>
      <div class="h-max w-full px-[4vw] flex justify-center"></div>
    </ul>

    <!-- No items section -->
    <div
      v-else
      class="h-[60rem] w-full flex items-center flex-col gap-[6rem] pt-[9rem] px-[4vw]"
    >
      <NuxtImg class="h-[7.6rem]" src="/icons/box.webp" />
      <span class="text-[1rem] font-[300] text-center">
        Oops! It looks like you don't have any saved preferences yet. Start
        exploring and add your favorite options!
      </span>
      <a
        class="text-[1.2rem] tracking-[.4vw] max-[990px]:fixed bottom-[2vh] max-[990px]:w-[92vw] px-[4vw] min-[990px]:py-[2vh] rounded-md py-[2.4vh] text-white bg-[#222] text-center shadow-xl"
        href="/flooring"
        >EXPLORE</a
      >
    </div>
  </div>
</template>

<script setup>
import { defineAsyncComponent } from "vue";

// Lazy load components
const CartIconMOB = defineAsyncComponent(() => import("./CartIconMOB.vue"));
const ReusablePrefNavCardMOB = defineAsyncComponent(() =>
  import("./../MOBILE/FLOORING/DetailsReviewCards/ReusablePrefNavCard.vue")
);
const CloseIcon = defineAsyncComponent(() =>
  import("./../../public/icons/closeIcon")
);
const HamburgerIcon = defineAsyncComponent(() =>
  import("~/public/icons/HamburgerIcon.vue")
);
const restrictedAccess = useCookie("restrictedAccess");

const isMenuOpen = ref(false);
const isCartOpen = ref(false);
const userPreference = ref("");
const router = useRouter();

import useUserStore from "~/stores/user";
const userStore = useUserStore();

const links = [
  { label: "Flooring", url: "/" },
  { label: "About", url: "/about" },
  { label: "Contact", url: "/about" }, // No URL, so will be rendered as a span
  { label: "How Woltiz Works", url: "/privacy" },
];

import { Icon } from "@iconify/vue/dist/iconify.js";
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
