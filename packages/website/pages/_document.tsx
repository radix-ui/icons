import React from 'react';
import NextDocument, { Head, Main, NextScript } from 'next/document';
import { css } from '@modulz/design-system';

export default class Document extends NextDocument {
  static async getInitialProps(ctx) {
    const originalRenderPage = ctx.renderPage;

    try {
      let extractedStyles;
      ctx.renderPage = () => {
        const { styles, result } = css.getStyles(originalRenderPage);
        extractedStyles = styles;
        return result;
      };

      const initialProps = await NextDocument.getInitialProps(ctx);

      return {
        ...initialProps,
        styles: (
          <>
            {initialProps.styles}

            {extractedStyles.map((content, index) => (
              <style key={index} dangerouslySetInnerHTML={{ __html: content }} />
            ))}
          </>
        ),
      };
    } finally {
    }
  }

  render() {
    return (
      <html lang="en">
        <Head />
        <body>
          <script src="/noflash.js" />
          <Main />
          <NextScript />
        </body>
      </html>
    );
  }
}
