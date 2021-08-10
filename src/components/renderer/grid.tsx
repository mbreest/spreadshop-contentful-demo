/* eslint-disable @typescript-eslint/camelcase */
import * as Contentful from 'contentful';
import { TypeComponentGrid } from 'lib/types';
import { Background } from 'components/Section/background';
import { Cta } from 'components/cta';
import { Link } from 'components/link';

export const Grid = ({ fields }: TypeComponentGrid) => {
  const { title, details, backgroundColor, grid, ctaType, ctaLabel, ctaTarget } = fields;

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
          {details && <div className="leading-relaxed text-lg text-gray-700 py-6">{details}</div>}
        </div>
        <div className="w-full grid justify-center">
          <div className="pt-4 flex flex-row flex-wrap w-full">
            {grid &&
              grid.map(function (gridEntry, idx) {
                if (gridEntry.fields) {
                  let linkProps1;
                  if (gridEntry.fields && gridEntry.fields.linkTarget) {
                    if ('url' in gridEntry.fields.linkTarget.fields) {
                      linkProps1 = { href: gridEntry.fields.linkTarget.fields.url };
                    } else if ('slug' in gridEntry.fields.linkTarget.fields) {
                      linkProps1 = { page: gridEntry.fields.linkTarget };
                    }
                  }

                  return (
                    <div
                      key={'grid-entry-' + idx}
                      className="flex flex-col flex-shrink-0 w-1/2 md:w-1/4  p-4">
                      {gridEntry.fields.illustrationNew &&
                        gridEntry.fields.illustrationNew.fields && (
                          <img src={gridEntry.fields.illustrationNew.fields.file.url} />
                        )}
                      {linkProps1 && (
                        <div className="pt-4">
                          <Link {...linkProps1}>
                            <a className="w-full md:w-auto text-gray-700 font-semibold text-center">
                              {gridEntry.fields.linkText} &gt;
                            </a>
                          </Link>
                        </div>
                      )}
                    </div>
                  );
                }
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
