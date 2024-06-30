<template>
  <div v-if="isLoaded" class="h-max w-screen overflow-x-hidden">
    <NavBarMOB />
    <div
      class="h-max w-screen font-outfit flex flex-col items-center gap-[2vh]"
    >
      <!-- R1 - IMAGE-->
      <div
        class="product-image_container h-max w-full flex items-center justify-start px-[4vw]"
      >
        <img
          class="object-cover h-[32vh] w-[98%]"
          :src="`/carpets/${productColor}.jpg`"
          :alt="color"
        />
      </div>
      <!-- R2 - DESCRIPTION -->

      <div
        class="product-desc_container h-max w-full flex flex-col items-start gap-[2vh] mt-[2vh]"
      >
        <div
          class="h-max w-full flex flex-col gap-[1vh] justify-start px-[6vw]"
        >
          <h1 class="text-[2.8vh]">{{ productName }}</h1>
          <h1 class="text-[1.8vh] text-[#333]">{{ productColor }}</h1>
        </div>
        <div class="px-[6vw] flex flex-col gap-[.8vh] items-start">
          <p class="text-[2.vh]">{{ displayedText }}</p>
          <button class="text-[1.8vh] font-[600]" @click="toggleText">
            {{ buttonText }}
          </button>
        </div>
      </div>
      <!-- R3 - PRICE -->
      <div class="h-max w-screen flex items-center justify-between">
        <div
          class="checkBox_container flex items-center justify-center h-max w-max px-[6vw] gap-[2vw]"
        >
          <input type="checkbox" id="bookHomeMeasure" />
          <label class="text-[1.8vh]" for="bookHomeMeasure"
            >Book Home Measure</label
          >
        </div>
        <div
          class="price-details_container h-max w-max flex flex-col gap-[.2vh] items-end px-[6vw]"
        >
          <h1 class="text-[3vh]">
            BHD&nbsp;{{ Math.floor(productPrice * 0.48) }}
          </h1>
          <span class="text-[1.8vh] text-[#555]">Excluding VAT</span>
        </div>
      </div>
      <!-- R4 - ACTION BTN -->

      <div
        class="actionBtn-container h-max w-screen flex justify-center gap-[4vw]"
      >
        <button
          @click="() => openWhatsApp('918943564762', productLink)"
          class="py-[2.8vh] px-[4.8vw] shadow-lg w-[44%] bg-[#ececec] text-black text-[2vh] rounded-md"
        >
          ENQUIRE BY WHATSAPP
        </button>
        <button
          class="py-[2.8vh] px-[4.8vw] w-[44%] bg-black text-white text-[2vh] rounded-md shadow-lg"
        >
          ENQUIRE BY <br />
          EMAIL
        </button>
      </div>
      <!-- R5 -->
      <div
        class="measurementSection_container h-max w-screen flex items-center justify-center py-[4vh] px-[4vw]"
      >
        <div
          class="h-max w-full flex flex-col gap-[2vh] bg-[#f1f1f1] py-[4vh] px-[4vw] rounded-md"
        >
          <div class="h-max w-screen flex justify-start px-[4vw] text-[3.2vh]">
            <span>Area Calculator</span>
          </div>
          <div
            class="h-max w-screen flex gap-[4vw] items-center justify-start px-[4vw]"
          >
            <label for="sqft"
              >Enter Your Area <br />
              in Square Feet:</label
            >
            <input
              class="h-[8vh] px-[1vw] w-[24vw] text-center border-[1px] rounded-md border-black bg-inherit [appearance:textfield] [&::-webkit-outer-spin-button]:appearance-none [&::-webkit-inner-spin-button]:appearance-none"
              id="sqft"
              v-model.number="sqFeet"
              type="number"
              placeholder="Square Feet"
            />
          </div>

          <div class="h-max w-screen px-[4vw] pt-[4vh] flex justify-start">
            <p>Total Cost: BHD {{ totalPrice }}</p>
          </div>
        </div>
      </div>
    </div>

    <FooterMOB />
  </div>
  <div
    v-else
    class="h-[70vh] w-screen flex flex-col items-center justify-center"
  >
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
</template>

<script setup>
import { useRoute } from "vue-router";
import { ref, onMounted } from "vue";

import NavBarMOB from "~/components/MOBILE/NavBarMOB.vue";
import FooterMOB from "~/components/MOBILE/FooterMOB.vue";

const client = useSupabaseClient();
const route = useRoute();
const productId = route.params.id;

const isLoaded = ref(false);

// Reactive variables
const sqFeet = ref(0);
const currency = ref("$"); // Example currency

const productName = ref("");
const productLink = ref("");
const productColor = ref("");
const productPrice = ref("");
const productCurrency = ref("");

const fullText =
  "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent consequat metus a augue commodo, eget varius nisl sagittis. Fusce gravida massa nec enim pulvinar, ac venenatis turpis lacinia. Nullam tempor, tortor nec consectetur egestas, urna odio scelerisque orci, ut egestas erat quam nec felis. Donec laoreet metus at felis ultrices, id vehicula metus varius. Maecenas a ligula metus. Phasellus a posuere mauris. Nulla facilisi. Cras et nunc tincidunt, volutpat quam eget, posuere nulla. Vestibulum at facilisis purus. Cras auctor, eros nec iaculis blandit, quam purus lacinia sem, et scelerisque libero orci ac dui. Pellentesque in enim euismod, sagittis enim id, viverra leo.";

const truncatedText = fullText.split(" ").slice(0, 20).join(" ") + "...";
const fullDisplayText = fullText.split(" ").slice(0, 50).join(" ") + "...";

const isExpanded = ref(false);

const displayedText = computed(() =>
  isExpanded.value ? fullText : truncatedText
);
const buttonText = computed(() =>
  isExpanded.value ? "View Less" : "View More"
);

function toggleText() {
  isExpanded.value = !isExpanded.value;
}

function generateWhatsAppLink(phone, message) {
  const encodedMessage = encodeURIComponent(message);
  return `https://api.whatsapp.com/send?phone=${phone}&text=${encodedMessage}`;
}
function openWhatsApp(phone, message) {
  const link = generateWhatsAppLink(phone, message);
  window.open(link, "_blank"); // Opens link in a new window/tab
}
async function fetchProductDetails(id) {
  console.log(`Fetching details for product ID: ${id}`);

  try {
    const { data, error } = await client
      .from("carpets")
      .select("name, link, color, price, currency")
      .eq("id", id)
      .single(); // Ensure that only one record is fetched

    if (error) throw error;

    console.log(`Product details for ID ${id}:`, data);

    productName.value = data.name;
    productLink.value = data.link;
    productColor.value = data.color;
    productPrice.value = data.price;
    productCurrency.value = data.currency;
    isLoaded.value = true;
  } catch (error) {
    console.error(`Error fetching details for product ID ${id}:`, error);
    return null;
  }
}

// Computed property for total price
const totalPrice = computed(() => {
  const bhdPrice = productPrice.value * 0.48;
  return Math.floor(sqFeet.value * bhdPrice);
});
// Fetch product details based on the productId
onMounted(() => {
  fetchProductDetails(productId);
});
</script>

<style>
.font-outfit {
  font-family: "Outfit", sans-serif;
  font-optical-sizing: auto;
  font-style: normal;
}
</style>
