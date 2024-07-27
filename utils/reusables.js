export function scrollToBottom() {
  setTimeout(() => {
    const offset = window.innerHeight * 0.1; // 10% of the viewport height
    window.scrollTo({
      top: document.documentElement.scrollHeight - offset,
      behavior: "smooth",
    });
  }, 200);
}
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
