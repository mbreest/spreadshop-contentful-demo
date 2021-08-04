import * as Contentful from 'contentful';
import { TypeCtaFields } from './TypeCta';
import { TypeExternalPageFields } from './TypeExternalPage';
import { TypeLinkToFields } from './TypeLinkTo';
import { TypePageFields } from './TypePage';

export interface TypeFeaturedUspItemFields {
  title: Contentful.EntryFields.Symbol;
  illustration?: Contentful.EntryFields.Object;
  illustrationNew: Contentful.Asset;
  details?: Contentful.EntryFields.Symbol;
  link?: Contentful.Entry<TypeLinkToFields>;
  cta?: Contentful.Entry<TypeCtaFields>;
  linkText?: Contentful.EntryFields.Symbol;
  linkTarget?: Contentful.Entry<TypePageFields | TypeExternalPageFields>;
}

export type TypeFeaturedUspItem = Contentful.Entry<TypeFeaturedUspItemFields>;
