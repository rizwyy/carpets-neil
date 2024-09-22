<template>
  <!-- POP UP -->
  <div
    class="countryDetailsPopUp h-[100vh] opacity-0 invisible w-screen flex items-center justify-center bg-[#000] bg-opacity-[.5] backdrop-blur-[8px] z-[999] fixed top-0 left-0"
  >
    <div
      @click.self="setCountryCookie"
      class="h-[100svh] w-full flex items-start justify-center pt-[20svh]"
    >
      <div
        class="h-max w-[88vw] border-[#666] bg-[#fff] border-[4px] rounded-xl overflow-hidden bg-[#444] bg-opacity-[.9] backdrop-blur-[12px] flex flex-col gap-[1.8rem] items-center py-[2rem] px-[4.2vw] text-[#f1f1f1] relative shadow-2xl"
      >
        <span class="text-[1rem] font-[400] w-full text-start text-[#666]"
          >Current Country: {{ userStore.preference.country }}</span
        >
        <div class="h-max w-full flex flex-col items-center gap-[8vh]">
          <div class="h-max w-full flex flex-col items-center gap-[5vh]">
            <span
              class="flex-[4] text-[1.6rem] leading-[4vh] w-full text-start text-[#333]"
              >Choose Your Country</span
            >
            <select
              @change="handleChangeInCountry"
              v-model="userStore.preference.country"
              class="w-full bg-inherit rounded-lg border-[2px] border-[#777] px-[3.2vw] py-[1.8vh] text-[1rem] text-[#000] outline-none bg-black"
            >
              <option value="Bahrain">Bahrain</option>
              <option value="UAE">UAE</option>
              <option value="Saudi Arabia">Saudi Arabia</option>
              <option value="Kuwait">Kuwait</option>
              <option value="Qatar">Qatar</option>
            </select>
          </div>
          <button
            @click="() => setCountryCookie()"
            class="rounded-md border-[2px] text-[1rem] font-[500] tracking-[.2vw] text-[#333] border-[#555] py-[2.4vh] w-[100%]"
          >
            PROCEED
          </button>
        </div>
      </div>
    </div>
  </div>
  <!-- ELEMENT -->
  <div
    @click="handleEnableCountryOverlay"
    class="h-full flex items-center w-max gap-[2vw] bg-[#] border-[1px] bg-[#f2f2f3] rounded-md px-[2vw] py-[.8vh] border-black"
  >
    <!-- LOGO -->
    <span class="text-[1rem]">
      <BahrainFlagIcon v-show="userStore.preference.country === 'Bahrain'" />
      <QatarFlagIcon v-show="userStore.preference.country === 'Qatar'" />
      <SaudiFlagIcon v-show="userStore.preference.country === 'Saudi Arabia'" />
      <KuwaitFlagIcon v-show="userStore.preference.country === 'Kuwait'" />
      <UaeFlagIcon v-show="userStore.preference.country === 'UAE'" />
    </span>
    <!-- CODE -->
    <span class="text-[.9rem] text-center flex items-center"
      >{{ userStore.preference.country
      }}<svg
        xmlns="http://www.w3.org/2000/svg"
        class="h-[2.4vh]"
        viewBox="0 0 24 24"
      >
        <path fill="currentColor" d="M12 14.308L8.192 10.5h7.616z" /></svg
    ></span>
  </div>
</template>

<script setup>
import BahrainFlagIcon from "~/public/icons/BahrainFlagIcon.vue";
import KuwaitFlagIcon from "~/public/icons/KuwaitFlagIcon.vue";
import QatarFlagIcon from "~/public/icons/QatarFlagIcon.vue";
import SaudiFlagIcon from "~/public/icons/SaudiFlagIcon.vue";
import UaeFlagIcon from "~/public/icons/UaeFlagIcon.vue";
import useUserStore from "~/stores/user";
const ctry = useCookie("ctry");

const userStore = useUserStore();
const countriesAndCurrencies = {
  Bahrain: "BHD",
  UAE: "AED",
  SaudiArabia: "SAR",
  Kuwait: "KWD",
  Qatar: "QAR",
};

function handleEnableCountryOverlay() {
  handleAutoAlpha("countryDetailsPopUp", 1);
  DISABLE_SCROLL();
}

function setCountryCookie() {
  ctry.value = userStore.preference.country;
  handleAutoAlpha("countryDetailsPopUp", 0);
  ENABLE_SCROLL();
}
function handleChangeInCountry() {
  userStore.userData.phone = "";
}
onMounted(() => {
  const TIMEOUT_DURATION = 2000;

  if (toRaw(ctry.value)) {
    userStore.preference.country = toRaw(ctry.value);
    return;
  }

  setTimeout(() => {
    handleAutoAlpha("countryDetailsPopUp", 1);
  }, TIMEOUT_DURATION);
});
</script>

<style lang="scss" scoped></style>
