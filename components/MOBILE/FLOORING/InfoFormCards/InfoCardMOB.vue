<template>
  <!--INPUT ERROR OVERLAY -->
  <transition @beforeEnter="handleDetailsDOMEntry('InfoMOB')">
    <div
      v-show="
        ((userStore.preference.flooring === 'services' ||
          userStore.preference.flooring === 'accessories') &&
          userStore.preference.orderMethod !== '') ||
        (userStore.preference.flooring === `${flooring}` &&
          userStore.preference.spec_1 !== '' &&
          userStore.preference.color.length > 0 &&
          userStore.preference.budget !== '' &&
          userStore.preference.orderMethod !== '')
      "
      class="h-max w-screen flex justify-center"
    >
      <div
        class="iptErrMsg opacity-0 invisible h-max py-[1.2rem] px-[2vw] left-[50%] translate-x-[-50%] top-[1rem] rounded-md w-[72vw] flex justify-center items-center fixed gap-[2vw] bottom-0 bg-[#000] bg-opacity-[.7] backdrop-blur-[8px] z-[999]"
      >
        <span
          class="text-white font-[500] tracking-[.2vw] uppercase text-center"
          >Please fill out all fields correctly before proceeding</span
        >
      </div>
      <div class="h-max w-screen pt-[1rem] pb-[3rem] flex justify-center">
        <div
          class="h-max w-[94%] flex flex-col gap-[3rem] overflow-hidden px-[3.8vw] pt-[1.6rem] rounded-md relative bg-gradient-to-br from-detailsFrom to-detailsTo"
        >
          <div class="h-max w-max flex flex-col gap-[.4vh] items-start">
            <span
              class="InfoMOB-HEADING opacity-0 translate-y-[20%] w-max text-[1.9rem] tracking-[-.2vw] font-[400] text-[#444]"
              >Your Contact Information</span
            >
            <span
              class="InfoMOB-HEADING opacity-0 mb-[1vh] translate-y-[20%] text-[#999] text-[1.1rem] font-[450]"
              >Enter your contact information</span
            >
            <span
              v-show="isNameInvalid || isMailInvalid || isPhoneInvalid"
              class="text-red-400 text-[1rem] font-[450]"
              >Something went wrong!</span
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

          <div class="h-max w-full flex flex-col">
            <input
              :class="[
                'border-[2px] InfoMOB-CONTAINER opacity-0 translate-y-[20%] rounded-md px-[2.4vw] py-[.9rem] outline-none ',
                {
                  'bg-gray-300': userStore.isFormValidated && cookieFound,
                  'bg-white': !(userStore.isFormValidated && cookieFound),
                  'border-red-500 focus:border-red-300': isNameInvalid, // Add this line to conditionally apply the red border
                  'border-[#555] focus:border-black': !isNameInvalid, // Default border color when not invalid
                },
              ]"
              :readonly="userStore.isFormValidated && cookieFound"
              type="text"
              placeholder="Name"
              v-model="nameIpt"
            />
          </div>
          <div class="h-max w-full flex flex-col">
            <input
              :class="[
                'border-[2px] InfoMOB-CONTAINER opacity-0 translate-y-[20%] rounded-md px-[2.4vw] py-[.9rem] outline-none ',
                {
                  'bg-gray-300': userStore.isFormValidated && cookieFound,
                  'bg-white': !(userStore.isFormValidated && cookieFound),
                  'border-red-500 focus:border-red-300': isMailInvalid, // Add this line to conditionally apply the red border
                  'border-[#555] focus:border-black': !isMailInvalid, // Default border color when not invalid
                },
              ]"
              :readonly="userStore.isFormValidated && cookieFound"
              :required="mailIpt.length > 8"
              type="email"
              placeholder="Mail"
              v-model="mailIpt"
            />
          </div>
          <div class="h-max w-full flex flex-col gap-[3.2rem] pb-[3.2rem]">
            <div class="h-max w-full flex">
              <select
                :class="[
                  'w-max rounded-l-md border-[2px] border-r-[0px] bg-[#fff9] py-[1.4vh] px-[.8vw] text-[1rem] outline-none InfoMOB-CONTAINER opacity-0',
                  {
                    'bg-gray-300': userStore.isFormValidated && cookieFound,
                    'bg-white': !(userStore.isFormValidated && cookieFound),
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
                :readonly="userStore.isFormValidated && cookieFound"
                :class="[
                  '[appearance:textfield] text-[16.8px] w-full [&::-webkit-outer-spin-button]:appearance-none [&::-webkit-inner-spin-button]:appearance-none border-[2px] InfoMOB-CONTAINER opacity-0 translate-y-[20%] rounded-r-md rounded-l-[0px] px-[2.4vw] py-[.9rem] text-[1rem] outline-none',
                  {
                    'bg-gray-300': userStore.isFormValidated && cookieFound,
                    'bg-white': !(userStore.isFormValidated && cookieFound),
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
                userStore.isFormValidated && cookieFound
                  ? toggleReadOnly()
                  : handleInfoProceedings()
              "
              class="bg-white InfoMOB-CONTAINER active:scale-[.93] opacity-0 w-[88vw] border-[2.4px] tracking-[.2vw] border-[#333] rounded-md py-[1.2rem] uppercase font-[400] text-[1.2rem] px-[2vw] outline-none focus:border-black flex justify-center items-center"
            >
              <span v-show="!isLoading">{{
                userStore.isFormValidated && cookieFound ? "EDIT" : "PROCEED"
              }}</span>
              <Icon
                v-show="isLoading"
                class="text-[1.6rem] text-[#333]"
                icon="eos-icons:three-dots-loading"
              />
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
import { fetchLogById } from "./../../../../utils/reusables";

import { ref } from "vue";
import { Icon } from "@iconify/vue/dist/iconify.js";
const userPreference = useCookie("userPreference");
const { flooring } = defineProps(["flooring"]);

const mailIpt = ref("");
const nameIpt = ref("");
const phoneIpt = ref("");

const isEditing = ref(false);
const changesDetected = ref(false);

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

const removeItemFromCart = (idToRemove) => {
  const userStore = useUserStore(); // Access the user store

  // Check if an item with the given id exists in the cart
  const itemIndex = userStore.cart.findIndex((item) => item.id === idToRemove);

  if (itemIndex !== -1) {
    // If the item exists, remove it from the cart
    userStore.cart.splice(itemIndex, 1);
    console.log(`Item with id ${idToRemove} removed from cart.`);
  } else {
    console.log(`No item with id ${idToRemove} found in the cart.`);
  }
};

const getSanitizedPhone = () => {
  return userStore.userData.phone.startsWith("+")
    ? userStore.userData.phone.slice(1)
    : addCountryCode(
        userStore.userData.phone,
        userStore.preference.country
      ).slice(1);
};
const insertLog = async (isOrderConfirmed) => {
  try {
    // Helper to get the sanitized phone number

    // Helper to get the contact (either phone or email)
    const getContact = () => {
      const { phone, email } = userStore.userData;
      return userStore.preference.orderMethod === "whatsapp" ||
        userStore.preference.orderMethod === "email"
        ? phone.startsWith("+")
          ? phone
          : addCountryCode(phone, userStore.preference.country)
        : email;
    };

    const sanitizedPhone = getSanitizedPhone();
    const contact = getContact();
    const name = userStore.userData.name;

    // Validate name and contact
    if (!name || !contact) {
      console.error("Name and contact details are required.");
      return;
    }

    // Build user data object
    const userData = {
      name,
      phone: contact,
      email: userStore.preference.orderMethod === "email" ? "" : contact,
      preference: userStore.preference,
      isOrderConfirmed,
    };
    console.log(userData);
    // Check for duplicates only if isEditing.value is true
    if (isEditing.value) {
      const preferences = await fetchPreferencesByMobile(sanitizedPhone);

      if (preferences && Array.isArray(preferences.data)) {
        const preferencesArray = preferences.data;

        // Check if any preferences match the current userStore preferences
        const isDuplicate = preferencesArray.some((log) => {
          const pref = log.preference;
          return (
            pref.flooring === userStore.preference.flooring &&
            pref.spec_1 === userStore.preference.spec_1 &&
            pref.spec_2 === userStore.preference.spec_2 &&
            pref.spec_3 === userStore.preference.spec_3 &&
            JSON.stringify(pref.color) ===
              JSON.stringify(userStore.preference.color) && // Compare arrays
            pref.budget === userStore.preference.budget
          );
        });
        if (isDuplicate) {
          console.log("Duplicate preference found. No new log will be added.");
          return; // Exit function without inserting a new log
        }
      }
    }

    // Proceed with setting the cookie and inserting the log
    const { data: setCookieData, error: setCookieError } = await useFetch(
      "/api/set-cookie"
    );

    if (setCookieError?.value) {
      throw new Error("Error setting cookie: " + setCookieError.value);
    }

    console.log("SET COOKIE DONE");

    // Insert the log
    const response = await fetch("/api/insert-logs", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(userData),
    });

    if (!response.ok) {
      throw new Error("Error inserting logs");
    }

    const logData = await response.json();
    console.log("Log inserted successfully with id:", logData.id);
    const fetchedData = await fetchPreferencesByMobile(sanitizedPhone);
    toRaw(fetchedData.data).forEach((item) => {
      if (item.preference && item.id) {
        // Create a new object that contains both the id and the preference
        const cartItem = {
          id: item.id, // Add the id
          ...item.preference, // Spread the preference object
        };

        // Push the new object into the cart
        userStore.cart.push(cartItem);
      }
    });
    isEditing.value = true;
  } catch (error) {
    console.error("Error occurred:", error);
  }
};

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
    isLoading.value = true;
    isNameInvalid.value = false;
    isPhoneInvalid.value = false;
    isMailInvalid.value = false;
    userStore.userData.name = nameIpt.value;
    userStore.userData.email = mailIpt.value;
    userStore.userData.phone = phoneWithCode;
    setUserPreferenceCookie();
    insertLog(false);
    userStore.isFormValidated = true;

    setTimeout(() => {
      isLoading.value = false;
      userStore.refreshCart();
      scrollBy(800);
    }, 800);
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
let initialValues = {
  spec_1: userStore.preference.spec_1,
  spec_2: userStore.preference.spec_2,
  spec_3: userStore.preference.spec_3,
  color: [...userStore.preference.color], // Make a copy of the array
  budget: userStore.preference.budget,
};

// Watch for `isEditing` to turn `true` and start monitoring changes
watch(
  () => isEditing.value,
  (newValue) => {
    if (newValue) {
      // Watch for changes in preferences
      watch(
        [
          () => userStore.preference.spec_1,
          () => userStore.preference.spec_2,
          () => userStore.preference.spec_3,
          () => userStore.preference.color,
          () => userStore.preference.budget,
        ],
        ([newSpec1, newSpec2, newSpec3, newColor, newBudget]) => {
          // Compare current values with initial values
          if (
            newSpec1 !== initialValues.spec_1 ||
            newSpec2 !== initialValues.spec_2 ||
            newSpec3 !== initialValues.spec_3 ||
            JSON.stringify(newColor) !== JSON.stringify(initialValues.color) ||
            newBudget !== initialValues.budget
          ) {
            changesDetected.value = true;
            console.log("CHANGES DETECTED🚨");
            userStore.isFormValidated = false;
            isEditing.value = false;
          }
        },
        { deep: true }
      );
    }
  }
);

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
