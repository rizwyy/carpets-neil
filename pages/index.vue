<template>
  <!-- MOBILE -->
  <Mobile>
    <NavBarD3MOB />
    <HeroLayout5 />
  </Mobile>
</template>

<script setup>
import NavBarD3MOB from "./../components/NavBar-D3-MOB.vue";
import HeroLayout5 from "./../components/HeroLayout-5.vue";
import useUserStore from "../stores/user";
const userStore = useUserStore();
import Mobile from "../layouts/Mobile.vue";

// function proxiesToObjects(proxies) {
//   return proxies.map((proxy) => JSON.parse(JSON.stringify(proxy)));
// }
// const proxyObjects = Object.values(userStore.inventory).flat();
// const allItems = proxiesToObjects(proxyObjects);

// function getItemById(array, id) {
//   return array.find((item) => item.id === id);
// }
// function doesIdExist(array, id) {
//   return array.some((item) => item.id === id);
// }
</script>

<style scoped>
.font-outfit {
  font-family: "Outfit", sans-serif;
  font-optical-sizing: auto;
  font-weight: 500;
  font-style: normal;
}
</style>
