/* eslint-disable @typescript-eslint/camelcase */
import React from 'react';
import ErrorPage from 'next/error';

import { getPage, getPagesOfType } from 'lib/api';
import { isPreviewEnabled } from 'lib/preview';
import { PageHead } from 'components/page-head';
import { PageContentTypes } from 'lib/constants';
import { TypePage, TypePageLandingpage } from 'lib/types';
import { BlockRenderer } from 'components/renderer/block-renderer';

type BlogProps = {};

export default function Blog() {
  return <div className="w-full pb-16">Blog</div>;
}

export async function getServerSideProps({ params, query, locale }) {
  return {
    props: {},
  };
}
