<template>
  <!-- Render only if the form is validated -->
  <div v-if="userStore.isFormValidated" class="h-max w-max">
    <div
      v-if="isFlooringVisible"
      class="h-[62rem] w-screen bg-[#fff3] backdrop-blur-[8px] fixed top-0 left-0 z-[9999]"
    >
      <div
        class="h-[120svh] w-screen gap-[.5rem] bg-inherit flex flex-col items-center justify-start gap-[1.5rem]"
      >
        <div
          class="h-max w-full flex justify-between items-center px-[2.6vw] pt-[2rem] pb-[1rem]"
        >
          <span class="text-[2rem] text-[#333] font-[400]"
            >Flooring Options</span
          >
          <span
            @click="handleCancelAddMoreFlooring"
            class="flex items-center text-[1.8rem] text-[#222]"
          >
            <ClearAllIcon />
          </span>
        </div>
        <FlooringGridOverlayMOB :isFlooringVisible="isFlooringVisible" />
      </div>
    </div>

    <!-- Render Preferences only if all conditions are met -->
    <div
      v-if="arePreferencesFilled"
      class="h-max w-full px-[4.2vw] text-detailsContainer_heading_MOB"
    >
      <span>{{ firstName }}'s Preferences:</span>
    </div>

    <!-- Transition and Preference Cards -->
    <transition @beforeEnter="handleDetailsDOMEntry('revCard')">
      <div
        v-if="arePreferencesFilled"
        class="h-max w-screen flex flex-col justify-center items-center gap-[2rem] py-[1rem] transition-all ease-in-out duration-300"
      >
        <ul
          v-auto-animate
          v-if="userStore.cart.length > 0"
          :key="userStore.cartKey"
          class="w-full h-max transition-all ease-in-out duration-300"
        >
          <li
            class="transition-all ease-in-out duration-300"
            v-for="(item, index) in userStore.cart"
            :key="index"
          >
            <ReusablePrefCardMOB :item="item" :key="index" />
          </li>
        </ul>
        <div
          v-else
          class="text-center py-[1rem] flex flex-col gap-[1.6rem] items-center"
        >
          <LoadingIcon class="text-[2rem]" />
        </div>
      </div>
    </transition>

    <!-- Refresh Button -->
    <div
      v-if="arePreferencesFilled"
      class="h-max w-full flex justify-evenly pb-[1rem]"
    >
      <button
        v-if="!userStore.isRefreshLoading"
        @click="getHistory"
        class="h-max w-max text-[#555] rounded-full"
      >
        <div class="h-max w-max flex items-center gap-[1vw] text-[1.4rem]">
          <span class="text-[1rem]">Refresh</span>
          <RefreshIcon />
        </div>
      </button>
      <div v-else class="text-[1.6rem] px-[4vw]">
        <LoadingIcon2 />
      </div>
    </div>

    <!-- Add More and Confirm Buttons -->
    <div
      v-if="arePreferencesFilled"
      class="h-max w-full flex flex-col items-center py-[4rem] border-t-[2px] border-dotted border-[#999] gap-[2rem]"
    >
      <button
        v-if="userStore.cart.length > 0"
        @click="HandleAddMore"
        class="border-[2px] rounded-md w-[90%] py-[1rem] border-[#333] mx-auto font-[500] tracking-[.1vw] text-[1.2rem] flex justify-center"
      >
        <span v-if="!isAddMoreLoading">BROWSE OTHER PRODUCTS</span>
        <LoadingIcon class="text-[2rem]" v-else />
      </button>
      <button
        v-if="userStore.cart.length > 0"
        @click="HandleOrderConfirmation"
        class="border-[2px] rounded-md w-[90%] py-[1rem] border-[#333] mx-auto font-[500] tracking-[.1vw] text-[1.2rem] flex justify-center"
      >
        <span v-if="!isConfirmationLoading">CONFIRM</span>
        <LoadingIcon class="text-[2rem]" v-else />
      </button>
    </div>
  </div>
</template>

<script setup>
import useUserStore from "~/stores/user";
const userStore = useUserStore();

import { useRouter } from "vue-router";
import ReusablePrefCardMOB from "./ReusablePrefCardMOB.vue";
import LoadingIcon from "~/public/icons/loadingIcon.vue";
import RefreshIcon from "~/public/icons/refreshIcon.vue";
import LoadingIcon2 from "~/public/icons/loadingIcon2.vue";
import FooterMOB from "../../FooterMOB.vue";
import FlooringGridMOB from "../FLOORING-ITEMS/FlooringGridMOB.vue";
import FlooringGridOverlayMOB from "../FLOORING-ITEMS/FlooringGridOverlayMOB.vue";
import ClearAllIcon from "~/public/icons/clearAllIcon.vue";

