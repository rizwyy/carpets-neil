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
          class="h-max w-[94%] flex flex-col gap-[5.8vh] overflow-hidden px-[3.8vw] pt-[3.2vh] rounded-md relative bg-gradient-to-br from-detailsFrom to-detailsTo"
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
            <LoadingIcon />
          </div>
          <div
            class="checkout_Overlay h-full w-full absolute top-0 left-0 bg-[#fff4] backdrop-blur-[.2px] z-[-1]"
          ></div>

          <div class="h-max w-full flex flex-col gap-[vh]">
            <input
              :class="[
                'border-[2px] InfoMOB-CONTAINER opacity-0 translate-y-[20%] rounded-md px-[2.4vw] py-[1.8vh] outline-none ',
                {
                  'bg-gray-300': isFormValidated() && cookieFound,
                  'bg-white': !(isFormValidated() && cookieFound),
                  'border-red-500 focus:border-red-300': isNameInvalid, // Add this line to conditionally apply the red border
                  'border-[#555] focus:border-black': !isNameInvalid, // Default border color when not invalid
                },
              ]"
              :readonly="isFormValidated() && cookieFound"
              type="text"
              placeholder="Name"
              v-model="nameIpt"
            />
          </div>
          <div class="h-max w-full flex flex-col">
            <input
              :class="[
                'border-[2px] InfoMOB-CONTAINER opacity-0 translate-y-[20%] rounded-md px-[2.4vw] py-[1.8vh] outline-none ',
                {
                  'bg-gray-300': isFormValidated() && cookieFound,
                  'bg-white': !(isFormValidated() && cookieFound),
                  'border-red-500 focus:border-red-300': isMailInvalid, // Add this line to conditionally apply the red border
                  'border-[#555] focus:border-black': !isMailInvalid, // Default border color when not invalid
                },
              ]"
              :readonly="isFormValidated() && cookieFound"
              :required="mailIpt.length > 8"
              type="email"
              placeholder="Mail"
              v-model="mailIpt"
            />
          </div>
          <div class="h-max w-full flex flex-col gap-[6.2vh] pb-[6.2vh]">
            <div class="h-max w-full flex">
              <select
                :class="[
                  'w-max rounded-l-md border-[2px] border-r-[0px] bg-[#fff9] py-[1.4vh] px-[.8vw] text-[2vh] outline-none InfoMOB-CONTAINER opacity-0',
                  {
                    'bg-gray-300': isFormValidated() && cookieFound,
                    'bg-white': !(isFormValidated() && cookieFound),
                    'border-red-500 focus:border-red-300': isPhoneInvalid, // Apply red border and focus state if phone is invalid
                    'border-[#555]': !isPhoneInvalid, // Default border color when valid
                  },
                ]"
                v-model="userStore.preference.country"
              >
                <option value="Bahrain">+973</option>
                <option value="UAE">+971</option>
                <option value="Saudi Arabia">+966</option>
                <option value="Kuwait">+965</option>
                <option value="Qatar">+974</option>
              </select>

              <input
                :readonly="isFormValidated() && cookieFound"
                :class="[
                  '[appearance:textfield] text-[16.8px] w-full [&::-webkit-outer-spin-button]:appearance-none [&::-webkit-inner-spin-button]:appearance-none border-[2px] InfoMOB-CONTAINER opacity-0 translate-y-[20%] rounded-r-md rounded-l-[0px] px-[2.4vw] py-[1.8vh] text-[18px] outline-none',
                  {
                    'bg-gray-300': isFormValidated() && cookieFound,
                    'bg-white': !(isFormValidated() && cookieFound),
                    'border-red-500 focus:border-red-300': isPhoneInvalid, // Apply red border and focus state if phone is invalid
                    'border-[#555] border-l-[#777] focus:border-black':
                      !isPhoneInvalid, // Default border color when valid
                  },
                ]"
                :required="phoneIpt.length > 8"
                type="number"
                placeholder="Phone"
                v-model="phoneIpt"
              />
            </div>

            <button
              @click="
                isFormValidated() && cookieFound
                  ? toggleReadOnly()
                  : handleInfoProceedings()
              "
              class="bg-white InfoMOB-CONTAINER active:scale-[.93] opacity-0 w-[88vw] border-[2.4px] tracking-[.2vw] border-[#333] rounded-md py-[2.4vh] uppercase font-[400] text-[2.4vh] px-[2vw] outline-none focus:border-black flex justify-center items-center"
            >
              <span v-show="!isLoading">{{
                isFormValidated() && cookieFound ? "EDIT" : "SAVE"
              }}</span>
              <LoadingIcon v-show="isLoading" />
            </button>
          </div>
        </div>
      </div>
    </div>
  </transition>
