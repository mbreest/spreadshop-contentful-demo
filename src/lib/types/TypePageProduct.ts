import * as Contentful from 'contentful';
import { TypeBackgroundFields } from './TypeBackground';
import { TypeTestimonialFields } from './TypeTestimonial';

export interface TypePageProductFields {
  name?: Contentful.EntryFields.Symbol;
  background?: Contentful.Entry<TypeBackgroundFields>;
  testimonial?: Contentful.Entry<TypeTestimonialFields>;
}

export type TypePageProduct = Contentful.Entry<TypePageProductFields>;
