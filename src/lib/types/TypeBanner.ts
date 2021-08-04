import * as Contentful from 'contentful';
import { TypeExternalPageFields } from './TypeExternalPage';
import { TypePageFields } from './TypePage';

export interface TypeBannerFields {
  backgroundColor: 'White' | 'Light' | 'Dark';
  backgroundImage?: Contentful.Asset;
  title: Contentful.EntryFields.Symbol;
  details?: Contentful.EntryFields.Symbol;
  ctaType?: 'Primary' | 'Ghost';
  ctaLabel?: Contentful.EntryFields.Symbol;
  ctaTarget?: Contentful.Entry<TypePageFields | TypeExternalPageFields>;
}

export type TypeBanner = Contentful.Entry<TypeBannerFields>;
