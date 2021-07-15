import React from 'react';
import { TypeCta } from 'lib/types';
import { Link } from 'components/link';

type CtaProps = {    
    cta?: TypeCta;    
};

export const Cta = ({cta}: CtaProps) => {
    let linkProps;
    if (cta) {
      if ('url' in cta.fields.buttonTarget.fields) {
        linkProps = { href: cta.fields.buttonTarget.fields.url };
      } else if ('slug' in cta.fields.buttonTarget.fields) {
        linkProps = { page: cta.fields.buttonTarget };
      }
    }
  const buttonStyling = {
    fontWeight: 'bold',
    padding: '1rem 3rem',
    borderRadius: '2px',
    display: 'inline-block',
    lineHeight: 1,
    cursor: 'pointer',
    textDecoration: 'none',
    letterSpacing: '0.05rem'
  
    }

  return (
    <>
        {linkProps && cta.fields.buttonType == "Primary" && (
            <Link {...linkProps}>
              <a className="w-auto bg-yellow-600 hover:bg-yellow-500 text-white text-center" style={buttonStyling}>
                {cta.fields.buttonLabel}
              </a>
            </Link>
          )}
        {linkProps && cta.fields.buttonType == "Ghost" && (
            <Link {...linkProps}>
              <a className="w-auto bg-white text-gray-700 border-2 border-gray-700 text-center" style={buttonStyling}>
                {cta.fields.buttonLabel}
              </a>
            </Link>
          )}
    </>
  );
};
