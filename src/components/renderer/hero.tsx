import * as Contentful from 'contentful';
import { TypeHeroImage } from 'lib/types';
import { Background } from 'components/Section/background';
import { Cta } from 'components/cta';

export const Hero = ({ fields }: TypeHeroImage) => {
  const {
    title,
    details,
    subPage,
    backgroundColor,
    backgroundOverlayColor,
    backgroundImage,
    ctaType,
    ctaLabel,
    ctaTarget,
  } = fields;

  return (
    <Background
      {...{
        background: backgroundColor,
        image: (backgroundImage != undefined) as Contentful.EntryFields.Boolean,
        imageOverlay: (backgroundOverlayColor != undefined) as Contentful.EntryFields.Boolean,
        imageIllustrationNew: backgroundImage,
        overlayColor: backgroundOverlayColor,
      }}>
      <div className="flex h-80">
        <div className="flex flex-col justify-center items-start md:w-2/3">
          <h1 className="h0 pt-4 text-4xl font-medium leading-tight text-gray-900 lg:w-7/12">
            {title}
          </h1>
          <div className="leading-relaxed text-lg text-gray-700 py-6">{details}</div>
          <Cta {...{ ctaType, ctaLabel, ctaTarget }} />
        </div>
      </div>
    </Background>
  );
};
