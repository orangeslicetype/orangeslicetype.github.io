import React, { memo, useState, useEffect, useMemo } from 'react';
import styled, { keyframes, css } from 'styled-components';
import useType from '../hooks/useType';
import { patterns } from '../data';
import { getRandom } from '../lib';

const MinZoom = keyframes`
  0% {
    transform: scale(0.5);
  }
  55% {
    transform: scale(0.44);
  }
  70% {
    transform: scale(0.49);
  }
  85% {
    transform: scale(0.45);
  }
  100% {
    transform: scale(0.5);
  }
`;

const MaxZoom = keyframes`
  0% {
    transform: scale(8);
  }
  55% {
    transform: scale(8.8);
  }
  70% {
    transform: scale(8.1);
  }
  85% {
    transform: scale(8.5);
  }
  100% {
    transform: scale(8);
  }
`;

const Wrapper = styled.div`
  position: fixed;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
  overflow: hidden;
  transform: translateZ(0) scale(1);
  backface-visibility: hidden;
`;

const Grid = styled.div.attrs((props) => ({
  style: {
    transform: `scale(${props.zoom.toPrecision(3)})`,
  },
}))`
  display: grid;
  height: 100%;
  width: ${(props) => `${props.columns * 25}px`};
  margin-left: auto;
  margin-right: auto;
  grid-template-columns: 1fr 25px 1fr 1fr;
  justify-content: stretch;
  align-content: center;
  justify-items: stretch;
  align-items: stretch;

  ${(props) =>
    props.zoom >= 8
      ? css`
          animation: ${MaxZoom} ease-in-out 1s;
        `
      : props.zoom <= 0.5
      ? css`
          animation: ${MinZoom} ease-in-out 1s;
        `
      : ``};
`;

const Block = styled.div`
  display: grid;
  grid-template-columns: ${props=> `repeat(${props.col}, minmax(25px, 1fr))` };
  grid-template-rows: ${props=> `repeat(${props.row}, minmax(25px, 1fr))` };
`;

const BlockItem = styled.div`
  background-position: center;
  background-size: cover;
  background-repeat: no-repeat;
  background-image: ${(props) =>
    `url(
      ${process.env.PUBLIC_URL}/images/${props.gray * 10}_${props.ptrn}.svg
    )`};
`;

const Info = styled.div`
  position: fixed;
  bottom: 18px;
  left: 0;
  right: 0;
  color: #0000ff;
  font-size: 14px;
  line-height: 1.29;
  text-align: center;
  z-index: 20;

  .name {
    margin-top: 18px;
    cursor: pointer;
  }
`;

const MIN_ZOOM_RANGE = 0.5;
const MAX_ZOOM_RANGE = 8;

const makeBlock = (block) => {
  let module = [];

  for (let i = 0; i < block.y; i++) {
    for (let j = 0; j < block.x; j++) {
      let index = `${i}_${j}`;
      const gray = block['value'][i][j];
      const patternType = getRandom(0, patterns[gray].length);
      module.push(
        <BlockItem key={index} gray={gray} ptrn={patterns[gray][patternType]} />
      );
    }
  }

  return (
    <Block row={block.y} col={block.x}>
      {module}
    </Block>
  );
};


const Type = () => {
  const [zoom, setZoom] = useState(1);
  const { type, changeType } = useType();

  useEffect(() => {
    function onMouseWheel(e) {
      e.preventDefault();
      window.requestAnimationFrame(function () {
        let newZoom = zoom + e.deltaY * -0.005;
        setZoom(Math.min(Math.max(MIN_ZOOM_RANGE, newZoom), MAX_ZOOM_RANGE));
      });
    }

    document.addEventListener('wheel', onMouseWheel, { passive: false });
    return () => {
      document.removeEventListener('wheel', onMouseWheel);
    };
  }, [zoom]);

  const BlockO = useMemo(() => makeBlock(type['o']), [type]);
  const BlockS = useMemo(() => makeBlock(type['s']), [type]);
  const BlockT = useMemo(() => makeBlock(type['t']), [type]);

  return (
    <Wrapper>
      <Grid columns={type.width} zoom={zoom}>
        {BlockO}
        <div className='gap'></div>
        {BlockS}
        {BlockT}
      </Grid>
      <Info>
        <div className='zoom'>{Math.floor(zoom * 100)} %</div>
        <div className='name' onClick={changeType}>
          {type.name}
        </div>
      </Info>
    </Wrapper>
  );
};

export default memo(Type);