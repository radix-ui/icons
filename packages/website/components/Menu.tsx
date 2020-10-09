import React from 'react';
import useDarkMode from 'use-dark-mode';
import { styled, Box, Flex } from '@modulz/design-system';
import { CubeIcon, DownloadIcon, FigmaLogoIcon, GitHubLogoIcon, SketchLogoIcon } from '@modulz/radix-icons';

const MenuLink = styled('a', {
  display: 'flex',
  alignItems: 'center',
  textDecoration: 'none',
  color: 'inherit',
  '& + &': {
    marginTop: '$1',
  },
  '&:hover': {
    textDecoration: 'underline',
  },
  default: {
    padding: '0 $3',
    fontSize: '$3',
    lineHeight: '35px',
  },
  bp2: {
    padding: '0',
    fontSize: '$2',
    lineHeight: '25px',
  },
});

export const Menu = () => {
  const darkMode = useDarkMode();

  return (
    <Flex
      css={{
        position: 'fixed',
        alignItems: 'center',
        justifyContent: 'center',
        background: darkMode.value ? 'hsl(174, 65%, 14%)' : '$teal300',
        userSelect: 'none',
        WebkitUserSelect: 'none',
        default: {
          display: 'none',
        },
        bp2: {
          display: 'block',
          zIndex: 'auto',
          top: '$5',
          right: '$5',
          left: 'auto',
          bottom: 'auto',
          borderRadius: '$1',
          padding: '$3 $4',
        },
      }}
    >
      <Flex
        css={{
          flexDirection: 'column',
          alignItems: 'flex-start',
          default: {
            minWidth: 170,
          },
          bp2: {
            minWidth: 140,
          },
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
