<template>
  <div
    class="w-[80%] mx-auto relative px-[4vw] py-[3.2vh] font-outfit flex flex-col items-center justify-center bg-prefCardBG rounded-xl"
  >
    <!-- UNEXPANDED -->
    <div
      @click="toggleExpansion"
      :class="[
        'shadow-md hover:shadow-lg transition-all ease-in-out duration-300 flex flex-col bg-prefCard border-[#999] px-[3.2vw] rounded-xl py-[4vh] transition-all duration-[.2s] ease-in-out active:bg-[#999] active:scale-[.98] select-none cursor-pointer',
        !isExpanded ? 'w-[94%] text-[2vw]' : 'w-[100%] text-[2.4vw]',
      ]"
    >
      <div class="w-full flex justify-between items-center text-[#444]">
        <span class="flex items-center">
          {{ item.flooring }}
          <span v-show="isExpanded" class="ml-[1vw]">
            <ArrowUpIcon />
          </span>
          <span v-show="!isExpanded" class="ml-[1vw]">
            <ArrowDownIcon />
          </span>
        </span>
        <div v-if="!showConfirmDelete" class="h-max w-max">
          <TrashIcon
            class="text-[#555] text-[3.2vh]"
            v-show="!isExpanded"
            @click.stop="promptDelete(item)"
          />
          <span
            v-show="isExpanded"
            class="h-full flex items-center transition-all duration-[.2s] ease-in-out border-[#333] border-[1.4px] tracking-[.1vw] font-[600] text-red-700 rounded-full px-[2vw] py-[2vh] uppercase gap-[1vw] text-[1vw] '"
            @click.stop="promptDelete(item)"
          >
            Delete
          </span>
        </div>
        <div v-else class="h-max w-max px-[0vw]">
          <div class="h-max w-max flex items-center justify-end gap-[2vw]">
            <div class="h-max w-max flex gap-[2vw] items-center justify-end">
              <button
                class="h-full flex items-center transition-all duration-[.2s] ease-in-out border-[#333] border-[1.4px] tracking-[.1vw] font-[600] text-red-700 rounded-full px-[2vw] py-[2vh] uppercase gap-[1vw] text-[1vw]"
                @click.stop="confirmDelete"
              >
                CONFIRM
              </button>
              <button
                class="h-full flex items-center transition-all duration-[.2s] ease-in-out border-[#333] border-[1.4px] tracking-[.1vw] font-[600] text-[#555] rounded-full px-[2vw] py-[2vh] uppercase gap-[1vw] text-[1vw]"
                @click.stop="cancelDelete"
              >
                CANCEL
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>

    <!-- EXPANDED -->
    <div
      v-show="isExpanded"
      class="w-full flex flex-col gap-[4vh] pt-[4vh] transition-all duration-[.2s]"
    >
      <div
        class="w-full flex flex-col items-start gap-[2vh] bg-prefCard py-[3.2vh] rounded-xl px-[3.2vw]"
      >
        <SpecDetail :label="getLabel(item.flooring)" :value="item.spec_1" />
        <SpecDetail label="Activity" :value="item.spec_2" />
        <SpecDetail label="Material" :value="item.spec_3" />
        <SpecDetail
          label="Finish"
          :value="
            Array.isArray(item.spec_4)
              ? item.spec_4.length > 0
                ? item.spec_4.join(', ')
                : 'N/A'
              : item.spec_4 !== ''
              ? item.spec_4
              : 'N/A'
          "
        />
        <SpecDetail label="Colors" :value="item.color.join(', ')" />
        <SpecDetail
          label="Budget"
          :value="getPriceRange(item.budget, item.country)"
        />
      </div>

      <!-- ADD ON CARD -->
      <div
        class="w-full bg-prefCard rounded-xl flex flex-col gap-[4vh] px-[3.2vw] pt-[4vh] pb-[4vh]"
      >
        <span class="text-[3.2vh] tracking-tight w-full font-[500] text-[#333]">
          Add On's
          <span class="text-[#777] text-[2vh] font-normal">(Optional)</span>
        </span>

        <div class="flex flex-col gap-[.6vh] text-[#555]">
          <label for="additionalDetails" class="text-[2vh] font-medium"
            >Provide Additional Details</label
          >
          <textarea
            id="additionalDetails"
            placeholder="Extra Info/Requirements Goes Here"
            class="border-[2px] rounded-md px-[2vw] py-[1vh] border-[#ccc] bg-[#f9f9f9] text-[#333] outline-none focus:border-[#444]"
          />
        </div>

        <div class="flex flex-col gap-[1.5vh] text-[#555]">
          <UploadContainerPC />
        </div>
      </div>
    </div>
  </div>
