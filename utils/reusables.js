export function scrollToBottom() {
  setTimeout(() => {
    window.scrollTo({
      top: document.documentElement.scrollHeight,
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
