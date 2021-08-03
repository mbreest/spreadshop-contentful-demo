/* eslint-disable @typescript-eslint/camelcase */
import { Link } from 'components/link';

import { TypeUspList } from 'lib/types';
import { Background } from 'components/Section/background';
import { Cta } from 'components/cta';

export const UspList = ({ fields }: TypeUspList) => {
  const { title, details, background, usps, twoColumn, cta } = fields;

  return (
    <Background {...background.fields}>
      <div className="w-full flex flex-col">
        <div className="w-full grid justify-items-center p-8">
          <h2 className="h0 pt-4 text-3xl font-medium leading-tight text-gray-900">{title}</h2>
          <div className="leading-relaxed text-lg text-gray-700 py-6">{details}</div>
        </div>
        <div className="flex flex-row flex-wrap justify-center">
          {usps &&
            usps.map(function (usp, idx) {
              let linkProps1;
              if (usp.fields.link) {
                if ('url' in usp.fields.link.fields.target.fields) {
                  linkProps1 = { href: usp.fields.link.fields.target.fields.url };
                } else if ('slug' in usp.fields.link.fields.target.fields) {
                  linkProps1 = { page: usp.fields.link.fields.target };
                }
              }

              return (
                <div key={'usplist-' + idx} className="w-60 pr-8 pt-4 grid justify-items-center">
                  {usp.fields.illustration && (
                    <div className="w-30 h-30">
                      <img src={usp.fields.illustration[0].secure_url} className="max-h-28" />
                    </div>
                  )}
                  <div className="grid justify-items-center">
                    <h3 className="font-bold">{usp.fields.title}</h3>
                    {usp.fields.details && <div className="text-center">{usp.fields.details}</div>}
                    {linkProps1 && (
                      <div className="pt-4">
                        <Link {...linkProps1}>
                          <a className="w-full md:w-auto text-gray-700 font-semibold text-center">
                            {usp.fields.link.fields.text}
                          </a>
                        </Link>
                      </div>
                    )}
                  </div>
                </div>
              );
            })}
        </div>
        <div className="flex w-full justify-center pt-8 pb-8">
          <Cta {...{ cta }} />
        </div>
      </div>
    </Background>
  );
};
