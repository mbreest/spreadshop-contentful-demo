/* eslint-disable @typescript-eslint/camelcase */
import { Link } from 'components/link';

import { TypeHeroImage } from 'lib/types';
import { isRichText, renderRichText } from 'lib/rich-text';
import { Background } from 'components/background';

export const Hero = ({ fields }: TypeHeroImage) => {
  const { title, details, subPage, background, cta } = fields;
  //ext, ctaText, ctaLink, image
  //const textComp = isRichText(text) ? renderRichText(text) : text;

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
          <div className="leading-relaxed text-lg text-gray-700 py-6">{details}</div>
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

//<div className="w-full md:w-3/6 text-center py-8 md:py-0">
//<img className="w-full px-8 z-50 float-right" src={`${image.fields.file.url}?w=960`} />
//</div>
