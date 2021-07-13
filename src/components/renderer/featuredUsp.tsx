/* eslint-disable @typescript-eslint/camelcase */
import { Link } from 'components/link';

import { TypeFeaturedUsp } from 'lib/types';
import { Background } from 'components/background';

export const FeaturedUsp = ({ fields }: TypeFeaturedUsp) => {
  const { title, details, background, usps, cta } = fields;

  let linkProps;
  if (cta) {
    if ('url' in cta.fields.buttonTarget.fields) {
      linkProps = { href: cta.fields.buttonTarget.fields.url };
    } else if ('slug' in cta.fields.buttonTarget.fields) {
      linkProps = { page: cta.fields.buttonTarget };
    }
  }

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
        
        {linkProps && (
          <div className="flex w-full justify-center pt-8 pb-8">
            <Link {...linkProps}>
              <a className="bg-yellow-500 text-white font-semibold  px-3 py-2 text-center">
                {cta.fields.buttonLabel}
              </a>
            </Link>
          </div>
        )}      
      </div>      
    </Background>
  );
};
