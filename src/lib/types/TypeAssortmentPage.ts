import * as Contentful from 'contentful';
import { TypeAssortmentFields } from './TypeAssortment';
import { TypeBannerFields } from './TypeBanner';
import { TypeBlogRollFields } from './TypeBlogRoll';
import { TypeCalculatorFields } from './TypeCalculator';
import { TypeCarouselFields } from './TypeCarousel';
import { TypeFaqFields } from './TypeFaq';
import { TypeFeaturedUspFields } from './TypeFeaturedUsp';
import { TypeHeroImageFields } from './TypeHeroImage';
import { TypeSingleAssetFields } from './TypeSingleAsset';
import { TypeSkuCarouselFields } from './TypeSkuCarousel';
import { TypeTestimonialFields } from './TypeTestimonial';
import { TypeUspListFields } from './TypeUspList';

export interface TypeAssortmentPageFields {
  name?: Contentful.EntryFields.Symbol;
  hero: Contentful.Entry<TypeHeroImageFields>;
  sections?: Contentful.Entry<
    | TypeAssortmentFields
    | TypeBannerFields
    | TypeBlogRollFields
    | TypeCalculatorFields
    | TypeCarouselFields
    | TypeFaqFields
    | TypeFeaturedUspFields
    | TypeSingleAssetFields
    | TypeSkuCarouselFields
    | TypeTestimonialFields
    | TypeUspListFields
  >[];
}

export type TypeAssortmentPage = Contentful.Entry<TypeAssortmentPageFields>;
