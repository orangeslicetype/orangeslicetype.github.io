import React, { memo } from 'react';
import styled, { css } from 'styled-components';
import { useSliderDispatch, useSliderState } from '../context/slider';

import icoPrev from '../images/ico-prev@2x.png';
import icoNext from '../images/ico-next@2x.png';
import icoClose from '../images/ico-close@2x.png';

const HeaderBlock = styled.header`
  position: fixed;
  top: 20px;
  left: 20px;
`;

const Paragraph = styled.p`
  margin-top: 0;
  margin-bottom: 0;
  color: #0000ff;
  font-size: 14px;
  line-height: 1.29;

  a {
    text-decoration: underline;
  }

  & + & {
    margin-top: 18px;
  }
`;

const Button = styled.button`
  padding: 2px;
  color: #0000ff;
  border: 1px solid #00f;
  background: none;
  outline: none;
  cursor: pointer;

  &:hover,
  &:active {
    background-color: #00f;
    color: #fff;
  }

  ${(props) =>
    props.active &&
    css`
      background-color: #00f;
      color: #fff;
    `}
`;

const Address = styled.address`
  margin-top: 18px;
  color: #0000ff;
  font-size: 14px;
  line-height: 1.29;
  font-style: normal;
`;


const SliderController = styled.div`
  margin-top: 50px;

  button {
    position: relative;
    width: 50px;
    height: 50px;
    background: none;
    border: 1px solid #00f;
    outline: none;
    cursor: pointer;

    &:after {
      content: '';
      position: absolute;
      top: 50%;
      left: 50%;
      transform: translate(-50%, -50%);
      background-repeat: no-repeat;
      background-position: 50% 50%;
      background-size: contain;
    }
  }

  button + button {
    margin-left: -1px;
  }

  .prev {
    &:after {
      width: 18px;
      height: 17px;
      background-image: url(${icoPrev});
    }
  }
  .next {
    &:after {
      width: 18px;
      height: 17px;
      background-image: url(${icoNext});
    }
  }
  .close {
    &:after {
      width: 19px;
      height: 17px;
      background-image: url(${icoClose});
    }
  }
`;

const Header = () => {
  const { visible } = useSliderState();
  const dispatch = useSliderDispatch();

  const goPrev = () => {
    console.log('prev');
  };

  const goNext = () => {
    console.log('next');
  };

  const toggleSlider = () => {
    dispatch({
      type: 'TOGGLE',
    });
  };

  return (
    <HeaderBlock>
      <Paragraph>
        Orange Slice Type <br />
        is an Amsterdam based type foundry <br />
        founded by Wooseok Jang in 2018. <br />
        The web version of the catalogue is now in <br />
        development together with webshop. <br />
        Both are hopefully going to be live before <br />
        COVID-19 pandemic ends. You can see a <br />
        sneak preview of our typeface library and <br />
        typefaces in use{' '}
        <Button type='button' active={visible ? 1 : 0} onClick={toggleSlider}>
          HERE
        </Button>
      </Paragraph>
      <Paragraph>
        If you ever have any questions about <br />
        licensing, research, custom work, or <br />
        some interesting idea you have, <br />
        please feel free to get in touch.
      </Paragraph>
      <Paragraph>
        <a
          href='mailto:mail@orangeslicetype.com'
          target='_blank'
          rel='noopener noreferrer'
        >
          email
        </a>
        ,{' '}
        <a
          href='https://instagram.com/orangeslicetype'
          target='_blank'
          rel='noopener noreferrer'
        >
          instagram
        </a>
        ,{' '}
        <a
          href='https://twitter.com/orangeslicetype'
          target='_blank'
          rel='noopener noreferrer'
        >
          twitter
        </a>
      </Paragraph>
      <Address>
        Herenmarkt 93D <br />
        1013 EC Amsterdam <br />
        The Netherlands
      </Address>
      {visible && (
        <SliderController>
          <button className='prev' onClick={goPrev}>
            <span className='sr-only'>Previous</span>
          </button>
          <button className='next' onClick={goNext}>
            <span className='sr-only'>Next</span>
          </button>
          <button className='close' onClick={toggleSlider}>
            <span className='sr-only'>Close</span>
          </button>
        </SliderController>
      )}
    </HeaderBlock>
  );
};

export default memo(Header);