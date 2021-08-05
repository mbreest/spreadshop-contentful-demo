import * as Contentful from 'contentful';

export interface TypeAssortmentFields {
  categoryId?: Contentful.EntryFields.Symbol;
}

export type TypeAssortment = Contentful.Entry<TypeAssortmentFields>;
