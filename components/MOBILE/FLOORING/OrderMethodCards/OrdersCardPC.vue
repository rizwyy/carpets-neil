<template>
  <transition @beforeEnter="handleDetailsDOMEntry('OrderMethods_PC')">
    <div
      id="orderCardContainerPC"
      v-show="
        userStore.preference.flooring === 'services' ||
        userStore.preference.flooring === 'accessories' ||
        (userStore.preference.spec_1 !== '' &&
          userStore.preference.color.length > 0 &&
          userStore.preference.budget !== '')
      "
      class="max-[990px]:hidden h-max w-screen flex justify-center pb-[10vh]"
    >
      <div
        class="h-max w-[88%] flex flex-col gap-[2vh] bg-gradient-to-br from-detailsFrom to-detailsTo pt-[4vh] pb-[4vh] rounded-md"
      >
        <span
          class="w-max px-[4vw] tracking-[-.1vw] font-[400] leading-[3.8vh] OrderMethods_PC-HEADING opacity-0 translate-x-[40%] text-detailsHeadCLR text-detailsContainer_heading_PC"
        >
          Preferred Reach-Out
        </span>
        <div
          class="h-max w-full flex items-center justify-center gap-[4vw] px-[4vw] mt-[4vh]"
        >
          <OrderMethodButtonPC
            label="WhatsApp"
            :selected="userStore.preference.orderMethod === 'whatsapp'"
            @click="toggleOrderMethod('whatsapp')"
            buttonClass="OrderMethods_PC-CONTAINER"
            containerBgColor="#207F5B"
            selectedBorderColor="#A3D6A4"
            textColor="#f1f1f1"
            logo-color="#f1f1f1"
          />
          <OrderMethodButtonPC
            label="Mail"
            :selected="userStore.preference.orderMethod === 'email'"
            @click="toggleOrderMethod('email')"
            buttonClass="OrderMethods_PC-CONTAINER"
            containerBgColor="#C0392B"
            selectedBorderColor="#F9C4C2"
            textColor="#f1f1f1"
            logo-color="#f1f1f1"
          />
        </div>
      </div>
    </div>
  </transition>
  <WarningModalPC
    :show="orderMethodWarning"
    :onYes="handleCloseOrderMethodWarningYes"
    :onNo="handleCloseOrderMethodWarningNo"
  />
</template>

<script setup>
import useUserStore from "~/stores/user";
import OrderMethodButtonPC from "./OrderMethodButtonPC.vue";
import WarningModalPC from "./WarningModalPC.vue";

const userStore = useUserStore();
const userPreference = useCookie("userPreference");
const { flooring } = defineProps(["flooring"]);
const orderMethodWarning = ref(false);
const cookieFound = ref(true);

function setUserPreferenceCookie() {
  userPreference.value = userStore.preference;
  console.log("COOKIE SET::", toRaw(userPreference.value));
}

function handleCloseOrderMethodWarningYes() {
  userPreference.value.orderMethod = "";
  handleAutoAlpha("orderMethodWarningPC", 0);
  ENABLE_SCROLL();
  orderMethodWarning.value = false;
}

function handleCloseOrderMethodWarningNo() {
  handleAutoAlpha("orderMethodWarningPC", 0);
  ENABLE_SCROLL();
  orderMethodWarning.value = false;
}

function toggleOrderMethod(method) {
  // if (cookieFound.value) {
  //   if (toRaw(userPreference.value.orderMethod) !== "") {
  //     orderMethodWarning.value = true;
  //     handleAutoAlpha("orderMethodWarningPC", 1);
  //     DISABLE_SCROLL();
  //     return;
  //   }
  // }
  userStore.preference.orderMethod = method;
  scrollToEl("infoCardContainerPC");
}

watch(
  () => userStore.preference, // Watch the entire preference object
  (newPreference) => {
    if (
      newPreference.flooring === "services" ||
      newPreference.flooring === "accessories" ||
      (newPreference.spec_1 !== "" &&
        newPreference.color.length > 0 &&
        newPreference.budget !== "" &&
        cookieFound.value)
    ) {
      // Execute your desired logic here when all conditions are true
      setTimeout(() => {
        scrollToEl("infoCardContainerPC");
      }, 200);
      // Add your action here (e.g., show a modal, navigate, etc.)
    }
  },
  { immediate: true, deep: true } // Watch deeply for changes and execute immediately on setup
);
onMounted(() => {
  if (toRaw(userPreference.value)) {
    userStore.preference.orderMethod = toRaw(userPreference.value.orderMethod);

    cookieFound.value = true;

    return;
  } else {
    cookieFound.value = false;
  }
});
</script>

<style lang="scss" scoped></style>
