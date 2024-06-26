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
const productsCookieData = useCookie("productsCookieData");

// LAYOUTS
import Mobile from "~/layouts/Mobile.vue";
import Desktop from "~/layouts/Desktop.vue";

// PINIA
import useUserStore from "./../../../../stores/user";
const userStore = useUserStore();

// REACTIVES & CONSTANTS
const bodyContent = ref("");
const isChecked = ref(false);

// const products = [];
// const productNames = ref([]);
// const productPrices = ref([]);
// const productLinks = ref([]);
// const productImgLinks = ref([]);
// const product = { name: "", price: "", link: "", img: "" };

// FUNCTIONS
// const setCookie = () => {
//   console.log("setCookie() starting");
//   productsCookieData.value = toRaw(userStore.products);
//   console.log("Cookie set:", toRaw(productsCookieData.value));
// };
// function scriptRemover(htmlString) {
//   return htmlString.replace(
//     /<script\b[^<]*(?:(?!<\/script>)<[^<]*)*<\/script>/gi,
//     ""
//   );
// }
// function removeGenericPageHeader(htmlString) {
//   return htmlString.replace(
//     /<div id="GenericPageHeader"[^>]*>[\s\S]*?<\/div>/gi,
//     ""
//   );
// }

// function extractBodyContent(htmlString) {
//   console.log("extractBodyContent() starting");

//   if (!htmlString) {
//     console.error("HTML string is empty or null");
//     return null;
//   }

//   // Use regular expressions to extract content between <body> and </body>
//   const bodyRegex = /<body[^>]*>[\s\S]*?<\/body>/i; // Use non-greedy matching with ? to match the first occurrence
//   const match = htmlString.match(bodyRegex);

//   if (match) {
//     // Return the matched content
//     const content = match[0];
//     const bodyHTML = scriptRemover(content);
//     const pureHTML = removeGenericPageHeader(bodyHTML);
//     bodyContent.value = pureHTML;
//   } else {
//     console.error("No <body> tag found in the HTML string");
//     return null;
//   }
// }

// function extractValues(array) {
//   const values = [];
//   const seenValues = new Set();

//   for (let i = 0; i < array.length; i++) {
//     const value = array[i].children[0].data.trim(); // Trim whitespace characters like \n, \t, etc.
//     if (!seenValues.has(value)) {
//       seenValues.add(value);
//       values.push(value);
//     }
//   }

//   return values;
// }
// function extractImageLinks(array) {
//   const links = [];
//   const seenLinks = new Set();

//   for (let i = 0; i < array.length; i++) {
//     const link = array[i].attribs["src"];
//     if (!seenLinks.has(link)) {
//       seenLinks.add(link);
//       links.push(link);
//     }
//   }

//   return links;
// }
// function extractValuesFromProductItems(array) {
//   const values = [];

//   for (let i = 0; i < array.length; i++) {
//     const value =
//       array[i].children[0].next.children[0].children[2].next.children[0].next
//         .children[0].data;
//     values.push(value);
//   }

//   return values;
// }

// // FN TO EXTRACT NAMES
// const extractTextByClass = (htmlString, className) => {
//   const parser = new DOMParser();
//   const doc = parser.parseFromString(htmlString, "text/html");
//   const elements = doc.querySelectorAll(`.${className}`);
//   const extractedTexts = [];

//   elements.forEach((element) => {
//     extractedTexts.push(element.textContent);
//   });

//   return extractedTexts;
// };
// // FN TO EXTRACT LINKS
// const extractHrefByClass = (htmlString, className) => {
//   const parser = new DOMParser();
//   const doc = parser.parseFromString(htmlString, "text/html");
//   const elements = doc.querySelectorAll(`.${className}`);
//   const hrefs = [];

//   elements.forEach((element) => {
//     if (element.tagName.toLowerCase() === "a") {
//       hrefs.push(element.getAttribute("href"));
//     }
//   });

//   return hrefs;
// };
// // FN TO EXTRACT IMAGE LINKS
// const extractSrcByClass = (htmlString, className) => {
//   const parser = new DOMParser();
//   const doc = parser.parseFromString(htmlString, "text/html");
//   const elements = doc.querySelectorAll(`.${className}`);
//   const srcs = [];

//   elements.forEach((element) => {
//     const src = element.getAttribute("src");
//     if (src) {
//       srcs.push(src);
//     }
//   });

//   return srcs;
// };
// // REMOVE SRCSET
// const filterStringsStartingWithData = (arrayOfStrings) => {
//   productImgLinks.value = arrayOfStrings.filter(
//     (str) => !str.startsWith("data")
//   );
// };
// // MAKE ALL ARRAYS SAME
// const adjustArraysLength = (array1, array2, array3) => {
//   // Find the minimum length among the three arrays
//   const minLength = Math.min(array1.length, array2.length, array3.length);

//   // Adjust the length of each array to the minimum length
//   const adjustedArray1 = array1.slice(0, minLength);
//   const adjustedArray2 = array2.slice(0, minLength);
//   const adjustedArray3 = array3.slice(0, minLength);

//   productNames.value = adjustedArray1;
//   productLinks.value = adjustedArray2;
//   productImgLinks.value = adjustedArray3;
// };
// //CREATE PRODUCT LINKS
// const createProductItems = (productNames, productImgLinks, productLinks) => {
//   const productItems = [];

//   // Iterate over each array
//   for (
//     let i = 0;
//     i <
//     Math.min(productNames.length, productImgLinks.length, productLinks.length);
//     i++
//   ) {
//     // Create a product item object
//     const productItem = {
//       name: productNames[i],
//       link: productLinks[i],
//       src: productImgLinks[i],
//     };

//     // Push the product item object to the array
//     productItems.push(productItem);
//   }

//   return productItems;
// };
// // SCRAPE FUNCTION
// async function scrape(retries = 1) {
//   try {
//     console.log("scrape() starting");
//     const response = await fetch("/api/proxy");

//     // Check if the fetch was successful
//     if (!response.ok) {
//       throw new Error(`HTTP error! status: ${response.status}`);
//     }

//     const htmlString = await response.text();
//     // Parse the HTML string
//     const parser = new DOMParser();
//     const doc = parser.parseFromString(htmlString, "text/html");

//     const bodyContent = doc.body.innerHTML;

//     productNames.value = extractTextByClass(
//       bodyContent,
//       "product-content__category"
//     );
//     productLinks.value = extractHrefByClass(
//       bodyContent,
//       "woocommerce-loop-product__link"
//     );
//     productImgLinks.value = extractSrcByClass(
//       bodyContent,
//       "size-woocommerce_thumbnail"
//     );
//     filterStringsStartingWithData(productImgLinks.value);
//     adjustArraysLength(
//       productNames.value,
//       productLinks.value,
//       productImgLinks.value
//     );

//     const productItems = createProductItems(
//       productNames.value,
//       productImgLinks.value,
//       productLinks.value
//     );
//     const firstTwentyItems = productItems.slice(0, 9);

//     userStore.products = firstTwentyItems;
//     setCookie();
//   } catch (error) {
//     console.error("An error occurred during the scrape process:", error);

//     // Retry mechanism
//     if (retries > 0) {
//       console.log(`Retrying... attempts left: ${retries}`);
//       await scrape(retries - 1);
//     } else {
//       console.error(
//         "Max retries reached. Could not complete the scrape process."
//       );
//     }
//   }
// }

function clickAtCheckBox() {
  isChecked.value = !isChecked.value;
  console.log("click", isChecked.value);
}

// FUNCTION CALLS
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
