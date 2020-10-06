> WIP

# Radix Icons Monorepo

This repository is a [monorepo](https://github.com/babel/babel/blob/master/doc/design/monorepo.md) powered by [Lerna](https://github.com/lerna/lerna) and [yarn workspaces](https://yarnpkg.com/lang/en/docs/cli/workspaces/).

### Develop

#### Install dependencies

```sh
yarn
```

#### Run icon generator

```sh
yarn start
```

### Build & release

#### Build

```sh
yarn build
```

#### Release

```sh
yarn release
```

### Website

The website uses local version of the Radix Icons package.
Don't forget to `yarn` after updating the icons. This will rebuild the package.

### License

MIT © [Modulz](https://modulz.app)
