/* eslint-disable @typescript-eslint/camelcase */
import { TypeCarousel } from 'lib/types';
import { Background } from 'components/background';
import { Cta } from 'components/cta';

export const Carousel = ({ fields }: TypeCarousel) => {
  const { title, details, background, categories, cta } = fields;
 
  return (
    <Background {...background.fields}>
      <div className="w-full flex flex-col">
        <div className="w-full grid justify-items-center">
          <h1 className="pt-4 text-3xl font-medium leading-tight text-gray-900">{title}</h1>
          <div className="text-lg text-gray-700 py-6">{details}</div>
        </div>
        
          {categories.length == 1 &&
            <>
              {categories.map(function (category, idx) {
              return (                
                <div key={"category-" + idx} className="pt-4 flex flex-row flex-nowrap justify-start overflow-x-scroll">
                  {category.fields.illustrations.map(function (illustration, idx1) {
                    return (
                      <div key={"category-" + idx} className="flex flex-shrink-0 w-60 p-2">
                        <img key={idx1} src={illustration.secure_url}/>
                      </div>
                    )
                  })}
                </div>
              );
            })}
            </>
          }
          <div>          
            {categories.length > 1 &&
              categories.map(function (category, idx) {
                return (          
                  <>
                    <div className="pl-4 pt-4">{category.fields.title}</div>      
                    <div key={"category-" + idx} className="flex flex-row flex-nowrap w-full justify-start overflow-x-scroll">                  
                      {category.fields.illustrations.map(function (illustration, idx1) {
                        return (
                          <div key={"category-" + idx} className="flex flex-shrink-0 w-60 p-2">
                            <img key={idx1} src={illustration.secure_url} />;
                          </div>
                        )
                      })}
                    </div>
                  </>
                );
              })}        
            </div> 
      </div>
      <div className="flex w-full justify-center pt-8 pb-8">     
        <Cta {...{cta}}/>        
      </div>
    </Background>
  );
};
