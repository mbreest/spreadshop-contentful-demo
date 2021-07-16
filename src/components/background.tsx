import React from 'react';
import * as Contentful from 'contentful';
import { isAbsolute } from 'path';

type BackgroundProps = {
  background: 'White' | 'Light' | 'Dark';
  image: Contentful.EntryFields.Boolean;
  imageOverlay: Contentful.EntryFields.Boolean;
  overlayColor?: Contentful.EntryFields.Symbol;
  imageIllustration?: Contentful.EntryFields.Object[];

  children: React.ReactNode;
};

export const Background = ({
  background,
  image,
  imageOverlay,
  overlayColor,
  imageIllustration,
  children,
}: BackgroundProps) => {
  const styling = {
    backgroundImage: "url('" + (imageIllustration ? imageIllustration[0].secure_url : '') + "')",
    width: '100%',
    backgroundRepeat: 'no-repeat',
    backgroundSize: 'cover',
    backgroundColor: background == 'White' ? 'white' : background == 'Light' ? '#F2F2F2' : 'dark',
  } as React.CSSProperties;
  const overlay = {
    backgroundColor: overlayColor !== '' ? overlayColor : 'transparent',
    display: imageOverlay ? 'block' : 'none',
    opacity: imageOverlay ? 0.7 : 0,
    mixBlendMode: 'soft-light',
  } as React.CSSProperties;
  const displayOverlay = imageOverlay ? (
    <div className="img-overlay absolute top-0 right-0 w-full h-full" style={overlay}></div>
  ) : null;

  return (
    <div className="relative" style={styling}>
      {displayOverlay}
      <div className="relative sprd-container mx-auto py-9 h-full">{children}</div>
    </div>
  );
};
