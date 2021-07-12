import * as Contentful from "contentful";
import { TypeCtaFields } from "./TypeCta";
import { TypePageHelpdeskArticleFields } from "./TypePageHelpdeskArticle";

export interface TypeFaqFields {
    anchor: Contentful.EntryFields.Symbol;
    title: Contentful.EntryFields.Symbol;
    detailsText?: Contentful.EntryFields.Symbol;
    background: "White" | "Light" | "Dark";
    entries: Contentful.Entry<TypePageHelpdeskArticleFields>[];
    questions?: Contentful.EntryFields.Symbol;
    questionDetails?: Contentful.EntryFields.Symbol;
    questionCta1?: Contentful.Entry<TypeCtaFields>;
    questionCta2?: Contentful.Entry<TypeCtaFields>;
}

export type TypeFaq = Contentful.Entry<TypeFaqFields>;
