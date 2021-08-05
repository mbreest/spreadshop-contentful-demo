/* eslint-disable @typescript-eslint/camelcase */
import * as Contentful from 'contentful';
import { TypeCarousel } from 'lib/types';
import { Background } from 'components/Section/background';
import { Cta } from 'components/cta';
import { Tab, Tabs } from 'components/tabs';

export const Carousel = ({ fields }: TypeCarousel) => {
  const { title, details, backgroundColor, categories, ctaType, ctaLabel, ctaTarget } = fields;

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

        {categories.length == 1 && (
          <>
            {categories.map(function (category, idx) {
              return (
                <div
                  key={'category-' + idx}
                  className="pt-4 flex flex-row flex-nowrap justify-start overflow-x-scroll">
                  {category.fields.illustrationsNew.map(function (illustration, idx1) {
                    return (
                      <div key={'category-' + idx} className="flex flex-shrink-0 w-60 p-2">
                        <img key={idx1} src={illustration.fields.file.url} />
                      </div>
                    );
                  })}
                </div>
              );
            })}
          </>
        )}
        {categories.length > 1 && (
          <Tabs>
            {categories.map(function (category, idx) {
              return (
                <Tab title={category.fields.title} selected="false" key={'tab-' + idx}>
                  <div className="flex flex-row flex-wrap w-full">
                    {category.fields.illustrationsNew.map(function (illustration, idx1) {
                      return (
                        <div
                          key={'category-' + idx}
                          className="flex-shrink-0 w-1/2 md:w-1/4 md:pr-4 pb-4">
                          <img key={idx1} src={illustration.fields.file.url} />
                        </div>
                      );
                    })}
                  </div>
                </Tab>
              );
            })}
          </Tabs>
        )}
      </div>
      <div className="flex w-full justify-center pt-8 pb-8">
        <Cta {...{ ctaType, ctaLabel, ctaTarget }} />
      </div>
    </Background>
  );
};
