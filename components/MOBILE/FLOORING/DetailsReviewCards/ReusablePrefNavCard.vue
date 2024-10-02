<template>
  <div
    :class="[
      `id-${item.id}-PrefCardItem w-[99%] mx-auto relative  ${
        isExpanded ? 'px-[2vw]' : 'px-[2vw] min-[990px]:px-[2vw]'
      } py-[3.2vh] font-outfit flex flex-col items-center justify-center bg-transparent transition-all duration-[.2s] ease-in-out active:scale-[.98] min-[990px]:active:scale-[1] min-[990px]:cursor-pointer  `,
    ]"
  >
    <!-- UNEXPANDED -->
    <div
      @click="toggleExpansion"
      :class="[
        'flex flex-col  px-[3.2vw] rounded-xl py-[1rem] transition-all duration-[.2s] ease-in-out active:scale-[.98] select-none  min-[990px]:active:bg-[#0000] min-[990px]:hover:shadow-xl',
        !isExpanded
          ? 'w-[98%] min-[990px]:w-full text-[1.2rem] bg-[white]  border-[#999] border-[.12rem]'
          : 'w-[100%] text-[1.4rem] bg-blue-50',
      ]"
    >
      <div class="w-full flex justify-between items-center text-[#444]">
        <span class="flex items-center min-[990px]:text-[1.8rem] gap-[1vw]">
          {{ capitalizeFirstLetter(item.flooring) }}
          <Icon
            class="text-[1.2rem] text-[#333]"
            v-if="isExpanded"
            icon="material-symbols:keyboard-arrow-up-rounded"
          />
          <Icon
            class="text-[1.2rem] text-[#333]"
            v-else
            icon="material-symbols:keyboard-arrow-down-rounded"
          />
        </span>
        <div v-if="!showConfirmDelete" class="h-max w-max">
          <Icon
            class="text-[#888] text-[1.6rem]"
            @click.stop="promptDelete(item)"
            icon="material-symbols:delete-outline-rounded"
          />
        </div>
        <div v-else class="h-max w-max px-[0vw]">
          <div class="h-max w-max flex items-center justify-end gap-[2vw]">
            <div class="h-max w-max flex gap-[2vw] items-center justify-end">
              <button
                class="px-[2.4vw] min-[990px]:px-[1vw] py-[.5rem] rounded-full transition-all duration-[.2s] ease-in-out border-[#333] border-[1.4px] text-[.8rem] font-[600] text-red-700"
                @click.stop="confirmDelete"
              >
                CONFIRM
              </button>
              <button
                class="px-[2.4vw] min-[990px]:px-[1vw] py-[.5rem] rounded-full transition-all duration-[.2s] ease-in-out border-[#333] border-[1.4px] text-[.8rem] font-[600]"
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
      :class="`w-[98%] flex flex-col gap-[2vh] pt-[2vh] transition-all duration-[.2s] `"
    >
      <div
        :class="`w-full flex flex-col items-start gap-[1vh]  py-[2vh] rounded-xl px-[3.2vw] ${
          isExpanded ? 'bg-blue-50' : ''
        }`"
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
import { Icon } from "@iconify/vue/dist/iconify.js";

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

function toggleExpansion() {
  isExpanded.value = !isExpanded.value;
}

function promptDelete(item) {
  showConfirmDelete.value = true;
  itemToDelete.value = item;
}

function confirmDelete() {
  handleDeleteItemAndUpdate(itemToDelete.value.id);
  showConfirmDelete.value = false;
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
