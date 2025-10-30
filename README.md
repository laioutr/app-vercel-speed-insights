# Vercel Speed Insights (Laioutr App)

[![npm version][npm-version-src]][npm-version-href]
[![npm downloads][npm-downloads-src]][npm-downloads-href]
[![License][license-src]][license-href]
[![Nuxt][nuxt-src]][nuxt-href]

Purpose: Integrate Vercel's Speed Insights into Laioutr.

- [✨ &nbsp;Release Notes](/CHANGELOG.md)

## Features

- **Native Laioutr App**: Seamlessly adds Vercel Speed Insights to your Laioutr Frontend.
- **Nuxt integration**: Ships as a Nuxt module used by Laioutr Frontend.
- **Zero-config**: No need to configure anything. Install the app and see the insights in your dashboard.

## Quick Setup

Before installing dependencies, you need to create a copy of the `.npmrc.config` file called `.npmrc` and fill in the `NPM_LAIOUTR_TOKEN` with your npm token. You can find this token in your [project settings](https://cockpit.laioutr.cloud/o/_/p/_/settings).

- `pnpm i`
- `npx @laioutr/cli project fetch-rc -p <organization slug>/<project slug> -s <project secret key>` - This will load the `laioutrrc.json` file with the current remote project configuration.
- `pnpm dev`

That's it! You can now use the Vercel Speed Insights app in your Laioutr Frontend ✨

You can find a thorough guide on getting started with Laioutr development in our [developer guide](https://docs.laioutr.io/developer-guide/setup).

## Publishing

To publish a new version, run `pnpm release`. This will:

- Run the tests
- Update the changelog
- Publish the package to npmjs.org
- Push the changes to the repository

### Private publishing

If you want to publish a private package to npm.laioutr.cloud, you need to:

1. Make sure you have a `.npmrc` with your private npm registry token.
2. Add this line to the `package.json` file: `"publishConfig": { "registry": "https://npm.laioutr.cloud/" }`
3. Make sure your package-name follows the `@laioutr-org/<organization-slug>_<package-name>` format.

## Contribution

Follow the [setup guide](https://docs.laioutr.io/developer-guide/setup) to get started.

<!-- Badges -->

[npm-version-src]: https://img.shields.io/npm/v/%40laioutr-app%2Fvercel-speed-insights/latest.svg?style=flat&colorA=020420&colorB=00DC82
[npm-version-href]: https://npmjs.com/package/@laioutr-app/vercel-speed-insights
[npm-downloads-src]: https://img.shields.io/npm/dm/%40laioutr-app%2Fvercel-speed-insights.svg?style=flat&colorA=020420&colorB=00DC82
[npm-downloads-href]: https://npm.chart.dev/@laioutr-app/vercel-speed-insights
[license-src]: https://img.shields.io/npm/l/%40laioutr-app%2Fvercel-speed-insights.svg?style=flat&colorA=020420&colorB=00DC82
[license-href]: https://npmjs.com/package/@laioutr-app/vercel-speed-insights
[nuxt-src]: https://img.shields.io/badge/Nuxt-020420?logo=nuxt.js
[nuxt-href]: https://nuxt.com
