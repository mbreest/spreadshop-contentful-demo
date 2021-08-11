import * as Contentful from 'contentful';
import { TypeSpgrJobArchiveFields } from './TypeSpgrJobArchive';
import { TypeSpgrTeaserFields } from './TypeSpgrTeaser';

export interface TypeSpgrSectionFields {
  name: Contentful.EntryFields.Symbol;
  content?: Contentful.Entry<TypeSpgrJobArchiveFields | TypeSpgrTeaserFields>;
}

export type TypeSpgrSection = Contentful.Entry<TypeSpgrSectionFields>;
