<script setup>
// COMPONENTS IMPORTS
import Mobile from "./../../../layouts/Mobile.vue";
import Desktop from "./../../../layouts/Desktop.vue";

import CatalogItemMOB from "../../../components/MOBILE/FLOORING/CatalogItemMOB.vue";
import CatalogItemPC from "../../../components/DESKTOP/CatalogItemPC.vue";
// PACKAGES
// PINIA
import useUserStore from "../../../stores/user";
const userStore = useUserStore();
// SUPABASE
const client = useSupabaseClient();
// REACTIVES
const cookieData = ref([]);
const products = ref([]); // Create a ref variable
const isLoading = ref(true);
const isRetry = ref(true);
const route = useRoute();

//

async function fetchCarpetsData() {
  console.log("start");

  try {
    const { data, error } = await client
      .from("carpets")
      .select(
        "product_name, product_link, product_colour, product_price, product_currency"
      );

    if (error) throw error;

    console.log("DATA KITTY::", data);

    // Store data in userStore and ref variable
    userStore.products = data;
    products.value = data;
    isLoading.value = false; // Set loading state to false
  } catch (error) {
    console.error("Error during fetch:", error);
    isRetry.value = true; // Set retry state to true
    isLoading.value = false; // Set loading state to false
    console.log("end");
    return null;
  }
}
onMounted(() => {
  fetchCarpetsData();
});
</script>

<template>
  <Desktop>
    <div class="h-max px-[2vw] text-[6vh] w-screen py-[4vh]">
      <h1>Catalog</h1>
    </div>
    <button @click="fetchCarpetsData" v-show="isRetry">RETRY</button>
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
    <div v-else class="mx-auto w-[60vw] h-max">
      <div class="h-max w-full grid grid-cols-4 gap-x-[8vw] gap-y-[4vh]">
        <CatalogItemPC
          v-for="item in products"
          :name="item.product_name"
          :price="item.product_price"
          :key="item.product_name"
          :currency="item.product_currency"
          :color="item.product_colour"
        />
      </div>
    </div>
  </Desktop>
  <Mobile>
    <div class="h-screen w-screen">
      <div class="h-max px-[2vw] text-[6vh] w-screen py-[4vh]">
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

      <div v-else class="container h-max w-full px-[2vw]">
        <div class="grid grid-cols-2 gap-[4vw] w-full">
          <div
            v-for="item in items"
            :key="item.id"
            class="bg-gray-200 p-4 border rounded text-center"
          >
            {{ item.name }}
          </div>
          <CatalogItemMOB
            v-for="item in products"
            :name="item.product_name"
            :price="item.product_price"
            :key="item.product_name"
            :currency="item.product_currency"
            :color="item.product_colour"
          />
        </div>
      </div>
    </div>
  </Mobile>
</template>

<style scoped>
.font-outfit-300 {
  font-family: "Outfit", sans-serif;
  font-optical-sizing: auto;
  font-weight: 300;
  font-style: normal;
}
.font-outfit-400 {
  font-family: "Outfit", sans-serif;
  font-optical-sizing: auto;
  font-weight: 400;
  font-style: normal;
}
.font-outfit-500 {
  font-family: "Outfit", sans-serif;
  font-optical-sizing: auto;
  font-weight: 500;
  font-style: normal;
}
</style>
