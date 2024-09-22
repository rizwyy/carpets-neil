<template>
  <div class="inline-block relative">
    <InvoiceList class="text-[1.8rem]" />
    <!-- Circle Badge -->
    <div
      v-if="userStore.cart.length > 0"
      class="absolute top-[-1.8svh] right-[-2vw] bg-slate-500 text-[1.6svh] font-[500] text-white flex items-center justify-center rounded-full w-[3svh] h-[3svh]"
    >
      {{ userStore.cart.length }}
    </div>
  </div>
</template>

<script setup>
import gsap from "gsap";

import useUserStore from "~/stores/user";
const userStore = useUserStore();
import ReusablePrefNavCard from "./FLOORING/DetailsReviewCards/ReusablePrefNavCard.vue";
import InvoiceList from "~/public/icons/InvoiceList.vue";

async function getHistory(phone, country) {
  try {
    // Ensure the phone and country are valid
    if (!phone || !country) {
      throw new Error("Phone number and country code are required.");
    }

    // Remove the plus sign from the phone number if it exists and ensure the country code is included
    let sanitizedPhone = phone.startsWith("+")
      ? phone.slice(1)
      : addCountryCode(phone, country).slice(1); // Ensure addCountryCode is defined

    // Fetch preferences
    const { data, error } = await fetchPreferencesByMobile(sanitizedPhone); // Assuming fetchPreferencesByMobile returns {data, error}
    if (error) {
      throw new Error("Error fetching preferences.");
    }

    // Unwrap the reactive `data`
    const preferences = unref(data);
    return preferences; // Return unwrapped preferences
  } catch (error) {
    console.error("Failed to fetch or process preferences:", error.message);
    return null; // Return null in case of failure
  }
}
const isMobile = ref(true);
onMounted(async () => {
  if (window.innerWidth < 990) {
    isMobile.value = true;
  } else {
    isMobile.value = false;
  }
  if (isMobile) {
    await nextTick(); // Wait for DOM updates to complete

    const userPreferenceCookie = useCookie("userPreference").value;
    const ctry = useCookie("ctry").value;
    const userStore = useUserStore(); // Access the store

    // Ensure the cookie and phone field are valid
    if (
      userPreferenceCookie &&
      typeof toRaw(userPreferenceCookie).phone === "string" &&
      ctry
    ) {
      try {
        // Fetch the history in an async way
        const history = await getHistory(userPreferenceCookie.phone, ctry);
        if (history) {
          // Unwrap `history` if it is reactive
          const unwrappedHistory = toRaw(history) || unref(history);
          console.log(unwrappedHistory);
          // Ensure unwrappedHistory is an array and push each item to the cart
          if (Array.isArray(unwrappedHistory)) {
            unwrappedHistory.forEach((item) => {
              // Create a new object by copying the preference and adding the id
              const updatedPreference = {
                ...toRaw(item).preference, // Copy the preference object
                id: item.id, // Add the id property
              };

              // Push the updated object into the userStore.cart array
              userStore.cart.push(updatedPreference);
            });
            // userStore.cart = toRaw(removeDuplicates(userStore.cart));

            // Log the updated cart for confirmation
          } else {
            console.warn("History is not an array.");
          }
        } else {
          console.warn("No history found for this phone number.");
        }
      } catch (error) {
        console.error("Error while fetching history:", error.message);
      }
    } else {
      console.warn("Invalid userPreferenceCookie or country value.");
    }
  }
});
</script>
