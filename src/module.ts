import {
  defineNuxtModule,
  createResolver,
  installModule,
  addComponent,
} from "@nuxt/kit";
import { defu } from "defu";
import { name, version } from "../package.json";
import { registerLaioutrApp } from "@laioutr-core/kit";

/**
 * The options the module adds to the nuxt.config.ts.
 */
export interface ModuleOptions {
  sampleRate?: number;
}

/**
 * The config the module adds to nuxt.runtimeConfig.public['@laioutr/app-vercel-speed-insights']
 */
export interface RuntimeConfigModulePublic {
  sampleRate?: number;
}

/**
 * The config the module adds to nuxt.runtimeConfig['@laioutr/app-vercel-speed-insights']
 */
export interface RuntimeConfigModulePrivate extends ModuleOptions {}

export default defineNuxtModule<ModuleOptions>({
  meta: {
    name,
    version,
    configKey: name, // configKey must match package name
  },
  // Default configuration options of the Nuxt module
  defaults: {
    sampleRate: 1, // 100%
  },
  async setup(options, nuxt) {
    const { resolve } = createResolver(import.meta.url);
    const resolveRuntimeModule = (path: string) => resolve("./runtime", path);

    nuxt.options.build.transpile.push(resolve("./runtime"));

    // Runtime configuration for this module
    // These two statements can be removed if you don't provide a runtime config
    nuxt.options.runtimeConfig[name] = defu(
      nuxt.options.runtimeConfig[name] as Parameters<typeof defu>[0],
      options
    );
    nuxt.options.runtimeConfig.public[name] = defu(
      nuxt.options.runtimeConfig.public[name] as Parameters<typeof defu>[0],
      { sampleRate: options.sampleRate }
    );

    await registerLaioutrApp({
      name,
      version,
      pageWrapper: ["VercelSpeedInsightsWrapper"],
    });

    addComponent({
      filePath: resolveRuntimeModule(
        "app/components/VercelSpeedInsightsWrapper.vue"
      ),
      name: "VercelSpeedInsightsWrapper",
      global: true,
    });

    // Install peer-dependency modules only on prepare-step.
    // This makes auto-imports and import-aliases work. Remove any modules you might not need.
    if (nuxt.options._prepare) {
      await installModule("@laioutr-core/frontend-core");
    }
  },
});
