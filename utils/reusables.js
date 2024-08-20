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

  const phonePattern = /^\+?\d{10,15}$/;

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