const router = useRouter();
const restrictedAccess = useCookie("restrictedAccess");
const userPreference = useCookie("userPreference");
const isAddMoreLoading = ref(false);
const isConfirmationLoading = ref(false);
const historyFound = ref(true);
const isFlooringVisible = ref(false);
// Props
const { flooring, link } = defineProps(["flooring", "link"]);

// Computed for first name extraction
const firstName = computed(() => {
  if (!userStore.userData.name) return "";
  const name = userStore.userData.name.trim().split(" ")[0];
  return name.charAt(0).toUpperCase() + name.slice(1).toLowerCase();
});

const arePreferencesFilled = computed(() => {
  // Check if flooring is 'services' or 'accessories'
  if (
    (userStore.preference.flooring === "services" ||
      userStore.preference.flooring === "accessories") &&
    userStore.preference.orderMethod !== ""
  ) {
    // If flooring is 'services' or 'accessories' and orderMethod is filled, return true
    return true;
  }

  // For other types of flooring, check the full form validation
  return (
    userStore.preference.flooring === `${flooring}` &&
    userStore.preference.spec_1 !== "" &&
    Array.isArray(userStore.preference.color) &&
    userStore.preference.color.length > 0 && // Ensure color is an array
    userStore.preference.budget !== "" &&
    userStore.preference.orderMethod !== "" &&
    userStore.userData.name !== "" &&
    userStore.isFormValidated
  );
});

// GET ALL CART ITEMS
async function getHistory() {
  await userStore.getHistoryFromServer();
}
// AT REFRESH
function handleCartRefresh() {
  // Update the cartKey to force re-render of the entire cart container
  userStore.refreshCart();
}
// ------------------
// ORDER CONFIRMATION
const HandleOrderConfirmation = () => {
  isConfirmationLoading.value = true;

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

        // Prepare the user data object for each item with the `id` included
        const userData = {
          id: item.id, // Ensure the item has an id to update the log
          name: userStore.userData.name,
          phone: userStore.userData.phone,
          email: "",
          preference: item, // Include the current cart item as preference
          isOrderConfirmed: true,
        };

        const response = await fetch("/api/update-log", {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify(userData),
        });

        if (!response.ok) {
          throw new Error(`Error updating log for item: ${item}`);
        }

        const logData = await response.json();
        console.log("Log data for item:", logData);
      }
    })
    .then(() => {
      // Step 3: Clear user data and cart after successful updates
      userStore.userData.email = "";
      userStore.userData.name = "";
      userStore.userData.phone = "";

      userPreference.value = null;
      restrictedAccess.value = false;

      isConfirmationLoading.value = false;
      router.push(`/flooring/checkout`);
      console.log("SUCCESS");
    })
    .catch((err) => {
      isConfirmationLoading.value = false;
      restrictedAccess.value = true;
      handleTempAnimation("errOverlayMOB");
      console.error("Unexpected errors:", err.message);
    });
};

// ------------------

// ------------------
// HANDLE CLICK ON ADD MORE BUTTON
const HandleAddMore = () => {
  isAddMoreLoading.value = true;
  setTimeout(() => {
    isFlooringVisible.value = true;
    DISABLE_SCROLL();
    isAddMoreLoading.value = false;
  }, 2000);
};
// ------------------

// ------------------
// HANDLE CLICK ON CANCEL ADD MORE BUTTON
const handleCancelAddMoreFlooring = () => {
  isFlooringVisible.value = false;
  ENABLE_SCROLL();
};
// ------------------

// REACTIVE ACTIONS
watch(
  () => userStore.isFormValidated, // Watch the `isFormValidated` state
  (newValue, oldValue) => {
    if (newValue === true) {
      console.log("Form is validated! Triggering function.");

      // Set an interval to refresh the cart every 2 seconds
      const refreshInterval = setInterval(() => {
        console.log("Refreshing cart...");
        getHistory();
      }, 1000);

      // Stop refreshing after 6 seconds
      setTimeout(() => {
        clearInterval(refreshInterval);
      }, 2000); //
    }
  }
);

watch(
  () => userStore.userData.id, // Watch for changes in userStore.userData.id
  async (newValue) => {
    // Check if the newValue is a valid integer (positive number)
    if (Number.isInteger(newValue) && newValue > 0) {
      // Define a recursive function to fetch history until the cart is populated
      const fetchUntilCartIsPopulated = async () => {
        await getHistory();

        // If there are no items in the cart, repeat the process
        if (userStore.cart.length === 0) {
          console.log("Cart is still empty, fetching again...");
          setTimeout(fetchUntilCartIsPopulated, 1000); // Retry after 1 second
        } else {
          console.log("Cart is populated.");
        }
      };

      // Start the recursive fetching
      fetchUntilCartIsPopulated();
    }
  }
);
</script>

<style lang="scss" scoped></style>
