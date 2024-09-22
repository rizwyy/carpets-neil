<template>
  <!-- MOBILE -->
  <transition @beforeEnter="handleDetailsDOMEntry('carpet_Types_Details_Mob')">
    <div
      v-show="userStore.preference.spec_1 !== ''"
      class="min-[990px]:hidden h-max w-screen flex justify-center pb-[5rem]"
    >
      <div
        class="h-max w-[96vw] text-center py-[2rem] flex flex-col gap-[1vh] font-outfit font-[400] bg-gradient-to-br from-detailsFrom to-detailsTo rounded-md shadow-lg bg-opacity-[.6] px-[3vw]"
      >
        <div
          class="h-max w-full flex items-center justify-between text-[1.5rem] z-[9]"
        >
          <span
            class="text-left text-balance carpet_Types_Details_Mob-HEADING text-detailsHeadCLR"
          >
            Choose Your Type
          </span>
          <button
            @click="clearAllSelections"
            v-show="userStore.preference.spec_2.length"
            style="
              white-space: nowrap;
              overflow: hidden;
              text-overflow: ellipsis;
            "
            class="h-max bg-white text-gray-500 text-detailsContainer_clearAllText_MOB px-[2vw] py-[.8vh] text-[1.8vh] rounded-md flex gap-[1vw] items-center"
          >
            <!-- MOBILE -->
            Clear All<Icon icon="material-symbols:cancel-outline-rounded" />
          </button>
        </div>
        <div class="h-max w-full flex justify-between gap-[2vw] z-[9]">
          <!-- MOBILE -->
          <!-- Plain -->
          <div
            :class="[
              'h-[7.2rem] carpet_Types_Details_Mob-CONTAINER opacity-0 translate-y-[20%]  overflow-hidden w-full  rounded-md  border-[2px] border-[#f1f1f1]  w flex items-end justify-between text-[#f1f1f1] px-[1.6vw] py-[.8vh] text-[1.2rem] relative cursor-pointer',
              { selected: userStore.preference.spec_2.includes('Plain') },
            ]"
            @click="toggleSelect('Plain')"
          >
            <div
              v-show="userStore.preference.spec_2.includes('Plain')"
              class="selectedDiv h-full w-full from-[20%] absolute bottom-0 left-0 bg-opacity-[.3] z-[1] flex items-start justify-end px-[1vw] py-[1vh]"
            >
              <!-- Selected indicator without text -->
              <span
                class="absolute top-1 right-1 bg-white text-gray-500 px-2 py-1 text-[.9rem] rounded-md"
                >Selected</span
              >
            </div>
            <div
              class="h-full w-full bg-gradient-to-b from-[#0000] to-black from-[60%] absolute bottom-0 left-0 bg-opacity-[.3] z-[-1]"
            ></div>
            <NuxtImg
              preload
              quality="50"
              placeholder
              loading="eager"
              class="h-full w-full object-cover absolute left-0 bottom-0 z-[-9]"
              src="/colors/snow.webp"
              alt=""
            />
            <span>Plain</span>
          </div>

          <!-- MOBILE -->
          <!-- Textured -->
          <div
            v-show="userStore.preference.category !== 'Carpet Tiles'"
            :class="[
              'h-[7.2rem] carpet_Types_Details_Mob-CONTAINER opacity-0 translate-y-[20%]  overflow-hidden w-full  rounded-md  border-[2px] border-[#f1f1f1]  w flex items-end justify-between text-[#f1f1f1] px-[1.6vw] py-[.8vh] text-[1.2rem] relative cursor-pointer',
              { selected: userStore.preference.spec_2.includes('Textured') },
            ]"
            @click="toggleSelect('Textured')"
          >
            <div
              v-show="userStore.preference.spec_2.includes('Textured')"
              class="selectedDiv h-full w-full from-[20%] absolute bottom-0 left-0 bg-opacity-[.3] z-[1] flex items-start justify-end px-[1vw] py-[1vh]"
            >
              <!-- Selected indicator without text -->
              <span
                class="absolute top-1 right-1 bg-white text-gray-500 px-2 py-1 text-[.9rem] rounded-md"
                >Selected</span
              >
            </div>
            <div
              class="h-full w-full bg-gradient-to-b from-[#0000] to-black from-[60%] absolute bottom-0 left-0 bg-opacity-[.3] z-[-1]"
            ></div>
            <NuxtImg
              preload
              quality="50"
              placeholder
              loading="eager"
              class="h-full w-full object-cover absolute left-0 bottom-0 z-[-9]"
              src="/texturedCarpet.webp"
              alt=""
            />
            <span>Textured</span>
          </div>
        </div>
        <div class="h-max w-full flex justify-between gap-[2vw] z-[9]">
          <!-- MOBILE -->
          <!-- Textured -->
          <div
            :class="[
              'h-[7.2rem] carpet_Types_Details_Mob-CONTAINER opacity-0 translate-y-[20%]  overflow-hidden rounded-md  border-[2px] border-[#f1f1f1]  w-full flex items-end justify-between text-[#f1f1f1] px-[1.6vw] py-[.8vh] text-[1.2rem] relative cursor-pointer',
              { selected: userStore.preference.spec_2.includes('Patterned') },
            ]"
            @click="toggleSelect('Patterned')"
          >
            <div
              v-show="userStore.preference.spec_2.includes('Patterned')"
              class="selectedDiv h-full w-full from-[20%] absolute bottom-0 left-0 bg-opacity-[.3] z-[1] flex items-start justify-end px-[1vw] py-[1vh]"
            >
              <!-- Selected indicator without text -->
              <span
                class="absolute top-1 right-1 bg-white text-gray-500 px-2 py-1 text-[.9rem] rounded-md"
                >Selected</span
              >
            </div>
            <div
              class="h-full w-full bg-gradient-to-b from-[#0000] to-black from-[60%] absolute bottom-0 left-0 bg-opacity-[.3] z-[-1]"
            ></div>
            <NuxtImg
              preload
              quality="50"
              placeholder
              loading="eager"
              class="h-full w-full object-cover absolute left-0 bottom-0 z-[-9]"
              src="/carpets/patterned.webp"
              alt=""
            />
            <span>Patterned</span>
          </div>

          <!-- MOBILE -->
          <!-- Customized -->
          <div
            :class="[
              'h-[7.2rem] carpet_Types_Details_Mob-CONTAINER opacity-0 translate-y-[20%] w-full  overflow-hidden rounded-md  border-[2px] border-[#f1f1f1]  w flex items-end justify-between text-[#f1f1f1] px-[1.6vw] py-[.8vh] text-[1.2rem] relative cursor-pointer',
              { selected: userStore.preference.spec_2.includes('Stripped') },
            ]"
            @click="toggleSelect('Stripped')"
          >
            <div
              v-show="userStore.preference.spec_2.includes('Stripped')"
              class="selectedDiv h-full w-full from-[20%] absolute bottom-0 left-0 bg-opacity-[.3] z-[1] flex items-start justify-end px-[1vw] py-[1vh]"
            >
              <!-- Selected indicator without text -->
              <span
                class="absolute top-1 right-1 bg-white text-gray-500 px-2 py-1 text-[.9rem] rounded-md"
                >Selected</span
              >
            </div>
            <div
              class="h-full w-full bg-gradient-to-b from-[#0000] to-black from-[60%] absolute bottom-0 left-0 bg-opacity-[.3] z-[-1]"
            ></div>
            <NuxtImg
              preload
              quality="50"
              placeholder
              loading="eager"
              class="h-full w-full object-cover absolute left-0 bottom-0 z-[-9]"
              src="/carpets/stripped.webp"
              alt=""
            />
            <span>Stripped</span>
          </div>
        </div>
        <div></div>
        <!-- MOBILE -->
      </div>
    </div>
  </transition>
</template>

<script setup>
import { ref } from "vue";

// PINIA

const userStore = useUserStore();
// COOKIES
import useUserStore from "~/stores/user";
const selectedType = ref("");

const { existingUser } = defineProps(["existingUser"]);

function clearAllSelections() {
  spec_2.value = "";
  userStore.preference.spec_2 = "";
}

const toggleSelect = (type) => {
  if (selectedType.value === type) {
    selectedType.value = "";
    userStore.preference.spec_2 = "";
  } else {
    existingUser ? scrollBy(500) : scrollToBottom();
    selectedType.value = type;
    userStore.preference.spec_2 = toRaw(selectedType.value);
    userStore.updateCart();
  }
};
</script>

<style scoped>
.selected {
  border-radius: 0px; /* Adjust this value as needed */
  border-radius: 0.375rem;
  border: 2px solid #333; /* Adjust border color as needed */
}
</style>
