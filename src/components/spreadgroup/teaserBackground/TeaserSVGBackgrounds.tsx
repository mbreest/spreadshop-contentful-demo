import React from 'react';
import JopOpeningsBackground from './JopOpeningsBackground';

const TeaserSVGBackgrounds = ({ svg }) => {
  return (() => {
    switch (svg) {
      case 'jobOpenings':
        return <JopOpeningsBackground />;
      default:
        return null;
    }
  })();
};

export default TeaserSVGBackgrounds;
