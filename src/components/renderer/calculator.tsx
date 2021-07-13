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
      <div className="mx-auto flex flex-wrap flex-col md:flex-row items-start">
        <div className="flex flex-col w-full justify-center items-start">
          <h1 className="pt-4 text-3xl font-medium leading-tight text-gray-900">{title}</h1>
          <div className="leading-relaxed text-lg text-gray-700 py-6">{textComp}</div>
          <div className="leading-relaxed text-lg text-gray-700 py-6">{details}</div>
          <Cta {...{cta}}/>
        </div>
      </div>
    </Background>
  );
};
