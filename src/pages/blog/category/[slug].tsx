/* eslint-disable @typescript-eslint/camelcase */
import React from 'react';

type BlogCategoryProps = {};

export default function BlogCategory() {
  return <div className="w-full pb-16">Blog Category</div>;
}

export async function getServerSideProps({ params, query, locale }) {
  return {
    props: {},
  };
}
