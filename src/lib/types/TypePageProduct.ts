import * as Contentful from 'contentful';
import { TypeTestimonialFields } from './TypeTestimonial';

export interface TypePageProductFields {
  name?: Contentful.EntryFields.Symbol;
  backgroundImage?: Contentful.Asset;
  testimonial?: Contentful.Entry<TypeTestimonialFields>;
}

export type TypePageProduct = Contentful.Entry<TypePageProductFields>;
