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
import { SkuCarousel } from './skuCarousel';
import { Grid } from './grid';
import { TypeComponentSegmentedComponent, TypeComponentSlot } from '../../lib/types';
import Tabs from '../tabs/Tabs';
import SpgrSection from '../spreadgroup/SpgrSection';
import SpgrTeaser from '../spreadgroup/SpgrTeaser';
import SpgrJobArchive from '../spreadgroup/jobArchive/SpgrJobArchive';
import SpgrRecruitingSpecialist from '../spreadgroup/SpgrRecruitingSpecialist';
import SpgrSingleJob from '../spreadgroup/singleJob/SpgrSingleJob';

type BlockRendererProps = {
  block: any;
  segment?: string;
};

const BlockRenderer = ({ block, segment }: BlockRendererProps) => {
  if (Array.isArray(block)) {
    return (
      <>
        {block.map((b) => (
          <BlockRenderer key={`block-${b.sys.id}`} block={b} segment={segment} />
        ))}
      </>
    );
  }

  let contentTypeId = _.get(block, 'sys.contentType.sys.id');

  let resolvedBlock = block;
  if (contentTypeId === ComponentContentTypes.SegmentedComponent) {
    const segmentedComponent = block as TypeComponentSegmentedComponent;
    if ('default' === segment) {
      resolvedBlock = segmentedComponent.fields.default;
    } else if (
      segmentedComponent.fields.segment1Name === segment &&
      segmentedComponent.fields.segment1Component
    ) {
      resolvedBlock = segmentedComponent.fields.segment1Component;
    } else if (
      segmentedComponent.fields.segment2Name === segment &&
      segmentedComponent.fields.segment2Component
    ) {
      resolvedBlock = segmentedComponent.fields.segment2Component;
    } else if (
      segmentedComponent.fields.segment3Name === segment &&
      segmentedComponent.fields.segment3Component
    ) {
      resolvedBlock = segmentedComponent.fields.segment3Component;
    }
  } else if (contentTypeId === ComponentContentTypes.Slot) {
    const slotComponent = block as TypeComponentSlot;
    if (slotComponent.fields.override) {
      resolvedBlock = slotComponent.fields.override;
    } else if (slotComponent.fields.default) {
      resolvedBlock = slotComponent.fields.default;
    }
  }

  contentTypeId = _.get(resolvedBlock, 'sys.contentType.sys.id');

  const Component = ContentTypeMap[contentTypeId];

  if (!Component) {
    console.warn(`${contentTypeId} can not be handled`);
    return null;
  }

  const { id } = resolvedBlock.sys;

  const componentProps = {
    ...resolvedBlock,
    parent: block.parent,
  };

  //eslint-disable-next-line
  //@ts-ignore
  return <Component key={`${contentTypeId}-${id}`} {...componentProps} />;
};

const fromPage = (fieldName: string) => (parent: Entry<unknown>) =>
  <BlockRenderer block={{ ...parent?.fields[fieldName], parent }} segment={''} />;

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
  [ComponentContentTypes.Tabs]: Tabs,
  [ComponentContentTypes.SkuCarousel]: SkuCarousel,
  [ComponentContentTypes.Grid]: Grid,
  [ComponentContentTypes.SpgrSection]: SpgrSection,
  [ComponentContentTypes.SpgrTeaser]: SpgrTeaser,
  [ComponentContentTypes.SpgrJobArchive]: SpgrJobArchive,
  [ComponentContentTypes.SpgrRecruitingSpecialist]: SpgrRecruitingSpecialist,
  [ComponentContentTypes.SpgrSingleJobLocal]: SpgrSingleJob,
  [PageContentType]: fromPage('content'),
};

export { BlockRenderer };
