import React from 'react';
import noop from 'lodash/noop';
import { NodeRenderer } from '@contentful/rich-text-react-renderer';

export const EmbeddedAsset = (({
  data: {
    target: { sys, fields },
  },
}) => {
  

  // Ignore all other asset types, e.g. PDFs, other docs etc.
  return null;
}) as NodeRenderer;
