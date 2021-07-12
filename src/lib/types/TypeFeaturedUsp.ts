import * as Contentful from "contentful";
import { TypeBackgroundFields } from "./TypeBackground";
import { TypeCtaFields } from "./TypeCta";
import { TypeFeaturedUspItemFields } from "./TypeFeaturedUspItem";

export interface TypeFeaturedUspFields {
    anchor: Contentful.EntryFields.Symbol;
    title: Contentful.EntryFields.Symbol;
    details?: Contentful.EntryFields.Symbol;
    background: Contentful.Entry<TypeBackgroundFields>;
    usps?: Contentful.Entry<TypeFeaturedUspItemFields>[];
    cta?: Contentful.Entry<TypeCtaFields>;
}

export type TypeFeaturedUsp = Contentful.Entry<TypeFeaturedUspFields>;
