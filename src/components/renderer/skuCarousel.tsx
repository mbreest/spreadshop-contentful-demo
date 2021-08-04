/* eslint-disable @typescript-eslint/camelcase */
import * as Contentful from 'contentful';
import { TypeSkuCarousel } from 'lib/types';
import { Background } from 'components/Section/background';
import { Cta } from 'components/cta';
import { Link } from 'components/link';

export const SkuCarousel = ({ fields }: TypeSkuCarousel) => {
  const { title, details, backgroundColor, skus, ctaType, ctaLabel, ctaTarget } = fields;

  return (
    <Background
      {...{
        background: backgroundColor,
        image: false as Contentful.EntryFields.Boolean,
        imageOverlay: false as Contentful.EntryFields.Boolean,
      }}>
      <div className="w-full flex flex-col">
        <div className="w-full grid justify-items-center">
          <h2 className="h0 pt-4 text-3xl font-medium leading-tight text-gray-900">{title}</h2>
          <div className="text-lg text-gray-700 py-6">{details}</div>
        </div>
        <div className="pt-4 flex flex-row flex-nowrap justify-start overflow-x-scroll">
          {skus.map(function (sku, idx) {
            return (
              <div key={'category-' + idx} className="flex flex-shrink-0 w-60 p-2">
                <Link {...{ path: `/productrange/detail/${sku}` }}>
                  <a>
                    <img
                      key={idx}
                      src={
                        'https://image.spreadshirtmedia.net/image-server/v1/productTypes/' +
                        sku +
                        ',width=600,backgroundColor=ffffff.png'
                      }
                    />
                  </a>
                </Link>
              </div>
            );
          })}
        </div>
      </div>
      <div className="flex w-full justify-center pt-8 pb-8">
        <Cta {...{ ctaType, ctaLabel, ctaTarget }} />
      </div>
    </Background>
  );
};
