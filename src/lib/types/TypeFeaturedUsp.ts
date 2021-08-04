import * as Contentful from 'contentful';
import { TypeExternalPageFields } from './TypeExternalPage';
import { TypeFeaturedUspItemFields } from './TypeFeaturedUspItem';
import { TypePageFields } from './TypePage';

export interface TypeFeaturedUspFields {
  anchor: Contentful.EntryFields.Symbol;
  backgroundColor: 'White' | 'Light' | 'Dark';
  title: Contentful.EntryFields.Symbol;
  details?: Contentful.EntryFields.Symbol;
  usps?: Contentful.Entry<TypeFeaturedUspItemFields>[];
  ctaType?: 'Primary' | 'Ghost';
  ctaLabel?: Contentful.EntryFields.Symbol;
  ctaTarget?: Contentful.Entry<TypePageFields | TypeExternalPageFields>;
}

export type TypeFeaturedUsp = Contentful.Entry<TypeFeaturedUspFields>;
