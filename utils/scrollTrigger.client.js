import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

export function handleScrollTrigger(el) {
  // Ensure this runs only on the client-side
  if (process.client) {
    // Register the ScrollTrigger plugin with GSAP
    if (!gsap.core.globals().ScrollTrigger) {
      gsap.registerPlugin(ScrollTrigger);
    }

    // Use GSAP to animate the element
    gsap.to(`.${el}`, {
      opacity: 1,
      duration: 0.4,
      y: 0,
      scrollTrigger: {
        trigger: `.${el}`,
        start: "top bottom-=10vh", // Trigger when the element enters the viewport
        toggleActions: "play none none none", // Only play the animation once when entering
      },
    });
  }
}
