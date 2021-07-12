import * as Contentful from "contentful";
import { TypeBackgroundFields } from "./TypeBackground";
import { TypeCtaFields } from "./TypeCta";
import { TypeQuoteFields } from "./TypeQuote";

export interface TypeTestimonialFields {
    anchor: Contentful.EntryFields.Symbol;
    title: Contentful.EntryFields.Symbol;
    detail?: Contentful.EntryFields.Symbol;
    background: Contentful.Entry<TypeBackgroundFields>;
    quotes?: Contentful.Entry<TypeQuoteFields>[];
    showLogo: Contentful.EntryFields.Boolean;
    logos?: Contentful.EntryFields.Object;
    cta?: Contentful.Entry<TypeCtaFields>;
}

export type TypeTestimonial = Contentful.Entry<TypeTestimonialFields>;
