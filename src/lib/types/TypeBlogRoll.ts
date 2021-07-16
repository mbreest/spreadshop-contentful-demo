import * as Contentful from 'contentful';
import { TypeBackgroundFields } from './TypeBackground';
import { TypeCtaFields } from './TypeCta';
import { TypePageBlogCategoryFields } from './TypePageBlogCategory';
import { TypePage } from './TypePage';

export interface TypeBlogRollFields {
  anchor: Contentful.EntryFields.Symbol;
  title: Contentful.EntryFields.Symbol;
  details?: Contentful.EntryFields.Symbol;
  background: Contentful.Entry<TypeBackgroundFields>;
  category?: Contentful.Entry<TypePageBlogCategoryFields>;
  topPosts?: TypePage[];
  cta?: Contentful.Entry<TypeCtaFields>;
}

export type TypeBlogRoll = Contentful.Entry<TypeBlogRollFields>;
