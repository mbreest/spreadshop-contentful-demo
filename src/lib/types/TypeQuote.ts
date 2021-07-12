import * as CFRichTextTypes from "@contentful/rich-text-types";
import * as Contentful from "contentful";

export interface TypeQuoteFields {
    illustration: Contentful.EntryFields.Object;
    quote: CFRichTextTypes.Block | CFRichTextTypes.Inline;
    author?: Contentful.EntryFields.Symbol;
}

export type TypeQuote = Contentful.Entry<TypeQuoteFields>;
