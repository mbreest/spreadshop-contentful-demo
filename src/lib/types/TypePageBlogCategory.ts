import * as Contentful from "contentful";

export interface TypePageBlogCategoryFields {
    name?: Contentful.EntryFields.Symbol;
}

export type TypePageBlogCategory = Contentful.Entry<TypePageBlogCategoryFields>;
