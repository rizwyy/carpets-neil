<template>
  <div
    v-show="
      userStore.preference.flooring === `${flooring}` &&
      userStore.preference.spec_1 !== '' &&
      userStore.preference.spec_2 !== '' &&
      userStore.preference.color.length > 0 &&
      userStore.preference.budget !== '' &&
      userStore.preference.orderMethod !== '' &&
      userStore.userData.name !== ''
    "
    class="h-max w-full px-[4.2vw] text-detailsContainer_heading_MOB"
  >
    <span>{{ firstName }}'s Preferences:</span>
  </div>
  <transition @beforeEnter="handleDetailsDOMEntry('revCard')">
    <div
      v-show="
        userStore.preference.flooring === `${flooring}` &&
        userStore.preference.spec_1 !== '' &&
        userStore.preference.spec_2 !== '' &&
        userStore.preference.color.length > 0 &&
        userStore.preference.budget !== '' &&
        userStore.preference.orderMethod !== '' &&
        userStore.userData.name !== ''
      "
      class="h-max w-screen flex flex-col justify-center items-center gap-[4vh] py-[2vh]"
    >
      <!-- <PrefCardMOB /> -->
      <div class="w-full h-max" v-if="userStore.cart.length > 0">
        <div v-for="(item, index) in userStore.cart" :key="index">
          <ReusablePrefCardMOB :item="item" :key="index" />
        </div>
      </div>
      <div
        v-else
        class="text-center py-[2vh] flex flex-col gap-[3.2vh] items-center"
      >
        <span> No saved preferences found :( </span>
      </div>
    </div>
  </transition>
  <div
    v-show="
      userStore.preference.flooring === `${flooring}` &&
      userStore.preference.spec_1 !== '' &&
      userStore.preference.spec_2 !== '' &&
      userStore.preference.color.length > 0 &&
      userStore.preference.budget !== '' &&
      userStore.preference.orderMethod !== '' &&
      userStore.userData.name !== ''
    "
    class="h-max w-full flex justify-evenly pb-[2vh]"
  >
    <button
      @click="() => getHistory()"
      class="h-max w-max px-[4vw] py-[2vh] text-[#555] rounded-full text-[3.2vh]"
    >
      <RefreshIcon v-if="!isRefreshLoading" />
      <LoadingIcon2 v-else />
    </button>
  </div>
  <div
    v-show="
      userStore.preference.flooring === `${flooring}` &&
      userStore.preference.spec_1 !== '' &&
      userStore.preference.spec_2 !== '' &&
      userStore.preference.color.length > 0 &&
      userStore.preference.budget !== '' &&
      userStore.preference.orderMethod !== '' &&
      userStore.userData.name !== ''
    "
    class="h-max w-full flex flex-col items-center py-[8vh] border-t-[2px] border-dotted border-[#999] gap-[4vh]"
  >
    <button
      v-if="userStore.cart.length > 0"
      @click="HandleAddMore"
      class="border-[2px] rounded-md w-[90%] py-[2vh] border-[#333] mx-auto font-[500] tracking-[.1vw] text-[2.4vh] flex justify-center"
    >
      <span v-if="!isAddMoreLoading">ADD MORE</span>
      <LoadingIcon class="text-[4.2vh]" v-else />
    </button>
    <button
      v-if="userStore.cart.length > 0"
      @click="HandleOrderConfirmation"
      class="border-[2px] rounded-md w-[90%] py-[2vh] border-[#333] mx-auto font-[500] tracking-[.1vw] text-[2.4vh] flex justify-center"
    >
      <span v-if="!isConfirmationLoading">CONFIRM</span>
      <LoadingIcon class="text-[4.2vh]" v-else />
    </button>
  </div>
  <div class="h-max w-full">
    <!-- <FooterMOB /> -->
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
const router = useRouter();
const restrictedAccess = useCookie("restrictedAccess");
const userPreference = useCookie("userPreference");
const isAddMoreLoading = ref(false);
const isConfirmationLoading = ref(false);
const isRefreshLoading = ref(false);
const historyFound = ref(true);

const { flooring, link } = defineProps(["flooring", "link"]);
const firstName = computed(() => {
  if (!userStore.userData.name) return "";
  const name = userStore.userData.name.trim().split(" ")[0];
  return name.charAt(0).toUpperCase() + name.slice(1).toLowerCase();
});
async function fetchPreferencesByMobile(mobile) {
  try {
    // Ensure the mobile number is provided
    if (!mobile) {
      throw new Error("Mobile number is required");
    }

    let sanitizedMobile = mobile.startsWith("+") ? mobile.slice(1) : mobile;

    // Call the API endpoint to get the logs associated with the mobile number
    const { data, error } = await useFetch(
      `/api/get-log?mobile=${sanitizedMobile}`,
      {
        method: "GET",
        headers: {
          "Content-Type": "application/json",
        },
      }
    );

    if (error.value) {
      throw new Error(error.value.message);
    }

    // Handle successful data retrieval
    console.log("Preferences fetched successfully:", data.value);
    return data.value; // Return the fetched data
  } catch (err) {
    // Handle errors
    console.error("Error fetching preferences:", err.message);
    historyFound.value = false;
    return null;
  }
}
async function getHistory() {
  isRefreshLoading.value = true;

  try {
    // Remove the plus sign from the phone number if it exists and ensure the country code is included
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

        // Check if the preference with this id is already in the cart
        const isAlreadyInCart = userStore.cart.some((item) => item.id === id);

        if (!isAlreadyInCart) {
          // Add the id to the preference object
          const preferenceWithId = { ...preferenceData, id: id };

          // Push the new object into the cart
          userStore.cart.push(preferenceWithId);
        }
      });

      console.log("Preferences added to cart:", userStore.cart);
    } else {
      console.log("No preferences found.");
      // Optionally handle the case where no preferences are found
    }
  } catch (error) {
    console.error("Failed to fetch or process preferences:", error);
    // Optionally handle errors, such as clearing the cart or showing an error message
  } finally {
    setTimeout(() => {
      isRefreshLoading.value = false;
    }, 1000);
  }
}

