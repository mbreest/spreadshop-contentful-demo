import * as CFRichTextTypes from "@contentful/rich-text-types";
import * as Contentful from "contentful";
import { TypeBackgroundFields } from "./TypeBackground";
import { TypeCtaFields } from "./TypeCta";

export interface TypeCalculatorFields {
    anchor: Contentful.EntryFields.Symbol;
    title: Contentful.EntryFields.Symbol;
    description?: CFRichTextTypes.Block | CFRichTextTypes.Inline;
    details?: Contentful.EntryFields.Symbol;
    background: Contentful.Entry<TypeBackgroundFields>;
    cta?: Contentful.Entry<TypeCtaFields>;
}

export type TypeCalculator = Contentful.Entry<TypeCalculatorFields>;
