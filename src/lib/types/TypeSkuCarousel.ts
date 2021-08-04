import * as Contentful from 'contentful';
import { TypeExternalPageFields } from './TypeExternalPage';
import { TypePageFields } from './TypePage';

export interface TypeSkuCarouselFields {
  anchor: Contentful.EntryFields.Symbol;
  backgroundColor: 'White' | 'Light' | 'Dark';
  title: Contentful.EntryFields.Symbol;
  details?: Contentful.EntryFields.Symbol;
  skus?: Contentful.EntryFields.Symbol[];
  ctaType?: 'Primary' | 'Ghost';
  ctaLabel?: Contentful.EntryFields.Symbol;
  ctaTarget?: Contentful.Entry<TypePageFields | TypeExternalPageFields>;
}

export type TypeSkuCarousel = Contentful.Entry<TypeSkuCarouselFields>;
