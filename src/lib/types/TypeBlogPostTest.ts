import * as Contentful from 'contentful';

export interface TypeBlogPostTestFields {
  title?: Contentful.EntryFields.Symbol;
  body?: Contentful.EntryFields.Text;
  skus?: Contentful.EntryFields.Symbol[];
}

export type TypeBlogPostTest = Contentful.Entry<TypeBlogPostTestFields>;
