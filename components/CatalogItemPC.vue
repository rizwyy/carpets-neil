<script setup>
const { name, color, price, currency, src } = defineProps([
  "name",
  "color",
  "price",
  "currency",
  "src",
]);
const route = useRoute();
</script>

<template>
  <div class="h-max w-max flex flex-col items-start font-outfit-400">
    <div class="h-[20vh] w-[12vw] overflow-hidden relative">
      <img
        class="h-full w-full object-cover"
        :src="`/carpets/${color}.jpg`"
        :alt="color"
      />
    </div>
    <div
      class="productDetails_PC pt-[1vh] h-max w-full flex flex-col items-start justify-start pl-[.6vw] pr-[.4vw]"
    >
      <div class="h-max w-full flex justify-between items-center">
        <span class="font-[600] text-[1.6vh]">{{ name }}</span>
        <span class="text-[#888] text-[1.6vh]">{{ color }}</span>
      </div>
      <div
        class="h-max w-full flex justify-between items-center pt-[.4vh] gap-[.2vw]"
      >
        <div
          class="h-max w-max flex gap-[.2vw] items-center text-[#888] font-[400] text-[1.8vh]"
        >
          <span class="text-[2vh] flex gap-[.4vw]"
            ><span>From</span>{{ currency }}</span
          >
          <span class="text-[2.2vh]">{{ price }}</span>
        </div>
      </div>
      <div class="h-max w-full flex justify-start pt-[.4vh]">
        <a class="text-[1.8vh] underline underline-offset-[.4vh]" href="#"
          >View Details</a
        >
      </div>
    </div>
  </div>
</template>

<style scoped>
.font-outfit-300 {
  font-family: "Outfit", sans-serif;
  font-optical-sizing: auto;
  font-weight: 300;
  font-style: normal;
}
.font-outfit-400 {
  font-family: "Outfit", sans-serif;
  font-optical-sizing: auto;
  font-weight: 400;
  font-style: normal;
}
.font-outfit-500 {
  font-family: "Outfit", sans-serif;
  font-optical-sizing: auto;
  font-weight: 500;
}
</style>
