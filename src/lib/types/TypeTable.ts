import * as Contentful from 'contentful';

export interface TypeTableFields {
  internalName?: Contentful.EntryFields.Symbol;
  table?: Contentful.EntryFields.Object;
}

export type TypeTable = Contentful.Entry<TypeTableFields>;
