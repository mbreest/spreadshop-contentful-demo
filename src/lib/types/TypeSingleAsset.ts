import * as Contentful from "contentful";
import { TypeBackgroundFields } from "./TypeBackground";
import { TypeCtaFields } from "./TypeCta";

export interface TypeSingleAssetFields {
    anchor: Contentful.EntryFields.Symbol;
    title: Contentful.EntryFields.Symbol;
    details?: Contentful.EntryFields.Symbol;
    background: Contentful.Entry<TypeBackgroundFields>;
    illustrations?: Contentful.EntryFields.Object;
    cta?: Contentful.Entry<TypeCtaFields>;
}

export type TypeSingleAsset = Contentful.Entry<TypeSingleAssetFields>;
