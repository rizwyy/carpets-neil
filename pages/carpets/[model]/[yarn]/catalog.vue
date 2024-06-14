<template>
  <div class="h-screen w-screen">
    <div v-if="!isLoading" class="">
      <div v-for="item in getValidCookieData()" :key="item.name">
        <p>
          {{ item.name }}
        </p>
        <p>
          {{ item.price }}
        </p>
      </div>
    </div>
    <div v-else class="h-screen w-screen flex items-center justify-center">
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="32"
        height="32"
        viewBox="0 0 24 24"
      >
        <circle cx="12" cy="3.5" r="1.5" fill="currentColor" opacity="0">
          <animateTransform
            attributeName="transform"
            calcMode="discrete"
            dur="2.4s"
            repeatCount="indefinite"
            type="rotate"
            values="0 12 12;90 12 12;180 12 12;270 12 12"
          />
          <animate
            attributeName="opacity"
            dur="0.6s"
            keyTimes="0;0.5;1"
            repeatCount="indefinite"
            values="1;1;0"
          />
        </circle>
        <circle cx="12" cy="3.5" r="1.5" fill="currentColor" opacity="0">
          <animateTransform
            attributeName="transform"
            begin="0.2s"
            calcMode="discrete"
            dur="2.4s"
            repeatCount="indefinite"
            type="rotate"
            values="30 12 12;120 12 12;210 12 12;300 12 12"
          />
          <animate
            attributeName="opacity"
            begin="0.2s"
            dur="0.6s"
            keyTimes="0;0.5;1"
            repeatCount="indefinite"
            values="1;1;0"
          />
        </circle>
        <circle cx="12" cy="3.5" r="1.5" fill="currentColor" opacity="0">
          <animateTransform
            attributeName="transform"
            begin="0.4s"
            calcMode="discrete"
            dur="2.4s"
            repeatCount="indefinite"
            type="rotate"
            values="60 12 12;150 12 12;240 12 12;330 12 12"
          />
          <animate
            attributeName="opacity"
            begin="0.4s"
            dur="0.6s"
            keyTimes="0;0.5;1"
            repeatCount="indefinite"
            values="1;1;0"
          />
        </circle>
      </svg>
    </div>
  </div>
</template>

<script setup>
// PACKAGES
// COOKIES
import { useCookie } from "#app";
const myCookie = useCookie("myCookieName");
// LAYOUTS
import Mobile from "~/layouts/Mobile.vue";
import Desktop from "~/layouts/Desktop.vue";

// PINIA
import useUserStore from "../../../stores/user";
import scrapeProducts from "~/composables/scrapeData";
const userStore = useUserStore();

// REACTIVES
const cookieData = ref([]);
const isLoading = ref(true);
const route = useRoute();

// FUNCTION CALLS

function getValidCookieData() {
  const rawCookieData = toRaw(cookieData.value);
  const rawMyCookie = toRaw(myCookie.value);

  if (!Array.isArray(rawCookieData) && !Array.isArray(rawMyCookie)) {
    console.error("Both variables are not arrays");
    return;
  }

  const validArray =
    Array.isArray(rawCookieData) && rawCookieData.length > 1
      ? rawCookieData
      : Array.isArray(rawMyCookie) && rawMyCookie.length > 1
      ? rawMyCookie
      : null;

  if (validArray) {
    return validArray;
  } else {
    console.warn("FETCH FUNCTION MUST BE CALLED");
  }
}

onMounted(() => {
  if (Array.isArray(toRaw(myCookie.value))) {
    isLoading.value = false;
    cookieData.value = toRaw(myCookie.value);
  } else {
    console.error("CALLING FETCH FUNCTION");
    scrapeProducts();
  }
});
userStore.products = toRaw(myCookie.value);
</script>

<style lang="scss" scoped></style>
