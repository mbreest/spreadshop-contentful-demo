import * as Contentful from 'contentful';
import { TypeBannerFields } from './TypeBanner';
import { TypeBlogRollFields } from './TypeBlogRoll';
import { TypeCalculatorFields } from './TypeCalculator';
import { TypeCarouselFields } from './TypeCarousel';
import { TypeComponentSegmentedComponentFields } from './TypeComponentSegmentedComponent';
import { TypeComponentSlotFields } from './TypeComponentSlot';
import { TypeFaqFields } from './TypeFaq';
import { TypeFeaturedUspFields } from './TypeFeaturedUsp';
import { TypeHeroImageFields } from './TypeHeroImage';
import { TypeSingleAssetFields } from './TypeSingleAsset';
import { TypeSkuCarouselFields } from './TypeSkuCarousel';
import { TypeTablistFields } from './TypeTablist';
import { TypeTestimonialFields } from './TypeTestimonial';
import { TypeUspListFields } from './TypeUspList';

export interface TypeSlotPlacementFields {
  name: Contentful.EntryFields.Symbol;
  slot: Contentful.Entry<TypeComponentSlotFields>;
  component: Contentful.Entry<
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
  start: Contentful.EntryFields.Date;
  end: Contentful.EntryFields.Date;
}

export type TypeSlotPlacement = Contentful.Entry<TypeSlotPlacementFields>;