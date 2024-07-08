<template>
  <!-- DESKTOP -->
  <NavBarPC />
  <section
    class="max-[990px]:hidden h-max min-h-screen max-w-screen overflow-x-hidden bg-[#f1f1f1] px-[6vw]"
  >
    <div class="h-full w-full flex">
      <!-- LAYOUT -->
      <!-- R1 -->
      <div class="h-full w-[40%] pl-[4vw] pt-[1vh] bg-[#fff] rounded-md">
        <NuxtImg
          quality="100"
          loading="eager"
          class="object-contain h-[72vh] w-[100%]"
          :src="`/carpets/${productColor}.jpg`"
          :alt="color"
        />
      </div>
      <!-- R2 -->
      <div
        class="h-full w-[60%] flex flex-col pt-[6.2vh] justify-between items-start"
      >
        <div
          class="h-max w-full flex justify-between items-center px-[6vw] py-[4vh]"
        >
          <h1 class="text-[3.8vh]">{{ productName }}</h1>
          <h1 class="text-[2.4vh] tracking-[.2vw] text-[#333]">
            {{ productColor }}
          </h1>
        </div>
        <div class="h-max w-full px-[6vw] flex flex-col gap-[.8vh] items-start">
          <p class="text-[2.8vh] text-[#333]">{{ displayedText }}</p>
          <button class="text-[1.8vh] font-[600]" @click="toggleText">
            {{ buttonText }}
          </button>
        </div>
        <!-- LEAD TIME -->
        <div
          class="h-max w-full flex justify-start items-center px-[6vw] py-[4vh] border-y-[#ececec] border-y-[.2vh]"
        >
          <div class="h-max w-max flex flex-col flex-[1.5]">
            <span class="text-[2.4vh]">Project Lead Time</span>
            <span
              v-if="selectLeadMsg"
              class="selectLeadTimeMsg text-[1.8vh] font-[600] text-red-500 flex items-center gap-[.4vw]"
              ><svg
                xmlns="http://www.w3.org/2000/svg"
                width="18"
                height="18"
                viewBox="0 0 24 24"
              >
                <path
                  fill="currentColor"
                  d="M15.73 3H8.27L3 8.27v7.46L8.27 21h7.46L21 15.73V8.27zM19 14.9L14.9 19H9.1L5 14.9V9.1L9.1 5h5.8L19 9.1z"
                />
                <path fill="currentColor" d="M11 7h2v6h-2zm0 8h2v2h-2z" /></svg
              >Please Select Lead Time</span
            >
          </div>
          <select
            v-model="selectedOption"
            @change="updateLeadTime"
            class="block flex-[1] w-[40vw] px-[2vw] h-[6vh] border border-black rounded-md shadow-sm focus:outline-none focus:border-blue-500"
          >
            <option value="now">ASAP (If Available)</option>
            <option value="sixToEightWeeks">
              6 - 8 Weeks (Made on Demand)
            </option>
          </select>
        </div>
        <!-- ACTION BUTTONS -->
        <div
          class="actionBtn-container h-max w-max px-[6vw] flex justify-between py-[4vh] border-b-[#ececec] border-b-[.2vh]"
        >
          <button
            @click="
              () =>
                openWhatsApp(
                  '97333008801',
                  `Hi, I would like to order ${productName} ${
                    leadTime === 'now'
                      ? 'As Soon As Possible'
                      : 'Within 6 to 8 Weeks'
                  }                                                              ${productLink}`
                )
            "
            class="py-[2.8vh] relative px-[4.8vw] active:scale-[.95] shadow-lg w-[44%] bg-[#fff] font-[500] text-black text-[2vh] rounded-md"
          >
            ENQUIRE BY WHATSAPP
          </button>
          <button
            @click="
              () =>
                openEmail(
                  '97333008801',
                  `Order`,
                  `Hi, I would like to order the product:${productName}  ${
                    leadTime === 'now'
                      ? 'As Soon As Possible'
                      : 'Within 6 to 8 Weeks'
                  }                                                                 ${productLink}`
                )
            "
            class="py-[2.8vh] relative px-[4.8vw] active:scale-[.95] w-[44%] bg-black text-white text-[2vh] rounded-md shadow-lg"
          >
            ENQUIRE BY <br />
            EMAIL
          </button>
        </div>
        <!-- AREA CALCULATOR -->

        <!-- <div
          class="measurementSection_container h-max w-max flex items-center justify-center py-[vh] my-[4vh] px-[0vw] rounded-md px-[6vw]"
        >
          <div
            class="h-max w-full flex flex-col gap-[2vh] bg-white py-[3.2vh] pr-[2vw] rounded-md"
          >
            <div class="h-max w-max flex justify-start px-[4vw] text-[3.8vh]">
              <span>Area Calculator</span>
            </div>
            <div
              class="h-max w-max flex gap-[4vw] items-center justify-start px-[4vw]"
            >
              <label class="text-[2.8vh]" for="sqft"
                >Enter Your Area <br />
                in Square Feet:</label
              >
              <input
                class="h-[8vh] px-[1vw] w-[24vw] text-center border-[1px] rounded-md border-[#333] bg-inherit [appearance:textfield] [&::-webkit-outer-spin-button]:appearance-none [&::-webkit-inner-spin-button]:appearance-none"
                id="sqft"
                v-model.number="sqFeet"
                type="number"
                placeholder="Square Feet"
              />
            </div>

            <div
              class="h-max w-max text-[2.8vh] px-[4vw] pt-[4vh] flex justify-start"
            >
              <p>Total Cost: BHD {{ totalPrice }}</p>
            </div>
          </div>
        </div> -->
      </div>
    </div>
  </section>
  <FooterPC />
  <!-- MOBILE -->
  <section class="min-[990px]:hidden h-max w-max">
    <div v-if="isLoaded" class="h-max w-screen overflow-x-hidden">
      <NavBarMOB />
      <div
        class="h-max w-screen font-outfit flex flex-col items-center gap-[2vh]"
      >
        <!-- R1 - IMAGE-->
        <div
          class="product-image_container h-max w-full flex items-center justify-start px-[0vw]"
        >
          <NuxtImg
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
        <div class="h-max w-screen flex items-center justify-end">
          <!-- <div
            class="checkBox_container flex items-center justify-center h-max w-max px-[6vw] gap-[2vw]"
          >
            <input type="checkbox" id="bookHomeMeasure" />
            <label class="text-[1.8vh]" for="bookHomeMeasure"
              >Book Home Measure</label
            >
          </div> -->
          <!-- <div
            class="price-details_container h-max w-max flex flex-col gap-[.2vh] items-end px-[6vw]"
          >
            <h1 class="text-[3vh]">
              BHD&nbsp;{{ Math.floor(productPrice * 0.48) }}
            </h1>
            <span class="text-[1.8vh] text-[#555]">Excluding VAT</span>
          </div> -->
        </div>
        <div class="h-max w-screen flex flex-col">
          <!-- LEAD TIME -->
          <div
            class="h-max w-screen flex justify-start items-center px-[6vw] py-[4vh] border-y-[#ececec] border-y-[.2vh]"
          >
            <div class="h-max w-max flex flex-col flex-[1.5]">
              <span class="text-[2.4vh]">Project Lead Time</span>
              <span
                v-if="selectLeadMsg"
                class="selectLeadTimeMsg text-[1.8vh] font-[600] text-red-500 flex items-center gap-[.4vw]"
                ><svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="18"
                  height="18"
                  viewBox="0 0 24 24"
                >
                  <path
                    fill="currentColor"
                    d="M15.73 3H8.27L3 8.27v7.46L8.27 21h7.46L21 15.73V8.27zM19 14.9L14.9 19H9.1L5 14.9V9.1L9.1 5h5.8L19 9.1z"
                  />
                  <path
                    fill="currentColor"
                    d="M11 7h2v6h-2zm0 8h2v2h-2z"
                  /></svg
                >Please Select Lead Time</span
              >
            </div>
            <select
              v-model="selectedOption"
              @change="updateLeadTime"
              class="block flex-[1] w-[40vw] px-[2vw] h-[6vh] border border-black rounded-md shadow-sm focus:outline-none focus:border-blue-500"
            >
              <option value="now">ASAP (If Available)</option>
              <option value="sixToEightWeeks">
                6 - 8 Weeks (Made on Demand)
              </option>
            </select>
          </div>
          <!-- R4 - ACTION BTN -->

          <div
            class="actionBtn-container h-max w-screen flex justify-center gap-[4vw] py-[4vh] border-b-[#ececec] border-b-[.2vh]"
          >
            <button
              @click="
                () =>
                  openWhatsApp(
                    '97333008801',
                    `Hi, I would like to order ${productName} ${
                      leadTime === 'now'
                        ? 'As Soon As Possible'
                        : 'Within 6 to 8 Weeks'
                    }                                                              ${productLink}`
                  )
              "
              class="py-[2.8vh] relative px-[4.8vw] active:scale-[.95] shadow-lg w-[44%] bg-[#ececec] text-black text-[2vh] rounded-md"
            >
              ENQUIRE BY WHATSAPP
            </button>
            <button
              @click="
                () =>
                  openEmail(
                    '97333008801',
                    `Order`,
                    `Hi, I would like to order the product:${productName}  ${
                      leadTime === 'now'
                        ? 'As Soon As Possible'
                        : 'Within 6 to 8 Weeks'
                    }                                                                 ${productLink}`
                  )
              "
              class="py-[2.8vh] relative px-[4.8vw] active:scale-[.95] w-[44%] bg-black text-white text-[2vh] rounded-md shadow-lg"
            >
              ENQUIRE BY <br />
              EMAIL
            </button>
          </div>
        </div>
        <!-- R5 -->
        <!-- <div
          class="measurementSection_container h-max w-screen flex items-center justify-center py-[0vh] px-[4vw]"
        >
          <div
            class="h-max w-full flex flex-col gap-[2vh] py-[3.2vh] pl-[0vw] pr-[4vw] rounded-md"
          >
            <div
              class="h-max w-screen flex justify-start px-[4vw] text-[3.2vh]"
            >
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
                class="h-[8vh] px-[1vw] w-[24vw] text-center border-[1px] rounded-md border-[#333] bg-inherit [appearance:textfield] [&::-webkit-outer-spin-button]:appearance-none [&::-webkit-inner-spin-button]:appearance-none"
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
        </div> -->
      </div>
      <div class="h-max w-max border-b-[#ececec] border-b-[.2vh] py-[4vh]">
        <PriceTiers />
      </div>
      <FooterMOB />
    </div>
    <div
      v-else
      class="h-[90vh] w-screen flex flex-col items-center justify-center"
    >
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="48"
        height="48"
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
  </section>
