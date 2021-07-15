/* eslint-disable @typescript-eslint/camelcase */
import React from 'react';
import ErrorPage from 'next/error';

import { getPage, getPagesOfType } from 'lib/api';
import { isPreviewEnabled } from 'lib/preview';
import { PageHead } from 'components/page-head';
import { PageContentTypes } from 'lib/constants';
import { TypePage, TypePageLandingpage } from 'lib/types';
import { BlockRenderer } from 'components/renderer/block-renderer';
import { Link } from 'components/link';

type HelpdeskProps = {
  pages: TypePage[];
};

export default function Helpdesk({ pages }: HelpdeskProps) {
  return (
    <div className="w-full pb-16">
      <div className="sprd-container mx-auto p-8 h-full">
        {pages.map(function (page, idx) {
          return (
            <div key={'article-' + idx}>
              <Link {...{ page: page }}>{page.fields.title}</Link>
            </div>
          );
        })}
      </div>
    </div>
  );
}

export async function getServerSideProps({ params, query, locale }) {
  const preview = isPreviewEnabled(query);
  const pages = await getPagesOfType({
    locale,
    pageContentType: PageContentTypes.HelpDeskArticle,
    limit: 100,
    preview,
  });
  return {
    props: { pages },
  };
}
