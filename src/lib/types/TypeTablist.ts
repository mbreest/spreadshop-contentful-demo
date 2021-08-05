import * as Contentful from 'contentful';
import { TypeTabFields } from './TypeTab';

export interface TypeTablistFields {
  tab: Contentful.Entry<TypeTabFields>[];
}

export type TypeTablist = Contentful.Entry<TypeTablistFields>;
