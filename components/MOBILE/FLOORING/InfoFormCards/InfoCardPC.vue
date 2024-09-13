<template>
  <!--INPUT ERROR OVERLAY -->
  <transition @beforeEnter="handleDetailsDOMEntry('InfoCardPC')">
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
      class="max-[990px]:hidden h-max w-screen flex justify-center pb-[4vh]"
    >
      <div
        class="iptErrMsg_Carpets opacity-0 invisible h-max py-[2.4vh] px-[2vw] left-[50%] translate-x-[-50%] top-[2.4vh] rounded-md w-[72vw] flex justify-center items-center fixed gap-[2vw] bottom-0 bg-[#000] bg-opacity-[.7] backdrop-blur-[8px] z-[999]"
      >
        <span
          class="text-white font-[500] tracking-[.2vw] uppercase text-center text-detailsContainer_heading_PC"
          >Please fill out all fields correctly before proceeding</span
        >
      </div>
      <div class="h-max w-screen flex justify-center">
        <div
          class="h-max w-[88%] flex flex-col gap-[4vh] bg-[#f1f1f1] py-[6vh] rounded-md items-center"
        >
          <div
            class="h-max w-[84%] flex flex-col gap-[5.8vh] overflow-hidden px-[2.8vw] pt-[4.2vh] rounded-md shadow-xl relative bg-gradient-to-br from-detailsFrom to-detailsTo"
          >
            <div class="h-max w-max flex flex-col gap-[.4vh] items-start">
              <span
                class="InfoCardPC-HEADING opacity-0 translate-y-[20%] w-max text-[2.4vw] font-[400] text-[#444]"
                >Your Contact Information</span
              >
              <span
                class="InfoCardPC-HEADING opacity-0 translate-y-[20%] text-[#999] text-[1.4vw] font-[450]"
                >Enter your contact information</span
              >
              <span
                v-show="isNameInvalid || isMailInvalid || isPhoneInvalid"
                class="text-red-400 text-[2vh] font-[450]"
                >Something went wrong!</span
              >
            </div>

            <div
              class="invisible opacity-0 InfoCardPC-CONTAINER h-full w-full absolute top-0 left-0 flex items-center justify-center bg-[#fff1] backdrop-blur-[8px] z-[1]"
            >
              <LoadingIcon />
            </div>
            <div
              class="checkout_Overlay h-full w-full absolute top-0 left-0 bg-[#fff4] backdrop-blur-[.2px] z-[-1]"
            ></div>
            <div class="h-max w-full flex flex-col gap-[1vh]">
              <span class="text-[1.1vw] font-[500] text-[#333]"
                >Name (required)</span
              >
              <input
                :class="{
                  'bg-gray-300 cursor-not-allowed ': formValidated,
                  'bg-white': !formValidated,
                }"
                :readonly="formValidated"
                class="border-[2px] InfoCardPC-CONTAINER opacity-0 translate-y-[20%] rounded-md px-[1.2vw] border-[#555] bg-[#fff9] py-[2.4vh] outline-none focus:border-black"
                placeholder="Name"
                v-model="nameIpt"
              />
            </div>
            <div class="h-max w-full flex justify-between items-center">
              <div class="h-max w-[46%] flex flex-col gap-[1vh]">
                <span class="text-[1.1vw] font-[500] text-[#333]"
                  >Email Address (required)</span
                >
                <input
                  :class="{
                    'bg-gray-300  cursor-not-allowed': formValidated,
                    'bg-white': !formValidated,
                    'border-red-500 focus:border-red-300': isNameInvalid,
                    'border-[#555] focus:border-black': !isNameInvalid,
                  }"
                  :readonly="formValidated"
                  :required="mailIpt.length > 8"
                  type="email"
                  class="border-[2px] InfoCardPC-CONTAINER opacity-0 translate-y-[20%] rounded-md px-[1.2vw] border-[#555] py-[2.4vh] outline-none focus:border-black"
                  placeholder="Mail"
                  v-model="mailIpt"
                />
              </div>
              <div class="h-max w-[46%] flex flex-col gap-[1vh]">
                <span class="text-[1.1vw] font-[500] text-[#333]"
                  >Phone Number (required)</span
                >
                <div class="h-max w-full flex">
                  <select
                    :class="{
                      'bg-gray-300 cursor-not-allowed': formValidated,
                      'bg-white': !formValidated,
                      'border-red-500 focus:border-red-300': isNameInvalid,
                      'border-[#555] focus:border-black': !isNameInvalid,
                    }"
                    v-model="userStore.preference.country"
                    class="w-max rounded-l-md border-[2px] border-r-[0px] border-[#555] bg-[#fff9] py-[1.4vh] px-[.8vw] text-[2vh] outline-none InfoCardPC-CONTAINER opacity-0"
                  >
                    <option value="Bahrain">+973</option>
                    <option value="UAE">+971</option>
                    <option value="Saudi Arabia">+966</option>
                    <option value="Kuwait">+965</option>
                    <option value="Qatar">+974</option>
                  </select>
                  <input
                    :readonly="formValidated"
                    :class="{
                      'bg-gray-300 cursor-not-allowed': formValidated,
                      'bg-white': !formValidated,
                      'border-red-500 focus:border-red-300': isNameInvalid,
                      'border-[#555] focus:border-black': !isNameInvalid,
                    }"
                    :required="phoneIpt.length > 8"
                    type="number"
                    class="[appearance:textfield] w-full [&::-webkit-outer-spin-button]:appearance-none [&::-webkit-inner-spin-button]:appearance-none border-[2px] InfoCardPC-CONTAINER opacity-0 translate-y-[20%] rounded-r-md px-[1.2vw] bg-[#fff9] py-[2.4vh] text-[2vh] outline-none"
                    placeholder="Phone"
                    v-model="phoneIpt"
                  />
                </div>
              </div>
            </div>
            <div class="h-max w-full flex gap-[4.8vw] py-[6.2vh]">
              <button
                @click="
                  () =>
                    !formValidated
                      ? handleInfoProceedings('SAVE')
                      : handleClickOnEdit()
                "
                :class="[
                  'bg-white hover:bg-[#ececec] InfoCardPC-CONTAINER border-[#666] active:scale-[.93] opacity-0 w-full border-[2.4px] tracking-[.2vw] rounded-md py-[2.4vh] uppercase font-[500] text-[1.6vw] px-[2vw] outline-none',
                  !cookieFound ? '' : '',
                ]"
              >
                <span v-if="formValidated">EDIT</span>
                <span v-else>SAVE</span>
              </button>
              <button
                @click="formValidated && handleInfoProceedings()"
                :disabled="!formValidated"
                :class="[
                  ' InfoCardPC-CONTAINER  border-[#666] active:scale-[.93]  w-full border-[2.4px] tracking-[.2vw] rounded-md py-[2.4vh] uppercase font-[500] text-[1.6vw] px-[2vw] outline-none',
                  !formValidated
                    ? 'bg-[#e9e9e9] text-[#999] cursor-not-allowed'
                    : 'bg-white hover:shadow-lg ',
                ]"
              >
                <span v-show="!isLoading">PROCEED</span>
              </button>
            </div>
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
const userPreference = useCookie("userPreference");
const { flooring } = defineProps(["flooring"]);

