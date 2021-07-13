/* eslint-disable @typescript-eslint/camelcase */
import { TypeFaq } from 'lib/types';
import { Cta } from 'components/cta';

export const Faq = ({ fields }: TypeFaq) => {
  const { title, background, entries, questions, questionDetails, questionCta1, questionCta2 } = fields;

  const styling = {
    backgroundColor: background == 'White' ? 'white' : background == 'Light' ? '#F2F2F2' : 'dark',
  };

  return (
    <div className="mx-auto max-w-screen-xl" style={styling}>
      <div className="mx-auto flex flex-wrap flex-col md:flex-row items-start">
        <div className="flex flex-col w-full justify-center items-start">
          <h1 className="pt-4 text-3xl font-medium leading-tight text-gray-900">{title}</h1>
          <div className="leading-relaxed text-lg text-gray-700 py-6">{questions}</div>
          <div className="leading-relaxed text-lg text-gray-700 py-6">{questionDetails}</div>        
          <Cta {...{cta: questionCta1}}/>                      
          <Cta {...{cta: questionCta2}}/>          
        </div>
      </div>
    </div>
  );
};
