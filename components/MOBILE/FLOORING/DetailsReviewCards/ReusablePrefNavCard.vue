<template>
  <div
    :class="[
      `id-${item.id}-PrefCardItem w-[99%] mx-auto relative px-[4vw] py-[3.2vh] font-outfit flex flex-col items-center justify-center bg-transparent transition-all duration-[.2s] ease-in-out active:scale-[.98]`,
    ]"
  >
    <!-- UNEXPANDED -->
    <div
      :class="[
        'flex flex-col bg-[#fff] border-[#999] px-[3.2vw] rounded-b-[0px] rounded-t-xl py-[1.8vh]  select-none w-[100%] text-[2.8vh]',
      ]"
    >
      <div class="w-full flex justify-between items-center text-[#444]">
        <span class="flex items-center">
          {{ item.flooring }}
        </span>
        <div v-if="!showConfirmDelete" class="h-max w-max">
          <TrashIcon
            class="text-[#555] text-[3.2vh]"
            @click.stop="promptDelete(item)"
          />
        </div>
        <div v-else class="h-max w-max px-[0vw]">
          <div class="h-max w-max flex items-center justify-end gap-[2vw]">
            <div class="h-max w-max flex gap-[2vw] items-center justify-end">
              <button
                class="px-[4vw] py-[1vh] rounded-full transition-all duration-[.2s] ease-in-out border-[#333] border-[1.4px] text-[1.6vh] font-[600] text-red-700"
                @click.stop="confirmDelete"
              >
                CONFIRM
              </button>
              <button
                class="px-[4vw] py-[1vh] rounded-full transition-all duration-[.2s] ease-in-out border-[#333] border-[1.4px] text-[1.6vh] font-[600]"
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
      class="w-full flex flex-col gap-[2vh] transition-all duration-[.2s]"
    >
      <div
        class="w-full flex flex-col items-start rounded-t-[0px] rounded-b-xl gap-[1vh] bg-[#fff] py-[2vh] rounded-xl px-[3.2vw]"
      >
        <SpecDetail :label="getLabel(item.flooring)" :value="item.spec_1" />
        <SpecDetail
          v-if="item.flooring !== 'rubber' && item.flooring !== 'grass'"
          label="Activity"
          :value="item.spec_2"
        />
        <SpecDetail
          v-if="item.flooring !== 'rubber' && item.flooring !== 'grass'"
          label="Material"
          :value="item.spec_3"
        />
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
        <SpecDetail
          label="Colors"
          :value="
            Array.isArray(item.color) && item.color.length > 0
              ? item.color.join(', ')
              : 'N/A'
          "
        />
        <SpecDetail
          label="Budget"
          :value="getPriceRange(item.budget, item.country)"
        />
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

const isExpanded = ref(true);
const showConfirmDelete = ref(false);
const itemToDelete = ref(null);

function toggleExpansion() {
  isExpanded.value = !isExpanded.value;
}
function fadeOut(id) {
  gsap.to(`.id-${item.id}-PrefCardItem`, {
    autoAlpha: 0, // Opacity 0 and visibility hidden
    duration: 0.5, // 1-second duration
    y: 100,
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

// GET ALL CART ITEMS
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

      console.log("Preferences added to cart:", userStore.cart);
    } else {
      console.log("No preferences found.");
    }
  } catch (error) {
    console.error("Failed to fetch or process preferences:", error);
  } finally {
  }
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
