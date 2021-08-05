/* eslint-disable @typescript-eslint/camelcase */
import * as Contentful from 'contentful';
import { TypeFeaturedUsp } from 'lib/types';
import { Background } from 'components/Section/background';
import { Cta } from 'components/cta';
import Cards from '../FeaturedUsp/Cards';

export const FeaturedUsp = ({ fields }: TypeFeaturedUsp) => {
  const { title, details, backgroundColor, usps, ctaType, ctaLabel, ctaTarget } = fields;

  return (
    <Background
      {...{
        background: backgroundColor,
        image: false as Contentful.EntryFields.Boolean,
        imageOverlay: false as Contentful.EntryFields.Boolean,
      }}>
      <div className="Featured w-full flex flex-col">
        <div className="w-full grid justify-items-center">
          <h2 className="h0 pt-4 text-3xl font-medium leading-tight text-gray-900">{title}</h2>
          <div className="text-lg text-gray-700 py-6">{details}</div>
        </div>
        <Cards cardData={usps} />
        <div className="flex w-full justify-center pt-8 pb-8">
          <Cta {...{ ctaType, ctaLabel, ctaTarget }} />
        </div>
      </div>
    </Background>
  );
};
