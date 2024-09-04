import { defineStore } from "pinia";
import { preferenceAbbreviations } from "./../utils/abbreviations.js";

const useUserStore = defineStore("user", {
  state: () => ({
    specCount: 0,
    isFormValidated: false,
    customPreference: {
      category: "",
    },
    flooringHistory: [],
    cart: [],

    preference: {
      flooring: "",

      spec_1: "",
      spec_2: "",
      spec_3: "",
      spec_4: "",
      spec_5: "",
      color: [],
      budget: "",
      orderMethod: "",
      country: "Bahrain",
    },
    userData: { name: "", email: "", phone: "", id: 0 },
  }),
  actions: {
    resetPreference() {
      this.preference = {
        flooring: "",
        spec_1: "",
        spec_2: "",
        spec_3: "",
        spec_4: "",
        spec_5: "",
        color: [],
        budget: "",
        orderMethod: "",
        country: "Bahrain",
      };
    },

    // Action to delete an item from the cart by id
    deleteCartItem(id) {
      const index = this.cart.findIndex((item) => item.id === id);
      if (index !== -1) {
        this.cart.splice(index, 1);
        console.log(`Item with id ${id} has been removed from the cart.`);
      } else {
        console.log(`Item with id ${id} not found in the cart.`);
      }
    },

    // Action to update the cart and specCount
    updateCart() {
      const { spec_1, spec_2, spec_3, spec_4, spec_5, budget, color } =
        this.preference;

      // Check if all required fields are filled
      if (this.isFormValidated) {
        const newCartItem = {
          budget,
          color: color || [],
          country: this.preference.country || "Bahrain",
          flooring: this.preference.flooring,
          isOrderConfirmed: false,
          orderMethod: this.preference.orderMethod,
          spec_1,
          spec_3: spec_3 || "",
          spec_4: spec_4 || "",
          spec_5: spec_5 || "",
          id: "PINIA", // Ensure the id is always "PINIA"
        };

        // Remove any existing item with the id "PINIA"
        this.cart = this.cart.filter((item) => item.id !== "PINIA");

        // Add the new item with the id "PINIA" to the start of the cart
        this.cart.unshift(newCartItem);

        console.log("CART UPDATED::", this.cart);
        this.updateCookie();
      } else {
        console.log("-");
      }
    },
    // Action to update Cookie
    updateCookie() {
      const pref = useCookie("pref");

      const p = this.preference;

      // Helper function to get abbreviation by finding the key in the preferenceAbbreviations object
      const getAbbreviation = (value) =>
        Object.keys(preferenceAbbreviations).find(
          (key) => preferenceAbbreviations[key] === value
        ) || value;

      // Create preference string with abbreviations, including colors
      const preferenceString = `${getAbbreviation(
        p.flooring
      )}|${getAbbreviation(p.spec_1)}|${getAbbreviation(
        p.spec_2
      )}|${getAbbreviation(p.spec_3)}|${getAbbreviation(
        p.spec_4
      )}|${getAbbreviation(p.spec_5)}|${p.color
        .map((color) => getAbbreviation(color))
        .join(",")}|${getAbbreviation(p.budget)}`;

      pref.value = preferenceString;

      console.log(`Updated cookie: ${preferenceString}`);
    },
  },
});
export default useUserStore;
