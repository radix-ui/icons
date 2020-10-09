import React from 'react';
import useDarkMode from 'use-dark-mode';
import { styled, Box, Flex, darkThemeClass } from '@modulz/design-system';
import { CubeIcon, DownloadIcon, FigmaLogoIcon, GitHubLogoIcon, SketchLogoIcon } from '@modulz/radix-icons';

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
        top: '$5',
        right: '$5',
        alignItems: 'center',
        justifyContent: 'center',
        background: darkMode.value ? 'hsl(174, 65%, 14%)' : '$teal300',
        userSelect: 'none',
        WebkitUserSelect: 'none',
        zIndex: 'auto',
        borderRadius: '$1',
        padding: '$3 $4',
        default: {
          display: 'none',
        },
        bp2: {
          display: 'flex',
        },
      }}
    >
      <Flex css={{ flexDirection: 'column', alignItems: 'flex-start' }}>
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
