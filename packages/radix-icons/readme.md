# Radix Icons

<!-- Need an image here of all the icons! -->

A crisp ⧉ icon set built by the [Modulz](https://www.modulz.app/about) team.

➤ Visit the [Icons page](https://deploy-preview-31--eager-lewin-57feec.netlify.com/icons) to explore further.

All icons are sourced from a single-source-of-truth [Figma file][figmafile], and made available as **React Components** and **individual SVGs**.

## Getting Started

#### React

All Icons are available as individual React Components.

- Supports Typescript
- Supports Treeshaking

```js
import { CameraIcon } from '@modulz/radix-icons';

render(<CameraIcon size="25" type="outline" />);
```

_Icons can be discovered on the [Icons page](https://www.modulz.app/icons)._

#### SVGs

All SVGs in the set are available in the package, and can be accessed with the following path-pattern from `node_modules`:

```js
'@modulz/radix-icons/<type>/<size>/<name>.svg';
```

By using a bundler (such as [Webpack](https://webpack.js.org), [Parcel](https://parceljs.org/) or [Rollup](https://rollupjs.org/)) you can pull an SVG in to JavaScript or CSS.

**in JS**

```js
import svgUrl from '@modulz/radix-icons/outline/25/camera.svg';
```

**in CSS**

```css
.camera-icon {
  background-image: url(~@modulz/radix-icons/outline/25/camera.svg);
  width: 25px;
  height: 25px;
}
```

#### Manifest

The manifest of the Icon Set lists the SVGs via their hierarchy - it can be used to dynamically consume the the Icon Set.

```js
import iconManifest from '@modulz/radix-icons/manifest.json';

console.log(iconManifest);
```

```json
{
  "outline": {
    ":25": {
      "camera": "outline/25/camera.svg"
    }
  }
}
```

We intend to formalise the schema of the manifest in a larger effort to support importing Icon Sets to Modulz through NPM.

## Contributing

There are many ways to contribute to the Icon Set. Please first [create an issue](https://github.com/modulz/radix/issues/new) with your proposal, and from there we can start a conversation.

**To run `yarn generate-src` you'll need to:**

1. Generate a personal Figma access token
2. Add it to an `.env` file under the `FIGMA_ACCESS_TOKEN` var.

Further instructions can be found in the readme for `@modulz/generate-icon-lib`.

#### Vector Icons

Access the [Figma file][figmafile], make changes, then run `yarn generate-src` and open a PR.

There are a couple things to keep in mind when making changes:

1. Name for the primary page should remain "Icons"
2. Naming convention for top-level frames inform `type` and `size` groupings
3. The `type` and `size` of the last top-level frame becomes the default values for the React Component

_The [Figma file][figmafile] should contain additional guidelines for making changes._

#### React Component

Have a look in `packages/generate-icon-lib/src/templates` for the templating code that affects the components created by running `yarn generate-src`.

Makes changes to the CLI, then re-run `yarn generate-src`, then open a PR. Try to keep commits separated between the CLI and files created in this package.

_At the time of writing, the CLI can not rerun on existing SVGs, and will instead pull down the latest SVGs from the Figma file._

#### Documentation

Jump into an `.md` file, make edits, and open a PR.

## Legal

MIT License

Copyright (c) 2019 Modulz, Inc

[figmafile]: https://www.figma.com/file/LLggMY9IV61CYkCSI7LFFUOY/
