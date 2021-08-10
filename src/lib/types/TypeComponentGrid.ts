import * as Contentful from 'contentful';
import { TypeExternalPageFields } from './TypeExternalPage';
import { TypeGridEntryFields } from './TypeGridEntry';
import { TypePageFields } from './TypePage';

export interface TypeComponentGridFields {
  anchor: Contentful.EntryFields.Symbol;
  backgroundColor: 'White' | 'Light' | 'Dark';
  title: Contentful.EntryFields.Symbol;
  details?: Contentful.EntryFields.Symbol;
  grid?: Contentful.Entry<TypeGridEntryFields>[];
  ctaType?: 'Primary' | 'Ghost';
  ctaLabel?: Contentful.EntryFields.Symbol;
  ctaTarget?: Contentful.Entry<TypePageFields | TypeExternalPageFields>;
}

export type TypeComponentGrid = Contentful.Entry<TypeComponentGridFields>;
