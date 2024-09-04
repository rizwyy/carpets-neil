<template>
  <div
    class="w-[99%] mx-auto relative px-[4vw] py-[3.2vh] font-outfit flex flex-col items-center justify-center bg-transparent transition-all duration-[.2s] ease-in-out active:scale-[.98]"
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
