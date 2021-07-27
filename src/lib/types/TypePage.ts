import * as Contentful from 'contentful';
import { TypePageBlogCategoryFields } from './TypePageBlogCategory';
import { TypePageBlogPostFields } from './TypePageBlogPost';
import { TypePageHelpdeskArticleFields } from './TypePageHelpdeskArticle';
import { TypePageLandingpageFields } from './TypePageLandingpage';
import { TypePageProductFields } from './TypePageProduct';
import { TypeSeoFields } from './TypeSeo';

export interface TypePageFields {
  name: Contentful.EntryFields.Symbol;
  title: Contentful.EntryFields.Symbol;
  slug: Contentful.EntryFields.Symbol;
  seo?: Contentful.Entry<TypeSeoFields>;
  content: Contentful.Entry<
    | TypePageBlogCategoryFields
    | TypePageBlogPostFields
    | TypePageHelpdeskArticleFields
    | TypePageLandingpageFields
    | TypePageProductFields
  >;
}

export type TypePage = Contentful.Entry<TypePageFields>;
