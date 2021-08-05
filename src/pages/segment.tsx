/* eslint-disable @typescript-eslint/camelcase */
import React from 'react';
import cookie from 'cookie';

type SegmentProps = {
  segment: string;
};

export default function Segment({ segment }: SegmentProps) {
  return (
    <div className="w-full pb-16">
      <div className="p-32 grid justify-items-center">
        <h1 className="pl-2 font-bold">Select the customer segment:</h1>
        <div className="flex ">
          {segment == 'default' && (
            <a
              href="/segment?segment=default"
              className="w-24 bg-yellow-600 hover:bg-yellow-500 text-white text-center p-2 m-2 font-bold">
              Default
            </a>
          )}
          {segment != 'default' && (
            <a
              href="/segment?segment=default"
              className="w-24 bg-white hover:bg-white border-black border-2 text-black text-center p-2 m-2 font-bold">
              Default
            </a>
          )}
          {segment == 'men' && (
            <a
              href="/segment?segment=men"
              className="w-24 bg-yellow-600 hover:bg-yellow-500 text-white text-center p-2 m-2 font-bold">
              Men
            </a>
          )}
          {segment != 'men' && (
            <a
              href="/segment?segment=men"
              className="w-24 bg-white hover:bg-white border-black border-2 text-black text-center p-2 m-2 font-bold">
              Men
            </a>
          )}
          {segment == 'women' && (
            <a
              href="/segment?segment=women"
              className="w-24 bg-yellow-600 hover:bg-yellow-500 text-white text-center p-2 m-2 font-bold">
              Women
            </a>
          )}
          {segment != 'women' && (
            <a
              href="/segment?segment=women"
              className="w-24 bg-white hover:bg-white border-black border-2 text-black text-center p-2 m-2 font-bold">
              Women
            </a>
          )}
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
