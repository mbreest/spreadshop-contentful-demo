import * as Contentful from 'contentful';
import { TypeSpgrSectionFields } from './TypeSpgrSection';

export interface TypePagePagetypeSpreadGroupPageFields {
  name?: Contentful.EntryFields.Symbol;
  section?: Contentful.Entry<TypeSpgrSectionFields>[];
}

export type TypePagePagetypeSpreadGroupPage =
  Contentful.Entry<TypePagePagetypeSpreadGroupPageFields>;
