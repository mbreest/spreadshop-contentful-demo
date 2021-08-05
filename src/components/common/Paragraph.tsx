import React from 'react';
import classNames from 'classnames';

const Paragraph = ({ paragraphs }) => {
  console.log('p', paragraphs);
  return (
    <p>
      {paragraphs.map((p) => {
        const classes = classNames({
          p: true,
          'p-italic': p.marks.includes('italic'),
          'p-underline': p.marks.includes('underline'),
        });
        return p.marks.includes('bold') ? (
          <strong className={classes}>{p.value}</strong>
        ) : (
          <span className={classes}>{p.value}</span>
        );
      })}
    </p>
  );
};

export default Paragraph;
