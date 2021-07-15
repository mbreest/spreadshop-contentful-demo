import React from 'react';
import * as Contentful from 'contentful';
import { isAbsolute } from 'path';

export const Container = ({ children}) => {
  
  return (
    <div className="mx-auto w-full lg:w-4/5 m:w-11/12">
      {children}
    </div>
  )
};
