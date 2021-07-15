/* eslint-disable @typescript-eslint/camelcase */
import React from 'react';

import { getPagesOfType } from 'lib/api';
import { isPreviewEnabled } from 'lib/preview';
import { PageContentTypes } from 'lib/constants';
import { TypePage, TypePageBlogPost } from 'lib/types';
import { Link } from 'components/link';

type BlogProps = {
  news: TypePage[];
};

export default function Blog({ news }: BlogProps) {
  return (
    <div className="w-full pb-16">
      <div className="sprd-container mx-auto p-8 h-full">
        <h1 className="h0 pt-4 text-3xl font-medium leading-tight text-gray-900">News</h1>

        <div className="md:flex md:flex-row pt-4">
          {news.map(function (page, idx) {
            const content = page.fields.content as TypePageBlogPost;
            return (
              <div key={'article-' + idx} className="pr-4 pb-4 md:w-1/3">
                <img src={content.fields.illustration[0].secure_url} />
                <div className="font-bold">{page.fields.title}</div>
                <Link {...{ page: page }}>
                  <a className="text-yellow-600 underline">Weiterlesen</a>
                </Link>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
}

export async function getServerSideProps({ params, query, locale }) {
  const preview = isPreviewEnabled(query);
  const news = await getPagesOfType({
    locale,
    pageContentType: PageContentTypes.BlogPost,
    limit: 3,
    preview,
  });
  return {
    props: { news },
  };
}
