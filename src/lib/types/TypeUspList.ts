import * as Contentful from "contentful";
import { TypeBackgroundFields } from "./TypeBackground";
import { TypeCtaFields } from "./TypeCta";
import { TypeFeaturedUspItemFields } from "./TypeFeaturedUspItem";

export interface TypeUspListFields {
    anchor: Contentful.EntryFields.Symbol;
    title: Contentful.EntryFields.Symbol;
    details?: Contentful.EntryFields.Symbol;
    background: Contentful.Entry<TypeBackgroundFields>;
    usps?: Contentful.Entry<TypeFeaturedUspItemFields>[];
    twoColumn: Contentful.EntryFields.Boolean;
    cta?: Contentful.Entry<TypeCtaFields>;
}

export type TypeUspList = Contentful.Entry<TypeUspListFields>;
