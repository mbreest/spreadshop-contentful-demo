/* eslint-disable @typescript-eslint/camelcase */
import { Link } from 'components/link';

import { TypeCalculator } from 'lib/types';
import { Background } from 'components/background';
import { Cta } from 'components/cta';
import { isRichText, renderRichText } from 'lib/rich-text';

export const Calculator = ({ fields }: TypeCalculator) => {
  const { title, details, description, background, cta } = fields;

  // TODO render list items
  const textComp = isRichText(description) ? renderRichText(description) : description;

  return (
    <Background {...background.fields}>
      <div className="w-full flex flex-col">
        <div className="w-full grid justify-items-center p-8">
          <h1 className="pt-4 text-3xl font-medium leading-tight text-gray-900">{title}</h1>
        </div>
        <div className="flex flex-col md:flex-row p-4">
          <div className="leading-relaxed text-lg text-gray-700 md:w-1/2 pr-8">{textComp}</div>
          <div className="leading-relaxed text-lg text-gray-700 md:w-1/2">{details}</div>
        </div>
        <div className="flex w-full justify-center pt-8 pb-8">
          <Cta {...{cta}}/>
        </div>              
      </div>
    </Background>
  );
};
