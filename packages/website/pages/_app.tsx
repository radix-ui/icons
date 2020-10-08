import React from 'react';
import Head from 'next/head';
import useDarkMode from 'use-dark-mode';
import { css, darkThemeClass, Button } from '@modulz/design-system';

const globalCss = css.global({
  '*': {
    boxSizing: 'border-box',
  },
  '::selection': {
    backgroundColor: '$blue400',
  },
  body: {
    margin: 0,
    minWidth: 320,
    color: '$hiContrast',
    overflowWrap: 'break-word',
    fontFamily: '$untitled',
    backgroundColor: '$loContrast',
    WebkitFontSmoothing: 'antialiased' as any,
    MozOsxFontSmoothing: 'grayscale' as any,
  },
  svg: {
    display: 'block',
  },
});

function App({ Component, pageProps }) {
  globalCss();

  const darkMode = useDarkMode(undefined, {
    classNameDark: darkThemeClass,
    classNameLight: 'theme-default',
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
        <link
          as="font"
          rel="preload"
          type="font/woff2"
          crossOrigin="anonymous"
          href="https://develop.modulz.app/fonts/UntitledSansWeb-Medium.woff2"
        />
        <link
          as="font"
          rel="preload"
          type="font/woff2"
          crossOrigin="anonymous"
          href="https://develop.modulz.app/fonts/UntitledSansWeb-Regular.woff2"
        />
        <link rel="stylesheet" href="https://develop.modulz.app/fonts/fonts.css" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      </Head>

      <Component {...pageProps} />

      {/*
      <Button css={{ position: 'fixed', zIndex: 999, bottom: '$3', left: '$3' }} onClick={() => darkMode.toggle()}>
        Toggle theme
      </Button>
      */}
    </div>
  );
}

export default App;
