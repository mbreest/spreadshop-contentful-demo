import * as Contentful from "contentful";
import { TypeExternalPageFields } from "./TypeExternalPage";
import { TypePageFields } from "./TypePage";

export interface TypeCtaFields {
    buttonLabel: Contentful.EntryFields.Symbol;
    buttonType: "Primary" | "Ghost";
    buttonTarget: Contentful.Entry<TypePageFields | TypeExternalPageFields>;
}

export type TypeCta = Contentful.Entry<TypeCtaFields>;
