import srcModule from "../src/module";

export default defineNuxtConfig({
  modules: [
    srcModule,
    "@pinia/nuxt", // Added to show in devtools
    "@laioutr-core/frontend-core",
  ],
  laioutr: {},
  i18n: {
    bundle: {
      optimizeTranslationDirective: false,
    },
  },
  devtools: { enabled: true },
  compatibilityDate: "2025-09-11",
  vite: {
    optimizeDeps: {
      include: ["ajv", "json-source-map", "natural-compare-lite"],
    },
  },
});
