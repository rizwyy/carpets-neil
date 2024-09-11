<template>
  <section
    class="max-[990px]:hidden h-[100vh] w-[100vw] fixed top-0 left-0 bg-[#fff9] backdrop-blur-[8px] z-[99999]"
  >
    <div class="h-[100svh] w-full relative flex items-center justify-center">
      <div
        class="h-[75svh] w-[80vw] border-[2px] flex flex-col gap-[8vh] items-center justify-center rounded-md border-black py-[4vh] px-[2vw]"
      >
        <div class="h-max w-full flex justify-between">
          <div class="h-max w-full flex flex-col items-start">
            <span
              class="InfoCardPC-HEADING w-max text-[2.4vw] font-[400] text-[#444]"
              >Your Contact Information</span
            >
            <span class="InfoCardPC-HEADING text-[#999] text-[1.4vw] font-[450]"
              >Enter your contact information</span
            >
            <span
              v-show="isNameInvalid || isMailInvalid || isPhoneInvalid"
              class="text-red-400 text-[2vh] font-[450]"
              >Something went wrong!</span
            >
          </div>
          <div
            @click="closeForm"
            class="h-max w-max font-[500] tracking-[.1vw] cursor-pointer"
          >
            CLOSE
          </div>
        </div>
        <div class="h-max w-full flex flex-col gap-[4vh]">
          <div class="h-max w-full flex flex-col gap-[1.2vh]">
            <span>Name</span>
            <input
              :class="{
                'bg-gray-300 cursor-not-allowed ': formValidated,
                'bg-white': !formValidated,
                'border-red-500 focus:border-red-300': isNameInvalid,
                'border-[#555] focus:border-black': !isNameInvalid,
              }"
              :readonly="formValidated"
              class="border-[2px] w-full rounded-md px-[1.2vw] border-[#555] bg-[#fff9] py-[2.4vh] outline-none focus:border-black"
              placeholder="Name"
              v-model="nameIpt"
            />
          </div>
          <div class="h-max w-full flex justify-between gap-[4vw]">
            <div
              v-if="showAddressField"
              class="h-max w-full flex flex-col gap-[1vh]"
            >
              <span>Address</span>
              <input
                :class="{
                  'bg-gray-300  cursor-not-allowed': formValidated,
                  'bg-white': !formValidated,
                }"
                :readonly="formValidated"
                :required="addressIpt.length > 10"
                type="email"
                class="border-[2px] w-[100%] rounded-md px-[1.2vw] border-[#555] py-[2svh] outline-none focus:border-black"
                placeholder="Address"
                v-model="addressIpt"
              />
            </div>
            <div
              :class="[
                `h-max flex flex-col gap-[1vh] ${
                  showAddressField ? 'w-full' : 'w-[46%]'
                }`,
              ]"
            >
              <span>Phone</span>
              <div class="h-max w-full flex">
                <select
                  :class="{
                    'bg-gray-300 cursor-not-allowed': formValidated,
                    'bg-white': !formValidated,
                    'border-red-500 focus:border-red-300': isPhoneInvalid,
                    'border-[#555] focus:border-black': !isPhoneInvalid,
                  }"
                  v-model="userStore.preference.country"
                  class="w-max rounded-l-md border-[2px] border-r-[0px] border-[#555] bg-[#fff9] py-[1.4vh] px-[.8vw] text-[2vh] outline-none w-full"
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
                  class="[appearance:textfield] w-full [&::-webkit-outer-spin-button]:appearance-none [&::-webkit-inner-spin-button]:appearance-none border-[2px] w-full rounded-r-md px-[1.2vw] bg-[#fff9] py-[2.4vh] text-[2vh] outline-none"
                  placeholder="Phone"
                  v-model="phoneIpt"
                />
              </div>
            </div>
          </div>
        </div>
        <div class="h-max w-full flex justify-between gap-[3.2vw]">
          <button
            @click="
              () => (!formValidated ? validateInputFields() : toggleEdit())
            "
            :class="[
              'bg-white hover:bg-[#ececec] w-full border-[#666] active:scale-[.93]  w-full border-[2.4px] tracking-[.2vw] rounded-md py-[2.4vh] uppercase font-[500] text-[1.6vw] px-[2vw] outline-none',
            ]"
          >
            <span v-if="formValidated">EDIT</span>
            <span v-else>SAVE</span>
          </button>
          <button
            @click="formValidated && handleInfoProceedings()"
            :disabled="!formValidated"
            :class="[
              ' w-full flex items-center justify-center  border-[#666] active:scale-[.93]  w-full border-[2.4px] tracking-[.2vw] rounded-md py-[2.4vh] uppercase font-[500] text-[1.6vw] px-[2vw] outline-none',
              !formValidated
                ? 'bg-[#e9e9e9] text-[#999] cursor-not-allowed'
                : 'bg-white hover:shadow-lg ',
            ]"
          >
            <span v-if="isLoading && !showSuccessMsg"
              ><loadingIconVue class="text-[2.8vw]"
            /></span>
            <span
              class="flex items-center gap-[1vw]"
              v-else-if="!isLoading && showSuccessMsg"
              >Done <TickIcon class="text-[2.8vw]"
            /></span>
            <span v-else>PROCEED</span>
          </button>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup>
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
