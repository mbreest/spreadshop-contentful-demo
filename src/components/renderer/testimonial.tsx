/* eslint-disable @typescript-eslint/camelcase */
import * as Contentful from 'contentful';
import { TypeTestimonial } from 'lib/types';
import { Background } from 'components/Section/background';
import { Cta } from 'components/cta';
import { isRichText, renderRichText } from 'lib/rich-text';

export const Testimonial = ({ fields }: TypeTestimonial) => {
  const { title, backgroundColor, showLogo, quotes, logosNew, ctaType, ctaLabel, ctaTarget } =
    fields;

  return (
    <Background
      {...{
        background: backgroundColor,
        image: false as Contentful.EntryFields.Boolean,
        imageOverlay: false as Contentful.EntryFields.Boolean,
      }}>
      <div className="w-full flex flex-col grid justify-items-center">
        <div className="w-full grid justify-items-center">
          <h2 className="h0 pt-4 text-3xl font-medium leading-tight text-gray-900">{title}</h2>
        </div>

        <div className="pt-4 flex flex-row flex-nowrap justify-start overflow-x-scroll">
          {quotes &&
            quotes.map(function (quote, idx) {
              const textComp = isRichText(quote.fields.quote)
                ? renderRichText(quote.fields.quote)
                : quote.fields.quote;

              if (showLogo) {
                return (
                  <div
                    key={idx}
                    className="w-full flex-shrink-0 md:flex md:flex-row md:p-8 items-center">
                    <div className="md:w-2/5">
                      {showLogo && <img src={quote.fields.illustrationNew.fields.file.url} />}
                    </div>
                    <div className="md:w-3/5 md:pl-8 ">
                      <div>{textComp}</div>
                      <div className="font-bold pt-4">{quote.fields.author}</div>
                    </div>
                  </div>
                );
              } else {
                return (
                  <div
                    key={idx}
                    className="w-full flex-shrink-0 md:flex md:flex-row md:p-8 items-center">
                    <div className="md:full md:pl-8 ">
                      <div>{textComp}</div>
                      <div className="font-bold pt-4">{quote.fields.author}</div>
                    </div>
                  </div>
                );
              }
            })}
        </div>
        <div className="pt-4 flex flex-wrap items-center">
          {logosNew &&
            logosNew.map(function (logo, idx) {
              return (
                <div key={idx} className="flex-shrink-0 p-4">
                  <img src={logo.fields.file.url} className="w-28" />
                </div>
              );
            })}
        </div>
        <div className="flex w-full justify-center pt-8 pb-8">
          <Cta {...{ ctaType, ctaLabel, ctaTarget }} />
        </div>
      </div>
    </Background>
  );
};
