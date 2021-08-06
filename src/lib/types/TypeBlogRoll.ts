import * as Contentful from 'contentful';
import { TypeExternalPageFields } from './TypeExternalPage';
import { TypePageFields } from './TypePage';
import { TypePageBlogCategoryFields } from './TypePageBlogCategory';
import { TypePage } from './TypePage';

export interface TypeBlogRollFields {
  anchor: Contentful.EntryFields.Symbol;
  backgroundColor: 'White' | 'Light' | 'Dark';
  title: Contentful.EntryFields.Symbol;
  details?: Contentful.EntryFields.Symbol;
  category?: Contentful.Entry<TypePageBlogCategoryFields>;
  ctaType?: 'Primary' | 'Ghost';
  ctaLabel?: Contentful.EntryFields.Symbol;
  ctaTarget?: Contentful.Entry<TypePageFields | TypeExternalPageFields>;
  topPosts?: TypePage[];
}

export type TypeBlogRoll = Contentful.Entry<TypeBlogRollFields>;
