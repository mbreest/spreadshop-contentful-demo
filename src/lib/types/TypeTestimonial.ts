import * as Contentful from 'contentful';
import { TypeExternalPageFields } from './TypeExternalPage';
import { TypePageFields } from './TypePage';
import { TypeQuoteFields } from './TypeQuote';

export interface TypeTestimonialFields {
  anchor: Contentful.EntryFields.Symbol;
  backgroundColor: 'White' | 'Light' | 'Dark';
  title: Contentful.EntryFields.Symbol;
  detail?: Contentful.EntryFields.Symbol;
  quotes?: Contentful.Entry<TypeQuoteFields>[];
  showLogo: Contentful.EntryFields.Boolean;
  logosNew?: Contentful.Asset[];
  ctaType?: 'Primary' | 'Ghost';
  ctaLabel?: Contentful.EntryFields.Symbol;
  ctaTarget?: Contentful.Entry<TypePageFields | TypeExternalPageFields>;
}

export type TypeTestimonial = Contentful.Entry<TypeTestimonialFields>;
