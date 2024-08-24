<template>
  <!-- POP UP -->
  <div
    class="countryDetailsPopUp h-[100svh] opacity-0 invisible w-screen flex items-center justify-center bg-[#000] bg-opacity-[.1] backdrop-blur-[8px] z-[999] fixed top-0 left-0"
  >
    <div
      class="h-max w-[90vw] rounded-xl overflow-hidden bg-[#444] bg-opacity-[.8] backdrop-blur-[8px] flex flex-col gap-[4vh] items-center py-[4vh] px-[4.2vw] text-[#f1f1f1] relative shadow-2xl"
    >
      <div
        class="h-full w-full absolute top-0 left-0 bg-gradient-to-t via-[#f1f1f1] from-[#fff] to-[#f1f1f1] z-[-9]"
      ></div>
      <span class="text-[2.4vh] font-[400] w-full text-start text-[#666]"
        >Current Country: {{ userStore.preference.country }}</span
      >
      <div class="h-max w-full flex flex-col items-center gap-[8vh]">
        <div class="h-max w-full flex flex-col items-center gap-[5vh]">
          <span
            class="flex-[4] text-[3.8vh] leading-[4vh] w-full text-start text-[#333]"
            >Choose Your Country</span
          >
          <select
            v-model="userStore.preference.country"
            class="w-full bg-inherit rounded-lg border-[2px] border-[#777] px-[3.2vw] py-[2.4vh] text-[2.4vh] text-[#000] outline-none bg-black"
          >
            <option value="Bahrain">Bahrain</option>
            <option value="UAE">UAE</option>
            <option value="Saudi Arabia">Saudi Arabia</option>
            <option value="Kuwait">Kuwait</option>
            <option value="Qatar">Qatar</option>
          </select>
        </div>
        <button
          @click="() => handleAutoAlpha('countryDetailsPopUp', 0)"
          class="rounded-md border-[2px] text-[2.4vh] font-[500] tracking-[.2vw] text-[#333] bg-[#fff] bg-opacity-[.4] border-[#333] py-[2.4vh] w-[100%]"
        >
          PROCEED
        </button>
      </div>
    </div>
  </div>
  <!-- ELEMENT -->
  <div
    @click="() => handleAutoAlpha('countryDetailsPopUp', 1)"
    class="h-full flex items-center w-max gap-[2vw] bg-[#] border-[1px] bg-[#f2f2f3] rounded-md px-[2vw] py-[.8vh] border-black"
  >
    <!-- LOGO -->
    <span>
      <svg
        v-show="userStore.preference.country === 'Bahrain'"
        class="h-[2.8vh]"
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 64 64"
      >
        <path
          fill="#f9f9f9"
          d="M26.8 61.5L36 56l-10-6l10-6l-10-6l10-6l-10-6l10-6l-10-6l10-6l-9.2-5.5C12.7 4.9 2 17.2 2 32s10.7 27.1 24.8 29.5"
        />
        <path
          fill="#c94747"
          d="M32 2c-1.8 0-3.5.2-5.2.5L36 8l-10 6l10 6l-10 6l10 6l-10 6l10 6l-10 6l10 6l-9.2 5.5c1.7.3 3.4.5 5.2.5c16.6 0 30-13.4 30-30S48.6 2 32 2"
        />
      </svg>
      <svg
        xmlns="http://www.w3.org/2000/svg"
        v-show="userStore.preference.country === 'Qatar'"
        class="h-[2.8vh]"
        viewBox="0 0 64 64"
      >
        <path
          fill="#c94747"
          d="M32 2c-5.3 0-10.2 1.4-14.5 3.7v52.5C21.8 60.6 26.7 62 32 62c16.6 0 30-13.4 30-30S48.6 2 32 2"
        />
        <path
          fill="#9450e0"
          d="M32 2c-5.3 0-10.2 1.4-14.5 3.7v52.5C21.8 60.6 26.7 62 32 62c16.6 0 30-13.4 30-30S48.6 2 32 2"
          opacity=".33"
        />
        <path
          fill="#f9f9f9"
          d="M2 32c0 11.3 6.3 21.1 15.5 26.3L28 56l-10-3l10-3l-10-3l10-3l-10-3l10-3l-10-3l10-3l-10-3l10-3l-10-3l10-3l-10-3l10-3l-10-3l10-3l-10.5-2.3C8.3 10.9 2 20.7 2 32"
        />
      </svg>
      <svg
        xmlns="http://www.w3.org/2000/svg"
        v-show="userStore.preference.country === 'Saudi Arabia'"
        class="h-[2.8vh]"
        viewBox="0 0 64 64"
      >
        <circle cx="32" cy="32" r="30" fill="#699635" />
        <g fill="#fff">
          <path
            d="M31.7 26.7c-.1-.9.4-1.8 1.3-1.6c.7.1 1.5.8 1.1 1.5c-.6 1.1-2.2 1.1-3.2 1.7c.1.6 3-.1 3.5-.1s1 .2.7.8s-1.3.6-1.9.7s-1.6.1-1.9.6c-.6.8.6.9 1 1.1c1 .5-.6 1-1 .9c-1.5-.3-1.8-1.1-2.7-2.1c-.9 1.2-3.7 3.9-4.3 1.1c-1 .4-2 .9-3.1 1c.5-.7 1.5-1 2.3-1.4c1-.5 1-1.4 1.6-2.2c.2.3 0 .7.1 1.1c.8-.4 1.8-1.2 1.4-2.2c0-.1-1.2-2.5-.2-2.1c.9.4.6 1.3.8 2c.3 1.3-.3 2-1.3 2.8c-.4.3-1.5 1.5-.2 1.5c.9 0 1.7-1 2.2-1.6c.6-.8.4-1.6 0-2.5c-.3-.7-1-2.2-.1-2.7c.7 1.1 1 2.4 1.3 3.7c.2 1.1.4 2.2 1.6 2.5c-.1-.8.4-1.4 1.1-1.7c-.5-.4-3.3.1-2.2-1.4c.1-.7 2.1-1 2.1-1.4"
          />
          <path
            d="M16.4 30.4c.5 1.4 2.2.9 3.2.5c1.6-.8 1.6-2 1.6-3.6c-.6.3-.5 1.4-.7 1.9c-.4.8-1.7 1.5-2.6 1.4c-1.3-.2-1.9-2.4-.9-3.2c.2.7-.3 2.2.9 2.3c.9.1 2.7-1 2.4-2c-1.2.4-1.9 0-1.5-1.3c.3-1.2 1.5-.3 2 .3c1.9-1.1-1.5-5.3.5-6.4c.4.7 1 1.6.5 2.3c-.6.8 0 2.5.1 3.4c1-.9.2.7 1 .8c.5.1.7-1.2 1-1.2c.1.3.1 1.2.6 1.1c.6-.2-.1-1 .5-1.2c.2.5.1 2-.6 1.9c-.6-.1-.5-.5-1.2-.1c-.6.3-.8 0-1.2-.3c-.1 1.2.3 2.5-.4 3.6c-.6.9-1.8 1.4-2.8 1.6c-2.6.5-3.3-2.1-2.4-4.2c.2.6-.2 1.7 0 2.4m24.4.5c.5 1.3 1.5-1.4 1.8-1.8c.8-1.2 2 1.9 2.5-.1c.3-1.3-.1-2.6-.2-3.9c-.1-.9-.4-1.7-1-2.4c-.6-.8-1.2-1.5-.9-2.5c1 .4 1 1.2 1.5 2c.1-.6-.3-1.4.1-1.9c.5-.7.9 1.2.9 1.4c.1.5-.4.7-.1 1.5c.2.6.6 1.2 1 1.7c-.1-.6-1-4.7 0-4.7c.3 0 .6 1.2.6 1.4c.2.6-.2 1.1-.2 1.8c-.1 1.2.1 2.6.9 3.5c.4.5 1.9 2.3 1.1 2.9c-.6-.7-1-1.5-1.5-2.2c0 .8.2 1.7-.2 2.3c-.4-.2-.2-1.5-.2-1.8c0-1.1-.7-2-1.3-2.9c-.2 1.5 1 4.3-.4 5.4c-.9.8-2.1-1-2.4-.3c-.3.5-1 2.3-1.8 2.1c-1-.2-1.7-3-.6-3.3c.1.5.1 1.2.4 1.8"
          />
          <path
            d="M19.4 24.1c.7.1 0-2.3 0-2.7c.1-.4.4-.6.6-.2c.3.6.3 1.3.4 1.9c0 .5.1 1.1-.3 1.5c-.6.6-1.4.3-1.7-.5c-1.4 1.2.4 3.3-.8 4.5c-.2-1.1 0-2.3-.4-3.3c-.2-.5-1.1-.3-1.2-1.2c0-.4.3-1.5-.1-1.8c-.2.4-.4 3.5-1.4 2.6c-.8-.6-.6-2.6-.3-3.4c.6.3-.1 2.5.7 2.6c.4.1.5-1.6.6-1.9c.3-.5 1.3-1.9 1.1-.5c-.1.6-.6 2.5.6 2.4c-.1-1-.2-2-.4-3c-.1-.5.2-1.5.6-.6c.3.6.1.9 0 1.5c-.1.7.2 1.4.3 2c.6-.5-.2-2.4.3-3.2c1.2.7-.1 3.1 1.4 3.3m12.9.2c-.5.7-1.4.1-1.8-.4c-.5.6-1.5 1.6-2.3.8c-.6-.6.1-1.7-.4-2.2c-.3.5-.8 2.9-1.7 1.8c-.5-.6-1.2-2.7-.1-3.2c-.1.8-.3 1.7.2 2.4s1-1.1 1.2-1.5c.3-.7 1.3-1.9 1.1-.4c-.1.6-.3 2 .3 2.4c.4.3.9-.2 1.1-.5c.4-.5.2-1.3.1-1.9c-.1-.5-.3-1.1 0-1.6c.4-.6.7.8.7 1.1s.4 3.4 1.1 2.4c.7-.9-1.2-2.9.1-3.4c.5-.2 1.4 1.8.4 1.2c.3.9.7 2.2 0 3m3.8 1.2c.1 1.3 1.2 4.9-.3 5.7c-.2-.4 0-1 .1-1.5c.1-.9-.1-1.8-.2-2.6c-.2-1.9-.4-3.3-1.7-4.8c-.3-.4-.8-.7-.9-1.3c0-.2-.1-1.1.3-.9c.3.1 2 1.6 1.1 1.6c.1.2.5 1 .7 1c0-.5-.6-2 0-2.3c.5-.3 1.1 1.6.9 2c-.2.5-.2.8 0 1.5c.2.8.7 1.5 1.1 2.2c.6 1 1.8 2.4 1.5 3.7c-.6-.3-1-1.7-1.3-2.3c-.2-.5-.4-1-.7-1.4c-.1-.1-.7-.9-.6-.4zM50 27.4c.1 2.1-.6 4.8-3.2 4.8c0-.6 1.3-1.2 1.7-1.5c1-.8.9-2.3.8-3.4c-.1-1.5-.2-3-.5-4.5c-.1-.9-.6-2.2.2-2.8c.5.4 1.2 1.5.9 1.9c-.5.6 0 5.1.1 5.5"
          />
          <path
            d="M37.2 31.9c2.6-1.5 1.8-4.7 1.6-7.2c-.1-.7-.1-1.4-.2-2.1c0-.5-.4-1.2-.2-1.7c.5-1.3.9-.1 1 .7c.1.5-.3.6-.2 1c.1.8.1 1.6.2 2.4c.1 1.3.3 2.6.2 3.8c-.2 1.9-1.2 4-3.5 3.6c.1-.2.8-.3 1.1-.5m4.2-5c.1 1 .5 2.8 0 3.7c-.4.6-.4-.4-.5-.5c-.1-.8-.1-1.6-.1-2.5c-.2-2.2-.9-4.4-.9-6.5c0-2.7 2.3 1.5 1 1.3c.1 1.5.3 3 .5 4.5m-16.3-5.1c.2.5-2.3 1.8-2.6 1.8c-.1-.5 1.1-1.2 1.4-1.4c.3-.3.5-.3.4-.7c-.2-.4-.1-1.1.4-1.3c1-.3.3 1.2.4 1.6m-10.3 8.9c0 .8.3.4.7.2c.2.4-.3 1.5-.8 1c-.7-.7-.1-2.3.2-3c.2.5-.2 1.3-.1 1.8M43 24.5c.1-.4-.2-.8.1-1.2c.4-.5.8.1.6.3s-.5-.2-.5.4c0 .3.2.9-.1 1.2c-.2-.1-1.1-1.4-1-1.6c.4-.4.8.8.9.9m-26.1 1.7c-.2.4-2.5 1.7-2.6 1.4c0-.3 2.9-2 2.6-1.4m17 5.1c-.3.9 1 .1 1.3 0c-.4.7-1.8 1.3-1.6 0c-.1 0-.3.1-.4.1c-.2-.2 1-1 .7-.1m10.9-.3c.3 0 .8.9.5 1.1c-.2.2-1.1.3-.6-.1c.6-.6.1-1 .1-1m-14.1-5.1c.1-.2.1-.5.2-.7c1 .8-1.6 2.1-1.1.2c.2.2.2.5.4.6c0-.2.1-.5.1-.7c.2.2.2.5.4.6m11.7 1.3c-.3-.4 1.5-1.5 1.8-1.7c.2.3-1.2 1.4-1.8 1.7m5.6-4c-.2-.6-.8-1.8-.2-2.3c.4.3.6 1.8.2 2.3m-10.9-2c-.1-.2-.4-.4-.4-.7c.1-.4.3-.3.5-.1c.3.4.5 1.5 0 1.8c0-.3.1-.7-.1-1m-12.2 2.7c0 .6-1 1.2-1.1.4c-.1-.3.4-1.4.6-1.1c-.4.9-.4 1.2.5.7"
          />
          <path
            d="M37.4 22.8c.4 1 .2.1.6-.1c.7 1.3-1.5 1-1 .2c.1.1.2.3.2.4c.1-.1.1-.3.2-.5m6.4 4.6c-.5-.4.1-.9.4-.4c.2.3.2 1.1-.2 1.3c0-.3.1-.7-.2-.9m-20.5 2.2c0-.2-.1-1.7.2-1.5c.4.2.3 1.3-.2 1.5m-4.2-9.4c.1.3.2.7.4.2c.8.9-2 .6-1-.3c0 .1.2.7.6.1m10.2 2.2c0-.4-.6-2.1-.1-2.1c.6.1.5 1.6.1 2.1m-14-.9c-.3-.1.2-.6 0-1c-.2.1-.4-.2-.2-.4c.8-.6.5 1.4.2 1.4m25.9 20.3l-.4-1.2l-.4 1.2H18.5s.2 1.8 2.4 1.8h19.4V45h5.3v-3.2zm3.4 2.4H41v-1h3.6z"
          />
        </g>
      </svg>
      <svg
        xmlns="http://www.w3.org/2000/svg"
        v-show="userStore.preference.country === 'Kuwait'"
        class="h-[2.8vh]"
        viewBox="0 0 64 64"
      >
        <path
          fill="#ed4c5c"
          d="M60 42c-5.5 0-10-4.5-10-10H10.8v21.2C16.2 58.6 23.7 62 32 62c13.1 0 24.2-8.4 28.3-20z"
        />
        <path
          fill="#699635"
          d="M60 22h.3C56.2 10.4 45.1 2 32 2c-8.3 0-15.8 3.4-21.2 8.8V32H50c0-5.5 4.5-10 10-10"
        />
        <path
          fill="#f9f9f9"
          d="M60.3 22H10.8v20h49.5c1.1-3.1 1.7-6.5 1.7-10s-.6-6.9-1.7-10"
        />
        <path
          fill="#3e4347"
          d="M10.8 10.8C5.4 16.2 2 23.7 2 32s3.4 15.8 8.8 21.2L22 42V22z"
        />
      </svg>
      <svg
        xmlns="http://www.w3.org/2000/svg"
        v-show="userStore.preference.country === 'UAE'"
        class="h-[2.8vh]"
        viewBox="0 0 64 64"
      >
        <path
          fill="#ed4c5c"
          d="M2 32c0 13.1 8.4 24.2 20 28.3V3.7C10.4 7.8 2 18.9 2 32"
        />
        <path
          fill="#699635"
          d="M32 2c-3.5 0-6.9.6-10 1.7V22h38.3C56.2 10.4 45.1 2 32 2"
        />
        <path
          fill="#f9f9f9"
          d="M60.3 22H22v20h38.3c1.1-3.1 1.7-6.5 1.7-10s-.6-6.9-1.7-10"
        />
        <path
          fill="#3e4347"
          d="M22 42v18.3c3.1 1.1 6.5 1.7 10 1.7c13.1 0 24.2-8.3 28.3-20z"
        />
      </svg>
    </span>
    <!-- CODE -->
    <span class="text-[1.8vh] text-center flex items-center"
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
import useUserStore from "~/stores/user";
const userStore = useUserStore();
const countriesAndCurrencies = {
  Bahrain: "BHD",
  UAE: "AED",
  SaudiArabia: "SAR",
  Kuwait: "KWD",
  Qatar: "QAR",
};

onMounted(() => {
  setTimeout(() => {
    handleAutoAlpha("countryDetailsPopUp", 1);
  }, 2000);
});
</script>

<style lang="scss" scoped></style>
