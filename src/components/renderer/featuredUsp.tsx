/* eslint-disable @typescript-eslint/camelcase */
import { TypeFeaturedUsp } from 'lib/types';
import { Background } from 'components/background';
import { Cta } from 'components/cta';

export const FeaturedUsp = ({ fields }: TypeFeaturedUsp) => {
  const { title, details, background, usps, cta } = fields;  

  return (
    <Background {...background.fields}>      
      <div className="w-full flex flex-col">
        <div className="w-full grid justify-items-center">
          <h1 className="pt-4 text-3xl font-medium leading-tight text-gray-900">{title}</h1>
          <div className="text-lg text-gray-700 py-6">{details}</div>
        </div>
                
        <div className="pt-4 mx-auto flex flex-row flex-nowrap">
        {usps.map(function (usp, idx) {
          return (          
            <div key={"usp-" + idx} className="flex flex-col justify-top items-start flex-shrink-0 w-80 p-4">                
                {usp.fields.illustration && (
                  <div className="h-60 w-60 align-top">
                    <img src={usp.fields.illustration[0].secure_url}/>
                  </div>
                )}
                <h2 className="font-medium pb-4">{usp.fields.title}</h2>
                {usp.fields.details && <span>{usp.fields.details}</span>}
            </div>    
          );
        })}
        </div>

        <div className="flex w-full justify-center pt-8 pb-8">     
          <Cta {...{cta}}/>
        </div>      
      </div>      
    </Background>
  );
};
