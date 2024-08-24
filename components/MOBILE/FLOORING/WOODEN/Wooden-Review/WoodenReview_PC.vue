<template>
  <transition @beforeEnter="handleDetailsDOMEntry('woodenRevForm')">
    <div
      v-show="
        userStore.preference.flooring === 'Wooden' &&
        userStore.preference.spec_1 !== '' &&
        userStore.preference.spec_2 !== '' &&
        userStore.preference.spec_3 !== '' &&
        userStore.preference.color.length > 0 &&
        userStore.preference.budget !== '' &&
        userStore.preference.orderMethod !== '' &&
        userStore.userData.name !== ''
      "
      class="h-max w-screen flex justify-center pt-[6vh] pb-[18vh]"
    >
      <div
        class="h-max w-[88%] flex flex-col gap-[4.2vh] px-[3.8vw] pt-[3.2vh] rounded-md overflow-hidden shadow-xl relative pb-[4vh] bg-gradient-to-b from-[#ebf4f5] to-[#b5c6e0]"
      >
        <div
          class="h-full w-full absolute top-0 left-0 flex items-center justify-center opacity-0 loadingOverlay invisible bg-[#fff1] backdrop-blur-[8px] z-[999]"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            class="h-[6vh]"
            viewBox="0 0 24 24"
          >
            <circle cx="18" cy="12" r="0" fill="currentColor">
              <animate
                attributeName="r"
                begin=".67"
                calcMode="spline"
                dur="1.5s"
                keySplines="0.2 0.2 0.4 0.8;0.2 0.2 0.4 0.8;0.2 0.2 0.4 0.8"
                repeatCount="indefinite"
                values="0;2;0;0"
              />
            </circle>
            <circle cx="12" cy="12" r="0" fill="currentColor">
              <animate
                attributeName="r"
                begin=".33"
                calcMode="spline"
                dur="1.5s"
                keySplines="0.2 0.2 0.4 0.8;0.2 0.2 0.4 0.8;0.2 0.2 0.4 0.8"
                repeatCount="indefinite"
                values="0;2;0;0"
              />
            </circle>
            <circle cx="6" cy="12" r="0" fill="currentColor">
              <animate
                attributeName="r"
                begin="0"
                calcMode="spline"
                dur="1.5s"
                keySplines="0.2 0.2 0.4 0.8;0.2 0.2 0.4 0.8;0.2 0.2 0.4 0.8"
                repeatCount="indefinite"
                values="0;2;0;0"
              />
            </circle>
          </svg>
        </div>
        <div class="h-max w-full flex flex-col items-start gap-[1.2vh]">
          <span
            class="text-detailsContainer_heading_PC woodenRevForm-HEADING text-detailsContainer_heading_PC translate-y-[20%] opacity-0 w-full text-start tracking-[-.1vw] font-[400] text-[3.8vh] text-[#333]"
            >{{ userStore.userData.name.split(" ")[0] }}'s Preferences</span
          >
          <button
            @click="scrollToTop"
            class="woodenRevForm-HEADING opacity-0 underline underline-offset-[.5vh] translate-y-[20%] text-[2vh] text-[#999] font-[500] w-max flex gap-[.6vw] items-center z"
          >
            Edit Details
            <svg
              xmlns="http://www.w3.org/2000/svg"
              class="h-[2.4vh]"
              viewBox="0 0 24 24"
            >
              <path
                fill="currentColor"
                d="M5 19h1.425L16.2 9.225L14.775 7.8L5 17.575zm-1 2q-.425 0-.712-.288T3 20v-2.425q0-.4.15-.763t.425-.637L16.2 3.575q.3-.275.663-.425t.762-.15t.775.15t.65.45L20.425 5q.3.275.437.65T21 6.4q0 .4-.138.763t-.437.662l-12.6 12.6q-.275.275-.638.425t-.762.15zM19 6.4L17.6 5zm-3.525 2.125l-.7-.725L16.2 9.225z"
              />
            </svg>
          </button>
        </div>
        <span>
          <span
            class="mt-[1vh] w-full border-[2px] woodenRevForm-HEADING translate-y-[20%] opacity-0 rounded-full px-[4vw] py-[1vh] border-[#666] bg-[#fff7]"
            ><span>Category/Application:&nbsp;</span
            >{{ userStore.preference.spec_1 }}</span
          >
        </span>
        <span>
          <span
            class="mt-[1vh] w-full border-[2px] woodenRevForm-HEADING translate-y-[20%] opacity-0 rounded-full px-[4vw] py-[1vh] border-[#666] bg-[#fff7]"
            ><span>Activity/Type:&nbsp;</span
            >{{ userStore.preference.spec_2 }}</span
          >
        </span>
        <span>
          <span
            class="mt-[1vh] w-full border-[2px] woodenRevForm-HEADING translate-y-[20%] opacity-0 rounded-full px-[4vw] py-[1vh] border-[#666] bg-[#fff7]"
            ><span>Material/Style:&nbsp;</span
            >{{ userStore.preference.spec_3 }}</span
          >
        </span>
        <div class="h-max w-full flex justify-between items-center">
          <span>
            <span
              class="woodenRevForm-HEADING translate-y-[20%] opacity-0 w-full border-[2px] rounded-full px-[4vw] py-[1vh] border-[#666] bg-[#fff7]"
              ><span>Finish:&nbsp;</span>{{ userStore.preference.spec_4 }}</span
            >
          </span>
          <span
            class="woodenRevForm-HEADING translate-y-[20%] opacity-0 w-max border-[2px] rounded-full px-[4vw] py-[1vh] border-[#666] bg-[#fff7]"
            >Budget: {{ userStore.preference.budget }}</span
          >
        </div>

        <button
          @click="handleClick"
          class="bg-[#fff9] text-center woodenRevForm-HEADING active:scale-[.93] backdrop-blur-[8px] w-full border-[3.2px] tracking-[.2vw] border-[#333] rounded-md py-[2.4vh] uppercase font-[400] text-[2.4vh] px-[2vw] outline-none focus:border-black"
        >
          CONFIRM
        </button>
      </div>
    </div>
  </transition>
</template>

<script setup>
import useUserStore from "~/stores/user";
import { useRouter } from "vue-router";
const router = useRouter();
const restrictedAccess = useCookie("restrictedAccess");
const isAccessRestricted = ref(true);

const userStore = useUserStore();

const handleClick = () => {
  handleLoadingEntry();
  const userData = {
    name: userStore.userData.name,
    phone: userStore.userData.phone,
    email: userStore.userData.email,
  };

  // Call API route to set the cookie
  useFetch("/api/set-cookie")
    .then(({ data, error }) => {
      if (error?.value) {
        throw new Error("Error setting cookie: " + error.value);
      }
      console.log("SET COOKIE DONE");
      return fetch("/api/insert-logs", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(userData),
      });
    })
    .then((response) => {
      if (!response.ok) {
        throw new Error("Error inserting logs");
      }
      return response.json();
    })
    .then((logData) => {
      userStore.userData.email = "";
      userStore.userData.name = "";
      userStore.userData.phone = "";
      scrollToBottom();
      handleLoadingExit();
      restrictedAccess.value = false;
      router.push("/flooring/wooden/success");
      console.log("SUCCESS");
      console.log("Log data:", logData);
    })
    .catch((err) => {
      restrictedAccess.value = true;
      handleTempAnimation("errOverlayMOB");
      console.error("Unexpected errors:", err.message);
    });
};
</script>

<style lang="scss" scoped></style>
