import * as Contentful from "contentful";
import { TypePageBlogCategoryFields } from "./TypePageBlogCategory";
import { TypePageHelpdeskArticleFields } from "./TypePageHelpdeskArticle";
import { TypePageLandingpageFields } from "./TypePageLandingpage";
import { TypeSeoFields } from "./TypeSeo";

export interface TypePageFields {
    name: Contentful.EntryFields.Symbol;
    title: Contentful.EntryFields.Symbol;
    slug: Contentful.EntryFields.Symbol;
    seo?: Contentful.Entry<TypeSeoFields>;
    content: Contentful.Entry<TypePageLandingpageFields | TypePageHelpdeskArticleFields | TypePageBlogCategoryFields>;
}

export type TypePage = Contentful.Entry<TypePageFields>;
