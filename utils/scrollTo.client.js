import { gsap } from "gsap";
import { ScrollToPlugin } from "gsap/ScrollToPlugin";

// Register the plugin
gsap.registerPlugin(ScrollToPlugin);

export function scrollToEl(id) {
  console.log("+");
  setTimeout(() => {
    gsap.to(window, {
      duration: 0.8,
      scrollTo: { y: `#${id}`, offsetY: 50 },
    });
  }, 120);
}
