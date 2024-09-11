<template>
  <section
    class="min-[990px]:hidden h-[100vh] w-[100vw] fixed top-0 left-0 bg-[#fff9] backdrop-blur-[8px] z-[99999]"
  >
    <div
      class="h-[100svh] w-full relative flex items-start pt-[6svh] justify-center"
    >
      <div
        class="h-max w-[92vw] border-[2px] flex flex-col gap-[8vh] items-center justify-center rounded-md border-black py-[4.8vh] px-[2vw]"
      >
        <div class="h-max w-full flex justify-between pr-[2vw]">
          <div class="h-max w-full flex flex-col items-start">
            <span
              class="InfoMOB-HEADING w-max text-[3.8vh] tracking-[-.2vw] font-[400] text-[#444]"
            >
              Contact Information</span
            >
            <span
              class="InfoMOB-HEADING mb-[1vh] text-[#999] text-[2.2vh] font-[450]"
              >Enter your contact information</span
            >
            <span
              v-show="isNameInvalid || isMailInvalid || isPhoneInvalid"
              class="text-red-400 text-[2vh] font-[450]"
              >Something went wrong!</span
            >
          </div>
          <span @click="closeForm"><closeIcon class="text-[3.8vh]" /></span>
        </div>

        <div class="h-max w-full flex flex-col gap-[4svh]">
          <input
            :class="[
              'border-[2px] rounded-md px-[2.4vw] py-[1.8vh] outline-none  border-[#555]',
              {
                'bg-gray-300 cursor-not-allowed ': formValidated,
                'bg-white': !formValidated,
                'border-red-500 focus:border-red-300': isNameInvalid,
                'border-[#555] focus:border-black': !isNameInvalid,
              },
            ]"
            :readonly="formValidated"
            type="text"
            placeholder="Name"
            v-model="nameIpt"
          />
          <input
            v-if="showAddressField"
            :class="[
              'border-[2px] border-[#555] rounded-md px-[2.4vw] py-[1.8vh] outline-none ',
              {
                'bg-gray-300  cursor-not-allowed': formValidated,
                'bg-white': !formValidated,
              },
            ]"
            :readonly="formValidated"
            :required="addressIpt.length > 10"
            type="email"
            placeholder="Address"
            v-model="addressIpt"
          />
          <div class="h-max w-full flex">
            <select
              :class="[
                'w-max rounded-l-md border-[2px] border-r-[0px] bg-[#fff9] py-[1.4vh] px-[.8vw] text-[2vh] outline-none  ',
                {
                  'bg-gray-300 cursor-not-allowed': formValidated,
                  'bg-white': !formValidated,
                  'border-red-500 focus:border-red-300': isPhoneInvalid,
                  'border-[#555] focus:border-black': !isPhoneInvalid,
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
              :readonly="formValidated"
              :class="[
                '[appearance:textfield] text-[16.8px] w-full [&::-webkit-outer-spin-button]:appearance-none [&::-webkit-inner-spin-button]:appearance-none border-[2px]    rounded-r-md rounded-l-[0px] px-[2.4vw] py-[1.8vh] text-[18px] outline-none',
                {
                  'bg-gray-300 cursor-not-allowed': formValidated,
                  'bg-white': !formValidated,
                  'border-red-500 focus:border-red-300': isNameInvalid,
                  'border-[#555] focus:border-black': !isNameInvalid,
                },
              ]"
              :required="phoneIpt.length > 8"
              type="number"
              placeholder="Phone"
              v-model="phoneIpt"
            />
          </div>
        </div>
        <div class="h-max w-full flex flex-col gap-[2vh]">
          <button
            @click="
              () => (!formValidated ? validateInputFields() : toggleEdit())
            "
            :class="[
              'bg-white hover:bg-[#ececec] w-full border-[#666]  w-full border-[2.4px] tracking-[.2vw] rounded-md py-[2.4vh] uppercase font-[500] text-[2vh] px-[2vw] outline-none',
            ]"
          >
            <span v-if="formValidated">EDIT</span>
            <span v-else>SAVE</span>
          </button>
          <button
            @click="formValidated && handleInfoProceedings()"
            :disabled="!formValidated"
            :class="[
              ' w-full flex items-center justify-center  border-[#666]  w-full border-[2.4px] tracking-[.2vw] rounded-md py-[2.4vh] uppercase font-[500] text-[2vh] px-[2vw] outline-none',
              !formValidated
                ? 'bg-[#e9e9e9] text-[#999] cursor-not-allowed'
                : 'bg-white hover:shadow-lg ',
            ]"
          >
            <span v-if="isLoading && !showSuccessMsg"
              ><loadingIconVue class="text-[3.2vh]"
            /></span>
            <span
              class="flex items-center gap-[2vw] text-[2.4vh]"
              v-else-if="!isLoading && showSuccessMsg"
              >Done <TickIcon
            /></span>
            <span v-else>PROCEED</span>
          </button>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup>
