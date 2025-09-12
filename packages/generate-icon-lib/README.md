# @modulz/generate-icon-lib

## Usage

```shell
generate-icon-lib --file=<figma-file-key>
```

_The `figma-file-key` can be sourced from the link to a Figma document:_

- `https://www.figma.com/file/<figma-file-key>`

### Authentication with Figma

Go to your Account Settings in Figma to create a Personal Access Token.

This can be provided to `generate-icon-lib` via the `FIGMA_ACCESS_TOKEN` environment variable.

Create an `.env` file an intended directory for easy reuse:

```shell
echo "FIGMA_ACCESS_TOKEN=<token>" >> packages/radix-icons/.env
```

## Future

- [ ] Support importing from a directory of SVGs
- [ ] Allow the CLI to re-run on existing SVGs in a package ie. after changing the React component template

## License

Licensed under the MIT License, Copyright © 2022-present WorkOS.

See [LICENSE](./LICENSE.md) for more information.
