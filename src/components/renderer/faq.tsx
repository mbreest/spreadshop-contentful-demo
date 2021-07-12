/* eslint-disable @typescript-eslint/camelcase */
import { Link } from 'components/link';

import { TypeFaq } from 'lib/types';
import { Background } from 'components/background';

export const Faq = ({ fields }: TypeFaq) => {
  const {
    title,
    background,
    entries,
    questions,
    questionDetails,
    questionCta1,
    questionCta2,
  } = fields;

  let linkProps1;
  if (questionCta1) {
    if ('url' in questionCta1.fields.buttonTarget.fields) {
      linkProps1 = { href: questionCta1.fields.buttonTarget.fields.url };
    } else if ('slug' in questionCta1.fields.buttonTarget.fields) {
      linkProps1 = { page: questionCta1.fields.buttonTarget };
    }
  }

  let linkProps2;
  if (questionCta2) {
    if ('url' in questionCta2.fields.buttonTarget.fields) {
      linkProps2 = { href: questionCta2.fields.buttonTarget.fields.url };
    } else if ('slug' in questionCta2.fields.buttonTarget.fields) {
      linkProps2 = { page: questionCta2.fields.buttonTarget };
    }
  }

  const styling = {
    backgroundColor: background == 'White' ? 'white' : background == 'Light' ? '#F2F2F2' : 'dark',
  };

  return (
    <div className="bg-white mx-auto max-w-screen-xl" style={styling}>
      <div className="px-8 py-20 mx-auto flex flex-wrap flex-col md:flex-row items-start">
        <div className="flex flex-col w-full justify-center items-start">
          <h1 className="pt-4 text-3xl font-medium leading-tight text-gray-900">{title}</h1>
          <div className="leading-relaxed text-lg text-gray-700 py-6">{questions}</div>
          <div className="leading-relaxed text-lg text-gray-700 py-6">{questionDetails}</div>

          {linkProps1 && (
            <Link {...linkProps1}>
              <a className="w-full md:w-auto bg-yellow-500 text-white font-semibold  px-3 py-2 text-center">
                {questionCta1.fields.buttonLabel}
              </a>
            </Link>
          )}
          {linkProps2 && (
            <Link {...linkProps2}>
              <a className="w-full md:w-auto bg-yellow-500 text-white font-semibold  px-3 py-2 text-center">
                {questionCta2.fields.buttonLabel}
              </a>
            </Link>
          )}
        </div>
      </div>
    </div>
  );
};
