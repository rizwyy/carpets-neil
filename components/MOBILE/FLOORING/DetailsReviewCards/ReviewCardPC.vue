<template>
  <!-- Render only if the form is validated -->
  <div v-if="userStore.isFormValidated" class="h-max w-max">
    <div
      v-if="isFlooringVisible"
      class="h-screen w-screen bg-[#fff3] backdrop-blur-[8px] fixed top-0 left-0 z-[9999]"
    >
      <div
        class="h-[100svh] w-screen gap-[2vh] bg-inherit flex flex-col items-center justify-start gap-[8vh]"
      >
        <div
          class="h-max w-full flex justify-between items-center px-[7.6vw] pt-[6vh]"
        >
          <span class="text-[3.8vh] text-[#333] font-[400]"
            >Flooring Options</span
          >
          <span
            @click="handleCancelAddMoreFlooring"
            class="flex items-center text-[3.8vh] text-[#222]"
            ><ClearAllIcon
          /></span>
        </div>
        <FlooringGridOverlayPC />
      </div>
    </div>

    <!-- Render Preferences only if all conditions are met -->
    <div
      v-if="arePreferencesFilled"
      class="h-max w-full px-[8.2vw] text-detailsContainer_heading_PC"
    >
      <span>{{ firstName }}'s Preferences:</span>
    </div>

    <!-- Transition and Preference Cards -->
    <div
      v-if="arePreferencesFilled"
      class="h-max w-screen flex flex-col justify-center items-center gap-[4vh] py-[6vh] transition-all ease-in-out duration-300"
    >
      <!-- <PrefCardPC /> -->
      <div
        class="w-full h-max transition-all ease-in-out duration-300"
        v-if="userStore.cart.length > 0"
        :key="userStore.cartKey"
      >
        <div
          class="transition-all ease-in-out duration-300"
          v-for="(item, index) in userStore.cart"
          :key="index"
        >
          <ReusablePrefCardPC
            :item="item"
            :key="index"
            @refreshCart="handleCartRefresh"
          />
        </div>
      </div>
      <div
        v-else
        class="text-center py-[2vh] flex flex-col gap-[3.2vh] items-center"
      >
        <span> No saved preferences found :( </span>
      </div>
    </div>

    <!-- Refresh Button -->
    <div
      v-if="arePreferencesFilled"
      class="h-max w-full flex justify-evenly py-[6vh]"
    >
      <button
        v-if="!isRefreshLoading"
        @click="getHistory"
        class="h-max w-max text-[#555] rounded-full"
      >
        <div
          class="h-max w-max flex items-center gap-[1vw] text-[2.8vh] border-[2px] px-[2vw] py-[2vh] rounded-full border-[#999] shadow-md hover:shadow-xl transition-all ease-in-out duration-300"
        >
          <span class="text-[2vh]">Refresh</span>
          <RefreshIcon />
        </div>
      </button>
      <div v-else class="text-[3.2vh] px-[4vw]">
        <LoadingIcon2 />
      </div>
    </div>

    <!-- Add More and Confirm Buttons -->
    <div
      v-if="arePreferencesFilled"
      class="h-max w-full flex justify-center py-[8vh] border-t-[2px] border-dotted border-[#999] px-[4vw]"
    >
      <button
        v-if="userStore.cart.length > 0"
        @click="HandleAddMore"
        class="border-[2px] rounded-md w-[40%] py-[4.2vh] border-[#333] mx-auto font-[500] tracking-[.1vw] text-[2.4vh] flex justify-center shadow-md hover:shadow-2xl transition-all ease-in-out duration-300"
      >
        <span v-if="!isAddMoreLoading">BROWSE OTHER PRODUCTS</span>
        <LoadingIcon class="text-[4.2vh]" v-else />
      </button>
      <button
        v-if="userStore.cart.length > 0"
        @click="HandleOrderConfirmation"
        class="border-[2px] rounded-md w-[40%] py-[4.2vh] border-[#333] mx-auto font-[500] tracking-[.1vw] text-[2.4vh] flex justify-center shadow-md hover:shadow-2xl transition-all ease-in-out duration-300"
      >
        <span v-if="!isConfirmationLoading">CONFIRM</span>
        <LoadingIcon class="text-[4.2vh]" v-else />
      </button>
    </div>

    <!-- Footer -->
    <div class="h-max w-full">
      <FooterPC />
    </div>
  </div>
</template>

<script setup>
import useUserStore from "~/stores/user";
const userStore = useUserStore();

import { useRouter } from "vue-router";
import ReusablePrefCardPC from "./ReusablePrefCardPC.vue";
import LoadingIcon from "~/public/icons/loadingIcon.vue";
import RefreshIcon from "~/public/icons/refreshIcon.vue";
import LoadingIcon2 from "~/public/icons/loadingIcon2.vue";
import FooterPC from "./../../../DESKTOP/FooterPC.vue";
import FlooringGridOverlayMOB from "../FLOORING-ITEMS/FlooringGridOverlayMOB.vue";
import ClearAllIcon from "~/public/icons/clearAllIcon.vue";

const router = useRouter();
const restrictedAccess = useCookie("restrictedAccess");
const userPreference = useCookie("userPreference");
const isAddMoreLoading = ref(false);
const isConfirmationLoading = ref(false);
const isRefreshLoading = ref(false);
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

// Computed for repeated condition
const arePreferencesFilled = computed(() => {
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
  isRefreshLoading.value = true;

  try {
    let sanitizedPhone = userStore.userData.phone.startsWith("+")
      ? userStore.userData.phone.slice(1)
      : addCountryCode(
          userStore.userData.phone,
          userStore.preference.country
        ).slice(1);

    const preferences = await fetchPreferencesByMobile(sanitizedPhone);

    if (preferences && preferences.data && preferences.data.length > 0) {
      preferences.data.forEach((pref) => {
        const preferenceData = pref.preference;
        const id = pref.id;

        const isAlreadyInCart = userStore.cart.some((item) => item.id === id);

        if (!isAlreadyInCart) {
          const preferenceWithId = { ...preferenceData, id: id };
          userStore.cart.push(preferenceWithId);
        }
      });

      console.log("Preferences added to cart:", userStore.cart);
    } else {
      console.log("No preferences found.");
    }
  } catch (error) {
    console.error("Failed to fetch or process preferences:", error);
  } finally {
    setTimeout(() => {
      isRefreshLoading.value = false;
    }, 1000);
  }
}
// AT REFRESH
function handleCartRefresh() {
  console.log("CART REFRESHED");
  // Update the cartKey to force re-render of the entire cart container
  userStore.cartKey = Date.now();
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
      userStore.cart = []; // Clear the cart

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
