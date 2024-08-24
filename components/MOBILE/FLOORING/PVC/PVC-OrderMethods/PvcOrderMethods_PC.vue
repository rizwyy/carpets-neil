<template>
  <div
    v-show="
      userStore.preference.flooring === 'PVC' &&
      userStore.preference.spec_1 !== '' &&
      userStore.preference.spec_2 !== '' &&
      userStore.preference.spec_3 !== '' &&
      userStore.preference.color.length > 0 &&
      userStore.preference.budget !== ''
    "
    class="h-max w-full flex flex-col items-center gap-[0vh] mt-[2vh]"
  >
    <div
      class="h-max w-[94%] flex flex-col gap-[4vh] bg-[#f1f1f1] pt-[6vh] rounded-md items-center"
    >
      <span
        v-show="
          userStore.preference.flooring === 'PVC' &&
          userStore.preference.spec_1 !== '' &&
          userStore.preference.spec_2 !== '' &&
          userStore.preference.spec_3 !== '' &&
          userStore.preference.color.length > 0 &&
          userStore.preference.budget !== ''
        "
        class="w-full px-[4vw] text-[2.4vw] leading-[3.8vh] text-detailsContainer_heading_PC"
        >Select Your Preferred Ordering Method</span
      >
      <div
        class="h-max w-[92%] flex items-center justify-center gap-[4vw] px-[2vw] mb-[12vh] mt-[4vh]"
      >
        <button
          @click="toggleOrderMethod('whatsapp')"
          v-show="
            userStore.preference.flooring === 'PVC' &&
            userStore.preference.spec_1 !== '' &&
            userStore.preference.spec_2 !== '' &&
            userStore.preference.spec_3 !== '' &&
            userStore.preference.color.length > 0 &&
            userStore.preference.budget !== ''
          "
          class="w-[44vw] rounded-md tracking-[.3vw] text-[1.8vw] font-[500] bg-[#111] border-[2px] border-[#333] z-[999] text-white px-[2vw] flex items-center gap-[2vw] justify-between"
        >
          <!-- DESKTOP -->
          <span
            class="bg-gradient-to-r flex-[85] py-[3.2vh] from-[#fff7] via-[#ececec] shadow-2xl to-[#fff5] bg-clip-text text-transparent bg-300% text-center px-[4vw] animate-gradient_1 uppercase tracking-[.4vw]"
          >
            WhatsApp</span
          >

          <!-- DESKTOP -->
        </button>
        <button
          @click="toggleOrderMethod('email')"
          v-show="
            userStore.preference.flooring === 'PVC' &&
            userStore.preference.spec_1 !== '' &&
            userStore.preference.spec_2 !== '' &&
            userStore.preference.spec_3 !== '' &&
            userStore.preference.color.length > 0 &&
            userStore.preference.budget !== ''
          "
          class="w-[42vw] rounded-md tracking-[.3vw] text-[1.8vw] font-[500] bg-[#111] border-[2px] border-[#333] z-[999] text-white px-[2vw] flex items-center gap-[2vw] justify-between"
        >
          <!-- DESKTOP -->
          <span
            class="bg-gradient-to-r flex-[85] py-[3.2vh] from-[#fff7] via-[#fff] shadow-2xl to-[#fff5] bg-clip-text text-transparent bg-300% text-center px-[4vw] animate-gradient_2 uppercase tracking-[.4vw]"
          >
            Mail</span
          >

          <!-- DESKTOP -->
        </button>
      </div>
    </div>
  </div>
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