</template>
<script setup>
import { ref, defineProps } from "vue";
import gsap from "gsap";
import useUserStore from "~/stores/user";
const userStore = useUserStore();
import TrashIcon from "~/public/icons/TrashIcon.vue";
import SpecDetail from "./PrefCardItems/SpecDetail.vue";
import UploadContainerMOB from "./UploadContainerMOB.vue";
import ArrowUpIcon from "~/public/icons/arrowUpIcon.vue";
import ArrowDownIcon from "~/public/icons/arrowDownIcon.vue";

const { item } = defineProps({
  item: {
    type: Object,
    default: () => ({
      preference: {
        flooring: "",
        spec_1: "",
        spec_2: "",
        spec_3: "",
        spec_4: "",
        color: [],
        budget: "",
        country: "",
      },
    }),
  },
});

const isExpanded = ref(false);
const showConfirmDelete = ref(false);
const itemToDelete = ref(null);
const emit = defineEmits(["refreshCart"]);
async function getHistory() {
  try {
    let sanitizedPhone = userStore.userData.phone.startsWith("+")
      ? userStore.userData.phone.slice(1)
      : addCountryCode(
          userStore.userData.phone,
          userStore.preference.country
        ).slice(1);

    const preferences = await fetchPreferencesByMobile(sanitizedPhone);

    if (preferences && preferences.data && preferences.data.length > 0) {
      preferences.data.forEach((pref) => {
        const preferenceData = pref.preference;
        const id = pref.id;

        const isAlreadyInCart = userStore.cart.some((item) => item.id === id);

        if (!isAlreadyInCart) {
          const preferenceWithId = { ...preferenceData, id: id };
          userStore.cart.push(preferenceWithId);
        }
      });
      // Increment the cartKey to force re-render the cart component
      emit("refreshCart");
      console.log("Preferences added to cart:", userStore.cart);
    } else {
      console.log("No preferences found.");
    }
  } catch (error) {
    console.error("Failed to fetch or process preferences:", error);
  } finally {
  }
}

function toggleExpansion() {
  isExpanded.value = !isExpanded.value;
}
function fadeOut(id) {
  gsap.to(`.id-${item.id}-PrefCardItem`, {
    autoAlpha: 0, // Opacity 0 and visibility hidden
    duration: 0.5, // 1-second duration
    scale: 0.1,
    ease: "back.in",
  });
  gsap.to(`.id-${item.id}-PrefCardItem`, {
    display: "hidden",
  });
}

function promptDelete(item) {
  showConfirmDelete.value = true;
  itemToDelete.value = item;
}

function confirmDelete() {
  // Perform fade-out animation
  fadeOut(itemToDelete.value.id);

  // Delay of 0.5 seconds before executing the delete operation
  setTimeout(() => {
    handleDeleteItemAndUpdate(itemToDelete.value.id);
    showConfirmDelete.value = false;
  }, 400);
}

function cancelDelete() {
  showConfirmDelete.value = false;
}

const handleDeleteItemAndUpdate = async (logId) => {
  try {
    // Step 1: Check if the logId is 'PINIA'
    if (logId === "PINIA") {
      // Remove the item from the cart where addedByPinia is true
      userStore.resetPreference();
      userStore.cart = userStore.cart.filter(
        (item) => item.addedByPinia !== true && item.id !== "PINIA"
      );
      console.log("PINIA item deleted from cart.");
      // Trigger getHistory() after deleting the PINIA item
      await getHistory();
      return; // Exit the function as no API call is needed
    }

    // Step 2: Proceed to delete the log from the server if the logId is not 'PINIA'
    const deleteResponse = await fetch("/api/delete-log", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ id: logId }),
    });

    if (!deleteResponse.ok) {
      throw new Error("Error deleting log item.");
    }

    console.log("Log item deleted successfully from server.");

    // Step 3: Remove the item from flooringHistory
    userStore.flooringHistory = userStore.flooringHistory.filter(
      (item) => item.id !== logId
    );

    // Step 4: Remove the item from the cart as well if it exists there
    userStore.cart = userStore.cart.filter((item) => item.id !== logId);

    console.log("Item deleted from flooringHistory and cart.");
    // Trigger getHistory() after successful deletion
    await getHistory();
  } catch (error) {
    console.error("Error in handleDeleteItemAndUpdate:", error.message);
  }
};

function getLabel(flooringType) {
  return ["Carpets", "Wooden", "PVC"].includes(flooringType)
    ? "Category"
    : flooringType === "gym"
    ? "Application"
    : flooringType === "raised"
    ? "Area"
    : flooringType === "sports"
    ? "Type"
    : ["grass", "rubber"].includes(flooringType)
    ? "Thickness"
    : "N/A";
}
</script>
<style scoped>
.font-outfit {
  font-family: "Outfit", sans-serif;
}
</style>
