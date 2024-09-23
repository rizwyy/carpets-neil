import { getCookie } from "h3";
import { createError } from "h3";

export function getColorAfterHyphen(color) {
  if (color.includes("-")) {
    return color.split("-")[1];
  }
  return color;
}

export function shuffleArray(array) {
  const newArray = [...array]; // Create a copy of the original array
  for (let i = newArray.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [newArray[i], newArray[j]] = [newArray[j], newArray[i]];
  }
  return newArray;
}
export function generateWhatsAppLink(phone, message) {
  const encodedMessage = encodeURIComponent(message);
  return `https://api.whatsapp.com/send?phone=${phone}&text=${encodedMessage}`;
}
export function getColorHex(color) {
  const formattedColor = color.toLowerCase().replace(/\s+/g, "");
  return carpetColors[formattedColor] || "#000000";
}
export function validateInputs(emailIpt, phoneIpt, nameIpt) {
  const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  const phonePattern =
    /^\+?(9733\d{7}|9715\d{8}|9665\d{8}|965[569]\d{6}|974[3456]\d{7})$/;

  const isEmailValid = emailPattern.test(emailIpt.trim());
  const isPhoneValid = phonePattern.test(phoneIpt.trim());
  const isNameValid = nameIpt.trim().length >= 2;

  const validationResult = {
    isEmailValid,
    isPhoneValid,
    isNameValid,
  };

  if (!isEmailValid) {
    console.log("Invalid email format");
  }
  if (!isPhoneValid) {
    console.log("Invalid phone number format");
  }
  if (!isNameValid) {
    console.log("Name must be at least 2 characters long");
  }

  return validationResult;
}

export function addCountryCode(phoneNumber, country) {
  const countryCodes = {
    Bahrain: "+973",
    UAE: "+971",
    SaudiArabia: "+966",
    Kuwait: "+965",
    Qatar: "+974",
  };

  const countryCode = countryCodes[country] || "";
  return `${countryCode}${phoneNumber}`;
}

export function convertCurrency(fromValue, fromCurrency, country) {
  let conversionRate;
  let currencyCode;

  switch (country) {
    case "Bahrain":
      conversionRate = fromCurrency === "BD" ? 1 : 2.65957; // Assuming 1 BD = 2.65957 USD (example rate)
      currencyCode = "BD";
      break;
    case "Qatar":
      conversionRate = fromCurrency === "QR" ? 1 : 3.64; // Assuming 1 QR = 3.64 USD
      currencyCode = "QR";
      break;
    case "Kuwait":
      conversionRate = fromCurrency === "KD" ? 1 : 3.3; // Assuming 1 KD = 3.30 USD
      currencyCode = "KD";
      break;
    case "Saudi Arabia":
      conversionRate = fromCurrency === "SR" ? 1 : 3.75; // Assuming 1 SR = 3.75 USD
      currencyCode = "SR";
      break;
    case "UAE":
      conversionRate = fromCurrency === "AD" ? 1 : 3.67; // Assuming 1 AD = 3.67 USD
      currencyCode = "AD";
      break;
    default:
      conversionRate = 1; // Default to 1 if country not matched
      currencyCode = ""; // Empty string if no match
  }

  const toValue = (fromValue * conversionRate).toFixed(2); // Round to 2 decimal places
  return `${currencyCode} ${toValue} `;
}

export function getPriceRange(name, country) {
  let priceRange;

  switch (name) {
    case "Value":
      priceRange = {
        Bahrain: "5.99 to 9.99",
        Qatar: "57.98 to 96.70",
        Kuwait: "4.86 to 8.10",
        SaudiArabia: "59.64 to 99.47",
        UAE: "58.38 to 97.36",
      };
      break;
    case "Essential":
      priceRange = {
        Bahrain: "10.00 to 19.99",
        Qatar: "97.00 to 194.00",
        Kuwait: "8.11 to 16.20",
        SaudiArabia: "99.48 to 198.95",
        UAE: "97.37 to 194.72",
      };
      break;
    case "Premier":
      priceRange = {
        Bahrain: "20.00 to 24.99",
        Qatar: "194.01 to 242.99",
        Kuwait: "16.21 to 20.24",
        SaudiArabia: "198.96 to 248.69",
        UAE: "194.73 to 243.40",
      };
      break;
    case "Signature":
      priceRange = {
        Bahrain: "25.00 to 29.99",
        Qatar: "243.00 to 291.99",
        Kuwait: "20.25 to 24.29",
        SaudiArabia: "248.70 to 298.43",
        UAE: "243.41 to 292.08",
      };
      break;
    case "Elite":
      priceRange = {
        Bahrain: "Over 30",
        Qatar: "Over 292",
        Kuwait: "Over 24.30",
        SaudiArabia: "Over 298",
        UAE: "Over 292",
      };
      break;
    default:
      return "Invalid name";
  }

  let currencyCode;
  switch (country) {
    case "Bahrain":
      currencyCode = "BD";
      break;
    case "Qatar":
      currencyCode = "QR";
      break;
    case "Kuwait":
      currencyCode = "KD";
      break;
    case "Saudi Arabia":
      currencyCode = "SR";
      break;
    case "UAE":
      currencyCode = "AD";
      break;
    default:
      return "Invalid country";
  }

  return `${currencyCode}. ${priceRange[country]}m²`;
}
export function DISABLE_SCROLL() {
  document.body.style.overflow = "hidden";
}
export function ENABLE_SCROLL() {
  document.body.style.overflow = "";
}

