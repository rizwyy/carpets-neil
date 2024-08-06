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

export function scrollToTop() {
  setTimeout(() => {
    window.scrollTo({
      top: 0, // Scroll to the top
      behavior: "smooth",
    });
  }, 200);
}

export function handleImageLoad(el, el2) {
  const tl = gsap.timeline();

  tl.fromTo(
    `.${el}_Img`,
    {
      opacity: 0,
      scale: 1.04,
    },
    {
      scale: 1,
      opacity: 1,
      duration: 0.6,
      ease: "slide.in",
    }
  );
  // 1:Overlay Comes
  tl.to(`.${el2}_Overlay`, {
    opacity: 0.5,
    ease: "slide.in",
    duration: 0.6,
  });
  // 2:Blurry Div Goes
  tl.to(`.${el2}_Overlay`, {
    backdropFilter: "blur(0px)",
    duration: 0.4,
    ease: "slide.out",
  });
  // 3:Text Comes
  tl.to(`.${el2}_Text`, {
    delay: -0.4,
    opacity: 1,
    stagger: 0.1,
    duration: 0.4,
    ease: "slide.in",
    y: 0,
  });
}
export function bringOpacity(el, el2) {
  const elementClass = `.${el}`;
  const commonOptions = {
    duration: 1,
    ease: "slide.in",
  };

  if (el2 === "translate") {
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
export function handleFromToEntry(el) {
  gsap.fromTo(
    `.${el}`,
    {
      opacity: 0,
    },
    {
      opacity: 1,
      duration: 0.8,
      stagger: 0.2,
      ease: "slide.in",
    }
  );
}

export function handleDOMEntry(el) {
  gsap.to(`.${el}`, {
    y: 0,
    scale: 1,
    opacity: 1,
    duration: 0.4,
    ease: "slide.in",
  });
}
export function handleDetailsDOMEntry(el) {
  let tl = gsap.timeline();
  tl.to(`.${el}-HEADING`, {
    y: 0,
    x: 0,
    delay: 0.4,
    opacity: 1,
    duration: 0.2,
    ease: "slide.in",
  });
  tl.to(`.${el}-CONTAINER`, {
    delay: -0.6,
    scale: 1,
    y: 0,
    opacity: 1,
    duration: 0.2,
    stagger: 0.1,
    ease: "slide.in",
  });
}

export function handleCatalogDOMEntry(el) {
  gsap.to(`.${el}`, {
    delay: 0.3,
    y: 0,
    scale: 1,
    opacity: 1,
    duration: 0.8,
    stagger: 0.1,
    ease: "slide.in",
  });
}

export function handleTempAnimation(el) {
  const tl = gsap.timeline({ ease: "slide.in" });
  tl.to(`.${el}`, {
    autoAlpha: 1,
    opacity: 1,
    duration: 0.6,
    y: 0,
  });
  tl.to(`.${el}`, {
    delay: 1.2,
    opacity: 0,
    duration: 0.4,
    y: 50,
  });
}

export function handleBringOpacityForCustomColor(el) {
  gsap.to(`.${el}`, {
    opacity: 1,
    duration: 2.2,
    ease: "bounce.inOut",
  });
}
