# Spreadshop Website Demo using Contentful

Spreadshop Website Demo using Contentul. 

## Getting started

### Installing dependencies

```
yarn
```

### Running locally

Copy `.env.example` to `.env` and adapt the environment to your setup:

- `CF_SPACE_ID`: The ID of a Compose compatible space to be used
- `CF_DELIVERY_ACCESS_TOKEN`: A delivery API key for the space
- `CF_PREVIEW_ACCESS_TOKEN`: A preview API key for the space

and then

```
yarn run dev
```

to start the website on `http://localhost:3000`

## Tech used

- [Next.js 9.x][nextjs]
- [TypeScript 3.x][typescript]
- [Tailwind CSS][tailwind]

## Project structure

```
public/
src/
  ├ components
  ├ lib
  │   ├ translations/
  │   ├ types/
  │   ├ api.ts
  │   └ ... etc
  │
  ├ pages/
  │    ├ [locale]/
  │    │   ├ articles/
  │    │   │    └ [slug].tsx
  │    │   │
  │    │   ├ [slug].tsx
  │    │   └ index.ts
  │    │
  │    ├ ...
  │    └ index.tsx
  │
  └ styles/
next.config.js
...
```

- **src/pages**
  Lists all the pages/routes on the website. See the official Next.js [documentation][pages] about pages for more information.

- **src/components**
  It contains all React components other than Pages. The most important components here, those under `src/components/renderer`, correspond directly to the Content Types we support previewing.

  The `block-renderer.tsx` responsibility is to correctly render a given entry depending on its Content Type.

- **src/lib**

  It contains any code that isn't a component or a Page, notably the fetching and translation logic and Content Types definitions (see below).

## Generating Content Types

We use [cf-content-types-generator][cf-content-types-generator] to keep the Content Types definitions in `src/lib/types` in sync with the space we use.

```shell
# Credentials to be used by cf-content-types-generator (see package.json)
export CF_SPACE_ID=<space-id>
export CF_CMA_TOKEN=<your-cma-token>

# Generate
yarn generate-types
```