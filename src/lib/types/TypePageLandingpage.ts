import * as Contentful from 'contentful';
import { TypeBannerFields } from './TypeBanner';
import { TypeBlogRollFields } from './TypeBlogRoll';
import { TypeCalculatorFields } from './TypeCalculator';
import { TypeCarouselFields } from './TypeCarousel';
import { TypeFaqFields } from './TypeFaq';
import { TypeFeaturedUspFields } from './TypeFeaturedUsp';
import { TypeHeroImageFields } from './TypeHeroImage';
import { TypeSingleAssetFields } from './TypeSingleAsset';
import { TypeSkuCarouselFields } from './TypeSkuCarousel';
import { TypeTablistFields } from './TypeTablist';
import { TypeTestimonialFields } from './TypeTestimonial';
import { TypeUspListFields } from './TypeUspList';

export interface TypePageLandingpageFields {
  name?: Contentful.EntryFields.Symbol;
  hero: Contentful.Entry<TypeHeroImageFields>;
  sections?: Contentful.Entry<
    | TypeBlogRollFields
    | TypeCalculatorFields
    | TypeCarouselFields
    | TypeFaqFields
    | TypeFeaturedUspFields
    | TypeSingleAssetFields
    | TypeSkuCarouselFields
    | TypeTablistFields
    | TypeTestimonialFields
    | TypeUspListFields
    | TypeBannerFields
  >[];
}

export type TypePageLandingpage = Contentful.Entry<TypePageLandingpageFields>;
