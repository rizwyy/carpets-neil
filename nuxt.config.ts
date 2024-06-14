// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  devtools: { enabled: false },
  modules: ["@nuxtjs/tailwindcss", "@nuxt/fonts", "@pinia/nuxt"],
  app: {
    pageTransition: { name: "page", mode: "out-in" },
  },
});
