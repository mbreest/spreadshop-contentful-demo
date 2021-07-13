/* eslint-disable @typescript-eslint/camelcase */
import { TypeSingleAsset } from 'lib/types';
import { Background } from 'components/background';
import { Cta } from 'components/cta';

export const SingleAsset = ({ fields }: TypeSingleAsset) => {
  const { title, details, background, illustrations, cta } = fields;

  let linkProps;
  if (cta) {
    if ('url' in cta.fields.buttonTarget.fields) {
      linkProps = { href: cta.fields.buttonTarget.fields.url };
    } else if ('slug' in cta.fields.buttonTarget.fields) {
      linkProps = { page: cta.fields.buttonTarget };
    }
  }

  return (
    <Background {...background.fields}>
      <div className="mx-auto flex flex-wrap flex-col md:flex-row items-start">
        <div className="flex flex-col w-full justify-center items-start">
          <h1 className="pt-4 text-3xl font-medium leading-tight text-gray-900">{title}</h1>
          <div className="leading-relaxed text-lg text-gray-700 py-6">{details}</div>
          {illustrations &&
            illustrations.map(function (illustration, idx) {
              return <img key={idx} src={illustration.secure_url} />;
            })}
          <Cta {...{cta}}/>
        </div>
      </div>
    </Background>
  );
};
