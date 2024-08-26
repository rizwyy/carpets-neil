<template>
  <transition @beforeEnter="handleDetailsDOMEntry('revCard')">
    <div
      v-show="
        userStore.preference.flooring === `${flooring}` &&
        userStore.preference.spec_1 !== '' &&
        userStore.preference.spec_2 !== '' &&
        userStore.preference.color.length > 0 &&
        userStore.preference.budget !== '' &&
        userStore.preference.orderMethod !== '' &&
        userStore.userData.name !== ''
      "
      class="h-max w-screen flex justify-center pt-[6vh] pb-[18vh]"
    >
      <div
        class="h-max w-[94%] flex flex-col gap-[4.2vh] px-[3.8vw] pt-[3.2vh] rounded-md overflow-hidden shadow-xl relative pb-[4vh] bg-gradient-to-br from-detailsFrom to-detailsTo"
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
        <!-- CURRENT PREFERENCE -->
        <div class="h-max w-full flex flex-col gap-[4.2vh]">
          <div class="h-max w-full flex flex-col items-start gap-[1.2vh]">
            <span
              class="revCard-HEADING translate-y-[20%] opacity-0 w-full text-start tracking-[-.1vw] font-[400] text-[3.8vh] text-[#333]"
              >{{ userStore.userData.name.split(" ")[0] }}'s Preferences</span
            >
            <button
              @click="scrollToTop"
              class="revCard-HEADING opacity-0 underline underline-offset-[.5vh] translate-y-[20%] text-[2vh] text-[#999] font-[500] w-max flex gap-[.6vw] items-center z"
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
              class="mt-[1vh] w-full border-[2px] revCard-HEADING translate-y-[20%] opacity-0 rounded-full px-[4vw] py-[1vh] border-[#666] bg-[#fff7]"
              ><span>Category/Application:&nbsp;</span
              >{{ userStore.preference.spec_1 }}</span
            >
          </span>
          <span>
            <span
              class="mt-[1vh] w-full border-[2px] revCard-HEADING translate-y-[20%] opacity-0 rounded-full px-[4vw] py-[1vh] border-[#666] bg-[#fff7]"
              ><span>Activity/Type:&nbsp;</span
              >{{ userStore.preference.spec_2 }}</span
            >
          </span>
          <span>
            <span
              class="mt-[1vh] w-full border-[2px] revCard-HEADING translate-y-[20%] opacity-0 rounded-full px-[4vw] py-[1vh] border-[#666] bg-[#fff7]"
              ><span>Material/Style:&nbsp;</span
              >{{ userStore.preference.spec_3 }}</span
            >
          </span>
          <div
            class="h-max w-full flex flex-col justify-between gap-[3.2vh] items-start"
          >
            <span>
              <span
                v-show="!Array.isArray(userStore.preference.spec_4)"
                class="revCard-HEADING translate-y-[20%] opacity-0 w-full border-[2px] rounded-full px-[4vw] py-[1vh] border-[#666] bg-[#fff7]"
                ><span>Finish:&nbsp; </span
                >{{
                  userStore.preference.spec_4 === ""
                    ? "N/A"
                    : userStore.preference.spec_4
                }}</span
              >
              <span
                v-show="Array.isArray(userStore.preference.spec_4)"
                class="revCard-HEADING translate-y-[20%] opacity-0 w-full border-[2px] rounded-full px-[4vw] py-[1vh] border-[#666] bg-[#fff7]"
              >
                <span>Finish:&nbsp;</span>
                <span v-if="userStore.preference.spec_4.length > 0">
                  <span
                    v-for="(surface, index) in userStore.preference.spec_4"
                    :key="index"
                  >
                    {{ surface
                    }}<span
                      v-if="index < userStore.preference.spec_4.length - 1"
                      >,
                    </span>
                  </span>
                </span>
                <span v-else>N/A</span>
              </span>
            </span>
            <span
              class="revCard-HEADING translate-y-[20%] opacity-0 w-max border-[2px] rounded-full px-[4vw] py-[1vh] border-[#666] bg-[#fff7] text-right"
              >Budget:
              {{
                getPriceRange(
                  userStore.preference.budget,
                  userStore.preference.country
                )
              }}&nbsp;({{ userStore.preference.budget }})</span
            >
          </div>
          <div
            class="revCard-HEADING translate-y-[20%] opacity-0 h-max w-full pt-[3.2vh] border-[#e8e8e8] flex flex-col gap-[1.8vh] border-t-[1px]"
          >
            <span class="font-[400]">Colors Opted:</span>
            <span
              v-show="userStore.preference.color.length > 0"
              class="w-max border-[2px] rounded-md px-[4vw] text-[#999] font-[400] text-center py-[.6vh] border-[#444]"
              v-for="(color, index) in userStore.preference.color"
              :key="index"
              :style="{ backgroundColor: getColorHex(color) }"
              >{{ color }}
            </span>
          </div>
          <div
            class="h-max w-full pt-[4vh] border-t-[1px] border-[#999] flex flex-col gap-[4vh] mb-[4vh]"
          >
            <span
              class="text-[2.4vh] tracking-[-.05vw] w-full text-detailsContainer_heading_MOB"
              >Add On's</span
            >
            <div class="h-max w-full flex flex-col gap-[1vh] text-[#777]">
              <span>Provide Additional Details</span>
              <textarea
                type=""
                placeholder="Extra Info/Requirements Goes Here"
                class="border-[2px] text-detailsContainer_inputText_MOB rounded-md px-[2.4vw] border-[#999] bg-[#fff9] text-[#222] py-[1.8vh] outline-none focus:border-black"
              />
            </div>
            <div class="h-max w-full flex flex-col gap-[1vh] text-[#777]">
              <span>Attach Relevant Files</span>
              <input
                type="file"
                class="py-[.1vh] w-full text-[#333] text-[1.8vh] rounded-md leading-[4vh] file:bg-blue-100 file:text-[#555] file:font-[400] file:border-none file:px-[6vw] file:py-[1vh] file:mr-[4vw] file:rounded-md border-[2px] border-gray-500"
              />
            </div>
          </div>
        </div>

        <div
          class="h-max w-full flex flex-col justify-center items-center gap-[4vh]"
        >
          <button
            @click="() => updateIsOrderConfirmedAndRedirect(false)"
            class="bg-[#DCE9FE] text-center revCard-HEADING active:scale-[.93] backdrop-blur-[8px] w-[88vw] border-[1.8px] tracking-[.2vw] border-[#333] rounded-md py-[2.4vh] uppercase font-[400] text-[2vh] px-[4vw] outline-none focus:border-black text-[#333]"
          >
            Discover Other Floors
          </button>
          <span class="text-left text-[#777] text-[1.8vh]"
            ><ul class="font-[500]">
              Note:
            </ul>
            Your current selection is saved. You can Browse other flooring
            options to find the perfect match.</span
          >
        </div>
        <div class="h-max w-full border-t-[2px] pt-[4vh] border-[#999]">
          <button
            @click="handleClick"
            class="bg-[#fff9] text-center revCard-HEADING active:scale-[.93] backdrop-blur-[8px] w-[88vw] border-[3.2px] tracking-[.2vw] border-[#999] rounded-md py-[2.4vh] uppercase font-[400] text-[2.4vh] px-[2vw] outline-none focus:border-black"
          >
            CONFIRM
          </button>
        </div>
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

const { flooring, link } = defineProps(["flooring", "link"]);

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
      router.push(`/flooring/${link}/success`);
      console.log("SUCCESS");
      console.log("Log data:", logData);
    })
    .catch((err) => {
      restrictedAccess.value = true;
      handleTempAnimation("errOverlayMOB");
      console.error("Unexpected errors:", err.message);
    });
};

const updateIsOrderConfirmedAndRedirect = async (isOrderConfirmed) => {
  try {
    // Ensure the ID is set
    if (!userStore.userData.id) {
      throw new Error("Log ID is required");
    }

    // Create the update data object with the isOrderConfirmed field
    const updateData = {
      isOrderConfirmed,
    };

    // Call the API endpoint to update the log
    const { data, error } = await useFetch("/api/update-log", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        id: userStore.userData.id,
        ...updateData,
      }),
    });

    if (error.value) {
      throw new Error(error.value.message);
    }

    // Handle successful update
    console.log("Log updated successfully:", data.value);
    router.push("/flooring");
  } catch (err) {
    // Handle errors
    console.error("Error updating log:", err.message);
  }
};
</script>

<style lang="scss" scoped></style>
