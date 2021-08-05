import React from 'react';
import { CommonType } from '../../lib/types/CommonType';
import H2 from './H2';
import H3 from './H3';
import Paragraph from './Paragraph';

const CommonTag = ({ type, content }) => {
  console.log('c', content);
  return (() => {
    switch (type) {
      case CommonType.HEADING2:
        return <H2 title={content[0].value} />;
      case CommonType.HEADING3:
        return <H3 title={content[0].value} />;
      case CommonType.PARAGRAPH:
        return <Paragraph paragraphs={content} />;
      default:
        return null;
    }
  })();
};

export default CommonTag;
