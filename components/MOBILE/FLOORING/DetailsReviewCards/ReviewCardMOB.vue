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
      class="min-[990px]:hidden h-max w-screen flex justify-center pt-[6vh] pb-[18vh]"
    >
      <div
        class="h-max w-[94%] flex flex-col gap-[4.2vh] pt-[3.2vh] rounded-md overflow-hidden shadow-xl relative pb-[4vh] bg-gradient-to-br from-detailsFrom to-detailsTo"
      >
        <div
          class="h-full w-full fixed top-0 left-0 flex items-center justify-center opacity-0 loadingOverlay invisible bg-[#fff1] backdrop-blur-[8px] z-[999]"
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
        <div class="h-max w-full flex flex-col gap-[2vh]">
          <div
            class="h-max w-full flex flex-col items-start gap-[1.2vh] px-[3.8vw]"
          >
            <span
              class="revCard-HEADING translate-y-[20%] opacity-0 w-full text-start tracking-[-.1vw] font-[400] text-[3.8vh] text-[#333]"
            >
              {{
                userStore.userData.name
                  ? userStore.userData.name.split(" ")[0] + "'s Preferences"
                  : "Your Preferences"
              }}
            </span>
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

          <!--  -->
          <div class="h-max w-full px-[1vw]">
            <PreferenceCardMOB />
          </div>
          <!--  -->
          <!--  -->
          <span
            v-show="userStore.flooringHistory.length > 0"
            class="h-max w-full pt-[3.2vh] px-[3.2vw] text-[2vh] text-[#555]"
            >Previously Saved Flooring Choices:</span
          >
          <div
            v-if="userStore.flooringHistory.length > 0"
            class="h-max w-full px-[1vw] pt-[0vh]"
          >
            <ReusablePreferenceCardMOB
              v-for="(item, index) in userStore.flooringHistory"
              :key="index"
              :item="item"
            />
          </div>

          <!--  -->
          <div
            class="h-max w-full border-[#999] flex flex-col gap-[4vh] mb-[4vh] px-[2vw]"
          >
            <span
              @click="getHistory"
              class="text-[2.4vh] tracking-[-.05vw] w-full text-detailsContainer_heading_MOB border-t-[1px] px-[2vw] pt-[4vh]"
              >Add On's</span
            >
            <div
              class="h-max w-full flex flex-col gap-[1vh] text-[#777] px-[2vw]"
            >
              <span>Provide Additional Details</span>
              <textarea
                type=""
                placeholder="Extra Info/Requirements Goes Here"
                class="border-[2px] text-detailsContainer_inputText_MOB rounded-md px-[2.4vw] border-[#999] bg-[#fff9] text-[#222] py-[1.8vh] outline-none focus:border-black"
              />
            </div>
            <div
              class="h-max w-full flex flex-col gap-[1vh] text-[#777] px-[2vw]"
            >
              <UploadContainerMOB />
            </div>
          </div>
        </div>

        <div
          class="h-max w-full flex flex-col justify-center items-center gap-[4vh] px-[2vw]"
        >
          <span
            class="text-left text-[#777] text-[1.8vh] border-t-[1px] pt-[4vh] border-[#999] px-[2vw]"
            ><ul class="font-[500]">
              Note:
            </ul>
            By clicking the button below, your current selection will be saved
            for your
            {{
              userStore.preference.orderMethod === "whatsapp"
                ? "phone number"
                : "email"
            }}.<br />
            So you can add more options, explore other flooring
            selections.</span
          >
          <button
            @click="() => HandleAddMore()"
            class="bg-[#DCE9FE] text-center revCard-HEADING active:scale-[.93] flex items-center justify-center backdrop-blur-[8px] w-[88vw] border-[1.8px] tracking-[.2vw] border-[#333] rounded-md py-[2.4vh] uppercase font-[400] text-[2vh] px-[4vw] outline-none focus:border-black text-[#333]"
          >
            <span v-show="!isLoading">Discover Other Floors</span>
            <svg
              v-show="isLoading"
              xmlns="http://www.w3.org/2000/svg"
              class="h-[3vh]"
              viewBox="0 0 24 24"
            >
              <circle cx="18" cy="12" r="0" fill="#222">
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
              <circle cx="12" cy="12" r="0" fill="#222">
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
              <circle cx="6" cy="12" r="0" fill="#222">
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
          </button>
        </div>
        <div class="h-max w-full flex justify-center">
          <div class="h-max w-max border-t-[1px] pt-[4vh] border-[#999]">
            <button
              @click="HandleOrderConfirmation"
              class="bg-[#fff9] text-center revCard-HEADING active:scale-[.93] backdrop-blur-[8px] w-[88vw] border-[3.2px] tracking-[.2vw] border-[#999] rounded-md py-[2.4vh] uppercase font-[400] text-[2.4vh] px-[2vw] outline-none focus:border-black flex justify-center items-center"
            >
              <span v-show="!isLoading">confirm</span>
              <svg
                v-show="isLoading"
                xmlns="http://www.w3.org/2000/svg"
                class="h-[3vh]"
                viewBox="0 0 24 24"
              >
                <circle cx="18" cy="12" r="0" fill="#222">
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
                <circle cx="12" cy="12" r="0" fill="#222">
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
                <circle cx="6" cy="12" r="0" fill="#222">
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
            </button>
          </div>
        </div>
      </div>
    </div>
  </transition>
