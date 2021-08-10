/* eslint-disable @typescript-eslint/camelcase */
import React from 'react';
import ErrorPage from 'next/error';

import { getPage, getBlogPosts, getSlotPlacements } from 'lib/api';
import { isPreviewEnabled } from 'lib/preview';
import { PageHead } from 'components/page-head';
import { PageContentTypes } from 'lib/constants';
import { TypeBlogRoll, TypeComponentSlot, TypePage, TypePageLandingpage } from 'lib/types';
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
  const renderDate =
    isPreviewEnabled(query) && query.renderDate ? new Date(query.renderDate) : new Date();
  const preview = isPreviewEnabled(query);
  const page = await getPage({
    slug,
    preview,
    locale,
    pageContentType: PageContentTypes.LandingPage,
  });

  // TODO improve through graphql usage?
  const content = page.fields.content as TypePageLandingpage;
  const { sections = [], hero } = content?.fields;
  if (hero && hero!.sys.contentType!.sys.id == 'componentSlot') {
    const slot = hero as TypeComponentSlot;
    const slotPlacements = await getSlotPlacements({
      locale,
      limit: 3,
      preview,
      slotId: slot.sys.id,
      now: renderDate,
    });
    if (slotPlacements.length > 0) {
      slot.fields.override = slotPlacements[0].fields.component;
    }
  }
  for (const section of sections) {
    if (section.sys.contentType) {
      if (section.sys.contentType.sys.id == 'blogRoll') {
        const blogRoll = section as TypeBlogRoll;
        const pages = await getBlogPosts({
          locale,
          limit: 3,
          preview,
          categoryId: blogRoll.fields.category.sys.id,
        });
        blogRoll.fields.topPosts = pages;
      } else if (section.sys.contentType.sys.id == 'componentSlot') {
        const slot = section as TypeComponentSlot;
        const slotPlacements = await getSlotPlacements({
          locale,
          limit: 3,
          preview,
          slotId: slot.sys.id,
          now: renderDate,
        });
        if (slotPlacements.length > 0) {
          slot.fields.override = slotPlacements[0].fields.component;
        }
      }
    }
  }

  const segment = query.segment || req.cookies.segment || 'default';

  return {
    props: { page, segment },
  };
}
