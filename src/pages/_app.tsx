import React from 'react';
import Head from 'next/head';

import 'styles/index.css';
import { PreviewBanner } from 'components/preview-banner';
import { TopNavigation } from 'components/top-navigation';
import { LocaleContext } from 'lib/translations';

function SpreadshopApp({ Component, pageProps }) {
  const { locale, ...otherPageProps } = pageProps;

  return (
    <LocaleContext.Provider value={locale}>
      <div className="flex flex-col bg-white">
        <Head>
          <link rel="shortcut icon" href="/favicon/favicon.ico" type="image/ico" />
          <link rel="apple-touch-icon" href="/favicon/spreadshop-favicon.png" type="image/png" />
          <meta
            name="description"
            content={`Demo Help Center built using Next.js and Contentful Compose.`}
            key="description"
          />
        </Head>
        <PreviewBanner />
        <div className="w-full flex flex-col relative">
          <TopNavigation />
          <Component {...otherPageProps} />
        </div>
      </div>
    </LocaleContext.Provider>
  );
}

export default SpreadshopApp;
