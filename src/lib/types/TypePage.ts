import * as Contentful from 'contentful';
import { TypeAssortmentPageFields } from './TypeAssortmentPage';
import { TypePageBlogCategoryFields } from './TypePageBlogCategory';
import { TypePageBlogPostFields } from './TypePageBlogPost';
import { TypePageHelpdeskArticleFields } from './TypePageHelpdeskArticle';
import { TypePageLandingpageFields } from './TypePageLandingpage';
import { TypePagePagetypeSpreadGroupPageFields } from './TypePagePagetypeSpreadGroupPage';
import { TypePageProductFields } from './TypePageProduct';
import { TypeSeoFields } from './TypeSeo';

export interface TypePageFields {
  name: Contentful.EntryFields.Symbol;
  title: Contentful.EntryFields.Symbol;
  slug: Contentful.EntryFields.Symbol;
  seo?: Contentful.Entry<TypeSeoFields>;
  content: Contentful.Entry<
    | TypeAssortmentPageFields
    | TypePageBlogCategoryFields
    | TypePageBlogPostFields
    | TypePageHelpdeskArticleFields
    | TypePageLandingpageFields
    | TypePageProductFields
    | TypePagePagetypeSpreadGroupPageFields
  >;
}

export type TypePage = Contentful.Entry<TypePageFields>;
