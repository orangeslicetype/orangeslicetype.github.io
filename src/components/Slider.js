import React, { memo, useState, useEffect } from 'react';
import styled, { css } from 'styled-components';
import SwiperCore, { A11y, EffectFade } from 'swiper';
import { Swiper, SwiperSlide } from 'swiper/react';
import { useSliderDispatch, useSliderState } from '../context/slider';
import useWindowSize from '../hooks/useWindowSize';
import { images } from '../data';

import 'swiper/swiper-bundle.min.css';

SwiperCore.use([A11y, EffectFade]);

const Background = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
`;

const StyledSwiper = styled(Swiper)`
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  width: 100%;
  overflow: hidden;

  .swiper-wrapper,
  .swiper-slide {
    height: 100%;
  }
`;

const Inner = styled.div`
  position: relative;
  display: inline-block;
  left: 50%;
  top: 50%;
  transform: translate(-50%, -50%);
`;

const Image = styled.div`
  position: relative;

  img {
    position: relative;
    display: block;
    margin: 0 auto;
    max-width: 100%;
    max-height: 100%;
    ${({ size }) =>
      size.width > size.height
        ? css`
            height: ${Math.floor(size.height * 0.664)}px;
            width: auto;
          `
        : css`
            width: ${Math.floor(size.width * 0.74)}px;
            height: auto;
          `}
  }
`;

const Caption = styled.div`
  margin-top: 12px;
  font-size: 14px;
  line-height: 1.29;
  color: #ccc;
`;

const params = {
  spaceBetween: 0,
  navigation: false,
  pagination: false,
  slidesPerView: 1,
  autoHeight: true,
  loop: true,
  effect: 'fade',
  fadeEffect: {
    crossFade: true,
  },
};

const Slider = () => {
  const [swiper, setSwiper] = useState(null);
  const { visible } = useSliderState();
  const dispatch = useSliderDispatch();
  const windowSize = useWindowSize();

  useEffect(() => {
    if (swiper) {
      dispatch({
        type: 'SET',
        slider: swiper,
      });
    }
  }, [dispatch, swiper]);

  if ( !visible ) return false;

  return (
    <Background>
      <StyledSwiper {...params} onSwiper={setSwiper}>
        {images.length > 0 &&
          images.map((item) => (
            <SwiperSlide key={item.id}>
              <Inner>
                <Image size={windowSize}>
                  <img
                    src={`${process.env.PUBLIC_URL}/images/${item.image}`}
                    alt={item.caption}
                  />
                </Image>
                {item.caption && <Caption>{item.caption}</Caption>}
              </Inner>
            </SwiperSlide>
          ))}
      </StyledSwiper>
    </Background>
  );
};

export default memo(Slider);