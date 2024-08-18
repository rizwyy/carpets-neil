<template>
  <div class="h-full w-screen overflow-hidden font-outfit">
    <!-- ERROR OVERLAY -->
    <div
      class="errOverlayMOB opacity-0 invisible h-max py-[2.4vh] left-[50%] translate-x-[-50%] top-[2.4vh] rounded-md w-[72vw] flex justify-center items-center fixed gap-[2vw] bottom-0 bg-[#000] bg-opacity-[.3] backdrop-blur-[8px] z-[999]"
    >
      <span class="text-white font-[500] tracking-[.1vw]"
        >SOMETHING WENT WRONG</span
      ><svg
        xmlns="http://www.w3.org/2000/svg"
        class="h-[3.4vh]"
        viewBox="0 0 24 24"
      >
        <path fill="#fff" d="M11 7h2v7h-2zm0 8h2v2h-2z" />
        <path
          fill="#f1f1f1"
          d="m21.707 7.293l-5-5A.996.996 0 0 0 16 2H8a.996.996 0 0 0-.707.293l-5 5A.996.996 0 0 0 2 8v8c0 .266.105.52.293.707l5 5A.996.996 0 0 0 8 22h8c.266 0 .52-.105.707-.293l5-5A.996.996 0 0 0 22 16V8a.996.996 0 0 0-.293-.707M20 15.586L15.586 20H8.414L4 15.586V8.414L8.414 4h7.172L20 8.414z"
        />
      </svg>
    </div>
    <!--INPUT ERROR OVERLAY -->
    <div
      class="iptErrMsg_Carpets opacity-0 invisible h-max py-[2.4vh] px-[2vw] left-[50%] translate-x-[-50%] top-[2.4vh] rounded-md w-[72vw] flex justify-center items-center fixed gap-[2vw] bottom-0 bg-[#000] bg-opacity-[.3] backdrop-blur-[8px] z-[999]"
    >
      <span class="text-white font-[500] tracking-[.2vw] uppercase text-center"
        >Please fill out all fields correctly before proceeding</span
      >
    </div>
    <!-- LOADING OVERLAY -->
    <div
      class="loadingOverlay opacity-0 invisible h-screen w-screen absolute top-0 left-0 bg-[#fff1] backdrop-blur-[2px] z-[99] flex items-center justify-center"
    >
      <svg
        xmlns="http://www.w3.org/2000/svg"
        class="h-[8vh]"
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
    <!-- NAVBAR -->
    <div
      class="h-max w-full fixed top-0 left-0 z-[9] py-[2.4vh] flex items-center bg-[#fff3] shadow-sm backdrop-blur-[14px] justify-between gap-[4vw] px-[4vw]"
    >
      <a
        class="flex text-[1.8vh] gap-[2vw] items-center tracking-[.1vw] text-[#333]"
        :href="!isFormFilled ? '/flooring/carpets/details' : ''"
        ><svg
          xmlns="http://www.w3.org/2000/svg"
          class="h-[5vh]"
          viewBox="0 0 24 24"
        >
          <path
            fill="#333"
            d="M10.589 12.5H15q.213 0 .356-.144t.144-.357t-.144-.356T15 11.5h-4.411l1.765-1.766q.14-.133.14-.34t-.14-.348t-.347-.14q-.208 0-.341.14l-2.389 2.389q-.242.242-.242.565t.242.566l2.389 2.388q.14.14.344.13q.204-.009.344-.15t.14-.347t-.14-.34zm1.414 8.5q-1.866 0-3.51-.708q-1.643-.709-2.859-1.924t-1.925-2.856T3 12.003t.709-3.51Q4.417 6.85 5.63 5.634t2.857-1.925T11.997 3t3.51.709q1.643.708 2.859 1.922t1.925 2.857t.709 3.509t-.708 3.51t-1.924 2.859t-2.856 1.925t-3.509.709M12 20q3.35 0 5.675-2.325T20 12t-2.325-5.675T12 4T6.325 6.325T4 12t2.325 5.675T12 20m0-8"
          /></svg
        >{{ !isFormFilled ? "DETAILS" : "STEP 1" }}</a
      >
      <span v-show="!isFormFilled" class="text-[1.8vh] text-[#555]"
        >STEP 1 OF 2</span
      >
      <span v-show="isFormFilled" class="text-[1.8vh] text-[#555]"
        >STEP 2 OF 2</span
      >
    </div>
    <!-- MAIN -->
    <div
      class="h-max w-full flex overflow-hidden flex-col px-[3.2vw] gap-[8vh] pt-[14.2vh] items-center"
    >
      <div
        v-show="!isFormFilled"
        class="h-[60vh] w-full flex flex-col gap-[5.8vh] overflow-hidden px-[3.8vw] pt-[3.2vh] rounded-md shadow-xl relative"
      >
        <NuxtImg
          @load="handleImageLoad('checkoutBg', 'checkout')"
          class="checkoutBg_Img absolute top-0 left-0 h-full w-full object-cover z-[-9]"
          src="/assets/layered-peaks.png"
        />
        <div
          v-show="isCheckoutImgLoaded"
          class="h-full w-full absolute top-0 left-0 flex items-center justify-center bg-[#fff1] backdrop-blur-[8px] z-[1]"
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
        <div class="h-max w-max flex flex-col gap-[.4vh] items-start">
          <span
            class="checkout_Text opacity-0 translate-y-[20%] w-max text-[3.8vh] tracking-[-.2vw] font-[400] text-white"
            >Your Contact Information</span
          >
          <span
            class="checkout_Text opacity-0 translate-y-[20%] text-[#e1e9e5] text-[2.2vh] font-[450]"
            >Enter your contact information</span
          >
        </div>
        <div class="h-max w-full flex flex-col gap-[vh]">
          <input
            type="text"
            class="border-[2px] checkout_Text checkout_Item opacity-0 translate-y-[20%] rounded-md px-[2.4vw] border-[#555] bg-[#fff9] py-[1.8vh] outline-none focus:border-black"
            placeholder="Name"
            v-model="nameIpt"
          />
        </div>
        <div class="h-max w-full flex flex-col">
          <input
            :required="mailIpt.length > 8"
            type="email"
            class="border-[2px] checkout_Text checkout_Item opacity-0 translate-y-[20%] rounded-md px-[2.4vw] border-[#555] bg-[#fff9] py-[1.8vh] outline-none focus:border-black"
            placeholder="Mail"
            v-model="mailIpt"
          />
        </div>
        <div class="h-max w-full flex flex-col">
          <input
            :required="phoneIpt.length > 8"
            type="number"
            class="[appearance:textfield] [&::-webkit-outer-spin-button]:appearance-none [&::-webkit-inner-spin-button]:appearance-none border-[2px] checkout_Text checkout_Item opacity-0 translate-y-[20%] rounded-md px-[2.4vw] border-[#555] bg-[#fff9] py-[1.8vh] outline-none focus:border-black"
            placeholder="Phone"
            v-model="phoneIpt"
          />
        </div>
      </div>
      <transition @beforeEnter="handlePt2Entry">
        <div
          v-show="isFormFilled"
          class="h-[62vh] w-full flex flex-col gap-[4.2vh] px-[3.8vw] pt-[3.2vh] rounded-md overflow-hidden shadow-xl relative"
        >
          <NuxtImg
            class="checkoutPt2BG_Img scale-[2] absolute top-0 left-0 h-full w-full object-cover z-[-9]"
            src="/assets/layered-peaks.png"
          />
          <!-- <div
            class="checkoutPt2_Overlay h-full w-full absolute top-0 left-0 bg-[#fff2] backdrop-blur-[8px] blur-[1px] z-[-1]"
          ></div> -->
          <div class="h-max w-full flex justify-between pb-[3.2vh]">
            <span
              class="checkoutPt2_Text translate-y-[20%] opacity-0 w-max font-[400] text-[2.4vh] text-white"
              >PREFERANCES</span
            >
            <a
              href="/flooring/carpets/details"
              class="checkoutPt2_Text px-[2.4vw] translate-y-[20%] opacity-0 text-[2vh] text-white font-[500] w-max tracking-[.1vh] flex gap-[.4vw] items-center"
              >EDIT<svg
                xmlns="http://www.w3.org/2000/svg"
                class="h-[2.4vh]"
                viewBox="0 0 24 24"
              >
                <path
                  fill="currentColor"
                  d="M5 19h1.425L16.2 9.225L14.775 7.8L5 17.575zm-1 2q-.425 0-.712-.288T3 20v-2.425q0-.4.15-.763t.425-.637L16.2 3.575q.3-.275.663-.425t.762-.15t.775.15t.65.45L20.425 5q.3.275.437.65T21 6.4q0 .4-.138.763t-.437.662l-12.6 12.6q-.275.275-.638.425t-.762.15zM19 6.4L17.6 5zm-3.525 2.125l-.7-.725L16.2 9.225z"
                /></svg
            ></a>
          </div>
          <span>
            <span
              class="mt-[1vh] w-full border-[2px] checkoutPt2_Text translate-y-[20%] opacity-0 rounded-full px-[4vw] py-[1vh] border-[#666] bg-[#fff7]"
              ><span>Category/Application:&nbsp;</span
              >{{ userPreference.spec_1 }}</span
            >
          </span>
          <span>
            <span
              class="mt-[1vh] w-full border-[2px] checkoutPt2_Text translate-y-[20%] opacity-0 rounded-full px-[4vw] py-[1vh] border-[#666] bg-[#fff7]"
              ><span>Activity/Type:&nbsp;</span
              >{{ userPreference.spec_2 }}</span
            >
          </span>
          <span>
            <span
              class="mt-[1vh] w-full border-[2px] checkoutPt2_Text translate-y-[20%] opacity-0 rounded-full px-[4vw] py-[1vh] border-[#666] bg-[#fff7]"
              ><span>Material/Style:&nbsp;</span
              >{{ userPreference.spec_3 }}</span
            >
          </span>
          <div class="h-max w-full flex justify-between items-center">
            <span>
              <span
                class="checkoutPt2_Text translate-y-[20%] opacity-0 w-full border-[2px] rounded-full px-[4vw] py-[1vh] border-[#666] bg-[#fff7]"
                ><span>Finish:&nbsp;</span>{{ userPreference.spec_4 }}</span
              >
            </span>
            <span
              class="checkoutPt2_Text translate-y-[20%] opacity-0 w-max border-[2px] rounded-full px-[4vw] py-[1vh] border-[#666] bg-[#fff7]"
              >Budget: {{ userPreference.budget }}</span
            >
          </div>
          <div
            class="checkoutPt2_Text translate-y-[20%] opacity-0 h-max w-max flex flex-col gap-[1.8vh]"
          >
            <span class="font-[500]">Colors Opted:</span>
            <span
              v-show="userPreference.color.length > 0"
              class="w-max border-[2px] rounded-md px-[4vw] text-[#999] font-[400] text-center py-[.6vh] border-[#444]"
              v-for="(color, index) in userPreference.color"
              :key="index"
              :style="{ backgroundColor: getColorHex(color) }"
              >{{ color }}
            </span>
          </div>
        </div>
      </transition>
    </div>

    <!-- BUTTON -->
    <button
      v-show="!isFormFilled"
      @click="handleCheckoutPart1"
      class="bg-white checkout_Text opacity-0 translate-y-[30%] fixed bottom-[2vh] left-[50%] w-[88vw] translate-x-[-50%] border-[2.4px] tracking-[.2vw] border-[#333] rounded-md py-[2.4vh] uppercase font-[400] text-[2.4vh] px-[2vw] outline-none focus:border-black"
    >
      PROCEED
    </button>
    <button
      v-show="isFormFilled"
      @click="handleClick"
      class="bg-[#fff3] checkoutPt2_Text opacity-0 translate-y-[30%] backdrop-blur-[8px] fixed bottom-[2vh] left-[50%] w-[88vw] translate-x-[-50%] border-[3.2px] tracking-[.2vw] border-[#333] rounded-md py-[2.4vh] uppercase font-[400] text-[2.4vh] px-[2vw] outline-none focus:border-black"
    >
      CONFIRM
    </button>
  </div>
