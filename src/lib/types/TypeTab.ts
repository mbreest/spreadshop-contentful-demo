import * as CFRichTextTypes from '@contentful/rich-text-types';
import * as Contentful from 'contentful';

export interface TypeTabFields {
  title: Contentful.EntryFields.Symbol;
  description?: CFRichTextTypes.Block | CFRichTextTypes.Inline;
}

export type TypeTab = Contentful.Entry<TypeTabFields>;
