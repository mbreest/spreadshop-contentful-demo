import * as Contentful from 'contentful';
import { TypeBannerFields } from './TypeBanner';
import { TypeBlogRollFields } from './TypeBlogRoll';
import { TypeCalculatorFields } from './TypeCalculator';
import { TypeCarouselFields } from './TypeCarousel';
import { TypeComponentGridFields } from './TypeComponentGrid';
import { TypeFaqFields } from './TypeFaq';
import { TypeFeaturedUspFields } from './TypeFeaturedUsp';
import { TypeHeroImageFields } from './TypeHeroImage';
import { TypeSingleAssetFields } from './TypeSingleAsset';
import { TypeSkuCarouselFields } from './TypeSkuCarousel';
import { TypeTablistFields } from './TypeTablist';
import { TypeTestimonialFields } from './TypeTestimonial';
import { TypeUspListFields } from './TypeUspList';

export interface TypeComponentSegmentedComponentFields {
  internalName: Contentful.EntryFields.Symbol;
  default: Contentful.Entry<
    | TypeBannerFields
    | TypeBlogRollFields
    | TypeCalculatorFields
    | TypeCarouselFields
    | TypeFaqFields
    | TypeFeaturedUspFields
    | TypeComponentGridFields
    | TypeHeroImageFields
    | TypeSingleAssetFields
    | TypeSkuCarouselFields
    | TypeTablistFields
    | TypeTestimonialFields
    | TypeUspListFields
  >;
  segment1Name?: Contentful.EntryFields.Symbol;
  segment1Component?: Contentful.Entry<
    | TypeBannerFields
    | TypeBlogRollFields
    | TypeCalculatorFields
    | TypeFaqFields
    | TypeFeaturedUspFields
    | TypeComponentGridFields
    | TypeHeroImageFields
    | TypeSingleAssetFields
    | TypeSkuCarouselFields
    | TypeTablistFields
    | TypeTestimonialFields
    | TypeUspListFields
  >;
  segment2Name?: Contentful.EntryFields.Symbol;
  segment2Component?: Contentful.Entry<
    | TypeBannerFields
    | TypeBlogRollFields
    | TypeCalculatorFields
    | TypeCarouselFields
    | TypeFaqFields
    | TypeFeaturedUspFields
    | TypeComponentGridFields
    | TypeHeroImageFields
    | TypeSingleAssetFields
    | TypeSkuCarouselFields
    | TypeTablistFields
    | TypeTestimonialFields
    | TypeUspListFields
  >;
  segment3Name: Contentful.EntryFields.Symbol;
  segment3Component?: Contentful.Entry<
    | TypeBannerFields
    | TypeBlogRollFields
    | TypeCalculatorFields
    | TypeCarouselFields
    | TypeFaqFields
    | TypeFeaturedUspFields
    | TypeComponentGridFields
    | TypeHeroImageFields
    | TypeSingleAssetFields
    | TypeSkuCarouselFields
    | TypeTablistFields
    | TypeTestimonialFields
    | TypeUspListFields
  >;
}

export type TypeComponentSegmentedComponent =
  Contentful.Entry<TypeComponentSegmentedComponentFields>;
