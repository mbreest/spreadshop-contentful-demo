/* eslint-disable @typescript-eslint/camelcase */
import React from 'react';
import ErrorPage from 'next/error';

import { getPage } from 'lib/api';
import { isPreviewEnabled } from 'lib/preview';
import { PageHead } from 'components/page-head';
import { PageContentTypes } from 'lib/constants';
import { TypePage, TypePageLandingpage } from 'lib/types';
import { BlockRenderer } from 'components/renderer/block-renderer';

type BlogCategoryProps = {};

export default function BlogCategory() {
  return <div className="w-full pb-16">Blog Category</div>;
}

export async function getServerSideProps({ params, query, locale }) {
  return {
    props: {},
  };
}
