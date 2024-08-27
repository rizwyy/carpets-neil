<template>
  <transition @beforeEnter="handleDetailsDOMEntry('OrderMethods_MOB')">
    <div
      v-show="
        userStore.preference.flooring === `${flooring}` &&
        userStore.preference.spec_1 !== '' &&
        userStore.preference.spec_2 !== '' &&
        userStore.preference.color.length > 0 &&
        userStore.preference.budget !== ''
      "
      class="h-max w-screen flex justify-center pb-[10vh]"
    >
      <div
        class="h-max w-[96%] flex flex-col gap-[0vh] bg-gradient-to-br from-detailsFrom to-detailsTo pt-[4vh] pb-[4vh] rounded-md shadow-lg"
      >
        <span
          class="w-[75%] px-[4vw] text-[3.2vh] leading-[3.8vh] OrderMethods_MOB-HEADING opacity-0 translate-x-[40%] text-detailsHeadCLR"
          >Select Your Preferred Ordering Method:</span
        >
        <div
          class="h-max w-full flex items-center justify-center gap-[4vw] px-[2vw] mt-[4vh]"
        >
          <button
            @click="toggleOrderMethod('whatsapp')"
            v-show="
              userStore.preference.flooring === `${flooring}` &&
              userStore.preference.spec_1 !== '' &&
              userStore.preference.spec_2 !== '' &&
              userStore.preference.color.length > 0 &&
              userStore.preference.budget !== ''
            "
            class="w-[44vw] OrderMethods_MOB-CONTAINER opacity-0 translate-y-[20%] rounded-md text-[2.4vh] font-[500] bg-[#111] border-[2px] border-[#333] z-[999] text-white px-[2vw] flex items-center gap-[2vw] justify-between"
          >
            <!-- MOBILE -->
            <span
              class="bg-gradient-to-r flex-[85] py-[3.2vh] from-[#fff] via-[#ececec] shadow-2xl to-[#ececec] bg-clip-text text-transparent bg-300% text-center px-[4vw] animate-gradient_1 uppercase tracking-[.4vw]"
            >
              WhatsApp</span
            >
            <div
              v-show="userStore.preference.orderMethod === 'whatsapp'"
              class="selectedDiv h-full w-full from-[20%] absolute bottom-0 left-0 bg-opacity-[.3] z-[1] flex items-start justify-end px-[1vw] py-[1vh]"
            >
              <!-- Selected indicator without text -->
              <span
                class="absolute top-1 right-1 bg-white text-gray-500 px-2 py-1 text-[1.4vh] rounded-md"
                >Selected</span
              >
            </div>

            <!-- MOBILE -->
          </button>
          <button
            @click="toggleOrderMethod('email')"
            v-show="
              userStore.preference.flooring === `${flooring}` &&
              userStore.preference.spec_1 !== '' &&
              userStore.preference.spec_2 !== '' &&
              userStore.preference.color.length > 0 &&
              userStore.preference.budget !== ''
            "
            class="w-[44vw] OrderMethods_MOB-CONTAINER opacity-0 translate-y-[20%] rounded-md tracking-[.3vw] text-[2.4vh] font-[500] bg-[#111] border-[2px] border-[#333] z-[999] text-white px-[2vw] flex items-center gap-[2vw] justify-between"
          >
            <div
              v-show="userStore.preference.orderMethod === 'email'"
              class="selectedDiv h-full w-full from-[20%] absolute bottom-0 left-0 bg-opacity-[.3] z-[1] flex items-start justify-end px-[1vw] py-[1vh]"
            >
              <!-- Selected indicator without text -->
              <span
                class="absolute top-1 right-1 bg-white text-gray-500 px-2 py-1 text-[1.4vh] rounded-md"
                >Selected</span
              >
            </div>
            <!-- MOBILE -->
            <span
              class="bg-gradient-to-r flex-[85] py-[3.2vh] from-[#fff] via-[#ececec] shadow-2xl to-[#ececec] bg-clip-text text-transparent bg-300% text-center px-[4vw] animate-gradient_2 uppercase tracking-[.4vw]"
            >
              Mail</span
            >

            <!-- MOBILE -->
          </button>
        </div>
      </div>
    </div>
  </transition>
  <div
    v-show="orderMethodWarning"
    class="orderMethodWarningMOB h-screen w-screen bg-[#000] bg-opacity-[.2] backdrop-blur-[4px] fixed top-0 left-0 z-[9999]"
  >
    <div class="h-[100svh] w-full flex justify-center items-center">
      <div
        class="h-max w-[90vw] flex flex-col items-start gap-[4vh] bg-[#f1f1f1] pt-[2.8vh] rounded-lg"
      >
        <span class="text-detailsContainer_heading_MOB text-[#333] px-[3.2vw]"
          >WARNING:</span
        >
        <span class="text-[2vh] px-[3.2vw] text-[#555]"
          >Changing your order method will result in losing all previously saved
          items associated with this contact number/email. <br />
          <br />
          Are you sure you want to proceed?</span
        >
        <div
          class="h-max w-full flex justify-between gap-[4vw] border-t-[1.8px] border-[#999]"
        >
          <button
            class="px-[8vw] text-[2vh] font-[500] text-[#222] py-[2vh] w-1/2 text-center border-r-[1.8px] border-[#999] tracking-[.3vw]"
            @click="handleCloseOrderMethodWarningNo"
          >
            NO
          </button>
          <button
            class="px-[8vw] text-[2vh] font-[500] text-[#222] py-[2vh] w-1/2 text-center border-[#999] tracking-[.3vw]"
            @click="handleCloseOrderMethodWarningYes"
          >
            YES
          </button>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import useUserStore from "~/stores/user";
const userStore = useUserStore();
const restrictedAccess = useCookie("restrictedAccess");
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
