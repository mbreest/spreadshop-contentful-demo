import React from 'react';
import { BlockRenderer } from '../renderer/block-renderer';
import TeaserSVGBackgrounds from './teaserBackground/TeaserSVGBackgrounds';
import classNames from 'classnames';

const SpgrSection = ({ fields }) => {
  const { background, backgroundColor, backgroundSvg, content, paddingTop, paddingBottom } = fields;
  const sectionClasses = classNames({
    'section sprdRow': true,
    'sprdRow--pt': paddingTop,
    'sprdRow--pb': paddingBottom,
    [`sprdRow--bc-${backgroundColor}`]: background === 'Color',
  });
  return (
    <section className={sectionClasses}>
      <div className="container">
        <div className="row">
          <div className="col">
            <BlockRenderer block={content} />
          </div>
        </div>
      </div>
      {(() => {
        switch (background) {
          case 'SVG':
            return <TeaserSVGBackgrounds svg={backgroundSvg} />;
          default:
            return null;
        }
      })()}
    </section>
  );
};

export default SpgrSection;
