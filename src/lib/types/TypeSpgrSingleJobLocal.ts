import * as CFRichTextTypes from '@contentful/rich-text-types';
import * as Contentful from 'contentful';
import { TypeSpgrRecruitingSpecialistFields } from './TypeSpgrRecruitingSpecialist';

export interface TypeSpgrSingleJobLocalFields {
  jobTitle: Contentful.EntryFields.Symbol;
  description: CFRichTextTypes.Block | CFRichTextTypes.Inline;
  applicationDescription: CFRichTextTypes.Block | CFRichTextTypes.Inline;
  jobId: Contentful.EntryFields.Symbol;
  componentName: Contentful.EntryFields.Symbol;
  recruitingSpecialist: Contentful.Entry<TypeSpgrRecruitingSpecialistFields>;
}

export type TypeSpgrSingleJobLocal = Contentful.Entry<TypeSpgrSingleJobLocalFields>;
