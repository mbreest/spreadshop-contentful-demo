/* eslint-disable @typescript-eslint/camelcase */
import { TypeTestimonial } from 'lib/types';
import { Background } from 'components/background';
import { Cta } from 'components/cta';
import { isRichText, renderRichText } from 'lib/rich-text';

export const Testimonial = ({ fields }: TypeTestimonial) => {
  const { title, background, showLogo, quotes, logos, cta } = fields;

  return (
    <Background {...background.fields}>
      <div className="mx-auto flex flex-wrap flex-col md:flex-row items-start">
        <div className="flex flex-col w-full justify-center items-start">
          <h1 className="pt-4 text-3xl font-medium leading-tight text-gray-900">{title}</h1>
          {quotes &&
            quotes.map(function (quote, idx) {
              const textComp = isRichText(quote.fields.quote)
                ? renderRichText(quote.fields.quote)
                : quote.fields.quote;

              return (
                <div key={idx}>
                  <span>{textComp}</span>
                  <span>{quote.fields.author}</span>
                  {showLogo && <img src={quote.fields.illustration[0].secure_url} />}
                </div>
              );
            })}
          {logos &&
            logos.map(function (logo, idx) {
              return (
                <div key={idx}>
                  <img src={logo.secure_url} width="100" />
                </div>
              );
            })}
          <Cta {...{cta}}/>
        </div>
      </div>
    </Background>
  );
};
