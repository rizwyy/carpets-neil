import { defineStore } from "pinia";

const useUserStore = defineStore("user", {
  state: () => ({
    inventory: {
      marbles: [
        {
          id: 10001,
          name: "Imperium marbles",
          price: { value: 200, currency: "BHD" },
          availableItems: 40,
        },
        {
          id: 10002,
          name: "Italian marbles",
          price: { value: 200, currency: "BHD" },
          availableItems: 50,
        },
      ],

      carpets: [
        {
          id: 20001,
          name: "Irish Carpets",
          price: { value: 200, currency: "BHD" },
          availableItems: 20,
        },
        {
          id: 20002,
          name: "Bumstead Carpets",
          price: { value: 200, currency: "BHD" },
          availableItems: 10,
        },
        {
          id: 20001,
          name: "Irish Carpets",
          price: { value: 200, currency: "BHD" },
          availableItems: 20,
        },
        {
          id: 20002,
          name: "Bumstead Carpets",
          price: { value: 200, currency: "BHD" },
          availableItems: 10,
        },
        {
          id: 20001,
          name: "Irish Carpets",
          price: { value: 200, currency: "BHD" },
          availableItems: 20,
        },
        {
          id: 20002,
          name: "Bumstead Carpets",
          price: { value: 200, currency: "BHD" },
          availableItems: 10,
        },
        {
          id: 20001,
          name: "Irish Carpets",
          price: { value: 200, currency: "BHD" },
          availableItems: 20,
        },
        {
          id: 20002,
          name: "Bumstead Carpets",
          price: { value: 200, currency: "BHD" },
          availableItems: 10,
        },
        {
          id: 20001,
          name: "Irish Carpets",
          price: { value: 200, currency: "BHD" },
          availableItems: 20,
        },
        {
          id: 20002,
          name: "Bumstead Carpets",
          price: { value: 200, currency: "BHD" },
          availableItems: 10,
        },
      ],
    },
    preference: {
      type: [],
      color: [],
      yarn: [],
      pile: [],
    },
  }),
});
export default useUserStore;
