import React from 'react';
import useDarkMode from 'use-dark-mode';
import { styled, Box, Flex } from '@modulz/design-system';
import {
  CubeIcon,
  DownloadIcon,
  FigmaLogoIcon,
  FramerLogoIcon,
  GitHubLogoIcon,
  SketchLogoIcon,
} from '@modulz/radix-icons';

const MenuLink = styled('a', {
  display: 'flex',
  alignItems: 'center',
  textDecoration: 'none',
  color: 'inherit',
  '& + &': {
    marginTop: '$1',
  },
  '&:hover': {
    fontWeight: 500,
    letterSpacing: '-0.017em',
    wordSpacing: '-0.01em',
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

type MenuProps = {
  isVisible?: boolean;
};

export const Menu = ({ isVisible = false }: MenuProps) => {
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
          display: isVisible ? 'flex' : 'none',
          top: 0,
          left: 0,
          bottom: 0,
          right: 0,
          zIndex: '$4',
          paddingBottom: '10vh',
          minWidth: 210,
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
        }}
      >
        <MenuLink href="#svg" target="_blank">
          <Box as="span" css={{ mr: '$1' }}>
            <DownloadIcon />
          </Box>
          Download SVG
        </MenuLink>
        <MenuLink href="https://www.figma.com/file/9Df5CaFUEomVzn20gRpaX3/Radix-Icons" target="_blank">
          <Box as="span" css={{ mr: '$1' }}>
            <FigmaLogoIcon />
          </Box>
          Open in Figma
        </MenuLink>
        <MenuLink href="#framer" target="_blank">
          <Box as="span" css={{ mr: '$1' }}>
            <FramerLogoIcon />
          </Box>
          Open in Framer Web
        </MenuLink>
        <MenuLink href="#sketch" target="_blank">
          <Box as="span" css={{ mr: '$1' }}>
            <SketchLogoIcon />
          </Box>
          Add Library for Sketch
        </MenuLink>
        <MenuLink href="https://www.npmjs.com/package/@modulz/radix-icons" target="_blank">
          <Box as="span" css={{ mr: '$1' }}>
            <CubeIcon />
          </Box>
          Install with npm
        </MenuLink>
        <MenuLink href="https://github.com/modulz/radix-icons/tree/master/packages/radix-icons" target="_blank">
          <Box as="span" css={{ mr: '$1' }}>
            <GitHubLogoIcon />
          </Box>
          Read docs on GitHub
        </MenuLink>
      </Flex>
    </Flex>
  );
};
