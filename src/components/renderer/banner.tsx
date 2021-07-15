/* eslint-disable @typescript-eslint/camelcase */
import { TypeBanner } from 'lib/types';
import { Background } from 'components/background';
import { Cta } from 'components/cta';

export const Banner = ({ fields }: TypeBanner) => {
  const { title, details, background, cta } = fields;

  return (
    <Background {...background.fields}>
      <div className="mx-auto flex h-80 items-center">      
        <div className="w-full grid justify-items-center">        
          <h2 className="h0 pt-4 text-3xl font-medium leading-tight text-gray-900">{title}</h2>
          <div className="text-lg text-gray-700 py-6">{details}</div>
          <Cta {...{cta}}/>  
        </div>
      </div>      
    </Background>
  );
};
