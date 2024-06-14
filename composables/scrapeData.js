// PACKAGES
import cheerio from "cheerio";

import { toRaw } from "vue";

// PINIA
let bodyContent = "";
let productsArray = [];
// REACTIVES & CONSTANTS

const product = { name: "", price: "", link: "", img: "" };

// FUNCTIONS
const setCookie = () => {
  console.log("setCookie() starting");
  if (productsArray.length > 1) {
    myCookie.value = productsArray;
  } else {
    console.log("NO DATA FOUND AT SET COOKIE");
    return;
  }
  console.log("Cookie set at componsable:", toRaw(myCookie.value));
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
    bodyContent = content;
  } else {
    console.error("No <body> tag found in the HTML string");
    return null;
  }
}

export default function scrapeProducts(retries = 3) {
  return useAsyncData(
    "scrapeData",
    () =>
      new Promise(async (resolve, reject) => {
        try {
          console.log("scrape() starting");
          const response = await fetch("/api/proxy");

          // Check if the fetch was successful
          if (!response.ok) {
            throw new Error(`HTTP error! status: ${response.status}`);
          }

          const htmlString = await response.text();
          extractBodyContent(htmlString);

          const $ = cheerio.load(bodyContent);
          const $p = $("h2 a"); // element containing name and link
          const $c = $("span.woocommerce-Price-amount bdi"); // element containing price and currency details
          const $i = $(
            "a.woocommerce-LoopProduct-link img.woo-entry-image-main"
          );
          console.log($i.eq(0).attr("data-src"));

          const productsArray = [];
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
            productsArray.push(product); // Add the product object to the array
          }

          console.log(productsArray);
          setCookie();

          resolve(productsArray);
        } catch (error) {
          console.error(
            "An error occurred during the scrape process at composables:",
            error
          );

          // Retry mechanism
          if (retries > 0) {
            console.log(`Retrying at COMP... attempts left: ${retries}`);
            await scrape(retries - 1)
              .then(resolve)
              .catch(reject);
          } else {
            console.error(
              "Max retries reached. Could not complete the scrape process."
            );
            reject(error);
          }
        }
      })
  );
}
