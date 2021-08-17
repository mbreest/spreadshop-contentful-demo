import React from 'react';
import { renderRichText } from '../../lib/rich-text';
const SpgrTeaser = ({ fields }) => {
  const { subline, title, teaser } = fields;
  return (
    <div className="teaser">
      <div className="row">
        <div className="col-12 col-md-8">
          {subline && <p className="teaser__subtitle">{subline}</p>}
          {title && (
            <h1 className="teaser__title<?php echo $titleHasMargin ? ' teaser__title--mb' : '';?>">
              {title}
            </h1>
          )}
          {teaser && <div className="teaser__content">{renderRichText(teaser)}</div>}
        </div>
      </div>
    </div>
  );
};

export default SpgrTeaser;
