import { defineStore } from "pinia";

const useUserStore = defineStore("user", {
  state: () => ({
    products: [],
    customPreference: {
      category: "",
    },
    preference: {
      flooring: "",

      spec_1: "",
      spec_2: "",
      spec_3: "",
      spec_4: "",
      spec_5: "",
      color: [],
      budget: "",

      msgType: "",
    },
  }),
});
export default useUserStore;