</template>

<script setup>
import useUserStore from "../../../stores/user";
import { useRouter } from "vue-router";

const userStore = useUserStore();
const isFormFilled = ref(false);
const mailIpt = ref("");
const nameIpt = ref("");
const phoneIpt = ref("");
const userPreference = useCookie("userPreference");
const token = ref("");
const isCheckoutImgLoaded = ref(false);
const router = useRouter();

const show_FillInputFields_MSG = ref(false);
function validateInputs(emailIpt, phoneIpt, nameIpt) {
  const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

  const phonePattern = /^\+?\d{10,15}$/;

  const isEmailValid = emailPattern.test(emailIpt.trim());
  if (!isEmailValid) {
    console.log("Invalid email format");
  }

  const isPhoneValid = phonePattern.test(phoneIpt.trim());
  if (!isPhoneValid) {
    console.log("Invalid phone number format");
  }

  const isNameValid = nameIpt.trim().length >= 2;
  if (!isNameValid) {
    console.log("Name must be at least 2 characters long");
  }

  return isEmailValid && isPhoneValid && isNameValid;
}

function handleCheckoutPart1() {
  // VALIDATE INPUT FIELDS
  const isValid = validateInputs(mailIpt.value, phoneIpt.value, nameIpt.value);
  if (!isValid) {
    handleTempAnimation("iptErrMsg_Carpets");
    show_FillInputFields_MSG.value = true;
    return;
  }
  checkoutPt1Animation();
  isCheckoutImgLoaded.value = true;
  setTimeout(() => {
    isFormFilled.value = true;
  }, 1000);
}

