<script setup lang="ts">
import { useRuntimeConfig } from "#app";
import { SpeedInsights } from "@vercel/speed-insights/nuxt";

const config = useRuntimeConfig().public["@laioutr/app-vercel-speed-insights"];
</script>

<template>
  <slot />
  <SpeedInsights :sample-rate="config.sampleRate ?? 1" />
</template>
