/* eslint-disable @typescript-eslint/camelcase */
import { Link } from 'components/link';

import { TypeBlogRoll, TypePageBlogPost } from 'lib/types';
import { Background } from 'components/background';
import { Cta } from 'components/cta';

export const BlogRoll = ({ fields }: TypeBlogRoll) => {
  const { title, details, background, category, cta, topPosts } = fields;

  return (
    <Background {...background.fields}>
      <div className="w-full flex flex-col">
        <div className="w-full grid justify-items-center p-8">
          <h2 className="h0 pt-4 text-3xl font-medium leading-tight text-gray-900">{title}</h2>
          <div className="leading-relaxed text-lg text-gray-700 py-6">{details}</div>
        </div>
        <div className="w-full flex flex-row">
          {topPosts.map(function (page, idx) {
            const content = page.fields.content as TypePageBlogPost;
            return (
              <div key={'article-' + idx} className="pr-4 pb-4 md:w-1/3">
                <img src={content.fields.illustration[0].secure_url} />
                <div className="font-bold">{page.fields.title}</div>
                <Link {...{ page: page }}>
                  <a className="text-yellow-600 underline">Weiterlesen</a>
                </Link>
              </div>
            );
          })}
        </div>

        <div className="flex w-full justify-center pt-8 pb-8">
          <Cta {...{ cta }} />
        </div>
      </div>
    </Background>
  );
};
