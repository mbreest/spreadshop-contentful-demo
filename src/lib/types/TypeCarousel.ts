import * as Contentful from 'contentful';
import { TypeCarouselCategoryFields } from './TypeCarouselCategory';
import { TypeExternalPageFields } from './TypeExternalPage';
import { TypePageFields } from './TypePage';

export interface TypeCarouselFields {
  anchor: Contentful.EntryFields.Symbol;
  backgroundColor: 'White' | 'Light' | 'Dark';
  title: Contentful.EntryFields.Symbol;
  details?: Contentful.EntryFields.Symbol;
  categories: Contentful.Entry<TypeCarouselCategoryFields>[];
  ctaType?: 'Primary' | 'Ghost';
  ctaLabel?: Contentful.EntryFields.Symbol;
  ctaTarget?: Contentful.Entry<TypePageFields | TypeExternalPageFields>;
}

export type TypeCarousel = Contentful.Entry<TypeCarouselFields>;
