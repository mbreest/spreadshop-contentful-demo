import * as Contentful from 'contentful';
import { TypeExternalPageFields } from './TypeExternalPage';
import { TypePageFields } from './TypePage';

export interface TypeFeaturedUspItemFields {
  title: Contentful.EntryFields.Symbol;
  illustrationNew: Contentful.Asset;
  details?: Contentful.EntryFields.Symbol;
  linkText?: Contentful.EntryFields.Symbol;
  linkTarget?: Contentful.Entry<TypePageFields | TypeExternalPageFields>;
}

export type TypeFeaturedUspItem = Contentful.Entry<TypeFeaturedUspItemFields>;
