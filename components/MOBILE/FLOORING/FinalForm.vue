<template>
  <div
    class="FormOverlay_MOB opacity-0 invisible h-screen top-0 w-screen fixed z-[-9] overflow-hidden font-outfit"
  >
    <div class="h-full w-full relative bg-white">
      <div
        class="h-max w-full py-[6vh] flex items-center justify-between gap-[4vw] px-[8vw]"
      >
        <span
          ><svg
            @click="removeForm"
            class="h-[3.2vh]"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
          >
            <path
              fill="#333"
              d="m3.55 12l7.35 7.35q.375.375.363.875t-.388.875t-.875.375t-.875-.375l-7.7-7.675q-.3-.3-.45-.675T.825 12t.15-.75t.45-.675l7.7-7.7q.375-.375.888-.363t.887.388t.375.875t-.375.875z"
            /></svg
        ></span>
        <span>ORDER CONFIRMATION</span>
      </div>
      <form class="h-max w-full flex flex-col px-[8vw] gap-[4vh]">
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
            class="bg-inherit fixed bottom-[2vh] left-[50%] w-[88vw] translate-x-[-50%] border-[1.4px] border-[#333] rounded-md py-[2.4vh] uppercase font-[400] text-[2.4vh] px-[2vw] outline-none focus:border-black"
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
          <span
            v-for="(color, index) in userStore.preference.color"
            :key="index"
            >{{ color
            }}<span v-show="index + 1 < userStore.preference.color.length"
              >,&nbsp;</span
            >
          </span>
        </span>
        <span class="">Budget: {{ userStore.preference.budget }}</span>
      </div>
    </div>
  </div>
</template>

<script setup>
import useUserStore from "./../../../stores/user";

const userStore = useUserStore();

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
      console.log("SUCCESS");
      console.log("Log data:", logData);
    })
    .catch((err) => {
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
