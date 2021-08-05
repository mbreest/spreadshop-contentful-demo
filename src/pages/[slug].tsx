/* eslint-disable @typescript-eslint/camelcase */
import React from 'react';
import ErrorPage from 'next/error';

import { getPage, getBlogPosts } from 'lib/api';
import { isPreviewEnabled } from 'lib/preview';
import { PageHead } from 'components/page-head';
import { PageContentTypes } from 'lib/constants';
import { TypeBlogRoll, TypePage, TypePageLandingpage } from 'lib/types';
import { BlockRenderer } from 'components/renderer/block-renderer';

type LandingProps = {
  page: TypePage;
  segment: string;
};

export default function Landing({ page, segment }: LandingProps) {
  if (!page) {
    return <ErrorPage statusCode={404} />;
  }

  const content = page.fields.content as TypePageLandingpage;
  const { hero, sections = [] } = content?.fields;

  return (
    <div className="w-full pb-16">
      <PageHead page={page} />
      <BlockRenderer block={hero} segment={segment} />
      <BlockRenderer block={sections} segment={segment} />
    </div>
  );
}

export async function getServerSideProps({ params, query, locale, req }) {
  const slug = String((params && params.slug) ?? 'homepage');
  const preview = isPreviewEnabled(query);
  const page = await getPage({
    slug,
    preview,
    locale,
    pageContentType: PageContentTypes.LandingPage,
  });

  // TODO improve through graphql usage?
  const content = page.fields.content as TypePageLandingpage;
  const { sections = [] } = content?.fields;
  for (const section of sections) {
    if (section.sys.contentType.sys.id == 'blogRoll') {
      const blogRoll = section as TypeBlogRoll;
      const pages = await getBlogPosts({
        locale,
        limit: 3,
        preview,
        categoryId: blogRoll.fields.category.sys.id,
      });
      blogRoll.fields.topPosts = pages;
    }
  }

  const segment = req.cookies.segment || 'default';

  return {
    props: { page, segment },
  };
}
