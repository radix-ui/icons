import React from 'react';
import useDarkMode from 'use-dark-mode';
import { Box, Container, Flex, Grid, Text, darkThemeClass } from '@modulz/design-system';
import { Overview } from '../components/Overview';
import { Hero } from '../components/Hero';
import { Links } from '../components/Links';
import { SearchBar } from '../components/SearchBar';
import Icons from '@modulz/radix-icons';

// TODO
// - Download or copy SVG on icon click
// - FOUT
// - Links
// - GitHub link & icon
// - npm icon
// - Halloween icons
// - Animated guides
// - Design process
// - Check rendering bugs:
//   - Home
//   - Gear

/** Naïve UpperCamelCaseIcon to Title Case conversion  */
const iconNames = Object.keys(Icons).map(key => key.replace(/Icon$/, '').replace(/(.)([0-9A-Z])/g, '$1 $2'));

export default function Home(props) {
  const darkMode = useDarkMode(undefined, {
    classNameDark: darkThemeClass,
    classNameLight: 'theme-default',
  });

  const [searchValue, setSearchValue] = React.useState('');
  const cleanSearchValue = searchValue.trim().replace(/\s/g, ' ');
  const matchingNames = iconNames.filter(name => new RegExp(`\\b${cleanSearchValue}`, 'gi').test(name));

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
              marginTop: 'calc(30vh + 160px)',
            },
            bp3: {
              marginTop: 'calc(25vh + 260px)',
            },
          }}
        >
          <SearchBar value={searchValue} onValueChange={setSearchValue} />
          {searchValue && (
            <Grid
              css={{
                padding: '$5 $6',
                rowGap: '$2',
                columnGap: '$8',
                // Place icons on rows first, then add more columns if needed.
                // And make sure there's at least 3 rows, so it looks nice.
                // If only there was something like a CSS multi-column layout... 🙃
                gridAutoFlow: 'column',
                gridTemplateColumns: 'repeat(4, 1fr)',
                gridTemplateRows: `repeat(${Math.max(Math.ceil(matchingNames.length / 4), 3)}, auto)`,
                whiteSpace: 'nowrap',
              }}
            >
              {matchingNames.map(name => (
                <Flex css={{ pb: '$3', alignItems: 'center' }}>
                  <Flex css={{ mr: '$2', p: '$1' }}>
                    {React.createElement(Object.values(Icons)[iconNames.indexOf(name)])}
                  </Flex>
                  <Text css={{ fontSize: '$2', lineHeight: '15px' }}>{name}</Text>
                </Flex>
              ))}
            </Grid>
          )}
          <Box css={{ visibility: searchValue ? 'hidden' : 'visible' }}>
            <Overview />
          </Box>
        </Box>
      </Container>
    </Box>
  );
}
