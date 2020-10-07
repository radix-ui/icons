import React from 'react';
import useDarkMode from 'use-dark-mode';
import { Box, Container, Flex, Grid, Text, darkThemeClass } from '@modulz/design-system';
import { Overview } from '../components/Overview';
import { Hero } from '../components/Hero';
import { Links } from '../components/Links';
import { SearchBar } from '../components/SearchBar';
import { SearchResults } from '../components/SearchResults';

// TODO
// - Download or copy SVG on icon click
// - FOUT
// - Links
// - Halloween icons
// - Animated guides
// - Design process

export default function Home(props) {
  const darkMode = useDarkMode(undefined, {
    classNameDark: darkThemeClass,
    classNameLight: 'theme-default',
  });

  const [searchValue, setSearchValue] = React.useState('');

  return (
    <Box
      css={{
        color: '$hiContrast',
        overflowWrap: 'break-word',
        WebkitFontSmoothing: 'antialiased' as any,
        MozOsxFontSmoothing: 'grayscale' as any,
        '*::selection': {
          backgroundColor: '$blue300',
        },
      }}
    >
      <Hero />
      <Links />

      <Container size="4" css={{ position: 'relative', marginBottom: 150 }}>
        <Box
          css={{
            background: darkMode.value ? '$gray100' : '$loContrast',
            marginBottom: '$5',
            borderRadius: '$2',
            minHeight: 900,
            boxShadow: darkMode.value ? '0 40px 250px -50px black' : '0 40px 250px -50px rgba(0, 0, 0, 0.4)',
            default: {
              marginTop: 'calc(30vh + 160px)',
            },
            bp3: {
              marginTop: 'calc(25vh + 260px)',
            },
          }}
        >
          <SearchBar value={searchValue} onValueChange={setSearchValue} />
          <SearchResults value={searchValue} />
          <Box css={{ display: searchValue ? 'none' : 'block' }}>
            <Overview />
          </Box>
        </Box>
      </Container>
    </Box>
  );
}
