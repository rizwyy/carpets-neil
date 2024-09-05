<template>
  <transition @beforeEnter="handleDetailsDOMEntry('OrderMethods_MOB')">
    <div
      v-show="
        userStore.preference.flooring === `${flooring}` &&
        userStore.preference.spec_1 !== '' &&
        userStore.preference.color.length > 0 &&
        userStore.preference.budget !== ''
      "
      class="min-[990px]:hidden h-max w-full overflow-x-hidden max-w-[100vw] flex justify-center pb-[12vh]"
    >
      <div
        class="h-max w-[96%] flex flex-col gap-[0vh] bg-gradient-to-br from-detailsFrom to-detailsTo pt-[4vh] pb-[4vh] rounded-md"
      >
        <span
          class="w-[94%] px-[4vw] tracking-[-.1vw] font-[400] leading-[3.8vh] OrderMethods_MOB-HEADING opacity-0 translate-x-[40%] text-detailsHeadCLR text-detailsContainer_heading_MOB"
        >
          Preferred Reach-Out
        </span>
        <div
          class="h-max w-full flex items-center justify-center gap-[4vw] px-[4vw] mt-[4vh]"
        >
          <OrderMethodButtonMOB
            label="WhatsApp"
            :selected="userStore.preference.orderMethod === 'whatsapp'"
            @click="toggleOrderMethod('whatsapp')"
            buttonClass="OrderMethods_MOB-CONTAINER"
            containerBgColor="#207F5B"
            selectedBorderColor="#A3D6A4"
            textColor="#f1f1f1"
            logo-color="#f1f1f1"
          />
          <OrderMethodButtonMOB
            label="Mail"
            :selected="userStore.preference.orderMethod === 'email'"
            @click="toggleOrderMethod('email')"
            buttonClass="OrderMethods_MOB-CONTAINER"
            containerBgColor="#C0392B"
            selectedBorderColor="#F9C4C2"
            textColor="#f1f1f1"
            logo-color="#f1f1f1"
          />
        </div>
      </div>
    </div>
  </transition>
  <WarningModal
    :show="orderMethodWarning"
    :onYes="handleCloseOrderMethodWarningYes"
    :onNo="handleCloseOrderMethodWarningNo"
  />
</template>

<script setup>
import useUserStore from "~/stores/user";
import OrderMethodButtonMOB from "./OrderMethodButtonMOB.vue";
import WarningModal from "./WarningModalMOB.vue";

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
  handleAutoAlpha("orderMethodWarningMOB", 0);
  ENABLE_SCROLL();
  orderMethodWarning.value = false;
}

function handleCloseOrderMethodWarningNo() {
  handleAutoAlpha("orderMethodWarningMOB", 0);
  ENABLE_SCROLL();
  orderMethodWarning.value = false;
}

function toggleOrderMethod(method) {
  if (cookieFound.value) {
    if (toRaw(userPreference.value.orderMethod) !== "") {
      orderMethodWarning.value = true;
      handleAutoAlpha("orderMethodWarningMOB", 1);
      DISABLE_SCROLL();
      return;
    }
  }
  userStore.preference.orderMethod = method;
  scrollToBottom();
}

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
