import React from 'react';
import useDarkMode from 'use-dark-mode';
import { styled, Box, Flex, darkThemeClass } from '@modulz/design-system';
import {
  CubeIcon,
  DownloadIcon,
  FigmaLogoIcon,
  GitHubLogoIcon,
  IconJarLogoIcon,
  SketchLogoIcon,
} from '@radix-ui/react-icons';

const MenuLink = styled('a', {
  display: 'flex',
  alignItems: 'center',
  textDecoration: 'none',
  borderRadius: '$1',
  color: 'inherit',
  outline: 0,
  '& + &': {
    marginTop: '$1',
  },
  '&:hover': {
    textDecoration: 'underline',
  },
  '&:focus': {
    boxShadow: '0 0 0 1px',
    textDecoration: 'none',
  },
  default: {
    padding: '0 $3',
    fontSize: '$3',
    lineHeight: '35px',
  },
  bp2: {
    padding: '0 $1',
    margin: '0 -$1',
    fontSize: '$2',
    lineHeight: '25px',
  },
});

export const Menu = () => {
  const darkMode = useDarkMode(undefined, {
    classNameDark: darkThemeClass,
    classNameLight: 'theme-default',
  });

  return (
    <Flex
      css={{
        position: 'fixed',
        top: 0,
        right: 0,
        margin: '$5',
        justifyContent: 'flex-end',
        default: {
          display: 'none',
        },
        bp2: {
          display: 'inline-flex',
        },
      }}
    >
      <Flex
        css={{
          background: darkMode.value ? 'hsl(174, 65%, 14%)' : '$teal300',
          borderRadius: '$1',
          boxShadow: '0 10px 40px -10px hsla(174, 100%, 30%, 0.05)',
          flexDirection: 'column',
          padding: '$3 $4',
          userSelect: 'none',
          WebkitUserSelect: 'none',
        }}
      >
        <MenuLink href="https://www.figma.com/file/9Df5CaFUEomVzn20gRpaX3/Radix-Icons" target="_blank">
          <Box as="span" css={{ mr: '$2' }}>
            <FigmaLogoIcon />
          </Box>
          Open in Figma
        </MenuLink>
        <MenuLink href="https://raw.githubusercontent.com/modulz/radix-icons/master/Radix-Icons.sketch" target="_blank">
          <Box as="span" css={{ mr: '$2' }}>
            <SketchLogoIcon />
          </Box>
          Download for Sketch
        </MenuLink>
        <MenuLink
          href="https://raw.githubusercontent.com/modulz/radix-icons/master/Radix-Icons.iconjar.zip"
          target="_blank"
        >
          <Box as="span" css={{ mr: '$2' }}>
            <IconJarLogoIcon />
          </Box>
          Download IconJar
        </MenuLink>
        <MenuLink href="https://raw.githubusercontent.com/modulz/radix-icons/master/radix-icons.zip" target="_blank">
          <Box as="span" css={{ mr: '$2' }}>
            <DownloadIcon />
          </Box>
          Download SVG
        </MenuLink>
        <MenuLink href="https://www.npmjs.com/package/@modulz/radix-icons" target="_blank">
          <Box as="span" css={{ mr: '$2' }}>
            <CubeIcon />
          </Box>
          Install with npm
        </MenuLink>
        <MenuLink href="https://github.com/modulz/radix-icons" target="_blank">
          <Box as="span" css={{ mr: '$2' }}>
            <GitHubLogoIcon />
          </Box>
          View on GitHub
        </MenuLink>
      </Flex>
    </Flex>
  );
};
