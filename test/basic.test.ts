import { fileURLToPath } from "node:url";
import { describe, it, expect } from "vitest";
import { setup, createPage } from "@nuxt/test-utils/e2e";

describe("module", async () => {
  await setup({
    rootDir: fileURLToPath(new URL("./fixtures/basic", import.meta.url)),
    browser: true,
  });

  it("renders the index page with speed insights", async () => {
    const page = await createPage("/");
    const html = await page.innerHTML("html");
    expect(html).toContain('data-sdkn="@vercel/speed-insights/nuxt"');
  });
});
