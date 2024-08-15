<template>
  <div class="h-screen relative w-screen overflow-hidden font-outfit">
    <!-- ERROR OVERLAY -->
    <div
      class="errOverlayMOB opacity-0 invisible h-max py-[2.4vh] left-[50%] translate-x-[-50%] top-[2.4vh] rounded-md w-[72vw] flex justify-center fixed bottom-0 bg-[#000] bg-opacity-[.3] backdrop-blur-[8px] z-[999]"
    >
      <span class="text-white font-[500] tracking-[.1vw]"
        >SOMETHING WENT WRONG!</span
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
    <div
      class="h-max w-full fixed top-0 left-0 pt-[4vh] pb-[3.2vh] flex items-center bg-[#fff9] backdrop-blur-[14px] justify-between gap-[4vw] px-[8vw]"
    >
      <a href="/flooring/gym/details"
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
      <span>ORDER CONFIRMATION</span>
    </div>
    <form class="h-max w-full flex flex-col px-[8vw] gap-[4vh] pt-[12vh]">
      <span class="border-b-[1px] border-[#333] w-max">INFORMATION</span>
      <div class="h-max w-full flex flex-col">
        <input
          type="text"
          class="bg-inherit border-b-[2px] rounded-none py-[.8vh] px-[2vw] outline-none focus:border-black"
          placeholder="Name"
          v-model="nameIpt"
        />
      </div>
      <div class="h-max w-full flex flex-col">
        <input
          :required="mailIpt.length > 8"
          type="email"
          class="bg-inherit border-b-[2px] rounded-none py-[.8vh] px-[2vw] outline-none focus:border-black"
          placeholder="Mail"
          v-model="mailIpt"
        />
      </div>
      <div class="h-max w-full flex flex-col">
        <input
          :required="phoneIpt.length > 8"
          type="number"
          class="bg-inherit border-b-[2px] rounded-none py-[.8vh] px-[2vw] outline-none focus:border-black"
          placeholder="Phone"
          v-model="phoneIpt"
        />
      </div>
      <div class="h-max w-full flex flex-col">
        <button
          @click.prevent="handleClick"
          class="bg-white fixed bottom-[2vh] left-[50%] w-[88vw] translate-x-[-50%] border-[1.4px] border-[#333] rounded-md py-[2.4vh] uppercase font-[400] text-[2.4vh] px-[2vw] outline-none focus:border-black"
        >
          CONFIRM
        </button>
      </div>
    </form>
    <div class="px-[8vw] pt-[2vh] px-[8vw] flex flex-col gap-[2vh]">
      <div class="h-max w-full flex justify-between pb-[3.2vh]">
        <span class="border-b-[1px] w-max border-[#333]">PREFERANCES</span>
        <span class="border-b-[1px] w-max border-[#333]">EDIT</span>
      </div>
      <span>
        <span v-show="userStore.preference.spec_1 !== ''" class="mt-[1vh]"
          ><span>Category/Application:&nbsp;</span
          >{{ userStore.preference.spec_1 }}</span
        >
      </span>
      <span>
        <span v-show="userStore.preference.spec_2 !== ''" class="mt-[1vh]"
          ><span>Activity/Type:&nbsp;</span
          >{{ userStore.preference.spec_2 }}</span
        >
      </span>
      <span>
        <span v-show="userStore.preference.spec_3 !== ''" class="mt-[1vh]"
          ><span>Material/Style:&nbsp;</span
          >{{ userStore.preference.spec_3 }}</span
        >
      </span>
      <span>
        <span v-show="userStore.preference.spec_4 !== ''" class="mt-[1vh]"
          ><span>Finish:&nbsp;</span>{{ userStore.preference.spec_4 }}</span
        >
      </span>

      <span class="flex items-center">
        <span>Colors: </span>
        <span v-for="(color, index) in userStore.preference.color" :key="index"
          >{{ color
          }}<span v-show="index + 1 < userStore.preference.color.length"
            >,&nbsp;</span
          >
        </span>
      </span>
      <span class="">Budget: {{ userStore.preference.budget }}</span>
    </div>
  </div>
</template>

<script setup>
import useUserStore from "../../../stores/user";

const userStore = useUserStore();
const isFormFilled = ref(false);

const mailIpt = ref("");
const nameIpt = ref("");
const phoneIpt = ref("");
const mySecureCookie = useCookie("mySecureCookie");
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