function handlePt2Entry() {
  handleImageLoad("", "checkoutPt2");
  checkoutPt2Animation();
}

async function fetchToken() {
  try {
    const { data, error } = await useFetch("/api/generate-token");

    if (error.value) {
      console.error("Error fetching token:", error.value);
    } else {
      token.value = data.value.token;
    }
  } catch (err) {
    console.error("Unexpected error:", err);
  }
}

const handleClick = () => {
  handleLoadingEntry();
  const userData = {
    name: nameIpt.value,
    phone: phoneIpt.value,
    email: mailIpt.value,
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
      isFormFilled.value = true;
      mailIpt.value = "";
      nameIpt.value = "";
      phoneIpt.value = "";
      scrollToBottom();
      handleLoadingExit();
      router.push("/flooring/carpets/success");
      console.log("SUCCESS");
      console.log("Log data:", logData);
    })
    .catch((err) => {
      handleLoadingExit();
      handleTempAnimation("errOverlayMOB");
      console.error("Unexpected errors:", err.message);
    });
};

onMounted(() => {});
</script>

<style scoped>
.font-outfit {
  font-family: "Outfit", sans-serif;
  font-optical-sizing: auto;
  font-weight: 300;
  font-style: normal;
}
::placeholder {
  color: #888;
  font-weight: 400;
}
</style>
