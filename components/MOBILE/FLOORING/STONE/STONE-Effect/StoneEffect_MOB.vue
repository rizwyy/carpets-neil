<template>
  <!-- MOBILE -->
  <transition @before-enter="handleDetailsDOMEntry('stone_Type_Details_Mob')">
    <div
      v-show="userStore.preference.spec_2 === 'Porcelain'"
      class="min-[990px]:hidden h-max w-screen flex justify-center pb-[5rem]"
    >
      <div
        class="h-max w-[96vw] text-center py-[2rem] flex flex-col gap-[.5rem] font-outfit font-[400] bg-gradient-to-br from-detailsFrom to-detailsTo rounded-md shadow-lg bg-opacity-[.6] px-[3vw]"
      >
        <div
          class="h-max w-full flex items-center justify-between text-[1.5rem] z-[9]"
        >
          <span
            class="text-left text-balance stone_Type_Details_Mob-HEADING opacity-0 translate-x-[40%]"
          >
            Choose Your Effect
          </span>
          <button
            @click="clearAllSelections"
            v-show="spec_3.length"
            class="h-max bg-white text-gray-500 px-[1vw] py-[.4rem] text-detailsContainer_clearAllText_MOB rounded-md flex gap-[1vw] items-center"
          >
            Clear All<Icon icon="material-symbols:cancel-outline-rounded" />
          </button>
        </div>
        <div class="h-max w-full flex justify-between gap-[2vw] z-[9]">
          <div
            :class="[
              'h-[7.8rem] stone_Type_Details_Mob-CONTAINER overflow-hidden opacity-0 w-full rounded-md border-[2px] border-[#f1f1f1] flex items-end justify-between text-[#f1f1f1] px-[1.6vw] py-[.8vh] text-[1.2rem] relative cursor-pointer',
              { selected: spec_3.includes('Marble') },
            ]"
            @click="toggleSelect('Marble')"
          >
            <div
              v-show="spec_3.includes('Marble')"
              class="selectedDiv h-full w-full from-[20%] absolute bottom-0 left-0 bg-opacity-[.3] z-[1] flex items-start justify-end px-[1vw] py-[.5rem]"
            >
              <!-- Selected indicator without text -->
              <span
                class="absolute top-1 right-1 bg-white text-gray-500 px-2 py-1 text-[1.8vh] rounded-md"
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
              src="/stone/stoneMarble.webp"
              alt="#"
            />
            <span class="text-left text-balance">Marble</span>
          </div>

          <div
            :class="[
              'h-[7.8rem] stone_Type_Details_Mob-CONTAINER overflow-hidden opacity-0 w-full rounded-md border-[2px] border-[#f1f1f1] flex items-end justify-between text-[#f1f1f1] px-[1.6vw] py-[.8vh] text-[1.2rem] relative cursor-pointer',
              { selected: spec_3.includes('Concrete') },
            ]"
            @click="toggleSelect('Concrete')"
          >
            <div
              v-show="spec_3.includes('Concrete')"
              class="selectedDiv h-full w-full from-[20%] absolute bottom-0 left-0 bg-opacity-[.3] z-[1] flex items-start justify-end px-[1vw] py-[.5rem]"
            >
              <!-- Selected indicator without text -->
              <span
                class="absolute top-1 right-1 bg-white text-gray-500 px-2 py-1 text-[1.8vh] rounded-md"
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
              src="/stone/stoneConcrete.webp"
              alt="Concrete stone Flooring by Woltiz"
            />
            <span class="text-left text-balance">Concrete</span>
          </div>
        </div>
        <div class="h-max w-full flex justify-between gap-[2vw] z-[9]">
          <div
            :class="[
              'h-[7.8rem] stone_Type_Details_Mob-CONTAINER overflow-hidden opacity-0 w-full rounded-md border-[2px] border-[#f1f1f1] flex items-end justify-between text-[#f1f1f1] px-[1.6vw] py-[.8vh] text-[1.2rem] relative cursor-pointer',
              { selected: spec_3.includes('Solid') },
            ]"
            @click="toggleSelect('Solid')"
          >
            <div
              v-show="spec_3.includes('Solid')"
              class="selectedDiv h-full w-full from-[20%] absolute bottom-0 left-0 bg-opacity-[.3] z-[1] flex items-start justify-end px-[1vw] py-[.5rem]"
            >
              <!-- Selected indicator without text -->
              <span
                class="absolute top-1 right-1 bg-white text-gray-500 px-2 py-1 text-[1.8vh] rounded-md"
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
              src="/stone/stoneSolid.webp"
              alt=""
            />
            <span class="text-left text-balance">Solid</span>
          </div>
          <div
            :class="[
              'h-[7.8rem] stone_Type_Details_Mob-CONTAINER overflow-hidden opacity-0 w-full rounded-md border-[2px] border-[#f1f1f1] flex items-end justify-between text-[#f1f1f1] px-[1.6vw] py-[.8vh] text-[1.2rem] relative cursor-pointer',
              { selected: spec_3.includes('Wood') },
            ]"
            @click="toggleSelect('Wood')"
          >
            <div
              v-show="spec_3.includes('Wood')"
              class="selectedDiv h-full w-full from-[20%] absolute bottom-0 left-0 bg-opacity-[.3] z-[1] flex items-start justify-end px-[1vw] py-[.5rem]"
            >
              <!-- Selected indicator without text -->
              <span
                class="absolute top-1 right-1 bg-white text-gray-500 px-2 py-1 text-[1.8vh] rounded-md"
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
              src="/stone/stoneWood.webp"
              alt=""
            />
            <span class="text-left text-balance">Wood</span>
          </div>
        </div>
        <div class="h-max w-full flex justify-between gap-[2vw] z-[9]">
          <div
            :class="[
              'h-[7.8rem] stone_Type_Details_Mob-CONTAINER overflow-hidden opacity-0 w-full rounded-md border-[2px] border-[#f1f1f1] flex items-end justify-between text-[#f1f1f1] px-[1.6vw] py-[.8vh] text-[1.2rem] relative cursor-pointer',
              { selected: spec_3.includes('Stone') },
            ]"
            @click="toggleSelect('Stone')"
          >
            <div
              v-show="spec_3.includes('Stone')"
              class="selectedDiv h-full w-full from-[20%] absolute bottom-0 left-0 bg-opacity-[.3] z-[1] flex items-start justify-end px-[1vw] py-[.5rem]"
            >
              <!-- Selected indicator without text -->
              <span
                class="absolute top-1 right-1 bg-white text-gray-500 px-2 py-1 text-[1.8vh] rounded-md"
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
              src="/stone/stoneStone.webp"
              alt=""
            />
            <span class="text-left text-balance">Stone</span>
          </div>
          <div
            :class="[
              'h-[7.8rem] stone_Type_Details_Mob-CONTAINER overflow-hidden opacity-0 w-full rounded-md border-[2px] border-[#f1f1f1] flex items-end justify-between text-[#f1f1f1] px-[1.6vw] py-[.8vh] text-[1.2rem] relative cursor-pointer',
              { selected: spec_3.includes('Custom') },
            ]"
            @click="toggleSelect('Custom')"
          >
            <div
              v-show="spec_3.includes('Custom')"
              class="selectedDiv h-full w-full from-[20%] absolute bottom-0 left-0 bg-opacity-[.3] z-[1] flex items-start justify-end px-[1vw] py-[.5rem]"
            >
              <!-- Selected indicator without text -->
              <span
                class="absolute top-1 right-1 bg-white text-gray-500 px-2 py-1 text-[1.8vh] rounded-md"
                >Selected</span
              >
            </div>
            <div
              class="h-full w-full bg-[#d1d1d1] from-[60%] absolute bottom-0 left-0 bg-opacity-[.3] z-[-1]"
            ></div>
            <input
              ref="fileInput"
              type="file"
              class="hidden"
              @change="handleFileSelect"
            />
            <button
              @click="triggerFileInput"
              class="bg-[#555] text-white px-[.4vw] absolute top-[50%] translate-x-[-50%] left-[50%] font-medium text-[.8rem] py-[.6rem] w-[38vw] rounded-3xl flex items-center gap-2 hover:bg-[#333] transition-colors flex justify-center"
            >
              Upload Effect +
            </button>
          </div>
        </div>
      </div>
    </div>
  </transition>
</template>

<script setup>
const { existingUser } = defineProps(["existingUser"]);

// PINIA
const userStore = useUserStore();
import { Icon } from "@iconify/vue/dist/iconify.js";
// COOKIES
import useUserStore from "~/stores/user";
const fileInput = ref(null);

const spec_3 = ref("");
const triggerFileInput = () => {
  fileInput.value.click();
};
function clearAllSelections() {
  spec_3.value = "";
  userStore.preference.spec_3 = "";
}

const toggleSelect = (category) => {
  if (spec_3.value === category) {
    spec_3.value = "";
    userStore.preference.spec_3 = "";
  } else {
    userStore.preference.color = [];
    existingUser ? scrollBy(500) : scrollToBottom();
    spec_3.value = category;
    userStore.preference.spec_3 = toRaw(spec_3.value);
  }
  console.log("Updated color array:", userStore.preference.color);
};

onMounted(() => {});
</script>

<style scoped>
.selected {
  border-radius: 0px; /* Adjust this value as needed */
  border-radius: 0.375rem;
  border: 2px solid #333; /* Adjust border color as needed */
}
</style>
