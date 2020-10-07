import React from 'react';
import useDarkMode from 'use-dark-mode';
import { Box, Container, Grid, Text, darkThemeClass } from '@modulz/design-system';
import { Overview } from '../components/Overview';
import { Hero } from '../components/Hero';
import { Links } from '../components/Links';
import { SearchBar } from '../components/SearchBar';

// TODO
// - Download or copy SVG on icon click
// - Search
// - FOUT
// - Links
// - GitHub link & icon
// - npm icon
// - Halloween icons
// - Animated guides
// - Design process

export default function Home(props) {
  const darkMode = useDarkMode(undefined, {
    classNameDark: darkThemeClass,
    classNameLight: 'theme-default'
  });

  return (
    <Box>
      <Hero />
      <Links />

      <Container size="4" css={{ position: 'relative', marginBottom: 150 }}>
        <Box
          css={{
            background: darkMode.value ? '$gray100' : '$loContrast',
            marginBottom: '$5',
            borderRadius: '$2',
            minHeight: 200,
            boxShadow: darkMode.value ? '0 50px 250px -70px black' : '0 50px 250px -70px rgba(0, 0, 0, 0.4)',
            default: {
              marginTop: 'calc(30vh + 160px)'
            },
            bp3: {
              marginTop: 'calc(25vh + 260px)'
            }
          }}
        >
          <SearchBar />
          <Overview />
        </Box>
      </Container>
    </Box>
  );
}
