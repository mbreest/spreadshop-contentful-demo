import React from 'react';
import { TypeExternalPageFields, TypePageFields } from 'lib/types';
import { Link } from 'components/link';
import { useRouter } from 'next/router';
import * as Contentful from 'contentful';

type CtaProps = {
  ctaType?: 'Primary' | 'Ghost';
  ctaLabel?: string;
  ctaTarget?: Contentful.Entry<TypePageFields | TypeExternalPageFields>;
};

export const Cta = ({ ctaType, ctaLabel, ctaTarget }: CtaProps) => {
  const { asPath: currentPath } = useRouter();

  let linkProps;

  if (ctaTarget) {
    if (typeof ctaTarget === 'string') {
      linkProps = { href: currentPath };
    } else {
      if ('url' in ctaTarget.fields) {
        linkProps = { href: ctaTarget.fields.url };
      } else if ('slug' in ctaTarget.fields) {
        linkProps = { page: ctaTarget };
      }
    }
  }
  const buttonStyling = {
    fontWeight: 700,
    padding: '1rem 3rem',
    borderRadius: '2px',
    display: 'inline-block',
    lineHeight: 1,
    cursor: 'pointer',
    textDecoration: 'none',
    letterSpacing: '0.05rem',
  };

  return (
    <>
      {linkProps && ctaLabel && ctaType == 'Primary' && (
        <Link {...linkProps}>
          <a
            className="w-auto bg-yellow-600 hover:bg-yellow-500 text-white text-center"
            style={buttonStyling}>
            {ctaLabel}
          </a>
        </Link>
      )}
      {linkProps && ctaLabel && ctaType == 'Ghost' && (
        <Link {...linkProps}>
          <a
            className="w-auto bg-white text-gray-700 border-2 border-gray-700 text-center"
            style={buttonStyling}>
            {ctaLabel}
          </a>
        </Link>
      )}
    </>
  );
};
