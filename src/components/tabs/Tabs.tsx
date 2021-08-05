import React from 'react';
import { isRichText, renderRichText } from '../../lib/rich-text';
const Tabs = ({ fields }) => {
  const { tab } = fields;

  return (
    <div className="tabs">
      <div className="tab__labels">
        {tab.map((t) => (
          <button key={t.fields.title} className="tab__label">
            {t.fields.title}
          </button>
        ))}
      </div>
      <div className="tab__descriptions">
        {tab.map((t) => (
          <div key={t.title} className="tab__description">
            {t.fields.description.content.map((content, index) => {
              return isRichText(content) ? renderRichText(content) : content;
            })}
          </div>
        ))}
      </div>
    </div>
  );
};

export default Tabs;