</template>

<script setup>
import { useRoute } from "vue-router";
import { ref, onMounted } from "vue";

import FooterPC from "~/components/DESKTOP/FooterPC.vue";
import NavBarMOB from "~/components/MOBILE/NavBarMOB.vue";
import FooterMOB from "~/components/MOBILE/FooterMOB.vue";
import NavBarPC from "~/components/DESKTOP/NavBarPC.vue";
import PriceTiers from "~/components/MOBILE/FLOORING/PriceTiers.vue";

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

const selectLeadMsg = ref(false);

const fullText =
  "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent consequat metus a augue commodo, eget varius nisl sagittis. Fusce gravida massa nec enim pulvinar, ac venenatis turpis lacinia. Nullam tempor, tortor nec consectetur egestas, urna odio scelerisque orci, ut egestas erat quam nec felis. Donec laoreet metus at felis ultrices, id vehicula metus varius. Maecenas a ligula metus. Phasellus a posuere mauris. Nulla facilisi. Cras et nunc tincidunt, volutpat quam eget, posuere nulla. Vestibulum at facilisis purus. Cras auctor, eros nec iaculis blandit, quam purus lacinia sem, et scelerisque libero orci ac dui. Pellentesque in enim euismod, sagittis enim id, viverra leo.";

const truncatedText = fullText.split(" ").slice(0, 20).join(" ") + "...";

