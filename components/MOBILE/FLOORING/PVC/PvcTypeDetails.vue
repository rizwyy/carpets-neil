<template>
  <!-- DESKTOP -->
  <div
    v-if="userStore.preference.category !== ''"
    class="max-[990px]:hidden h-max w-screen px-[6vw]"
  >
    <div
      class="h-max w-full text-center py-[4vh] flex flex-col gap-[2vh] font-outfit font-[400] bg-[#ececec] rounded-md shadow-lg bg-opacity-[.6] px-[3vw]"
    >
      <div
        class="h-max w-full flex items-center justify-between text-[3.8vh] z-[9]"
      >
        <span class="text-left text-balance">Choose Your Type </span>
        <!-- DESKTOP -->
        <button
          @click="clearAllSelections"
          v-if="selectedType.length"
          class="h-max w-max bg-white text-gray-500 px-[2vw] py-[1.2vh] text-[1.8vh] rounded-md flex gap-[1vw] items-center"
        >
          <span class="text-[2.2vh]">Clear All</span
          ><svg
            xmlns="http://www.w3.org/2000/svg"
            width="20"
            height="20"
            viewBox="0 0 24 24"
          >
            <path
              fill="currentColor"
              d="m12 13.4l2.9 2.9q.275.275.7.275t.7-.275t.275-.7t-.275-.7L13.4 12l2.9-2.9q.275-.275.275-.7t-.275-.7t-.7-.275t-.7.275L12 10.6L9.1 7.7q-.275-.275-.7-.275t-.7.275t-.275.7t.275.7l2.9 2.9l-2.9 2.9q-.275.275-.275.7t.275.7t.7.275t.7-.275zm0 8.6q-2.075 0-3.9-.788t-3.175-2.137T2.788 15.9T2 12t.788-3.9t2.137-3.175T8.1 2.788T12 2t3.9.788t3.175 2.137T21.213 8.1T22 12t-.788 3.9t-2.137 3.175t-3.175 2.138T12 22m0-2q3.35 0 5.675-2.325T20 12t-2.325-5.675T12 4T6.325 6.325T4 12t2.325 5.675T12 20m0-8"
            />
          </svg>
        </button>
        <!-- DESKTOP -->
      </div>
      <div class="h-max w-full flex flex-col gap-[2vh]">
        <div class="h-max w-full flex justify-between gap-[2vw] z-[9]">
          <!-- Sheet -->
          <div
            :class="[
              'h-[28vh] w-full rounded-md  border-[2px] border-[#f1f1f1]  w flex items-end justify-between text-[#f1f1f1] px-[1.6vw] py-[.8vh] text-[2.4vh] relative cursor-pointer',
              { selected: selectedType.includes('Sheet') },
            ]"
            @click="toggleSelect('Sheet')"
          >
            <div
              v-if="selectedType.includes('Sheet')"
              class="selectedDiv h-full w-full from-[20%] absolute bottom-0 left-0 bg-opacity-[.3] z-[1] flex items-start justify-end px-[1vw] py-[1vh]"
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
            <!-- DESKTOP -->
            <NuxtImg
              quality="50"
              placeholder
              loading="eager"
              class="h-full w-full object-cover object-top absolute left-0 bottom-0 z-[-9]"
              src="/pvc/vinyl-sheets.webp"
              alt=""
            />
            <span class="text-[3.4vh]">Sheet</span>
          </div>

          <!-- DESKTOP -->
          <!-- Tile -->
          <div
            :class="[
              'h-[28vh] w-full rounded-md  border-[2px] border-[#f1f1f1]  w flex items-end justify-between text-[#f1f1f1] px-[1.6vw] py-[.8vh] text-[2.4vh] relative cursor-pointer',
              { selected: selectedType.includes('Tile') },
            ]"
            @click="toggleSelect('Tile')"
          >
            <div
              v-if="selectedType.includes('Tile')"
              class="selectedDiv h-full w-full from-[20%] absolute bottom-0 left-0 bg-opacity-[.3] z-[1] flex items-start justify-end px-[1vw] py-[1vh]"
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
              placeholder
              loading="eager"
              class="h-full w-full object-cover absolute left-0 bottom-0 z-[-9]"
              src="/pvc/vinyl-tile.webp"
              alt="Tile"
            />
            <span class="text-[3.4vh]">Tile</span>
          </div>
        </div>
        <div class="h-max w-full flex justify-between gap-[2vw] z-[9]">
          <!-- Plank -->
          <!-- DESKTOP -->
          <div
            :class="[
              'h-[28vh] rounded-md  border-[2px] border-[#f1f1f1]  w-full flex items-end justify-between text-[#f1f1f1] px-[1.6vw] py-[.8vh] text-[2.4vh] relative cursor-pointer',
              { selected: selectedType.includes('Plank') },
            ]"
            @click="toggleSelect('Plank')"
          >
            <div
              v-if="selectedType.includes('Plank')"
              class="selectedDiv h-full w-full from-[20%] absolute bottom-0 left-0 bg-opacity-[.3] z-[1] flex items-start justify-end px-[1vw] py-[1vh]"
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
              quality="50"
              placeholder
              preload
              loading="eager"
              class="h-full w-full object-cover absolute left-0 bottom-0 z-[-9]"
              src="/pvc/vinyl-plank.webp"
              alt=""
            />
            <span class="text-[3.4vh]">Plank</span>
          </div>

          <!-- DESKTOP -->
          <!-- Customised -->
          <div
            :class="[
              'h-[28vh] w-full rounded-md  border-[2px] border-[#f1f1f1]  w flex items-end justify-between text-[#f1f1f1] px-[1.6vw] py-[.8vh] text-[2.4vh] relative cursor-pointer',
              { selected: selectedType.includes('Customised') },
            ]"
            @click="toggleSelect('Customised')"
          >
            <div
              v-if="selectedType.includes('Customised')"
              class="selectedDiv h-full w-full from-[20%] absolute bottom-0 left-0 bg-opacity-[.3] z-[1] flex items-start justify-end px-[1vw] py-[1vh]"
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
              quality="50"
              placeholder
              loading="eager"
              class="h-full w-full object-cover absolute left-0 bottom-0 z-[-9]"
              src="/carpets/stripped.webp"
              alt=""
            />
            <!-- DESKTOP -->
            <span class="text-[3.4vh]">Customised</span>
          </div>
        </div>
      </div>
    </div>
  </div>
  <!-- <<<<<<<<<<<<<<<<<<<<<<<<>>>>>>>>>>>>>>>>>>>>> -->
  <!-- <<<<<<<<<<<<<<<<<<<<<<<<>>>>>>>>>>>>>>>>>>>>> -->
  <!-- <<<<<<<<<<<<<<<<<<<<<<<<>>>>>>>>>>>>>>>>>>>>> -->
  <!-- MOBILE -->
  <div
    v-if="userStore.preference.category !== ''"
    class="min-[990px]:hidden h-max w-[96vw] text-center py-[4vh] flex flex-col gap-[1vh] font-outfit font-[400] bg-[#ececec] rounded-md shadow-lg bg-opacity-[.6] px-[3vw]"
  >
    <div
      class="h-max w-full flex items-center justify-between text-[3.4vh] z-[9]"
    >
      <span class="text-left text-balance">Choose Your Type </span>
      <button
        @click="clearAllSelections"
        v-if="selectedType.length"
        class="h-max bg-white text-gray-500 text-clearAllMOB px-[2vw] py-[.8vh] text-[1.8vh] rounded-md flex gap-[1vw] items-center"
      >
        <!-- MOBILE -->
        Clear All<svg
          xmlns="http://www.w3.org/2000/svg"
          width="14"
          height="14"
          viewBox="0 0 24 24"
        >
          <path
            fill="currentColor"
            d="m12 13.4l2.9 2.9q.275.275.7.275t.7-.275t.275-.7t-.275-.7L13.4 12l2.9-2.9q.275-.275.275-.7t-.275-.7t-.7-.275t-.7.275L12 10.6L9.1 7.7q-.275-.275-.7-.275t-.7.275t-.275.7t.275.7l2.9 2.9l-2.9 2.9q-.275.275-.275.7t.275.7t.7.275t.7-.275zm0 8.6q-2.075 0-3.9-.788t-3.175-2.137T2.788 15.9T2 12t.788-3.9t2.137-3.175T8.1 2.788T12 2t3.9.788t3.175 2.137T21.213 8.1T22 12t-.788 3.9t-2.137 3.175t-3.175 2.138T12 22m0-2q3.35 0 5.675-2.325T20 12t-2.325-5.675T12 4T6.325 6.325T4 12t2.325 5.675T12 20m0-8"
          />
        </svg>
      </button>
    </div>
    <div class="h-max w-full flex flex-col gap-[1vh]">
      <div class="h-max w-full flex justify-between gap-[2vw] z-[9]">
        <!-- MOBILE -->
        <!-- Sheet -->
        <div
          :class="[
            'h-[14vh] w-full rounded-md  border-[2px] border-[#f1f1f1]  w flex items-end justify-between text-[#f1f1f1] px-[1.6vw] py-[.8vh] text-[4.6vw]  relative cursor-pointer',
            { selected: selectedType.includes('Sheet') },
          ]"
          @click="toggleSelect('Sheet')"
        >
          <div
            v-if="selectedType.includes('Sheet')"
            class="selectedDiv h-full w-full from-[20%] absolute bottom-0 left-0 bg-opacity-[.3] z-[1] flex items-start justify-end px-[1vw] py-[1vh]"
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
            class="h-full w-full object-cover object-top absolute left-0 bottom-0 z-[-9]"
            src="/pvc/vinyl-sheets.webp"
            alt=""
          />
          <span>Sheet</span>
        </div>

        <!-- MOBILE -->
        <!-- Tile  -->
        <div
          :class="[
            'h-[14vh] w-full rounded-md  border-[2px] border-[#f1f1f1]  w flex items-end justify-between text-[#f1f1f1] px-[1.6vw] py-[.8vh] text-[4.6vw] relative cursor-pointer',
            { selected: selectedType.includes('Tile ') },
          ]"
          @click="toggleSelect('Tile ')"
        >
          <div
            v-if="selectedType.includes('Tile ')"
            class="selectedDiv h-full w-full from-[20%] absolute bottom-0 left-0 bg-opacity-[.3] z-[1] flex items-start justify-end px-[1vw] py-[1vh]"
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
            class="h-full w-full object-cover object-bottom absolute left-0 bottom-0 z-[-9]"
            src="/pvc/vinyl-tile.webp"
            alt=""
          />
          <span>Tile</span>
        </div>
      </div>
      <div class="h-max w-full flex justify-between gap-[2vw] z-[9]">
        <!-- MOBILE -->
        <!-- Plank -->
        <div
          :class="[
            'h-[14vh] rounded-md  border-[2px] border-[#f1f1f1]  w-full flex items-end justify-between text-[#f1f1f1] px-[1.6vw] py-[.8vh] text-[4.6vw]  relative cursor-pointer',
            { selected: selectedType.includes('Plank') },
          ]"
          @click="toggleSelect('Plank')"
        >
          <div
            v-if="selectedType.includes('Plank')"
            class="selectedDiv h-full w-full from-[20%] absolute bottom-0 left-0 bg-opacity-[.3] z-[1] flex items-start justify-end px-[1vw] py-[1vh]"
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
            src="/pvc/vinyl-plank.webp"
            alt=""
          />
          <span>Plank</span>
        </div>

        <!-- MOBILE -->
        <!-- Customized -->
        <div
          :class="[
            'h-[14vh] w-full rounded-md  border-[2px] border-[#f1f1f1]  w flex items-end justify-between text-[#f1f1f1] px-[1.6vw] py-[.8vh] text-[4.6vw]  relative cursor-pointer',
            { selected: selectedType.includes('Customised') },
          ]"
          @click="toggleSelect('Customised')"
        >
          <div
            v-if="selectedType.includes('Customised')"
            class="selectedDiv h-full w-full from-[20%] absolute bottom-0 left-0 bg-opacity-[.3] z-[1] flex items-start justify-end px-[1vw] py-[1vh]"
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
            src="/carpets/stripped.webp"
            alt=""
          />
          <span>Customised</span>
        </div>
      </div>
    </div>

    <!-- MOBILE -->
  </div>
</template>

<script setup>
import { ref } from "vue";

// PINIA
import useUserStore from "../../../../stores/user";
const userStore = useUserStore();
// COOKIES
import { useCookie } from "#app";
import gsap from "gsap";
import Mobile from "~/layouts/Mobile.vue";
import Desktop from "~/layouts/Desktop.vue";
const userPreference = useCookie("userPreference");
const selectedType = ref("");

function clearAllSelections() {
  selectedType.value = "";
  userStore.preference.type = "";
}
function scrollToBottom() {
  setTimeout(() => {
    window.scrollTo({
      top: document.documentElement.scrollHeight,
      behavior: "smooth",
    });
  }, 200);
}
const toggleSelect = (type) => {
  if (selectedType.value === type) {
    selectedType.value = "";
    userStore.preference.type = "";
  } else {
    scrollToBottom();
    selectedType.value = type;
    userStore.preference.type = toRaw(selectedType.value);
  }
};

onMounted(() => {});
</script>

<style scoped>
.selected {
  border-radius: 0px; /* Adjust this value as needed */
  border: 2px solid #333; /* Adjust border color as needed */
}
</style>
