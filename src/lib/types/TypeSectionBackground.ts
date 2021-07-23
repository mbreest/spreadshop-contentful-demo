import * as Contentful from 'contentful';

export interface TypeSectionBackgroundFields {
  sectionBackgroundImage: Contentful.EntryFields.Boolean;
  backgroundImage?: Contentful.EntryFields.Object;
  imageOverlay: Contentful.EntryFields.Boolean;
  overlayBlendingMode?: (
    | 'normal'
    | 'multiply'
    | 'screen'
    | 'overlay'
    | 'darken'
    | 'lighten'
    | 'color-dodge'
    | 'color-burn'
    | 'hard-light'
    | 'soft-light'
    | 'difference'
    | 'exclusion'
    | 'hue'
    | 'saturation'
    | 'color'
    | 'luminosity'
  )[];
  overlayColor?: Contentful.EntryFields.Symbol;
}

export type TypeSectionBackground = Contentful.Entry<TypeSectionBackgroundFields>;
