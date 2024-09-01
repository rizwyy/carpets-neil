import { defineStore } from "pinia";

const useUserStore = defineStore("user", {
  state: () => ({
    products: [],
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
    // Action to get history
    async getHistory() {
      try {
        // Ensure the mobile number is provided
        const mobile = this.userData.phone;
        if (!mobile) {
          throw new Error("Mobile number is required");
        }

        // Fetch preferences by mobile number
        const { data, error } = await useFetch(
          `/api/get-log?mobile=${mobile}`,
          {
            method: "GET",
            headers: {
              "Content-Type": "application/json",
            },
          }
        );

        if (error?.value) {
          throw new Error(error.value.message);
        }

        // Check if data is available and process it
        if (data?.value?.length > 0) {
          const preferences = data.value;

          // Clear existing non-PINIA items from the cart
          this.cart = this.cart.filter((item) => item.id === "PINIA");

          // Loop through the array of preferences and add them to the cart
          const preferencesWithId = preferences.map((pref) => {
            const { preference, id } = pref; // Destructure the preference and id
            return { ...preference, id }; // Return a new object with the id included
          });

          // Add all preferences to the cart at once
          this.cart.push(...preferencesWithId);

          console.log("Preferences added to cart:", this.cart);
        } else {
          console.log("No preferences found.");
        }

        // Ensure the first item in the cart has id 'PINIA'
        this.updateCart();
      } catch (error) {
        console.error("Failed to fetch or process preferences:", error);
        // Optionally handle errors, such as clearing the cart or showing an error message
      }
    },
  },
});
export default useUserStore;
