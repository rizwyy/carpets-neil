import gsap from "gsap";

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

export function handleImageLoad(el, el2, isOverlay, isText) {
  gsap.fromTo(
    `.${el}_Img`,
    {
      opacity: 0,
      scale: 1.1,
    },
    {
      scale: 1,
      opacity: 1,
      duration: 0.6,
      ease: "slide.in",
    }
  );
  if (isOverlay) {
    gsap.to(`.${el2}_Overlay`, {
      opacity: 0.6,
      ease: "slide.in",
      stagger: 0.1,
      duration: 0.8,
    });
  }
  if (isText) {
    gsap.to(`.${el2}_Text`, {
      opacity: 1,
      stagger: 0.1,
      duration: 1,
      ease: "back.in",
      y: 0,
    });
  }
}
export function bringOpacity(el, el2) {
  const elementClass = `.${el}`;
  const commonOptions = {
    duration: 1,
    ease: "slide.in",
  };

  if (el2 === "translate") {
    console.log("hi");
    gsap.fromTo(elementClass, { y: 90 }, { y: 0, ...commonOptions });
  }

  gsap.fromTo(
    elementClass,
    { opacity: 0 },
    { opacity: 1, duration: 0.4, ease: "slide.in" }
  );
}

export function removeOpacity(el) {
  gsap.fromTo(
    `.${el}`,
    {
      opacity: 1,
    },
    {
      opacity: 0,
      duration: 0.4,
      ease: "back.out",
    }
  );
}
