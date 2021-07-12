import * as Contentful from "contentful";
import { TypeBackgroundFields } from "./TypeBackground";
import { TypeCtaFields } from "./TypeCta";

export interface TypeBannerFields {
    title: Contentful.EntryFields.Symbol;
    details?: Contentful.EntryFields.Symbol;
    background: Contentful.Entry<TypeBackgroundFields>;
    cta?: Contentful.Entry<TypeCtaFields>;
}

export type TypeBanner = Contentful.Entry<TypeBannerFields>;
