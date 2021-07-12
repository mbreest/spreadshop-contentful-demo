/* eslint-disable @typescript-eslint/camelcase */
import { Link } from 'components/link';

import { TypeTestimonial } from 'lib/types';
import { Background } from 'components/background';
import { isRichText, renderRichText } from 'lib/rich-text';

export const Testimonial = ({ fields }: TypeTestimonial) => {
  const { title, background, showLogo, quotes, logos, cta } = fields;

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
      <div className="px-8 py-20 mx-auto flex flex-wrap flex-col md:flex-row items-start">
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
          {linkProps && (
            <Link {...linkProps}>
              <a className="w-full md:w-auto bg-yellow-500 text-white font-semibold  px-3 py-2 text-center">
                {cta.fields.buttonLabel}
              </a>
            </Link>
          )}
        </div>
      </div>
    </Background>
  );
};
