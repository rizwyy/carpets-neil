<template>
  <div class="h-max w-full flex flex-col gap-[0vh] mt-[2vh]">
    <span
      v-show="
        userStore.preference.flooring === 'raised' &&
        userStore.preference.spec_1 !== '' &&
        userStore.preference.spec_2 !== '' &&
        userStore.preference.spec_3 !== '' &&
        userStore.preference.color.length > 0 &&
        userStore.preference.budget !== ''
      "
      class="w-[75%] px-[4vw] text-[3.2vh] leading-[3.8vh]"
      >Select Your Preferred Ordering Method:</span
    >
    <div
      class="h-max w-full flex items-center justify-center gap-[4vw] px-[2vw] mb-[12vh] mt-[4vh]"
    >
      <a
        @click="setUserPreferenceCookie('whatsapp')"
        href="/flooring/raised/checkout"
        v-show="
          userStore.preference.flooring === 'raised' &&
          userStore.preference.spec_1 !== '' &&
          userStore.preference.spec_2 !== '' &&
          userStore.preference.spec_3 !== '' &&
          userStore.preference.color.length > 0 &&
          userStore.preference.budget !== ''
        "
        class="w-[44vw] rounded-md tracking-[.3vw] text-[2.4vh] font-[500] bg-[#111] border-[2px] border-[#333] z-[999] text-white px-[2vw] flex items-center gap-[2vw] justify-between"
      >
        <!-- DESKTOP -->
        <span
          class="bg-gradient-to-r flex-[85] py-[3.2vh] from-[#fff7] via-[#ececec] shadow-2xl to-[#fff5] bg-clip-text text-transparent bg-300% text-center px-[4vw] animate-gradient_1 uppercase tracking-[.4vw]"
        >
          WhatsApp</span
        >

        <!-- DESKTOP -->
      </a>
      <a
        @click="setUserPreferenceCookie('email')"
        href="/flooring/raised/checkout"
        v-show="
          userStore.preference.flooring === 'raised' &&
          userStore.preference.spec_1 !== '' &&
          userStore.preference.spec_2 !== '' &&
          userStore.preference.spec_3 !== '' &&
          userStore.preference.color.length > 0 &&
          userStore.preference.budget !== ''
        "
        class="w-[42vw] rounded-md tracking-[.3vw] text-[2.4vh] font-[500] bg-[#111] border-[2px] border-[#333] z-[999] text-white px-[2vw] flex items-center gap-[2vw] justify-between"
      >
        <!-- DESKTOP -->
        <span
          class="bg-gradient-to-r flex-[85] py-[3.2vh] from-[#fff7] via-[#fff] shadow-2xl to-[#fff5] bg-clip-text text-transparent bg-300% text-center px-[4vw] animate-gradient_2 uppercase tracking-[.4vw]"
        >
          Mail</span
        >

        <!-- DESKTOP -->
      </a>
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
