/* eslint-disable @typescript-eslint/camelcase */
import React from 'react';
import ErrorPage from 'next/error';

import { getPage } from 'lib/api';
import { isPreviewEnabled } from 'lib/preview';
import { PageHead } from 'components/page-head';
import { PageContentTypes } from 'lib/constants';
import { TypePage, TypePageBlogPost } from 'lib/types';
import { isRichText, renderRichText } from 'lib/rich-text';

type BlogPostProps = {
  page: TypePage;
};

export default function BlogPost({ page }: BlogPostProps) {
  const content = page.fields.content as TypePageBlogPost;
  const textComp = isRichText(content.fields.text)
    ? renderRichText(content.fields.text)
    : content.fields.text;
  return (
    <>
      <PageHead page={page} />
      <div className="w-full pb-16">
        <div className="sprd-container mx-auto p-8 h-full">
          <h1 className="h0 pt-4 text-3xl font-medium leading-tight text-gray-900">
            {page.fields.title}
          </h1>
          <img src={content.fields.illustrationNew.fields.file.url} className="pt-8" />
          <div className="pt-8">{textComp}</div>
        </div>
      </div>
    </>
  );
}

export async function getServerSideProps({ params, query, locale }) {
  const slug = String(params.slug ?? '');
  const preview = isPreviewEnabled(query);
  const page = await getPage({
    slug,
    preview,
    locale,
    pageContentType: PageContentTypes.BlogPost,
  });

  return {
    props: { page },
  };
}
