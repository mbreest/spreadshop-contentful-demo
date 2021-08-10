import * as Contentful from 'contentful';

export interface TypeSpgrJobArchiveFields {
  spreadGroupJobArchive?: Contentful.EntryFields.Symbol;
}

export type TypeSpgrJobArchive = Contentful.Entry<TypeSpgrJobArchiveFields>;
