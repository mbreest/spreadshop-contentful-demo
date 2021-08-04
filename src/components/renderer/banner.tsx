/* eslint-disable @typescript-eslint/camelcase */
import * as Contentful from 'contentful';
import { TypeBanner } from 'lib/types';
import { Background } from 'components/Section/background';
import { Cta } from 'components/cta';

export const Banner = ({ fields }: TypeBanner) => {
  const { title, details, backgroundColor, backgroundImage, ctaType, ctaLabel, ctaTarget } = fields;

  return (
    <Background
      {...{
        background: backgroundColor,
        image: (backgroundImage != undefined) as Contentful.EntryFields.Boolean,
        imageOverlay: false as Contentful.EntryFields.Boolean,
        imageIllustrationNew: backgroundImage,
      }}>
      <div className="mx-auto flex h-80 items-center">
        <div className="w-full grid justify-items-center">
          <h2 className="h0 pt-4 text-3xl font-medium leading-tight text-gray-900">{title}</h2>
          <div className="text-lg text-gray-700 py-6">{details}</div>
          <Cta {...{ ctaType, ctaLabel, ctaTarget }} />
        </div>
      </div>
    </Background>
  );
};
