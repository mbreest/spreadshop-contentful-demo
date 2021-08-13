import * as Contentful from 'contentful';
import { TypeSeoFields } from './TypeSeo';
import { TypeSpgrJobArchiveFields } from './TypeSpgrJobArchive';
import { TypeSpgrTeaserFields } from './TypeSpgrTeaser';

export interface TypeSpgrPageFields {
  seo?: Contentful.Entry<TypeSeoFields>;
  name: Contentful.EntryFields.Symbol;
  section?: Contentful.Entry<TypeSpgrJobArchiveFields | TypeSpgrTeaserFields>[];
}

export type TypeSpgrPage = Contentful.Entry<TypeSpgrPageFields>;
