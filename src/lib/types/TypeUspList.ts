import * as Contentful from 'contentful';
import { TypeExternalPageFields } from './TypeExternalPage';
import { TypeFeaturedUspItemFields } from './TypeFeaturedUspItem';
import { TypePageFields } from './TypePage';

export interface TypeUspListFields {
  anchor: Contentful.EntryFields.Symbol;
  backgroundColor: 'White' | 'Light' | 'Dark';
  title: Contentful.EntryFields.Symbol;
  details?: Contentful.EntryFields.Symbol;
  usps?: Contentful.Entry<TypeFeaturedUspItemFields>[];
  twoColumn: Contentful.EntryFields.Boolean;
  ctaType?: 'Primary' | 'Ghost';
  ctaLabel?: Contentful.EntryFields.Symbol;
  ctaTarget?: Contentful.Entry<TypePageFields | TypeExternalPageFields>;
}

export type TypeUspList = Contentful.Entry<TypeUspListFields>;
