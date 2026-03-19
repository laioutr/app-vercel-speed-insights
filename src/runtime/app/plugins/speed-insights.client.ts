import { defineNuxtPlugin, useRuntimeConfig } from "#app";
import { injectSpeedInsights } from "@vercel/speed-insights/nuxt/runtime";

export default defineNuxtPlugin(() => {
  const config =
    useRuntimeConfig().public["@laioutr/app-vercel-speed-insights"];

  injectSpeedInsights({
    sampleRate: config.sampleRate ?? 1,
  });
});