// ACTIONS
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
      // Step 2: Iterate over each cart item and insert them individually
      for (const item of userStore.cart) {
        // Ensure the isOrderConfirmed property is set to true
        item.isOrderConfirmed = true;

        // Prepare the user data object for each item
        const userData = {
          name: userStore.userData.name,
          phone: userStore.userData.phone,
          email: userStore.userData.email,
          preference: item, // Include the current cart item as preference
          isOrderConfirmed: true,
        };

        const response = await fetch("/api/insert-logs", {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify(userData),
        });

        if (!response.ok) {
          throw new Error(`Error inserting log for item: ${item}`);
        }

        const logData = await response.json();
        console.log("Log data for item:", logData);
      }
    })
    .then(() => {
      // Step 3: Clear user data and cart after successful insertion
      userStore.userData.email = "";
      userStore.userData.name = "";
      userStore.userData.phone = "";
      userStore.cart = []; // Clear the cart

      userPreference.value = null;
      restrictedAccess.value = false;

      isConfirmationLoading.value = false;
      router.push(`/flooring/${link}/success`);
      console.log("SUCCESS");
    })
    .catch((err) => {
      isConfirmationLoading.value = false;
      restrictedAccess.value = true;
      handleTempAnimation("errOverlayMOB");
      console.error("Unexpected errors:", err.message);
    });
};

const insertLog = (isOrderConfirmed) => {
  const phoneWithCode = addCountryCode(userStore);
  const name = userStore.userData.name;
  const orderMethod = userStore.preference.orderMethod;
  let contact;

  if (orderMethod === "whatsapp") {
    // Check if the phone number starts with a "+" indicating a country code
    if (userStore.userData.phone.startsWith("+")) {
      contact = userStore.userData.phone;
    } else {
      // Add the country code if it's not present
      contact = addCountryCode(
        userStore.userData.phone,
        userStore.preference.country
      );
    }
  } else {
    contact = userStore.userData.email;
  }

  const userData = {
    name,
    phone: orderMethod === "whatsapp" ? contact : "",
    email: orderMethod === "email" ? contact : "",
    preference: userStore.preference,
    isOrderConfirmed: isOrderConfirmed,
  };

  console.log("Sending userData:", userData);

  if (!name || !contact) {
    console.error("Name and contact details are required.");
    return;
  }

  // Call API route to insert logs
  useFetch("/api/set-cookie")
    .then(({ data, error }) => {
      if (error?.value) {
        throw new Error("Error setting cookie: " + error.value);
      }
      console.log("SET COOKIE DONE");
      return fetch("/api/insert-logs", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(userData),
      });
    })
    .then((response) => {
      if (!response.ok) {
        throw new Error("Error inserting logs");
      }
      return response.json();
    })
    .then((logData) => {
      console.log("SUCCESS");
      console.log("Log data:", logData);
      userStore.userData.id = logData.id;

      // Redirect to /flooring after successful log insertion
      router.push("/flooring");
      isAddMoreLoading.value = false;
    })
    .catch((err) => {
      isAddMoreLoading.value = false;
      console.error("Unexpected errors:", err.message);
    });
};

const HandleAddMore = () => {
  isAddMoreLoading.value = true;
  // Call the insertLog function
  insertLog(false);
};

//
watch(
  () => userStore.userData.name,
  (newValue) => {
    if (newValue !== "") {
      setTimeout(async () => {
        await getHistory();
      }, 2000);
    }
  }
);
</script>

<style lang="scss" scoped></style>
