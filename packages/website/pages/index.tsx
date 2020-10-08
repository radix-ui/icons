import React from 'react';
import useDarkMode from 'use-dark-mode';
import { Box, Container, darkThemeClass } from '@modulz/design-system';
import { Overview } from '../components/Overview';
import { Hero } from '../components/Hero';
import { Links } from '../components/Links';
import { SearchBar } from '../components/SearchBar';
import { SearchResults } from '../components/SearchResults';
import { CopyToast, CopyToastVisibility } from '../components/CopyToast';

// TODO
// - Mobile
// - FOUT
// - Links
// - Halloween icons
// - Animated guides
// - Design process
// - Social
// - Favicon
// - Organize icons in Figma
// - Check dark theme
// - Fix bloated icons, float precision, etc
// - Focus visible

export default function Home() {
  const darkMode = useDarkMode(undefined, {
    classNameDark: darkThemeClass,
    classNameLight: 'theme-default',
  });

  const [searchValue, setSearchValue] = React.useState('');
  const [toastIsVisible, setToastIsVisible] = React.useState(false);
  const [toastIcon, setToastIcon] = React.useState('');
  const [toastTimeout, setToastTimeout] = React.useState<ReturnType<typeof setTimeout>>();

  const setToastIsVisibleTimeout = () => {
    setToastIsVisible(true);
    clearTimeout(toastTimeout);
    setToastTimeout(setTimeout(() => setToastIsVisible(false), 3000));
  };

  return (
    <CopyToastVisibility.Provider
      value={{
        icon: toastIcon,
        setIcon: setToastIcon,
        isVisible: toastIsVisible,
        setIsVisible: setToastIsVisibleTimeout,
      }}
    >
      <Box>
        <Hero />
        <Links />
        <Container size="3" css={{ position: 'relative', marginBottom: 150 }}>
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
        <CopyToast />
      </Box>
    </CopyToastVisibility.Provider>
  );
}
