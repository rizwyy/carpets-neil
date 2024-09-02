import { defineStore } from "pinia";

const useUserStore = defineStore("user", {
  state: () => ({
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

    // Action to update the cart
    updateCart() {
      if (
        this.preference.spec_1 !== "" &&
        this.preference.spec_2 !== "" &&
        this.preference.budget !== "" &&
        this.preference.color.length > 0 &&
        this.userData.name !== ""
      ) {
        const newCartItem = {
          budget: this.preference.budget,
          color: this.preference.color || [],
          country: this.preference.country || "Bahrain",
          flooring: this.preference.flooring,
          isOrderConfirmed: false,
          orderMethod: this.preference.orderMethod,
          spec_1: this.preference.spec_1,
          spec_2: this.preference.spec_2,
          spec_3: this.preference.spec_3 || "",
          spec_4: this.preference.spec_4 || "",
          spec_5: this.preference.spec_5 || "",
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
