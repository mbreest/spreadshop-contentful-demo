import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import Card from './Card';

const Cards = ({ cardData }) => {
  return (
    <div className="w-full">
      <Swiper
        breakpoints={{
          0: {
            slidesPerView: 1,
          },
          768: {
            slidesPerView: 3,
            spaceBetween: 16,
          },
        }}
        watchOverflow={true}>
        {cardData.map((usp, idx) => {
          return (
            <SwiperSlide key={'slide' + idx}>
              <Card
                id={idx}
                title={usp.fields.title}
                details={usp.fields.details}
                hasImg={usp.fields.illustrationNew != undefined}
                imgSrc={usp.fields.illustrationNew.fields.file.url}
              />
            </SwiperSlide>
          );
        })}
      </Swiper>
    </div>
  );
};

export default Cards;
