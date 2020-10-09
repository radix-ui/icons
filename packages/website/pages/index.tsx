import React from 'react';
import useDarkMode from 'use-dark-mode';
import { Box, Container, Text, darkThemeClass } from '@modulz/design-system';
import { FigmaLogoIcon, SketchLogoIcon, DownloadIcon } from '@modulz/radix-icons';
import { Overview } from '../components/Overview';
import { Hero } from '../components/Hero';
import { Menu } from '../components/Menu';
import { SearchBar } from '../components/SearchBar';
import { SearchResults } from '../components/SearchResults';
import { CopyToast, CopyToastVisibility } from '../components/CopyToast';
import { CodeBlock } from '../components/CodeBlock';
import { IconLink } from '../components/IconLink';
import { Section } from '../components/Section';
import { TitleAndMetaTags } from '../components/TitleAndMetaTags';
import { DarkModeButton } from '../components/DarkModeButton';

export default function Home() {
  const darkMode = useDarkMode();

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
      <TitleAndMetaTags />
      <Box>
        <Hero />
        <Menu />
        <DarkModeButton />
        <Container size="3" css={{ position: 'relative', marginBottom: 'calc(5vh + 25px)' }}>
          <Box
            css={{
              background: darkMode.value ? 'hsl(218, 6%, 10%)' : '$loContrast',
              marginBottom: '$5',
              borderRadius: '$2',
              minHeight: 900,
              boxShadow: darkMode.value ? '0 40px 250px -50px black' : '0 40px 250px -50px rgba(0, 0, 0, 0.4)',
              bp2: {
                marginTop: 'calc(30vh + 240px)',
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
            <Section>
              <Box
                css={{
                  '@media (max-width: 749px)': {
                    display: 'flex',
                    flexDirection: 'column-reverse',
                  },
                  '@media (min-width: 750px)': {
                    display: 'grid',
                    gridTemplateColumns: 'repeat(3, 1fr)',
                    gap: '$8',
                  },
                }}
              >
                <Box css={{ gridColumn: '1 / span 2' }}>
                  <Text as="h3" size="5" css={{ fontWeight: 500, letterSpacing: '-0.02em', lineHeight: '30px' }}>
                    React components
                  </Text>
                  <Text as="p" size="3" css={{ mt: '$3', lineHeight: '25px' }}>
                    All icons are available as individual React components.
                    <br />
                    Install Radix Icons from npm:
                  </Text>
                  <CodeBlock css={{ mt: '$3' }}>npm install @modulz/radix-icons</CodeBlock>
                  <Text as="p" size="3" css={{ mt: '$3', lineHeight: '25px' }}>
                    Import the icons into your React project:
                  </Text>
                  <CodeBlock css={{ mt: '$3' }}>
                    {`import { FaceIcon, ImageIcon, SunIcon } from '@modulz/radix-icons'

function MyComponent () {
  return (
    <div>
      <FaceIcon />
      <SunIcon />
      <ImageIcon />
    </div>
  )
}`}
                  </CodeBlock>
                </Box>
                <Box css={{ mb: '$5' }}>
                  <Text as="h3" size="5" css={{ fontWeight: 500, letterSpacing: '-0.02em', lineHeight: '30px' }}>
                    Design assets
                  </Text>
                  <Text
                    size="3"
                    css={{ display: 'flex', flexFlow: 'column', alignItems: 'start', mt: '$3', lineHeight: '25px' }}
                  >
                    <IconLink href="https://www.figma.com/file/9Df5CaFUEomVzn20gRpaX3/Radix-Icons" target="_blank">
                      <Box as="span" css={{ mr: '$2' }}>
                        <FigmaLogoIcon />
                      </Box>
                      Open in Figma
                    </IconLink>
                    <IconLink
                      href="https://raw.githubusercontent.com/modulz/radix-icons/master/Radix-Icons.sketch"
                      target="_blank"
                    >
                      <Box as="span" css={{ mr: '$2' }}>
                        <SketchLogoIcon />
                      </Box>
                      Download for Sketch
                    </IconLink>
                    <IconLink
                      href="https://raw.githubusercontent.com/modulz/radix-icons/master/radix-icons.zip"
                      target="_blank"
                    >
                      <Box as="span" css={{ mr: '$2' }}>
                        <DownloadIcon />
                      </Box>
                      Download SVG
                    </IconLink>
                  </Text>
                </Box>
              </Box>
            </Section>
          </Box>
        </Container>
        <CopyToast />
      </Box>
    </CopyToastVisibility.Provider>
  );
}
