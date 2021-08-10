import * as Contentful from 'contentful';
import { TypeSpgrSingleJobLocalFields } from './TypeSpgrSingleJobLocal';

export interface TypeSpgrSingleJobFields {
  jobTitle?: Contentful.EntryFields.Symbol;
  singleJobLocal: Contentful.Entry<TypeSpgrSingleJobLocalFields>;
}

export type TypeSpgrSingleJob = Contentful.Entry<TypeSpgrSingleJobFields>;
