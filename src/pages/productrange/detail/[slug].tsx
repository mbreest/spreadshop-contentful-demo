/* eslint-disable @typescript-eslint/camelcase */
import React from 'react';

import { isPreviewEnabled } from 'lib/preview';

import ErrorPage from 'next/error';
import { Background } from 'components/Section/background';

import { getProduct, getProductTypeImageUrl, getAppearanceImageUrl } from 'lib/api';

import { Product } from 'lib/customtypes';

type ProductRangeDetailProps = {
  product: Product;
};

export default function ProductRangeDetail({ product }: ProductRangeDetailProps) {
  if (!product) {
    return <ErrorPage statusCode={404} />;
  }

  return (
    <div className="w-full pb-16">
      <Background {...{ background: 'Light', image: false, imageOverlay: false }}>
        <div className="flex flex-col md:flex-row p-2 md:p-0">
          <div className="flex flex-col md:visible invisible h-0 md:h-auto">
            {product.views.map(function (viewId, idx) {
              return (
                <div key={'pt-' + idx} className="w-32 border-2 pt-1">
                  <img
                    src={getProductTypeImageUrl({
                      id: product.id,
                      appearance: product.defaultAppearanceId,
                      view: viewId,
                      size: '600',
                    })}
                  />
                </div>
              );
            })}
          </div>
          <div className="w-full md:w-1/2 flex-shrink-0">
            <img
              src={getProductTypeImageUrl({
                id: product.id,
                appearance: product.defaultAppearanceId,
                view: product.defaultViewId,
                size: '600',
              })}
            />
          </div>
          <div className="flex flex-col">
            <h1 className="h0 pt-4 text-3xl font-medium text-gray-900 w-full">{product.name}</h1>
            <div className="w-full pt-2">
              <div>Farben:</div>
              <div className="flex flex-row flex-wrap">
                {product.colors.map(function (color, idx) {
                  let style = null;
                  if (color.texture) {
                    style = {
                      backgroundImage: `url('${getAppearanceImageUrl({
                        id: color.id,
                        size: '50',
                      })}')`,
                      backgroundSize: 'cover',
                    };
                  } else {
                    style = {
                      backgroundColor: color.hex,
                    };
                  }
                  return (
                    <div
                      key={'color-' + idx}
                      className="w-9 h-9 m-1 rounded-full"
                      style={style}></div>
                  );
                })}
              </div>
            </div>
            <div className="w-full pt-2">
              Größen: <span className="font-bold">{product.sizes.join(', ')}</span>
            </div>
          </div>
        </div>
      </Background>
      <Background {...{ background: 'White', image: false, imageOverlay: false }}>
        <div className="flex flex-col p-2 md:p-0">
          <h2 className="h0 pt-4 text-3xl font-medium text-gray-900 w-full">Details</h2>
          <div className="pt-4" dangerouslySetInnerHTML={{ __html: product.description }} />
        </div>
      </Background>
    </div>
  );
}

export async function getServerSideProps({ params, query, locale }) {
  const id = String(params.slug ?? '');
  const preview = isPreviewEnabled(query);

  const product = await getProduct({
    id: id,
    locale: locale,
  });

  return {
    props: { product },
  };
}
