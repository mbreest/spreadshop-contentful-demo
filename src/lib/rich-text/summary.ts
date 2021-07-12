import get from 'lodash/get';
import truncate from 'lodash/truncate';
import { documentToPlainTextString } from '@contentful/rich-text-plain-text-renderer';

import { ComponentContentTypes } from 'lib/constants';

export const getSummary = (content: unknown[] = []): string => {
  return truncate('', { length: 70 });
};
