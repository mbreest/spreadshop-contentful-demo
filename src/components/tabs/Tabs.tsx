import React from 'react';
import CommonTag from '../common/CommonTag';
const Tabs = ({ fields }) => {
  const { tab } = fields;
  console.log('t', fields);

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
            {t.fields.description.content.map((tag, index) => (
              <CommonTag key={index} type={tag.nodeType} content={tag.content} />
            ))}
          </div>
        ))}
      </div>
    </div>
  );
};

export default Tabs;
