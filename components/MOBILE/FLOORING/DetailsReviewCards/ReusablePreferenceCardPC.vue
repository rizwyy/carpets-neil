<template>
  <!-- PREFERENCE PARENT DIV -->
  <div
    :style="{
      border: isExpanded ? `1px solid ` : '0px',
    }"
    class="max-[990px]:hidden h-max w-full relative px-[4vw] py-[3.2vh] rounded-md"
  >
    <!-- UNEXPANDED -->
    <div class="h-max w-full">
      <div
        :style="{
          border: !isExpanded ? '1px solid' : '0px',
          fontSize: !isExpanded ? '2.4vh' : '3.2vh',
          paddingLeft: !isExpanded ? '3.2vw' : '1.2vw', // Adjust these values as needed
          paddingRight: !isExpanded ? '3.2vw' : '1.2vw',
        }"
        class="h-max w-full inline-block px-[3.2vw] text-[2.4vh] py-[1vh] flex justify-between items-center rounded-md border-[1px] border-[#999] text-[#444]"
      >
        <span class="flex items-center h-max w-max">
          {{ item.preference.flooring }}
          <span
            v-show="!isExpanded"
            @click="handleExpansion"
            class="text-[1.4vh] text-[#999]"
            ><svg
              xmlns="http://www.w3.org/2000/svg"
              class="h-[3.2vh]"
              viewBox="0 0 24 24"
            >
              <path
                fill="#444"
                d="M12 14.975q-.2 0-.375-.062T11.3 14.7l-4.6-4.6q-.275-.275-.275-.7t.275-.7t.7-.275t.7.275l3.9 3.9l3.9-3.9q.275-.275.7-.275t.7.275t.275.7t-.275.7l-4.6 4.6q-.15.15-.325.213t-.375.062"
              /></svg
          ></span>
          <span
            v-show="isExpanded"
            @click="handleMinimize"
            class="text-[1.4vh] h-full w-max text-[#999]"
            ><svg
              xmlns="http://www.w3.org/2000/svg"
              class="h-[3.8vh]"
              viewBox="0 0 24 24"
            >
              <path
                fill="#444"
                d="m12 10.8l-3.9 3.9q-.275.275-.7.275t-.7-.275t-.275-.7t.275-.7l4.6-4.6q.3-.3.7-.3t.7.3l4.6 4.6q.275.275.275.7t-.275.7t-.7.275t-.7-.275z"
              /></svg
          ></span>
        </span>
        <span @click="() => handleDeleteItemAndUpdate(item.id)">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            class="h-[2.8vh]"
            viewBox="0 0 24 24"
          >
            <path
              fill="currentColor"
              d="M7 21q-.825 0-1.412-.587T5 19V6H4V4h5V3h6v1h5v2h-1v13q0 .825-.587 1.413T17 21zM17 6H7v13h10zM9 17h2V8H9zm4 0h2V8h-2zM7 6v13z"
            />
          </svg>
        </span>
      </div>
    </div>
    <!-- EXPANDED -->
    <div
      v-show="isExpanded"
      class="h-max w-full flex flex-col items-start gap-[4.2vh] pt-[4vh]"
    >
      <div>
        <span
          class="mt-[1vh] w-full border-[2px] rounded-full px-[4vw] py-[1vh] border-[#666] bg-[#fff7]"
          ><span>Category/Application:&nbsp;</span
          >{{ item.preference.spec_1 }}</span
        >
      </div>
      <div>
        <span
          class="mt-[1vh] w-full border-[2px] rounded-full px-[4vw] py-[1vh] border-[#666] bg-[#fff7]"
          ><span>Activity/Type:&nbsp;</span>{{ item.preference.spec_2 }}</span
        >
      </div>
      <div>
        <span
          class="mt-[1vh] w-full border-[2px] rounded-full px-[4vw] py-[1vh] border-[#666] bg-[#fff7]"
          ><span>Material/Style:&nbsp;</span>{{ item.preference.spec_3 }}</span
        >
      </div>
      <div
        class="h-max w-full flex flex-col justify-between gap-[3.2vh] items-start"
      >
        <span>
          <span
            v-show="!Array.isArray(item.preference.spec_4)"
            class="w-full border-[2px] rounded-full px-[4vw] py-[1vh] border-[#666] bg-[#fff7]"
            ><span>Finish:&nbsp; </span
            >{{
              item.preference.spec_4 === "" ? "N/A" : item.preference.spec_4
            }}</span
          >
          <span
            v-show="Array.isArray(item.preference.spec_4)"
            class="w-full border-[2px] rounded-full px-[4vw] py-[1vh] border-[#666] bg-[#fff7]"
          >
            <span>Finish:&nbsp;</span>
            <span v-show="item.preference.spec_4.length > 0">
              <span
                v-for="(surface, index) in item.preference.spec_4"
                :key="index"
              >
                {{ surface
                }}<span v-show="index < item.preference.spec_4.length - 1"
                  >,
                </span>
              </span>
            </span>
            <span v-show="!(item.preference.spec_4.length > 0)">N/A</span>
          </span>
        </span>
        <span
          class="w-max border-[2px] rounded-full px-[4vw] py-[1vh] border-[#666] bg-[#fff7] text-right"
          >Budget:
          {{
            getPriceRange(item.preference.budget, item.preference.country)
          }}&nbsp;({{ item.preference.budget }})</span
        >
      </div>
      <div class="h-max w-full flex flex-col gap-[1.8vh] px-[2vw]">
        <span class="font-[400]">Colors Opted:</span>
        <div class="h-max w-full grid grid-cols-3 gap-[2vh]">
          <span
            v-show="item.preference.color.length > 0"
            class="w-max border-[2px] rounded-full px-[4vw] text-[#999] font-[400] text-center py-[.8vh] border-[#444] bg-[#000] bg-opacity-[.2] backdrop-blur-[8px]"
            v-for="(color, index) in item.preference.color"
            :key="index"
            :style="{
              color: getColorHex(color),
            }"
            >{{ color }}
          </span>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import useUserStore from "~/stores/user";
const userStore = useUserStore();

const { item } = defineProps(["item"]);
const isExpanded = ref(false);

function handleExpansion() {
  isExpanded.value = true;
}
function handleMinimize() {
  isExpanded.value = false;
}

const handleDeleteItemAndUpdate = async (logId) => {
  try {
    // Step 2: Delete the log item by ID
    const deleteResponse = await fetch("/api/delete-log", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ id: logId }),
    });

    if (!deleteResponse.ok) {
      throw new Error("Error deleting log item.");
    }

    console.log("Log item deleted successfully.");

    // Step 3: Remove the corresponding object from userStore.flooringHistory
    userStore.flooringHistory = userStore.flooringHistory.filter(
      (item) => item.id !== logId
    );

    console.log("Flooring history updated.");
  } catch (error) {
    console.error("Error in handleDeleteItemAndUpdate:", error.message);
    throw error;
  }
};
</script>

<style lang="scss" scoped></style>
