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
            bannerMOB: "5.4vh",
            headingMOB: "5.8vh",
            subHeadingMOB: "5.8vh",
            viewAllMOB: "1.8vh",
            inputMOB: "2vh",
            clearAllMOB: "1.6vh",
            details_Box_Heading_PC: "2.4vw",
          },
          colors: {
            navBarBG: "#fff",
            detailsBG: "#fffdf5",
            detailsFrom: "#ebf4f5",
            detailsTo: "#f1f1f1",
            detailsHeadCLR: "#222",
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
