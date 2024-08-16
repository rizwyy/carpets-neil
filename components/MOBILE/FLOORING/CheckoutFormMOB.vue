<template>
  <div class="h-screen relative w-screen overflow-hidden font-outfit">
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
      class="h-max w-full fixed top-0 left-0 z-[9] pt-[4vh] pb-[3.2vh] flex items-center bg-[#fff] shadow-sm backdrop-blur-[14px] justify-between gap-[4vw] px-[8vw]"
    >
      <a :href="!isFormFilled ? '/flooring/gym/details' : ''"
        ><svg
          class="h-[3.2vh]"
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 24 24"
        >
          <path
            fill="#333"
            d="m3.55 12l7.35 7.35q.375.375.363.875t-.388.875t-.875.375t-.875-.375l-7.7-7.675q-.3-.3-.45-.675T.825 12t.15-.75t.45-.675l7.7-7.7q.375-.375.888-.363t.887.388t.375.875t-.375.875z"
          /></svg
      ></a>
      <span v-show="!isFormFilled" class="text-[1.8vh] text-[#555]"
        >STEP 1 OF 2</span
      >
      <span v-show="isFormFilled" class="text-[1.8vh] text-[#555]"
        >STEP 2 OF 2</span
      >
    </div>
    <!-- MAIN -->
    <div
      class="h-max w-full flex overflow-hidden flex-col px-[3.2vw] gap-[8vh] pt-[11.2vh] items-center"
    >
      <div
        v-show="!isFormFilled"
        class="h-[58vh] w-full flex flex-col gap-[8vh] px-[3.8vw] pt-[3.2vh] bg-gradient-to-tl from-[#F0F8FF] to-[#B9D9EB] rounded-md shadow-xl relative"
      >
        <span class="w-max text-[3.4vh] font-[400]">Information</span>
        <div class="h-max w-full flex flex-col px-[2vw] gap-[vh]">
          <input
            type="text"
            class="bg-inherit border-b-[2px] border-[#999] rounded-none py-[.8vh] outline-none focus:border-black"
            placeholder="Name"
            v-model="nameIpt"
          />
        </div>
        <div class="h-max w-full flex flex-col">
          <input
            :required="mailIpt.length > 8"
            type="email"
            class="bg-inherit border-b-[2px] border-[#999] rounded-none py-[.8vh] px-[2vw] outline-none focus:border-black"
            placeholder="Mail"
            v-model="mailIpt"
          />
        </div>
        <div class="h-max w-full flex flex-col">
          <input
            :required="phoneIpt.length > 8"
            type="number"
            class="bg-inherit border-b-[2px] border-[#999] rounded-none py-[.8vh] px-[2vw] outline-none focus:border-black"
            placeholder="Phone"
            v-model="phoneIpt"
          />
        </div>
      </div>
      <div
        v-show="isFormFilled"
        class="h-[62vh] w-full flex flex-col gap-[4.8vh] px-[3.8vw] pt-[3.2vh] rounded-md bg-gradient-to-tl from-[#F0F8FF] to-[#B9D9EB] shadow-xl"
      >
        <div class="h-max w-full flex justify-between pb-[3.2vh]">
          <span class="border-b-[1px] w-max border-[#333]">PREFERANCES</span>
          <a href="/details" class="border-b-[1px] w-max border-[#333]">EDIT</a>
        </div>
        <span>
          <span class="mt-[1vh]"
            ><span>Category/Application:&nbsp;</span
            >{{ userPreference.spec_1 }}</span
          >
        </span>
        <span>
          <span class="mt-[1vh]"
            ><span>Activity/Type:&nbsp;</span>{{ userPreference.spec_2 }}</span
          >
        </span>
        <span>
          <span class="mt-[1vh]"
            ><span>Material/Style:&nbsp;</span>{{ userPreference.spec_3 }}</span
          >
        </span>
        <span>
          <span class="mt-[1vh]"
            ><span>Finish:&nbsp;</span>{{ userPreference.spec_4 }}</span
          >
        </span>

        <span
          v-show="userPreference.color.length > 0"
          class="flex items-center"
        >
          <span>Colors: </span>
          <span v-for="(color, index) in userPreference.color" :key="index"
            >&nbsp;{{ color }}<span v-show="index > 1">,&nbsp;</span>
          </span>
        </span>
        <span class="">Budget: {{ userPreference.budget }}</span>
      </div>
    </div>

    <!-- BUTTON -->
    <button
      v-show="!isFormFilled"
      @click="() => (isFormFilled = true)"
      class="bg-white fixed bottom-[2vh] left-[50%] w-[88vw] translate-x-[-50%] border-[1.4px] border-[#333] rounded-md py-[2.4vh] uppercase font-[400] text-[2.4vh] px-[2vw] outline-none focus:border-black"
    >
      NEXT
    </button>
    <button
      v-show="isFormFilled"
      @click="handleClick"
      class="bg-white fixed bottom-[2vh] left-[50%] w-[88vw] translate-x-[-50%] border-[1.4px] border-[#333] rounded-md py-[2.4vh] uppercase font-[400] text-[2.4vh] px-[2vw] outline-none focus:border-black"
    >
      CONFIRM
    </button>
  </div>
</template>

<script setup>
import useUserStore from "../../../stores/user";

const userStore = useUserStore();
const isFormFilled = ref(false);
const mailIpt = ref("");
const nameIpt = ref("");
const phoneIpt = ref("");
const userPreference = useCookie("userPreference");
const token = ref("");

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
      console.log("SUCCESS");
      console.log("Log data:", logData);
    })
    .catch((err) => {
      handleLoadingExit();
      handleTempAnimation("errOverlayMOB");
      console.error("Unexpected errors:", err.message);
    });
};
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
