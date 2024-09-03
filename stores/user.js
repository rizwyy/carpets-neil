import { defineStore } from "pinia";

const useUserStore = defineStore("user", {
  state: () => ({
    specCount: 0,
    isFormValidate: false,
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

      // Calculate specCount based on selected preferences
      this.specCount = [spec_1, spec_2, spec_3, spec_4, spec_5, budget]
        .concat(color.length > 0 ? "color" : [])
        .filter(Boolean).length;

      // Check if all required fields are filled
      if (
        spec_1 &&
        spec_2 &&
        budget &&
        color.length > 0 &&
        this.userData.name
      ) {
        const newCartItem = {
          budget,
          color: color || [],
          country: this.preference.country || "Bahrain",
          flooring: this.preference.flooring,
          isOrderConfirmed: false,
          orderMethod: this.preference.orderMethod,
          spec_1,
          spec_2,
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
      } else {
        console.log("-");
      }
    },
  },
});
export default useUserStore;
