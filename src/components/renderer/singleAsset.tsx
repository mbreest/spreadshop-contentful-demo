/* eslint-disable @typescript-eslint/camelcase */
import * as Contentful from 'contentful';
import { TypeSingleAsset } from 'lib/types';
import { Background } from 'components/Section/background';
import { Cta } from 'components/cta';

export const SingleAsset = ({ fields }: TypeSingleAsset) => {
  const { title, details, backgroundColor, illustrationsNew, ctaType, ctaLabel, ctaTarget } =
    fields;

  return (
    <Background
      {...{
        background: backgroundColor,
        image: false as Contentful.EntryFields.Boolean,
        imageOverlay: false as Contentful.EntryFields.Boolean,
      }}>
      <div className="w-full flex flex-col">
        <div className="w-full grid justify-items-center p-8">
          <h2 className="h0 pt-4 text-3xl font-medium leading-tight text-gray-900">{title}</h2>
          <div className="leading-relaxed text-lg text-gray-700 py-6">{details}</div>
        </div>
        <div className="w-full grid justify-center">
          <div className="pt-4 flex flex-row flex-nowrap justify-start overflow-x-scroll">
            {illustrationsNew &&
              illustrationsNew.map(function (illustration, idx) {
                if (illustration.fields) {
                  return (
                    <div key={'sa-illustration-' + idx} className="flex flex-shrink-0 w-96 p-2">
                      <img src={illustration.fields.file.url} />
                    </div>
                  );
                }
              })}
          </div>
        </div>
        <div className="flex w-full justify-center pt-8 pb-8">
          <Cta {...{ ctaType, ctaLabel, ctaTarget }} />
        </div>
      </div>
    </Background>
  );
};
