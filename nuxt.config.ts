// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  meta: {
    link: [{ rel: "icon", type: "image/x-icon", href: "/favicon.ico" }],
  },
  css: [],
  modules: ["@pinia/nuxt", "@nuxtjs/tailwindcss"],
  buildModules: [],
  build: {
    transpile: [
      // '@heroicons/vue' // uncomment if you are using heroicons
    ],
  },
  tailwindcss: {
    cssPath: "~/assets/css/tailwind.css",
    configPath: "tailwind.config",
    exposeConfig: false,
    config: {},
    injectPosition: 0,
    viewer: true,
  },
  vite: {
    optimizeDeps: {
      include: ["vue"],
    },
  },
});
