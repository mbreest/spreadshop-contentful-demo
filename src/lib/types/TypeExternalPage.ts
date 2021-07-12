import * as Contentful from "contentful";

export interface TypeExternalPageFields {
    url?: Contentful.EntryFields.Symbol;
}

export type TypeExternalPage = Contentful.Entry<TypeExternalPageFields>;
