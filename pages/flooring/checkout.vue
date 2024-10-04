<template>
  <div v-if="isAccessRestricted" class="h-max w-screen">
    <NavBarMOB />
    <Unavailable />
  </div>
  <div v-else>
    <SuccessContainerMOB v-if="isMobile" />
    <SuccessContainerPC v-else />
  </div>
</template>

<script setup>
import NavBarMOB from "./../../../components/MOBILE/NavBarMOB.vue";
import NavBarPC from "./../../../components/DESKTOP/NavBarPC.vue";
import Unavailable from "./../../../components/MOBILE/Unavailable.vue";
import SuccessContainerMOB from "~/components/MOBILE/FLOORING/SuccessContainerMOB.vue";
import SuccessContainerPC from "~/components/MOBILE/FLOORING/SuccesContainerPC.vue";
const userPreference = useCookie("userPreference");
const restrictedAccess = useCookie("restrictedAccess");
const pref = useCookie("pref");

const isMobile = ref(true);
const isAccessRestricted = ref(false);
const timer = ref(3);
onMounted(() => {
  if (window.innerWidth < 990) {
    isMobile.value = true;
  } else {
    isMobile.value = false;
  }
  // Decode the preference string from the cookie
  if (pref.value || typeof pref.value === "undefined") {
    isAccessRestricted.value = true;
    return;
  }
  const decodedPreferences = decodePreferenceString(pref.value);
  if (restrictedAccess.value || typeof restrictedAccess.value === "undefined") {
    isAccessRestricted.value = true;
    return;
  } else {
    isAccessRestricted.value = false;
  }

  // Start countdown after 3 seconds
  setTimeout(() => {
    const countdown = setInterval(() => {
      if (timer.value > 0) {
        timer.value--;
      } else {
        clearInterval(countdown); // Stop countdown

        // Generate WhatsApp link using decoded preferences
        const link = generateWhatsAppLink(
          "97333008801",
          `Hello, I would like to confirm my order. Please proceed with the following details:

Product Specifications: ${decodedPreferences.spec_1}, ${
            decodedPreferences.spec_2
          }, ${decodedPreferences.spec_3}, ${
            decodedPreferences.spec_4
          }, Colors: ${decodedPreferences.color.join(", ")}, Budget: ${
            decodedPreferences.budget
          }
Thank you! Looking forward to your confirmation.`
        );

        // Redirect to WhatsApp
        if (typeof window !== "undefined") {
          window.location.assign(link);
        }
      }
    }, 1000);
  }, 3000);
});
</script>

<style scoped>
.font-outfit {
  font-family: "Outfit", sans-serif;
  font-optical-sizing: auto;
  font-weight: 400;
  font-style: normal;
}
</style>
