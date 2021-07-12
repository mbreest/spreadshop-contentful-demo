import * as CFRichTextTypes from "@contentful/rich-text-types";
import * as Contentful from "contentful";

export interface TypePageHelpdeskArticleFields {
    name?: Contentful.EntryFields.Symbol;
    details: CFRichTextTypes.Block | CFRichTextTypes.Inline;
}

export type TypePageHelpdeskArticle = Contentful.Entry<TypePageHelpdeskArticleFields>;
