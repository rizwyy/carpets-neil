<script setup>
// COMPONENTS IMPORTS
import Mobile from "./../../../layouts/Mobile.vue";
import Desktop from "./../../../layouts/Desktop.vue";
import NavBarMOB from "~/components/MOBILE/NavBarMOB.vue";
import CatalogItemMOB from "../../../components/MOBILE/FLOORING/CatalogItemMOB.vue";
import CatalogItemPC from "../../../components/DESKTOP/CatalogItemPC.vue";
import Unavailable from "./../../../components/MOBILE/Unavailable.vue";
// PACKAGES
import { useRouter } from "vue-router";
// PINIA
import useUserStore from "../../../stores/user";
const userStore = useUserStore();
// SUPABASE
const client = useSupabaseClient();
// REACTIVES
const restrictedAccess = useCookie("restrictedAccess");
const products = ref([]); // Create a ref variable
const isLoading = ref(true);
const isRetry = ref(false);

const isAccessRestricted = ref(false);
const route = useRoute();
const router = useRouter();

//
function shuffleArray(array) {
  const newArray = [...array]; // Create a copy of the original array
  for (let i = newArray.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [newArray[i], newArray[j]] = [newArray[j], newArray[i]];
  }
  return newArray;
}

async function fetchCarpetsData() {
  try {
    const { data, error } = await client
      .from("carpets")
      .select("id,name, link, color, price, currency");

    if (error) throw error;

    console.log("SUPABASE:", data);

    // Store data in userStore and ref variable
    userStore.products = data;
    products.value = shuffleArray(data);
    isLoading.value = false; // Set loading state to false
  } catch (error) {
    console.error("Error during fetch:", error);
    isLoading.value = false; // Set loading state to false
    isRetry.value = true; // Set retry state to true
    return null;
  }
}
onMounted(() => {
  if (restrictedAccess.value || typeof restrictedAccess.value === "undefined") {
    isAccessRestricted.value = true;
  } else {
    isAccessRestricted.value = false;
    fetchCarpetsData();
  }
});
</script>

<template>
  <section class="max-[990px]:hidden h-max w-max">
    <div class="h-max w-screen overflow-x-hidden max-w-[98vw] font-outfit">
      <div class="h-max px-[2vw] text-[6vh] w-screen py-[6vh] px-[6vw]">
        <h1>Catalog</h1>
      </div>
      <div
        v-if="isLoading"
        class="h-[70vh] w-screen flex flex-col items-center justify-center"
      >
        Getting Your Options
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="42"
          height="42"
          viewBox="0 0 24 24"
        >
          <circle cx="18" cy="12" r="0" fill="currentColor">
            <animate
              attributeName="r"
              begin=".67"
              calcMode="spline"
              dur="1.5s"
              keySplines="0.2 0.2 0.4 0.8;0.2 0.2 0.4 0.8;0.2 0.2 0.4 0.8"
              repeatCount="indefinite"
              values="0;2;0;0"
            />
          </circle>
          <circle cx="12" cy="12" r="0" fill="currentColor">
            <animate
              attributeName="r"
              begin=".33"
              calcMode="spline"
              dur="1.5s"
              keySplines="0.2 0.2 0.4 0.8;0.2 0.2 0.4 0.8;0.2 0.2 0.4 0.8"
              repeatCount="indefinite"
              values="0;2;0;0"
            />
          </circle>
          <circle cx="6" cy="12" r="0" fill="currentColor">
            <animate
              attributeName="r"
              begin="0"
              calcMode="spline"
              dur="1.5s"
              keySplines="0.2 0.2 0.4 0.8;0.2 0.2 0.4 0.8;0.2 0.2 0.4 0.8"
              repeatCount="indefinite"
              values="0;2;0;0"
            />
          </circle>
        </svg>
      </div>
      <div v-else class="mx-auto w-[80vw] h-max">
        <div class="h-max w-full grid grid-cols-3 gap-x-[8vw] gap-y-[4vh]">
          <a
            v-for="item in products"
            :key="item.id"
            :href="`product/${item.id}`"
          >
            <CatalogItemPC
              :name="item.name"
              :price="item.price"
              :currency="item.currency"
              :color="item.color"
            />
          </a>
        </div>
        <div class="h-max max-w-screen flex justify-center py-[10vh]">
          <button class="text-[2.4vh] border-b-[1px] border-black">
            VIEW MORE
          </button>
        </div>
      </div>
    </div>
  </section>
  <section class="min-[990px]:hidden h-max w-max font-outfit bg-white z-[-1]">
    <NavBarMOB />
    <div v-if="isAccessRestricted" class="h-screen w-screen">
      <Unavailable />
    </div>
    <div
      v-else-if="isRetry"
      class="h-[88vh] w-screen bg-[#f1f1f1] flex items-center flex-col gap-[3vh] text-[4.2vh] px-[4vw] justify-center"
    >
      <span>Something went wrong!</span>
      <a
        href="/flooring/carpets/catalog"
        class="rounded-md px-[8vw] shadow-2xl py-[1.8vh] text-[3.2vh] text-[#f1f1f1] font-outfit bg-[#2563eb]"
      >
        Reload
      </a>
    </div>
    <div v-else class="h-screen w-screen font-outfit">
      <div
        v-if="isLoading"
        class="h-[70vh] w-screen flex flex-col items-center justify-center"
      >
        Getting Your Options
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="42"
          height="42"
          viewBox="0 0 24 24"
        >
          <circle cx="18" cy="12" r="0" fill="currentColor">
            <animate
              attributeName="r"
              begin=".67"
              calcMode="spline"
              dur="1.5s"
              keySplines="0.2 0.2 0.4 0.8;0.2 0.2 0.4 0.8;0.2 0.2 0.4 0.8"
              repeatCount="indefinite"
              values="0;2;0;0"
            />
          </circle>
          <circle cx="12" cy="12" r="0" fill="currentColor">
            <animate
              attributeName="r"
              begin=".33"
              calcMode="spline"
              dur="1.5s"
              keySplines="0.2 0.2 0.4 0.8;0.2 0.2 0.4 0.8;0.2 0.2 0.4 0.8"
              repeatCount="indefinite"
              values="0;2;0;0"
            />
          </circle>
          <circle cx="6" cy="12" r="0" fill="currentColor">
            <animate
              attributeName="r"
              begin="0"
              calcMode="spline"
              dur="1.5s"
              keySplines="0.2 0.2 0.4 0.8;0.2 0.2 0.4 0.8;0.2 0.2 0.4 0.8"
              repeatCount="indefinite"
              values="0;2;0;0"
            />
          </circle>
        </svg>
      </div>

      <div v-else class="container h-max w-full px-[2vw]">
        <div class="grid grid-cols-2 gap-[4vw] w-full">
          <a
            v-for="item in products"
            :key="item.id"
            :href="`product/${item.id}`"
          >
            <CatalogItemMOB
              :name="item.name"
              :price="item.price"
              :currency="item.currency"
              :color="item.color"
            />
          </a>
        </div>
        <div class="h-max max-w-screen flex justify-center py-[10vh]">
          <button class="text-[2.4vh] border-b-[1px] border-black">
            VIEW MORE
          </button>
        </div>
      </div>
    </div>
  </section>
</template>

<style scoped>
.font-outfit {
  font-family: "Outfit", sans-serif;
  font-optical-sizing: auto;
  font-style: normal;
}
</style>
