/* eslint-disable @typescript-eslint/camelcase */
import React from 'react';

import { getPagesOfType } from 'lib/api';
import { isPreviewEnabled } from 'lib/preview';
import { PageContentTypes } from 'lib/constants';
import { TypePage } from 'lib/types';
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
