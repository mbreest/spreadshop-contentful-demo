/* eslint-disable @typescript-eslint/camelcase */
import React from 'react';
import ErrorPage from 'next/error';

import { getPage } from 'lib/api';
import { isPreviewEnabled } from 'lib/preview';
import { PageContentTypes } from 'lib/constants';
import { TypePage } from 'lib/types';
import SpgrSingleJob from '../../../components/spreadgroup/singleJob/SpgrSingleJob';
import { PageHead } from '../../../components/page-head';

type LandingProps = {
  page: TypePage;
};

export default function Landing({ page }: LandingProps) {
  if (!page) {
    return <ErrorPage statusCode={404} />;
  }

  return (
    <div className="w-full pb-16">
      <PageHead page={page} />
      <SpgrSingleJob page={page} />
    </div>
  );
}

export async function getServerSideProps({ params, query, locale }) {
  const slug = String(params && params.slug);
  const preview = isPreviewEnabled(query);
  const page = await getPage({
    slug,
    preview,
    locale,
    pageContentType: PageContentTypes.SpreadGroupSingleJobs,
  });

  return {
    props: { page },
  };
}
