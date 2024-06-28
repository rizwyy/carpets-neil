<script setup>
// COMPONENTS IMPORTS
import Mobile from "./../../../layouts/Mobile.vue";
import Desktop from "./../../../layouts/Desktop.vue";

import CatalogItemMOB from "../../../components/MOBILE/FLOORING/CatalogItemMOB.vue";
import CatalogItemPC from "../../../components/DESKTOP/CatalogItemPC.vue";
// PACKAGES
// COOKIES
import { useCookie } from "#app";
const productsCookieData = useCookie("productsCookieData");

// PINIA
import useUserStore from "../../../stores/user";

const userStore = useUserStore();

// REACTIVES
const cookieData = ref([]);
const isLoading = ref(true);
const route = useRoute();

// FUNCTION CALLS
const fetchImageSrc = async (url) => {
  try {
    const response = await fetch(
      `/api/proxy-img?url=${encodeURIComponent(url)}`
    );
    if (response.ok) {
      return await response.text();
    } else {
      throw new Error("Failed to fetch the image");
    }
  } catch (error) {
    console.error(error);
    return "https://via.placeholder.com/600x600"; // Fallback image
  }
};

const loadProductItems = async () => {
  // Example product items with URLs to fetch

  for (const item of productsCookieData.value) {
    item.src = await fetchImageSrc(item.src);
  }

  console.log(productsCookieData.value);
};

//
const products = [];
const productNames = ref([]);
const productPrices = ref([]);
const productLinks = ref([]);
const productColor = ref([]);
const productImgLinks = ref([]);
const product = { name: "", price: "", link: "", color: "" };
// FN TO EXTRACT NAMES
const extractTextByClass = (htmlString, className) => {
  const parser = new DOMParser();
  const doc = parser.parseFromString(htmlString, "text/html");
  const elements = doc.querySelectorAll(`.${className}`);
  const extractedTexts = [];

  elements.forEach((element) => {
    extractedTexts.push(element.textContent);
  });

  return extractedTexts;
};
// FN TO EXTRACT LINKS
const extractHrefByClass = (htmlString, className) => {
  const parser = new DOMParser();
  const doc = parser.parseFromString(htmlString, "text/html");
  const elements = doc.querySelectorAll(`.${className}`);
  const hrefs = [];

  elements.forEach((element) => {
    if (element.tagName.toLowerCase() === "a") {
      hrefs.push(element.getAttribute("href"));
    }
  });

  return hrefs;
};
// FN TO EXTRACT IMAGE LINKS
const extractSrcByClass = (htmlString, className) => {
  const parser = new DOMParser();
  const doc = parser.parseFromString(htmlString, "text/html");
  const elements = doc.querySelectorAll(`.${className}`);
  const srcs = [];

  elements.forEach((element) => {
    const src = element.getAttribute("src");
    if (src) {
      srcs.push(src);
    }
  });

  return srcs;
};
// REMOVE SRCSET
const filterStringsStartingWithData = (arrayOfStrings) => {
  productImgLinks.value = arrayOfStrings.filter(
    (str) => !str.startsWith("data")
  );
};
// REMOVE DUPLICATED PRODUCT ITEMS
function cleanAndRemoveDuplicates(productArray) {
  // Clean up the name fields by trimming white spaces
  productArray.forEach((product) => {
    product.name = product.name.trim();
  });

  // Use a Set to track unique products based on their stringified content
  const uniqueProducts = new Map();

  productArray.forEach((product) => {
    const productKey = `${product.name}-${product.link}-${product.color}`;
    if (!uniqueProducts.has(productKey)) {
      uniqueProducts.set(productKey, product);
    }
  });

  // Convert the map values back to an array
  return Array.from(uniqueProducts.values());
}
// MAKE ALL ARRAYS SAME
const adjustArraysLength = (array1, array2, array3, array4) => {
  // Find the minimum length among the three arrays
  const minLength = Math.min(
    array1.length,
    array2.length,
    array3.length,
    array4.length
  );
  console.log(minLength);
  // Adjust the length of each array to the minimum length
  const adjustedArray1 = array1.slice(0, minLength);
  const adjustedArray2 = array2.slice(0, minLength);
  const adjustedArray3 = array3.slice(0, minLength);
  const adjustedArray4 = array4.slice(0, minLength);

  productNames.value = adjustedArray1;
  productLinks.value = adjustedArray2;
  productColor.value = adjustedArray3;
  productPrices.value = adjustedArray4;
};
//CREATE PRODUCT LINKS
const createProductItems = (
  productNames,
  productLinks,
  productColor,
  productPrices
) => {
  const productItems = [];

  // Iterate over each array
  for (
    let i = 0;
    i <
    Math.min(
      productNames.length,
      productLinks.length,
      productColor.length,
      productPrices.length
    );
    i++
  ) {
    // Create a product item object
    const productItem = {
      name: productNames[i],
      price: productPrices[i],
      link: productLinks[i],
      color: productColor[i],
    };

    // Push the product item object to the array
    productItems.push(productItem);
  }
  return productItems;
};
function cleanColorNames(colorArray) {
  return colorArray.map((color) => color.trim());
}

