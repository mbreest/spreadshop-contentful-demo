import React from 'react';
import * as Contentful from 'contentful';
import { isAbsolute } from 'path';

type BackgroundProps = {
  
  background: "White" | "Light" | "Dark"; 
  image: Contentful.EntryFields.Boolean;
  imageOverlay: Contentful.EntryFields.Boolean;
  imageIllustration?: Contentful.EntryFields.Object[]

  children: React.ReactNode;
};

export const Background = ({ background, image, imageOverlay, imageIllustration, children }: BackgroundProps) => {
  const styling = {
    backgroundImage: "url('" + (imageIllustration ? imageIllustration[0].secure_url : "") + "')",
    width: "100%",
    backgroundRepeat: "no-repeat",
    backgroundSize: "cover",
    backgroundColor: background == "White" ? 'white' : background == "Light" ? "#F2F2F2" : "dark"
  }

  
  return (
    <div className="mx-auto max-w-screen-xl px-6 py-10 bg-right" style={styling}>
      {children}
    </div>
  )
};