const mailIpt = ref("");
const nameIpt = ref("");
const phoneIpt = ref("");
const formValidated = ref(false);
const cookieFound = ref(false);

const isLoading = ref(false);
const userStore = useUserStore();

function toggleReadOnly() {
  cookieFound.value = false;
}
function handleClickOnEdit() {
  formValidated.value = false;
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

const insertLog = (isOrderConfirmed) => {
  const phoneWithCode = addCountryCode(userStore);
  const name = userStore.userData.name;
  const orderMethod = userStore.preference.orderMethod;
  let contact;

  // Determine the contact method (either phone or email based on the order method)
  if (orderMethod === "whatsapp" || orderMethod === "email") {
    if (userStore.userData.phone.startsWith("+")) {
      contact = userStore.userData.phone;
    } else {
      // Add the country code if it's not present
      contact = addCountryCode(
        userStore.userData.phone,
        userStore.preference.country
      );
    }
  } else {
    contact = userStore.userData.email;
  }

  const userData = {
    name,
    phone: orderMethod === "whatsapp" ? contact : contact,
    email: orderMethod === "email" ? "" : "",
    preference: userStore.preference,
    isOrderConfirmed: isOrderConfirmed,
  };

  console.log("Sending userData:", userData);

  // Validate name and contact
  if (!name || !contact) {
    console.error("Name and contact details are required.");
    return;
  }

  // Call API route to set the cookie, and then insert the logs
  useFetch("/api/set-cookie")
    .then(({ data, error }) => {
      if (error?.value) {
        throw new Error("Error setting cookie: " + error.value);
      }
      console.log("SET COOKIE DONE");

      // Insert logs after the cookie is set
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
      // REMOVE PINIA OBJ
      console.log("Log data:", logData);

      // Update userStore with the fetched logData.id
      userStore.userData.id = logData.id;

      // Now call fetchLogById after the id has been set
      return fetchLogById(logData.id); // This returns a promise, so chain another .then
    })
    .then((fetchedLog) => {
      removeItemFromCart("PINIA");
      console.log("Fetched log by ID:", fetchedLog);
      // If the fetched log contains preference data, add it to the cart
      if (fetchedLog && fetchedLog.preference) {
        const isAlreadyInCart = userStore.cart.some(
          (item) => item.id === fetchedLog.id
        );

        // If the item is not already in the cart, add it
        if (!isAlreadyInCart) {
          userStore.cart.push({
            ...fetchedLog.preference, // Add the preference details
            id: fetchedLog.id, // Ensure the log ID is stored as well
          });
          console.log("Preference added to cart:", userStore.cart);
        } else {
          console.log("Item is already in the cart.");
        }
      }
    })
    .catch((error) => {
      console.error("Error occurred:", error);
    });
};

function handleInfoProceedings(el) {
  const phoneWithCode = addCountryCode(
    phoneIpt.value,
    userStore.preference.country
  );
  // Check if the form values have changed
  const hasChanges =
    userStore.userData.name !== nameIpt.value ||
    userStore.userData.email !== mailIpt.value ||
    userStore.userData.phone !== phoneWithCode;

  // If no changes are detected, exit early to prevent redundant operations
  if (!hasChanges) {
    console.log("No changes detected, skipping form submission.");
    scrollBy(600);
    return;
  }

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
    if (el === "SAVE") {
      isNameInvalid.value = false;
      isPhoneInvalid.value = false;
      isMailInvalid.value = false;
      formValidated.value = true;
      return;
    }
    if (!formValidated.value) {
      return;
    }
    isNameInvalid.value = false;
    isPhoneInvalid.value = false;
    isMailInvalid.value = false;
    userStore.userData.name = nameIpt.value;
    userStore.userData.email = mailIpt.value;
    userStore.userData.phone = phoneWithCode;
    setUserPreferenceCookie();
    insertLog(false);
    userStore.isFormValidated = true;
    userStore.updateCart();
    scrollBy(800);
  }
}
//
/* async function handleInfoProceedings() {
  const phoneWithCode = addCountryCode(
    phoneIpt.value,
    userStore.preference.country
  );

  // Check if the form values have changed
  const hasNameChanged = userStore.userData.name !== nameIpt.value;
  const hasChanges =
    hasNameChanged ||
    userStore.userData.email !== mailIpt.value ||
    userStore.userData.phone !== phoneWithCode;

  // If no changes are detected, exit early to prevent redundant operations
  if (!hasChanges) {
    console.log("No changes detected, skipping form submission.");
    return;
  }

  const validationResults = validateInputs(
    mailIpt.value,
    `${phoneWithCode}`,
    nameIpt.value
  );
  const isValid =
    validationResults.isEmailValid &&
    validationResults.isPhoneValid &&
    validationResults.isNameValid;

  // Validation check
  if (!isValid) {
    if (!validationResults.isEmailValid) {
      isMailInvalid.value = true;
    }

    if (!validationResults.isPhoneValid) {
      isPhoneInvalid.value = true;
    }

    if (!validationResults.isNameValid) {
      isNameInvalid.value = true;
    }
    userStore.isFormValidated = false;
    return;
  }

  // If form is valid and changes are detected, proceed with updates
  isNameInvalid.value = false;
  isPhoneInvalid.value = false;
  isMailInvalid.value = false;

  // Update user data
  userStore.userData.name = nameIpt.value;
  userStore.userData.email = mailIpt.value;
  userStore.userData.phone = phoneWithCode;

  // If name has changed, call the updateLog API for the phone number
  if (hasNameChanged) {
    try {
      const response = await fetch('/api/update-log', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({
          phone: phoneWithCode,
          name: nameIpt.value
        })
      });

      const result = await response.json();

      if (!response.ok) {
        throw new Error(result.message || 'Error updating log');
      }

      console.log("Log updated successfully:", result.data);
    } catch (error) {
      console.error("Error updating log:", error);
    }
  }

  // Proceed with other updates
  setUserPreferenceCookie();
  insertLog(false);
  userStore.isFormValidated = true;
  userStore.updateCart();
  scrollBy(800);
}
*/
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
