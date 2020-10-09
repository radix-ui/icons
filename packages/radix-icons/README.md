# Radix Icons

A crisp set of 15×15 icons designed by the [Modulz](https://modulz.app) team.

---

## Documentation

All icons are sourced from a single-source-of-truth [Figma file][https://www.figma.com/file/9Df5CaFUEomVzn20gRpaX3/], and made available as **React Components** and **individual SVGs**.

#### React

All Icons are available as individual React Components.

- Supports Typescript
- Supports Treeshaking

```js
import { CameraIcon } from '@modulz/radix-icons';

render(<CameraIcon size="25" type="outline" />);
```

_Icons can be discovered on the [Icons page](https://icons.modulz.app)._

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

Please follow our [contributing guidelines](./CONTRIBUTING.md).

## Authors

- Vlad Moroz ([@vladyslavmoroz](https://twitter.com/vladyslavmoroz)) - [Modulz](https://modulz.app)
- Colm Tuite ([@colmtuite](https://twitter.com/colmtuite)) - [Modulz](https://modulz.app)
- Pedro Duarte ([@peduarte](https://twitter.com/peduarte)) - [Modulz](https://modulz.app)
- Lochlan Bunn ([@loklaan](https://twitter.com/loklaan))

## License

Licensed under the MIT License, Copyright © 2020-present Modulz.

See [LICENSE](./LICENSE.md) for more information.

