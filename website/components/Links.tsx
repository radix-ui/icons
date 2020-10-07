import React from 'react';
import useDarkMode from 'use-dark-mode';
import { darkThemeClass, styled, Box, Flex } from '@modulz/design-system';
import { CubeIcon, DownloadIcon, FigmaLogoIcon, FramerLogoIcon, ReaderIcon, SketchLogoIcon } from '@modulz/radix-icons';

const Link = styled('a', {
  display: 'flex',
  fontSize: '$2',
  lineHeight: '30px',
  alignItems: 'center',
  textDecoration: 'none',
  color: 'inherit',
  '&:hover': {
    fontWeight: 500,
    letterSpacing: '-0.017em',
    wordSpacing: '-0.01em',
    marginLeft: '-0.01em'
  },
  svg: {
    display: 'block'
  }
});

export const Links = () => {
  const darkMode = useDarkMode(undefined, {
    classNameDark: darkThemeClass,
    classNameLight: 'theme-default'
  });

  return (
    <Flex
      css={{
        flexDirection: 'column',
        alignItems: 'flex-start',
        position: 'fixed',
        borderRadius: '$1',
        top: '$5',
        right: '$5',
        padding: '$3 $4',
        background: darkMode.value ? 'hsl(174, 65%, 14%)' : 'hsl(174, 100%, 94%)',
        minWidth: 200
      }}
    >
      <Link href="#svg" target="_blank">
        <Box as="span" css={{ mr: '$1' }}>
          <DownloadIcon />
        </Box>
        Download SVG
      </Link>
      <Link href="https://www.figma.com/file/9Df5CaFUEomVzn20gRpaX3/Radix-Icons" target="_blank">
        <Box as="span" css={{ mr: '$1' }}>
          <FigmaLogoIcon />
        </Box>
        Open in Figma
      </Link>
      <Link href="#framer" target="_blank">
        <Box as="span" css={{ mr: '$1' }}>
          <FramerLogoIcon />
        </Box>
        Open in Framer Web
      </Link>
      <Link href="#sketch" target="_blank">
        <Box as="span" css={{ mr: '$1' }}>
          <SketchLogoIcon />
        </Box>
        Add Library for Sketch
      </Link>
      <Link href="https://www.npmjs.com/package/@modulz/radix-icons" target="_blank">
        <Box as="span" css={{ mr: '$1' }}>
          <ReaderIcon />
        </Box>
        View on GitHub
      </Link>
      <Link href="https://www.npmjs.com/package/@modulz/radix-icons" target="_blank">
        <Box as="span" css={{ mr: '$1' }}>
          <CubeIcon />
        </Box>
        Install with npm
      </Link>
    </Flex>
  );
};