const isExpanded = ref(false);
// Initialize ref variables
const selectedOption = ref("option1");
const leadTime = ref(null);
const IsleadTimeInputed = ref(false);
const displayedText = computed(() =>
  isExpanded.value ? fullText : truncatedText
);
const buttonText = computed(() =>
  isExpanded.value ? "View Less" : "View More"
);

// Method to update leadTime
function updateLeadTime() {
  leadTime.value = selectedOption.value;
  if (toRaw(leadTime.value) === "sixToEightWeeks" || "now") {
    IsleadTimeInputed.value = true;
    selectLeadMsg.value = false;
  } else {
    IsleadTimeInputed.value = true;
  }
}

function toggleText() {
  isExpanded.value = !isExpanded.value;
}

function generateWhatsAppLink(phone, message) {
  const encodedMessage = encodeURIComponent(message);
  return `https://api.whatsapp.com/send?phone=${phone}&text=${encodedMessage}`;
}
function openWhatsApp(phone, message) {
  if (toRaw(!IsleadTimeInputed.value)) {
    selectLeadMsg.value = true;
    return;
  } else {
    const link = generateWhatsAppLink(phone, message);
    window.open(link, "_blank"); // Opens link in a new window/tab
  }
}
function generateEmailLink(email, subject, body) {
  const encodedSubject = encodeURIComponent(subject);
  const encodedBody = encodeURIComponent(body);
  return `mailto:${email}?subject=${encodedSubject}&body=${encodedBody}`;
}

function openEmail(email, subject, body) {
  if (toRaw(!IsleadTimeInputed.value)) {
    selectLeadMsg.value = true;
    return;
  } else {
    const link = generateEmailLink(email, subject, body);
    window.open(link, "_blank"); // Opens link in a new window/tab
  }
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
