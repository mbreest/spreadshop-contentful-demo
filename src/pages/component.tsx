/* eslint-disable @typescript-eslint/camelcase */
import * as Contentful from 'contentful';

import React from 'react';
import ErrorPage from 'next/error';

import { getComponent, getBlogPosts, getSlotPlacements } from 'lib/api';
import { isPreviewEnabled } from 'lib/preview';
import { TypeBlogRoll, TypeComponentSlot } from 'lib/types';
import { BlockRenderer } from 'components/renderer/block-renderer';

type LandingProps = {
  component: Contentful.Entry<any>;
  segment: string;
};

export default function Landing({ component, segment }: LandingProps) {
  if (!component) {
    return <ErrorPage statusCode={404} />;
  }

  return (
    <div className="w-full pb-16">
      <BlockRenderer block={component} segment={segment} />
    </div>
  );
}

export async function getServerSideProps({ params, query, locale, req }) {
  const id = query.id;

  const renderDate =
    isPreviewEnabled(query) && query.renderDate ? new Date(query.renderDate) : new Date();
  const preview = isPreviewEnabled(query);
  const component = await getComponent({ locale, id, preview });

  // TODO improve through graphql usage?

  if (component.sys.contentType.sys.id == 'blogRoll') {
    const blogRoll = component as TypeBlogRoll;
    const pages = await getBlogPosts({
      locale,
      limit: 3,
      preview,
      categoryId: blogRoll.fields.category.sys.id,
    });
    blogRoll.fields.topPosts = pages;
  } else if (component.sys.contentType.sys.id == 'componentSlot') {
    const slot = component as TypeComponentSlot;
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

  const segment = query.segment || req.cookies.segment || 'default';

  return {
    props: { component, segment },
  };
}
