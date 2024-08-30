<template>
  <!-- REUSABLE PREFERENCE PARENT DIV -->
  <div
    :class="[
      `${parentDivClass} h-max w-[90%] flex flex-col bg-[#f1f1f1] rounded-md mx-auto overflow-hidden`,
      { expanded: isExpanded },
    ]"
  >
    <!-- UNEXPANDED -->
    <div
      @click="toggleExpansion"
      :class="`${child1Class} flex-[1] w-full text-[2.4vh]`"
    >
      <span
        class="h-max w-full inline-block px-[3.2vw] py-[1vh] flex justify-between items-center rounded-md border-[1px] border-[#999] text-[#444]"
      >
        Carpets
        <span class="text-[1.4vh] text-[#999] cursor-pointer">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            class="h-[3.8vh]"
            viewBox="0 0 24 24"
          >
            <path
              fill="#444"
              :d="isExpanded ? expandedIconPath : contractedIconPath"
            />
          </svg>
        </span>
      </span>
    </div>
    <!-- EXPANDED CONTENT -->
    <div
      v-show="isExpanded"
      :class="`${child2Class} invisible opacity-0 flex-[6] px-[4vw] h-max w-full flex flex-col items-start justify-between ease-in-out transition-all duration-[.6s] gap-[4.2vh] py-[4vh]`"
    >
      <div>
        <span
          :class="`${prefItemClass} text-[1.8vh] opacity-0 mt-[1vh] w-full border-[2px] rounded-full px-[4vw] py-[1vh] border-[#666] bg-[#fff7]`"
        >
          <span>Category/Application:&nbsp;</span>{{ preference.spec_1 }}
        </span>
      </div>
      <div>
        <span
          :class="`${prefItemClass} text-[1.8vh] opacity-0 mt-[1vh] w-full border-[2px] rounded-full px-[4vw] py-[1vh] border-[#666] bg-[#fff7]`"
        >
          <span>Activity/Type:&nbsp;</span>{{ preference.spec_2 }}
        </span>
      </div>
      <div>
        <span
          :class="`${prefItemClass} text-[1.8vh] opacity-0 mt-[1vh] w-full border-[2px] rounded-full px-[4vw] py-[1vh] border-[#666] bg-[#fff7]`"
        >
          <span>Material/Style:&nbsp;</span>{{ preference.spec_3 }}
        </span>
      </div>
      <div>
        <span
          :class="`${prefItemClass} text-[1.8vh] opacity-0 mt-[1vh] w-full border-[2px] rounded-full px-[4vw] py-[1vh] border-[#666] bg-[#fff7]`"
        >
          <span>Finish:&nbsp;</span
          >{{
            preference.spec_4.length > 0 ? preference.spec_4.join(", ") : "N/A"
          }}
        </span>
      </div>
      <div>
        <span
          :class="`${prefItemClass} text-[1.8vh] opacity-0 mt-[1vh] w-full border-[2px] rounded-full px-[4vw] py-[1vh] border-[#666] bg-[#fff7]`"
        >
          <span>Budget:&nbsp;</span
          >{{ getPriceRange(preference.budget, preference.country) }}
        </span>
      </div>
      <div class="h-max w-full flex flex-col gap-[1.8vh] px-[2vw]">
        <span class="font-[400] text-[1.8vh]">Colors Opted:</span>
        <div class="h-max w-full grid grid-cols-3 gap-[2vh]">
          <span
            v-show="preference.color.length > 0"
            :class="`${prefItemClass} text-[1.8vh] opacity-0 w-max border-[2px] rounded-full px-[4vw] text-[#999] font-[400] text-center py-[.8vh] border-[#444] bg-[#000] bg-opacity-[.2] backdrop-blur-[8px]`"
            v-for="(color, index) in preference.color"
            :key="index"
            :style="{ color: getColorHex(color) }"
          >
            {{ color }}
          </span>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref, computed } from "vue";
import gsap from "gsap";
import useUserStore from "~/stores/user";
const { item } = defineProps({
  item: {
    type: Object,
    default: () => ({}),
  },
});
const userStore = useUserStore();
const isExpanded = ref(false);
// Expanded state (can be passed down from parent if necessary)

// Computed preference (uses item preference or defaults to userStore)
const preference = computed(() => item.preference || userStore.preference);
// Dynamic class names for each instance
const instanceId = ref(Date.now()); // Generates a unique ID for each instance
const parentDivClass = computed(() => `parentDiv-${instanceId.value}`);
const child1Class = computed(() => `child1-${instanceId.value}`);
const child2Class = computed(() => `child2-${instanceId.value}`);
const prefItemClass = computed(() => `prefItem-${instanceId.value}`);

const expandedIconPath =
  "M12 10.8l-3.9 3.9q-.275.275-.7.275t-.7-.275t-.275-.7t.275-.7l4.6-4.6q.3-.3.7-.3t.7.3l4.6 4.6q.275.275.275.7t-.275.7t-.7.275t-.7-.275z";
const contractedIconPath =
  "M12 14.975q-.2 0-.375-.062T11.3 14.7l-4.6-4.6q-.275-.275-.275-.7t.275-.7t.7-.275t.7.275l3.9 3.9l3.9-3.9q.275-.275.7-.275t.7.275t.275.7t-.275.7l-4.6 4.6q-.15.15-.325.213t-.375.062";

// Toggle function with dynamic classes
function toggleExpansion() {
  const timeline = gsap.timeline();

  if (isExpanded.value) {
    // Contraction
    timeline
      .to(`.${child2Class.value}`, {
        duration: 0.4,
        autoAlpha: 0,
        ease: "power1.in",
      })
      .to(
        `.${child1Class.value}`,
        {
          fontSize: "2.4vh",
        },
        "<"
      )
      .to(
        `.${parentDivClass.value}`,
        {
          width: "90%",
          duration: 0.4,
        },
        "<"
      );
  } else {
    // Expansion
    timeline
      .to(`.${parentDivClass.value}`, {
        height: "100%",
        width: "100%",
        duration: 0.4,
        ease: "power4.in",
      })
      .to(
        `.${child2Class.value}`,
        {
          autoAlpha: 1,
          duration: 0.4,
        },
        "-=0.4"
      )
      .to(
        `.${child1Class.value}`,
        {
          fontSize: "3.2vh",
        },
        "<"
      )
      .to(
        `.${prefItemClass.value}`,
        {
          opacity: 1,
          duration: 0.6,
          stagger: 0.1,
        },
        "<0.2"
      );
  }

  isExpanded.value = !isExpanded.value;
}
</script>

<style scoped>
.parentDiv {
  will-change: height, width;
}

.child1 {
  will-change: font-size;
}

.child2 {
  will-change: opacity;
}

.prefItem {
  will-change: opacity;
}

.expanded .child1 {
  font-size: 3.2vh;
}
</style>
