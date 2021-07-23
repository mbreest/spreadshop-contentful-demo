import * as Contentful from 'contentful';
import { TypeBackgroundFields } from './TypeBackground';
import { TypeCtaFields } from './TypeCta';

export interface TypeSkuCarouselFields {
  anchor: Contentful.EntryFields.Symbol;
  title: Contentful.EntryFields.Symbol;
  details?: Contentful.EntryFields.Symbol;
  background: Contentful.Entry<TypeBackgroundFields>;
  skus?: Contentful.EntryFields.Symbol[];
  cta?: Contentful.Entry<TypeCtaFields>;
}

export type TypeSkuCarousel = Contentful.Entry<TypeSkuCarouselFields>;
