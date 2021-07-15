import * as CFRichTextTypes from "@contentful/rich-text-types";
import * as Contentful from "contentful";
import { TypePageBlogCategoryFields } from "./TypePageBlogCategory";

export interface TypePageBlogPostFields {
    name?: Contentful.EntryFields.Symbol;
    category: Contentful.Entry<TypePageBlogCategoryFields>;
    illustration: Contentful.EntryFields.Object;
    title: Contentful.EntryFields.Symbol;
    text?: CFRichTextTypes.Block | CFRichTextTypes.Inline;
}

export type TypePageBlogPost = Contentful.Entry<TypePageBlogPostFields>;
