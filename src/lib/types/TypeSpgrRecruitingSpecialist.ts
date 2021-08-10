import * as Contentful from 'contentful';

export interface TypeSpgrRecruitingSpecialistFields {
  name: Contentful.EntryFields.Symbol;
  phoneNumber: Contentful.EntryFields.Symbol;
  email: Contentful.EntryFields.Symbol;
  linkedIn?: Contentful.EntryFields.Symbol;
  xing?: Contentful.EntryFields.Symbol;
}

export type TypeSpgrRecruitingSpecialist = Contentful.Entry<TypeSpgrRecruitingSpecialistFields>;
