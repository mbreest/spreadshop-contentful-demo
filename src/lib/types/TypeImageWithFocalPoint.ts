import * as Contentful from 'contentful';

export interface TypeImageWithFocalPointFields {
  title: Contentful.EntryFields.Symbol;
  image: Contentful.Asset;
  focalPoint: Contentful.EntryFields.Object;
}

export type TypeImageWithFocalPoint = Contentful.Entry<TypeImageWithFocalPointFields>;
