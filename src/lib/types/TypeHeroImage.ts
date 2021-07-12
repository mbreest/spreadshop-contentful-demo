import * as Contentful from "contentful";
import { TypeBackgroundFields } from "./TypeBackground";
import { TypeCtaFields } from "./TypeCta";

export interface TypeHeroImageFields {
    subPage: Contentful.EntryFields.Boolean;
    title: Contentful.EntryFields.Symbol;
    details?: Contentful.EntryFields.Symbol;
    background: Contentful.Entry<TypeBackgroundFields>;
    illustrations?: Contentful.EntryFields.Object;
    cta?: Contentful.Entry<TypeCtaFields>;
}

export type TypeHeroImage = Contentful.Entry<TypeHeroImageFields>;
