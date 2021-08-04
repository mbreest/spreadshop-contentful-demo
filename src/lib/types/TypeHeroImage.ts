import * as Contentful from 'contentful';
import { TypeExternalPageFields } from './TypeExternalPage';
import { TypePageFields } from './TypePage';

export interface TypeHeroImageFields {
  subPage: Contentful.EntryFields.Boolean;
  backgroundColor: 'White' | 'Light' | 'Dark';
  backgroundImage?: Contentful.Asset;
  backgroundOverlayColor?: Contentful.EntryFields.Symbol;
  title: Contentful.EntryFields.Symbol;
  details?: Contentful.EntryFields.Symbol;
  illustrations?: Contentful.EntryFields.Object;
  ctaType?: 'Primary' | 'Ghost';
  ctaLabel?: Contentful.EntryFields.Symbol;
  ctaTarget?: Contentful.Entry<TypePageFields | TypeExternalPageFields>;
}

export type TypeHeroImage = Contentful.Entry<TypeHeroImageFields>;
