<template>
  <Mobile>
    <div>
      <div class="h-max w-full px-[4vw] py-[4vh] font-outfit-400 text-[4vh]">
        Provide Your Details
      </div>
      <form class="h-max w-screen flex flex-col gap-[4vh] font-outfit-400">
        <div
          class="h-max w-screen px-[4vw] flex flex-col justify-start gap-[.8vh]"
        >
          <label for="userName">Name</label>
          <input
            name="userName"
            class="h-[6vh] py-[1vh] w-full border-[1px] rounded-md border-[#777] px-[2vw]"
            type="text"
            placeholder="Enter your Name"
          />
        </div>
        <div
          class="h-max w-screen px-[4vw] flex flex-col justify-start gap-[.8vh]"
        >
          <label for="email">Email</label>
          <input
            name="email"
            class="h-[6vh] py-[1vh] w-full border-[1px] rounded-md border-[#777] px-[2vw]"
            type="email"
            placeholder="Enter your Best Email"
          />
        </div>
        <div
          class="h-max w-screen px-[4vw] flex flex-col justify-start gap-[.8vh]"
        >
          <label for="phone">Phone</label>
          <input
            name="phone"
            class="h-[6vh] py-[1vh] w-full border-[1px] rounded-md border-[#777] px-[2vw]"
            type="number"
            placeholder="Enter your Phone Number"
          />
        </div>

        <div
          class="h-max bg-[#f1f1f1] w-[94vw] shadow-md rounded-md mx-auto overflow-hidden px-[4vw] flex flex-col items-center py-[2vh] gap-[1vh]"
        >
          <transition name="fade">
            <div
              v-if="!isChecked"
              class="h-max w-full flex flex-col justify-start gap-[.8vh]"
            >
              <label for="qty">Quantity</label>
              <div
                class="h-max w-full justify-start flex items-center gap-[2vw]"
              >
                <input
                  name="qty"
                  class="[appearance:textfield] [&::-webkit-outer-spin-button]:appearance-none [&::-webkit-inner-spin-button]:appearance-none h-[6vh] text-[2vh] w-[50%] border-[1px] border-[#777] px-[2vw] rounded-md"
                  type="number"
                  placeholder="Enter your Quantity"
                />
                <span>sq/ft</span>
              </div>
            </div>
            <div
              v-else
              class="h-max w-full flex flex-col gap-[1vh] items-start"
            >
              <label for="siteAddress">Site Address</label>
              <input
                name="siteAddress"
                class="h-[6vh] text-[2vh] py-[1vh] w-full border-[1px] rounded-md border-[#777] px-[2vw]"
                v-show="isChecked"
                type="text"
                placeholder="Enter your Site Address"
              />
            </div>
          </transition>
          <div class="h-max w-full flex items-center gap-[2vw]">
            <input
              @input="clickAtCheckBox"
              name="checkBox"
              type="checkbox"
              id="option1"
              value="Measure your area for Free?"
            />
            <label class="text-[2vh]" for="checkBox"
              >Measure your area for Free?</label
            >
          </div>
        </div>
        <a
          :href="`/carpets/${$route.params.model}/${$route.params.yarn}/catalog`"
          class="h-[8vh] flex items-center justify-center border-[1px] rounded-md border-[#999] w-[92vw] fixed bottom-[2vh] left-[50%] translate-x-[-50%] bg-[#f1f1f1] mx-auto rounded-md text-[4.4vw]"
        >
          <span>SUBMIT</span>
        </a>
      </form>
    </div>
  </Mobile>
  <Desktop>
    <div class="h-max w-screen">
      <!-- <p>hi</p>
      <p v-for="item in userStore.products" :key="item">{{ item.name }}</p>
      <p v-for="item in userStore.products" :key="item">{{ item.price }}</p>
      <img
        v-for="item in userStore.products"
        :key="item"
        :src="item.img"
        :alt="item.name"
      /> -->
    </div>
  </Desktop>
</template>

<script setup>
// PACKAGES
import cheerio from "cheerio";

// COOKIES
import { useCookie } from "#app";
const myCookie = useCookie("myCookieName");

// LAYOUTS
import Mobile from "~/layouts/Mobile.vue";
import Desktop from "~/layouts/Desktop.vue";

// PINIA
import useUserStore from "./../../../../stores/user";
const userStore = useUserStore();

// REACTIVES & CONSTANTS
const bodyContent = ref("");
const isChecked = ref(false);

const product = { name: "", price: "", link: "", img: "" };

// FUNCTIONS
const setCookie = () => {
  console.log("setCookie() starting");
  myCookie.value = toRaw(userStore.products);
  console.log("Cookie set:", toRaw(myCookie.value));
};

function extractBodyContent(htmlString) {
  console.log("extractBodyContent() starting");
  if (!htmlString) {
    console.error("HTML string is empty or null");
    return null;
  }

  // Use regular expressions to extract content between <body> and </body>
  const bodyRegex = /<body[^>]*>[\s\S]*?<\/body>/i; // Use non-greedy matching with ? to match the first occurrence
  const match = htmlString.match(bodyRegex);

  if (match) {
    // Return the matched content
    const content = match[0];
    bodyContent.value = content;
  } else {
    console.error("No <body> tag found in the HTML string");
    return null;
  }
}

async function scrape(retries = 3) {
  try {
    console.log("scrape() starting");
    const response = await fetch("/api/proxy");

    // Check if the fetch was successful
    if (!response.ok) {
      throw new Error(`HTTP error! status: ${response.status}`);
    }

    const htmlString = await response.text();
    extractBodyContent(htmlString);

    const $ = cheerio.load(bodyContent.value);
    const $p = $("h2 a"); //element containing name and link
    const $c = $("span.woocommerce-Price-amount bdi"); //element containing price and currency details
    const $i = $("a.woocommerce-LoopProduct-link img.woo-entry-image-main");
    console.log($i.eq(0).attr("data-src"));

    for (let i = 0; i < $p.length; i++) {
      const nameData = $p[i].children[0].data;
      const priceData = $c[i].children[1].data;
      const linkData = $p[i].attribs.href;
      const imgData = $i.eq(i).attr("data-src");

      const product = {
        name: nameData,
        price: priceData,
        link: linkData,
        img: imgData,
      }; // Create a new product object
      userStore.products.push(product); // Add the product object to the array
    }

    console.log(userStore.products);
    setCookie();
  } catch (error) {
    console.error("An error occurred during the scrape process:", error);

    // Retry mechanism
    if (retries > 0) {
      console.log(`Retrying... attempts left: ${retries}`);
      await scrape(retries - 1);
    } else {
      console.error(
        "Max retries reached. Could not complete the scrape process."
      );
    }
  }
}

function clickAtCheckBox() {
  isChecked.value = !isChecked.value;
  console.log("click", isChecked.value);
}

// FUNCTION CALLS
scrape();
</script>
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
.fade-enter-active,
.fade-leave-active {
  transition: ease-in-out 0.4s;
}
.fade-enter-from,
.fade-leave-to {
  visibility: hidden;
  display: none;

  opacity: 0;
  transform: translateX(-20%);
}
</style>
font-outfit-340
