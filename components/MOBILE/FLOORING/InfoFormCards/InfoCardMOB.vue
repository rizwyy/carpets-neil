<template>
  <!--INPUT ERROR OVERLAY -->
  <transition @beforeEnter="handleDetailsDOMEntry('InfoMOB')">
    <div
      v-show="
        userStore.preference.flooring === `${flooring}` &&
        userStore.preference.spec_1 !== '' &&
        userStore.preference.spec_2 !== '' &&
        userStore.preference.color.length > 0 &&
        userStore.preference.budget !== '' &&
        userStore.preference.orderMethod !== ''
      "
      class="h-max w-screen flex justify-center"
    >
      <div
        class="iptErrMsg opacity-0 invisible h-max py-[2.4vh] px-[2vw] left-[50%] translate-x-[-50%] top-[2.4vh] rounded-md w-[72vw] flex justify-center items-center fixed gap-[2vw] bottom-0 bg-[#000] bg-opacity-[.7] backdrop-blur-[8px] z-[999]"
      >
        <span
          class="text-white font-[500] tracking-[.2vw] uppercase text-center"
          >Please fill out all fields correctly before proceeding</span
        >
      </div>
      <div class="h-max w-screen pt-[2vh] pb-[6vh] flex justify-center">
        <div
          class="h-max w-[94%] flex flex-col gap-[5.8vh] overflow-hidden px-[3.8vw] pt-[3.2vh] rounded-md shadow-xl relative bg-gradient-to-br from-detailsFrom to-detailsTo"
        >
          <div class="h-max w-max flex flex-col gap-[.4vh] items-start">
            <span
              class="InfoMOB-HEADING opacity-0 translate-y-[20%] w-max text-[3.8vh] tracking-[-.2vw] font-[400] text-[#444]"
              >Your Contact Information</span
            >
            <span
              class="InfoMOB-HEADING opacity-0 translate-y-[20%] text-[#999] text-[2.2vh] font-[450]"
              >Enter your contact information</span
            >
          </div>

          <div
            class="invisible opacity-0 h-full w-full absolute top-0 left-0 flex items-center justify-center bg-[#fff1] backdrop-blur-[8px] z-[1]"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              class="h-[6vh]"
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
          </div>
          <div
            class="checkout_Overlay h-full w-full absolute top-0 left-0 bg-[#fff4] backdrop-blur-[.2px] z-[-1]"
          ></div>

          <div class="h-max w-full flex flex-col gap-[vh]">
            <input
              type="text"
              class="border-[2px] InfoMOB-CONTAINER opacity-0 translate-y-[20%] rounded-md px-[2.4vw] border-[#555] bg-[#fff9] py-[1.8vh] outline-none focus:border-black"
              placeholder="Name"
              v-model="nameIpt"
            />
          </div>
          <div class="h-max w-full flex flex-col">
            <input
              :required="mailIpt.length > 8"
              type="email"
              class="border-[2px] InfoMOB-CONTAINER opacity-0 translate-y-[20%] rounded-md px-[2.4vw] border-[#555] bg-[#fff9] py-[1.8vh] outline-none focus:border-black"
              placeholder="Mail"
              v-model="mailIpt"
            />
          </div>
          <div class="h-max w-full flex flex-col gap-[6.2vh] pb-[6.2vh]">
            <div class="h-max w-full flex">
              <select
                v-model="userStore.preference.country"
                class="w-max rounded-l-md border-[2px] border-r-[0px] border-[#555] bg-[#fff9] py-[1.4vh] px-[.8vw] text-[2vh] outline-none InfoMOB-CONTAINER opacity-0"
              >
                <option value="Bahrain">+973</option>
                <option value="UAE">+971</option>
                <option value="Saudi Arabia">+966</option>
                <option value="Kuwait">+965</option>
                <option value="Qatar">+974</option>
              </select>
              <input
                :required="phoneIpt.length > 8"
                type="number"
                class="[appearance:textfield] text-[16.8px] w-full [&::-webkit-outer-spin-button]:appearance-none [&::-webkit-inner-spin-button]:appearance-none border-[2px] InfoMOB-CONTAINER opacity-0 translate-y-[20%] rounded-r-md rounded-l-[0px] px-[2.4vw] border-[#555] border-l-[#777] bg-[#fff9] py-[1.8vh] text-[2vh] outline-none focus:border-black"
                placeholder="Phone"
                v-model="phoneIpt"
              />
            </div>
            <button
              @click="handleInfoProceedings"
              class="bg-white InfoMOB-CONTAINER active:scale-[.93] opacity-0 w-[88vw] border-[2.4px] tracking-[.2vw] border-[#333] rounded-md py-[2.4vh] uppercase font-[400] text-[2.4vh] px-[2vw] outline-none focus:border-black flex justify-center items-center"
            >
              <span v-show="!isLoading">PROCEED</span>
              <svg
                v-show="isLoading"
                xmlns="http://www.w3.org/2000/svg"
                class="h-[5.2vh]"
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
import useUserStore from "../../../stores/user";
import { ref } from "vue";
const userPreference = useCookie("userPreference");
const { flooring } = defineProps(["flooring"]);

const mailIpt = ref("");
const nameIpt = ref("");
const phoneIpt = ref("");

const isLoading = ref(false);
const userStore = useUserStore();

function setUserPreferenceCookie() {
  userPreference.value = userStore.preference;
  console.log("COOKIE SET::", toRaw(userPreference.value));
}
function handleInfoProceedings() {
  scrollBy(-800);

  const phoneWithCode = addCountryCode(
    phoneIpt.value,
    userStore.preference.country
  );
  const isValid = validateInputs(
    mailIpt.value,
    `${phoneWithCode}`,
    nameIpt.value
  );
  if (!isValid) {
    handleTempAnimation("iptErrMsg_Wooden");
    return;
  }

  userStore.userData.name = nameIpt.value;
  userStore.userData.email = mailIpt.value;
  userStore.userData.phone = phoneWithCode;
  setUserPreferenceCookie();
}
</script>
