import * as Contentful from 'contentful';
import { TypeBannerFields } from './TypeBanner';
import { TypeBlogRollFields } from './TypeBlogRoll';
import { TypeCalculatorFields } from './TypeCalculator';
import { TypeCarouselFields } from './TypeCarousel';
import { TypeComponentGridFields } from './TypeComponentGrid';
import { TypeComponentSegmentedComponentFields } from './TypeComponentSegmentedComponent';
import { TypeFaqFields } from './TypeFaq';
import { TypeFeaturedUspFields } from './TypeFeaturedUsp';
import { TypeHeroImageFields } from './TypeHeroImage';
import { TypeSingleAssetFields } from './TypeSingleAsset';
import { TypeSkuCarouselFields } from './TypeSkuCarousel';
import { TypeTablistFields } from './TypeTablist';
import { TypeTestimonialFields } from './TypeTestimonial';
import { TypeUspListFields } from './TypeUspList';

export interface TypeComponentSlotFields {
  name: Contentful.EntryFields.Symbol;
  default?: Contentful.Entry<
    | TypeBannerFields
    | TypeBlogRollFields
    | TypeCalculatorFields
    | TypeCarouselFields
    | TypeFaqFields
    | TypeFeaturedUspFields
    | TypeComponentGridFields
    | TypeHeroImageFields
    | TypeComponentSegmentedComponentFields
    | TypeSingleAssetFields
    | TypeSkuCarouselFields
    | TypeTablistFields
    | TypeTestimonialFields
    | TypeUspListFields
  >;
  override?: Contentful.Entry<
    | TypeBannerFields
    | TypeBlogRollFields
    | TypeCalculatorFields
    | TypeCarouselFields
    | TypeFaqFields
    | TypeFeaturedUspFields
    | TypeHeroImageFields
    | TypeComponentSegmentedComponentFields
    | TypeSingleAssetFields
    | TypeSkuCarouselFields
    | TypeTablistFields
    | TypeTestimonialFields
    | TypeUspListFields
  >;
}

export type TypeComponentSlot = Contentful.Entry<TypeComponentSlotFields>;