export function parsePreferenceString(preferenceString) {
  const parts = preferenceString.split("|");

  // Helper function to get the full name by finding the value in the preferenceAbbreviations object
  const getFullName = (abbreviation) =>
    preferenceAbbreviations[abbreviation] || abbreviation;

  // Map the parts of the string back to their full values
  const parsedPreference = {
    flooring: getFullName(parts[0]),
    spec_1: getFullName(parts[1]),
    spec_2: getFullName(parts[2]),
    spec_3: getFullName(parts[3]),
    spec_4: getFullName(parts[4]),
    spec_5: getFullName(parts[5]),
    color: parts[6]
      ? parts[6].split(",").map((color) => getFullName(color))
      : [],
    budget: getFullName(parts[7]),
  };

  return parsedPreference;
}

export async function fetchPreferencesByMobile(mobile) {
  try {
    // Ensure the mobile number is provided
    if (!mobile) {
      throw new Error("Mobile number is required");
    }

    let sanitizedMobile = mobile.startsWith("+") ? mobile.slice(1) : mobile;

    // Call the API endpoint to get the logs associated with the mobile number
    const { data, error } = await useFetch(
      `/api/get-log?mobile=${sanitizedMobile}`,
      {
        method: "GET",
        headers: {
          "Content-Type": "application/json",
        },
      }
    );

    if (error.value) {
      throw new Error(error.value.message);
    }

    // Handle successful data retrieval
    console.log("Preferences fetched successfully:", data.value);
    return data.value; // Return the fetched data
  } catch (err) {
    // Handle errors
    console.error("Error fetching preferences:", err.message);
    return null;
  }
}

export const HandleOrderConfirmation = async ({
  cartItems,
  userData,
  link,
}) => {
  try {
    // Step 1: Set the cookie and validate
    const { data, error } = await useFetch("/api/set-cookie");
    if (error?.value) {
      throw new Error("Error setting cookie: " + error.value);
    }
    console.log("SET COOKIE DONE");

    // Step 2: Iterate over each cart item and insert them individually
    for (const item of cartItems) {
      // Ensure the isOrderConfirmed property is set to true
      const preferenceWithOrderConfirmation = {
        ...item,
        isOrderConfirmed: true,
      };
      console.log(
        "🚀 ~ preferenceWithOrderConfirmation:",
        preferenceWithOrderConfirmation
      );

      // Prepare the user data object for each item
      const logUserData = {
        name: userData.name,
        phone: userData.phone,
        email: userData.email,
        preference: preferenceWithOrderConfirmation, // Include the current cart item as preference
      };
      console.log("🚀 ~ logUserData:", logUserData);

      const response = await fetch("/api/insert-logs", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(logUserData),
      });

      if (!response.ok) {
        throw new Error(`Error inserting log for item: ${item}`);
      }

      const logData = await response.json();
      console.log("Log data for item:", logData);
    }

    // Return checkout result
    return {
      success: true,
      message: "Order confirmed and logs inserted",
      redirectUrl: `/flooring/checkout`,
    };
  } catch (err) {
    console.error("Unexpected errors:", err.message);

    // Return failure result
    return {
      success: false,
      message: err.message,
    };
  }
};

export async function fetchLogById(id) {
  const userId = id;

  if (!userId) {
    console.error("User ID is missing");
    return;
  }

  try {
    // Send a request to the API endpoint with the user ID as a query parameter
    const response = await fetch(`/api/get-currentItem?id=${userId}`); // Call the new API

    if (!response.ok) {
      throw new Error(`Error fetching log: ${response.statusText}`);
    }

    // Parse the JSON response
    const result = await response.json();
    console.log("Log data:", result.data);

    return result.data; // Return the log data
  } catch (error) {
    console.error("Failed to fetch log by ID:", error.message);
  }
}
const getAbbreviation = (abbreviation) =>
  Object.keys(preferenceAbbreviations).find(
    (key) => preferenceAbbreviations[key] === abbreviation
  ) || abbreviation;

export const decodePreferenceString = (encodedString) => {
  // Split the encoded string by '|' to get each part
  const values = encodedString.split("|");

  return {
    flooring: preferenceAbbreviations[values[0]] || values[0], // Decode flooring
    spec_1: preferenceAbbreviations[values[1]] || values[1], // Decode spec_1
    spec_2: preferenceAbbreviations[values[2]] || values[2], // Decode spec_2
    spec_3: preferenceAbbreviations[values[3]] || values[3], // Decode spec_3
    spec_4: preferenceAbbreviations[values[4]] || values[4], // Decode spec_4
    spec_5: preferenceAbbreviations[values[5]] || values[5], // Decode spec_5
    color: values[6]
      .split(",")
      .map((color) => preferenceAbbreviations[color] || color), // Decode color array
    budget: preferenceAbbreviations[values[7]] || values[7], // Decode budget
  };
};

export function removeDuplicates(arr) {
  // Create a Set to track unique IDs
  const uniqueIds = new Set();
  let hasDuplicates = false;

  // Filter the array to remove duplicates
  const filteredArr = arr.filter((item) => {
    console.log(`Processing item with ID: ${item.id}`);

    if (uniqueIds.has(item.id)) {
      // Duplicate found, set the flag to true
      console.log(`Duplicate found for ID: ${item.id}`);
      hasDuplicates = true;
      return false; // Filter out the duplicate
    } else {
      // Add the id to the set and keep the item
      uniqueIds.add(item.id);
      return true;
    }
  });

  // Log a message if no duplicates are found
  if (!hasDuplicates) {
    console.log("No duplicates found");
  }

  // Return the filtered array
  return filteredArr;
}

export function toCamelCase(str) {
  return str
    .toLowerCase() // Convert the entire string to lowercase
    .replace(/[^a-zA-Z0-9]+(.)/g, (match, chr) => chr.toUpperCase()); // Remove non-alphanumeric characters and capitalize the next letter
}

export function capitalizeFirstLetter(string) {
  if (!string) return "";
  return string.charAt(0).toUpperCase() + string.slice(1);
}
