<template>
  <!-- PREFERENCE PARENT DIV -->
  <div class="max-[990px]:hidden h-max w-[24vw] relative">
    <!-- UNEXPANDED -->
    <div class="h-max w-full bg-[#e9e9e9]">
      <span
        :style="{
          border: '1px solid',
          borderRadius: !isExpanded ? '0.375rem' : '0.375rem 0.375rem 0 0',
        }"
        class="h-max w-full inline-block px-[3.2vw] text-[2.4vh] py-[2vh] flex justify-between items-center rounded-t-md border-[1px] border-[#999] text-[#444]"
      >
        {{ userStore.preference.flooring }}
        <span
          v-show="!isExpanded"
          @click="handleExpansion"
          class="text-[1.4vh] text-[#999] cursor-pointer"
          ><svg
            xmlns="http://www.w3.org/2000/svg"
            class="h-[3.8vh]"
            viewBox="0 0 24 24"
          >
            <path
              fill="#444"
              d="M12 14.975q-.2 0-.375-.062T11.3 14.7l-4.6-4.6q-.275-.275-.275-.7t.275-.7t.7-.275t.7.275l3.9 3.9l3.9-3.9q.275-.275.7-.275t.7.275t.275.7t-.275.7l-4.6 4.6q-.15.15-.325.213t-.375.062"
            /></svg
        ></span>
        <span
          v-show="isExpanded"
          @click="handleMinimize"
          class="text-[1.4vh] h-full w-max text-[#999] cursor-pointer"
          ><svg
            xmlns="http://www.w3.org/2000/svg"
            class="h-[3.8vh]"
            viewBox="0 0 24 24"
          >
            <path
              fill="#444"
              d="m12 10.8l-3.9 3.9q-.275.275-.7.275t-.7-.275t-.275-.7t.275-.7l4.6-4.6q.3-.3.7-.3t.7.3l4.6 4.6q.275.275.275.7t-.275.7t-.7.275t-.7-.275z"
            /></svg
        ></span>
      </span>
    </div>
    <!-- EXPANDED -->
    <transition @beforeEnter="handleBeforeExpandAnimation_PreferenceCardPC">
      <div
        v-show="isExpanded"
        class="h-max w-[24vw] flex flex-col items-start gap-[4.2vh] py-[4vh] px-[2vw] border-black border-[1px] rounded-b-md"
      >
        <div>
          <span class="mt-[1vh] w-full specItems opacity-0"
            ><span>Category/Application:&nbsp;</span
            >{{ userStore.preference.spec_1 }}</span
          >
        </div>
        <div>
          <span class="mt-[1vh] w-full specItems opacity-0"
            ><span>Activity/Type:&nbsp;</span
            >{{ userStore.preference.spec_2 }}</span
          >
        </div>
        <div>
          <span class="mt-[1vh] w-full specItems opacity-0"
            ><span>Material/Style:&nbsp;</span
            >{{ userStore.preference.spec_3 }}</span
          >
        </div>
        <div
          class="h-max w-full flex flex-col justify-between gap-[3.2vh] items-start"
        >
          <span>
            <span
              v-show="!Array.isArray(userStore.preference.spec_4)"
              class="w-full h-max opacity-0 specItems"
              ><span>Finish:&nbsp; </span
              >{{
                userStore.preference.spec_4 === ""
                  ? "N/A"
                  : userStore.preference.spec_4
              }}</span
            >
            <span
              v-show="Array.isArray(userStore.preference.spec_4)"
              class="w-full specItems opacity-0"
            >
              <span>Finish:&nbsp;</span>
              <span v-show="userStore.preference.spec_4.length > 0">
                <span
                  v-for="(surface, index) in userStore.preference.spec_4"
                  :key="index"
                >
                  {{ surface
                  }}<span
                    v-show="index < userStore.preference.spec_4.length - 1"
                    >,
                  </span>
                </span>
              </span>
              <span v-show="!(userStore.preference.spec_4.length > 0)"
                >N/A</span
              >
            </span>
          </span>
          <span class="w-max text-right opacity-0 specItems"
            >Budget:
            {{
              getPriceRange(
                userStore.preference.budget,
                userStore.preference.country
              )
            }}&nbsp;({{ userStore.preference.budget }})</span
          >
        </div>
        <div class="h-max w-full flex flex-col gap-[1.8vh]">
          <span class="font-[400] specItems opacity-0">Colors Opted:</span>
          <div class="h-max w-full grid grid-cols-3 gap-[2vh]">
            <span
              v-show="userStore.preference.color.length > 0"
              class="w-max text-[#999] px-[1vw] rounded-sm border-[2px] border-[#999] font-[400] text-center py-[.8vh] specItems opacity-0"
              v-for="(color, index) in userStore.preference.color"
              :key="index"
              :style="{
                background: getColorHex(color),
              }"
              >{{ color }}
            </span>
          </div>
        </div>
      </div>
    </transition>
  </div>
</template>

<script setup>
import gsap from "gsap";
import useUserStore from "~/stores/user";

const userStore = useUserStore();
const isExpanded = ref(false);

function handleBeforeExpandAnimation_PreferenceCardPC() {
  gsap.to(".specItems", {
    y: 0,
    duration: 0.4,
    opacity: 1,
    stagger: 0.1,
    ease: "back.in",
  });
}

function handleExpansion() {
  isExpanded.value = true;
}
function handleMinimize() {
  isExpanded.value = false;
}
</script>

<style lang="scss" scoped></style>
