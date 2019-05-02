# Radix Icons

<!-- Need an image here of all the icons! -->

A crisp ⧉ icon set built by the [Modulz](https://www.modulz.app/about) team.

All icons are sourced from a single-source-of-truth [Figma file](#), and made available as a **React Component** and **individual SVGs**.

➤ Visit the [Icons page](https://www.modulz.app/icons) to explore further.

## Getting Started

#### React

```js
import Icon from '@modulz/radix-icons';

render(<Icon name="camera" size="25" type="outline" />);
```

#### SVGs

All SVGs in the set can be accessed with the follow path-pattern from `node_modules`:

```js
'@modulz/radix-icons/<type>/<size>/<name>.svg';
```

By using a bundler (such as [Webpack](https://webpack.js.org), [Parcel](https://parceljs.org/) or [Rollup](https://rollupjs.org/)) you can pull an SVG in to JavaScript or CSS.

```js
import svgUrl from '@modulz/radix-icons/outline/25/camera.svg';
```

```css
.camera-icon {
  background-image: url(~@modulz/radix-icons/outline/25/camera.svg);
  width: 25px;
  height: 25px;
}
```

## Contributing

There are many ways to contribute to the Icon Set. Please first [create an issue](#) with your proposal, and from there we can start a conversation.

#### Vector Icons

Access the [Figma file](#), make changes, then run `yarn update-from-figma` and open an PR.

There are a couple things to keep in mind when making changes:

1. Name for the primary page should remain "Icons"
2. Naming convention for top-level frames inform `type` and `size` groupings
3. The `type` and `size` of the first top-level frame becomes the default values for the React Component

#### React Component

Have a look in `packages/generate-icon-lib/src` for templating code; then open an PR.

_At the time of writing, the CLI can not rerun on existing SVGs._

#### Documentation

Jump into an `.md` file, make edits, and open a PR.

## Future

- [ ] Revisit React Component API to accomodate easy [tree-shaking](https://developer.mozilla.org/en-US/docs/Glossary/Tree_shaking)
- [ ] Allow the CLI to re-run on existing SVGs in a package ie. after changing the React component template
- [ ] Detect deletion of icons in the Figma file
- [ ] Publish the `@modulz/generate-icon-lib` CLI Tool for general usage

## Legal

MIT License

Copyright (c) 2019 Modulz, Inc
