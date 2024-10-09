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
    cartKey: Date.now(),
    isRefreshLoading: false,
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
      // Reset all user preferences to initial state
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
        country: "Bahrain", // Default country value
      };

      // Reset user data (if needed)
      this.userData = {
        name: "",
        email: "",
        phone: "",
        id: 0, // Assuming 0 is the default id
      };

      // Clear the cart
      this.cart = [];

      // Reset any other state, like form validation or spec count
      this.isFormValidated = false;
      this.specCount = 0;

      // Optionally reset other state variables
      this.cartKey = Date.now(); // If you use this for tracking the cart's freshness
    },
    // REMOVE PINIA OBJECT
    removePiniaObj() {
      this.cart = this.cart.filter((item) => item.id !== "PINIA");
      console.log("REMOVED PINIA OBJ 🟢");
    },
    // Action to delete an item from the cart by id
    deleteCartItem(id) {
      const index = this.cart.findIndex((item) => item.id === id);
      if (index !== -1) {
        this.cart.splice(index, 1);
        // console.log(`Item with id ${id} has been removed from the cart.`);
      } else {
        // console.log(`Item with id ${id} not found in the cart.`);
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
          spec_2: spec_2 || "",
          spec_3: spec_3 || "",
          spec_4: spec_4 || "",
          spec_5: spec_5 || "",
          id: "PINIA", // Ensure the id is always "PINIA"
        };

        // Remove any existing item with the id "PINIA"
        this.cart = this.cart.filter((item) => item.id !== "PINIA");

        // Add the new item with the id "PINIA" to the start of the cart
        this.cart.unshift(newCartItem);

        // console.log("CART UPDATED::", this.cart);
        this.updateCookie();
      } else {
      }
    },
    // Action to update the Key
    refreshCart() {
      this.cartKey = Date.now();
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
    },
    async getHistoryFromServer() {
      this.isRefreshLoading = true;

      try {
        let sanitizedPhone = this.userData.phone.startsWith("+")
          ? this.userData.phone.slice(1)
          : addCountryCode(this.userData.phone, this.preference.country).slice(
              1
            );

        const preferences = await fetchPreferencesByMobile(sanitizedPhone);

        if (preferences && preferences.data && preferences.data.length > 0) {
          preferences.data.forEach((pref) => {
            const preferenceData = pref.preference;
            const id = pref.id;

            const isAlreadyInCart = this.cart.some((item) => item.id === id);
            if (!isAlreadyInCart) {
              const preferenceWithId = { ...preferenceData, id };
              this.cart.push(preferenceWithId);
            } else {
              this.cart = toRaw(removeDuplicates(this.cart));
            }
          });

          // console.log("Preferences added to cart:", this.cart);
        } else {
          console.log("No preferences found.");
        }
      } catch (error) {
        console.error("Failed to fetch or process preferences:", error);
      } finally {
        setTimeout(() => {
          this.isRefreshLoading = false;
        }, 1000);
      }
    },
  },
});
export default useUserStore;
