/* eslint-disable @typescript-eslint/camelcase */
import * as Contentful from 'contentful';
import { Link } from 'components/link';

import { TypeCalculator } from 'lib/types';
import { Background } from 'components/Section/background';
import { Cta } from 'components/cta';
import { isRichText, renderRichText } from 'lib/rich-text';

export const Calculator = ({ fields }: TypeCalculator) => {
  const { title, details, description, backgroundColor, ctaType, ctaLabel, ctaTarget } = fields;

  // TODO render list items
  const textComp = isRichText(description) ? renderRichText(description) : description;

  return (
    <Background
      {...{
        background: backgroundColor,
        image: false as Contentful.EntryFields.Boolean,
        imageOverlay: false as Contentful.EntryFields.Boolean,
      }}>
      <div className="w-full flex flex-col">
        <div className="w-full grid justify-items-center p-8">
          <h2 className="h0 pt-4 text-3xl font-medium leading-tight text-gray-900">{title}</h2>
        </div>
        <div className="flex flex-col md:flex-row p-4">
          <div className="leading-relaxed text-lg text-gray-700 md:w-1/2 pr-8">{textComp}</div>
          <div className="calculator__container md:w-1/2">
            <div className="leading-relaxed text-lg text-gray-700 mb-4">{details}</div>
            <a href="https://youtu.be/bFEoMO0pc7k?t=8" target="_blank" rel="noreferrer">
              <img src="/image/calculator_placeholder.png" alt="Placeholder" />
            </a>
          </div>
        </div>
        <div className="flex w-full justify-center pt-8 pb-8">
          <Cta {...{ ctaType, ctaLabel, ctaTarget }} />
        </div>
      </div>
    </Background>
  );
};
