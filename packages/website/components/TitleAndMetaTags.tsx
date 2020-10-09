import React from 'react';
import Head from 'next/head';

export function TitleAndMetaTags({
  url = 'https://icons.modulz.app',
  title = 'Radix Icons',
  description = 'A crisp set of 15×15 icons designed by the Modulz team.',
}) {
  // const image = `${url}/preview.png`;
  const image = 'https://raw.githubusercontent.com/modulz/radix-icons/master/packages/website/public/preview.png';
  const favicon = 'https://raw.githubusercontent.com/modulz/radix-icons/master/packages/website/public/favicon.ico';

  return (
    <Head>
      <title>{title}</title>
      <meta name="description" content={description} />

      <link rel="icon" href={favicon} />

      <meta property="og:url" content={url} />
      <meta property="og:title" content={title} />
      <meta property="og:description" content={description} />
      <meta property="og:image" content={image} />

      <meta name="twitter:site" content="@modulz" />
      <meta name="twitter:card" content="summary_large_image" />
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
      <style
        dangerouslySetInnerHTML={{
          __html: `
              @font-face {
                font-family: 'Untitled Sans';
                font-weight: 400;
                font-display: block;
                src:
                  url(https://develop.modulz.app/fonts/UntitledSansWeb-Regular.woff2) format('woff2'),
                  url(https://develop.modulz.app/fonts/UntitledSansWeb-Regular.woff) format('woff');
              }

              @font-face {
                font-family: 'Untitled Sans';
                font-weight: 500;
                font-display: block;
                src:
                  url(https://develop.modulz.app/fonts/UntitledSansWeb-Medium.woff2) format('woff2'),
                  url(https://develop.modulz.app/fonts/UntitledSansWeb-Medium.woff) format('woff');
              }

              @font-face {
                font-family: 'Söhne Mono';
                font-weight: normal;
                font-style: normal;
                font-display: block;
                src
                  url(https://develop.modulz.app/fonts/'soehne-mono-web-buch.woff2') format('woff2'),
                  url(https://develop.modulz.app/fonts/'soehne-mono-web-buch.woff') format('woff');
              }

              @font-face {
                font-family: 'Söhne Mono';
                font-weight: normal;
                font-style: italic;
                font-display: block;
                src:
                  url(https://develop.modulz.app/fonts/'soehne-mono-web-buch-kursiv.woff2') format('woff2'),
                  url(https://develop.modulz.app/fonts/'soehne-mono-web-buch-kursiv.woff') format('woff');
              }

              @font-face {
                font-family: 'Söhne Mono';
                font-weight: 500;
                font-style: normal;
                font-display: block;
                src:
                  url(https://develop.modulz.app/fonts/'soehne-mono-web-kraftig.woff2') format('woff2'),
                  url(https://develop.modulz.app/fonts/'soehne-mono-web-kraftig.woff') format('woff');
              }

              @font-face {
                font-family: 'Söhne Mono';
                font-weight: 500;
                font-style: italic;
                font-display: block;
                src:
                  url(https://develop.modulz.app/fonts/'soehne-mono-web-kraftig-kursiv.woff2') format('woff2'),
                  url(https://develop.modulz.app/fonts/'soehne-mono-web-kraftig-kursiv.woff') format('woff');
              }`,
        }}
      />
      <script
        dangerouslySetInnerHTML={{
          __html: `(function() {
            // Change these if you use something different in your hook.
            var storageKey = 'darkMode';
            var classNameDark = 'theme-0';
            var classNameLight = 'theme-default';

            function setClassOnDocumentBody(darkMode) {
              document.body.classList.add(darkMode ? classNameDark : classNameLight);
              document.body.classList.remove(darkMode ? classNameLight : classNameDark);
            }

            var preferDarkQuery = '(prefers-color-scheme: dark)';
            var mql = window.matchMedia(preferDarkQuery);
            var supportsColorSchemeQuery = mql.media === preferDarkQuery;
            var localStorageTheme = null;
            try {
              localStorageTheme = localStorage.getItem(storageKey);
            } catch (err) {}
            var localStorageExists = localStorageTheme !== null;
            if (localStorageExists) {
              localStorageTheme = JSON.parse(localStorageTheme);
            }

            // Determine the source of truth
            if (localStorageExists) {
              // source of truth from localStorage
              setClassOnDocumentBody(localStorageTheme);
            } else if (supportsColorSchemeQuery) {
              // source of truth from system
              setClassOnDocumentBody(mql.matches);
              localStorage.setItem(storageKey, mql.matches);
            } else {
              // source of truth from document.body
              var isDarkMode = document.body.classList.contains(classNameDark);
              localStorage.setItem(storageKey, JSON.stringify(isDarkMode));
            }
          })()
          `,
        }}
      ></script>
      <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    </Head>
  );
}
