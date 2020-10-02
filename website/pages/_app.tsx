import React from 'react';
import Head from 'next/head';
import useDarkMode from 'use-dark-mode';
import { css, darkThemeClass, Box } from '@modulz/design-system';

css.global({
  body: {
    margin: 0,
    fontFamily: '$untitled',
    backgroundColor: '$loContrast',
    WebkitFontSmoothing: 'antialiased' as any
  },
  svg: {
    verticalAlign: 'center',
    display: 'inline-block'
  },
  '*': {
    boxSizing: 'border-box'
  }
});

function App({ Component, pageProps }) {
  const darkMode = useDarkMode(undefined, {
    classNameDark: darkThemeClass,
    classNameLight: 'theme-default'
  });

  const [mounted, setMounted] = React.useState(false);

  React.useEffect(() => {
    setMounted(true);
  }, []);

  // Dark theme hack to prevent flash
  // prevents ssr flash for mismatched dark mode
  // https://brianlovin.com/overthought/adding-dark-mode-with-next-js
  if (!mounted) {
    return (
      <div style={{ visibility: 'hidden' }}>
        <Component {...pageProps} />
      </div>
    );
  }

  return (
    <div>
      <Head>
        <title>Radix Icons</title>
        <link rel="stylesheet" href="https://develop.modulz.app/fonts/fonts.css" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      </Head>

      <Component {...pageProps} />

      <Box
        as="button"
        css={{ position: 'fixed', zIndex: 999, top: '$3', right: '$3' }}
        onClick={() => darkMode.toggle()}
      >
        Toggle theme
      </Box>
    </div>
  );
}

export default App;
