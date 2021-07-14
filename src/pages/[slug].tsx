/* eslint-disable @typescript-eslint/camelcase */
import React from 'react';
import ErrorPage from 'next/error';

import { getPage } from 'lib/api';
import { isPreviewEnabled } from 'lib/preview';
import { PageHead } from 'components/page-head';
import { PageContentTypes } from 'lib/constants';
import { TypePage, TypePageLandingpage } from 'lib/types';
import { BlockRenderer } from 'components/renderer/block-renderer';

type LandingProps = {
  page: TypePage;
};

export default function Landing({ page }: LandingProps) {
  if (!page) {
    return <ErrorPage statusCode={404} />;
  }

  const content = page.fields.content as TypePageLandingpage;
  const { hero, sections = [] } = content?.fields;

  return (
    <div className="w-full pb-16 lg:pb-24">   
      <PageHead page={page} />   
      <BlockRenderer block={hero} />
      <BlockRenderer block={sections} />        
    </div>
  );
}

export async function getServerSideProps({ params, query, locale }) {
  const slug = String(params.slug ?? 'homepage');
  const preview = isPreviewEnabled(query);
  const page = await getPage({
    slug,
    preview,
    locale,
    pageContentType: PageContentTypes.LandingPage,
  });

  return {
    props: { page },
  };
}