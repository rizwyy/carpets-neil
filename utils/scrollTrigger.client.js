import gsap from "gsap";
import { ScrollTrigger } from "gsap/all";
gsap.registerPlugin(ScrollTrigger);

export default function handleScrollTrigger(el) {
  gsap.to(`.${el}`, {
    opacity: 1,
    duration: 0.4,
    y: 0,
    scrollTrigger: {
      trigger: `.${el}`,
      start: "top bottom-=10vh", // Start when the top of the element is 10vh above the bottom of the viewport
      toggleActions: "play none none none", // Plays the animation when entering the viewport
    },
  });
}