function parsePriceString(priceString) {
  // Use a regular expression to extract the numeric value and the currency
  const regex = /([\d,]+\.?\d*)\s*([^\d\s]+)/;
  const match = priceString.match(regex);

  if (match) {
    const value = parseFloat(match[1].replace(",", "")); // Convert the string to a float
    const currency = match[2];

    return { value, currency };
  }

  // Return null or throw an error if the string doesn't match the expected format
  return null;
}

function parsePriceArray(priceArray) {
  return priceArray.map((priceString) => parsePriceString(priceString));
}
// SCRAPE FUNCTION
async function scrape(retries = 3) {
  try {
    console.log("scrape() starting");
    const response = await fetch("/api/proxy");

    // Check if the fetch was successful
    if (!response.ok) {
      throw new Error(`HTTP error! status: ${response.status}`);
    }

    const htmlString = await response.text();
    // Parse the HTML string
    const parser = new DOMParser();
    const doc = parser.parseFromString(htmlString, "text/html");

    const bodyContent = doc.body.innerHTML;

    productNames.value = extractTextByClass(
      bodyContent,
      "product-content__category"
    );
    productPrices.value = extractTextByClass(bodyContent, "from-price");
    productPrices.value = parsePriceArray(productPrices.value);
    productLinks.value = extractHrefByClass(
      bodyContent,
      "woocommerce-loop-product__link"
    );

    productColor.value = extractTextByClass(
      bodyContent,
      "product-content__title"
    );
    productColor.value = cleanColorNames(productColor.value);

    adjustArraysLength(
      productNames.value,
      productLinks.value,
      productColor.value,
      productPrices.value
    );

    const productItems = createProductItems(
      productNames.value,
      productLinks.value,
      productColor.value,
      productPrices.value
    );
    const cleanedProductsArray = cleanAndRemoveDuplicates(productItems);
    const slicedArray = cleanedProductsArray.slice(0, 30);
    console.log(slicedArray);

    isLoading.value = false;
    userStore.products = slicedArray;
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
// TEST

function getValidCookieData() {
  const rawCookieData = toRaw(cookieData.value);
  const rawMyCookie = toRaw(productsCookieData.value);

  if (!Array.isArray(rawCookieData) && !Array.isArray(rawMyCookie)) {
    console.error("Both variables are not arrays");
    return;
  }

  const validArray =
    Array.isArray(rawCookieData) && rawCookieData.length > 1
      ? rawCookieData
      : Array.isArray(rawMyCookie) && rawMyCookie.length > 1
      ? rawMyCookie
      : null;

  if (validArray) {
    return validArray;
  } else {
    console.warn("FETCH FUNCTION MUST BE CALLED");
  }
}

onMounted(() => {
  userStore.products = scrape();

  // loadProductItems();
  // if (toRaw(productsCookieData.value)) {
  //   isLoading.value = false;
  //   console.log(productsCookieData);
  //   cookieData.value = toRaw(productsCookieData.value);
  // } else {
  //   console.error("CALLING FETCH FUNCTION");
  //   scrapeProducts();
  // }
});
userStore.products = toRaw(productsCookieData.value);
if (userStore.products === toRaw(productsCookieData.value)) {
  productsCookieData.value = null;
  console.log("OK");
} else {
  console.log("NO");
}
</script>

<template>
  <Desktop>
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
    <div v-else class="mx-auto w-[60vw] h-max">
      <div class="h-max w-full grid grid-cols-4 gap-x-[8vw] gap-y-[4vh]">
        <CatalogItemPC
          v-for="item in userStore.products"
          :name="item.name"
          :price="item.price.value"
          :key="item.link"
          :currency="item.price.currency"
          :color="item.color"
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
            v-for="item in userStore.products"
            :name="item.name"
            :price="item.price.value"
            :key="item.link"
            :currency="item.price.currency"
            :color="item.color"
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
