<script setup>
const { name, color, price, currency, src } = defineProps([
  "name",
  "color",
  "price",
  "currency",
  "src",
]);
</script>

<template>
  <div class="h-max w-max flex flex-col items-start font-outfit-400">
    <div class="h-[28vh] w-[20vw] overflow-hidden relative">
      <img
        loading="lazy"
        class="h-full w-full object-cover"
        :src="
          color
            ? `https://iqhciavbeulhroqoskbu.supabase.co/storage/v1/object/public/images_carpets/${color}`
            : `/carpets/${getColorAfterHyphen(color)}.webp`
        "
        :alt="color"
      />
    </div>
    <div
      class="productDetails_PC pt-[1vh] h-max w-full flex flex-col items-start gap-[.4vh] justify-start pl-[.6vw] pr-[.4vw]"
    >
      <div class="h-max w-full flex justify-between items-center">
        <span class="font-[600] text-[2.4vh]">{{ name }}</span>
        <span class="text-[#888] text-[2vh]">{{
          getColorAfterHyphen(color)
        }}</span>
      </div>
      <div
        class="h-max w-full flex justify-between items-center pt-[.4vh] gap-[.2vw]"
      >
        <div
          class="h-max w-max flex gap-[.2vw] items-center text-[#222] font-[400] text-[1.8vh]"
        >
          <span class="text-[2vh] flex gap-[.4vw] font-[500]"
            ><span>From</span>{{ currency }}</span
          >
          <span class="text-[2.4vh] font-[600]">{{ price }}</span>
        </div>
      </div>
      <div class="h-max w-full flex justify-start pt-[.4vh]">
        <span class="text-[2vh] underline underline-offset-[.4vh]"
          >View Details</span
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
  font-style: normal;
}
</style>
