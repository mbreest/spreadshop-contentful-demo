import * as Contentful from 'contentful';
import { TypeExternalPageFields } from './TypeExternalPage';
import { TypePageFields } from './TypePage';

export interface TypeGridEntryFields {
  internalName?: Contentful.EntryFields.Symbol;
  illustrationNew: Contentful.Asset;
  linkText?: Contentful.EntryFields.Symbol;
  linkTarget?: Contentful.Entry<TypePageFields | TypeExternalPageFields>;
}

export type TypeGridEntry = Contentful.Entry<TypeGridEntryFields>;