</template>

<script setup>
import LoadingIcon from "~/public/icons/loadingIcon.vue";
import useUserStore from "../../../stores/user";
import { ref } from "vue";
const userPreference = useCookie("userPreference");
const { flooring } = defineProps(["flooring"]);

const mailIpt = ref("");
const nameIpt = ref("");
const phoneIpt = ref("");

const cookieFound = ref(false);

const isLoading = ref(false);
const userStore = useUserStore();

function toggleReadOnly() {
  cookieFound.value = false;
}

function setUserPreferenceCookie() {
  const obj = {
    name: userStore.userData.name,
    email: userStore.userData.email,
    phone: userStore.userData.phone,
    orderMethod: userStore.preference.orderMethod,
  };
  userPreference.value = obj;

  console.log("COOKIE SET::", toRaw(userPreference.value));
  cookieFound.value = true;
}
const isNameInvalid = ref(false);
const isMailInvalid = ref(false);
const isPhoneInvalid = ref(false);

function handleInfoProceedings() {
  const phoneWithCode = addCountryCode(
    phoneIpt.value,
    userStore.preference.country
  );
  const validationResults = validateInputs(
    mailIpt.value,
    `${phoneWithCode}`,
    nameIpt.value
  );
  const isValid =
    validationResults.isEmailValid &&
    validationResults.isPhoneValid &&
    validationResults.isNameValid;
  if (!isValid) {
    if (!validationResults.isEmailValid) {
      // Handle invalid email
      isMailInvalid.value = true;
    }

    if (!validationResults.isPhoneValid) {
      isPhoneInvalid.value = true;
      // Handle invalid phone
    }

    if (!validationResults.isNameValid) {
      // Handle invalid name
      isNameInvalid.value = true;
    }
    userStore.isFormValidated = false;
    return;
  }

  if (!isValid) {
    userStore.isFormValidated = false;
    return;
  } else {
    isNameInvalid.value = false;
    isPhoneInvalid.value = false;
    isMailInvalid.value = false;
    userStore.userData.name = nameIpt.value;
    userStore.userData.email = mailIpt.value;
    userStore.userData.phone = phoneWithCode;
    setUserPreferenceCookie();
    userStore.updateCart();
    userStore.isFormValidated = true;
    scrollBy(800);
  }
}
function isFormValidated() {
  return (
    isFieldValidated("name") &&
    isFieldValidated("email") &&
    isFieldValidated("phone")
  );
}
function isFieldValidated(field) {
  if (field === "name") {
    return userStore.userData.name.trim().length > 0;
  } else if (field === "email") {
    const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailPattern.test(userStore.userData.email);
  } else if (field === "phone") {
    return userStore.userData.phone.trim().length > 8;
  }
  return false;
}
onMounted(() => {
  if (userPreference.value && typeof userPreference.value === "object") {
    const { name = "", phone = "", email = "" } = toRaw(userPreference.value);

    userStore.userData.name = nameIpt.value = name || "";
    userStore.userData.phone = phoneIpt.value = phone ? phone.substring(4) : "";
    userStore.userData.email = mailIpt.value = email || "";

    if (userStore.userData.name) {
      cookieFound.value = true;
    }
  }
});
</script>