</template>

<script setup>
import useUserStore from "~/stores/user";
const userStore = useUserStore();

import { useRouter } from "vue-router";
import PreferenceCardMOB from "./PreferenceCardMOB.vue";
import UploadContainerMOB from "./UploadContainerMOB.vue";
import ReusablePreferenceCardMOB from "./ReusablePreferenceCardMOB.vue";
const router = useRouter();
const restrictedAccess = useCookie("restrictedAccess");
const userPreference = useCookie("userPreference");
const isAccessRestricted = ref(true);
const isLoading = ref(false);
const historyFound = ref(true);

const { flooring, link } = defineProps(["flooring", "link"]);

async function fetchPreferencesByMobile(mobile) {
  try {
    // Ensure the mobile number is provided
    if (!mobile) {
      throw new Error("Mobile number is required");
    }

    // Call the API endpoint to get the logs associated with the mobile number
    const { data, error } = await useFetch(`/api/get-log?mobile=${mobile}`, {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
      },
    });

    if (error.value) {
      throw new Error(error.value.message);
    }

    // Handle successful data retrieval
    console.log("Preferences fetched successfully:", data.value);
    userStore.flooringHistory = toRaw(data.value);
    return data.value; // Return the fetched data
  } catch (err) {
    // Handle errors
    console.error("Error fetching preferences:", err.message);
    historyFound.value = false;
    return null;
  }
}
async function getHistory() {
  const preferences = await fetchPreferencesByMobile(userStore.userData.phone);
  userStore.flooringHistory = toRaw(preferences.data);
  console.log("CHECK::", toRaw(preferences.data));
}

// ACTIONS
const HandleOrderConfirmation = () => {
  isLoading.value = true;
  handleLoadingEntry();

  // Prepare the user data object with isOrderConfirmed set to true
  const userData = {
    name: userStore.userData.name,
    phone: userStore.userData.phone,
    email: userStore.userData.email,
    preference: userStore.preference,
    isOrderConfirmed: true,
  };

  // Step 1: Set the cookie and validate
  useFetch("/api/set-cookie")
    .then(({ data, error }) => {
      if (error?.value) {
        throw new Error("Error setting cookie: " + error.value);
      }
      console.log("SET COOKIE DONE");

      // Step 2: Conditionally update logs if flooringHistory is not empty
      if (userStore.flooringHistory.length > 0) {
        return fetch("/api/confirm-logs", {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({ phone: userStore.userData.phone }),
        }).then((response) => {
          if (!response.ok) {
            throw new Error("Error updating logs");
          }
          console.log("LOGS UPDATED TO CONFIRMED");
          return response.json(); // Proceed to insert logs if successful
        });
      } else {
        console.log("No flooring history to confirm");
        return Promise.resolve(); // Resolve to continue without updating logs
      }
    })
    .then(() => {
      // Step 3: Insert the new log with isOrderConfirmed set to true
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
      // Clear user data after successful insertion
      userStore.userData.email = "";
      userStore.userData.name = "";
      userStore.userData.phone = "";
      scrollToBottom();
      handleLoadingExit();
      userPreference.value = null;
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

const insertLog = () => {
  // Retrieve values from userStore.userData
  const name = userStore.userData.name;
  const orderMethod = userStore.preference.orderMethod;
  const contact =
    orderMethod === "whatsapp"
      ? userStore.userData.phone
      : userStore.userData.email;

  const userData = {
    name,
    phone: orderMethod === "whatsapp" ? contact : "",
    email: orderMethod === "email" ? contact : "",
    preference: userStore.preference,
    isOrderConfirmed: userStore.preference.isOrderConfirmed || false,
  };

  console.log("Sending userData:", userData);

  if (!name || !contact) {
    console.error("Name and contact details are required.");
    return;
  }

  // Call API route to insert logs
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
      console.log("SUCCESS");
      console.log("Log data:", logData);
      userStore.userData.id = logData.id;

      // Redirect to /flooring after successful log insertion
      router.push("/flooring");
    })
    .catch((err) => {
      console.error("Unexpected errors:", err.message);
    });
};

const HandleAddMore = () => {
  // Set isOrderConfirmed to false
  userStore.preference.isOrderConfirmed = false;

  // Call the insertLog function
  insertLog();
};

//
watch(
  () => userStore.userData.name,
  (newValue) => {
    if (newValue !== "") {
      setTimeout(async () => {
        await getHistory();
      }, 2000);
    }
  }
);
</script>

<style lang="scss" scoped></style>
