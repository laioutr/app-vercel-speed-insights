import type {
  RuntimeConfigModulePrivate,
  RuntimeConfigModulePublic,
} from "./module";

declare module "vue" {
  interface GlobalComponents {}
  interface ComponentCustomProperties {
    // Add your module's custom properties here
  }
}

declare module "@nuxt/schema" {
  interface PublicRuntimeConfig {
    ["@laioutr/app-vercel-speed-insights"]: RuntimeConfigModulePublic;
  }
  interface RuntimeConfig {
    ["@laioutr/app-vercel-speed-insights"]: RuntimeConfigModulePrivate;
  }
}

export {};