import closeIcon from "~/public/icons/closeIcon.vue";
import loadingIconVue from "~/public/icons/loadingIcon.vue";
import TickIcon from "~/public/icons/TickIcon.vue";
import useUserStore from "~/stores/user";
const emit = defineEmits(["close"]);
// Define form inputs and validation states
const addressIpt = ref("");
const nameIpt = ref("");
const phoneIpt = ref("");
const isNameInvalid = ref(false);
const isMailInvalid = ref(false);
const isPhoneInvalid = ref(false);
const formValidated = ref(false);
const isLoading = ref(false);
const showSuccessMsg = ref(false);
// Get user store
const userStore = useUserStore();

// The closeForm function which emits an event
const props = defineProps({
  formType: String, // Accept the form type from parent
});

const showAddressField = computed(() => {
  // Show address input if formType is 'homeVisit' or 'sampleDelivery'
  return props.formType === "homeVisit" || props.formType === "sampleDelivery";
});

const closeForm = () => {
  emit("close");
};
function validateInputFields() {
  // Use test@test.com as the email since we are not asking for the user's email
  const email = "test@test.com";

  // Add country code to phone input if phone input exists
  const phoneWithCode = phoneIpt?.value
    ? addCountryCode(phoneIpt.value, userStore.preference.country)
    : "";

  // Check for empty name and phone fields before validation
  const isNameEmpty = !nameIpt?.value?.trim();
  const isPhoneEmpty = !phoneWithCode.trim();

  // Handle empty name and phone fields
  if (isNameEmpty || isPhoneEmpty) {
    if (isNameEmpty) {
      isNameInvalid.value = true;
    }

    if (isPhoneEmpty) {
      isPhoneInvalid.value = true;
    }

    formValidated.value = false;
    return;
  }

  // Validate input fields using validateInputs from utils
  const validationResults = validateInputs(email, phoneWithCode, nameIpt.value);

  // Check if all fields are valid
  const isValid =
    validationResults.isEmailValid &&
    validationResults.isPhoneValid &&
    validationResults.isNameValid;

  if (!isValid) {
    if (!validationResults.isPhoneValid) {
      // Handle invalid phone
      isPhoneInvalid.value = true;
    }

    if (!validationResults.isNameValid) {
      // Handle invalid name
      isNameInvalid.value = true;
    }

    formValidated.value = false;
    return;
  }

  // Reset error flags if all fields are valid
  isPhoneInvalid.value = false;
  isNameInvalid.value = false;

  // Update form validation state if all inputs are valid
  formValidated.value = true;
}

function handleInfoProceedings() {
  isLoading.value = true;
  setTimeout(() => {
    isLoading.value = false;
    showSuccessMsg.value = true;
  }, 2000);
  setTimeout(() => {
    if (formValidated.value) {
      closeForm();
    }
  }, 4000);
}
</script>

<style lang="scss" scoped></style>
