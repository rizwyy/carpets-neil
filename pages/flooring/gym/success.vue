<template>
  <div>
    <NavBarMOB />
    <div
      class="h-[78vh] w-screen flex flex-col justify-evenly items-center font-outfit gap-[8.8vh] px-[4vw]"
    >
      <div
        class="h-max w-max flex flex-col justify-center items-center gap-[4.8vh]"
      >
        <svg
          class="checkmark"
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 52 52"
        >
          <circle
            class="checkmark__circle"
            cx="26"
            cy="26"
            r="25"
            fill="none"
          />
          <path
            class="checkmark__check"
            fill="none"
            d="M14.1 27.2l7.1 7.2 16.7-16.8"
          />
        </svg>
        <span class="text-[2.8vh] text-center">Thank you!</span>
      </div>
      <span class="text-[2.4vh] text-center text-[#333]">
        Your order is confirmed. <br />
        We’ll reach out to you soon.</span
      >
    </div>
  </div>
</template>

<script setup>
import NavBarMOB from "./../../../components/MOBILE/NavBarMOB.vue";
const userPreference = useCookie("userPreference");
console.log(toRaw(userPreference.value.spec_1));
onMounted(() => {
  setTimeout(() => {
    const link = generateWhatsAppLink(
      "97333008801",
      `Hello, I would like to confirm my order. Please proceed with the following details:

Product Specifications: ${toRaw(userPreference.value.spec_1)},${toRaw(
        userPreference.value.spec_2
      )},${toRaw(userPreference.value.spec_3)}, ${toRaw(
        userPreference.value.spec_4
      )}, ${toRaw(userPreference.value.color)}, ${toRaw(
        userPreference.value.budget
      )}
Thank you! Looking forward to your confirmation.`
    );
    window.open(link, "_blank");
  }, 3000);
});
</script>

<style scoped>
.font-outfit {
  font-family: "Outfit", sans-serif;
  font-optical-sizing: auto;
  font-weight: 400;
  font-style: normal;
}
.checkmark {
  width: 100px;
  height: 100px;
  border-radius: 50%;
  display: block;
  stroke-width: 2;
  stroke: #4bb71b;
  stroke-miterlimit: 10;
  box-shadow: inset 0px 0px 0px #4bb71b;
  animation: fill 0.4s ease-in-out 0.4s forwards,
    scale 0.3s ease-in-out 0.9s both;
  position: relative;
  top: 5px;
  right: 5px;
  margin: 0 auto;
}
.checkmark__circle {
  stroke-dasharray: 166;
  stroke-dashoffset: 166;
  stroke-width: 2;
  stroke-miterlimit: 10;
  stroke: #4bb71b;
  fill: #fff;
  animation: stroke 0.6s cubic-bezier(0.65, 0, 0.45, 1) forwards;
}

.checkmark__check {
  transform-origin: 50% 50%;
  stroke-dasharray: 48;
  stroke-dashoffset: 48;
  animation: stroke 0.3s cubic-bezier(0.65, 0, 0.45, 1) 0.8s forwards;
}

@keyframes stroke {
  100% {
    stroke-dashoffset: 0;
  }
}

@keyframes scale {
  0%,
  100% {
    transform: none;
  }

  50% {
    transform: scale3d(1.1, 1.1, 1);
  }
}

@keyframes fill {
  100% {
    box-shadow: inset 0px 0px 0px 30px #4bb71b;
  }
}
</style>
