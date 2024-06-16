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
// MAKE ALL ARRAYS SAME
const adjustArraysLength = (array1, array2, array3, array4) => {
  // Find the minimum length among the three arrays
  const minLength = Math.min(
    array1.length,
    array2.length,
    array3.length,
    array4.length
  );

  // Adjust the length of each array to the minimum length
  const adjustedArray1 = array1.slice(0, minLength);
  const adjustedArray2 = array2.slice(0, minLength);
  const adjustedArray3 = array3.slice(0, minLength);
  const adjustedArray4 = array4.slice(0, minLength);

  productNames.value = adjustedArray1;
  productLinks.value = adjustedArray2;
  productImgLinks.value = adjustedArray3;
  productColor.value = adjustedArray4;
};
//CREATE PRODUCT LINKS
const createProductItems = (
  productNames,
  productImgLinks,
  productLinks,
  productColor
) => {
  const productItems = [];

  // Iterate over each array
  for (
    let i = 0;
    i <
    Math.min(
      productNames.length,
      productImgLinks.length,
      productLinks.length,
      productColor.length
    );
    i++
  ) {
    // Create a product item object
    const productItem = {
      name: productNames[i],
      link: productLinks[i],
      src: productImgLinks[i],
      color: productColor[i],
    };

    // Push the product item object to the array
    productItems.push(productItem);
  }

  return productItems;
};
// SCRAPE FUNCTION
export default async function scrape(retries = 3) {
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

    productLinks.value = extractHrefByClass(
      bodyContent,
      "woocommerce-loop-product__link"
    );
    productColor.value = extractTextByClass(
      bodyContent,
      "product-content__title"
    );

    filterStringsStartingWithData(productImgLinks.value);
    adjustArraysLength(
      productNames.value,
      productLinks.value,
      productImgLinks.value,
      productColor.value
    );

    const productItems = createProductItems(
      productNames.value,
      productImgLinks.value,
      productLinks.value,
      productColor.value
    );
    const slicedArray = productItems.slice(0, 30);
    console.log(slicedArray);

    isLoading.value = false;
    return slicedArray;
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
