/* eslint-disable @typescript-eslint/camelcase */
import { TypeFaq } from 'lib/types';
import { Cta } from 'components/cta';
import { Background } from 'components/background';
import { isRichText, renderRichText } from 'lib/rich-text';
import { Accordion, AccordionItem, AccordionPanel } from 'components/accordion';

export const Faq = ({ fields }: TypeFaq) => {
  const { title, background, entries, questions, questionDetails, questionCta1, questionCta2 } =
    fields;

  return (
    <Background
      {...{ background: background, image: null, imageIllustration: null, imageOverlay: null }}>
      <div className="w-full flex flex-col">
        <div className="w-full grid justify-items-center">
          <h1 className="pt-4 text-3xl font-medium leading-tight text-gray-900">{title}</h1>
        </div>
        <Accordion>
          {entries.map(function (entry, idx) {
            const textComp = isRichText(entry.fields.details)
              ? renderRichText(entry.fields.details)
              : entry.fields.details;
            return (
              <>
                <AccordionItem toggle={'section-' + idx}>{entry.fields.name}</AccordionItem>
                <AccordionPanel id={'section-' + idx}>{textComp}</AccordionPanel>
              </>
            );
          })}
        </Accordion>
        <div className="grid justify-items-center">
          <div className="leading-relaxed text-lg text-gray-700 py-6">{questions}</div>
          <div className="leading-relaxed text-lg text-gray-700 py-6">{questionDetails}</div>
          <div className="flex flex-row">
            <div className="pr-4">
              <Cta {...{ cta: questionCta1 }} />
            </div>
            <div>
              <Cta {...{ cta: questionCta2 }} />
            </div>
          </div>
        </div>
      </div>
    </Background>
  );
};
