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
    <div style={styling}>
      <div className="sprd-container mx-auto py-9 h-full">
        {children}
      </div>
    </div>
  )
};
