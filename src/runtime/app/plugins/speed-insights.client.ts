import { defineNuxtPlugin, useRouter, useRoute, useRuntimeConfig } from "#app";
import { injectSpeedInsights, computeRoute } from "@vercel/speed-insights";

export function getBasePath(): string | undefined {
  try {
    return (
      import.meta as unknown as { env: Record<string, string | undefined> }
    ).env.VITE_VERCEL_OBSERVABILITY_BASEPATH;
  } catch {
    // do nothing
  }
}

export function getConfigString(): string | undefined {
  try {
    return (
      import.meta as unknown as { env: Record<string, string | undefined> }
    ).env.VITE_VERCEL_OBSERVABILITY_CLIENT_CONFIG;
  } catch {
    // do nothing
  }
}

export default defineNuxtPlugin(() => {
  const config =
    useRuntimeConfig().public["@laioutr/app-vercel-speed-insights"];
  const router = useRouter();
  const route = useRoute();

  const speedInsights = injectSpeedInsights(
    {
      sampleRate: config.sampleRate ?? 1,
      route: computeRoute(route.path, route.params),
      framework: "nuxt",
      basePath: getBasePath(),
    },
    getConfigString(),
  );

  router.afterEach((to) => {
    speedInsights?.setRoute(computeRoute(to.path, to.params));
  });
});
