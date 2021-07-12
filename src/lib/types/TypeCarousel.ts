import * as Contentful from "contentful";
import { TypeBackgroundFields } from "./TypeBackground";
import { TypeCarouselCategoryFields } from "./TypeCarouselCategory";
import { TypeCtaFields } from "./TypeCta";

export interface TypeCarouselFields {
    anchor: Contentful.EntryFields.Symbol;
    title: Contentful.EntryFields.Symbol;
    details?: Contentful.EntryFields.Symbol;
    background: Contentful.Entry<TypeBackgroundFields>;
    categories: Contentful.Entry<TypeCarouselCategoryFields>[];
    cta?: Contentful.Entry<TypeCtaFields>;
}

export type TypeCarousel = Contentful.Entry<TypeCarouselFields>;
