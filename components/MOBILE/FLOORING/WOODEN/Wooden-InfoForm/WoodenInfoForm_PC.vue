<template>
  <!--INPUT ERROR OVERLAY -->
  <transition @beforeEnter="handleDetailsDOMEntry('woodenInfoPC')">
    <div
      v-show="
        userStore.preference.flooring === 'Wooden' &&
        userStore.preference.spec_1 !== '' &&
        userStore.preference.spec_2 !== '' &&
        userStore.preference.spec_3 !== '' &&
        userStore.preference.color.length > 0 &&
        userStore.preference.budget !== '' &&
        userStore.preference.orderMethod !== ''
      "
      class="h-max w-screen flex justify-center"
    >
      <div
        class="iptErrMsg_Wooden opacity-0 invisible h-max py-[2.4vh] px-[2vw] left-[50%] translate-x-[-50%] top-[2.4vh] rounded-md w-[72vw] flex justify-center items-center fixed gap-[2vw] bottom-0 bg-[#000] bg-opacity-[.7] backdrop-blur-[8px] z-[999]"
      >
        <span
          class="text-detailsContainer_heading_PC text-white font-[500] tracking-[.2vw] uppercase text-center text-detailsContainer_heading_PC"
          >Please fill out all fields correctly before proceeding</span
        >
      </div>
      <div class="h-max w-screen flex justify-center">
        <div
          class="h-max w-[88%] flex flex-col gap-[4vh] bg-[#f1f1f1] py-[6vh] rounded-md items-center"
        >
          <div
            class="h-max w-[44%] flex flex-col gap-[5.8vh] overflow-hidden px-[2.8vw] pt-[4.2vh] rounded-md shadow-xl relative bg-gradient-to-b from-[#ebf4f5] to-[#b5c6e0]"
          >
            <div class="h-max w-max flex flex-col gap-[.4vh] items-start">
              <span
                class="woodenInfoPC-HEADING opacity-0 translate-y-[20%] w-max text-[2.4vw] font-[400] text-[#444]"
                >Your Contact Information</span
              >
              <span
                class="woodenInfoPC-HEADING opacity-0 translate-y-[20%] text-[#999] text-[1.4vw] font-[450]"
                >Enter your contact information</span
              >
            </div>

            <div
              class="invisible opacity-0 woodenInfoPC-CONTAINER h-full w-full absolute top-0 left-0 flex items-center justify-center bg-[#fff1] backdrop-blur-[8px] z-[1]"
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
                class="border-[2px] woodenInfoPC-CONTAINER opacity-0 translate-y-[20%] rounded-md px-[1.2vw] border-[#555] bg-[#fff9] py-[2.4vh] outline-none focus:border-black"
                placeholder="Name"
                v-model="nameIpt"
              />
            </div>
            <div class="h-max w-full flex flex-col">
              <input
                :required="mailIpt.length > 8"
                type="email"
                class="border-[2px] woodenInfoPC-CONTAINER opacity-0 translate-y-[20%] rounded-md px-[1.2vw] border-[#555] bg-[#fff9] py-[2.4vh] outline-none focus:border-black"
                placeholder="Mail"
                v-model="mailIpt"
              />
            </div>
            <div class="h-max w-full flex flex-col gap-[6.2vh] pb-[6.2vh]">
              <div class="h-max w-full flex">
                <select
                  v-model="userStore.preference.country"
                  class="w-max rounded-l-md border-[2px] border-r-[0px] border-[#555] bg-[#fff9] py-[1.4vh] px-[.8vw] text-[2vh] outline-none woodenInfoPC-CONTAINER opacity-0"
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
                  class="[appearance:textfield] w-full [&::-webkit-outer-spin-button]:appearance-none [&::-webkit-inner-spin-button]:appearance-none border-[2px] woodenInfoPC-CONTAINER opacity-0 translate-y-[20%] rounded-r-md px-[1.2vw] border-[#555] border-l-[#777] bg-[#fff9] py-[2.4vh] text-[2vh] outline-none focus:border-black"
                  placeholder="Phone"
                  v-model="phoneIpt"
                />
              </div>
              <button
                @click="handleInfoProceedings"
                class="bg-white woodenInfoPC-CONTAINER active:scale-[.93] opacity-0 w-full border-[2.4px] tracking-[.2vw] border-[#333] rounded-md py-[2.4vh] uppercase font-[500] text-[1.6vw] px-[2vw] outline-none focus:border-black"
              >
                SUBMIT
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  </transition>
</template>

<script setup>
import useUserStore from "../../../stores/user";

const userStore = useUserStore();

const mailIpt = ref("");
const nameIpt = ref("");
const phoneIpt = ref("");

function handleInfoProceedings() {
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

  //   handleTempAnimation("loadingPt1_WoodenMOB");
  userStore.userData.name = nameIpt.value;
  userStore.userData.email = mailIpt.value;
  userStore.userData.phone = phoneWithCode;
  scrollToBottom();
}
</script>
