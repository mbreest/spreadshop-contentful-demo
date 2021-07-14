/* eslint-disable @typescript-eslint/camelcase */
import { Link } from 'components/link';

import { TypeBlogRoll } from 'lib/types';
import { Background } from 'components/background';
import { Cta } from 'components/cta';

export const BlogRoll = ({ fields }: TypeBlogRoll) => {
  const { title, details, background, category, cta } = fields;

  return (
    <Background {...background.fields}>
      <div className="w-full flex flex-col">
        <div className="w-full grid justify-items-center p-8">
          <h1 className="pt-4 text-3xl font-medium leading-tight text-gray-900">{title}</h1>
          <div className="leading-relaxed text-lg text-gray-700 py-6">{details}</div>
        </div>
        <div className="w-full grid justify-center">        
          {category && (
            <div className="leading-relaxed text-lg text-gray-700 py-6">{category.fields.name}</div>
          )}
        </div>
        <div className="flex w-full justify-center pt-8 pb-8">          
          <Cta {...{cta}}/>        
        </div>
      </div>
    </Background>
  );
};
