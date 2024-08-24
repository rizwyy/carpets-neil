<template>
  <div
    v-show="
      userStore.preference.flooring === 'raised' &&
      userStore.preference.spec_1 !== '' &&
      userStore.preference.spec_2 !== '' &&
      userStore.preference.spec_3 !== '' &&
      userStore.preference.color.length > 0 &&
      userStore.preference.budget !== ''
    "
    class="h-max w-full flex flex-col items-center gap-[0vh] mt-[2vh] select-none"
  >
    <div
      class="h-max w-[94%] flex flex-col gap-[4vh] bg-[#f1f1f1] pt-[6vh] rounded-md items-center"
    >
      <span
        v-show="
          userStore.preference.flooring === 'raised' &&
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
        class="h-max w-[92%] flex items-center justify-center gap-[4vw] px-[2vw] mb-[8vh] mt-[4vh]"
      >
        <button
          @click="toggleOrderMethod('whatsapp')"
          v-show="
            userStore.preference.flooring === 'raised' &&
            userStore.preference.spec_1 !== '' &&
            userStore.preference.spec_2 !== '' &&
            userStore.preference.spec_3 !== '' &&
            userStore.preference.color.length > 0 &&
            userStore.preference.budget !== ''
          "
          class="w-[44vw] rounded-md tracking-[.3vw] text-[1.8vw] font-[500] bg-[#111] border-[2px] border-[#333] z-[999] text-white px-[2vw] flex items-center gap-[2vw] justify-between relative"
        >
          <div
            v-show="userStore.preference.orderMethod === 'whatsapp'"
            class="selectedDiv h-full w-full absolute bottom-0 left-0 bg-opacity-[.3] z-[1] px-[1vw] py-[1vh]"
          >
            <!-- Selected indicator without text -->
            <span
              class="absolute top-[1vh] right-[1vw] bg-[#fff3] backdrop-blur-[2px] text-[#f1f1f1] flex items-center gap-[.4vw] px-[1vw] py-[.8vh] text-[1vw] rounded-md tracking-[.05vw]"
              >SELECTED<svg
                class="w-[1.4vw]"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 512 512"
              >
                <path
                  d="M256 32C132.3 32 32 132.3 32 256s100.3 224 224 224 224-100.3 224-224S379.7 32 256 32zm114.9 149.1L231.8 359.6c-1.1 1.1-2.9 3.5-5.1 3.5-2.3 0-3.8-1.6-5.1-2.9-1.3-1.3-78.9-75.9-78.9-75.9l-1.5-1.5c-.6-.9-1.1-2-1.1-3.2 0-1.2.5-2.3 1.1-3.2.4-.4.7-.7 1.1-1.2 7.7-8.1 23.3-24.5 24.3-25.5 1.3-1.3 2.4-3 4.8-3 2.5 0 4.1 2.1 5.3 3.3 1.2 1.2 45 43.3 45 43.3l111.3-143c1-.8 2.2-1.4 3.5-1.4 1.3 0 2.5.5 3.5 1.3l30.6 24.1c.8 1 1.3 2.2 1.3 3.5.1 1.3-.4 2.4-1 3.3z"
                  fill="#e8e8e8"
                />
              </svg>
            </span>
          </div>
          <!-- DESKTOP -->
          <span
            class="bg-gradient-to-r flex-[85] py-[3.2vh] from-[#fff7] via-[#ececec] shadow-2xl to-[#fff5] bg-clip-text text-transparent bg-300% text-center px-[4vw] uppercase tracking-[.4vw]"
          >
            WhatsApp</span
          >

          <!-- DESKTOP -->
        </button>
        <button
          @click="toggleOrderMethod('email')"
          v-show="
            userStore.preference.flooring === 'raised' &&
            userStore.preference.spec_1 !== '' &&
            userStore.preference.spec_2 !== '' &&
            userStore.preference.spec_3 !== '' &&
            userStore.preference.color.length > 0 &&
            userStore.preference.budget !== ''
          "
          class="w-[42vw] rounded-md tracking-[.3vw] text-[1.8vw] font-[500] bg-[#111] border-[2px] border-[#333] z-[999] text-white px-[2vw] flex items-center gap-[2vw] justify-between relative"
        >
          <div
            v-show="userStore.preference.orderMethod === 'email'"
            class="selectedDiv h-full w-full absolute bottom-0 left-0 bg-opacity-[.3] z-[1] px-[1vw] py-[1vh]"
          >
            <!-- Selected indicator without text -->
            <span
              class="absolute top-[1vh] right-[1vw] bg-[#fff3] backdrop-blur-[2px] text-[#f1f1f1] flex items-center gap-[.4vw] px-[1vw] py-[.8vh] text-[1vw] rounded-md tracking-[.05vw]"
              >SELECTED<svg
                class="w-[1.4vw]"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 512 512"
              >
                <path
                  d="M256 32C132.3 32 32 132.3 32 256s100.3 224 224 224 224-100.3 224-224S379.7 32 256 32zm114.9 149.1L231.8 359.6c-1.1 1.1-2.9 3.5-5.1 3.5-2.3 0-3.8-1.6-5.1-2.9-1.3-1.3-78.9-75.9-78.9-75.9l-1.5-1.5c-.6-.9-1.1-2-1.1-3.2 0-1.2.5-2.3 1.1-3.2.4-.4.7-.7 1.1-1.2 7.7-8.1 23.3-24.5 24.3-25.5 1.3-1.3 2.4-3 4.8-3 2.5 0 4.1 2.1 5.3 3.3 1.2 1.2 45 43.3 45 43.3l111.3-143c1-.8 2.2-1.4 3.5-1.4 1.3 0 2.5.5 3.5 1.3l30.6 24.1c.8 1 1.3 2.2 1.3 3.5.1 1.3-.4 2.4-1 3.3z"
                  fill="#e8e8e8"
                />
              </svg>
            </span>
          </div>
          <!-- DESKTOP -->
          <span
            class="bg-gradient-to-r flex-[85] py-[3.2vh] from-[#fff7] via-[#fff] shadow-2xl to-[#fff5] bg-clip-text text-transparent bg-300% text-center px-[4vw] animate-gradient_2 uppercase"
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
