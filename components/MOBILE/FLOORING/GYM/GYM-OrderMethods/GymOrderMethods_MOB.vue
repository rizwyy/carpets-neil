<template>
  <transition @beforeEnter="handleDetailsDOMEntry('PvcOrderMethods_MOB')">
    <div
      v-show="
        userStore.preference.flooring === 'gym' &&
        userStore.preference.spec_1 !== '' &&
        userStore.preference.spec_2 !== '' &&
        userStore.preference.spec_3 !== '' &&
        userStore.preference.color.length > 0 &&
        userStore.preference.budget !== ''
      "
      class="h-max w-screen flex justify-center pb-[10vh]"
    >
      <div
        class="h-max w-[96%] flex flex-col gap-[0vh] bg-gradient-to-br from-detailsFrom to-detailsTo pt-[4vh] pb-[4vh] rounded-md shadow-lg"
      >
        <span
          class="w-[75%] px-[4vw] text-[3.2vh] leading-[3.8vh] PvcOrderMethods_MOB-HEADING opacity-0 translate-x-[40%] text-detailsHeadCLR"
          >Select Your Preferred Ordering Method:</span
        >
        <div
          class="h-max w-full flex items-center justify-center gap-[4vw] px-[2vw] mt-[4vh]"
        >
          <button
            @click="toggleOrderMethod('whatsapp')"
            v-show="
              userStore.preference.flooring === 'gym' &&
              userStore.preference.spec_1 !== '' &&
              userStore.preference.spec_2 !== '' &&
              userStore.preference.spec_3 !== '' &&
              userStore.preference.color.length > 0 &&
              userStore.preference.budget !== ''
            "
            class="w-[44vw] PvcOrderMethods_MOB-CONTAINER opacity-0 translate-y-[20%] rounded-md text-[2.4vh] font-[500] bg-[#111] border-[2px] border-[#333] z-[999] text-white px-[2vw] flex items-center gap-[2vw] justify-between"
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
              userStore.preference.flooring === 'gym' &&
              userStore.preference.spec_1 !== '' &&
              userStore.preference.spec_2 !== '' &&
              userStore.preference.spec_3 !== '' &&
              userStore.preference.color.length > 0 &&
              userStore.preference.budget !== ''
            "
            class="w-[44vw] PvcOrderMethods_MOB-CONTAINER opacity-0 translate-y-[20%] rounded-md tracking-[.3vw] text-[2.4vh] font-[500] bg-[#111] border-[2px] border-[#333] z-[999] text-white px-[2vw] flex items-center gap-[2vw] justify-between"
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
</template>

<script setup>
import useUserStore from "~/stores/user";
const userStore = useUserStore();
const userPreference = useCookie("userPreference");
const restrictedAccess = useCookie("restrictedAccess");

function setUserPreferenceCookie() {
  userPreference.value = userStore.preference;
  restrictedAccess.value = false;
  console.log("COOKIE SET::", toRaw(userPreference.value));
}

function toggleOrderMethod(method) {
  userStore.preference.orderMethod = method;

  setUserPreferenceCookie();
  scrollToBottom();
}
</script>

<style lang="scss" scoped></style>
