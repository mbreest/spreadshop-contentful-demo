import * as Contentful from 'contentful';
import { TypeBannerFields } from './TypeBanner';
import { TypeBlogRollFields } from './TypeBlogRoll';
import { TypeCalculatorFields } from './TypeCalculator';
import { TypeCarouselFields } from './TypeCarousel';
import { TypeFaqFields } from './TypeFaq';
import { TypeFeaturedUspFields } from './TypeFeaturedUsp';
import { TypeHeroImageFields } from './TypeHeroImage';
import { TypeSingleAssetFields } from './TypeSingleAsset';
import { TypeTestimonialFields } from './TypeTestimonial';
import { TypeUspListFields } from './TypeUspList';

export interface TypePageLandingpageFields {
  name?: Contentful.EntryFields.Symbol;
  hero: Contentful.Entry<TypeHeroImageFields>;
  sections?: Contentful.Entry<
    | TypeBannerFields
    | TypeBlogRollFields
    | TypeCalculatorFields
    | TypeCarouselFields
    | TypeFaqFields
    | TypeFeaturedUspFields
    | TypeHeroImageFields
    | TypeSingleAssetFields
    | TypeTestimonialFields
    | TypeUspListFields
  >[];
}

export type TypePageLandingpage = Contentful.Entry<TypePageLandingpageFields>;
