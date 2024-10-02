import useUserStore from "~/stores/user";
const userStore = useUserStore();

export function testPinia() {
  console.log(userStore.preference);
}
