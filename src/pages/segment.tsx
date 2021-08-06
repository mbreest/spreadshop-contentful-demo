/* eslint-disable @typescript-eslint/camelcase */
import React from 'react';
import cookie from 'cookie';
import classNames from 'classnames';

type SegmentProps = {
  segment: string;
};

const segments = [
  {
    title: 'Default',
    slug: 'default',
  },
  {
    title: 'Men',
    slug: 'men',
  },
  {
    title: 'Women',
    slug: 'women',
  },
  {
    title: 'Accessoires',
    slug: 'accessoires',
  },
];

export default function Segment({ segment }: SegmentProps) {
  return (
    <div className="w-full pb-16">
      <div className="p-32 grid justify-items-center">
        <h1 className="pl-2 font-bold">Select the customer segment:</h1>
        <div className="flex ">
          {segments.map((seg) => {
            const classes = classNames({
              'w-32 text-center p-2 m-2 font-bold': true,
              ' bg-yellow-600 hover:bg-yellow-500 text-white': seg.slug === segment,
              'bg-white hover:bg-white border-black border-2 text-black': seg.slug !== segment,
            });
            return (
              <a key={seg.slug} href={`/segment?segment=${seg.slug}`} className={classes}>
                {seg.title}
              </a>
            );
          })}
        </div>
      </div>
    </div>
  );
}

export async function getServerSideProps({ params, query, locale, req, res }) {
  let segment: string;

  if (query.segment) {
    segment = query.segment;
    res.setHeader(
      'Set-Cookie',
      cookie.serialize('segment', segment, {
        httpOnly: true,
        maxAge: 60 * 60 * 24,
        sameSite: 'strict',
        path: '/',
      })
    );
  } else if (req.cookies.segment) {
    segment = req.cookies.segment;
  } else {
    segment = 'default';
    res.setHeader(
      'Set-Cookie',
      cookie.serialize('segment', 'default', {
        httpOnly: true,
        maxAge: 60 * 60 * 24,
        sameSite: 'strict',
        path: '/',
      })
    );
  }

  return {
    props: { segment },
  };
}
