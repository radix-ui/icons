import React from 'react';
import { globalCss } from '@modulz/design-system';
import { TitleAndMetaTags } from '../components/TitleAndMetaTags';

const setGlobalCss = globalCss({
  '*': {
    boxSizing: 'border-box',
  },
  '::selection': {
    backgroundColor: '$mintA4',
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
  setGlobalCss();

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
        <TitleAndMetaTags key="1" />
        <Component {...pageProps} />
      </div>
    );
  }

  return (
    <>
      <TitleAndMetaTags key="2" />
      <Component {...pageProps} />
    </>
  );
}

export default App;
