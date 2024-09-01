// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  devtools: { enabled: false },
  modules: [
    "@nuxtjs/tailwindcss",
    "@nuxt/fonts",
    "@pinia/nuxt",
    "@nuxtjs/supabase",
    "@nuxt/image",
  ],
  tailwindcss: {
    config: {
      /* Extend the Tailwind config here */
      content: ["content/**/**.md"],
      theme: {
        extend: {
          fontSize: {
            bannerContainer_heading_MOB: "5.4vh", //MOBILE -> BANNER -> HEADING
            gridContainer_heading_MOB: "3vh", //MOBILE -> GRID LAYOUT -> CONTAINER -> HEADING
            gridContainer_anchor_MOB: "1.8vh", //MOBILE -> GRID LAYOUT -> CONTAINER -> ANCHOR
            detailsContainer_heading_MOB: "3.2vh", //MOBILE -> DETAILS -> CONTAINER -> HEADING
            detailsContainer_clearAllText_MOB: "1.6vh", //MOBILE -> DETAILS -> CONTAINER -> CLEAR ALL
            detailsContainer_inputText_MOB: "2vh", // MOBILE -> DETAILS-> CONTAINER -> INPUT
            gridContainer_desc_PC: "1.2vw", //LAPTOP -> GRID LAYOUT -> CONTAINER -> DESC
            gridContainer_heading_PC: "2.4vw", //LAPTOP -> GRID LAYOUT -> CONTAINER -> HEADING
            gridContainer_anchor_PC: "1.2vw", //LAPTOP -> GRID LAYOUT -> CONTAINER -> ANCHOR
            detailsContainer_heading_PC: "2.4vw", //LAPTOP -> DETAILS -> CONTAINER -> HEADING
            specCard_span_MOB: "2vh",
          },
          colors: {
            navBarBG: "#fff",
            detailsBG: "#fffdf5",
            detailsFrom: "#fff",
            detailsTo: "#f1f1f1",
            detailsHeadCLR: "#222",
            // REVIEW CARD
            prefCard: "#EBF2FE",
            prefCardBG: "#fff",
          },
        },
      },
    },
  },
  supabase: {
    redirect: false,
  },
  runtimeConfig: {
    public: {
      SUPABASE_URL: process.env.SUPABASE_URL,
      SUPABASE_KEY: process.env.SUPABASE_KEY,
    },
  },
});
