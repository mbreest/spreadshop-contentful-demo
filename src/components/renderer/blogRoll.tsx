/* eslint-disable @typescript-eslint/camelcase */
import * as Contentful from 'contentful';
import { Link } from 'components/link';
import { TypeBlogRoll, TypePageBlogPost } from 'lib/types';
import { Background } from 'components/Section/background';
import { Cta } from 'components/cta';

export const BlogRoll = ({ fields }: TypeBlogRoll) => {
  const { title, details, backgroundColor, category, ctaType, ctaLabel, ctaTarget, topPosts } =
    fields;

  return (
    <Background
      {...{
        background: backgroundColor,
        image: false as Contentful.EntryFields.Boolean,
        imageOverlay: false as Contentful.EntryFields.Boolean,
      }}>
      <div className="w-full flex flex-col">
        <div className="w-full grid justify-items-center p-8">
          <h2 className="h0 pt-4 text-3xl font-medium leading-tight text-gray-900">{title}</h2>
          <div className="leading-relaxed text-lg text-gray-700 py-6">{details}</div>
        </div>
        <div className="w-full grid justify-center">
          <div className="flex flex-row flex-nowrap justify-start overflow-x-scroll">
            {topPosts.map(function (page, idx) {
              const content = page.fields.content as TypePageBlogPost;
              return (
                <div
                  key={'article-' + idx}
                  className="pl-4 pr-4 pb-4 flex-shrink-0 w-full md:w-1/3">
                  <img src={content.fields.illustrationNew.fields.file.url} />
                  <div className="font-bold">{page.fields.title}</div>
                  <Link {...{ page: page }}>
                    <a className="text-yellow-600 underline">Weiterlesen</a>
                  </Link>
                </div>
              );
            })}
          </div>
        </div>

        <div className="flex w-full justify-center pt-8 pb-8">
          <Cta {...{ ctaType, ctaLabel, ctaTarget }} />
        </div>
      </div>
    </Background>
  );
};
