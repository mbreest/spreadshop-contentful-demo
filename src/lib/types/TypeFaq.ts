import * as Contentful from 'contentful';
import { TypeExternalPageFields } from './TypeExternalPage';
import { TypePageFields } from './TypePage';
import { TypePageHelpdeskArticleFields } from './TypePageHelpdeskArticle';

export interface TypeFaqFields {
  anchor: Contentful.EntryFields.Symbol;
  backgroundColor: 'White' | 'Light' | 'Dark';
  title: Contentful.EntryFields.Symbol;
  detailsText?: Contentful.EntryFields.Symbol;
  entries: Contentful.Entry<TypePageHelpdeskArticleFields>[];
  questions?: Contentful.EntryFields.Symbol;
  questionDetails?: Contentful.EntryFields.Symbol;
  questionCtaLabel1?: Contentful.EntryFields.Symbol;
  questionCtaTarget1?: Contentful.Entry<TypePageFields | TypeExternalPageFields>;
  questionCtaLabel2?: Contentful.EntryFields.Symbol;
  questionCtaTarget2?: Contentful.Entry<TypePageFields | TypeExternalPageFields>;
}

export type TypeFaq = Contentful.Entry<TypeFaqFields>;
