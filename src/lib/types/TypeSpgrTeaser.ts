import * as CFRichTextTypes from '@contentful/rich-text-types';
import * as Contentful from 'contentful';

export interface TypeSpgrTeaserFields {
  subline: Contentful.EntryFields.Symbol;
  title: Contentful.EntryFields.Symbol;
  teaser?: CFRichTextTypes.Block | CFRichTextTypes.Inline;
}

export type TypeSpgrTeaser = Contentful.Entry<TypeSpgrTeaserFields>;
