/* eslint-disable @typescript-eslint/camelcase */
import React from 'react';

import { getBlogPosts, getPage, getPagesOfType } from 'lib/api';
import { isPreviewEnabled } from 'lib/preview';
import { PageContentTypes } from 'lib/constants';
import { TypePage, TypePageBlogPost } from 'lib/types';
import { Link } from 'components/link';

type BlogProps = {
  news: TypePage[];
  interviews: TypePage[];
};

export default function Blog({ news, interviews }: BlogProps) {
  return (
    <div className="w-full pb-16">
      <div className="sprd-container mx-auto p-8 h-full">
        <div>
          <h1 className="h0 pt-4 text-3xl font-medium leading-tight text-gray-900">News</h1>

          <div className="md:flex md:flex-row pt-4">
            {news.map(function (page, idx) {
              const content = page.fields.content as TypePageBlogPost;
              return (
                <div key={'article-' + idx} className="pr-4 pb-4 md:w-1/3">
                  <img src={content.fields.illustrationNew.fields.file.url} />
                  <div className="font-bold">{page.fields.title}</div>
                  <Link {...{ page: page }}>
                    <a className="text-yellow-600 underline">Weiterlesen</a>
                  </Link>
                </div>
              );
            })}
          </div>
        </div>
        <div>
          <h1 className="h0 pt-4 text-3xl font-medium leading-tight text-gray-900">
            Shop of the Month
          </h1>

          <div className="md:flex md:flex-row pt-4">
            {interviews.map(function (page, idx) {
              const content = page.fields.content as TypePageBlogPost;
              return (
                <div key={'article-' + idx} className="pr-4 pb-4 md:w-1/3">
                  <img src={content.fields.illustrationNew.fields.file.url} />
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
    </div>
  );
}

export async function getServerSideProps({ params, query, locale }) {
  const preview = isPreviewEnabled(query);

  const category = await getPage({
    slug: 'news',
    preview,
    locale,
    pageContentType: PageContentTypes.BlogCategory,
  });

  const news = await getBlogPosts({
    locale,
    limit: 3,
    preview,
    categoryId: category.fields.content.sys.id,
  });

  const interviewCategory = await getPage({
    slug: 'interviews',
    preview,
    locale,
    pageContentType: PageContentTypes.BlogCategory,
  });

  const interviews = await getBlogPosts({
    locale,
    limit: 3,
    preview,
    categoryId: interviewCategory.fields.content.sys.id,
  });

  return {
    props: { news, interviews },
  };
}
