import React from 'react';
import * as Contentful from 'contentful';
import { isAbsolute } from 'path';
import SectionBackground from './SectionBackground';

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
  const sectionStyle = {
    backgroundColor: background == 'White' ? 'white' : background == 'Light' ? '#F2F2F2' : 'dark',
  } as React.CSSProperties;

  const backgroundStyle = {
    backgroundImage: "url('" + (imageIllustration ? imageIllustration[0].secure_url : '') + "')",
  } as React.CSSProperties;

  const overlayStyle = {
    backgroundColor: overlayColor !== '' ? overlayColor : 'transparent',
    display: imageOverlay ? 'block' : 'none',
    opacity: imageOverlay ? 0.7 : 0,
    mixBlendMode: 'soft-light',
  } as React.CSSProperties;

  return (
    <section className="relative" style={sectionStyle}>
      {image ? (
        <SectionBackground overlayStyles={overlayStyle} backgroundStyles={backgroundStyle} />
      ) : null}
      <div className="relative sprd-container mx-auto py-9 h-full">{children}</div>
    </section>
  );
};
