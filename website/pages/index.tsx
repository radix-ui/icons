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
          {searchValue && matchingNames.length > 0 && (
            <Grid
              css={{
                alignContent: 'start',
                padding: '$5 $6',
                columnGap: '$8',
                rowGap: '$2',
                // Place icons on rows first, then add more columns as needed, up to 4 total.
                // And make sure there's at least 3 rows, so it looks nice.
                // If only there was something like a multi-column layout feature in CSS... 🙃
                gridAutoFlow: 'column',
                gridTemplateColumns: 'repeat(4, 1fr)',
                gridTemplateRows: `repeat(${Math.max(Math.ceil(matchingNames.length / 4), 3)}, auto)`,
              }}
            >
              {matchingNames.map(name => (
                <Flex css={{ pb: '$3', alignItems: 'center' }}>
                  <Flex css={{ mr: '$2', p: '$1' }}>
                    {React.createElement(Object.values(Icons)[iconNames.indexOf(name)])}
                  </Flex>
                  <Text size="2">{name}</Text>
                </Flex>
              ))}
            </Grid>
          )}
          {!matchingNames.length && (
            <Flex css={{ alignItems: 'center', justifyContent: 'center', minHeight: 300, padding: '$5 $6' }}>
              <Text size="2" css={{ textAlign: 'center', lineHeight: '20px' }}>
                No icons for <Text css={{ fontWeight: 500 }}>{searchValue}</Text>
              </Text>
            </Flex>
          )}
          <Box css={{ display: searchValue ? 'none' : 'block' }}>
            <Overview />
          </Box>
        </Box>
      </Container>
    </Box>
  );
}
