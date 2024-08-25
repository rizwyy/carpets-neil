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
  if (!isEmailValid) {
    console.log("Invalid email format");
  }

  const isPhoneValid = phonePattern.test(phoneIpt.trim());
  if (!isPhoneValid) {
    console.log("Invalid phone number format");
  }

  const isNameValid = nameIpt.trim().length >= 2;
  if (!isNameValid) {
    console.log("Name must be at least 2 characters long");
  }

  return isEmailValid && isPhoneValid && isNameValid;
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
