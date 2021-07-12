import * as Contentful from "contentful";
import { TypeCtaFields } from "./TypeCta";
import { TypeLinkToFields } from "./TypeLinkTo";

export interface TypeFeaturedUspItemFields {
    title: Contentful.EntryFields.Symbol;
    illustration: Contentful.EntryFields.Object;
    details?: Contentful.EntryFields.Symbol;
    link?: Contentful.Entry<TypeLinkToFields>;
    cta?: Contentful.Entry<TypeCtaFields>;
}

export type TypeFeaturedUspItem = Contentful.Entry<TypeFeaturedUspItemFields>;
