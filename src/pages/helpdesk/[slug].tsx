/* eslint-disable @typescript-eslint/camelcase */
import React from 'react';
import ErrorPage from 'next/error';

import { getPage } from 'lib/api';
import { isPreviewEnabled } from 'lib/preview';
import { PageHead } from 'components/page-head';
import { PageContentTypes } from 'lib/constants';
import { TypePage, TypePageHelpdeskArticle, TypePageLandingpage } from 'lib/types';
import { isRichText, renderRichText } from 'lib/rich-text';

type HelpdeskArticleProps = {
  page: TypePage;
};

export default function HelpdeskArticle({ page }: HelpdeskArticleProps) {
  const content = page.fields.content as TypePageHelpdeskArticle;

  // TODO render list items
  const textComp = isRichText(content.fields.details)
    ? renderRichText(content.fields.details)
    : content.fields.details;
  return (
    <div className="w-full pb-16">
      <PageHead page={page} />
      <div className="sprd-container mx-auto p-8 h-full">
        <div className="h0 pt-4 text-3xl font-medium leading-tight text-gray-900">
          {page.fields.title}
        </div>
        <div className="leading-relaxed text-lg text-gray-700 pt-8">{textComp}</div>
      </div>
    </div>
  );
}

export async function getServerSideProps({ params, query, locale }) {
  const slug = String(params.slug ?? '');
  const preview = isPreviewEnabled(query);
  const page = await getPage({
    slug,
    preview,
    locale,
    pageContentType: PageContentTypes.HelpDeskArticle,
  });

  return {
    props: { page },
  };
}
