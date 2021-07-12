import * as Contentful from "contentful";

export interface TypeCarouselCategoryFields {
    title: Contentful.EntryFields.Symbol;
    illustrations: Contentful.EntryFields.Object;
}

export type TypeCarouselCategory = Contentful.Entry<TypeCarouselCategoryFields>;
