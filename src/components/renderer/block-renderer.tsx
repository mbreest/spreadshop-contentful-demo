import _ from 'lodash';
import React from 'react';
import type { Entry } from 'contentful';

import { Hero } from './hero';
import { ComponentContentTypes, PageContentType } from '../../lib/constants';
import { FeaturedUsp } from './featuredUsp';
import { Carousel } from './carousel';
import { Testimonial } from './testimonial';
import { Banner } from './banner';
import { SingleAsset } from './singleAsset';
import { UspList } from './uspList';
import { Calculator } from './calculator';
import { BlogRoll } from './blogRoll';
import { Faq } from './faq';

type BlockRendererProps = {
  block: any;
};

const BlockRenderer = ({ block }: BlockRendererProps) => {
  if (Array.isArray(block)) {
    return (
      <>
        {block.map((b) => (
          <BlockRenderer key={`block-${b.sys.id}`} block={b} />
        ))}
      </>
    );
  }

  const contentTypeId = _.get(block, 'sys.contentType.sys.id');
  const Component = ContentTypeMap[contentTypeId];

  if (!Component) {
    console.warn(`${contentTypeId} can not be handled`);
    return null;
  }

  const { id } = block.sys;

  const componentProps = {
    ...block,
    parent: block.parent,
  };

  return <Component key={`${contentTypeId}-${id}`} {...componentProps} />;
};

const fromPage = (fieldName: string) => (parent: Entry<unknown>) => (
  <BlockRenderer block={{ ...parent?.fields[fieldName], parent }} />
);

const ContentTypeMap = {
  [ComponentContentTypes.Hero]: Hero,
  [ComponentContentTypes.FeaturedUSP]: FeaturedUsp,
  [ComponentContentTypes.Carousel]: Carousel,
  [ComponentContentTypes.Testimonial]: Testimonial,
  [ComponentContentTypes.Banner]: Banner,
  [ComponentContentTypes.SingleAsset]: SingleAsset,
  [ComponentContentTypes.USPList]: UspList,
  [ComponentContentTypes.Calculator]: Calculator,
  [ComponentContentTypes.BlogRoll]: BlogRoll,
  [ComponentContentTypes.Faq]: Faq,
  [PageContentType]: fromPage('content')
};

export { BlockRenderer };
