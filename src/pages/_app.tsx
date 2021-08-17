import React from 'react';
import Head from 'next/head';

import { PreviewBanner } from 'components/preview-banner';
import { TopNavigation } from 'components/top-navigation';
import { LocaleContext } from 'lib/translations';
import { PageContentTypes } from '../lib/constants';

import 'styles/index.css';
import 'swiper/swiper.min.css';

function SpreadshopApp({ Component, pageProps }) {
  const { locale, ...otherPageProps } = pageProps;

  const isSpreadGroupPage =
    pageProps.page &&
    pageProps.page.fields.content &&
    (pageProps.page.fields.content.sys.contentType.sys.id === PageContentTypes.SpreadGroup ||
      pageProps.page.fields.content.sys.contentType.sys.id ===
        PageContentTypes.SpreadGroupSingleJobs);

  return (
    <LocaleContext.Provider value={locale}>
      <div className="flex flex-col bg-white">
        <Head>
          <link rel="shortcut icon" href="/favicon/favicon.ico" type="image/ico" />
          <link rel="apple-touch-icon" href="/favicon/spreadshop-favicon.png" type="image/png" />
          <meta
            name="description"
            content={`Spreadshop Contentful Website Demo`}
            key="description"
          />
          {isSpreadGroupPage && (
            <link
              href="https://www.spreadgroup.com/wp-content/themes/spreadgroup_theme/style.css?cb=776024"
              rel="stylesheet"
              type="text/css"
            />
          )}
        </Head>
        <PreviewBanner />
        <div className="w-full flex flex-col relative">
          {!isSpreadGroupPage && <TopNavigation />}
          <Component {...otherPageProps} />
        </div>
      </div>
    </LocaleContext.Provider>
  );
}

export default SpreadshopApp;
