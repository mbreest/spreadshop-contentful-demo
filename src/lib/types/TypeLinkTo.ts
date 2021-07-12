import * as Contentful from "contentful";
import { TypeExternalPageFields } from "./TypeExternalPage";
import { TypePageFields } from "./TypePage";

export interface TypeLinkToFields {
    text: Contentful.EntryFields.Symbol;
    target: Contentful.Entry<TypePageFields | TypeExternalPageFields>;
}

export type TypeLinkTo = Contentful.Entry<TypeLinkToFields>;
