/* eslint-disable @typescript-eslint/camelcase */

import { TypeSingleAsset } from 'lib/types';
import { Background } from 'components/background';
import { Cta } from 'components/cta';

export const SingleAsset = ({ fields }: TypeSingleAsset) => {
  const { title, details, background, illustrations, cta } = fields;

  return (
    <Background {...background.fields}>
      <div className="w-full flex flex-col">
        <div className="w-full grid justify-items-center p-8">
          <h2 className="h0 pt-4 text-3xl font-medium leading-tight text-gray-900">{title}</h2>
          <div className="leading-relaxed text-lg text-gray-700 py-6">{details}</div>
        </div>
        <div className="w-full grid justify-center">        
          <div className="pt-4 flex flex-row flex-nowrap justify-start overflow-x-scroll">
            {illustrations &&
              illustrations.map(function (illustration, idx) {
                return (
                  <div  key={"sa-illustration-" + idx} className="flex flex-shrink-0 w-96 p-2">                  
                    <img src={illustration.secure_url} />
                  </div>
                );
              })}
          </div>          
        </div>
        <div className="flex w-full justify-center pt-8 pb-8">     
          <Cta {...{cta}}/>
        </div>
      </div>
    </Background>
  );
};
