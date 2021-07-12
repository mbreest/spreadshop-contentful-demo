import * as Contentful from "contentful";

export interface TypeBackgroundFields {
    name?: Contentful.EntryFields.Symbol;
    background: "White" | "Light" | "Dark";
    image: Contentful.EntryFields.Boolean;
    imageOverlay: Contentful.EntryFields.Boolean;
    imageIllustration?: Contentful.EntryFields.Object;
}

export type TypeBackground = Contentful.Entry<TypeBackgroundFields>;
