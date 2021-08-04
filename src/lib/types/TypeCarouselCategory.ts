import * as Contentful from 'contentful';

export interface TypeCarouselCategoryFields {
  title: Contentful.EntryFields.Symbol;
  illustrationsNew?: Contentful.Asset[];
}

export type TypeCarouselCategory = Contentful.Entry<TypeCarouselCategoryFields>;
